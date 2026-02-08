---
icon: cube
description: 'Sample : Nearest Bounds - Samples data from nearest target bounds'
---

# Sample : Nearest Bounds

Sample nearest target bounds.

## Overview

This node samples data from nearby point bounds, computing weighted transforms, distances, and angles based on spatial relationships. It finds target bounds within range of each source point and blends sampled data according to distance-weighted curves. Useful for proximity-based effects, orientation alignment, and spatial queries against bounding volumes.

## How It Works

1. **Find Targets**: Locates target bounds within range of each source point.
2. **Apply Weights**: Computes distance-based weights using the remap curve.
3. **Blend Results**: Combines sampled data using configured blending modes.
4. **Write Outputs**: Stores transforms, distances, and angles to attributes.

#### Usage Notes

- **Bounds Source**: Choose between scaled, density, or raw bounds.
- **Sample Methods**: Sample all, closest, farthest, largest, or smallest bounds.
- **Weight Curve**: Control influence falloff with distance.
- **Apply Sampling**: Optionally apply sampled transform directly to points.

## Behavior

#### Bounds Sampling:
```
Source point P with targets in range:
   T1: bounds at distance 50, size 100
   T2: bounds at distance 100, size 200
   T3: bounds at distance 150, size 50

Sample Method = Closest:
   → Samples T1 only

Sample Method = Largest:
   → Samples T2 only

Sample Method = All (within range 200):
   → Blends T1 (weight 0.8), T2 (weight 0.5), T3 (weight 0.2)
```

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **In** | Points | Source points to sample from |
| **Bounds** | Points | Target bounds to sample |
| **Point Filters** | Params | Optional filters for source points |
| **Sorting Rules** | Params | Optional sorting for Best Candidate method |
| **Blending** | Params | Optional blending operation factories |

## Settings

### Sampling

<details>
<summary><strong>Data Matching</strong> <code>FPCGExMatchingDetails</code></summary>

Controls how source collections are matched to target bounds for sampling.

</details>

<details>
<summary><strong>Sample Method</strong> <code>EPCGExBoundsSampleMethod</code></summary>

How to select which bounds to sample.

| Option | Description |
|--------|-------------|
| **All** | Sample all overlapping bounds |
| **Closest Bounds** | Sample only the closest bounds |
| **Farthest Bounds** | Sample only the farthest bounds |
| **Largest Bounds** | Sample only the largest bounds (by extent) |
| **Smallest Bounds** | Sample only the smallest bounds |
| **Best Candidate** | Sample based on sorting rules |

Default: `All`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Bounds Source</strong> <code>EPCGExPointBoundsSource</code></summary>

Which bounds to use from target points.

| Option | Description |
|--------|-------------|
| **Scaled Bounds** | Bounds multiplied by scale |
| **Density Bounds** | Density-based bounds |
| **Bounds** | Raw point bounds |
| **Center** | Point center only |

Default: `Scaled Bounds`

</details>

<details>
<summary><strong>Distance Type</strong> <code>EPCGExDistanceType</code></summary>

Method for calculating distances.

Default: `Euclidean`

</details>

<details>
<summary><strong>Apply Sampling</strong> <code>FPCGExApplySamplingDetails</code></summary>

Whether to apply sampled transform and look-at directly to source points.

</details>

### Weighting

<details>
<summary><strong>Weight Remap</strong> <code>UCurveFloat</code></summary>

Curve that remaps distance to weight for blending.

⚡ PCG Overridable

</details>

### Blending

<details>
<summary><strong>Blending Interface</strong> <code>EPCGExBlendingInterface</code></summary>

How blending operations are configured.

| Option | Description |
|--------|-------------|
| **Individual** | Use connected Blending sub-nodes |
| **Monolithic** | Configure all blending in-node |

Default: `Individual`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Target Attributes</strong> <code>TMap<FName, EPCGExBlendingType></code></summary>

Map of attribute names to blending types for monolithic mode.

📋 *Visible when Blending Interface = Monolithic*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Blend Point Properties</strong> <code>bool</code></summary>

When enabled, blends point properties (density, color, etc.).

Default: `false`

📋 *Visible when Blending Interface = Monolithic*

⚡ PCG Overridable

</details>

### Outputs

<details>
<summary><strong>Write Success</strong> <code>bool</code></summary>

Writes sampling success to a boolean attribute.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Write Transform</strong> <code>bool</code></summary>

Writes the weighted sampled transform.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Write Look At</strong> <code>bool</code></summary>

Writes a look-at transform pointing toward sampled targets.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Write Distance</strong> <code>bool</code></summary>

Writes the weighted distance to sampled targets.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Write Signed Distance</strong> <code>bool</code></summary>

Writes signed distance along a specified axis.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Write Component Wise Distance</strong> <code>bool</code></summary>

Writes distance as a vector with per-axis components.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Write Angle</strong> <code>bool</code></summary>

Writes the angle between source and target directions.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Write Num Samples</strong> <code>bool</code></summary>

Writes the count of sampled bounds.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Write Sampled Index</strong> <code>bool</code></summary>

Writes the index of the closest sampled bounds.

Default: `false`

⚡ PCG Overridable

</details>

### Tagging

<details>
<summary><strong>Tag If Has Successes</strong> <code>bool</code></summary>

Adds a tag if sampling succeeded for any point.

Default: `false`

</details>

<details>
<summary><strong>Tag If Has No Successes</strong> <code>bool</code></summary>

Adds a tag if sampling failed for all points.

Default: `false`

</details>

### Advanced

<details>
<summary><strong>Process Filtered Out As Fails</strong> <code>bool</code></summary>

When enabled, filtered-out points are marked as failed samples.

Default: `true`

</details>

<details>
<summary><strong>Prune Failed Samples</strong> <code>bool</code></summary>

When enabled, removes points that failed to sample anything.

Default: `false`

</details>

<details>
<summary><strong>Ignore Self</strong> <code>bool</code></summary>

Excludes a point's own data when sampling bounds.

Default: `true`

</details>

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Out** | Points | Points with sampled data |

---

![Static Badge](https://img.shields.io/badge/Source-PCGExElementsSampling-473F69)  ·  [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsSampling/Public/Elements/PCGExSampleNearestBounds.h)

<!-- SOURCE: https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsSampling/Public/Elements/PCGExSampleNearestBounds.h -->

<!-- VERIFICATION REPORT
Node-Specific Properties: 35+ documented
  - DataMatching, SampleMethod, SortDirection, BoundsSource, DistanceType, ApplySampling
  - bUseLocalCurve, WeightRemap, WeightCurveLookup
  - BlendingInterface, TargetAttributes, bBlendPointProperties, PointPropertiesBlendingSettings
  - bWriteSuccess/Transform/LookAtTransform/Distance/SignedDistance/ComponentWiseDistance/Angle/NumSamples/SampledIndex
  - LookAtAxisAlign, LookAtUpSelection, LookAtUpConstant
  - bOutputNormalizedDistance, bOutputOneMinusDistance, DistanceScale
  - SignAxis, SignedDistanceScale, bAbsoluteComponentWiseDistance
  - AngleAxis, AngleRange
  - bTagIfHasSuccesses, bTagIfHasNoSuccesses
  - bProcessFilteredOutAsFails, bPruneFailedSamples, bIgnoreSelf
Inherited Properties: From UPCGExPointsProcessorSettings
Inputs: In (Points), Bounds (Points), Point Filters, Sorting Rules, Blending (Params)
Outputs: Out (Points)
Nested Types: EPCGExBoundsSampleMethod, EPCGExPointBoundsSource, EPCGExDistanceType, etc.
-->
