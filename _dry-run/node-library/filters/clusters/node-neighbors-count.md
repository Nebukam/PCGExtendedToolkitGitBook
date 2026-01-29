---
icon: circle-nodes
description: 'In editor :: PCGEx | Vtx Filter : Num Edges'
---

# Node Neighbors Count

Compares a node's connection count (degree) against a threshold.

## Overview

The Node Neighbors Count filter evaluates cluster nodes by comparing how many edges connect to them. This identifies leaves (degree 1), simple chain nodes (degree 2), junctions (degree 3+), or nodes with specific connectivity.

## How It Works

For each node:

1. **Count connected edges** (the node's degree)
2. **Compare against threshold** using selected operator
3. **Return result**: node passes if comparison is true

## Settings

<details>
<summary><strong>Comparison</strong> <code>Comparison Operator</code></summary>

How to compare the edge count against the threshold.

Default: `~=` (Nearly Equal)

</details>

<details>
<summary><strong>Compare Against</strong> <code>Constant | Attribute</code></summary>

Whether threshold comes from a fixed value or node attribute.

Default: `Constant`

</details>

<details>
<summary><strong>Count</strong> <code>int32</code></summary>

The edge count threshold when using Constant mode.

Default: `0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Tolerance</strong> <code>double</code></summary>

Tolerance for near-equality comparisons.

Default: Very small

</details>

## Common Degree Values

| Degree | Name | Meaning |
|--------|------|---------|
| 0 | Isolated | No connections (unusual in valid clusters) |
| 1 | Leaf | End of a chain, single connection |
| 2 | Chain | Part of a simple path |
| 3+ | Junction | Branch point, multiple paths meet |

## Examples

**Find leaf nodes** (endpoints):
- Comparison: `==`
- Count: `1`

**Find junctions** (3+ connections):
- Comparison: `>=`
- Count: `3`

**Find chain nodes** (exactly 2 connections):
- Comparison: `==`
- Count: `2`

## Related

### Node Filters
- [Adjacency](./node-adjacency.md) - Compare with neighbor attributes
- [Edge Angle](./node-edge-angle.md) - Angle between connected edges

### Edge Filters
- [Num Vtx](./edge-neighbors-count.md) - Compare endpoint degrees

---

:package: **Module**: `PCGExElementsClusters` | :page_facing_up: [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Private/Filters/Nodes/PCGExNodeNeighborsCountFilter.cpp)
