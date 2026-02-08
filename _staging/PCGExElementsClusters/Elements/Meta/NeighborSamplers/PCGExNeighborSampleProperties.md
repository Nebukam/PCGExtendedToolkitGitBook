---
icon: crosshairs
description: 'Sampler : Vtx Properties - Creates a neighbor property sampler for use with Sample Neighbors.'
---

# Sampler : Vtx Properties

Creates a single neighbor property sampler, to be used by a Sample Neighbors node.

## Overview

This sampler sub-node configures how built-in point properties are sampled from neighboring points in a cluster. Unlike the Vtx Attributes sampler which targets named attributes, this sampler operates on the nine standard PCG point properties: Density, BoundsMin, BoundsMax, Color, Position, Rotation, Scale, Steepness, and Seed. Each property has its own independent blend mode, allowing fine-grained control over how neighbor values are combined.

## How It Works

1. **Property Selection**: Each of the nine point properties can be independently enabled by setting its blend mode to anything other than None.
2. **Neighbor Traversal**: The parent Sample Neighbors node walks the cluster graph to find neighbors within the configured depth.
3. **Per-Property Blending**: For each enabled property, the values from all visited neighbors are combined using that property's selected blend mode.
4. **Output**: The blended results are written back to the source point's corresponding properties.

#### Usage Notes

- **Independent Blend Modes**: Each property has its own blend mode selector. Set a property's blending to `None` to skip sampling it entirely.
- **Built-In Properties Only**: This sampler targets the nine standard PCG point properties. To sample custom attributes, use Sampler : Vtx Attributes instead.
- **Sub-Node**: This node produces a sampler factory and must be connected to a Sample Neighbors node to execute.

## Behavior

**Property Sampling with Independent Blending:**
```
Cluster:
  A───B───C
      │
      D

Point properties:
  A: Density=0.5, Color=(1,0,0,1)
  C: Density=0.8, Color=(0,1,0,1)
  D: Density=0.3, Color=(0,0,1,1)

Sampling from B, Depth=1:
  Neighbors: A, C, D

  Density (Blend=Average):
    (0.5 + 0.8 + 0.3) / 3 = 0.533
    → B.Density = 0.533

  Color (Blend=Max):
    max((1,0,0,1), (0,1,0,1), (0,0,1,1)) = (1,1,1,1)
    → B.Color = (1,1,1,1)

  Position (Blend=None):
    → B.Position unchanged (skipped)
```

## Settings

<details>
<summary><strong>Density</strong> <code>EPCGExBlendingType</code></summary>

Blend mode for the Density property. Determines how density values from neighbors are combined.

| Option | Description |
|--------|-------------|
| **None** | No blending -- property is not sampled |
| **Average** | Average of all neighbor values |
| **Weight** | Weighted blend using sample weights |
| **Min** | Minimum value among neighbors |
| **Max** | Maximum value among neighbors |
| **Copy** | Copy from the last processed neighbor |
| **Sum** | Sum of all neighbor values |
| **Weighted Sum** | Sum scaled by sample weights |
| **Lerp** | Blend smoothly between values using weight as alpha |
| **Subtract** | Subtract neighbor values |

Default: `None`

</details>

<details>
<summary><strong>BoundsMin</strong> <code>EPCGExBlendingType</code></summary>

Blend mode for the BoundsMin property.

Default: `None`

</details>

<details>
<summary><strong>BoundsMax</strong> <code>EPCGExBlendingType</code></summary>

Blend mode for the BoundsMax property.

Default: `None`

</details>

<details>
<summary><strong>Color</strong> <code>EPCGExBlendingType</code></summary>

Blend mode for the Color property.

Default: `None`

</details>

<details>
<summary><strong>Position</strong> <code>EPCGExBlendingType</code></summary>

Blend mode for the Position property.

Default: `None`

</details>

<details>
<summary><strong>Rotation</strong> <code>EPCGExBlendingType</code></summary>

Blend mode for the Rotation property.

Default: `None`

</details>

<details>
<summary><strong>Scale</strong> <code>EPCGExBlendingType</code></summary>

Blend mode for the Scale property.

Default: `None`

</details>

<details>
<summary><strong>Steepness</strong> <code>EPCGExBlendingType</code></summary>

Blend mode for the Steepness property.

Default: `None`

</details>

<details>
<summary><strong>Seed</strong> <code>EPCGExBlendingType</code></summary>

Blend mode for the Seed property.

Default: `None`

</details>

### Inherited Settings

> See [Neighbor Sampler Base](PCGExNeighborSampleFactoryProvider.md) for: Sampling Config (Max Depth, Blend Over, Weight Curve, Neighbor Source, etc.)

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Sampler** | PCGEx \| Neighbor Sampler | The configured sampler factory |

---

![Static Badge](https://img.shields.io/badge/Module-PCGExElementsClusters-473F69)  ·  [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/Meta/NeighborSamplers/PCGExNeighborSampleProperties.h)

<!-- VERIFICATION REPORT
Node-Specific Properties: 9 documented (via FPCGExPropertiesBlendingDetails in FPCGExPropertiesSamplerConfigBase)
- DensityBlending (EPCGExBlendingType, default None)
- BoundsMinBlending (EPCGExBlendingType, default None)
- BoundsMaxBlending (EPCGExBlendingType, default None)
- ColorBlending (EPCGExBlendingType, default None)
- PositionBlending (EPCGExBlendingType, default None)
- RotationBlending (EPCGExBlendingType, default None)
- ScaleBlending (EPCGExBlendingType, default None)
- SteepnessBlending (EPCGExBlendingType, default None)
- SeedBlending (EPCGExBlendingType, default None)
Inherited Properties: From UPCGExNeighborSampleProviderSettings (SamplingConfig, Priority)
Classes:
- UPCGExNeighborSamplerFactoryProperties (base: UPCGExNeighborSamplerFactoryData)
- UPCGExNeighborSamplePropertiesSettings (display: "Sampler : Vtx Properties")
Config Struct: FPCGExPropertiesSamplerConfigBase (Blending: FPCGExPropertiesBlendingDetails, ShowOnlyInnerProperties)
-->
