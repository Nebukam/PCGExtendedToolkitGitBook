---
icon: bezier-curve
description: 'In editor :: PCGEx | Create Spline'
---

# Create Spline

Creates spline data or actor components from path points.

## Overview

Create Spline converts path point data into Unreal spline format. The node can create spline data for further PCG processing or spawn actual spline components on target actors. Supports multiple interpolation types including linear, curved, and custom tangent control.

## How It Works

1. Read path **points** and their properties
2. Create **spline points** with position and tangent data
3. Output as **spline data** or spawn **spline components**

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Splines** | Spline Data | Generated spline data |

## Settings

<details>
<summary><strong>Mode</strong> <code>EPCGCreateSplineMode</code></summary>

How the spline is created.

| Option | Description |
|--------|-------------|
| Create Data Only | Create spline data without components |
| Create Component | Create spline component on target actor |
| Create New Actor (Deprecated) | Legacy option |

Default: `Create Data Only`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Default Point Type</strong> <code>EPCGExSplinePointType</code></summary>

Interpolation type for spline points.

| Option | Description |
|--------|-------------|
| Linear | Straight segments |
| Curve | Smooth curves with auto tangents |
| Constant | Step interpolation |
| CurveClamped | Clamped curves |
| CurveCustomTangent | Manual tangent control |

Default: `Linear`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Apply Custom Point Type</strong> <code>bool</code></summary>

Read point type from an attribute instead of using default.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Point Type Attribute</strong> <code>FName</code></summary>

Attribute containing the point type (as int32).

Default: `PointType`

*Visible when Apply Custom Point Type = true*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Tangents</strong> <code>FPCGExTangentsDetails</code></summary>

Per-point tangent configuration. Only applies when using CurveCustomTangent type.

⚡ PCG Overridable

</details>

<details>
<summary><strong>Target Actor</strong> <code>AActor</code></summary>

Actor to attach spline components to.

*Visible when Mode = Create Component*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Post Process Function Names</strong> <code>TArray&lt;FName&gt;</code></summary>

Functions to call on target actor after spline creation. Must be parameter-less with CallInEditor flag.

</details>

<details>
<summary><strong>Attachment Rules</strong> <code>FPCGExAttachmentRules</code></summary>

How spline components attach to the target actor.

</details>

## Examples

**Create smooth spline data**:
- Mode: `Create Data Only`
- Default Point Type: `Curve`

**Create spline component on actor**:
- Mode: `Create Component`
- Target Actor: Select actor
- Default Point Type: `CurveCustomTangent`
- Configure Tangents as needed

**Create linear path for mesh extrusion**:
- Mode: `Create Data Only`
- Default Point Type: `Linear`

## Related

### Spline Operations
- [Spline Mesh Simple](./spline-mesh/spline-mesh-simple.md) - Create spline mesh components
- [Spline to Path](./spline-to-path.md) - Convert splines back to paths

---

📦 **Module**: `PCGExElementsPaths` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPaths/Private/Elements/PCGExCreateSpline.cpp)
