---
icon: diagram-project
description: 'In editor :: PCGEx | Edge Filter : Num Vtx'
---

# Edge Neighbors Count

Compares the connection counts of an edge's endpoints against a threshold.

## Overview

The Edge Neighbors Count filter evaluates cluster edges based on how connected their endpoint nodes are. This identifies edges between well-connected junctions, edges leading to dead ends, or edges connecting nodes with specific connectivity patterns.

## How It Works

For each edge:

1. **Get endpoint degrees** (neighbor counts for start and end nodes)
2. **Apply aggregation mode** (sum, any, or both)
3. **Compare against threshold** using selected operator
4. **Return result**: pass if comparison is true

## Settings

### Threshold

<details>
<summary><strong>Threshold Input</strong> <code>Constant | Attribute</code></summary>

Whether the threshold comes from a fixed value or attribute.

Default: `Constant`

</details>

<details>
<summary><strong>Threshold</strong> <code>int32 | Attribute Selector</code></summary>

The count threshold to compare against.

Default: `2`

⚡ PCG Overridable

</details>

### Aggregation

<details>
<summary><strong>Mode</strong> <code>Sum | Any Endpoint | Both Endpoints</code></summary>

How to evaluate the two endpoint counts.

| Option | Meaning |
|--------|---------|
| **Sum** | Add both endpoint counts together |
| **Any Endpoint** | At least one endpoint meets the threshold |
| **Both Endpoints** | Both endpoints must individually meet the threshold |

Default: `Sum`

</details>

### Comparison

<details>
<summary><strong>Comparison</strong> <code>Comparison Operator</code></summary>

How to compare the aggregated count against the threshold.

Default: `>=` (Equal or greater)

</details>

<details>
<summary><strong>Tolerance</strong> <code>double</code></summary>

Epsilon for near-equality comparisons.

Default: Very small

</details>

### Behavior

<details>
<summary><strong>Invert</strong> <code>bool</code></summary>

Flip the filter result.

Default: Disabled

</details>

## Examples

**Find edges between junctions** (both endpoints have 3+ connections):
- Mode: `Both Endpoints`
- Threshold: `3`
- Comparison: `>=`

**Find edges leading to dead ends** (at least one endpoint is a leaf):
- Mode: `Any Endpoint`
- Threshold: `1`
- Comparison: `==`

**Find highly connected edges** (combined degree of 6+):
- Mode: `Sum`
- Threshold: `6`
- Comparison: `>=`

**Find edges in simple chains** (both endpoints have exactly 2 connections):
- Mode: `Both Endpoints`
- Threshold: `2`
- Comparison: `==`

## Related

### Edge Filters
- [Edge Length](./edge-length.md) - Filter by edge distance
- [Endpoints Check](./edge-endpoints-check.md) - Apply vertex filters to endpoints

### Node Filters
- [Neighbors Count](./node-neighbors-count.md) - Filter nodes by their degree

---

:package: **Module**: `PCGExElementsClusters` | :page_facing_up: [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Private/Filters/Edges/PCGExEdgeNeighborsCountFilter.cpp)
