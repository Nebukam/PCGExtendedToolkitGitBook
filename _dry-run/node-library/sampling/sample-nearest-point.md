---
icon: crosshairs
description: 'In editor :: PCGEx | Sample : Nearest Point'
---

# Sample : Nearest Point

Sample nearby target points based on **distance** and blend their attributes onto source points.

## Overview

This node finds target points within a specified distance range from each source point and samples data from them. It's the fundamental proximity-based sampling node - use it when you need to transfer attributes, compute distances, or create effects based on how close points are to each other.

## Key Behavior

```
Source Points                    Target Points
     ●───────────────────────────────● T1
     │
     ● S1 ←─── samples T1, T2 ───→ ● T2
     │        (within range)
     ●───────────────────────────────● T3

     ● S2 ←─── samples T3 only ──→   (T1, T2 out of range)
```

**Important**: Unlike [Sample Nearest Bounds](./sample-nearest-bounds.md) which tests containment (inside/outside), this node samples based on **proximity** - how close targets are to each source point.

## How Sampling Works

### 1. Range Filtering

For each source point, the node:
1. Calculates distance to every target point (using configurable distance method)
2. Filters targets to only those within `[RangeMin, RangeMax]`
3. If `RangeMax = 0`, **all targets** are considered (no maximum distance limit)

### 2. Sample Selection

When multiple targets are in range, the **Sample Method** determines what gets sampled:

| Method | Behavior |
|--------|----------|
| **All (Within range)** | Blend data from all targets in range (weighted by distance) |
| **Closest Target** | Use only the single closest target |
| **Farthest Target** | Use only the single farthest target |
| **Best Candidate** | Use Sorting Rules to pick the best match |

### 3. Weight Calculation

When sampling multiple targets (All mode), each sample's contribution is weighted. Weight sources:

| Weight Mode | Behavior |
|-------------|----------|
| **Distance** | Closer targets have more influence (default) |
| **Attribute** | Read weight directly from target attribute (replaces distance) |
| **Attribute Mult** | Multiply distance weight by target attribute value |

The **Weight Over Distance** curve further modifies weights, allowing custom falloff (linear, exponential, step functions, etc.).

### 4. Blending

Sampled attributes are blended using union blending. When multiple targets contribute:
- Each target's values are weighted
- Final output is the normalized weighted sum
- Transform components (position, rotation, scale) blend independently

## Use Cases

- **Scatter influence**: Points near specific locations inherit properties
- **Proximity coloring**: Blend colors based on distance to tagged points
- **LOD assignment**: Assign detail levels based on distance from camera points
- **Attribute transfer**: Copy data from one point set to another based on proximity
- **Distance fields**: Generate distance-to-nearest-target values

## Inputs

| Pin | Type | Required | Description |
|-----|------|----------|-------------|
| **In** | Points | Yes | Source points that will sample targets |
| **Targets** | Points | Yes | Target points to sample from |
| **Point Filters** | Filters | No | Filter which source points get processed |
| **Sorting Rules** | Sorting Rules | Conditional | Required when using Best Candidate selection |
| **Blending** | Blend Ops | No | Attribute blending operations (Individual interface) |
| **Match Rules** | Match Rules | No | Filter which targets can be sampled by which sources |

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Out** | Points | Source points with sampled data |
| **Unmatched** | Points | (Optional) Points that didn't match any targets via Match Rules |

## Settings

### Data Matching

<details>
<summary><strong>Data Matching</strong> <code>FPCGExMatchingDetails</code></summary>

Filter which targets get sampled by which source data using tag or attribute matching. Useful for having different point sets sample different target sets.

See [Match Rules](../../sub-nodes/match-rules/README.md) for details.

</details>

### Sampling

<details>
<summary><strong>Sample Method</strong> <code>EPCGExSampleMethod</code></summary>

How to select which targets to sample.

| Option | Behavior |
|--------|----------|
| **All (Within range)** | Blend data from all targets in range. Set RangeMax = 0 to include all targets regardless of distance. |
| **Closest Target** | Sample only the single closest target |
| **Farthest Target** | Sample only the single farthest target |
| **Best Candidate** | Use Sorting Rules to determine which target to sample |

Default: `All (Within range)`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Sort Direction</strong> <code>EPCGExSortDirection</code></summary>

Sort direction when using Best Candidate method.

| Option | Behavior |
|--------|----------|
| **Ascending** | Lower sort values first |
| **Descending** | Higher sort values first |

Default: `Ascending`

⚡ PCG Overridable
📋 Visible when: `Sample Method == Best Candidate`

</details>

<details>
<summary><strong>Range Min</strong></summary>

Minimum distance for a target to be sampled. Targets closer than this are ignored.

Supports constant value or attribute input.

Default: `0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Range Max</strong></summary>

Maximum distance for a target to be sampled. Targets farther than this are ignored.

**Special case**: Set to `0` to disable maximum distance - all targets will be considered regardless of distance.

Supports constant value or attribute input.

Default: `300`

⚡ PCG Overridable

</details>

### Weighting

<details>
<summary><strong>Distance Details</strong> <code>FPCGExDistanceDetails</code></summary>

How to calculate distance between source and target points. Affects both range filtering and weight calculation.

See [Distance Details](../../advanced-topics/distance-details.md) for options.

⚡ PCG Overridable
📋 Visible when: `Weight Mode != Attribute`

</details>

<details>
<summary><strong>Weight Mode</strong> <code>EPCGExSampleWeightMode</code></summary>

How to compute sample weights when blending multiple targets.

| Option | Behavior |
|--------|----------|
| **Distance** | Weight based on squared distance (closer = higher weight) |
| **Attribute** | Read weight value directly from target attribute (replaces distance) |
| **Attribute Mult** | Multiply distance weight by target attribute value |

Default: `Distance`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Weight Attribute</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

Attribute to read weight values from on targets.

⚡ PCG Overridable
📋 Visible when: `Weight Mode != Distance`

</details>

<details>
<summary><strong>Weight Method</strong> <code>EPCGExRangeType</code></summary>

How the weight curve input range is interpreted.

| Option | Behavior |
|--------|----------|
| **Full Range** | Curve input 0-1 maps to 0 to RangeMax distance |
| **Effective Range** | Curve input 0-1 maps to actual min-max sampled distances |

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

Curve that remaps weight based on distance. The curve X-axis is normalized distance (0 = closest, 1 = farthest), Y-axis is weight multiplier.

Default: Linear (0,0) to (1,1)

⚡ PCG Overridable (external asset only)

</details>

<details>
<summary><strong>Weight Curve Lookup</strong> <code>FPCGExCurveLookupDetails</code></summary>

Settings for curve lookup resolution and range mapping. Higher resolution gives more accurate curve sampling at the cost of memory.

</details>

### Apply Sampling

<details>
<summary><strong>Apply Sampling</strong> <code>FPCGExApplySamplingDetails</code></summary>

Optionally apply sampled transform data directly to output points. This is **in addition to** (not instead of) writing to attributes.

- **Apply Position**: Move points to weighted sampled position
- **Apply Rotation**: Rotate points to weighted sampled rotation
- **Apply Scale**: Scale points to weighted sampled scale
- **Apply Look At**: Orient points toward weighted sampled direction

</details>

### Blending

<details>
<summary><strong>Blending Interface</strong> <code>EPCGExBlendingInterface</code></summary>

How to blend attributes from sampled targets.

| Option | Behavior |
|--------|----------|
| **Individual** | Use Blending pin with blend operation sub-nodes for fine control |
| **Monolithic** | Use built-in attribute map (simpler but less flexible) |

Default: `Individual`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Target Attributes</strong> <code>TMap<FName, EPCGExBlendingType></code></summary>

Map of attribute names to blend types. Specifies which target attributes to sample and how to blend them.

⚡ PCG Overridable
📋 Visible when: `Blending Interface == Monolithic`

</details>

<details>
<summary><strong>Blend Point Properties</strong> <code>bool</code></summary>

Whether to blend point properties (transform, color, etc.) from targets in addition to custom attributes.

Default: `false`

⚡ PCG Overridable
📋 Visible when: `Blending Interface == Monolithic`

</details>

<details>
<summary><strong>Point Properties Blending Settings</strong> <code>FPCGExPropertiesBlendingDetails</code></summary>

Detailed settings for how each point property (Density, Color, Steepness, etc.) is blended.

⚡ PCG Overridable
📋 Visible when: `Blend Point Properties == true AND Blending Interface == Monolithic`

</details>

### Outputs

All output attributes are optional (toggle + attribute name):

| Output | Type | Description |
|--------|------|-------------|
| **Success** | `bool` | Whether at least one target was sampled |
| **Transform** | `FTransform` | Weighted transform from sampled targets |
| **LookAt Transform** | `FTransform` | Transform oriented toward sampled targets |
| **Distance** | `double` | Weighted distance to sampled targets |
| **Signed Distance** | `double` | Signed distance based on axis direction |
| **Component Wise Distance** | `FVector` | Per-axis (X,Y,Z) distance |
| **Angle** | `double` | Angle between source and target directions |
| **Num Samples** | `int32` | Number of targets that were sampled |
| **Sampled Index** | `int32` | Index of the closest sampled target |

**Distance output options**:
- **Normalized**: Output 0-1 range based on max sampled distance across all points
- **OneMinus**: Invert normalized distance (1 at closest, 0 at max)
- **Scale**: Multiply output by factor (use -1 to invert sign)

**LookAt output options**:
- **Align**: Which axis to align the look-at vector to (Forward, Right, Up)
- **Use Up from...**: Source for up vector (Constant, Source attribute, Target attribute)
- **Up Vector**: The up vector value

**Angle output options**:
- **Axis**: Which target axis to measure angle against
- **Range**: Output format (PI Radians, TAU Radians, Normalized 0-1, Degrees)

### Tagging

- **Tag If Has Successes**: Add tag if at least one point successfully sampled targets
- **Tag If Has No Successes**: Add tag if no points sampled any targets

### Advanced

<details>
<summary><strong>Process Filtered Out As Fails</strong> <code>bool</code></summary>

When point filters exclude a point, mark it as failed sampling (write failure values to outputs). Disable to preserve existing attribute values on filtered points.

Default: `true`

</details>

<details>
<summary><strong>Prune Failed Samples</strong> <code>bool</code></summary>

Remove points that didn't sample any targets from the output.

Default: `false`

</details>

<details>
<summary><strong>Ignore Self</strong> <code>bool</code></summary>

When source and target are the same data, prevent points from sampling themselves.

Default: `true`

</details>

## Example: Distance-Based Color Gradient

**Goal**: Color points based on their distance to "hot spot" points.

1. Create hot spot points with a `Temperature` attribute
2. Use Sample Nearest Point with:
   - Sample Method: `All (Within range)`
   - Range Max: `500` (influence radius)
   - Weight Over Distance: Exponential falloff curve
   - Blending: Forward `Temperature` attribute with `Average` blending
3. Points close to hot spots get high temperature values; distant points get blended averages

## Comparison with Other Sampling Nodes

| Node | Samples Based On | Best For |
|------|------------------|----------|
| **Sample Nearest Point** | Distance (proximity) | Closest neighbor queries, attribute transfer |
| **Sample Nearest Bounds** | Containment (inside/outside) | Zone detection, volume assignment |
| **Sample Nearest Path** | Distance to spline | Path-based effects, following curves |
| **Sample Nearest Surface** | Distance to mesh | Surface projection, terrain snapping |

---

📦 **Module**: `PCGExElementsSampling` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsSampling/Public/Elements/PCGExSampleNearestPoint.h)
