---
icon: map
---

# Algorithms

**All search algorithms in PCGEx use heuristics.** This is the single most important thing to understand — there are no "raw" edge weights. Every algorithm evaluates edges through the heuristics handler, which computes traversal cost from your connected heuristic sub-nodes. The algorithms differ in *how they use* those heuristic scores, not *whether* they use them.

### The Shared Foundation

Every algorithm calls `Heuristics->GetEdgeScore()` on each edge it considers. This is where your heuristic sub-nodes (shortest distance, steepness, inertia, etc.) contribute their scores. The edge score *is* the traversal cost.

Where A\* differs from the rest is that it also calls `Heuristics->GetGlobalScore()` — a forward-looking estimation of remaining cost to the goal. The other algorithms skip that estimation and work purely from accumulated edge scores.

### Algorithm Comparison

| Algorithm     | Edge Scoring | Goal Estimation              | Best For                                           |
| ------------- | ------------ | ---------------------------- | -------------------------------------------------- |
| A\*           | Heuristics   | Yes (`GetGlobalScore`)       | Point-to-point, goal-directed search               |
| Dijkstra      | Heuristics   | No                           | Thorough exploration, respects all modifiers equally |
| Bidirectional | Heuristics   | No                           | Large clusters, long paths                         |
| Bellman-Ford  | Heuristics   | No                           | Heuristics that can produce negative scores        |

### A\* (A-Star)

The default choice for goal-directed pathfinding.

#### How It Works

A\* maintains a priority queue sorted by `f(n) = g(n) + h(n)`:

* **g(n)**: Accumulated `GetEdgeScore()` cost from start to node n
* **h(n)**: `GetGlobalScore()` estimation from n to goal, scaled by `ReferenceWeight`
* **f(n)**: The sum — nodes with lower f-score are explored first

The global score pulls the search toward the goal, so A\* often finds a path while exploring far fewer nodes than the alternatives.

#### Characteristics

* **Goal-directed**: The global estimation biases search toward the goal
* **Efficient**: Explores fewer nodes when heuristics provide good estimates
* **Estimation-dependent**: If `GetGlobalScore` doesn't estimate well, A\* explores more broadly and approaches Dijkstra behavior

#### When to Use

* Point-to-point pathfinding (the default case)
* When heuristic sub-nodes provide meaningful distance/direction estimates
* When you want fast results and the path doesn't need to be globally optimal across all heuristic modifiers

### Dijkstra's Algorithm

Explores based on accumulated heuristic cost with no goal estimation.

#### How It Works

Dijkstra uses a priority queue sorted purely by accumulated `GetEdgeScore()` cost:

* Every edge is scored through your heuristics — it is *not* "no heuristics"
* No `GetGlobalScore()` call — no estimation of remaining cost
* Explores outward from the seed in order of total heuristic cost

Without the goal-directed shortcut, Dijkstra explores more nodes but considers all heuristic modifiers more thoroughly.

#### Characteristics

* **Thorough**: Explores by accumulated cost without bias toward the goal
* **Respects modifiers**: "More respectful of modifiers and weights" than A\*
* **Slower for point-to-point**: Explores more nodes since it doesn't estimate remaining distance

#### When to Use

* When you want the path that most faithfully respects your heuristic scores
* When A\*'s global estimation is skewing results away from what your modifiers intend
* When finding paths from one source to multiple goals (Dijkstra naturally explores outward)

### Bidirectional Search

Searches from both ends simultaneously using heuristic-scored edges.

#### How It Works

Two Dijkstra-like searches run in alternation:

* Forward search expands from seed, scoring edges with `GetEdgeScore(seed → goal)`
* Backward search expands from goal, scoring edges with `GetEdgeScore(goal → seed)`
* When the frontiers meet, the path is reconstructed through the meeting point

Both searches use your heuristics for edge scoring. The backward search swaps the seed/goal context so directional heuristics (like inertia) work correctly in reverse.

#### Characteristics

* **Faster on large clusters**: Reduces search space roughly from O(b^d) to O(b^(d/2))
* **More memory**: Maintains two sets of visited nodes, travel stacks, and scored queues
* **Symmetric assumption**: Works best when heuristic scores are similar in both directions

#### When to Use

* Large clusters where A\* or Dijkstra explore too many nodes
* Long paths where the seed-goal distance is significant
* When edge costs are roughly symmetric (the common case with undirected clusters)

### Bellman-Ford

Handles heuristics that produce negative scores.

#### How It Works

Instead of a priority queue, Bellman-Ford relaxes all edges repeatedly:

* Iterates N-1 times (where N is node count), checking every edge each pass
* Each edge is scored through `GetEdgeScore()` — the same heuristics system
* Can detect negative cycles (heuristic scoring loops where cost decreases infinitely)

The key difference: A\*, Dijkstra, and Bidirectional all use priority queues that assume non-negative edge costs. If your heuristics can produce negative scores, those algorithms may find incorrect paths. Bellman-Ford handles this correctly.

#### Characteristics

* **Handles negative scores**: The only algorithm that correctly handles heuristics producing negative values
* **Detects negative cycles**: Can report when no valid path exists due to infinitely decreasing cost loops
* **Slower** than A\* and Dijkstra (O(VE) vs O(E log V)) — iterates over all edges multiple times

#### When to Use

* When your heuristic combination can produce negative edge scores
* When you need negative cycle detection as a safety check
* When correctness matters more than speed

### Practical Guidance

#### Default: A\*

For most setups, A\* with distance-based heuristics works well:

* Fast goal-directed search
* Produces reasonable paths
* The global estimation gets you there quickly

#### When to Switch

**Switch to Dijkstra when:**

* A\*'s global estimation is overriding your modifiers — you want the search to respect accumulated heuristic cost more faithfully
* Path quality matters more than search speed
* You're finding paths to multiple goals from one seed

**Switch to Bidirectional when:**

* Cluster is large and paths are long
* A\* and Dijkstra explore too many nodes
* Edge costs are roughly symmetric

**Switch to Bellman-Ford when:**

* Your heuristic sub-nodes can produce negative scores
* You need negative cycle detection
* Correctness with unusual heuristic configurations is critical

### Performance Considerations

#### Heuristic Complexity

All algorithms evaluate heuristics per edge, so heuristic cost scales the same way:

* Simple heuristics (distance, attribute lookup) are cheap per edge
* History-dependent heuristics (inertia, feedback) add overhead per edge
* More heuristic sub-nodes = more evaluations per edge, regardless of algorithm

#### Algorithm-Specific Cost

* **A\***: Fewest nodes explored (with good estimation), plus `GetGlobalScore` per node
* **Dijkstra**: More nodes explored, but no global score overhead
* **Bidirectional**: Fewer nodes than Dijkstra, but double the memory
* **Bellman-Ford**: Visits all edges N-1 times — significantly slower on large clusters

### Related

* Pathfinding Overview - Pathfinding concepts
* Heuristics - Scoring functions that drive all algorithms
