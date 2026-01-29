---
description: 'In editor :: PCGEx | Tensor : Spin'
---

# Spin

**A tensor that creates rotational motion around a specified axis.**

Each input point defines a spin axis. Nearby samples are directed to orbit around that axis, creating vortex-like patterns.

---

## How It Works

```
Spin around Up axis (Z)

        ↓ ← ←
        ↓   ↑
        → → ↑

     ← ← ● → →
        ↑   ↓
        ↑ → →

Samples flow in circular motion around the axis
```

---

## Settings

<details>
<summary><strong>Axis Input</strong> <code>EPCGExInputValueType</code></summary>

How to determine each effector's spin axis.

| Value | Behavior |
|-------|----------|
| **Constant** | Use the point's transform axis |
| **Attribute** | Read axis from an attribute |

Default: `Constant`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Axis (Attr)</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

Attribute to read the spin axis from.

*Visible when Axis Input = Attribute*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Axis</strong> <code>EPCGExAxis</code></summary>

Which axis of the point's transform to use as the spin axis.

| Value | Axis |
|-------|------|
| **Forward** | X+ |
| **Backward** | X- |
| **Right** | Y+ |
| **Left** | Y- |
| **Up** | Z+ |
| **Down** | Z- |

*Visible when Axis Input = Constant*

Default: `Up`

</details>

<details>
<summary><strong>Axis Transform</strong> <code>EPCGExTransformMode</code></summary>

Whether the axis is absolute or relative to the point's transform.

| Value | Behavior |
|-------|----------|
| **Relative** | Axis is transformed by point rotation |
| **Absolute** | Axis is used as-is |

*Visible when Axis Input = Attribute*

Default: `Relative`

⚡ PCG Overridable

</details>

---

## Example Use Cases

### Vortex/Whirlpool
Create swirling patterns:
- Single spin point at center
- Paths spiral around it

### Tornado Path
Combine spin with upward flow:
- Spin tensor creates rotation
- Constant tensor adds vertical lift
- Paths corkscrew upward

### Orbital Motion
Create satellite-like paths:
- Spin around a central point
- Combine with pole attraction
- Paths orbit at varying distances

---

📦 **Module**: `PCGExElementsTensors` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExElementsTensors/Public/Tensors/PCGExTensorSpin.h)
