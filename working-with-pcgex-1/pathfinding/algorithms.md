---
icon: map
---

# Algorithms

**PCGEx supports multiple pathfinding algorithms, and the right choice depends on what you're looking for.** A\* is the default for good reason, but Dijkstra, Bidirectional, and Bellman-Ford each have scenarios where they're the better pick.

### Algorithm Comparison

| Algorithm     | Best For                            | Tradeoff                         |
| ------------- | ----------------------------------- | -------------------------------- |
| A\*           | Point-to-point with good heuristics | Needs heuristics to be effective |
| Dijkstra      | Exploring all paths from source     | No heuristic guidance            |
| Bidirectional | Large clusters, long paths          | Uses more memory                 |
| Bellman-Ford  | Negative edge weights               | Slower than alternatives         |

### A\* (A-Star)

The default choice for goal-directed pathfinding.

#### How It Works

A\* combines actual traversal cost with estimated remaining cost:

* **g(n)**: Cost to reach node n from start
* **h(n)**: Estimated cost from n to goal (heuristic)
* **f(n)**: Total: g(n) + h(n)

Explores nodes with lowest f(n) first, prioritizing paths that seem promising.

#### Characteristics

* **Optimal** when heuristic never overestimates (admissible)
* **Efficient** compared to exhaustive search
* **Heuristic-dependent**: Poor heuristics degrade to Dijkstra

#### When to Use

* Point-to-point pathfinding
* When you have meaningful heuristics (distance, direction)
* When you want the "best" path, not just "a" path

### Dijkstra's Algorithm

Finds shortest paths from a source to all reachable nodes.

#### How It Works

Explores nodes in order of accumulated cost from source:

* No heuristic estimation
* Guaranteed to find shortest path
* Explores more nodes than A\* for point-to-point

#### Characteristics

* **Always optimal**: No heuristic assumptions
* **Exhaustive**: Explores until goal found or all nodes visited
* **Slower than A**\* for point-to-point with good heuristics

#### When to Use

* Need paths to multiple destinations from one source
* Heuristics aren't meaningful for your topology
* Analyzing overall cluster accessibility

### Bidirectional Search

Searches from both ends at once — one search expands forward from the seed, another expands backward from the goal. When they meet, the path is complete.

#### How It Works

Two simultaneous searches converge:

* Forward search expands from seed toward goal
* Backward search expands from goal toward seed
* Path is found when the two frontiers meet

#### Characteristics

* **Faster on large clusters**: Reduces search space from O(b^d) to roughly O(b^(d/2))
* **More memory**: Maintains two search frontiers instead of one
* **Works best with symmetric edge costs**: Since edges are undirected by default, this is usually the case

#### When to Use

* Large clusters where A\* still explores too many nodes
* Long paths where the distance between seed and goal is significant
* When edge costs are symmetric (the common case)

### Bellman-Ford

Handles negative edge weights that other algorithms can't.

#### How It Works

Relaxes all edges repeatedly:

* N-1 iterations for N nodes
* Handles negative weights correctly
* Can detect negative cycles

#### Characteristics

* **Slower** than A\* and Dijkstra (O(VE) vs O(E + V log V))
* **Handles negative weights**: Unique capability
* **Detects negative cycles**: Can report if no solution exists

#### When to Use

* Edge costs can be negative (penalties that go negative)
* Need to detect impossible paths (negative cycles)
* Correctness matters more than speed

### Practical Guidance

#### Default: A\* with Distance Heuristic

For most cases, A\* with shortest distance heuristic works well:

* Fast for point-to-point
* Produces reasonable paths
* Easy to configure

#### When to Switch

**Switch to Dijkstra when:**

* Finding paths from one source to many destinations
* Your heuristics don't improve search meaningfully
* You need guaranteed optimal without heuristic tuning

**Switch to Bidirectional when:**

* Cluster is large and paths are long
* A\* is still exploring too many nodes
* Edge costs are symmetric (the default)

**Switch to Bellman-Ford when:**

* Edge costs can genuinely be negative
* You need negative cycle detection

#### Heuristic Impact

Algorithm choice interacts with heuristic quality:

* **Good heuristics**: A\* significantly outperforms Dijkstra
* **Poor heuristics**: A\* performs like Dijkstra but with overhead
* **No heuristics**: Use Dijkstra directly

See Heuristics for heuristic configuration.

### Performance Considerations

#### Cluster Size

All algorithms scale with cluster complexity:

* More Vtx = more nodes to explore
* More Edges = more traversal options
* Complex heuristics add per-edge computation

#### Path Count

Finding many paths is more expensive than finding one:

* Multiple seed/goal pairs multiply computation
* Consider batch processing for many paths

#### Heuristic Complexity

Complex heuristics add per-edge evaluation cost:

* Simple heuristics (distance, attribute lookup) are cheap
* History-dependent heuristics (inertia, feedback) add overhead
* Balance path quality against computation cost

### Related

* Pathfinding Overview - Pathfinding concepts
* Heuristics - Scoring functions
* Cells and Hulls - Region extraction
