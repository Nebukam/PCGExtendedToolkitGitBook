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

### Comparison Quality

<details>
<summary><strong>Comparison Quality</strong> <code>EPCGExDirectionCheckMode</code></summary>

How to compare directions. Note that Hash comparison ignores adjacency consolidation.

| Option | Meaning |
|--------|---------|
| **Dot** | Angular comparison using dot product |
| **Hash** | Discretized comparison using vector quantization |

Default: `Dot`

</details>

### Adjacency Settings

<details>
<summary><strong>Mode</strong> <code>EPCGExAdjacencyTestMode</code></summary>

How many connected edges should be tested.

| Option | Meaning |
|--------|---------|
| **All** | Test all connected edges |
| **Some** | Test some connected edges only |

Default: `Some`

⚡ PCG Overridable

</details>

*See [Node Adjacency](./node-adjacency.md) for full adjacency settings documentation.*

### Edge Direction

<details>
<summary><strong>Direction Order</strong> <code>EPCGExAdjacencyDirectionOrigin</code></summary>

Which direction to read from each edge.

| Option | Meaning |
|--------|---------|
| **From Node** | Direction pointing away from the tested node |
| **To Node** | Direction pointing toward the tested node |

Default: `From Node`

</details>

### Direction Reference

<details>
<summary><strong>Compare Against</strong> <code>Constant | Attribute</code></summary>

Whether the reference direction comes from a fixed vector or node attribute.

Default: `Constant`

</details>

<details>
<summary><strong>Direction</strong> <code>FVector</code></summary>

The reference direction to compare against.

*Visible when Compare Against = Constant*

Default: `(0, 0, 1)` (Up)

⚡ PCG Overridable

</details>

<details>
<summary><strong>Direction (Attr)</strong> <code>Attribute Selector</code></summary>

Attribute to read the reference direction from.

*Visible when Compare Against = Attribute*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Invert</strong> <code>bool</code></summary>

Flip the reference direction before comparison.

*Visible when Compare Against = Attribute*

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Transform Direction</strong> <code>bool</code></summary>

Apply the node's local transform to the reference direction. Useful when comparing against local "forward" or "up" directions.

Default: `false`

⚡ PCG Overridable

</details>

### Dot Comparison Settings

*Visible when Comparison Quality = Dot*

<details>
<summary><strong>Dot Comparison Details</strong> <code>FPCGExDotComparisonDetails</code></summary>

Dot product comparison settings including:

- **Domain**: `Scalar` (-1 to 1) or `Degrees` (0-180)
- **Comparison**: The comparison operator (default: `>=`)
- **Unsigned Comparison**: Use absolute value of dot product
- **Threshold Input**: `Constant` or `Attribute`
- **Threshold**: The comparison threshold

⚡ PCG Overridable

</details>

### Hash Comparison Settings

*Visible when Comparison Quality = Hash*

<details>
<summary><strong>Hash Comparison Details</strong> <code>FPCGExVectorHashComparisonDetails</code></summary>

Hash comparison settings including:

- **Hash Tolerance Input**: `Constant` or `Attribute`
- **Hash Tolerance**: Resolution of vector quantization (default: `0.001`)

⚡ PCG Overridable

</details>

## Examples

**Find nodes with upward-pointing edges**:
- Compare Against: `Constant`
- Direction: `(0, 0, 1)`
- Direction Order: `From Node`
- Comparison Quality: `Dot`
- Mode: `Some`
- Threshold: `1`

**Find nodes aligned with local forward**:
- Compare Against: `Constant`
- Direction: `(1, 0, 0)`
- Transform Direction: `true`
- Mode: `All`

**Find boundary nodes** (edges pointing outward from center):
- Compare Against: `Attribute`
- Direction (Attr): `$Position` (normalized from origin)
- Direction Order: `From Node`
- Mode: `All`

## Related

### Node Filters
- [Edge Angle](./node-edge-angle.md) - Compare angles between connected edges
- [Adjacency](./node-adjacency.md) - Compare attribute values with neighbors

### Edge Filters
- [Edge Direction](./edge-direction.md) - Filter edges by their direction

---

📦 **Module**: `PCGExElementsClusters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Private/Filters/Nodes/PCGExNodeEdgeDirectionFilter.cpp)
