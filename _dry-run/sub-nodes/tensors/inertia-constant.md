---
description: 'In editor :: PCGEx | Tensor : Inertia (Constant)'
---

# Inertia (Constant)

**A tensor that uses the seed transform direction with an optional rotational offset.**

Similar to standard Inertia, but allows applying a fixed rotation offset to the inertia direction.

---

## How It Works

```
Probe pointing right:  ──►

With 45° offset:
Inertia returns:         ↗  (rotated from original direction)
```

---

## Settings

<details>
<summary><strong>Axis</strong> <code>EPCGExAxis</code></summary>

Which axis of the probe's transform represents the base direction.

| Value | Axis |
|-------|------|
| **Forward** | X+ |
| **Backward** | X- |
| **Right** | Y+ |
| **Left** | Y- |
| **Up** | Z+ |
| **Down** | Z- |

Default: `Forward`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Offset</strong> <code>FRotator</code></summary>

Rotational offset applied to the inertia direction.

Use this to consistently deflect the inertia by a fixed angle.

Default: `(0, 0, 0)` (no offset)

⚡ PCG Overridable

</details>

<details>
<summary><strong>Tensor Weight</strong> <code>double</code></summary>

Weight multiplier for this tensor.

Default: `1.0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Potency</strong> <code>double</code></summary>

Strength/magnitude of the tensor.

Default: `1.0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Set Inertia Once</strong> <code>bool</code></summary>

When enabled, locks the inertia direction to the original transform direction.

Default: `false`

⚡ PCG Overridable

</details>

---

## Example Use Cases

### Consistent Drift
Add a constant drift angle to motion:
- Offset of (0, 10, 0) causes paths to gradually veer right
- Simulates wind or current effects

### Spiral Patterns
Combine offset with iteration:
- Each step slightly rotates the direction
- Creates spiral extrusion patterns

### Biased Momentum
Prefer turning in one direction:
- Small offset creates asymmetric behavior
- Paths tend to curve one way more than the other

---

📦 **Module**: `PCGExElementsTensors` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExElementsTensors/Public/Tensors/PCGExTensorInertiaConstant.h)
