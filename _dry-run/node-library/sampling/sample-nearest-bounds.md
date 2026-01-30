---
icon: crosshairs
description: 'In editor :: PCGEx | Sample : Nearest Bounds'
---

# Sample : Nearest Bounds

Find which target bounding boxes contain each source point and blend data from overlapping targets.

## Overview

This node tests whether each source point lies **inside** one or more target bounding boxes (OBB - Oriented Bounding Boxes). Only points that are contained within target bounds will successfully sample - points outside all bounds will fail sampling.

This is fundamentally different from [Sample Nearest Point](./sample-nearest-point.md) which samples based on distance. Sample Nearest Bounds is about **containment testing**, not proximity.

## Key Behavior

```
┌─────────────────────────────────┐
│         Target Bounds A         │
│                                 │
│    ● Point 1 (INSIDE)           │
│      → Samples from A           │
│                                 │
└─────────────────────────────────┘

     ● Point 2 (OUTSIDE)
       → Sampling FAILS

┌─────────────────────────────────┐
│         Target Bounds B         │
│    ┌───────────────────┐        │
│    │  Target Bounds C  │        │
│    │                   │        │
│    │  ● Point 3        │        │
│    │    (INSIDE B & C) │        │
│    │    → Samples both │        │
│    └───────────────────┘        │
└─────────────────────────────────┘
```

**Important**: A point must be geometrically **inside** at least one target's bounding box to sample anything. The node uses OBB (Oriented Bounding Box) containment tests, respecting target point rotation.

## Use Cases

- **Zone detection**: Determine which room/area a point is in
- **Volume assignment**: Assign properties based on containing volume
- **Layered regions**: Blend data from overlapping zones (inner/outer areas)
- **Collision volumes**: Check if points fall within trigger volumes
- **LOD regions**: Assign detail levels based on distance zones

## Inputs

| Pin | Type | Required | Description |
|-----|------|----------|-------------|
| **In** | Points | Yes | Source points to test for containment |
| **Bounds** | Points | Yes | Target points whose bounds define containment volumes |
| **Point Filters** | Filters | No | Filter which source points get processed |
| **Sorting Rules** | Sorting Rules | No | Required when using Best Candidate selection |
| **Blending** | Blend Ops | No | Attribute blending operations (Individual interface) |
| **Match Rules** | Match Rules | No | Filter which targets can be sampled by which sources |

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Out** | Points | Source points with sampled data (points outside all bounds have failed sampling) |
| **Unmatched** | Points | (Optional) Points that didn't match any targets via Match Rules |

## How Sampling Works

### 1. Containment Test

For each source point, the node:
1. Builds an OBB (Oriented Bounding Box) for each target point
2. Tests if the source point position is **inside** any target OBB
3. Only OBBs that contain the point are considered for sampling

### 2. Sample Selection

When multiple bounds contain a point, the **Sample Method** determines what to sample:

| Method | Behavior |
|--------|----------|
| **All** | Blend data from all containing bounds (weighted) |
| **Closest Bounds** | Use only the bounds whose center is closest to the point |
| **Farthest Bounds** | Use only the bounds whose center is farthest from the point |
| **Largest Bounds** | Use only the largest containing bounds (by volume) |
| **Smallest Bounds** | Use only the smallest containing bounds (by volume) |
| **Best Candidate** | Use Sorting Rules to pick the best match |

### 3. Weight Calculation

When sampling from multiple bounds (All mode), each sample is weighted by how centered the point is within that bounds - points near the center have higher weight than points near the edges.

## Settings

### Sampling

<details>
<summary><strong>Sample Method</strong> <code>EPCGExBoundsSampleMethod</code></summary>

How to select which containing bounds to sample when a point is inside multiple bounds.

| Option | Behavior |
|--------|----------|
| **All** | Blend data from all containing bounds |
| **Closest Bounds** | Pick the bounds with center closest to the point |
| **Farthest Bounds** | Pick the bounds with center farthest from the point |
| **Largest Bounds** | Pick the largest bounds (by extents) |
| **Smallest Bounds** | Pick the smallest bounds (by extents) |
| **Best Candidate** | Use Sorting Rules to determine winner |

Default: `All`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Sort Direction</strong> <code>EPCGExSortDirection</code></summary>

Sort direction when using Best Candidate method.

Default: `Ascending`

⚡ PCG Overridable
📋 Visible when: `Sample Method == Best Candidate`

</details>

<details>
<summary><strong>Bounds Source</strong> <code>EPCGExPointBoundsSource</code></summary>

Which bounds to use from target points for containment testing.

| Option | Behavior |
|--------|----------|
| **Bounds** | Use raw point bounds |
| **Scaled Bounds** | Use bounds multiplied by point scale |
| **Density Bounds** | Use bounds based on point density |

Default: `Scaled Bounds`

</details>

<details>
<summary><strong>Distance Type</strong> <code>EPCGExDistanceType</code></summary>

How to calculate distance (used for weighting and distance outputs).

| Option | Behavior |
|--------|----------|
| **Euclidian** | Standard straight-line distance |
| **Manhattan** | Sum of axis distances |
| **Chebyshev** | Maximum single-axis distance |

Default: `Euclidian`

</details>

### Apply Sampling

<details>
<summary><strong>Apply Sampling</strong> <code>FPCGExApplySamplingDetails</code></summary>

Optionally apply sampled transform data directly to output points (in addition to or instead of writing to attributes).

- **Apply Position**: Move points to sampled position
- **Apply Rotation**: Rotate points to sampled rotation
- **Apply Scale**: Scale points to sampled scale
- **Apply Look At**: Orient points toward sampled direction

</details>

### Weighting

<details>
<summary><strong>Weight Remap</strong> <code>UCurveFloat</code></summary>

Curve that remaps the containment weight (how centered the point is within bounds). Input 0-1 where 0 = at edge, 1 = at center.

Use Local Curve toggle switches between in-editor curve and external asset.

⚡ PCG Overridable (external asset only)

</details>

### Blending

<details>
<summary><strong>Blending Interface</strong> <code>EPCGExBlendingInterface</code></summary>

How to blend attributes from sampled targets.

| Option | Behavior |
|--------|----------|
| **Individual** | Use Blending pin with blend operation sub-nodes |
| **Monolithic** | Use built-in attribute map (simpler but less flexible) |

Default: `Individual`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Target Attributes</strong> <code>TMap</code></summary>

When using Monolithic interface, specify which target attributes to blend and how.

📋 Visible when: `Blending Interface == Monolithic`

</details>

### Outputs

All output attributes are optional (toggle + attribute name):

| Output | Type | Description |
|--------|------|-------------|
| **Success** | `bool` | Whether the point was inside any bounds |
| **Transform** | `FTransform` | Weighted transform from containing bounds |
| **LookAt Transform** | `FTransform` | Transform oriented toward sampled bounds |
| **Distance** | `double` | Distance to weighted bounds center |
| **Signed Distance** | `double` | Signed distance based on axis |
| **Component Wise Distance** | `FVector` | Per-axis (X,Y,Z) distance |
| **Angle** | `double` | Angle between point and bounds direction |
| **Num Samples** | `int32` | Number of bounds that contained this point |
| **Sampled Index** | `int32` | Index of the closest/selected bounds |

**Distance options**:
- **Normalize**: Output 0-1 range based on max sampled distance
- **OneMinus**: Invert normalized distance (1 at center, 0 at max)
- **Scale**: Multiply output by factor

### Tagging

- **Tag If Has Successes**: Add tag if at least one point was inside bounds
- **Tag If Has No Successes**: Add tag if no points were inside any bounds

### Advanced

<details>
<summary><strong>Process Filtered Out As Fails</strong> <code>bool</code></summary>

When point filters exclude a point, mark it as failed sampling (write failure values to outputs). Disable to preserve existing attribute values on filtered points.

Default: `true`

</details>

<details>
<summary><strong>Prune Failed Samples</strong> <code>bool</code></summary>

Remove points that weren't inside any bounds from the output.

Default: `false`

</details>

<details>
<summary><strong>Ignore Self</strong> <code>bool</code></summary>

When source and target are the same data, prevent points from sampling their own bounds.

Default: `true`

</details>

## Example: Zone-Based Material Assignment

**Goal**: Assign different materials to points based on which zone they fall within.

1. Create zone volumes as points with large bounds (scaled cubes)
2. Add a `MaterialIndex` attribute to each zone point
3. Use Sample Nearest Bounds with:
   - Sample Method: `Smallest Bounds` (innermost zone wins)
   - Blending: Forward `MaterialIndex` attribute
4. Points inside zones get the material index; points outside fail

## Comparison with Other Sampling Nodes

| Node | Tests | Best For |
|------|-------|----------|
| **Sample Nearest Bounds** | Containment (inside/outside) | Zone detection, volume assignment |
| **Sample Nearest Point** | Distance (proximity) | Closest neighbor queries |
| **Sample Overlap Stats** | Overlap amount | Collision detection, density |

---

📦 **Module**: `PCGExElementsSampling` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsSampling/Public/Elements/PCGExSampleNearestBounds.h)
