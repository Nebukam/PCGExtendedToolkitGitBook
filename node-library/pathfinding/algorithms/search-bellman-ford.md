---
icon: rectangles-mixed
---

# Search : Bellman-Ford

Bellman-Ford search algorithm for pathfinding with negative weight support.

### Overview

Bellman-Ford is a single-source shortest path algorithm that can handle negative edge weights, unlike Dijkstra or A\*. It works by iteratively relaxing all edges until no improvements can be made. While slower than A\* (O(V×E) vs O(E log V)), it is more robust when heuristics may produce negative scores and can detect negative weight cycles.

### How It Works

1. **Initialize**: Set seed distance to 0, all others to infinity.
2. **Relax Edges**: For each edge, update distance if shorter path found.
3. **Repeat V-1 Times**: Where V is the number of vertices.
4. **Check Cycles**: Optionally verify no negative cycles exist.
5. **Build Path**: Reconstruct path from predecessor information.

**Usage Notes**

* **Negative Weights**: Handles heuristics that produce negative scores.
* **Cycle Detection**: Can detect and report negative weight cycles.
* **Slower**: More iterations than A\* but guarantees correctness with negative weights.
* **Complete Search**: Explores more of the graph than A\*.

### Behavior

**Bellman-Ford with Negative Weights:**

```
Cluster with edge weights (including negative):
    [A]──2──[B]──3──[C]
     │       │       │
     4      -2       2
     │       │       │
    [D]──1──[E]──1──[F]

Seed: A, Goal: F

Relaxation passes:
   Pass 1: A→B(2), A→D(4), B→E(0)
   Pass 2: E→F(1), D→E(5→no change)

Path: A → B → E → F (cost: 1)
(Negative weight B→E reduces total cost)
```

### Settings

<details>

<summary><strong>Detect Negative Cycles</strong> <code>bool</code></summary>

When enabled, the search fails if a negative weight cycle is detected. A negative cycle is a path that loops back on itself with a total negative cost, making the shortest path undefined.

Default: `true`

⚡ PCG Overridable

</details>

#### Inherited Settings

→ See Search Algorithm : Base for Early Exit setting.

***

📦 **Module**: `PCGExElementsPathfinding` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPathfinding/Public/Search/PCGExSearchBellmanFord.h)
