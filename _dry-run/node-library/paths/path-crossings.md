---
icon: crosshairs
description: 'In editor :: PCGEx | Path × Path Crossings'
---

# Path Crossings

Finds and inserts crossing points where paths intersect.

## How It Works

1. Build spatial **octree** for efficient edge lookups
2. Find **intersections** between path edges
3. Insert new **crossing points** at intersection locations
4. Optionally **blend** properties at crossings

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **In** | Points | Path points to process |
| **Can Cut Filters** | Filters | Optional filters for cutter eligibility |
| **Can Be Cut Filters** | Filters | Optional filters for cut eligibility |
| **Blending** | Sub-point Blending Factory | Blending for crossing points |

## Settings

### Filtering

<details>
<summary><strong>Self Intersection Only</strong> <code>bool</code></summary>

Only find crossings within each path (self-intersections), ignoring other paths.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Can Be Cut Tag</strong> <code>FName</code></summary>

Tag that marks paths as cuttable. Empty = all paths are cuttable.

Default: `None`

*Visible when Self Intersection Only = false*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Invert Can Be Cut Tag</strong> <code>bool</code></summary>

Paths WITHOUT the tag are cuttable instead.

Default: `false`

*Visible when Self Intersection Only = false*

</details>

<details>
<summary><strong>Can Cut Tag</strong> <code>FName</code></summary>

Tag that marks paths as cutters. Empty = all paths are cutters.

Default: `None`

*Visible when Self Intersection Only = false*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Invert Can Cut Tag</strong> <code>bool</code></summary>

Paths WITHOUT the tag are cutters instead.

Default: `false`

*Visible when Self Intersection Only = false*

</details>

### Intersection

<details>
<summary><strong>Create Point At Crossings</strong> <code>bool</code></summary>

Insert new points at crossing locations.

Default: `true`

</details>

<details>
<summary><strong>Intersection Details</strong> <code>FPCGExPathEdgeIntersectionDetails</code></summary>

Configuration for intersection detection (tolerance, 2D mode, etc.)

⚡ PCG Overridable

</details>

<details>
<summary><strong>Blending</strong> <code>UPCGExSubPointsBlendInstancedFactory</code></summary>

How to blend properties at crossing points.

⚡ PCG Overridable

</details>

### Cross Blending

<details>
<summary><strong>Do Cross Blending</strong> <code>bool</code></summary>

Enable blending from the crossing path's properties.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Crossing Carry Over</strong> <code>FPCGExCarryOverDetails</code></summary>

Attributes/properties to carry from crossing paths.

*Visible when Do Cross Blending = true*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Crossing Blending</strong> <code>FPCGExBlendingDetails</code></summary>

Blending settings for cross-path properties.

Default: Properties = `Average`, Attributes = `None`

*Visible when Do Cross Blending = true*

⚡ PCG Overridable

</details>

### Outputs

<details>
<summary><strong>Write Alpha</strong> <code>bool</code></summary>

Write crossing alpha (position along segment) to an attribute.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Crossing Alpha</strong> <code>FName</code></summary>

Name of the alpha attribute.

Default: `Alpha`

*Visible when Write Alpha = true*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Default Alpha</strong> <code>double</code></summary>

Alpha value for non-crossing points.

Default: `-1`

*Visible when Write Alpha = true*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Orient Crossing</strong> <code>bool</code></summary>

Orient crossing points along the crossing direction.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Write Cross Direction</strong> <code>bool</code></summary>

Write the crossing direction vector to an attribute.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Write Is Point Crossing</strong> <code>bool</code></summary>

Write a boolean flag marking crossing points.

Default: `false`

⚡ PCG Overridable

</details>

### Tagging

<details>
<summary><strong>Tag If Has Crossing</strong> <code>bool</code></summary>

Add tag to paths that have crossings.

Default: `false`

</details>

<details>
<summary><strong>Tag If Has No Crossings</strong> <code>bool</code></summary>

Add tag to paths without crossings.

Default: `false`

</details>

<details>
<summary><strong>Omit Uncuttable From Output</strong> <code>bool</code></summary>

Exclude paths that were only cutters (not cut themselves).

Default: `false`

</details>

## Examples

**Find all path intersections**:
- Self Intersection Only: `false`
- Create Point At Crossings: `true`

**Find self-intersections only**:
- Self Intersection Only: `true`

**Mark crossing points for filtering**:
- Write Is Point Crossing: Enabled
- Is Point Crossing: `IsCrossing`

## Related

- [Bounds Intersection](./path-bounds-intersection.md) - Intersect with bounds
- [Subdivide](./subdivide.md) - Add points along path

---

📦 **Module**: `PCGExElementsPaths` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPaths/Private/Elements/PCGExPathCrossings.cpp)
