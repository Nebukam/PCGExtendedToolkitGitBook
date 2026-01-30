---
icon: diagram-project
description: Length-based edge refinement operations
---

# Length-Based Refinement

Keep or remove edges based on their **length relative to other edges** at each vertex.

## Overview

Length-based refinements operate per-vertex, comparing the lengths of all edges connected to each vertex and keeping or removing the extreme (shortest/longest) edge.

## Available Operations

### Keep Shortest

**Display Name**: `Keep Shortest`

For each vertex, keep only its **shortest** connected edge. All other edges from that vertex are removed.

```
Before:          After Keep Shortest:
  ●               ●
 /│\               \
● ● ●     →     ●   ●   ●
(varied)        (only shortest kept)
```

**Default Edge Validity**: `false` (edges start invalid, shortest gets validated)

---

### Keep Longest

**Display Name**: `Keep Longest`

For each vertex, keep only its **longest** connected edge. All other edges from that vertex are removed.

```
Before:          After Keep Longest:
  ●               ●
 /│\             /
● ● ●     →     ●   ●   ●
(varied)        (only longest kept)
```

**Default Edge Validity**: `false` (edges start invalid, longest gets validated)

---

### Remove Shortest

**Display Name**: `Remove Shortest`

For each vertex, remove its **shortest** connected edge. All other edges remain.

```
Before:          After Remove Shortest:
  ●               ●
 /│\             /│
● ● ●     →     ● ● ●
(varied)        (shortest removed)
```

**Default Edge Validity**: `true` (edges start valid, shortest gets invalidated)

---

### Remove Longest

**Display Name**: `Remove Longest`

For each vertex, remove its **longest** connected edge. All other edges remain.

```
Before:          After Remove Longest:
  ●               ●
 /│\              │\
● ● ●     →     ● ● ●
(varied)        (longest removed)
```

**Default Edge Validity**: `true` (edges start valid, longest gets invalidated)

## Settings

These operations have no configurable settings. They operate purely on edge length comparison.

## How It Works

1. **Per-vertex processing**: Each vertex is processed independently
2. **Compare lengths**: Calculate squared distance for all connected edges
3. **Select extreme**: Find the shortest or longest edge
4. **Set validity**: Mark the selected edge as valid or invalid (depending on operation)

**Note**: Since each vertex independently selects its extreme edge, an edge may be selected by both endpoints or by only one. The final result depends on whether edges are being kept (union of selections) or removed (any vertex removal invalidates the edge).

## Examples

**Sparse radial connections** (Keep Shortest):
- Each vertex keeps only its closest neighbor
- Result: Star-like patterns from high-degree vertices

**Long-distance network** (Keep Longest):
- Each vertex keeps only its farthest connection
- Result: Spanning connections across the graph

---

📦 **Parent**: [Refine Edges](./README.md)

**Sources**:
- [PCGExEdgeRefineKeepShortest.h](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/Refining/PCGExEdgeRefineKeepShortest.h)
- [PCGExEdgeRefineKeepLongest.h](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/Refining/PCGExEdgeRefineKeepLongest.h)
- [PCGExEdgeRefineRemoveShortest.h](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/Refining/PCGExEdgeRefineRemoveShortest.h)
- [PCGExEdgeRefineRemoveLongest.h](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/Refining/PCGExEdgeRefineRemoveLongest.h)
