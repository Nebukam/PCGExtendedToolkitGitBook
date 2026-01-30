---
icon: bullseye
description: Sub-nodes that control goal selection for pathfinding operations
---

# Goal Pickers

Goal Pickers are instanced sub-nodes that control how goal points are selected for each seed during pathfinding operations. They are used by nodes like [Pathfinding : Edges](../../node-library/pathfinding/pathfinding-edges.md) and [Pathfinding : Plot Edges](../../node-library/pathfinding/pathfinding-plot-edges.md).

## Available Goal Pickers

| Picker | Description |
|--------|-------------|
| [Default](./default.md) | Uses seed point index to select matching goal index |
| [All](./all.md) | Creates paths from each seed to all goals |
| [Random](./random.md) | Randomly selects goal(s) for each seed |
| [Index Attribute](./index-attribute.md) | Reads goal index from seed point attribute(s) |

## Common Settings

All goal pickers share the **Index Safety** setting that controls how out-of-bounds indices are handled:

| Option | Behavior | Example (3 goals) |
|--------|----------|-------------------|
| **Ignore** | Skip invalid indices | `0,1,2,-1,-1,-1,...` |
| **Tile** | Wrap around (modulo) | `0,1,2,0,1,2,...` |
| **Clamp** | Clamp to valid range | `0,1,2,2,2,2,...` |
| **Yoyo** | Mirror back and forth | `0,1,2,1,0,1,...` |

Default: `Tile`

## Usage

Goal Pickers appear as instanced object properties on pathfinding nodes. Click the dropdown to select a picker type, then configure its specific settings.

```
┌─────────────────────────────────┐
│ Goal Picker                     │
│ ┌─────────────────────────────┐ │
│ │ Type: [Default ▼]           │ │
│ │ Index Safety: [Tile ▼]      │ │
│ └─────────────────────────────┘ │
└─────────────────────────────────┘
```

---

📦 **Module**: `PCGExElementsPathfinding`
