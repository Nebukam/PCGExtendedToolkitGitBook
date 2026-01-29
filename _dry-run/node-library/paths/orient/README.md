---
icon: compass
description: 'In editor :: PCGEx | Path : Orient'
---

# Orient

Computes orientation transforms for points along a path based on travel direction.

## Overview

Orient calculates rotation values for each point so they face along (or perpendicular to) the path direction. This is essential for placing objects that need to align with the path—fences that follow curves, arrows pointing forward, or rails that bank into turns.

The node uses an **instanced operation** to determine how orientation is calculated. Different operations provide different strategies for computing the look direction.

## Settings

### Axis Configuration

<details>
<summary><strong>Orient Axis</strong> <code>Forward | Backward | Right | Left | Up | Down</code></summary>

Which local axis should point along the computed direction.

Default: `Forward`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Up Axis</strong> <code>Forward | Backward | Right | Left | Up | Down</code></summary>

Which local axis should point "up" after orientation.

Default: `Up`

⚡ PCG Overridable

</details>

### Orientation Operation

<details>
<summary><strong>Orientation</strong> <code>Instanced Operation</code></summary>

The operation that determines how to calculate orientation. Available operations:

| Operation | Description |
|-----------|-------------|
| [Average](./average.md) | Blend between direction to previous and next points |
| [Look At](./look-at.md) | Look at next/previous point, or custom direction/position |
| [Weighted](./weighted.md) | Weight blend based on segment lengths |

</details>

### Direction Control

<details>
<summary><strong>Flip Direction</strong> <code>bool</code></summary>

Default flip state for orientation direction. Can be overridden per-point using the Flip Conditions filter.

Default: Disabled

⚡ PCG Overridable

</details>

### Output

<details>
<summary><strong>Output</strong> <code>Apply to point | Output to attribute</code></summary>

How to use the computed orientation:

| Option | Behavior |
|--------|----------|
| **Apply to point** | Apply rotation directly to point transform |
| **Output to attribute** | Write transform to a named attribute |

Default: `Apply to point`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Output Attribute</strong> <code>FName</code></summary>

Name of attribute to write orientation to (when Output is "Output to attribute").

Default: `Orient`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Output Dot</strong> <code>bool</code></summary>

Write the dot product between prev/next directions to an attribute.

Default: Disabled

⚡ PCG Overridable

</details>

<details>
<summary><strong>Dot Attribute</strong> <code>FName</code></summary>

Name of attribute to write dot product to.

Default: `Dot`

⚡ PCG Overridable

</details>

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **In** | Points | Path points to orient |
| **Flip Conditions** | Filters | Filters to determine which points flip orientation |

## Orientation Operations

- [Average](./average.md) - Blend between neighbors
- [Look At](./look-at.md) - Look at point or direction
- [Weighted](./weighted.md) - Distance-weighted blend

## Examples

**Basic path following** (objects face forward):
- Orient Axis: `Forward`
- Up Axis: `Up`
- Operation: `Average`

**Smooth corners** (weighted by segment length):
- Operation: `Weighted`

**Custom look direction** (from attribute):
- Operation: `Look At`
- Look At: `Direction`
- Look At Attribute: `$CustomDirection`

## Use Cases

- **Fence placement**: Posts face along the path
- **Vehicle paths**: Cars orient to road direction
- **Rail tracks**: Rails bank into curves
- **Directional spawning**: Arrows, signs, or markers

## Related

### Path Transformation
- [Offset](../offset.md) - Uses orientation for perpendicular direction
- [Write Tangents](../write-tangents.md) - Compute tangent vectors

---

📦 **Module**: `PCGExElementsPaths` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPaths/Private/Elements/PCGExOrient.cpp)
