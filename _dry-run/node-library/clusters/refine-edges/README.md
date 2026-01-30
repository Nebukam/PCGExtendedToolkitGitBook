---
icon: diagram-project
description: 'In editor :: PCGEx | Cluster : Refine'
---

# Cluster : Refine

Refine edges according to special rules using **pluggable refinement operations**. Remove unwanted edges to create Minimum Spanning Trees, Gabriel graphs, or custom filtered clusters.

## Overview

Refine Edges is a parent node that accepts **refinement sub-operations** to control which edges are kept or removed. Each refinement algorithm has different criteria - length-based, spatial tests, scoring, or custom filters.

This is the primary way to reduce cluster connectivity from dense graphs (like Delaunay) to sparser, more meaningful structures.

## Key Behavior

```
Delaunay Input:              After MST Refinement:
    ●───●───●                    ● ●───●
   /│\ /│\ /│\                    \│   │
  ● │ ● │ ● │ ●      →         ●───●   ●
   \│/ \│/ \│/                        /│
    ●───●───●                    ●───● ●

Full triangulation           Tree structure (no cycles)
```

## How It Works

1. **Select Refinement**: Choose a refinement sub-operation (MST, Gabriel, Length-based, etc.)
2. **Process Edges**: Apply refinement rules to mark edges as valid/invalid
3. **Sanitize** (optional): Restore edges to prevent isolated vertices
4. **Output**: Generate refined cluster or edge attributes

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **Vtx** | Points | Cluster vertices |
| **Edges** | Points | Cluster edges to refine |
| **Vtx Filters** | Cluster Node Filters | (Optional) Filter which vertices are processed |
| **Edge Filters** | Cluster Edge Filters | (Optional) Filter which edges are processed |
| **Heuristics** | Heuristics | (Optional) Scoring for score-based refinements |
| **Sanitize Filters** | Cluster Edge Filters | (Optional) Filters for edge restoration |

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Vtx** | Points | Refined cluster vertices |
| **Edges** | Points | Refined cluster edges (or edge attributes) |

## Settings

### Refinement

<details>
<summary><strong>Refinement</strong> <code>UPCGExEdgeRefineInstancedFactory</code></summary>

The refinement operation to apply. See [Available Operations](#available-operations) below for all options.

⚡ PCG Overridable

</details>

<details>
<summary><strong>Heuristic Score Mode</strong> <code>EPCGExHeuristicScoreMode</code></summary>

How to combine multiple heuristics when using score-based refinements.

| Option | Behavior |
|--------|----------|
| **Weighted Average** | Average scores weighted by heuristic weights |
| **Min** | Use minimum score from all heuristics |
| **Max** | Use maximum score from all heuristics |

Default: `Weighted Average`

</details>

### Output Mode

<details>
<summary><strong>Mode</strong> <code>EPCGExRefineEdgesOutput</code></summary>

How to output refinement results.

| Option | Behavior |
|--------|----------|
| **Clusters** | Output refined Vtx/Edges clusters |
| **Points** | Output edges as regular points (edges only) |
| **Attribute** | Write refinement result to attributes (no edge removal) |

Default: `Clusters`

</details>

<details>
<summary><strong>Vtx Result</strong> <code>FPCGExFilterResultDetails</code></summary>

Attribute settings for vertex filter results.

⚡ PCG Overridable
📋 Visible when: `Mode = Attribute`

</details>

<details>
<summary><strong>Edge Result</strong> <code>FPCGExFilterResultDetails</code></summary>

Attribute settings for edge filter results.

⚡ PCG Overridable
📋 Visible when: `Mode = Attribute`

</details>

<details>
<summary><strong>Allow Zero Point Outputs</strong> <code>bool</code></summary>

Allow output collections with zero points (when all edges are refined away).

Default: `false`

📋 Visible when: `Mode = Points`

</details>

### Sanitization

<details>
<summary><strong>Sanitization</strong> <code>EPCGExRefineSanitization</code></summary>

How to handle vertices that become isolated (no edges) after refinement.

| Option | Behavior |
|--------|----------|
| **None** | No sanitization - allow isolated vertices |
| **Shortest** | Restore the shortest edge to isolated vertices |
| **Longest** | Restore the longest edge to isolated vertices |
| **Filters** | Use Sanitize Filters pin to select edges to restore |

Default: `None`

📋 Visible when: `Mode = Clusters`

</details>

<details>
<summary><strong>Restore Edges That Connect To Valid Nodes</strong> <code>bool</code></summary>

When sanitizing, also restore edges that connect to nodes that still have valid edges.

Default: `false`

📋 Visible when: `Mode = Clusters`

</details>

### Cluster Output Settings

<details>
<summary><strong>Cluster Output Settings</strong> <code>FPCGExGraphBuilderDetails</code></summary>

Controls how output clusters are constructed.

⚡ PCG Overridable
📋 Visible when: `Mode = Clusters`

</details>

## Available Operations

### Spatial Tests

| Operation | Description | Documentation |
|-----------|-------------|---------------|
| **MST (Prim)** | Minimum Spanning Tree using Prim's algorithm | [mst-prim.md](./mst-prim.md) |
| **Gabriel** | Keep edges where no vertex lies in edge's diametral sphere | [gabriel.md](./gabriel.md) |
| **β Skeleton** | Generalized empty region test with configurable Beta | [skeleton.md](./skeleton.md) |
| **Line Trace** | Remove edges blocked by world geometry | [line-trace.md](./line-trace.md) |
| **Overlap** | Remove overlapping edges | [overlap.md](./overlap.md) |

### Length-Based

| Operation | Description | Documentation |
|-----------|-------------|---------------|
| **Keep Shortest** | Keep only the shortest edge per vertex | [edge-length.md](./edge-length.md) |
| **Keep Longest** | Keep only the longest edge per vertex | [edge-length.md](./edge-length.md) |
| **Remove Shortest** | Remove the shortest edge per vertex | [edge-length.md](./edge-length.md) |
| **Remove Longest** | Remove the longest edge per vertex | [edge-length.md](./edge-length.md) |

### Score-Based

| Operation | Description | Documentation |
|-----------|-------------|---------------|
| **Keep Highest Score** | Keep edges with highest heuristic scores | [edge-score.md](./edge-score.md) |
| **Keep Lowest Score** | Keep edges with lowest heuristic scores | [edge-score.md](./edge-score.md) |
| **Remove Highest Score** | Remove edges with highest scores | [edge-score.md](./edge-score.md) |
| **Remove Lowest Score** | Remove edges with lowest scores | [edge-score.md](./edge-score.md) |

### Structural

| Operation | Description | Documentation |
|-----------|-------------|---------------|
| **Remove Leaves** | Remove edges connected to leaf nodes | [remove-leaves.md](./remove-leaves.md) |
| **Remove Leaves (Recursive)** | Recursively remove leaves until stable | [remove-leaves.md](./remove-leaves.md) |
| **DFS (Tarjan)** | Find bridge edges (articulation edges) | [dfs-tarjan.md](./dfs-tarjan.md) |

### Custom

| Operation | Description | Documentation |
|-----------|-------------|---------------|
| **Filter** | Use edge filters to determine validity | [filter.md](./filter.md) |

---

📦 **Module**: `PCGExElementsClusters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/PCGExRefineEdges.h)
