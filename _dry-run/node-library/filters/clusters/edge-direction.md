---
icon: arrow-right
description: 'In editor :: PCGEx | Edge Filter : Edge Direction'
---

# Edge Direction

Compares an edge's direction against a reference vector.

## Overview

The Edge Direction filter evaluates cluster edges by comparing their direction (from start to end point) against a reference vector. This identifies edges aligned with specific axes, pointing toward targets, or matching directional patterns.

## How It Works

For each edge:

1. **Determine edge direction** based on direction settings
2. **Get reference direction** from constant or attribute
3. **Compare directions** using dot product or hash method
4. **Return result**: pass if direction comparison succeeds

## Settings

### Direction Settings

<details>
<summary><strong>Direction Method</strong> <code>EPCGExEdgeDirectionMethod</code></summary>

Method to pick the edge direction amongst various possibilities.

| Option | Meaning |
|--------|---------|
| **Endpoints Order** | Uses the edge's Start & End properties |
| **Endpoints Indices** | Uses the edge's Start & End indices |
| **Endpoints Sort** | Uses sorting rules to determine Start/End |
| **Edge Dot Attribute** | Chooses based on dot product against a vector attribute on the edge |

Default: `Endpoints Order`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Dir Source Attribute</strong> <code>Attribute Selector</code></summary>

Attribute picker for direction when using Edge Dot Attribute method.

*Visible when Direction Method = Edge Dot Attribute*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Direction Choice</strong> <code>EPCGExEdgeDirectionChoice</code></summary>

Further refine the direction method.

| Option | Meaning |
|--------|---------|
| **Smallest to Greatest** | Direct from smaller to larger value |
| **Greatest to Smallest** | Direct from larger to smaller value |

Default: `Smallest to Greatest`

⚡ PCG Overridable

</details>

### Comparison Quality

<details>
<summary><strong>Comparison Quality</strong> <code>EPCGExDirectionCheckMode</code></summary>

How to compare directions. Note that Hash comparison ignores adjacency consolidation.

| Option | Meaning |
|--------|---------|
| **Dot** | Angular comparison using dot product (continuous) |
| **Hash** | Discretized comparison using vector quantization (discrete buckets) |

Default: `Dot`

</details>

### Direction Reference

<details>
<summary><strong>Compare Against</strong> <code>Constant | Attribute</code></summary>

Whether the reference direction comes from a fixed vector or edge attribute.

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

Apply the local point's transform to the reference direction.

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

## Understanding Direction Comparison

The dot product comparison returns:
- **1.0** when edges point exactly in the reference direction
- **0.0** when edges are perpendicular to the reference
- **-1.0** when edges point opposite to the reference

## Examples

**Find upward edges**:
- Compare Against: `Constant`
- Direction: `(0, 0, 1)`
- Comparison Quality: `Dot`
- Dot Threshold: `0.9`

**Find horizontal edges**:
- Compare Against: `Constant`
- Direction: `(0, 0, 1)`
- Comparison: `~=`
- Threshold: `0` (perpendicular to up)

**Find edges pointing toward a direction attribute**:
- Compare Against: `Attribute`
- Direction (Attr): `FlowDirection`

**Find edges aligned with X axis** (either direction):
- Compare Against: `Constant`
- Direction: `(1, 0, 0)`
- Unsigned Comparison: `true`
- Threshold: `0.9`

## Related

### Edge Filters
- [Edge Length](./edge-length.md) - Filter by edge distance
- [Endpoints Compare](./edge-endpoints-compare-numeric.md) - Compare endpoint attributes

### Node Filters
- [Edge Direction](./node-edge-direction.md) - Compare node's edge directions

---

📦 **Module**: `PCGExElementsClusters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Private/Filters/Edges/PCGExIsoEdgeDirectionFilter.cpp)
