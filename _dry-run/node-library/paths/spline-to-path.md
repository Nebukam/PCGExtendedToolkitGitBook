---
icon: project-diagram
description: 'In editor :: PCGEx | Spline to Path'
---

# Spline to Path

Converts Unreal spline data into path point sequences.

## Overview

Spline to Path extracts point data from Unreal Engine splines, converting them into PCG path points. This brings external splines (from landscape tools, blueprint actors, or other sources) into the PCG ecosystem where they can be processed by path nodes.

## How It Works

1. **Read spline data** from input
2. **Extract spline points** with positions and transforms
3. **Write tangent attributes** if enabled
4. **Forward tags** from source splines
5. **Apply carry-over settings** for metadata

## Settings

### Transform

<details>
<summary><strong>Transform Details</strong> <code>FPCGExLeanTransformDetails</code></summary>

How to apply transforms to output points.

⚡ PCG Overridable

</details>

### Sampling

<details>
<summary><strong>Sample Inputs</strong> <code>EPCGExSplineSamplingIncludeMode</code></summary>

Which input splines to include in sampling.

| Option | Meaning |
|--------|---------|
| **All** | Process all splines |
| **Paths** | Only path-type splines |
| **Splines** | Only spline-type data |

Default: `All`

⚡ PCG Overridable

</details>

### Tangent Output

<details>
<summary><strong>Write Arrive Tangent</strong> <code>bool</code></summary>

Write the spline's arrive tangent vector to an attribute.

Default: `true`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Arrive Tangent</strong> <code>FName</code></summary>

Attribute name for arrive tangent output.

*Visible when Write Arrive Tangent is enabled*

Default: `ArriveTangent`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Write Leave Tangent</strong> <code>bool</code></summary>

Write the spline's leave tangent vector to an attribute.

Default: `true`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Leave Tangent</strong> <code>FName</code></summary>

Attribute name for leave tangent output.

*Visible when Write Leave Tangent is enabled*

Default: `LeaveTangent`

⚡ PCG Overridable

</details>

### Additional Outputs

<details>
<summary><strong>Write Length At Point</strong> <code>bool</code></summary>

Write the cumulative spline length at each point to an attribute.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Length at Point</strong> <code>FName</code></summary>

Attribute name for length at point output.

*Visible when Write Length At Point is enabled*

Default: `LengthAtPoint`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Write Alpha</strong> <code>bool</code></summary>

Write the normalized position along the spline (0-1) to an attribute.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Alpha</strong> <code>FName</code></summary>

Attribute name for alpha output.

*Visible when Write Alpha is enabled*

Default: `Alpha`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Write Point Type</strong> <code>bool</code></summary>

Write the original spline point type (Linear, Curve, etc.) to an attribute.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Point Type</strong> <code>FName</code></summary>

Attribute name for point type output (int32).

*Visible when Write Point Type is enabled*

Default: `PointType`

⚡ PCG Overridable

</details>

### Tagging

<details>
<summary><strong>Tags To Data</strong> <code>EPCGExTagsToDataAction</code></summary>

How to handle tags from source splines.

Default: `ToData`

</details>

<details>
<summary><strong>Tag Forwarding</strong> <code>FPCGExNameFiltersDetails</code></summary>

Filter which tags to forward from source splines.

⚡ PCG Overridable

</details>

### Metadata

<details>
<summary><strong>Carry Over Settings</strong> <code>FPCGExCarryOverDetails</code></summary>

Meta filter settings for carrying over metadata from splines.

⚡ PCG Overridable

</details>

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **Splines** | Spline Data | Input spline components |

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Out** | Points | Extracted path points |

## Examples

**Full tangent extraction**:
- Write Arrive Tangent: `true`
- Write Leave Tangent: `true`
- Result: Complete tangent data for smooth curve reconstruction

**Progress tracking**:
- Write Alpha: `true`
- Write Length At Point: `true`
- Result: Points include normalized position and cumulative distance

**Point type preservation**:
- Write Point Type: `true`
- Result: Know which points were Linear vs Curve in the original spline

## Use Cases

- **Import landscape splines**: Process road/river data with path nodes
- **Blueprint integration**: Use splines drawn in blueprints
- **External data**: Convert hand-placed splines to PCG data
- **Round-trip editing**: Spline → Path → process → Spline

## Related

### Spline Operations
- [Create Spline](./create-spline.md) - Inverse operation (path → spline)
- [Copy to Path](./copy-to-path.md) - Deform geometry along splines

---

📦 **Module**: `PCGExElementsPaths` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPaths/Private/Elements/PCGExSplineToPath.cpp)
