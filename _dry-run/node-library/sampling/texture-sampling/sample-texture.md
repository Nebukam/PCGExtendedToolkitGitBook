---
icon: image
description: 'In editor :: PCGEx | Sample : Texture'
---

# Sample : Texture

Sample **texture data** at point UV coordinates and write values to attributes.

## Overview

This node samples textures using UV coordinates stored on points. For each point, it reads the texture identified by that point's texture ID attribute and samples values at the UV coordinates. The sampled values are written to output attributes as configured by connected Tex Param sub-nodes.

## Key Behavior

```
    Point Data                    Tex Param Config
    ┌──────────────────┐          ┌──────────────────┐
    │ UV: (0.5, 0.5)   │          │ TextureID: TexId │
    │ TexId: /Path/Tex │          │ Output: Sample   │
    └────────┬─────────┘          │ Channels: RGB    │
             │                    └────────┬─────────┘
             │                             │
             ↓                             ↓
    ┌─────────────────────────────────────────────┐
    │              Sample Texture                 │
    │  1. Read TexId attribute → find texture     │
    │  2. Sample texture at UV (0.5, 0.5)         │
    │  3. Extract RGB channels                    │
    │  4. Write to Sample attribute               │
    └─────────────────────────────────────────────┘
             │
             ↓
    Point with Sample = (0.8, 0.2, 0.1)
```

**Per-Point Texture Selection**: Each point can sample a different texture based on its texture ID attribute. This enables per-instance material variation.

## Use Cases

- **Terrain masking**: Read mask textures for placement weights
- **Color transfer**: Apply texture colors to points
- **Height mapping**: Read height values from textures
- **Procedural patterns**: Use texture data to drive placement
- **Material sampling**: Sample material textures for blending
- **Per-instance variation**: Different textures per point based on hit material

## Inputs

| Pin | Type | Required | Description |
|-----|------|----------|-------------|
| **In** | Points | Yes | Source points with UV coordinates and texture ID attributes |
| **Texture Data** | Texture Data | Yes | PCG Texture Data objects (from Get Texture Data or native PCG nodes) |
| **Tex Params** | Tex Params | Yes | Texture parameter factories defining what/how to sample |
| **Point Filters** | Filters | No | Filter which source points get processed |

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Out** | Points | Source points with sampled texture values |

## Settings

### Source

<details>
<summary><strong>UV Source</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

Attribute containing UV coordinates (FVector2D) for texture sampling. UV values are typically in 0-1 range where (0,0) is bottom-left and (1,1) is top-right.

Common sources:
- `UVCoords` from Sample Line Trace
- Custom computed UV attributes
- World position mapped to UV space

⚡ PCG Overridable

</details>

### Tagging

- **Tag If Has Successes**: Add tag if at least one point sampled a texture
- **Tag If Has No Successes**: Add tag if no points sampled any textures

### Advanced

<details>
<summary><strong>Process Filtered Out As Fails</strong> <code>bool</code></summary>

Mark filtered-out points as failed sampling.

Default: `true`

</details>

<details>
<summary><strong>Prune Failed Samples</strong> <code>bool</code></summary>

Remove points that failed to sample any textures from output.

Default: `false`

</details>

<details>
<summary><strong>Quiet Duplicate Sample Names Warning</strong> <code>bool</code></summary>

Suppress warnings when multiple Tex Params write to the same Sample Attribute Name.

Default: `false`

</details>

## Texture Lookup

The node builds an internal texture map from input Texture Data:

1. **Direct paths**: Texture asset paths from `UPCGTextureData::Texture`
2. **Tag-based**: Data tags with `TEX:` prefix or matching texture paths
3. **Point lookup**: Per-point texture ID attribute mapped to texture map

If a point's texture ID attribute doesn't match any loaded texture, sampling fails for that point.

## Sampling Process

For each point:

1. Read UV coordinates from UV Source attribute
2. Read texture ID from attribute defined in Tex Param
3. Look up texture in loaded texture map
4. Sample texture at UV using bilinear or point filtering
5. Extract configured channels (R, G, B, A)
6. Apply scale multiplier
7. Write to output attribute

## Example: Mask-Based Density

**Goal**: Use a mask texture to control point density.

1. Generate scatter points with UV coordinates (world XY → UV mapping)
2. Create a Tex Param node:
   - Material Parameter Name: (not used for direct textures)
   - Texture ID Attribute Name: `MaskTexId`
   - Sample Attribute Name: `Mask`
   - Sampled Channels: `R`
   - Output Type: `Double`
3. Create PCG Texture Data for mask texture
4. Use Sample Texture with:
   - UV Source: `UVCoords` attribute
5. Filter points where `Mask > 0.5` to keep only points in masked areas

## Example: Per-Material Texture Sampling

**Goal**: Sample terrain textures based on hit material.

1. Sample Line Trace to get:
   - UV coordinates at hit
   - Material reference (RenderMat output)
2. Tex Param nodes for BaseColor, Roughness
3. Get Texture Data extracts textures from materials
4. Sample Texture samples at hit UVs
5. Points now have terrain color/roughness values

## Related Nodes

| Node | Purpose |
|------|---------|
| [Tex Param](./tex-param.md) | Configure texture sampling parameters |
| [Get Texture Data](./get-texture-data.md) | Extract textures from materials |
| [Sample Line Trace](../sample-surface-guided.md) | Get UV coordinates via ray tracing |

---

📦 **Module**: `PCGExElementsSampling` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsSampling/Public/Elements/PCGExSampleTexture.h)
