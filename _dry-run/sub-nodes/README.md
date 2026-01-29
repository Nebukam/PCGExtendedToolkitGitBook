---
description: Reusable building blocks that connect to specialized pins
icon: puzzle-piece
---

# Sub-nodes

Sub-nodes are **modular components** that plug into specialized input pins on PCGEx nodes. They define behaviors, strategies, and configurations that the consuming node uses during execution.

```
┌─────────────────────────┐
│    Consuming Node       │
│                         │
│  ┌─────────────────┐    │
│  │ Heuristics pin ◀────────── Heuristic : Shortest Distance
│  └─────────────────┘    │         │
│  ┌─────────────────┐    │         └── Heuristic : Turn Penalty
│  │ Filters pin    ◀────────── Filter : Distance
│  └─────────────────┘    │
│                         │
└─────────────────────────┘
```

---

## How Sub-nodes Work

1. **Create** a sub-node and configure its settings
2. **Connect** its output to the matching pin type on a consuming node
3. **Combine** multiple sub-nodes on the same pin (effects stack/combine)
4. The consuming node **uses** the sub-node logic during execution

---

## Sub-node Categories

| Category | Pin Label | Purpose |
|----------|-----------|---------|
| [Pickers](pickers/) | `Pickers` | Select points by index or range |
| [Filters](../node-library/filters/) | `Filters` | Test points/edges/collections |
| Heuristics | `Heuristics` | Score paths for pathfinding |
| Noises | `Noise` | Generate procedural noise values |
| Tensors | `Tensors` | Define directional vector fields |
| Probes | `Probes` | Establish point connectivity |
| Match Rules | `Match Rules` | Define data matching criteria |
| Shape Builders | `Shapes` | Generate geometric shapes |
| Tangents | `Tangents` | Calculate spline tangent vectors |
| Sorting Rules | `Sort Rules` | Define sort order criteria |

---

## Combining Sub-nodes

Most pins accept **multiple sub-nodes**. How they combine depends on the category:

| Category | Combination Behavior |
|----------|---------------------|
| **Filters** | AND logic (all must pass) or OR logic (any passes) |
| **Heuristics** | Weighted aggregation (configurable mode) |
| **Noises** | Blend modes (Add, Multiply, Max, etc.) |
| **Pickers** | Union (all selected indices combined) |
| **Probes** | Each probe adds connections independently |

---

## Common Patterns

### Weighted Systems
Heuristics and Noises use **weight factors** to balance multiple inputs:
```
Final = (H1 × Weight1 + H2 × Weight2) / (Weight1 + Weight2)
```

### Factory Pattern
Sub-nodes are "factory providers"—they create factory data that the consuming node instantiates into operations.

### PCG Overridable
Most sub-node settings are **PCG Overridable** (⚡), meaning they can be driven by upstream attributes at runtime.
