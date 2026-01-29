---
description: 'In editor :: PCGEx | Heuristics : Heuristics : Azimuth'
---

# Azimuth

Scores edges based on **how directly they point toward the goal**. Acts like a "north star" guiding the path toward the destination.

```
        Goal ★
          ↑
     ↗    ↑   ↖
       ╲  │  ╱
        ╲ │ ╱
    ←─────●─────→    Edges pointing up (toward goal) = low score
        ╱ │ ╲        Edges pointing away = high score
       ╱  │  ╲
     ↙    ↓   ↘
```

**Category:** Goal Dependent

---

## Settings

This heuristic uses only the [shared settings](README.md#shared-settings).

No additional configuration required—direction is computed automatically toward the goal position.

---

## Behavior Notes

- Computes the dot product between edge direction and the direction to the goal
- Edge directions are cached per-cluster for efficient lookup
- Global score uses the node's direction to goal
- Edge score uses the edge's direction alignment with goal direction

---

📦 **Module**: `PCGExHeuristics` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExHeuristics/Public/Heuristics/PCGExHeuristicAzimuth.h)
