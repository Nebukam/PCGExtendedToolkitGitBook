---
icon: circle
description: 'In editor :: PCGEx | Shape : Circle'
---

# Circle

Generates points arranged in a circular or arc pattern around the seed point's position.

## Overview

The Circle shape creates points distributed evenly along a circular arc. By adjusting the start and end angles, you can create full circles, semicircles, quarter arcs, or any angular segment. The radius is derived from the seed point's bounds.

## How It Works

1. **Radius Calculation**: Uses the seed point's bounds to determine circle radius
2. **Angle Distribution**: Distributes points evenly between start and end angles
3. **Point Placement**: Positions points along the arc at calculated intervals
4. **Fitting**: Applies scale-to-fit and justification based on shared settings

## Settings

### Circle Settings

<details>
<summary><strong>Start Angle Input</strong> <code>EPCGExInputValueType</code></summary>

Whether the start angle comes from a constant or attribute.

| Option | Behavior |
|--------|----------|
| **Constant** | Use the constant value below |
| **Attribute** | Read from point attribute |

Default: `Constant`

</details>

<details>
<summary><strong>Start Angle (Attr)</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

Attribute to read the start angle from.

*Visible when Start Angle Input = Attribute*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Start Angle</strong> <code>double</code></summary>

The starting angle of the arc in degrees. Points begin at this angle.

*Visible when Start Angle Input = Constant*

Default: `0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>End Angle Input</strong> <code>EPCGExInputValueType</code></summary>

Whether the end angle comes from a constant or attribute.

| Option | Behavior |
|--------|----------|
| **Constant** | Use the constant value below |
| **Attribute** | Read from point attribute |

Default: `Constant`

</details>

<details>
<summary><strong>End Angle (Attr)</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

Attribute to read the end angle from.

*Visible when End Angle Input = Attribute*

⚡ PCG Overridable

</details>

<details>
<summary><strong>End Angle</strong> <code>double</code></summary>

The ending angle of the arc in degrees. Points end at this angle.

*Visible when End Angle Input = Constant*

Default: `360`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Is Closed Loop</strong> <code>bool</code></summary>

If enabled, flags the circle as a closed loop when start and end angles form a complete circle. This affects how downstream path operations treat the shape.

Default: `true`

⚡ PCG Overridable

</details>

## Examples

**Full circle with 12 points**:
- **Resolution Mode**: `Fixed`
- **Resolution**: `12`
- **Start Angle**: `0`
- **End Angle**: `360`

**Half circle (top arc)**:
- **Start Angle**: `0`
- **End Angle**: `180`

**Quarter arc**:
- **Start Angle**: `45`
- **End Angle**: `135`

## Related

- [Polygon](./polygon.md) - Regular polygon vertices instead of smooth circle
- [φ Sphere](./fiblat.md) - Spherical distribution instead of planar circle

---

📦 **Module**: `PCGExElementsShapes` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsShapes/Public/Shapes/PCGExShapeCircle.h)
