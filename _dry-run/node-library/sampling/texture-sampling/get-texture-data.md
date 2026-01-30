---
icon: image
description: 'In editor :: PCGEx | Get Texture Data'
---

# Get Texture Data

Create **PCG Texture Data objects** from material or texture asset paths.

## Overview

This node reads texture or material asset paths from point attributes and creates PCG Texture Data objects. When using materials, it extracts texture references using connected Tex Param sub-nodes. The output Texture Data can be consumed by Sample Texture or other PCG nodes.

## Key Behavior

```
    Points with MaterialPath          Tex Params
    ┌────────────────────┐            ┌──────────────────┐
    │ MaterialPath:      │            │ Param: BaseColor │
    │   /Path/Mat1       │            │ Output: ColorId  │
    │   /Path/Mat2       │            └──────────────────┘
    │   /Path/Mat1       │            ┌──────────────────┐
    └─────────┬──────────┘            │ Param: Roughness │
              │                       │ Output: RoughId  │
              │                       └────────┬─────────┘
              │                                │
              ↓                                ↓
    ┌─────────────────────────────────────────────────────┐
    │                 Get Texture Data                    │
    │                                                     │
    │  1. Load materials from paths                       │
    │  2. Extract BaseColor texture → ColorId attribute   │
    │  3. Extract Roughness texture → RoughId attribute   │
    │  4. Build PCG Texture Data for unique textures      │
    └─────────────────────────────────────────────────────┘
              │                                │
              ↓                                ↓
    Points with texture IDs          Texture Data objects
    ┌────────────────────┐           ┌──────────────────┐
    │ ColorId: /Tex1     │           │ PCG Texture Data │
    │ RoughId: /Tex3     │           │   - Tex1         │
    │ ColorId: /Tex2     │           │   - Tex2         │
    │ RoughId: /Tex4     │           │   - Tex3         │
    └────────────────────┘           │   - Tex4         │
                                     └──────────────────┘
```

**Deduplication**: Only unique textures become Texture Data objects, regardless of how many points reference them.

## Use Cases

- **Material texture extraction**: Extract specific texture parameters from materials
- **Dynamic texture loading**: Load textures based on point data
- **Texture data preparation**: Bridge between asset references and texture sampling
- **Per-instance textures**: Different textures per point based on hit material

## Inputs

| Pin | Type | Required | Description |
|-----|------|----------|-------------|
| **In** | Points | Yes | Points with asset path attributes |
| **Tex Params** | Tex Params | Conditional | Required when Source Type is Material Path |
| **Point Filters** | Filters | No | Filter which points get processed |

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Out** | Points | Points with texture ID attributes written per Tex Param |
| **Texture Data** | Texture Data | PCG Texture Data objects for each unique texture |

## Settings

### Source

<details>
<summary><strong>Source Type</strong> <code>EPCGExGetTexturePathType</code></summary>

What type of asset path is stored in the source attribute.

| Option | Behavior |
|--------|----------|
| **Texture Path** | Attribute contains direct texture asset paths |
| **Material Path** | Attribute contains material paths; textures extracted via Tex Params |

Default: `Material Path`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Source Attribute Name</strong> <code>FName</code></summary>

Attribute containing the asset path (material or texture depending on Source Type).

Default: `AssetPath`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Output Texture Ids</strong> <code>bool</code></summary>

Write extracted texture paths to point attributes as defined by each Tex Param's Texture ID Attribute Name.

Default: `true`

⚡ PCG Overridable
📋 Visible when: `Source Type == Material Path`

</details>

<details>
<summary><strong>Build Texture Data</strong> <code>bool</code></summary>

Create PCG Texture Data objects for each unique texture found.

Default: `true`

⚡ PCG Overridable
📋 Visible when: `Source Type == Material Path`

</details>

### Data Settings

These settings configure the generated PCG Texture Data objects:

<details>
<summary><strong>Filter</strong> <code>EPCGExTextureFilter</code></summary>

Texture sampling filter method for generated Texture Data.

| Option | Behavior |
|--------|----------|
| **Point** | Nearest-neighbor sampling (takes exact texel value) |
| **Bilinear** | Interpolates between four nearest texels (smoother) |

Default: `Bilinear`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Transform</strong> <code>FTransform</code></summary>

Surface transform applied to texture data. Affects how world positions map to texture coordinates.

Default: Identity

⚡ PCG Overridable

</details>

<details>
<summary><strong>Use Absolute Transform</strong> <code>bool</code></summary>

If true, use absolute world transform. If false, transform is relative to PCG component.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Color Channel</strong> <code>EPCGTextureColorChannel</code></summary>

Which color channel to use for density values in PCG's native texture operations.

| Option | Description |
|--------|-------------|
| **Red** | Use red channel |
| **Green** | Use green channel |
| **Blue** | Use blue channel |
| **Alpha** | Use alpha channel |

Default: `Alpha`

</details>

<details>
<summary><strong>Texel Size</strong> <code>float</code></summary>

Size of one texel in cm. Used when converting texture to point data via PCG's ToPointData.

Default: `50`

</details>

### Tiling

<details>
<summary><strong>Rotation</strong> <code>float</code></summary>

Rotation applied when sampling texture (-360 to 360 degrees).

Default: `0`

</details>

<details>
<summary><strong>Use Advanced Tiling</strong> <code>bool</code></summary>

Enable advanced UV tiling options.

Default: `false`

</details>

<details>
<summary><strong>Tiling</strong> <code>FVector2D</code></summary>

UV tiling factor. Values > 1 repeat the texture.

Default: `(1, 1)`

📋 Visible when: `Use Advanced Tiling == true`

</details>

<details>
<summary><strong>Center Offset</strong> <code>FVector2D</code></summary>

Offset from UV center in normalized coordinates.

Default: `(0, 0)`

📋 Visible when: `Use Advanced Tiling == true`

</details>

<details>
<summary><strong>Use Tile Bounds</strong> <code>bool</code></summary>

Enable bounds clipping for tiled textures.

Default: `false`

📋 Visible when: `Use Advanced Tiling == true`

</details>

<details>
<summary><strong>Tile Bounds</strong> <code>FBox2D</code></summary>

UV bounds for clipping. Samples outside bounds are clamped or ignored.

Default: `(-0.5, -0.5) to (0.5, 0.5)`

📋 Visible when: `Use Advanced Tiling == true AND Use Tile Bounds == true`

</details>

## Material Parameter Extraction

When Source Type is Material Path, the node:

1. Loads each unique material from point attributes
2. For each connected Tex Param, queries the material for its Material Parameter Name
3. If found, stores the texture's soft object path in the point's texture ID attribute
4. Collects all unique textures for Texture Data output

The parameter lookup uses `UMaterialInterface::GetTextureParameterValue()` with the parameter name from each Tex Param. Parameter names are case-sensitive.

## Example: Terrain Material Workflow

**Goal**: Extract and prepare terrain textures for sampling.

1. Sample Line Trace onto terrain to get:
   - UV coordinates at hit location
   - Material path (via Write RenderMat output)

2. Create Tex Param nodes:
   - **BaseColor**: Parameter `BaseColor`, Output `ColorTexId`
   - **Normal**: Parameter `Normal`, Output `NormalTexId`
   - **Roughness**: Parameter `Roughness`, Output `RoughTexId`

3. Get Texture Data node:
   - Source Type: `Material Path`
   - Source Attribute: The RenderMat attribute from line trace
   - Connect all Tex Params

4. Output:
   - Points have `ColorTexId`, `NormalTexId`, `RoughTexId` attributes
   - Texture Data output contains all unique textures

5. Connect to Sample Texture to read values at UVs

## Texture Caching

Generated Texture Data objects are tagged with `TEX:` prefix for lookup by Sample Texture. This enables:
- Efficient texture reuse across multiple sampling nodes
- Path-based texture identification
- Runtime texture resolution

## Related Nodes

| Node | Purpose |
|------|---------|
| [Tex Param](./tex-param.md) | Configure which material parameters to extract |
| [Sample Texture](./sample-texture.md) | Sample prepared textures at UV coordinates |
| [Sample Line Trace](../sample-surface-guided.md) | Get material references and UV coordinates |

---

📦 **Module**: `PCGExElementsSampling` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsSampling/Public/Elements/PCGExGetTextureData.h)
