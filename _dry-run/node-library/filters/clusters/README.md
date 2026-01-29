---
icon: diagram-project
---

# Cluster Filters

Cluster filters evaluate nodes (vertices) and edges within graph structures. They're specialized for cluster-processing nodes and understand graph topology.

## Node Filters vs Edge Filters

Cluster filters come in two types:

**Node Filters (Vtx Filters)**: Evaluate cluster nodes based on their connections, adjacent edges, or neighboring nodes.

**Edge Filters**: Evaluate edges based on their length, direction, endpoint properties, or connectivity.

## Available Node Filters

| Filter | Purpose |
|--------|---------|
| [Num Edges](./node-neighbors-count.md) | Compare node's connection count (degree) |
| [Adjacency](./node-adjacency.md) | Compare attributes with adjacent nodes |
| [Edge Direction](./node-edge-direction.md) | Test direction of connected edges |
| [Edge Angle](./node-edge-angle.md) | Compare angles between connected edges |

## Available Edge Filters

| Filter | Purpose |
|--------|---------|
| [Length](./edge-length.md) | Compare edge length |
| [Num Vtx](./edge-neighbors-count.md) | Compare endpoint connection counts |
| [Edge Direction](./edge-direction.md) | Compare edge direction vector |
| [Endpoints Check](./edge-endpoints-check.md) | Apply point filters to endpoints |
| [Endpoints Compare (Numeric)](./edge-endpoints-compare-numeric.md) | Compare numeric attributes between endpoints |
| [Endpoints Compare (String)](./edge-endpoints-compare-string.md) | Compare string attributes between endpoints |

## Filter Pin Compatibility

Cluster-processing nodes have separate filter pins for vertices and edges:

### Vtx (Node) Filter Pins

**Accept both point filters AND node filters.** Cluster nodes are still regular points with all standard attributes—they just have additional graph context available. This means:

- All point filters work on node filter pins (Numeric Compare, Distance, Bounds, etc.)
- Node-specific filters add graph-aware logic (Neighbors Count, Adjacency, etc.)

### Edge Filter Pins

**Accept both point filters AND edge filters.** Edges are represented as points with all standard attributes—they just have additional graph context available. This means:

- All point filters work on edge filter pins (Numeric Compare, Distance, Bounds, etc.)
- Edge-specific filters add graph-aware logic (Length, Direction, Endpoints Check, etc.)

{% hint style="info" %}
**Key principle**: Point filters work "upward" into cluster context, but cluster filters cannot work "downward" on regular points.
{% endhint %}

## Understanding Graph Terminology

| Term | Meaning |
|------|---------|
| **Node** (Vtx) | A vertex in the graph, corresponds to a point |
| **Edge** | A connection between two nodes |
| **Degree** | Number of edges connected to a node |
| **Leaf** | A node with exactly one connection |
| **Adjacent** | Nodes that share an edge |
| **Endpoint** | One of the two nodes an edge connects |
