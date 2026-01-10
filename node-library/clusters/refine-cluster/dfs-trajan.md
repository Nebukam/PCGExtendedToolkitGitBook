---
description: 'Refine : MST (Prim)'
icon: sliders
---

# DFS (Trajan)

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Removes edges that are part of cycles in the graph, keeping only the "bridges" — edges whose removal increases the number of connected components.

#### Overview

This subnode applies a depth-first search (DFS) algorithm based on Tarjan's method to identify and remove edges that form cycles within the graph. It is particularly useful for simplifying complex networks by removing redundant connections while preserving the overall structure and connectivity.

It operates on clusters, analyzing their edge relationships to determine which edges are essential for maintaining separate components. This helps in creating cleaner, more efficient graph structures for further processing or visualization.

{% hint style="info" %}
Connects to the **Refine** pin of cluster processing nodes like **Cluster Graph** or **Cluster MST**.
{% endhint %}

#### How It Works

This subnode performs a depth-first search (DFS) traversal of the graph using Tarjan’s algorithm to detect bridges — edges that, when removed, increase the number of connected components in the graph.

The algorithm works by:

1. Assigning discovery times and tracking lowest reachable ancestors for each node.
2. Traversing each unvisited node recursively.
3. For each edge, checking if it connects to a previously visited node that is not its parent.
4. If an edge leads to a node with a lower discovery time than the current node, it updates the lowest ancestor.
5. When a back edge creates a cycle (i.e., a node can be reached through a path other than the direct parent), it identifies if the edge is a bridge.
6. Edges that are not bridges (i.e., part of cycles) are marked for removal or kept based on the **Invert** setting.

This effectively prunes the graph to keep only essential connections, removing redundant paths and loops.

<details>

<summary>Inputs</summary>

* Cluster data containing nodes and edges.
* Optional heuristics or filters may be applied depending on settings.

</details>

<details>

<summary>Outputs</summary>

* Modified cluster with selected edges marked as invalid (based on the **Invert** setting).
* The remaining valid edges form a structure that preserves connectivity while removing cycles.

</details>

#### Configuration

<details>

<summary><strong>bInvert</strong><br><em>When enabled, keeps the edges that are part of cycles and removes the bridges.</em></summary>

Controls whether to invert the selection logic:

* When **disabled** (default), edges that are bridges (not part of any cycle) are kept.
* When **enabled**, edges that are part of cycles are kept, and bridges are removed.

</details>

#### Usage Example

Use this subnode in a cluster graph refinement step to remove redundant paths from a network. For example:

* In a road network, remove loops or shortcuts that don’t contribute to connectivity.
* In a graph-based level layout, simplify the structure by removing unnecessary connections while keeping the core topology intact.

#### Notes

* This operation is best used on graphs with multiple connected components.
* The algorithm assumes an undirected graph.
* Performance scales with the number of nodes and edges in the cluster.
