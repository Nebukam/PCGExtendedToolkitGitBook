# Remove Longest

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Removes the longest edge connected to each node in a cluster.

#### How It Works

This subnode processes each node in a cluster individually. For every node, it examines all edges connected to that node and calculates the squared distance between the node and its neighbor for each edge. It then identifies the edge with the greatest distance — the longest edge — and marks it as invalid, effectively removing it from the graph.

The algorithm ensures only one edge per node is removed: specifically, the one that extends the furthest from the node. This approach maintains overall connectivity while reducing the maximum edge length in the cluster.

#### Configuration

<details>

<summary><strong>Individual Node Processing</strong><br><em>When enabled, processes each node individually.</em></summary>

Controls whether the operation is applied to nodes in parallel or sequentially. When enabled, it ensures that each node's longest edge is processed independently.

</details>

#### Usage Example

Use this subnode when you want to simplify a graph by removing long-range connections while preserving local structure. For example, in a terrain network where you want to reduce the maximum distance between connected points, or when creating a simplified version of a graph for performance reasons.

#### Notes

* This operation modifies edge validity flags rather than deleting edges outright.
* It only removes one edge per node — the longest one.
* The algorithm uses squared distances for performance, avoiding expensive square root calculations.
