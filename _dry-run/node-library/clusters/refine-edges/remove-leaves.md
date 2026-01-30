---
icon: diagram-project
description: Remove leaf nodes and their edges from clusters
---

# Remove Leaves

Remove **leaf nodes** (vertices with only one connection) and their edges from the cluster.

## Overview

Leaf removal operations trim the "dead ends" of a graph - vertices that have only a single edge connection. This is useful for cleaning up graph structures, finding the core connectivity, or iteratively reducing graphs to their essential skeleton.

## Available Operations

### Remove Leaves

**Display Name**: `Remove Leaves`

Remove all leaf nodes and their single edges in a single pass.

```
Before:                After Remove Leaves:
    ●                      ●
    │                      │
●───●───●───●    →     ●───●───●
    │                      │
    ●                      ●
   ╱ ╲
  ●   ●                   (leaves trimmed)
```

A vertex is a **leaf** if it has exactly one edge (degree 1).

---

### Remove Leaves (Recursive)

**Display Name**: `Remove Leaves (Recursive)`

Repeatedly remove leaves until no more leaves remain or maximum iterations reached.

```
Before:                After Recursive Removal:
●───●───●───●───●          ●───●───●
    │                          │
    ●                          │
    │                          │
    ●───●                      │
        │
        ●            →     (all chains trimmed)
```

Each iteration removes the current leaves, which may expose new leaves (previously degree-2 vertices that now have only one remaining edge).

## Settings

### Remove Leaves

No configurable settings.

### Remove Leaves (Recursive)

<details>
<summary><strong>Max Iterations</strong> <code>int32</code></summary>

Maximum number of removal iterations. Set to 0 or less for unlimited iterations (continues until no leaves remain).

Default: `0` (unlimited)

⚡ PCG Overridable

</details>

## How It Works

### Remove Leaves (Single Pass)

1. **Find leaves**: Identify all vertices with exactly one connection
2. **Invalidate**: Mark the leaf vertex and its single edge as invalid
3. **One pass**: Only processes initial leaves, doesn't re-check

### Remove Leaves (Recursive)

1. **Initialize**: Count valid connections for all vertices
2. **Queue leaves**: Add all degree-1 vertices to processing queue
3. **Process**: For each leaf:
   - Invalidate leaf and its edge
   - Decrement neighbor's connection count
   - If neighbor becomes leaf, add to next iteration queue
4. **Iterate**: Repeat until queue is empty or max iterations reached

## Examples

**Find graph backbone**:
- Use Remove Leaves (Recursive) with unlimited iterations
- Result: Only loops and junction-connected paths remain

**Trim single level**:
- Use Remove Leaves (single pass)
- Result: Only the outermost dead-ends removed

**Controlled reduction**:
- Use Remove Leaves (Recursive) with Max Iterations = 3
- Result: Trim up to 3 levels of leaves

---

📦 **Parent**: [Refine Edges](./README.md)

**Sources**:
- [PCGExEdgeRefineRemoveLeaves.h](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/Refining/PCGExEdgeRefineRemoveLeaves.h)
- [PCGExEdgeRefineRemoveLeavesRecursive.h](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/Refining/PCGExEdgeRefineRemoveLeavesRecursive.h)
