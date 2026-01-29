---
icon: angle
description: 'In editor :: PCGEx | Vtx Filter : Edge Angle'
---

# Node Edge Angle

Compares the angle between a node's connected edges.

## Overview

The Node Edge Angle filter evaluates cluster nodes by measuring the angle between their connected edges. This is designed primarily for **binary nodes** (nodes with exactly 2 connections) and identifies sharp corners, gentle curves, or straight-through connections in path-like structures.

## How It Works

For each node:

1. **Check edge count** to determine node type
2. **For binary nodes (2 edges)**: Calculate angle between them using dot product
3. **For leaf nodes (1 edge)**: Return the fallback value
4. **For complex nodes (3+ edges)**: Return the fallback value
5. **Compare angle** against threshold
6. **Return result**: pass if angle comparison succeeds

## Settings

### Comparison

<details>
<summary><strong>Dot Tolerance</strong> <code>double</code></summary>

Angular tolerance for the comparison. The filter compares edge directions using dot product—values near 1.0 indicate parallel edges (straight path), values near -1.0 indicate opposite directions (sharp turn), and values near 0 indicate perpendicular edges.

Default: Very small

</details>

### Fallback Behavior

<details>
<summary><strong>Leaves Fallback</strong> <code>Pass | Fail</code></summary>

What to return for leaf nodes (nodes with only 1 connection). Leaf nodes have no angle to measure.

Default: `Fail`

</details>

<details>
<summary><strong>Non-Binary Fallback</strong> <code>Pass | Fail</code></summary>

What to return for complex nodes (nodes with 3 or more connections). These nodes have multiple angles between edges, making a single angle comparison ambiguous.

Default: `Fail`

</details>

### Behavior

<details>
<summary><strong>Invert</strong> <code>bool</code></summary>

Flip the filter result. Note: This also inverts the fallback results.

Default: Disabled

</details>

## Understanding Dot Product Angles

The filter uses dot product to compare edge directions:

| Dot Value | Angle | Meaning |
|-----------|-------|---------|
| 1.0 | 0° | Edges point same direction (straight through) |
| 0.0 | 90° | Edges are perpendicular |
| -1.0 | 180° | Edges point opposite directions (U-turn) |

## Examples

**Find sharp corners** (edges nearly opposite):
- Dot Tolerance: `0.2` (allows ~78° to 180° turns)
- Leaves Fallback: `Fail`
- Non-Binary Fallback: `Fail`

**Find straight-through nodes** (minimal turning):
- Dot Tolerance: `0.1`
- Configure comparison to test for dot ≈ 1.0

**Include all endpoints in results**:
- Leaves Fallback: `Pass`
- Non-Binary Fallback: `Fail`

## Use Cases

- **Path simplification**: Identify nodes that can be removed without affecting path shape
- **Corner detection**: Find sharp turns in path networks
- **Curve analysis**: Distinguish smooth curves from angular paths

## Related

### Node Filters
- [Edge Direction](./node-edge-direction.md) - Compare edge directions against reference
- [Neighbors Count](./node-neighbors-count.md) - Filter by connection count

### Path Operations
- Simplify Path - Often uses angle-based criteria for point removal

---

:package: **Module**: `PCGExElementsClusters` | :page_facing_up: [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Private/Filters/Nodes/PCGExNodeEdgeAngleFilter.cpp)
