---
icon: grid-round-2
---

# Refine

**Edge refinement operations. All refinement sub-nodes run through the Refine Edges node, which accepts one or more refinement operations.**

| Node             | Description                                                 |
| ---------------- | ----------------------------------------------------------- |
| **Refine Edges** | Applies one or more refinement operations to cluster edges. |

| Node                   | Description                                               |
| ---------------------- | --------------------------------------------------------- |
| **Subdivide Edges**    | Insert new Vtx along edges by count or distance           |
| **Simplify Clusters**  | Remove redundant degree-2 Vtx from chains                 |
| **Filter Vtx**         | Remove vertices by condition with cascading edge cleanup  |
| **Fuse Clusters**      | Merge close Vtx across clusters with attribute blending   |
| **Connect Clusters**   | Bridge disconnected cluster components                    |
| **Decompose Clusters** | Separate disconnected components into individual clusters |

### Refinement Sub-Nodes

| Sub-Node                      | Description                                                                          |
| ----------------------------- | ------------------------------------------------------------------------------------ |
| **Filter**                    | Remove/keep edges based on filter evaluation                                         |
| **Length-Based**              | Keep/remove shortest or longest edge per Vtx (4 variants)                            |
| **Score-Based**               | Keep/remove highest or lowest scoring edge per Vtx (4 variants, requires heuristics) |
| **Gabriel**                   | Produce Gabriel graph (diametric circle test)                                        |
| **Beta Skeleton**             | Configurable neighborhood parameter                                                  |
| **MST (Prim)**                | Minimum spanning tree via Prim's algorithm (requires heuristics)                     |
| **DFS (Tarjan)**              | Identify bridge edges via depth-first search                                         |
| **Remove Leaves**             | Strip dead-end vertices                                                              |
| **Remove Leaves (Recursive)** | Strip dead-end vertices recursively                                                  |
| **Overlap**                   | Remove overlapping/crossing edges with angle filtering                               |
| **Line Trace**                | Remove edges blocked by world geometry via raycasts                                  |

> See [Refining Clusters](../../../working-with-pcgex-1/clusters/refining-clusters.md) for refinement strategies and workflows.
