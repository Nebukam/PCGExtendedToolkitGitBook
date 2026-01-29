---
icon: cube
description: 'In editor :: PCGEx | Path : Solidify'
---

# Solidify

Expands a path into a 3D volume by extruding around the path axis.

## Overview

Solidify transforms a 1D path into 3D geometry by creating a tube-like structure around the path. Points are duplicated radially around the path center, producing the vertices needed for cylindrical or ribbon-like shapes.

## How It Works

1. **Calculate path frame** (forward, right, up) at each point
2. **Generate radial points** around the path axis
3. **Connect points** into a volumetric structure
4. **Apply radius and rotation** settings

## Settings

### Shape

<details>
<summary><strong>Sides</strong> <code>int32</code></summary>

Number of radial subdivisions. More sides create smoother cylinders.

- `2` = Flat ribbon
- `4` = Square tube
- `8+` = Cylindrical tube

Default: `8`

</details>

<details>
<summary><strong>Radius</strong> <code>double</code></summary>

Distance from path center to generated points.

Default: `50`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Radius Mode</strong> <code>Constant | Attribute</code></summary>

Where to read radius:

| Option | Behavior |
|--------|----------|
| **Constant** | Use fixed Radius value |
| **Attribute** | Read per-point radius from attribute |

Default: `Constant`

</details>

### Rotation

<details>
<summary><strong>Twist</strong> <code>double</code></summary>

Total rotation (in degrees) applied along the path length. Creates spiral/twisted structures.

Default: `0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Starting Angle</strong> <code>double</code></summary>

Initial rotation offset (in degrees) for the radial pattern.

Default: `0`

</details>

### Axis Order

<details>
<summary><strong>Up Axis</strong> <code>X | Y | Z</code></summary>

Which axis points "up" (away from path center).

Default: `Z`

</details>

<details>
<summary><strong>Forward Axis</strong> <code>X | Y | Z</code></summary>

Which axis points along the path direction.

Default: `X`

</details>

### Output

<details>
<summary><strong>Write Ring Index</strong> <code>bool</code></summary>

Write attribute indicating which radial position each point occupies.

Attribute: `RingIndex`

</details>

<details>
<summary><strong>Write Path Index</strong> <code>bool</code></summary>

Write attribute indicating position along the original path.

Attribute: `PathIndex`

</details>

## Examples

**Smooth tube**:
- Sides: `16`
- Radius: `25`
- Result: Cylindrical tube around path

**Flat ribbon**:
- Sides: `2`
- Radius: `100`
- Result: Flat ribbon following path

**Twisted cable**:
- Sides: `8`
- Twist: `720` (2 full rotations)
- Result: Spiral twisted tube

**Variable radius** (tapered):
- Radius Mode: `Attribute`
- Radius Attribute: `TubeRadius`
- Result: Varying thickness along path

## Use Cases

- **Pipes and tubes**: Cylindrical geometry along paths
- **Cables and ropes**: Twisted, flexible structures
- **Ribbons and banners**: Flat extruded strips
- **Organic shapes**: Variable radius for tentacles, vines

## Related

### Path Transformation
- [Offset](./offset.md) - Single-direction offset
- [Copy to Path](./copy-to-path.md) - Deform existing geometry

### See Also
- [Orient](./orient.md) - Control path frame orientation

---

📦 **Module**: `PCGExElementsPaths` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPaths/Private/Elements/PCGExSolidifyPath.cpp)
