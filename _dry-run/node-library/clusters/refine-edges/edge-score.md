---
icon: diagram-project
description: Heuristic score-based edge refinement operations
---

# Score-Based Refinement

Keep or remove edges based on **heuristic scores** computed for each edge at each vertex.

## Overview

Score-based refinements use the Heuristics system to compute a score for each edge, then keep or remove edges based on those scores. This allows for flexible, attribute-driven edge selection.

**Requires**: Heuristics input pin connected to the parent Refine Edges node.

## Available Operations

### Keep Highest Score

**Display Name**: `Keep Highest Score`

For each vertex, keep only the edge with the **highest** heuristic score.

```
Before (scores):     After Keep Highest:
    ●                    ●
   /│\                    \
  0.3│0.8              0.3 │ 0.8
 /  │  \                   │   \
●   ●   ●     →       ●    ●    ●
                      (only 0.8 kept)
```

**Default Edge Validity**: `false`

---

### Keep Lowest Score

**Display Name**: `Keep Lowest Score`

For each vertex, keep only the edge with the **lowest** heuristic score.

```
Before (scores):     After Keep Lowest:
    ●                    ●
   /│\                  /
  0.3│0.8              0.3 │ 0.8
 /  │  \              /    │
●   ●   ●     →       ●    ●    ●
                      (only 0.3 kept)
```

**Default Edge Validity**: `false`

---

### Remove Highest Score

**Display Name**: `Remove Highest Score`

For each vertex, remove the edge with the **highest** heuristic score.

**Default Edge Validity**: `true`

---

### Remove Lowest Score

**Display Name**: `Remove Lowest Score`

For each vertex, remove the edge with the **lowest** heuristic score.

**Default Edge Validity**: `true`

## Settings

These operations have no operation-specific settings. Configure scoring through the Heuristics system connected to the parent node.

## How It Works

1. **Per-vertex processing**: Each vertex is processed independently
2. **Query heuristics**: Get the roaming seed and goal from heuristics handler
3. **Score edges**: Compute heuristic score for each connected edge
4. **Select extreme**: Find the highest or lowest scored edge
5. **Set validity**: Mark the selected edge as valid or invalid

## Heuristics Integration

The score for each edge is computed using:
- **Current node**: The vertex being processed
- **Neighbor node**: The connected vertex
- **Edge data**: The edge connecting them
- **Roaming seed/goal**: Reference points from heuristics

Multiple heuristics can be combined using the **Heuristic Score Mode** on the parent Refine Edges node:
- **Weighted Average**: Blend scores by heuristic weights
- **Min**: Use minimum score from all heuristics
- **Max**: Use maximum score from all heuristics

## Examples

**Prefer connections to tagged nodes**:
1. Create an attribute-based heuristic that scores higher for certain tags
2. Use Keep Highest Score
3. Result: Each vertex connects toward tagged neighbors

**Avoid steep edges**:
1. Create slope heuristic (lower score for steep edges)
2. Use Remove Lowest Score
3. Result: Steepest edges removed from each vertex

---

📦 **Parent**: [Refine Edges](./README.md)

**Sources**:
- [PCGExEdgeRefineKeepHighestScore.h](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/Refining/PCGExEdgeRefineKeepHighestScore.h)
- [PCGExEdgeRefineKeepLowestScore.h](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/Refining/PCGExEdgeRefineKeepLowestScore.h)
- [PCGExEdgeRefineRemoveHighestScore.h](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/Refining/PCGExEdgeRefineRemoveHighestScore.h)
- [PCGExEdgeRefineRemoveLowestScore.h](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/Refining/PCGExEdgeRefineRemoveLowestScore.h)
