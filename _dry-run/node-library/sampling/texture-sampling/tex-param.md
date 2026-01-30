---
icon: sliders
description: 'In editor :: PCGEx | Tex Param'
---

# Tex Param

Define **texture parameter extraction and sampling configuration** for texture sampling nodes.

## Overview

Tex Param is a **factory sub-node** that configures how textures are extracted from materials and how their values are sampled. It connects to parent nodes (Get Texture Data, Sample Texture, Sample Line Trace) via the Tex Params input pin.

Each Tex Param instance defines:
- Which material texture parameter to extract
- What attribute name to use for output
- Which channels to sample (RGBA)
- Output data type and scaling

## Key Behavior

```
    Material Instance                  Tex Param Config
    ┌──────────────────┐               ┌──────────────────┐
    │ BaseColor: Tex1  │               │ Parameter: Base  │
    │ Normal: Tex2     │──────────────→│ Output: ColorId  │
    │ Roughness: Tex3  │               │ Channels: RGB    │
    └──────────────────┘               │ Scale: 1.0       │
                                       └────────┬─────────┘
                                                │
                                                ↓
                                       ┌──────────────────┐
                                       │ Point Attribute  │
                                       │ ColorId = Tex1   │
                                       │ (soft path)      │
                                       └──────────────────┘
```

**Factory Pattern**: Tex Param nodes don't process data directly. They produce factory data that parent nodes consume to configure their texture operations.

## Use Cases

- **Material texture extraction**: Define which texture parameters to pull from materials
- **Multi-texture sampling**: Connect multiple Tex Params to sample BaseColor, Normal, Roughness simultaneously
- **Channel-specific sampling**: Extract only specific channels (e.g., roughness from packed textures)
- **Scaled sampling**: Apply multipliers to sampled values for range adjustment

## Inputs

This is a sub-node with no inputs.

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Tex Param** | Tex Param | Factory data for parent texture sampling nodes |

## Settings

### Material Parameter

<details>
<summary><strong>Material Parameter Name</strong> <code>FName</code></summary>

Name of the texture parameter to look for in material instances. This must match the parameter name defined in the material.

Common material parameter names:
- `BaseColor` or `Diffuse`
- `Normal`
- `Roughness`
- `Metallic`
- `Opacity`
- `EmissiveColor`

Default: `TextureParameter`

⚡ PCG Overridable

</details>

### Output Configuration

<details>
<summary><strong>Texture ID Attribute Name</strong> <code>FName</code></summary>

Attribute name where the extracted texture asset path will be written. This creates an `FSoftObjectPath` attribute that Sample Texture uses to identify which texture to sample.

Default: `TextureId`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Sample Attribute Name</strong> <code>FName</code></summary>

Attribute name where sampled texture values will be written by Sample Texture.

Default: `Sample`

⚡ PCG Overridable

</details>

### Sampling Configuration

<details>
<summary><strong>Output Type</strong> <code>EPCGExTexSampleAttributeType</code></summary>

Data type of the sampled value output attribute.

| Option | Channels Used | Description |
|--------|---------------|-------------|
| **Auto** | Based on selection | Automatically picks best type for selected channels |
| **Float** | 1 | Single-precision float (first selected channel) |
| **Double** | 1 | Double-precision float (first selected channel) |
| **Integer** | 1 | Integer (first selected channel) |
| **Vector2** | 2 | Two-component vector (first 2 selected channels) |
| **Vector** | 3 | Three-component vector (first 3 selected channels) |
| **Vector4** | 4 | Four-component vector (all selected channels) |

**Auto Resolution Logic**:
- 0 channels → Invalid (no output)
- 1 channel → Double
- 2 channels → Vector2
- 3 channels → Vector
- 4 channels → Vector4

Default: `Auto`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Sampled Channels</strong> <code>EPCGExTexChannelsFlags</code></summary>

Which texture channels to sample. This is a bitmask allowing any combination of RGBA.

| Flag | Value | Description |
|------|-------|-------------|
| **R** | Red channel | Index 0 in output vector |
| **G** | Green channel | Index 1 in output vector |
| **B** | Blue channel | Index 2 in output vector |
| **A** | Alpha channel | Index 3 in output vector |
| **RGB** | R + G + B | Common for color without alpha |
| **All** | R + G + B + A | Full RGBA sampling |

Default: `All`

</details>

<details>
<summary><strong>Scale</strong> <code>double</code></summary>

Multiplier applied to all sampled channel values. Useful for:
- Converting 0-1 ranges to other scales
- Inverting values (use -1)
- Amplifying subtle texture variations

Default: `1.0`

⚡ PCG Overridable

</details>

### Texture Array

For sampling from texture arrays (2D array textures):

<details>
<summary><strong>Texture Index Input</strong> <code>EPCGExInputValueType</code></summary>

How to determine which slice of a texture array to sample.

| Option | Behavior |
|--------|----------|
| **Constant** | Use single index for all points |
| **Attribute** | Read per-point index from attribute |

Default: `Constant`

</details>

<details>
<summary><strong>Texture Index</strong> <code>int32</code></summary>

Constant texture array slice index. Use -1 if not sampling from an array texture.

Default: `-1`

⚡ PCG Overridable
📋 Visible when: `Texture Index Input == Constant`

</details>

<details>
<summary><strong>Texture Index Attribute</strong> <code>FName</code></summary>

Attribute containing per-point texture array indices.

Default: `TextureIndex`

⚡ PCG Overridable
📋 Visible when: `Texture Index Input == Attribute`

</details>

## Channel Mapping

When sampling, channels are mapped to output vector components in order of selection:

```
Selected: R, B        Output Type: Vector2
─────────────────────────────────────────
Texture[R] → Output.X
Texture[B] → Output.Y

Selected: G, A        Output Type: Vector2
─────────────────────────────────────────
Texture[G] → Output.X
Texture[A] → Output.Y

Selected: R, G, B, A  Output Type: Vector4
─────────────────────────────────────────
Texture[R] → Output.X
Texture[G] → Output.Y
Texture[B] → Output.Z
Texture[A] → Output.W
```

**Important**: When Output Type uses fewer channels than selected:
- **Float/Double/Integer**: Uses only first selected channel
- **Vector2**: Uses first 2 selected channels
- **Vector**: Uses first 3 selected channels

## Example: Extract Multiple Texture Parameters

**Goal**: Sample BaseColor and Roughness from terrain materials.

1. Create two Tex Param nodes:

   **Tex Param 1 (Color)**:
   - Material Parameter Name: `BaseColor`
   - Texture ID Attribute Name: `ColorTexId`
   - Sample Attribute Name: `TerrainColor`
   - Sampled Channels: `RGB`
   - Output Type: `Vector`

   **Tex Param 2 (Roughness)**:
   - Material Parameter Name: `Roughness`
   - Texture ID Attribute Name: `RoughTexId`
   - Sample Attribute Name: `TerrainRoughness`
   - Sampled Channels: `R`
   - Output Type: `Double`

2. Connect both to Get Texture Data node
3. Get Texture Data extracts texture paths to `ColorTexId` and `RoughTexId`
4. Sample Texture reads both textures at UV coordinates
5. Points get `TerrainColor` (Vector) and `TerrainRoughness` (Double) attributes

## Example: Packed Texture Channels

**Goal**: Sample a packed ORM texture (Occlusion, Roughness, Metallic in RGB).

Create three Tex Param nodes pointing to same material parameter but different channels:

**Occlusion** (R channel):
- Material Parameter Name: `ORM`
- Sample Attribute Name: `Occlusion`
- Sampled Channels: `R`

**Roughness** (G channel):
- Material Parameter Name: `ORM`
- Sample Attribute Name: `Roughness`
- Sampled Channels: `G`

**Metallic** (B channel):
- Material Parameter Name: `ORM`
- Sample Attribute Name: `Metallic`
- Sampled Channels: `B`

## Technical Notes

### Soft Object Paths

Texture IDs are stored as `FSoftObjectPath` strings, not loaded texture references. This allows:
- Serialization in point attributes
- Deferred loading
- Cross-asset references

### Material Parameter Lookup

The node uses Unreal's `UMaterialInterface::GetTextureParameterValue()` with hashed parameter info for efficient lookup. Parameter names are case-sensitive and must match the material definition exactly.

### Duplicate Attribute Warning

If multiple Tex Params write to the same Sample Attribute Name, a warning is issued. The last Tex Param processed will overwrite earlier values. Use distinct attribute names or enable "Quiet Duplicate Sample Names Warning" on the parent node.

---

📦 **Module**: `PCGExElementsSampling` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsSampling/Public/Factories/PCGExTexParamFactoryProvider.h)
