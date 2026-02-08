---
icon: circle
---

# Find Cluster Hull

Output a single hull per cluster, as a path.

### Overview

This node extracts the outermost boundary of each cluster graph as a closed path. Unlike Find All Cells which discovers every internal cell, this node outputs only the single hull contour that wraps the entire cluster. This is useful for obtaining the silhouette or perimeter of a cluster structure.

### How It Works

1. **Find Boundary**: Identifies the outermost edges that form the cluster perimeter.
2. **Trace Hull**: Follows the boundary edges to build a closed contour path.
3. **Apply Constraints**: Validates the hull against size and shape constraints.
4. **Output Path**: Creates path data representing the hull contour.

**Usage Notes**

* **Single Output Per Cluster**: Each cluster produces exactly one hull path.
* **Concave Hulls**: The hull follows the actual cluster boundary, not a convex hull.
* **Winding Order**: Output can be forced to clockwise or counter-clockwise orientation.
* **Disconnected Clusters**: Each connected component produces its own hull.

### Behavior

```
Hull Extraction:

Cluster Graph:
    [A]───[B]───[C]
     │ ╲ ╱ │ ╲ ╱ │
    [D]───[E]───[F]
     │ ╱ ╲ │ ╱ ╲ │
    [G]───[H]───[I]

Hull Output (outer boundary only):
    A → B → C → F → I → H → G → D → A

Internal edges (B-E, E-H, D-E, E-F, etc.) are not part of hull
```

### Inputs

| Pin       | Type   | Description      |
| --------- | ------ | ---------------- |
| **Vtx**   | Points | Cluster vertices |
| **Edges** | Points | Cluster edges    |

### Settings

#### Hull Constraints

<details>

<summary><strong>Constraints</strong> <code>FPCGExCellConstraintsDetails</code></summary>

Filtering rules for the output hull. Uses the same constraint options as cell nodes.

| Property            | Description                                 |
| ------------------- | ------------------------------------------- |
| **Rotation Method** | How to determine hull winding               |
| **Output Winding**  | Clockwise or CounterClockwise               |
| **Aspect Filter**   | Convex only, Concave only, or Both          |
| **Size Filters**    | Min/max bounds, area, perimeter constraints |

⚡ PCG Overridable

</details>

#### Hull Output

<details>

<summary><strong>Artifacts</strong> <code>FPCGExCellArtifactsDetails</code></summary>

Controls what data is output for the hull.

| Property               | Description                    |
| ---------------------- | ------------------------------ |
| **Output Paths**       | Output hull as path data       |
| **Output Cell Bounds** | Output oriented bounding box   |
| **Write Area**         | Hull area as attribute         |
| **Write Compactness**  | Circularity ratio as attribute |
| **Write Num Nodes**    | Vertex count as attribute      |

⚡ PCG Overridable

</details>

#### Projection

<details>

<summary><strong>Projection Details</strong> <code>FPCGExGeo2DProjectionDetails</code></summary>

How the cluster is projected for 2D boundary detection.

//→ See TODO FPCGExGeo2DProjectionDetails

</details>

#### Performance

<details>

<summary><strong>Use Octree Search</strong> <code>bool</code></summary>

Uses octree spatial indexing for proximity queries.

Default: `false`

_Advanced setting_

</details>

#### Warnings

<details>

<summary><strong>Quiet Failed to Find Hull Warning</strong> <code>bool</code></summary>

Suppresses warning when a hull could not be found for a cluster.

Default: `false`

_Advanced setting_

</details>

#### Inherited Settings

→ See Clusters Processor Settings for common cluster processing settings.

### Outputs

| Pin             | Type   | Description                          |
| --------------- | ------ | ------------------------------------ |
| **Paths**       | Points | Hull contour paths (one per cluster) |
| **Cell Bounds** | Points | Oriented bounding boxes (if enabled) |
| **Vtx**         | Points | Modified vertices                    |
| **Edges**       | Points | Modified edges                       |

***

📦 **Module**: `PCGExElementsPathfinding` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPathfinding/Public/Elements/PCGExPathfindingFindClusterHull.h)
