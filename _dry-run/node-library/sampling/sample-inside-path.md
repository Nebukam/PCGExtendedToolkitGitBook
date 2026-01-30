---
icon: crosshairs
description: 'In editor :: PCGEx | Sample : Inside Path'
---

# Sample : Inside Path

Test whether **target points lie inside path polygons** and sample from those contained points.

## Overview

This node is the **inverse** of Sample Nearest Path - instead of sampling paths from points, it samples **points that are inside paths**. Each path tests which target points fall within its 2D projected boundary, collecting data from contained points.

## Key Behavior

```
    Path A (closed polygon)          Target Points
    ┌─────────────────────┐
    │                     │         ● T1 (outside)
    │   ● T2 (INSIDE)     │           → not sampled
    │                     │
    │         ● T3        │         Path A samples T2, T3
    │         (INSIDE)    │
    └─────────────────────┘


    Path B (open line) ─────────●─────────●─────────
         (not a valid polygon for inside testing)
```

**Key differences from [Sample Nearest Path](./sample-nearest-path.md)**:
- **Paths sample points** (not points sample paths)
- Output is per-path, not per-point
- Tests point containment within path polygons
- Useful for counting/aggregating points inside regions

## How Sampling Works

### 1. Path Filtering

Paths are filtered before processing based on `Process Inputs`:

| Mode | Behavior |
|------|----------|
| **All** | Process all input paths |
| **Closed Loops Only** | Only process paths that form closed loops |
| **Open Lines Only** | Only process paths that are open |

### 2. Containment Testing

For each path, the node:
1. Projects all target points onto a 2D plane
2. Tests if each projected point is inside the path polygon
3. Optionally filters by distance to path edges
4. Collects all contained points for sampling

### 3. Output Modes

| Mode | Behavior |
|------|----------|
| **All** | Output all paths, whether they sampled targets or not |
| **Success Only** | Output only paths that contained at least one target point |
| **Split** | Split to two output pins (success/fail) |

## Use Cases

- **Zone population counts**: Count how many points are inside each zone
- **Region aggregation**: Aggregate data from all points within a region
- **Containment filtering**: Filter paths based on whether they contain points
- **Density analysis**: Analyze point density within path boundaries

## Inputs

| Pin | Type | Required | Description |
|-----|------|----------|-------------|
| **Paths** | Points | Yes | Paths (polylines) that define containment regions |
| **Targets** | Points | Yes | Target points to test for containment |
| **Sorting Rules** | Sorting Rules | Conditional | Required when using Best Candidate selection |
| **Match Rules** | Match Rules | No | Filter which targets can be sampled by which paths |

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Paths** | Points | Paths with sampled data (or split into success/fail) |
| **Failed** | Points | (Split mode) Paths that didn't contain any targets |

## Settings

### Data Matching

<details>
<summary><strong>Data Matching</strong> <code>FPCGExMatchingDetails</code></summary>

Filter which targets get sampled by which paths using tag or attribute matching.

</details>

### Projection

<details>
<summary><strong>Projection Details</strong> <code>FPCGExGeo2DProjectionDetails</code></summary>

2D projection settings for containment testing. Defines which plane to project onto.

⚡ PCG Overridable

</details>

### Sampling

<details>
<summary><strong>Process Inputs</strong> <code>EPCGExPathSamplingIncludeMode</code></summary>

Which paths to process.

| Option | Behavior |
|--------|----------|
| **All** | Process all input paths |
| **Closed Loops Only** | Only process closed loop paths |
| **Open Lines Only** | Only process open paths |

Default: `All`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Sample Method</strong> <code>EPCGExSampleMethod</code></summary>

How to select which targets to sample when multiple are inside.

| Option | Behavior |
|--------|----------|
| **All (Within range)** | Sample all targets inside the path |
| **Closest Target** | Sample only the closest target to path edge |
| **Farthest Target** | Sample only the farthest target from path edge |
| **Best Candidate** | Use Sorting Rules to determine which target to sample |

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

If enabled, always sample points that are geometrically inside, even if the edge distance exceeds RangeMax.

Default: `true`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Only Sample When Inside</strong> <code>bool</code></summary>

If enabled, only sample points that are geometrically inside the path boundary.

Default: `true`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Inclusion Offset</strong> <code>double</code></summary>

Offset (inset/outset) applied to path boundaries for containment testing.

Default: `0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Distance Type</strong> <code>EPCGExDistanceType</code></summary>

How to calculate distance.

| Option | Behavior |
|--------|----------|
| **Euclidian** | Standard straight-line distance |
| **Manhattan** | Sum of axis distances |
| **Chebyshev** | Maximum single-axis distance |

Default: `Euclidian`

</details>

<details>
<summary><strong>Range Min</strong></summary>

Minimum distance for a target to be sampled.

Supports constant value or attribute input.

Default: `0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Range Max</strong></summary>

Maximum distance for a target to be sampled. Set to 0 for unlimited range.

Supports constant value or attribute input.

Default: `300`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Height Inclusion</strong> <code>double</code></summary>

Maximum vertical distance for containment testing. Set to 0 for infinite height.

Default: `0`

</details>

### Weighting

<details>
<summary><strong>Weight Method</strong> <code>EPCGExRangeType</code></summary>

How the weight curve input range is interpreted.

Default: `Full Range`

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

<details>
<summary><strong>Output Mode</strong> <code>EPCGExSampleInsidePathOutput</code></summary>

How to output paths based on sampling success.

| Option | Behavior |
|--------|----------|
| **All** | Output all paths regardless of sampling success |
| **Success Only** | Only output paths that sampled at least one target |
| **Split** | Split into two outputs (success and failed pins) |

Default: `All`

</details>

All output attributes are optional (toggle + attribute name). Note that outputs are written to **path data attributes** (using `@Data.` prefix):

| Output | Type | Description |
|--------|------|-------------|
| **Success** | `bool` | Whether any targets were inside this path |
| **Distance** | `double` | Weighted distance to sampled targets |
| **Num Inside** | `int32` | Number of targets inside this path |
| **Num Samples** | `int32` | Number of targets sampled |

**Num Inside options**:
- **Only if Closed Path**: Only count inside points for closed loop paths

### Tagging

- **Tag If Has Successes**: Add tag if at least one path sampled targets
- **Tag If Has No Successes**: Add tag if no paths sampled any targets

### Advanced

<details>
<summary><strong>Ignore Self</strong> <code>bool</code></summary>

Prevent paths from sampling their own points when source and targets overlap.

Default: `true`

</details>

## Example: Zone Density Analysis

**Goal**: Calculate how many scatter points are inside each zone.

1. Create zone polygons as closed paths with `ZoneName` attribute
2. Generate scatter points across the area
3. Use Sample Inside Path with:
   - Only Sample When Inside: `true`
   - Write Num Inside: enabled
4. Each zone path now has a `NumInside` attribute showing point density

## Comparison with Related Nodes

| Node | Samples From | Samples Into | Best For |
|------|--------------|--------------|----------|
| **Sample Inside Path** | Points | Paths | Counting points per region |
| **Sample Nearest Path** | Paths | Points | Distance to paths |
| **Sample Nearest Bounds** | Bounds | Points | Volume containment |

---

📦 **Module**: `PCGExElementsSampling` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsSampling/Public/Elements/PCGExSampleInsidePath.h)
