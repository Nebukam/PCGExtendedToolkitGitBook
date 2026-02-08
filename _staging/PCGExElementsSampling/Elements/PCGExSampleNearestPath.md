---
icon: bezier-curve
description: 'Sample : Nearest Path - Samples data from nearest path edges'
---

# Sample : Nearest Path

Sample the nearest path(s).

## Overview

This node samples data from nearby path edges, finding the closest points along paths and computing weighted distances, directions, and other spatial relationships. It can determine if points lie inside closed paths (using 2D projection) and blend attributes from sampled path points based on distance.

## How It Works

1. **Find Paths**: Locates paths within range of each source point.
2. **Sample Edges**: Finds the closest point on path edges.
3. **Test Containment**: Optionally checks if points are inside closed paths.
4. **Blend Results**: Combines sampled data using distance weights.
5. **Write Outputs**: Stores distances, directions, and blended attributes.

#### Usage Notes

- **Inside Detection**: Uses 2D projection to test point containment in closed paths.
- **Sample Methods**: Choose closest, farthest, or all paths within range.
- **Inclusion Offset**: Inset paths for containment testing.
- **Path Types**: Can filter to only closed loops or open lines.

## Behavior

#### Path Sampling:
```
Source point P with paths in range:
   Path1: closed polygon, P is inside, edge distance 30
   Path2: open line, P is outside, edge distance 50

bOnlySampleWhenInside = true:
   → Only samples Path1

bOnlySampleWhenInside = false:
   → Samples both, blends by distance weight
```

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **In** | Points | Source points to sample from |
| **Paths** | Points | Target paths to sample |
| **Point Filters** | Params | Optional filters for source points |
| **Sorting Rules** | Params | Optional sorting for Best Candidate method |
| **Blending** | Params | Optional blending operation factories |

## Settings

### Sampling

<details>
<summary><strong>Data Matching</strong> <code>FPCGExMatchingDetails</code></summary>

Controls how source collections are matched to target paths.

</details>

<details>
<summary><strong>Projection Details</strong> <code>FPCGExGeo2DProjectionDetails</code></summary>

How points and paths are projected for 2D containment testing.

//→ See TODO FPCGExGeo2DProjectionDetails

</details>

<details>
<summary><strong>Sample Inputs</strong> <code>EPCGExPathSamplingIncludeMode</code></summary>

Which paths to include in sampling.

| Option | Description |
|--------|-------------|
| **All** | Sample all paths |
| **Closed Loops Only** | Only sample closed paths |
| **Open Lines Only** | Only sample open paths |

Default: `All`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Sample Method</strong> <code>EPCGExSampleMethod</code></summary>

How to select which paths to sample.

| Option | Description |
|--------|-------------|
| **Within Range** | Sample all paths within range |
| **Closest Target** | Sample only the closest path |
| **Farthest Target** | Sample only the farthest path |
| **Best Candidate** | Sample based on sorting rules |

Default: `Within Range`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Always Sample When Inside</strong> <code>bool</code></summary>

When enabled, always samples paths if the point lies inside, regardless of range.

Default: `true`

</details>

<details>
<summary><strong>Only Sample When Inside</strong> <code>bool</code></summary>

When enabled, only samples closed paths where the point lies inside.

Default: `true`

</details>

<details>
<summary><strong>Inclusion Offset</strong> <code>double</code></summary>

Inset offset applied to paths for containment testing.

Default: `0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Range Min</strong> <code>double</code></summary>

Minimum sampling distance. Can be constant or from attribute.

Default: `0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Range Max</strong> <code>double</code></summary>

Maximum sampling distance. Can be constant or from attribute.

Default: `300`

⚡ PCG Overridable

</details>

### Weighting

<details>
<summary><strong>Weight Method</strong> <code>EPCGExRangeType</code></summary>

How distance affects weight calculation.

| Option | Description |
|--------|-------------|
| **Full Range** | Use full min-max range |
| **Effective Range** | Use actual sampled range |

Default: `Full Range`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Weight Over Distance</strong> <code>UCurveFloat</code></summary>

Curve controlling weight falloff based on distance.

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

Writes a look-at transform pointing toward sampled path.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Write Distance</strong> <code>bool</code></summary>

Writes the weighted distance to sampled path.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Write Signed Distance</strong> <code>bool</code></summary>

Writes signed distance (positive outside, negative inside for closed paths).

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Write Is Inside</strong> <code>bool</code></summary>

Writes whether the point is inside closed paths.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Write Num Inside</strong> <code>bool</code></summary>

Writes the count of closed paths containing this point.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Write Num Samples</strong> <code>bool</code></summary>

Writes the count of sampled paths.

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

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Out** | Points | Points with sampled path data |

---

![Static Badge](https://img.shields.io/badge/Module-PCGExElementsSampling-473F69)  ·  [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsSampling/Public/Elements/PCGExSampleNearestPath.h)

<!-- VERIFICATION REPORT
Node-Specific Properties: 30+ documented
  - DataMatching, ProjectionDetails, SampleInputs, SampleMethod, SortDirection
  - bAlwaysSampleWhenInside, bOnlySampleWhenInside, InclusionOffset
  - RangeMinInput, RangeMin, RangeMaxInput, RangeMax
  - WeightMethod, WeightOverDistance, WeightCurveLookup
  - bWriteSuccess, bWriteTransform, bWriteLookAtTransform, bWriteDistance
  - bWriteSignedDistance, bWriteIsInside, bWriteNumInside, bWriteNumSamples
  - bTagIfHasSuccesses, bTagIfHasNoSuccesses
Inherited Properties: From UPCGExPointsProcessorSettings
Inputs: In (Points), Paths (Points), Point Filters, Sorting Rules, Blending (Params)
Outputs: Out (Points)
-->
