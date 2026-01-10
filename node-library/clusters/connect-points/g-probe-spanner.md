---
icon: circle-dashed
---

# G-Probe : Spanner

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Creates a sparse graph with guaranteed path length bounds using a greedy t-spanner algorithm.

#### How It Works

The Greedy Spanner subnode builds a network of connections between points that ensures all paths between any two points are no longer than a certain multiple of their direct distance. This is done by applying a greedy algorithm that carefully selects which points should be connected.

The process works by:

1. Looking at every possible pair of points in your dataset
2. For each pair, checking if connecting them would break the stretch factor rule (i.e., if there's already a shorter path between them)
3. If no conflict exists, it adds the connection to the graph
4. This continues until all valid connections are made or a maximum number of candidates is reached

The result is a network that balances sparsity with path quality — meaning it doesn't create too many connections (which would make it slow), but still ensures that nearby points can be reached quickly.

#### Configuration

<details>

<summary><strong>Stretch Factor</strong><br><em>Controls how sparse or dense the resulting graph is.</em></summary>

Defines the stretch factor `t` for the spanner. A lower value results in a denser graph with shorter paths, while a higher value produces a sparser graph.

**Values**:

* **1.0**: Minimal stretch - very dense graph
* **2.0**: Standard stretch factor - good balance between density and path quality
* **5.0**: High stretch - sparse graph with longer paths

</details>

<details>

<summary><strong>Max Edge Candidates</strong><br><em>Limits the number of edges considered for performance.</em></summary>

Sets an upper limit on how many potential connections are evaluated during the greedy spanner process. This helps control performance and memory usage, especially with large datasets.

**Values**:

* **100**: Very low candidate count - faster but may miss connections
* **50000**: Default value - good balance for most use cases

</details>

#### Usage Example

Use this subnode when you want to generate a navigation graph that maintains short paths between nearby points, but without creating a fully connected graph. For example:

1. Create a point cloud representing waypoints in a level
2. Connect these points using the Greedy Spanner subnode with a stretch factor of `2.0`
3. The resulting graph ensures that any two nearby waypoints can be reached via a path that is at most twice their direct distance, while keeping the number of connections manageable

#### Notes

* The algorithm is greedy and may not produce the optimal t-spanner for all datasets
* Higher stretch factors result in significantly fewer connections, improving performance but potentially increasing path lengths
* The Max Edge Candidates setting can be tuned to balance between accuracy and performance depending on dataset size
* This subnode works best with point clouds where spatial proximity is meaningful
