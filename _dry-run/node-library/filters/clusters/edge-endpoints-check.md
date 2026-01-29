---
icon: code-branch
description: 'In editor :: PCGEx | Edge Filter : Endpoints Check'
---

# Edge Endpoints Check

Applies vertex filters to an edge's endpoints and evaluates based on pass/fail patterns.

## Overview

The Edge Endpoints Check filter evaluates cluster edges by running vertex filters on their start and end nodes. Rather than checking edge properties directly, this filter delegates to vertex filters and interprets the results—finding edges where both endpoints pass, either passes, only one passes, or other patterns.

## How It Works

For each edge:

1. **Apply vertex filters** to the start endpoint
2. **Apply vertex filters** to the end endpoint
3. **Evaluate mode** based on which endpoints passed
4. **Return result**: pass if the mode condition is satisfied

## Settings

### Evaluation Mode

<details>
<summary><strong>Mode</strong> <code>None | Both | Any Pass | Start | End | SeeSaw</code></summary>

How to interpret the endpoint filter results.

| Option | Meaning |
|--------|---------|
| **None** | Neither endpoint should pass the filters |
| **Both** | Both endpoints must pass the filters |
| **Any Pass** | At least one endpoint must pass |
| **Start** | Only the start endpoint must pass |
| **End** | Only the end endpoint must pass |
| **SeeSaw** | Exactly one endpoint passes, one fails |

Default: `Both`

</details>

<details>
<summary><strong>Comparison</strong> <code>Pass | Fail</code></summary>

The expected result for the mode's logic. When set to `Fail`, the mode logic is inverted.

Default: `Pass`

</details>

### Behavior

<details>
<summary><strong>Invert</strong> <code>bool</code></summary>

Flip the final filter result.

Default: Disabled

</details>

### Vertex Filters

<details>
<summary><strong>Filter Factories</strong> <code>Vertex Filter List</code></summary>

The vertex filters to apply to each endpoint. Connect vertex filter nodes to this pin.

These filters run on the endpoint nodes, not the edge itself.

</details>

## Examples

**Find edges between nodes that both have Health > 50**:
- Mode: `Both`
- Connect Numeric Compare filter:
  - Operand A: `Health`
  - Comparison: `>`
  - Operand B: `50`

**Find edges where endpoints have different team IDs**:
- Mode: `SeeSaw`
- Connect Numeric Compare filter:
  - Operand A: `TeamID`
  - Comparison: `==`
  - Operand B: `1`

**Find edges leading to inactive nodes**:
- Mode: `Any Pass`
- Connect Boolean Compare filter:
  - Attribute: `IsActive`
  - Expected: `false`

**Find edges where only the start is a junction**:
- Mode: `Start`
- Connect Neighbors Count filter:
  - Comparison: `>=`
  - Count: `3`

## Use Cases

- **Boundary detection**: Find edges crossing between different regions
- **Flow control**: Identify edges connecting active to inactive nodes
- **Structural analysis**: Find edges between different node types

## Related

### Edge Filters
- [Endpoints Compare (Numeric)](./edge-endpoints-compare-numeric.md) - Compare attributes directly between endpoints
- [Endpoints Compare (String)](./edge-endpoints-compare-string.md) - Compare string attributes between endpoints
- [Neighbors Count](./edge-neighbors-count.md) - Compare endpoint degrees

### Node Filters
All vertex filters can be used with this edge filter to test endpoints.

---

:package: **Module**: `PCGExElementsClusters` | :page_facing_up: [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Private/Filters/Edges/PCGExEdgeEndpointsCheckFilter.cpp)
