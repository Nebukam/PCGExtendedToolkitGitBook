---
icon: diagram-project
description: 'Refine : MST (Prim)'
---

# Refine : MST (Prim)

Create a **Minimum Spanning Tree** using Prim's algorithm with heuristic-based edge weights.

## Overview

The Minimum Spanning Tree (MST) is a subset of edges that connects all vertices with the minimum total edge weight, without forming any cycles. Prim's algorithm builds the MST by starting from a seed node and greedily adding the lowest-cost edge at each step.

## Key Behavior

```
Before:                    After MST:
    ●───●───●                  ●   ●───●
   /│\ /│\ /│\                  \ │   │
  ● │ ● │ ● │ ●      →       ●───●   ● │
   \│/ \│/ \│/                      /  │
    ●───●───●                  ●───●   ●

Full connectivity          Tree (no cycles)
                           minimum total weight
```

## How It Works

1. **Initialize**: Start from heuristic's roaming seed node
2. **Build Tree**: Add lowest-score edge connecting visited to unvisited nodes
3. **Repeat**: Continue until all nodes are visited
4. **Output**: Mark MST edges as valid, others as invalid

**Requires**: Heuristics input pin connected (provides edge scoring)

## Settings

<details>
<summary><strong>Invert</strong> <code>bool</code></summary>

Invert the refinement result. When enabled, keeps edges that would normally be removed (non-MST edges) and removes MST edges.

Default: `false`

⚡ PCG Overridable

</details>

## Usage

Connect heuristics (typically edge length) to control which edges are preferred:

1. **Shortest paths**: Use Distance heuristic with low weight
2. **Custom criteria**: Combine multiple heuristics

## Example

**Create shortest-path MST**:
1. Connect cluster to Refine Edges
2. Select MST (Prim) operation
3. Connect Distance heuristic to Heuristics pin
4. Result: Tree with minimum total edge length

---

📦 **Parent**: [Refine Edges](./README.md) · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/Refining/PCGExEdgeRefinePrimMST.h)
