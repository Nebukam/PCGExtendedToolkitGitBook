---
icon: cube
description: 'In editor :: PCGEx | Path : Solidify'
---

# Solidify

Orients path points and adjusts their scale to create solid, tube-like structures along the path direction.

## Overview

Solidify transforms path points by calculating proper orientation based on path direction and normal, then applying scale values. This creates the foundation for tube or ribbon-like geometry—useful for cables, pipes, or any structure that follows a path with consistent cross-section.

Unlike traditional extrusion, Solidify works on the points themselves, setting their transforms so downstream mesh generation produces the correct shapes.

## How It Works

1. **Calculate path frame** (forward, right, up) at each point based on axis order
2. **Apply rotation construction** to orient points correctly
3. **Set scale** based on secondary and tertiary axis radius settings
4. **Handle open/closed loops** appropriately

## Settings

### Basic

<details>
<summary><strong>Remove Last Point</strong> <code>bool</code></summary>

If the path is not closed, the last point cannot be properly solidified (no next segment to reference), so it's usually preferable to remove it.

Default: `true`

⚡ PCG Overridable

</details>

### Axis Configuration

<details>
<summary><strong>Solidification Order</strong> <code>EPCGExAxisOrder</code></summary>

Axis order determining which axis aligns to the segment direction. The first axis uses segment direction, the second uses the path normal. Options include XYZ, XZY, YXZ, YZX, ZXY, ZYX.

Default: `XYZ`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Read Order From Attribute</strong> <code>bool</code></summary>

Read the axis order from a per-point attribute instead of using a constant.

Default: `false`

</details>

<details>
<summary><strong>Order Attribute</strong> <code>FName</code></summary>

Attribute containing axis order value (as int).

*Visible when Read Order From Attribute is enabled*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Order Safety</strong> <code>EPCGExIndexSafety</code></summary>

How to handle invalid attribute values. `Ignore` uses the default constant if invalid.

*Visible when Read Order From Attribute is enabled*

Default: `Tile`

⚡ PCG Overridable

</details>

### Rotation Construction

<details>
<summary><strong>Use Construction Mapping</strong> <code>bool</code></summary>

Use a custom mapping of axis orders to rotation construction methods instead of a single constant.

Default: `false`

</details>

<details>
<summary><strong>Rotation Mapping</strong> <code>TMap&lt;EPCGExAxisOrder, EPCGExMakeRotAxis&gt;</code></summary>

Map of rotation construction methods for each axis order.

*Visible when Use Construction Mapping is enabled*

</details>

<details>
<summary><strong>Rotation Construction</strong> <code>EPCGExMakeRotAxis</code></summary>

Defines how the selected axis constructs the point's rotation. Uses remapped axes from the selected order (X = Primary, Y = Secondary, Z = Tertiary).

*Visible when Use Construction Mapping is disabled*

Default: `X`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Read Construction From Attribute</strong> <code>bool</code></summary>

Read rotation construction from a per-point attribute.

Default: `false`

</details>

### Axis Settings

<details>
<summary><strong>Primary</strong> <code>FPCGExPathSolidificationAxisDetails</code></summary>

Primary axis settings (direction aligned to the segment). Contains flip options.

⚡ PCG Overridable

</details>

<details>
<summary><strong>Secondary</strong> <code>FPCGExPathSolidificationRadiusDetails</code></summary>

Secondary axis settings with flip and radius options. Radius determines scale on this axis.

- **Radius Input**: `Disabled` | `Constant` | `Attribute`
- **Radius**: Constant radius value (default: `10`)
- **Flip Input**: Optional flip toggle

⚡ PCG Overridable

</details>

<details>
<summary><strong>Tertiary</strong> <code>FPCGExPathSolidificationRadiusDetails</code></summary>

Tertiary axis settings with flip and radius options.

⚡ PCG Overridable

</details>

### Normal Direction

<details>
<summary><strong>Normal Type</strong> <code>Constant | Attribute</code></summary>

How the cross/normal direction is computed.

Default: `Constant`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Normal (Attr)</strong> <code>Attribute Selector</code></summary>

Fetch the normal direction from a local point attribute.

*Visible when Normal Type = Attribute*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Normal</strong> <code>EPCGExPathNormalDirection</code></summary>

Type of path point normal direction when using constant mode.

*Visible when Normal Type = Constant*

Default: `Normal`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Invert Direction</strong> <code>bool</code></summary>

Inverts the normal direction.

*Visible when Normal Type = Attribute*

Default: `false`

⚡ PCG Overridable

</details>

### Solidification Lerp

<details>
<summary><strong>Solidification Lerp Input</strong> <code>Constant | Attribute</code></summary>

Source for solidification lerp value.

Default: `Constant`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Solidification Lerp</strong> <code>double</code></summary>

Constant lerp value for solidification.

*Visible when Solidification Lerp Input = Constant*

Default: `0`

⚡ PCG Overridable

</details>

## Examples

**Circular tube**:
- Solidification Order: `XYZ`
- Secondary Radius: `25`
- Tertiary Radius: `25`
- Result: Uniform circular cross-section

**Flat ribbon**:
- Solidification Order: `XYZ`
- Secondary Radius: `100`
- Tertiary Radius: `5`
- Result: Wide, flat ribbon shape

**Variable thickness**:
- Secondary Radius Input: `Attribute`
- Secondary Radius Attribute: `TubeWidth`
- Result: Cross-section varies along path

## Use Cases

- **Pipes and tubes**: Set up transforms for cylindrical mesh generation
- **Cables and ropes**: Consistent cross-section along curved paths
- **Ribbons and banners**: Flat, oriented geometry
- **Organic shapes**: Variable radius for tentacles, branches

## Related

### Path Transformation
- [Offset](./offset.md) - Single-direction offset
- [Copy to Path](./copy-to-path.md) - Deform existing geometry

---

📦 **Module**: `PCGExElementsPaths` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPaths/Private/Elements/PCGExPathSolidify.cpp)
