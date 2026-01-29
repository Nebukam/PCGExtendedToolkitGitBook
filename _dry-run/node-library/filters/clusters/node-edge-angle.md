---
icon: angle
description: 'In editor :: PCGEx | Vtx Filter : Edge Angle'
---

# Node Edge Angle

Filters nodes based on the angle between their connected edges.

## How It Works

For each node:

1. Check if node is **binary** (exactly 2 edges)
2. If not binary, apply **fallback** result
3. If binary, compute **dot product** between the two edge directions
4. Compare against **threshold** using dot comparison settings
5. Return result: pass if comparison is true

This filter is primarily designed for binary nodes (nodes with exactly 2 edges) where measuring the angle between edges is meaningful.

## Settings

### Fallback Behavior

<details>
<summary><strong>Leaves Fallback</strong> <code>Pass | Fail</code></summary>

Result for leaf nodes (nodes with only 1 edge).

Default: `Fail`

</details>

<details>
<summary><strong>Non Binary Fallback</strong> <code>Pass | Fail</code></summary>

Result for nodes with more than 2 edges.

Default: `Fail`

</details>

### Dot Comparison

<details>
<summary><strong>Dot Comparison Details</strong> <code>FPCGExDotComparisonDetails</code></summary>

Dot product comparison configuration.

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| Domain | Scalar \| Degrees | `Scalar` | How to interpret threshold values |
| Comparison | EPCGExComparison | `>=` | Comparison operator |
| Unsigned Comparison | bool | `false` | Use absolute value of dot product |
| Threshold Input | Constant \| Attribute | `Constant` | Source for threshold |
| Scalar | double | `0.5` | Threshold in scalar domain (-1 to 1) |
| Degrees | double | `90` | Threshold in degrees (0 to 180) |
| Tolerance | double | `0.1` | Epsilon for near-equality comparisons |

⚡ PCG Overridable

</details>

<details>
<summary><strong>Invert</strong> <code>bool</code></summary>

Flip the filter result. Also inverts fallback results.

Default: `false`

</details>

## Understanding Dot Product for Edges

For binary nodes, the dot product measures alignment:
- **1.0** = Edges point in same direction (straight through)
- **0.0** = Edges are perpendicular (90° corner)
- **-1.0** = Edges point toward each other (180° turn)

## Examples

**Keep sharp corners** (angle < 90°):
- Domain: `Degrees`
- Comparison: `<`
- Degrees: `90`

**Keep straight-through nodes** (near 180°):
- Domain: `Scalar`
- Comparison: `>=`
- Scalar: `0.9`

**Keep all corners** (any angle):
- Domain: `Scalar`
- Comparison: `<`
- Scalar: `0.95`

## Related

- [Node Edge Direction](./node-edge-direction.md) - Filter by edge direction matching criteria
- [Edge Direction](./edge-direction.md) - Filter edges by direction

---

📦 **Module**: `PCGExElementsClusters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Private/Filters/Nodes/PCGExNodeEdgeAngleFilter.cpp)
