---
icon: arrows-to-dot
description: 'In editor :: PCGEx | Filter : Tensor Dot'
---

# Tensor Dot

Compares a vector attribute against the direction sampled from tensor fields.

{% hint style="info" %}
This filter is part of the **Tensors** module and requires tensor factory inputs.
{% endhint %}

## How It Works

For each point:

1. Read **Operand A** (vector attribute from the point)
2. Sample **tensor fields** at the point's position
3. Get combined direction from tensor sampling
4. Compare directions using dot product
5. Return result: pass if dot comparison succeeds

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **In** | Points | Points to filter |
| **Tensors** | Tensor Factories | Tensor field definitions |

## Settings

### Operand A

<details>
<summary><strong>Operand A</strong> <code>Attribute Selector</code></summary>

The vector attribute to compare against tensor direction.

</details>

<details>
<summary><strong>Transform Operand A</strong> <code>bool</code></summary>

Apply the point's local transform to Operand A before comparison. Useful when comparing against local directions like "forward."

Default: `false`

⚡ PCG Overridable

</details>

### Dot Comparison Details

<details>
<summary><strong>Dot Comparison Details</strong> <code>FPCGExDotComparisonDetails</code></summary>

Configuration for how the dot product comparison is evaluated:

- **Domain** - Scalar (-1 to 1) or Degrees (0-180°)
- **Comparison** - Comparison operator
- **Threshold** - Value to compare against
- **Unsigned** - Use absolute value of dot
- **Tolerance** - For near-equality comparisons

⚡ PCG Overridable

</details>

### Tensor Sampling

<details>
<summary><strong>Tensor Sampling Settings</strong> <code>FPCGExTensorHandlerDetails</code></summary>

Configuration for how tensor fields are sampled and combined:

- **Blend Mode** - How to combine multiple tensor influences
- **Strength** - Overall strength of tensor sampling
- **Falloff** - Distance-based influence falloff

These settings apply to the flattened/combined sample after individual tensor mutations.

⚡ PCG Overridable

</details>

## Examples

**Keep points aligned with tensor flow**:
- Operand A: `$Forward` (or custom direction attribute)
- Transform Operand A: Enabled
- Dot threshold: `0.8` (roughly aligned)

**Keep points perpendicular to tensor field**:
- Operand A: `Direction`
- Dot threshold: `0.0` (perpendicular = dot of 0)
- Use tolerance to allow near-perpendicular

## Related

- [Dot](./dot.md) - Compare two vector attributes directly
- [Distance](./distance.md) - Spatial proximity filtering

---

📦 **Module**: `PCGExElementsTensors` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsTensors/Private/Filters/Points/PCGExTensorDotFilter.cpp)
