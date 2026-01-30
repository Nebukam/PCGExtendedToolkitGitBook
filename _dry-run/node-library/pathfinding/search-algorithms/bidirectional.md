---
icon: magnifying-glass
description: 'Search Algorithm :: Bidirectional'
---

# Bidirectional

Searches from both seed and goal simultaneously, meeting in the middle.

## Overview

Bidirectional search runs two simultaneous searches: one from the seed toward the goal, and one from the goal toward the seed. When the two searches meet, the path is reconstructed. This can be significantly faster than unidirectional search for large graphs with distant goals.

## Algorithm Details

Two parallel A*-like searches expand toward each other:

```
Forward:  Seed → ... → Meeting Point
Backward: Goal → ... → Meeting Point
```

When the forward and backward frontiers meet, the complete path is:
```
Seed → [forward path] → Meeting Point → [backward path reversed] → Goal
```

## Settings

<details>
<summary><strong>Early Exit</strong> <code>bool</code></summary>

Exit the search early once a valid path is found. With bidirectional search, this happens when the two search frontiers meet.

Default: `true`

⚡ PCG Overridable

</details>

## Performance

- **Time Complexity**: O(b^(d/2)) where b = branching factor, d = depth
- **Space Complexity**: O(b^(d/2)) for both frontiers
- **Speedup**: Can be exponentially faster than unidirectional

### Why It's Faster

For a graph with branching factor b and path depth d:
- Unidirectional: explores O(b^d) nodes
- Bidirectional: explores O(2 × b^(d/2)) nodes

**Example**: With b=10 and d=6:
- Unidirectional: ~1,000,000 nodes
- Bidirectional: ~2,000 nodes (500× faster)

## When to Use

**Recommended for:**
- Very large graphs
- Deep searches (many hops from seed to goal)
- When seed and goal are far apart
- Graphs with high branching factor

**Avoid when:**
- Graphs are small (overhead not worth it)
- Seed and goal are close
- You need to find multiple paths (may miss alternatives)

## Visualization

```
Seed ●━━━━━━━━━━━━━━━●━━━━━━━━━━━━━━━● Goal
      ↑               ↑               ↑
      |    Forward    |   Backward    |
      |    Search     |   Search      |
      └───────────────┴───────────────┘
              Meeting Point
```

## Limitations

- Requires goal position to be known (not suitable for exploration)
- May find different paths than unidirectional search
- Extra memory for maintaining two search frontiers
- More complex path reconstruction

---

📦 **Module**: `PCGExElementsPathfinding` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPathfinding/Public/Search/PCGExSearchBidirectional.h)
