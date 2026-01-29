---
description: 'In editor :: PCGEx | Tensor : Flow'
---

# Flow

**A vector/flow field defined by input point directions.**

Each input point becomes an effector that emits a directional influence. Points within range are influenced to flow in the effector's direction.

---

## How It Works

```
Input Points (arrows show their directions)

    ↗ Point A        Point B ↘
      ●                ●

Sample positions blend nearby directions:

        ↗   ↗   →   ↘   ↘
        ↗   ↗   →   ↘   ↘
        ↗   →   →   →   ↘
```

---

## Settings

<details>
<summary><strong>Direction Input</strong> <code>EPCGExInputValueType</code></summary>

How to determine each effector's flow direction.

| Value | Behavior |
|-------|----------|
| **Constant** | Use the point's transform axis |
| **Attribute** | Read direction from an attribute |

Default: `Constant`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Direction (Attr)</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

Attribute to read direction from.

*Visible when Direction Input = Attribute*

Default: `$Rotation.Forward`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Invert Direction</strong> <code>bool</code></summary>

Flip the direction vector (multiply by -1).

*Visible when Direction Input = Attribute*

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Direction</strong> <code>EPCGExAxis</code></summary>

Which axis of the point's transform to use as direction.

| Value | Axis |
|-------|------|
| **Forward** | X+ |
| **Backward** | X- |
| **Right** | Y+ |
| **Left** | Y- |
| **Up** | Z+ |
| **Down** | Z- |

*Visible when Direction Input = Constant*

Default: `Forward`

</details>

<details>
<summary><strong>Direction Transform</strong> <code>EPCGExTransformMode</code></summary>

Whether the direction is absolute or relative to the point's transform.

| Value | Behavior |
|-------|----------|
| **Relative** | Direction is transformed by point rotation |
| **Absolute** | Direction is used as-is |

*Visible when Direction Input = Attribute*

Default: `Relative`

⚡ PCG Overridable

</details>

---

## Example Use Cases

### Wind Field
Create directional wind by placing points:
- Scatter points across terrain
- Set their rotations to point in wind direction
- Extruded paths follow the "wind"

### River Flow
Guide water-like paths:
- Place flow points along a riverbed
- Points direct flow downstream
- Paths follow the river course

### Traffic Lanes
Create directional corridors:
- Place points defining lane directions
- Paths follow designated routes

---

📦 **Module**: `PCGExElementsTensors` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExElementsTensors/Public/Tensors/PCGExTensorFlow.h)
