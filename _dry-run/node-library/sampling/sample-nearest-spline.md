---
icon: crosshairs
description: 'In editor :: PCGEx | Sample : Nearest Spline'
---

# Sample : Nearest Spline

Sample the nearest Unreal Spline components based on **distance to the spline curve**.

## Overview

This node samples from **Unreal Engine Spline data** (not point-based paths). For each source point, it finds the closest point on spline curves and samples transform, tangent, and distance data. It supports smooth curve interpolation and can output spline-specific data like tangent vectors.

## Key Behavior

```
                  Spline A (closed loop)
              ╭─────────────────────╮
             ╱                       ╲
            │     ● P1 (INSIDE)       │
            │       → samples A       │
             ╲                       ╱
              ╰─────────────────────╯

         ● P2 (OUTSIDE, within range)
           → samples closest point on A

                                      ● P3 (out of range)
                                        → sampling FAILS

    Spline B ~~~~~~~~~~~~●~~~~~~~~~~~~●~~~~~~~~~~~~
                         │ closest point
         ● P4 ───────────┘
           → samples B
```

**Key differences from [Sample Nearest Path](./sample-nearest-path.md)**:
- Samples from **Unreal Spline components**, not point sets
- Provides **smooth curve interpolation** (bezier curves)
- Outputs **tangent vectors** at sampled positions
- Supports **depth** calculation for layered effects

## How Sampling Works

### 1. Spline Filtering

Splines are filtered before sampling based on `Sample Inputs`:

| Mode | Behavior |
|------|----------|
| **All** | Sample all input splines |
| **Closed Loop Only** | Only sample splines marked as closed loops |
| **Open Spline Only** | Only sample splines that are not closed |

### 2. Closest Point Finding

For each spline in range, the node:
1. Uses `FindInputKeyClosestToWorldLocation` to find the closest point on the curve
2. Gets the full transform (position, rotation, scale) at that point
3. Computes distance from source point to spline point

### 3. Specific Alpha Sampling

Instead of sampling at the closest point, you can sample at a **specific position** along the spline:

| Alpha Mode | Input Interpretation |
|------------|---------------------|
| **Alpha** | 0-1 normalized position along spline |
| **Time** | Segment index (spline key) |
| **Distance** | Distance along spline in world units |

### 4. Depth Calculation

The **Depth** output provides a normalized distance value (0-1) within a configurable range, useful for:
- Gradient effects near splines
- Falloff zones
- Layered influence

| Depth Mode | Behavior |
|------------|----------|
| **Min** | Use minimum depth across all sampled splines |
| **Max** | Use maximum depth across all sampled splines |
| **Average** | Average depth across all sampled splines |

## Use Cases

- **Spline-based effects**: Sample positions along curves for particle systems, decals
- **Road/river sampling**: Get closest point on roads or rivers for placement
- **Tangent-aligned objects**: Orient objects along spline direction
- **Distance fields**: Generate distance-to-spline values for shaders
- **Inside/outside testing**: Detect points inside closed spline loops

## Inputs

| Pin | Type | Required | Description |
|-----|------|----------|-------------|
| **In** | Points | Yes | Source points to sample from |
| **Targets** | Splines | Yes | Unreal Spline data to sample |
| **Point Filters** | Filters | No | Filter which source points get processed |

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Out** | Points | Source points with sampled data |

## Settings

### Sampling

<details>
<summary><strong>Sample Inputs</strong> <code>EPCGExSplineSamplingIncludeMode</code></summary>

Which splines to include for sampling.

| Option | Behavior |
|--------|----------|
| **All** | Sample all input splines |
| **Closed Loop Only** | Only sample closed loop splines |
| **Open Spline Only** | Only sample non-closed splines |

Default: `All`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Sample Method</strong> <code>EPCGExSampleMethod</code></summary>

How to select which splines to sample when multiple are in range.

| Option | Behavior |
|--------|----------|
| **All (Within range)** | Blend data from all splines in range |
| **Closest Target** | Sample only the single closest spline |
| **Farthest Target** | Sample only the single farthest spline |

Default: `All (Within range)`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Spline Scales Ranges</strong> <code>bool</code></summary>

If enabled, the spline's scale affects the range values. Larger splines will have proportionally larger effective ranges.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Range Min</strong></summary>

Minimum distance for a spline to be sampled.

Supports constant value or attribute input.

Default: `0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Range Max</strong></summary>

Maximum distance for a spline to be sampled. Set to 0 for unlimited range.

Supports constant value or attribute input.

Default: `300`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Sample Specific Alpha</strong> <code>bool</code></summary>

Instead of sampling at the closest point on the spline, sample at a specific position.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Sample Alpha Mode</strong> <code>EPCGExSplineSampleAlphaMode</code></summary>

How to interpret the sample alpha value.

| Option | Behavior |
|--------|----------|
| **Alpha** | 0-1 normalized position (0 = start, 1 = end) |
| **Time** | Spline key/segment value |
| **Distance** | Distance along spline in world units |

Default: `Alpha`

⚡ PCG Overridable
📋 Visible when: `Sample Specific Alpha == true`

</details>

<details>
<summary><strong>Wrap Closed Loop Alpha</strong> <code>bool</code></summary>

For closed loop splines, wrap out-of-bounds alpha values.

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

Default: Linear inverse (1,0) to (0,1)

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
| **Transform** | `FTransform` | Weighted transform from sampled spline point |
| **LookAt Transform** | `FTransform` | Transform oriented toward sampled spline |
| **Arrive Tangent** | `FVector` | Tangent arriving at the sampled point |
| **Leave Tangent** | `FVector` | Tangent leaving the sampled point |
| **Distance** | `double` | Distance to spline |
| **Signed Distance** | `double` | Signed distance based on axis |
| **Component Wise Distance** | `FVector` | Per-axis (X,Y,Z) distance |
| **Angle** | `double` | Angle to spline direction |
| **Time** | `double` | Normalized position along spline (0-1) |

**Distance output options**:
- **Normalized**: Output 0-1 range
- **OneMinus**: Invert normalized distance
- **Scale**: Multiply output by factor

**Signed Distance options**:
- **Axis**: Axis for sign calculation
- **Only if Closed Spline**: Only sign distance for closed loop splines

**LookAt options**:
- **Align**: Axis to align look-at vector to
- **Use Up from...**: Up vector source (Constant, Source attribute, Target axis)

### Additional Outputs

<details>
<summary><strong>Num Inside</strong></summary>

Write the number of splines this point lies inside (based on right-hand side of spline).

- **Only if Closed Spline**: Only count closed loop splines

</details>

<details>
<summary><strong>Num Samples</strong></summary>

Write the number of splines sampled.

</details>

<details>
<summary><strong>Closed Loop</strong></summary>

Write whether the sampled spline is a closed loop.

</details>

<details>
<summary><strong>Total Weight</strong></summary>

Write the total computed weight for this point.

</details>

<details>
<summary><strong>Depth</strong></summary>

Write normalized depth value (0-1) within a specified range.

| Setting | Description |
|---------|-------------|
| **Range** | Maximum depth distance (default: 100) |
| **Invert** | Flip depth (0 becomes 1 at spline) |
| **Mode** | Min, Max, or Average across sampled splines |

</details>

### Tagging

- **Tag If Has Successes**: Add tag if at least one point sampled a spline
- **Tag If Has No Successes**: Add tag if no points sampled any splines

### Advanced

<details>
<summary><strong>Process Filtered Out As Fails</strong> <code>bool</code></summary>

Mark filtered-out points as failed sampling.

Default: `true`

</details>

<details>
<summary><strong>Prune Failed Samples</strong> <code>bool</code></summary>

Remove points that failed to sample any splines.

Default: `false`

</details>

<details>
<summary><strong>Use Octree</strong> <code>bool</code></summary>

Use octree spatial partitioning for faster spline lookup. Limits spline "reach" to their bounding boxes.

Default: `true`

⚡ PCG Overridable

</details>

## Example: Spline-Aligned Road Markers

**Goal**: Place road markers along a road spline, oriented to follow the road direction.

1. Create a road spline in the level
2. Generate scatter points near the road
3. Use Sample Nearest Spline with:
   - Sample Method: `Closest Target`
   - Write LookAt Transform: enabled
   - Write Arrive Tangent: enabled
4. Apply the LookAt transform to orient markers along the road

## Comparison with Related Nodes

| Node | Input Type | Key Feature |
|------|------------|-------------|
| **Sample Nearest Spline** | Unreal Splines | Smooth curves, tangent vectors |
| **Sample Nearest Path** | Point sets (polylines) | 2D inside/outside testing |
| **Sample Surface Guided** | Meshes + Splines | Surface projection guided by splines |

---

📦 **Module**: `PCGExElementsSampling` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsSampling/Public/Elements/PCGExSampleNearestSpline.h)
