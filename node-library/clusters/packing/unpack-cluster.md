---
description: 'In editor :: PCGEx | Cluster : Unpack'
icon: circle
---

# Unpack Cluster

{% hint style="info" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Restores vertex and edge clusters from a packed dataset.

### Overview

This node is used to unpack clustered data that was previously packed using the [pack-cluster.md](pack-cluster.md "mention") node. It takes a packed cluster input and restores the original vertex and edge data, allowing you to continue working with individual clusters in your procedural graph. This is particularly useful when you've performed operations on clustered data and need to access or modify the underlying points or edges.

{% hint style="info" %}
Make sure the input dataset was created using the "Cluster : Pack" node for this to work correctly.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Source Packed Clusters** (Required): The packed cluster data to unpack, typically connected from a "Cluster : Pack" node.

</details>

<details>

<summary>Outputs</summary>

* **Output Vertices**: Unpacked vertex data from the clusters.
* **Output Edges**: Unpacked edge data from the clusters.

</details>

### Properties Overview

Controls how the unpacking process behaves and what data is restored.

***

#### Settings

Controls general behavior of the unpacking operation.

**Flatten Unpacked Metadata**

_When enabled, flattens the metadata of the unpacked clusters to reduce memory overhead. This can improve performance when working with large datasets but may limit some advanced features._

* Improves performance for large datasets by reducing memory overhead
* May limit advanced metadata handling capabilities

### Notes

* Use this node after "Cluster : Pack" to restore your clustered data.
* The output vertices and edges will retain their original attributes and structure from the packed dataset.
* Consider enabling "Flatten Unpacked Metadata" for better performance when working with large datasets.
* This node is typically used in conjunction with other cluster processing nodes to build complex procedural workflows.
