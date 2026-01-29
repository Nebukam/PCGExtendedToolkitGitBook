---
icon: compass
description: 'In editor :: PCGEx | Vtx Filter : Edge Direction'
---

# Node Edge Direction

Compares the direction of a node's connected edges against a reference direction.

## Overview

The Node Edge Direction filter evaluates cluster nodes by comparing the directions of their connected edges against a reference vector. This identifies nodes whose connections point in specific directions—useful for finding nodes at boundaries, directional flow points, or structurally significant positions.

## How It Works

For each node:

1. **Get connected edge directions** based on direction order
2. **Get reference direction** from constant or attribute
3. **Apply adjacency mode** to handle multiple edges
4. **Compare directions** using dot product or hash method
5. **Return result**: pass if direction comparison succeeds

## Settings

### Direction Reference

<details>
<summary><strong>Compare Against</strong> <code>Constant | Attribute</code></summary>

Whether the reference direction comes from a fixed vector or node attribute.

Default: `Constant`

</details>

<details>
<summary><strong>Direction</strong> <code>FVector | Attribute Selector</code></summary>

The reference direction to compare against.

⚡ PCG Overridable

</details>

<details>
<summary><strong>Direction Invert</strong> <code>bool</code></summary>

Flip the reference direction before comparison.

Default: Disabled

</details>

<details>
<summary><strong>Transform Direction</strong> <code>bool</code></summary>

Apply the node's local transform to the reference direction. Useful when comparing against local "forward" or "up" directions.

Default: Disabled

</details>

### Edge Direction

<details>
<summary><strong>Direction Order</strong> <code>From Node | To Node</code></summary>

Which direction to read from each edge.

- **From Node** - Direction pointing away from the tested node
- **To Node** - Direction pointing toward the tested node

Default: `From Node`

</details>

### Comparison Method

<details>
<summary><strong>Comparison Quality</strong> <code>Dot | Hash</code></summary>

How to compare directions.

- **Dot** - Angular comparison using dot product
- **Hash** - Discretized comparison using vector quantization

Default: `Dot`

</details>

#### Dot Comparison Settings

<details>
<summary><strong>Dot Tolerance</strong> <code>double</code></summary>

Angular tolerance for dot product comparison. Higher values allow more deviation from the reference direction.

Default: Very small

</details>

#### Hash Comparison Settings

<details>
<summary><strong>Grid Size</strong> <code>int32</code></summary>

Resolution of the vector quantization grid. Higher values create finer direction buckets.

Default: `8`

</details>

### Adjacency Mode

<details>
<summary><strong>Test Mode</strong> <code>All | Some</code></summary>

How to evaluate multiple connected edges.

- **All** - All edges must match the direction
- **Some** - A threshold number of edges must match

Default: `All`

</details>

<details>
<summary><strong>Consolidation</strong> <code>Average | Min | Max | Sum</code></summary>

When testing all edges, how to combine their direction comparisons. Only visible when Test Mode is `All`.

Default: `Average`

</details>

<details>
<summary><strong>Threshold</strong> <code>int32 | double</code></summary>

Number of edges that must match. Only visible when Test Mode is `Some`.

⚡ PCG Overridable

</details>

<details>
<summary><strong>Threshold Type</strong> <code>Discrete | Relative</code></summary>

Whether threshold is absolute count or percentage.

Default: `Discrete`

</details>

## Examples

**Find nodes with upward-pointing edges**:
- Compare Against: `Constant`
- Direction: `(0, 0, 1)`
- Direction Order: `From Node`
- Comparison Quality: `Dot`
- Test Mode: `Some`
- Threshold: `1`

**Find nodes aligned with local forward**:
- Compare Against: `Constant`
- Direction: `(1, 0, 0)`
- Transform Direction: Enabled
- Test Mode: `All`

**Find boundary nodes** (edges pointing outward from center):
- Compare Against: `Attribute`
- Direction: `$Position` (normalized from origin)
- Direction Order: `From Node`
- Test Mode: `All`

## Related

### Node Filters
- [Edge Angle](./node-edge-angle.md) - Compare angles between connected edges
- [Adjacency](./node-adjacency.md) - Compare attribute values with neighbors

### Edge Filters
- [Edge Direction](./edge-direction.md) - Filter edges by their direction

---

:package: **Module**: `PCGExElementsClusters` | :page_facing_up: [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Private/Filters/Nodes/PCGExNodeEdgeDirectionFilter.cpp)
