---
description: 'In editor :: PCGEx | Cluster : Make Unique'
icon: circle
---

# Make Unique

{% hint style="info" %}
### AI-generated page -- to be reviewed

While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Outputs a new, unique data pointer for the input clusters; to avoid overlap and unexpected behaviors.

### Overview

This node ensures that each cluster in your graph has its own independent data pointer, preventing shared references that can cause unexpected behavior when multiple operations are applied to the same cluster. It's particularly useful when you're working with cluster data that may be modified or reused across different parts of your graph, as it guarantees that changes to one cluster won't inadvertently affect others.

This node is especially helpful in scenarios where clusters are passed through multiple processing nodes, or when you want to ensure that each cluster maintains its own distinct state during complex procedural workflows. It helps maintain data integrity and prevents unintended side effects from shared memory references.

{% hint style="info" %}
Use this node when you notice unexpected behavior or data corruption in your clusters after applying multiple operations.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input** (PointIO): Accepts one or more cluster point IOs to process
* **Edge Input** (Edge): Optional edge input for graph-related processing

</details>

<details>

<summary>Outputs</summary>

* **Main Output** (PointIO): Unique cluster data pointers for each input cluster
* **Edge Output** (Edge): Edge data if applicable

</details>

### Properties Overview

This node has no user-facing properties. It automatically handles the creation of unique cluster data pointers.

***

#### General Settings

Controls how the unique cluster data is generated and managed.

**Make Unique**

_When enabled, this node creates a new, unique data pointer for each input cluster._

* Ensures that each cluster's data is independent
* Prevents shared references between clusters
* Helps avoid unexpected behaviors in multi-stage procedural workflows

### Notes

* This node is typically used as a safety measure when working with complex cluster processing workflows
* It's especially important when clusters are modified by downstream nodes or when the same cluster data is used in multiple places
* The operation is lightweight and adds minimal overhead to your graph
* Consider using this node at the beginning of a cluster processing workflow if you're experiencing unexpected behavior or data corruption
