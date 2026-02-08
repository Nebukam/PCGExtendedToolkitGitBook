---
icon: function
---

# Heuristics

**Heuristics are how you tell the pathfinder what a "good" path looks like.** They're scoring functions — sub-nodes that evaluate edges and nodes, returning costs that guide the algorithm toward better solutions. Shortest distance is the obvious one, but you can also penalize sharp turns, prefer flat terrain, or avoid previously visited areas.

### The Provider/Consumer Pattern

Heuristics follow the provider/consumer sub-node pattern:

1. Place heuristic provider nodes in your graph
2. Configure their scoring behavior
3. Connect outputs to pathfinding node's Heuristics input
4. Multiple heuristics combine into a composite score

<figure><img src="../../.gitbook/assets/placeholder-wide.jpg" alt=""><figcaption><p>Multiple heuristic providers connected to a pathfinding node's Heuristics pin</p></figcaption></figure>

### What Heuristics Score

Each heuristic evaluates edges and/or nodes and returns a score. Lower scores are generally better (less "cost").

Common scoring factors:

* **Distance**: Physical length of edges
* **Direction**: Alignment toward the goal
* **Terrain**: Attribute-based difficulty
* **Path history**: Penalize backtracking or revisiting

### Heuristic Types

#### Distance-Based

**Shortest Distance**: Score based on edge length

* Shorter edges = lower cost
* Classic "shortest path" behavior

**Azimuth**: Score based on direction toward goal

* Edges pointing toward goal score lower
* Prefers direct routes

#### Attribute-Based

**Attribute**: Read cost from Vtx/Edge attributes

* Use precomputed difficulty values
* Enable per-edge custom costs

**Gradient**: Score attribute change rate

* Prefer increasing/decreasing values
* Avoid or seek sudden changes

#### Path-History-Based

**Inertia**: Penalize direction changes

* Prefer continuing in same direction
* Produces straighter paths

**Turn Penalty**: Penalize sharp turns

* Angle-based cost for direction changes
* Smoother paths with gradual curves

#### Topology-Based

**Least Nodes**: Minimize hop count

* Fewer Vtx in path = lower cost
* Not same as shortest distance

**Steepness**: Score vertical slope

* Penalize steep ascents/descents
* Keeps paths on gentler terrain

#### Feedback-Based

**Feedback**: Track visited nodes

* Penalize revisiting
* Encourage exploration of new areas

### Heuristic Composition

#### Multiple Heuristics

Connect multiple heuristics to one pathfinding node:

```
Heuristics : Shortest Distance (weight 1.0)
Heuristics : Turn Penalty (weight 0.5)
Heuristics : Attribute (weight 0.3)
```

Each heuristic contributes its score weighted by its factor.

#### Aggregation Modes

Scores combine using configurable aggregation:

| Mode             | Behavior                            |
| ---------------- | ----------------------------------- |
| Weighted Average | Balanced mix of all scores          |
| Weighted Sum     | Simple addition of weighted scores  |
| Geometric Mean   | Stricter: all heuristics must agree |
| Harmonic Mean    | Emphasizes low scores — cheap paths dominate |
| Min              | Lowest scoring path (OR-like)       |
| Max              | Highest scoring path (AND-like)     |

#### Weight Factors

Each heuristic has a weight that controls its influence:

* Higher weight = more influence on path selection
* Weight 0 = heuristic disabled
* Relative weights matter, not absolute values

### Heuristic Categories

Heuristics have different computational characteristics:

#### Fully Static

Pre-computable scores that don't depend on the query:

* Attribute, Gradient
* Calculated once, reused

#### Goal Dependent

Scores that vary based on destination:

* Distance, Azimuth
* Calculated per goal

#### Travel Dependent

Scores that require path history:

* Inertia, Turn Penalty
* Need to know how we got here

#### Feedback

Track visited nodes across the search:

* Feedback heuristic
* Affects parallel processing

### Practical Patterns

#### "Shortest Path"

```
Heuristics : Shortest Distance (weight 1.0)
```

Classic shortest path by edge length.

#### "Smooth Path"

```
Heuristics : Shortest Distance (weight 1.0)
Heuristics : Turn Penalty (weight 0.5)
```

Short path that avoids sharp turns.

#### "Terrain-Aware"

```
Heuristics : Attribute [Difficulty] (weight 1.0)
Heuristics : Steepness (weight 0.5)
```

Respects terrain difficulty and slope.

#### "Exploration"

```
Heuristics : Feedback (weight 1.0)
Heuristics : Shortest Distance (weight 0.3)
```

Prefers unvisited areas while staying reasonably efficient.

### Score Curves

All heuristics support curve remapping:

* Transform raw score through a curve
* Create non-linear cost relationships
* Fine-tune response to input values

Example: Sharp penalty curve that ignores small values but heavily penalizes large ones.

### Performance Considerations

Heuristic evaluation adds per-edge cost:

* Simple heuristics (distance, attribute lookup) are cheap
* Complex heuristics (history-dependent) add overhead
* More heuristics = more computation per edge

For large clusters with many paths:

* Prefer static heuristics when possible
* Limit travel-dependent heuristics
* Consider pre-computing attribute-based costs

### Related

* Pathfinding Overview - Pathfinding concepts
* Algorithms - How algorithms use heuristics
* Heuristic Nodes - Complete reference
