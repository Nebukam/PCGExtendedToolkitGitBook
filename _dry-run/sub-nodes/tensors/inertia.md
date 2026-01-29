---
description: 'In editor :: PCGEx | Tensor : Inertia'
---

# Inertia

**A tensor that uses the current probe/seed transform direction.**

Instead of defining a field in space, this tensor reads the direction from whatever is being sampled — maintaining momentum in the current direction of travel.

---

## How It Works

```
Probe moving right:    ──►
Inertia returns:       ──►  (continue in same direction)

Probe moving up:        ↑
Inertia returns:        ↑   (continue in same direction)
```

The tensor extracts a direction from the probe's transform and returns it as the sample result.

---

## Settings

<details>
<summary><strong>Axis</strong> <code>EPCGExAxis</code></summary>

Which axis of the probe's transform represents the current direction.

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
<summary><strong>Set Inertia Once</strong> <code>bool</code></summary>

When enabled, locks the inertia direction to the **original** transform direction, rather than updating with each sample.

- **false** = direction updates as probe moves (dynamic inertia)
- **true** = direction fixed from initial state (constant inertia)

Default: `false`

⚡ PCG Overridable

</details>

---

## Example Use Cases

### Momentum Conservation
Keep paths moving in their current direction:
- Inertia tensor with moderate weight
- Other tensors (poles, flows) deflect the path
- Results in gradual turning, not sharp changes

### Straight-Line Preference
Combine with noise or chaotic fields:
- High-weight inertia keeps paths mostly straight
- Low-weight disturbances add subtle variation

### Ballistic Motion
Simulate projectile paths:
- Strong initial inertia
- Gravity (constant down tensor) gradually curves path

---

{% hint style="info" %}
**Dynamic vs Static**: With `Set Inertia Once = false`, inertia provides momentum. With `true`, it acts more like a constant direction but sourced from the initial transform rather than a fixed vector.
{% endhint %}

---

📦 **Module**: `PCGExElementsTensors` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExElementsTensors/Public/Tensors/PCGExTensorInertia.h)
