---
icon: puzzle-piece
description: 'Refine : Gabriel - Produces a Gabriel graph by removing edges with vertices in their diametric circle'
---

# Refine : Gabriel

Refines a cluster into a Gabriel graph by removing edges that have other vertices within their diametric circle.

## Overview

This edge refinement operation applies the Gabriel graph criterion to filter edges. An edge passes the Gabriel test if no other vertex lies inside the circle (or sphere in 3D) whose diameter is the edge itself. Edges that fail this test — meaning another vertex exists within their diametric circle — are removed. The result is a Gabriel graph, which is a subgraph of the Delaunay triangulation.

## How It Works

1. **Edge Analysis**: For each edge, calculates the midpoint and the radius (half the edge length).
2. **Sphere Test**: Searches for any vertex that lies within the sphere centered at the midpoint with the calculated radius.
3. **Edge Removal**: If any vertex is found inside the diametric sphere, the edge is removed (or kept if inverted).

#### Usage Notes

- **Gabriel Property**: The Gabriel graph connects points that are "relatively close" neighbors — no third point is closer to both endpoints than they are to each other.
- **Subset Relationship**: A Gabriel graph is always a subgraph of the Delaunay triangulation but a supergraph of the minimum spanning tree.
- **3D Extension**: In 3D, the diametric "circle" becomes a diametric sphere.

## Behavior

```
Gabriel Test:

    Edge A----B                  Edge A----B
       ·                            ·
      (C inside circle)            (no vertex inside)
         ↓                            ↓
      REMOVED                       KEPT

The circle has the edge as its diameter.
If any vertex C lies inside → edge fails Gabriel test.
```

## Settings

<details>
<summary><strong>Invert</strong> <code>bool</code></summary>

Invert the refinement result. When enabled, edges that would normally be removed (those failing the Gabriel test) are kept, and edges that would be kept are removed instead.

Default: `false`

⚡ PCG Overridable

</details>

---

📦 **Module**: `PCGExElementsClusters` | [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/Refining/PCGExEdgeRefineGabriel.h)

<!-- VERIFICATION REPORT
Node-Specific Properties: 1 documented (bInvert)
Inherited Properties: None (instanced factory)
Inputs: N/A (refinement operation)
Outputs: N/A (refinement operation)
Nested Types: None
-->
