---
icon: image
description: Sample texture data using UV coordinates
---

# Texture Sampling

Texture sampling nodes read color and value data from texture assets using UV coordinates stored on points. This system uses a **factory pattern** where Tex Param sub-nodes define what and how to sample, while the main nodes handle the actual sampling or texture loading.

## Architecture

```
                    ┌─────────────────┐
                    │   Tex Param     │ ← Defines: material parameter name,
                    │   (Sub-node)    │   output attribute, channels, scale
                    └────────┬────────┘
                             │ Factory Data
              ┌──────────────┼──────────────┐
              ↓              ↓              ↓
    ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
    │ Get Texture Data│ │  Sample Texture │ │ Sample Line     │
    │                 │ │                 │ │ Trace           │
    │ Extracts texture│ │ Samples at UV   │ │ Can extract     │
    │ paths from      │ │ coordinates     │ │ texture params  │
    │ materials       │ │                 │ │ from hit mats   │
    └─────────────────┘ └─────────────────┘ └─────────────────┘
```

## Workflow Overview

### Material-Based Workflow

When you have materials and want to sample their textures:

1. **Get material references** (via Sample Line Trace, Get Actor Data, etc.)
2. **Extract texture paths** using Get Texture Data with Tex Params
3. **Sample textures** using Sample Texture at UV coordinates

```
Points with MaterialPath    Tex Params          Get Texture Data
        │                       │                      │
        └───────────────────────┼──────────────────────┘
                                │
                                ↓
                    ┌─────────────────────┐
                    │ Points with         │
                    │ TextureID attribute │
                    │ + Texture Data      │
                    └──────────┬──────────┘
                               │
                               ↓
                    ┌─────────────────────┐
                    │   Sample Texture    │
                    │   (at UV coords)    │
                    └──────────┬──────────┘
                               │
                               ↓
                    Points with sampled values
```

### Direct Texture Workflow

When you have texture data directly:

1. **Create Texture Data** nodes for each texture asset
2. **Sample textures** using Sample Texture at UV coordinates

## Nodes

| Node | Purpose |
|------|---------|
| [Tex Param](./tex-param.md) | Sub-node defining texture parameter extraction and sampling configuration |
| [Get Texture Data](./get-texture-data.md) | Extract texture paths from materials and build PCG Texture Data objects |
| [Sample Texture](./sample-texture.md) | Sample texture values at point UV coordinates |

## Key Concepts

### Tex Param Factory Pattern

Tex Param nodes are **factories** that produce configuration data consumed by parent nodes. Each Tex Param defines:

- **Material Parameter Name**: Which texture parameter to extract from materials
- **Output Attribute**: Where to write sampled values
- **Channel Selection**: Which RGBA channels to sample
- **Output Type**: Data type of the output (auto-detected or explicit)
- **Scale**: Multiplier applied to sampled values

Multiple Tex Params can connect to a single parent node, allowing simultaneous extraction of multiple texture parameters (BaseColor, Normal, Roughness, etc.).

### Texture ID Attributes

The system uses **texture ID attributes** (containing `FSoftObjectPath` strings) to link points to textures:

1. Get Texture Data writes texture paths to attributes (e.g., `BaseColorId`)
2. Sample Texture reads these attributes to know which texture to sample per point
3. This enables **per-point texture variation** - different points can sample different textures

### Channel Selection

Texture sampling supports flexible channel selection:

| Selection | Output Type (Auto) | Use Case |
|-----------|-------------------|----------|
| R only | Double | Height maps, masks |
| RG | Vector2 | Flow maps, 2D data |
| RGB | Vector | Color without alpha |
| RGBA | Vector4 | Full color with alpha |
| Any single | Double | Individual channel extraction |

### UV Coordinates

Points must have UV coordinates for texture sampling. These can come from:

- **Sample Line Trace**: Outputs UV coordinates at hit locations
- **Custom attributes**: Any Vector2D attribute storing UVs
- **Computed values**: Generated procedurally based on position

## Example: Terrain Material Sampling

**Goal**: Sample terrain material textures to drive point properties.

```
1. Scatter points on terrain
2. Sample Line Trace down to get:
   - Hit location
   - Material reference
   - UV coordinates
3. Tex Param nodes for each texture:
   - BaseColor → ColorId
   - Roughness → RoughnessId
4. Get Texture Data extracts texture paths
5. Sample Texture reads values at UVs
6. Use sampled values for:
   - Point colors
   - Density filtering
   - Instance variation
```

---

📦 **Module**: `PCGExElementsSampling`
