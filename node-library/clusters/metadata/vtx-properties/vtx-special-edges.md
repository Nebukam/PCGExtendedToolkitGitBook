---
description: 'In editor :: PCGEx | Vtx : Special Edges'
icon: circle-dashed
---

# Vtx : Special Edges

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Computes and stores special edge metrics (shortest, longest, average) for each vertex in a cluster.

#### How It Works

This node analyzes the connections around each vertex in a cluster to calculate three important measurements: the length of the shortest connection, the longest connection, and the average connection length. For every vertex, it examines all edges attached to it and determines these values. The results are saved as new properties on each vertex, which can then be used for filtering, visualization, or further analysis in your graph.

#### Configuration

This node has three main outputs that control how the computed metrics are stored:

* **Shortest Edge**: Stores the length of the shortest connection for each vertex.
* **Longest Edge**: Stores the length of the longest connection for each vertex.
* **Average Edge**: Stores the average length of all connections for each vertex.

Each output can be configured independently to define how the data is named and stored. These settings allow you to control whether the values are indexed or not, making it easier to use them in downstream nodes.

{% hint style="info" %}
Connects to **Vtx Property Provider** nodes and expects a **Cluster** input.
{% endhint %}

#### Usage Example

1. Create a cluster from a mesh or point cloud.
2. Add the "Vtx : Special Edges" node to your graph.
3. Connect the cluster input to the node.
4. Configure the output names for shortest, longest, and average edges.
5. Use the resulting vertex properties in downstream nodes like filters or visualizers to highlight vertices with extreme edge lengths.

#### Notes

* This node is computationally light as it only processes adjacency data.
* The computed values are stored per-vertex, so performance scales with the number of vertices.
* Useful for identifying outliers in mesh topology or graph structure.
