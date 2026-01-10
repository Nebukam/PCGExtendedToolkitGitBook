---
description: 'In editor :: PCGEx | Cluster : Pack'
icon: circle
---

# Pack Cluster

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Pack each cluster into a single point data object containing both vertices and edges.

#### How It Works

The Cluster : Pack node takes individual clusters of points and combines them into unified point data objects. For each cluster, it collects all the vertex points and the connections (edges) between them, then creates a single output that contains everything related to that specific cluster. This process ensures that each cluster maintains its internal structure while becoming a self-contained unit for further processing.

The node processes every cluster in your input data and builds a separate output for each one. Each output includes all the original points and their relationships, making it easy to work with clusters as distinct entities without having to manage multiple data streams.

#### Configuration

<details>

<summary><strong>Carry Over Settings</strong><br><em>Meta filter settings.</em></summary>

Controls which attributes from the input data are carried over into the packed output. This allows you to selectively preserve or discard attribute data based on your needs.

**Values**:

* **All**: Carry over all attributes.
* **Exclude**: Discard listed attributes, keep the others.
* **Include**: Keep listed attributes, discard the others.

</details>

#### Usage Example

You have a graph that defines clusters of points connected by edges. After applying a clustering algorithm, you want to process each cluster independently as a single unit. Connect your cluster data to the Cluster : Pack node and configure it to carry over relevant attributes like position, color, or custom tags. The output will be one point IO per cluster, containing all vertices and edges of that cluster.

#### Notes

* The node preserves all original vertex and edge relationships within each cluster.
* Attribute carrying is controlled via the Carry Over Settings subnode.
* Each packed cluster becomes a separate output, allowing for parallel processing of multiple clusters.
