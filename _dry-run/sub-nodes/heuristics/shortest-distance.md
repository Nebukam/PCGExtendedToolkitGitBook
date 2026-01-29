---
description: 'In editor :: PCGEx | Heuristics : Heuristics : Shortest Distance'
---

# Shortest Distance

Scores edges based on **distance to the goal**. Edges that bring you closer to the goal receive lower scores.

```
     Goal
       ●
      /│\
     / │ \
    ●──●──●    Edge pointing toward goal = low score
    │     │    Edge pointing away = high score
    ●     ●
```

**Category:** Goal Dependent

---

## Settings

This heuristic uses only the [shared settings](README.md#shared-settings).

No additional configuration required—distance is computed automatically from cluster bounds.

---

## Behavior Notes

- Score is normalized by the cluster's bounding size
- Both global score (node-to-goal) and edge score (edge direction toward goal) are computed
- Works well as a primary heuristic for basic A* pathfinding

---

📦 **Module**: `PCGExHeuristics` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExHeuristics/Public/Heuristics/PCGExHeuristicDistance.h)
