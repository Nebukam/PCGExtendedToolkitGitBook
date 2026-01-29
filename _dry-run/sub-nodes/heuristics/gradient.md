---
description: 'In editor :: PCGEx | Heuristics : Heuristics : Gradient'
---

# Gradient

Scores edges based on the **change in attribute value** between connected nodes. Useful for following elevation, temperature, or other gradients.

```
Follow Increasing (uphill):
  [10]───[20]───[30]    Prefer: value increases
                        Score: low when To > From

Follow Decreasing (downhill):
  [30]───[20]───[10]    Prefer: value decreases
                        Score: low when To < From
```

**Category:** Fully Static

---

## Settings

<details>
<summary><strong>Mode</strong> <code>EPCGExGradientMode</code></summary>

How to interpret the gradient between nodes.

| Value | Behavior |
|-------|----------|
| **Follow Increasing** | Prefer edges where value increases (To > From) |
| **Follow Decreasing** | Prefer edges where value decreases (To < From) |
| **Avoid Change** | Prefer edges where value stays similar |
| **Seek Change** | Prefer edges where value changes significantly |

Default: `Follow Increasing`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Attribute</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

Attribute to read values from (must be on vertices).

⚡ PCG Overridable

</details>

<details>
<summary><strong>Normalize By Distance</strong> <code>bool</code></summary>

When enabled, normalizes the gradient by edge length (gradient per unit distance).

Useful when edge lengths vary significantly.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Min Gradient</strong> <code>double</code></summary>

Expected minimum gradient value for normalization.

Default: `0`

*Visible when Mode = Avoid Change or Seek Change*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Max Gradient</strong> <code>double</code></summary>

Expected maximum gradient value for normalization.

Default: `1`

*Visible when Mode = Avoid Change or Seek Change*

⚡ PCG Overridable

</details>

---

## Behavior Notes

- Values are cached per-node for efficient lookup during pathfinding
- Global score returns 0 (neutral) since gradient is edge-specific
- The gradient is computed as `(To.Value - From.Value)`

---

📦 **Module**: `PCGExHeuristics` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExHeuristics/Public/Heuristics/PCGExHeuristicGradient.h)
