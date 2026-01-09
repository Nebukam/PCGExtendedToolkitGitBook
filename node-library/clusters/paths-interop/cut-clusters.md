---
description: 'In editor :: PCGEx | Cluster : Cut'
icon: circle
---

# Cut Clusters

{% hint style="info" %}
### AI-generated page -- to be reviewed

While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Cut clusters nodes & edges using paths.

### Overview

This node removes or preserves parts of clusters based on their overlap with path data. It's useful for creating holes in cluster networks, cutting through connected components, or selectively removing elements that intersect with specific paths. You can choose to cut nodes, edges, or both, and control whether the operation keeps or removes overlapping elements.

{% hint style="info" %}
The node works by checking if cluster elements (nodes or edges) overlap with path data using intersection tests. It supports various distance modes for checking proximity.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Cluster Points** (Main Input): Cluster nodes to be processed
* **Cluster Edges**: Cluster edges connecting the nodes
* **Paths** (Optional): Path data used as cutting tools

</details>

<details>

<summary>Outputs</summary>

* **Cluster Points** (Main Output): Cluster nodes, modified based on the cut operation
* **Cluster Edges**: Cluster edges, modified based on the cut operation

</details>

### Properties Overview

Controls how the cutting operation is performed.

***

#### Cut Settings

Controls what elements are checked for overlap and how the operation behaves.

**Mode**

_Controls which cluster elements are checked against paths._

* When set to **Nodes**, only node positions are checked for overlap.
* When set to **Edges**, only edge segments are checked for overlap.
* When set to **Edges & Nodes**, both nodes and edges are checked for overlap.

**Values**:

* **Nodes**: Check for path overlap with nodes
* **Edges**: Check for path overlap with edges
* **Edges & Nodes**: Check for overlap with both nodes and edges

**Invert**

_When enabled, the operation keeps elements that overlap with paths instead of removing them._

* When disabled (default), elements overlapping with paths are removed.
* When enabled, elements overlapping with paths are preserved.

**Node Expansion**

_Controls how much to expand node bounds when checking for overlap._

* Expands node points by a factor of their scaled bounds.
* Use this to make nodes more likely to be considered overlapping with paths.
* Only affects **Nodes** and **Edges & Nodes** modes.

**Node Distance Settings**

_Selects the method used to measure distance from node to path._

* **Center**: Uses the node's center point.
* **Sphere Bounds**: Uses a sphere around the node based on its bounds radius.
* **Box Bounds**: Uses the node's full bounding box.

**Affected Nodes Affect Connected Edges**

_When enabled, nodes that are cut also remove their connected edges._

* If a node is removed due to overlap with a path, all edges connected to it are also removed.

**Affected Edges Affect Endpoints**

_When enabled, edges that are cut also remove their endpoints if they're not connected to other valid edges._

* If an edge is removed due to overlap with a path, its start and end nodes are also removed if they have no other valid connections.

**Keep Edges That Connect Valid Nodes**

_When enabled, edges connecting two preserved nodes are kept even if they don't intersect with paths._

* This ensures that valid node pairs remain connected even when the edge itself doesn't overlap with a path.

***

#### Path Settings

Controls how paths are used for intersection detection.

**Tolerance**

_Distance tolerance used to determine if an edge overlaps with a path._

* If an edge is closer than this distance to any part of a path, it's considered overlapping.
* Default value is usually sufficient for most use cases.

**Enable Self Intersection**

_When enabled, paths can intersect with themselves when checking for overlaps._

* Allows paths to be cut by their own segments.

**Min Angle**

_Minimum angle between two edges to be considered as separate intersections._

* Helps avoid false positives when edges are nearly parallel.
* Only active if **Use Min Angle** is enabled.

**Use Min Angle**

_When enabled, minimum angle threshold is applied to intersection detection._

**Max Angle**

_Maximum angle between two edges to be considered as separate intersections._

* Helps avoid false positives when edges are nearly parallel.
* Only active if **Use Max Angle** is enabled.

**Use Max Angle**

_When enabled, maximum angle threshold is applied to intersection detection._

***

#### Graph Settings

Controls how the output graph is built and structured.

**Cluster Output Settings**

_Configures the structure of the output cluster data._

* Controls how nodes and edges are organized in the output.
* Affects how downstream nodes process the results.
