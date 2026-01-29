---
description: 'In editor :: PCGEx | Tensor : Constant'
---

# Constant

**A tensor with the same direction everywhere in the field.**

The simplest tensor type — it always returns the same direction regardless of sample position. Useful as a baseline or fallback, and guarantees sampling never fails.

---

## How It Works

```
Constant Tensor (Direction = Forward)

──►  ──►  ──►  ──►  ──►
──►  ──►  ──►  ──►  ──►
──►  ──►  ──►  ──►  ──►
──►  ──►  ──►  ──►  ──►

Every sample returns the same direction
```

---

## Settings

<details>
<summary><strong>Direction</strong> <code>FVector</code></summary>

The constant direction vector for this tensor.

Default: `(1, 0, 0)` (Forward)

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

---

## Behavior Notes

{% hint style="info" %}
**Sampling Never Fails**: Unlike other tensors that may return zero when out of range, Constant always provides a valid direction. This makes it useful as a fallback to ensure extrusion doesn't stop unexpectedly.
{% endhint %}

---

## Example Use Cases

### Baseline Direction
Combine with other tensors to provide a default flow:
- Constant tensor with weight 0.5 pointing forward
- Pole tensors that attract/repel
- Result: poles deflect from the baseline direction

### Gravity Simulation
Use a constant downward vector:
- Direction = (0, 0, -1)
- Combine with flow tensors for wind
- Creates "falling" extrusion paths

---

📦 **Module**: `PCGExElementsTensors` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExElementsTensors/Public/Tensors/PCGExTensorConstant.h)
