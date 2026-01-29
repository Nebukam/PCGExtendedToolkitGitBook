---
icon: arrows-to-dot
description: 'In editor :: PCGEx | Filter : Tensor Dot'
---

# Tensor Dot

Compares a vector attribute against the direction sampled from tensor fields.

{% hint style="info" %}
This filter is part of the **Tensors** module and requires tensor factory inputs.
{% endhint %}

## Overview

The Tensor Dot filter evaluates each point by sampling direction from connected tensor fields at the point's location, then comparing that direction against a vector attribute using dot product. This enables filtering based on alignment with flow fields, gradient directions, or other tensor-defined orientations.

This filter requires **tensor factory inputs** that define the directional fields.

## How It Works

For each point:

1. **Read Operand A** (vector attribute from the point)
2. **Sample tensor fields** at the point's position
3. **Get combined direction** from tensor sampling
4. **Compare directions** using dot product
5. **Return result**: pass if dot comparison succeeds

## Settings

### Operand A

<details>
<summary><strong>Operand A</strong> <code>Attribute Selector</code></summary>

The vector attribute to compare against tensor direction.

⚡ PCG Overridable

</details>

<details>
<summary><strong>Transform Operand A</strong> <code>bool</code></summary>

Apply the point's local transform to Operand A before comparison. Useful when comparing against local directions like "forward."

Default: Disabled

</details>

### Dot Comparison

<details>
<summary><strong>Dot Comparison Details</strong> <code>Dot Comparison Settings</code></summary>

Configuration for how the dot product comparison is evaluated:

- **Threshold** - Dot product threshold for passing
- **Tolerance** - Tolerance for comparison

⚡ PCG Overridable

</details>

### Tensor Sampling

<details>
<summary><strong>Tensor Sampling Settings</strong> <code>Tensor Handler Details</code></summary>

Configuration for how tensor fields are sampled and combined:

- **Blend Mode** - How to combine multiple tensor influences
- **Strength** - Overall strength of tensor sampling
- **Falloff** - Distance-based influence falloff

These settings apply to the flattened/combined sample after individual tensor mutations.

⚡ PCG Overridable

</details>

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **In** | Points | Points to filter |
| **Tensors** | Tensor Factories | Tensor field definitions |

## Examples

**Keep points aligned with tensor flow**:
- Operand A: `$Forward` (or custom direction attribute)
- Transform Operand A: Enabled
- Dot threshold: `0.8` (roughly aligned)

**Keep points perpendicular to tensor field**:
- Operand A: `Direction`
- Dot threshold: `0.0` (perpendicular = dot of 0)
- Use tolerance to allow near-perpendicular

**Filter by local vs. field alignment**:
- Operand A: `LocalUp`
- Transform Operand A: Enabled
- Compare against vertical tensor fields

## Use Cases

- **Flow alignment**: Keep points oriented with flow fields
- **Gradient filtering**: Filter based on alignment with gradients
- **Directional placement**: Ensure objects face tensor-defined directions

## Related

### Filters
- [Dot](./dot.md) - Compare two vector attributes directly
- [Distance](./distance.md) - Spatial proximity filtering

### Tensors Module
- Tensor field nodes that create the tensor factories

---

:package: **Module**: `PCGExElementsTensors` | :page_facing_up: [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsTensors/Private/Filters/Points/PCGExTensorDotFilter.cpp)
