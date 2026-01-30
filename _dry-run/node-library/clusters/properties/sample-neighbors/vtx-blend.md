---
icon: blender
description: 'In editor :: PCGEx | Sampler : Vtx Blend'
---

# Sampler : Vtx Blend

Blend neighbor vertex attributes using blend operation factories.

## Overview

This sampler uses blend operation factory nodes to define how attribute values from neighbors are combined. It supports weighted blending based on distance, index, or a fixed value, with optional depth traversal beyond immediate neighbors.

```
Neighbor values:            Blended result:
    B=10
     │  weight=0.25         Result = Σ(value × weight)
     │                             = 5×0.25 + 10×0.25
 A=5─●─C=15                        + 15×0.25 + 20×0.25
     │  weight=0.25                = 12.5
    D=20
```

## How It Works

1. **Traverse neighbors**: Walk graph edges up to Max Depth
2. **Apply filters**: Skip neighbors that fail Vtx/Edge filters
3. **Compute weights**: Calculate blend weight per neighbor based on Blend Over mode
4. **Apply curve**: Remap weights through the Weight Curve
5. **Blend values**: Use connected blend operations to combine attribute values
6. **Write result**: Store blended value on source vertex

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **Blending** | Blend Op | Blend operation factories defining attribute blending |
| **Vtx Filters** | Filter | (Optional) Filter which neighbors can be sampled |
| **Edge Filters** | Filter | (Optional) Filter which edges can be traversed |
| **Value Filters** | Filter | (Optional) Filter which sampled values are included |

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Sampler** | Neighbor Sampler | Sampler factory for Sample Neighbors node |

## Settings

### Sampling

<details>
<summary><strong>Priority</strong> <code>int32</code></summary>

Processing order when multiple samplers are connected. Higher values are processed last.

Default: `0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Range Type</strong> <code>EPCGExRangeType</code></summary>

How to normalize blend weights.

| Option | Behavior |
|--------|----------|
| **Full Range** | Normalize using [0..Max Value] range |
| **Effective Range** | Remap actual [Min..Max] range to [0..1] |

Default: `Full Range`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Max Depth</strong> <code>int32</code></summary>

Maximum traversal depth for sampling. 1 = immediate neighbors only.

Default: `1`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Blend Over</strong> <code>EPCGExBlendOver</code></summary>

How to compute the initial blend weight for each neighbor.

| Option | Behavior |
|--------|----------|
| **Distance** | Weight based on distance / max distance |
| **Count** | Weight based on index / total count |
| **Fixed** | Use fixed blend weight for all neighbors |

Default: `Count`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Max Distance</strong> <code>double</code></summary>

Maximum distance for distance-based weight calculation.

Default: `300`

⚡ PCG Overridable
📋 Visible when: `Blend Over = Distance`

</details>

<details>
<summary><strong>Fixed Blend</strong> <code>double</code></summary>

Fixed blend weight value when using Fixed mode.

Default: `1`

⚡ PCG Overridable
📋 Visible when: `Blend Over = Fixed`

</details>

<details>
<summary><strong>Use Local Curve</strong> <code>bool</code></summary>

Use in-editor curve instead of external curve asset.

Default: `false`

</details>

<details>
<summary><strong>Weight Curve</strong> <code>UCurveFloat</code></summary>

Curve to remap weight values. Input is normalized weight, output is final weight.

Default: Linear (0,0) to (1,1)

⚡ PCG Overridable
📋 Visible when: `Use Local Curve = false`

</details>

<details>
<summary><strong>Neighbor Source</strong> <code>EPCGExClusterElement</code></summary>

Whether to sample from neighbor vertices or connecting edges.

| Option | Behavior |
|--------|----------|
| **Point** | Sample attributes from neighbor vertices |
| **Edge** | Sample attributes from connecting edges |

Default: `Point`

⚡ PCG Overridable

</details>

## Weight Calculation

```
Blend Over = Distance:

    Neighbor at d=100, MaxDist=300
    Raw weight = 1 - (100/300) = 0.67
    Final weight = WeightCurve(0.67)

Blend Over = Count:

    4 neighbors, this is index 2
    Raw weight = 2/4 = 0.5
    Final weight = WeightCurve(0.5)

Blend Over = Fixed:

    Weight = FixedBlend (same for all)
```

## Depth Traversal

```
Max Depth = 1:              Max Depth = 2:
    B                           B───E
    │                           │
A───●───C                   A───●───C
    │                           │
    D                           D───F

Samples: A,B,C,D            Samples: A,B,C,D,E,F
```

Weight decreases with depth based on the weight curve.

---

📦 **Module**: `PCGExElementsClusters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/Meta/NeighborSamplers/PCGExNeighborSampleBlend.h)
