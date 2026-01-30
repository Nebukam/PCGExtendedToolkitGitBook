---
icon: crosshairs
description: 'In editor :: PCGEx | Sample : Nearest Path'
---

# Sample : Nearest Path

Sample the nearest point set paths (polylines) based on **distance to edges** and optionally **inside/outside containment**.

## Overview

This node samples from point-based paths (polylines created from point sets) rather than Unreal splines. For each source point, it finds the closest point on path edges and samples data from those paths. It supports 2D projection for inside/outside testing on closed loops.

## Key Behavior

```
     Path A (closed loop)
    ┌─────────────────────┐
    │                     │
    │   ● P1 (INSIDE)     │
    │     → samples A     │
    │                     │
    └─────────────────────┘

         ● P2 (OUTSIDE, within range)
           → samples A (edge distance)

                              ● P3 (OUTSIDE, out of range)
                                → sampling FAILS

    Path B (open line) ─────────●─────────●─────────
                                          │
         ● P4 (within range of edge)      │
           → samples B                    │
```

**Key differences from [Sample Nearest Spline](./sample-nearest-spline.md)**:
- Paths are **point sets**, not Unreal Splines
- Supports 2D projection for **inside/outside testing** on closed loops
- Can filter to sample only closed loops or only open lines

## How Sampling Works

### 1. Path Filtering

Paths are filtered before sampling based on `Sample Inputs`:

| Mode | Behavior |
|------|----------|
| **All** | Sample all input paths |
| **Closed Loops Only** | Only sample paths marked as closed loops |
| **Open Lines Only** | Only sample paths that are not closed |

### 2. Inside/Outside Testing

For closed loop paths, the node projects points onto a 2D plane to determine if they're **inside** the path polygon:

- **bOnlySampleWhenInside**: Only sample paths where the point is geometrically inside
- **bAlwaysSampleWhenInside**: If inside, sample regardless of distance range
- **Inclusion Offset**: Inset/outset the path boundary for inclusion testing
- **Height Inclusion**: Maximum vertical distance for inclusion (0 = infinite)

### 3. Edge Sampling

For each path in range, the node finds the **closest point on any edge**:
1. Projects the source point onto each edge segment
2. Finds the closest projected point
3. Computes distance, time (0-1 along path), and segment lerp

### 4. Specific Alpha Sampling

Instead of sampling at the closest point, you can sample at a **specific position** along the path:

| Alpha Mode | Input Interpretation |
|------------|---------------------|
| **Alpha** | 0-1 normalized position along path |
| **Time** | Segment index (0 to N) |
| **Distance** | Distance along path in world units |

## Use Cases

- **Path following**: Sample nearest path position/direction for AI or effects
- **Zone containment**: Test if points are inside closed path boundaries
- **River/road proximity**: Get distance and direction to path edges
- **Path-based attribute transfer**: Blend data from nearby paths
- **Procedural fencing**: Orient objects along path edges

## Inputs

| Pin | Type | Required | Description |
|-----|------|----------|-------------|
| **In** | Points | Yes | Source points to sample from |
| **Paths** | Points | Yes | Point sets defining paths (polylines) |
| **Point Filters** | Filters | No | Filter which source points get processed |
| **Sorting Rules** | Sorting Rules | Conditional | Required when using Best Candidate selection |
| **Blending** | Blend Ops | No | Attribute blending operations |
| **Match Rules** | Match Rules | No | Filter which paths can be sampled by which sources |

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Out** | Points | Source points with sampled data |
| **Unmatched** | Points | (Optional) Points that didn't match any paths via Match Rules |

## Settings

### Data Matching

<details>
<summary><strong>Data Matching</strong> <code>FPCGExMatchingDetails</code></summary>

Filter which paths get sampled by which source data using tag or attribute matching.

</details>

### Projection

<details>
<summary><strong>Projection Details</strong> <code>FPCGExGeo2DProjectionDetails</code></summary>

2D projection settings for inside/outside testing on closed loops. Defines which plane to project onto (XY, XZ, YZ) and projection direction.

⚡ PCG Overridable

</details>

### Sampling

<details>
<summary><strong>Sample Inputs</strong> <code>EPCGExPathSamplingIncludeMode</code></summary>

Which paths to include for sampling.

| Option | Behavior |
|--------|----------|
| **All** | Sample all input paths |
| **Closed Loops Only** | Only sample paths that form closed loops |
| **Open Lines Only** | Only sample paths that are open (not closed) |

Default: `All`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Sample Method</strong> <code>EPCGExSampleMethod</code></summary>

How to select which paths to sample when multiple are in range.

| Option | Behavior |
|--------|----------|
| **All (Within range)** | Blend data from all paths in range |
| **Closest Target** | Sample only the closest path edge |
| **Farthest Target** | Sample only the farthest path edge |
| **Best Candidate** | Use Sorting Rules to determine which path to sample |

Default: `All (Within range)`

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
<summary><strong>Always Sample When Inside</strong> <code>bool</code></summary>

If enabled, always sample paths when the point is geometrically inside, even if the edge distance exceeds RangeMax.

Default: `true`

</details>

<details>
<summary><strong>Only Sample When Inside</strong> <code>bool</code></summary>

If enabled, only sample paths where the point is geometrically inside the path boundary. Points outside any path will fail sampling.

Default: `true`

</details>

<details>
<summary><strong>Inclusion Offset</strong> <code>double</code></summary>

Offset (inset/outset) applied to path boundaries for inclusion testing. Positive values shrink the boundary, negative values expand it.

Default: `0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Range Min</strong></summary>

Minimum distance for a path edge to be sampled.

Supports constant value or attribute input.

Default: `0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Range Max</strong></summary>

Maximum distance for a path edge to be sampled. Set to 0 for unlimited range.

Supports constant value or attribute input.

Default: `300`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Height Inclusion</strong> <code>double</code></summary>

Maximum vertical distance for inside/outside testing. Set to 0 for infinite height (purely 2D projection).

Default: `0`

</details>

<details>
<summary><strong>Sample Specific Alpha</strong> <code>bool</code></summary>

Instead of sampling at the closest point on the path, sample at a specific position along the path.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Sample Alpha Mode</strong> <code>EPCGExPathSampleAlphaMode</code></summary>

How to interpret the sample alpha value.

| Option | Behavior |
|--------|----------|
| **Alpha** | 0-1 normalized position (0 = start, 1 = end) |
| **Time** | Segment index value (0 to NumSegments) |
| **Distance** | Distance along path in world units |

Default: `Alpha`

⚡ PCG Overridable
📋 Visible when: `Sample Specific Alpha == true`

</details>

<details>
<summary><strong>Wrap Closed Loop Alpha</strong> <code>bool</code></summary>

For closed loops, wrap out-of-bounds alpha values (e.g., 1.5 becomes 0.5).

Default: `true`

⚡ PCG Overridable
📋 Visible when: `Sample Specific Alpha == true`

</details>

<details>
<summary><strong>Sample Alpha</strong></summary>

The alpha value to sample at.

Supports constant value or attribute input.

Default: `0.5`

⚡ PCG Overridable
📋 Visible when: `Sample Specific Alpha == true`

</details>

### Apply Sampling

<details>
<summary><strong>Apply Sampling</strong> <code>FPCGExApplySamplingDetails</code></summary>

Optionally apply sampled transform data directly to output points.

</details>

### Weighting

<details>
<summary><strong>Distance Settings</strong> <code>EPCGExDistance</code></summary>

How to calculate distance from source points for range testing.

Default: `Center`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Weight Method</strong> <code>EPCGExRangeType</code></summary>

How the weight curve input range is interpreted.

| Option | Behavior |
|--------|----------|
| **Full Range** | Curve 0-1 maps to 0 to RangeMax |
| **Effective Range** | Curve 0-1 maps to actual sampled distance range |

Default: `Full Range`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Weight From Original Transform</strong> <code>bool</code></summary>

If enabled, use the original point transform as base for weighted blending. If disabled, start from identity transform.

Default: `true`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Use Local Curve</strong> <code>bool</code></summary>

Whether to use an in-editor curve or an external curve asset.

Default: `false`

</details>

<details>
<summary><strong>Weight Over Distance</strong> <code>FRuntimeFloatCurve</code> or <code>UCurveFloat</code></summary>

Curve that remaps weight based on distance.

⚡ PCG Overridable (external asset only)

</details>

<details>
<summary><strong>Weight Curve Lookup</strong> <code>FPCGExCurveLookupDetails</code></summary>

Settings for curve lookup resolution.

</details>

### Outputs

All output attributes are optional (toggle + attribute name):

| Output | Type | Description |
|--------|------|-------------|
| **Success** | `bool` | Whether sampling succeeded |
| **Transform** | `FTransform` | Weighted transform from sampled path points |
| **LookAt Transform** | `FTransform` | Transform oriented toward sampled path |
| **Distance** | `double` | Distance to path edge |
| **Signed Distance** | `double` | Signed distance based on axis |
| **Component Wise Distance** | `FVector` | Per-axis (X,Y,Z) distance |
| **Angle** | `double` | Angle to path direction |
| **Time** | `double` | Normalized position along path (0-1) |
| **Segment Time** | `double` | Lerp value within the sampled segment (0-1) |
| **Num Inside** | `int32` | Number of paths this point is inside |
| **Num Samples** | `int32` | Number of paths sampled |
| **Closed Loop** | `bool` | Whether the closest sampled path is a closed loop |

**Distance output options**:
- **Normalized**: Output 0-1 range
- **OneMinus**: Invert normalized distance
- **Scale**: Multiply output by factor

**Signed Distance options**:
- **Axis**: Axis for sign calculation
- **Only if Closed Path**: Only sign distance for closed loop paths

**LookAt options**:
- **Align**: Axis to align look-at vector to
- **Use Up from...**: Up vector source (Constant, Source attribute, Target axis)

### Additional Outputs

<details>
<summary><strong>Num Inside</strong></summary>

Write the number of paths this point lies inside.

- **Only if Closed Spline**: Only count closed loop paths

</details>

<details>
<summary><strong>Closed Loop</strong></summary>

Write whether the sampled path is a closed loop.

</details>

### Tagging

- **Tag If Has Successes**: Add tag if at least one point sampled a path
- **Tag If Has No Successes**: Add tag if no points sampled any paths

### Advanced

<details>
<summary><strong>Process Filtered Out As Fails</strong> <code>bool</code></summary>

Mark filtered-out points as failed sampling.

Default: `true`

</details>

<details>
<summary><strong>Prune Failed Samples</strong> <code>bool</code></summary>

Remove points that failed to sample any paths.

Default: `false`

</details>

<details>
<summary><strong>Ignore Self</strong> <code>bool</code></summary>

Prevent source points from sampling themselves when source is also a path input.

Default: `true`

</details>

## Example: Path-Based Zone Assignment

**Goal**: Assign zone IDs to points based on which closed path polygon they're inside.

1. Create closed path polygons with `ZoneID` attribute on path points
2. Use Sample Nearest Path with:
   - Sample Inputs: `Closed Loops Only`
   - Only Sample When Inside: `true`
   - Blending: Forward `ZoneID` attribute
3. Points inside paths get the zone ID; points outside fail sampling

## Comparison with Related Nodes

| Node | Input Type | Key Feature |
|------|------------|-------------|
| **Sample Nearest Path** | Point sets (polylines) | 2D inside/outside testing |
| **Sample Nearest Spline** | Unreal Splines | Smooth curve sampling |
| **Sample Inside Path** | Point sets | Boolean containment only |

---

📦 **Module**: `PCGExElementsSampling` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsSampling/Public/Elements/PCGExSampleNearestPath.h)
