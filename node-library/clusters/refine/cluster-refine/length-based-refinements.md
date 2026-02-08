---
icon: rectangles-mixed
---

# Length-Based Refinements

Four refinement operations that select edges by Euclidean length at each Vtx. No settings — just pick the variant that matches your intent.

### Variants

| Refinement          | Behavior                                                      |
| ------------------- | ------------------------------------------------------------- |
| **Keep Shortest**   | Keeps only the shortest edge at each Vtx. All others removed. |
| **Keep Longest**    | Keeps only the longest edge at each Vtx. All others removed.  |
| **Remove Shortest** | Removes the shortest edge at each Vtx. All others kept.       |
| **Remove Longest**  | Removes the longest edge at each Vtx. All others kept.        |

> These are [refine-operation.md](refine-operation.md "mention")s

### How It Works

1. Each Vtx is processed independently
2. All connected edges are compared by squared Euclidean distance
3. The extreme edge (shortest or longest) is identified
4. That edge is either kept exclusively or removed, depending on the variant

### Behavior

```
Before:                         Keep Shortest:       Remove Longest:

    B (dist=5)                  B                    B
    |                                                |
    |                                                |
A---C---D (dist=3)          A---C   D            A---C---D
    |
    | (dist=8)
    E                           E                    E

At vertex C:
  Keep Shortest → C-A (shortest) kept, all others removed
  Remove Longest → C-E (longest) removed, all others kept
```

#### Per-Vtx Decision

Each Vtx decides independently. An edge kept by one endpoint may be removed by the other. The final result is the union of all per-Vtx decisions — an edge survives if _any_ endpoint's rule preserves it.

**Keep** variants produce very sparse output — often nearest-neighbor or farthest-neighbor structures. **Remove** variants are gentler, pruning one edge per Vtx while leaving the rest intact.

### Settings

No additional settings. Selection is purely by edge length.

***

![Static Badge](https://img.shields.io/badge/Source-PCGExElementsClusters-473F69) | Source: [KeepShortest](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/Refining/PCGExEdgeRefineKeepShortest.h) · [KeepLongest](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/Refining/PCGExEdgeRefineKeepLongest.h) · [RemoveShortest](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/Refining/PCGExEdgeRefineRemoveShortest.h) · [RemoveLongest](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/Refining/PCGExEdgeRefineRemoveLongest.h)








