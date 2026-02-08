---
icon: puzzle-piece
description: 'Score-Based Refinements - Keep or remove edges by heuristic score per vertex'
---

# Score-Based Refinements

Four refinement operations that select edges by heuristic score at each Vtx. Requires heuristics sub-nodes connected to the parent **Refine Edges** node for scoring.

## Variants

| Refinement | Behavior |
|------------|----------|
| **Keep Highest Score** | Keeps only the highest-scoring edge at each Vtx. All others removed. |
| **Keep Lowest Score** | Keeps only the lowest-scoring edge at each Vtx. All others removed. |
| **Remove Highest Score** | Removes the highest-scoring edge at each Vtx. All others kept. |
| **Remove Lowest Score** | Removes the lowest-scoring edge at each Vtx. All others kept. |

## How It Works

1. Each Vtx is processed independently
2. All connected edges are evaluated using the configured heuristics
3. The extreme edge (highest or lowest score) is identified
4. That edge is either kept exclusively or removed, depending on the variant

## Behavior

```
Before:                         Keep Highest:        Remove Highest:

    B                           B                    B
    |s=0.8                      |
    |                           |
A---C---D                   A   C   D            A---C---D
    |s=0.3                                           |
    |                                                |
    E                           E                    E

At vertex C:
  Keep Highest → C-B (score 0.8) kept, all others removed
  Remove Highest → C-B (score 0.8) removed, all others kept
```

### Per-Vtx Decision

Each Vtx decides independently. An edge kept by one endpoint may be removed by the other. The final result is the union of all per-Vtx decisions.

### Score Interpretation

What "highest" and "lowest" mean depends on your heuristics. If lower scores represent better connections (shortest distance, lowest cost), use **Keep Lowest** to keep the best. If higher scores represent importance (centrality, weight), use **Keep Highest**.

**Keep** variants produce very sparse output. **Remove** variants prune one edge per Vtx while leaving the rest intact.

## Settings

No additional settings on the refinement itself. Edge scoring is controlled entirely by the heuristics sub-nodes connected to the parent Refine Edges node.

---

![Static Badge](https://img.shields.io/badge/Module-PCGExElementsClusters-473F69) | Source: [KeepHighestScore](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/Refining/PCGExEdgeRefineKeepHighestScore.h) · [KeepLowestScore](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/Refining/PCGExEdgeRefineKeepLowestScore.h) · [RemoveHighestScore](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/Refining/PCGExEdgeRefineRemoveHighestScore.h) · [RemoveLowestScore](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/Refining/PCGExEdgeRefineRemoveLowestScore.h)
