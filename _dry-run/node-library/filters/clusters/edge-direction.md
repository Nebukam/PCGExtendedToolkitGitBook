---
icon: arrow-right
description: 'In editor :: PCGEx | Edge Filter : Direction'
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

### Direction Reference

<details>
<summary><strong>Compare Against</strong> <code>Constant | Attribute</code></summary>

Whether the reference direction comes from a fixed vector or edge attribute.

Default: `Constant`

</details>

<details>
<summary><strong>Direction</strong> <code>FVector | Attribute Selector</code></summary>

The reference direction to compare against.

Default: `(0, 0, 1)` (Up)

⚡ PCG Overridable

</details>

<details>
<summary><strong>Direction Invert</strong> <code>bool</code></summary>

Flip the reference direction before comparison.

Default: Disabled

</details>

<details>
<summary><strong>Transform Direction</strong> <code>bool</code></summary>

Apply the edge's transform to the reference direction.

Default: Disabled

</details>

### Edge Direction Settings

<details>
<summary><strong>Direction Method</strong> <code>Endpoint Order | Attribute Sort | Custom</code></summary>

How to determine which way the edge "points."

- **Endpoint Order** - Use the natural start→end order
- **Attribute Sort** - Sort endpoints by attribute value
- **Custom** - Use custom direction logic

Default: `Endpoint Order`

</details>

<details>
<summary><strong>Direction Choice</strong> <code>Smallest to Greatest | Greatest to Smallest</code></summary>

When using attribute sorting, which direction to assign.

Default: `Smallest to Greatest`

</details>

### Comparison Method

<details>
<summary><strong>Comparison Quality</strong> <code>Dot | Hash</code></summary>

How to compare directions.

- **Dot** - Angular comparison using dot product (continuous)
- **Hash** - Discretized comparison using vector quantization (discrete buckets)

Default: `Dot`

</details>

#### Dot Comparison Settings

<details>
<summary><strong>Dot Tolerance</strong> <code>double</code></summary>

Angular tolerance for dot product comparison. Higher values allow more deviation.

Default: Very small

</details>

#### Hash Comparison Settings

<details>
<summary><strong>Grid Size</strong> <code>int32</code></summary>

Resolution of the vector quantization grid.

Default: `8`

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
- Dot Tolerance: `0.1`

**Find horizontal edges**:
- Compare Against: `Constant`
- Direction: `(0, 0, 1)`
- Then test for dot ≈ 0 (perpendicular to up)

**Find edges pointing toward a direction attribute**:
- Compare Against: `Attribute`
- Direction: `FlowDirection`

**Find edges aligned with X axis** (either direction):
- Compare Against: `Constant`
- Direction: `(1, 0, 0)`
- Test for dot ≈ 1.0 OR dot ≈ -1.0

## Related

### Edge Filters
- [Edge Length](./edge-length.md) - Filter by edge distance
- [Endpoints Compare](./edge-endpoints-compare-numeric.md) - Compare endpoint attributes

### Node Filters
- [Edge Direction](./node-edge-direction.md) - Compare node's edge directions

---

:package: **Module**: `PCGExElementsClusters` | :page_facing_up: [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Private/Filters/Edges/PCGExIsoEdgeDirectionFilter.cpp)
