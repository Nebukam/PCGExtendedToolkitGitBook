---
description: 'In editor :: PCGEx | Heuristics : Heuristics : Least Nodes'
---

# Least Nodes

Scores edges to **minimize the number of nodes** in the resulting path. Prefers paths with fewer hops regardless of distance.

```
Path A: ●───●───●───●───● (5 nodes, shorter total distance)
Path B: ●───────●───────● (3 nodes, longer edges)

With Least Nodes heuristic: Path B is preferred
```

**Category:** Fully Static

---

## Settings

This heuristic uses only the [shared settings](README.md#shared-settings).

No additional configuration required—each edge traversal adds a constant cost.

---

## Behavior Notes

- Inherits from Shortest Distance but overrides scoring
- Global score is based on node count, not distance
- Edge score is constant (each edge = same cost)
- Useful when you want the simplest path topology

---

📦 **Module**: `PCGExHeuristics` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExHeuristics/Public/Heuristics/PCGExHeuristicNodeCount.h)
