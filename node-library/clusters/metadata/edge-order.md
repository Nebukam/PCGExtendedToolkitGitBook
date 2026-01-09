---
description: 'In editor :: PCGEx | Cluster : Edge Order'
icon: circle
---

# Edge Order

{% hint style="warning" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Fix an order for edge start & end endpoints.

### Overview

This node ensures that edges in your clusters have a consistent and predictable ordering of their start and end points. It's particularly useful when you want to establish a direction or sequence for edges, such as making sure all edges point from smaller to larger node IDs, or aligning them with a specific attribute value. The node can also sort edges based on various criteria, which helps in creating more structured and predictable procedural outputs.

{% hint style="info" %}
This node modifies edge data by reordering the start and end points of each edge. It does not create new edges or modify point data directly.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input (Points)**: Points representing nodes in your graph.
* **Edges (Point IOs)**: Edges connecting the nodes, typically generated from a clustering operation.

</details>

<details>

<summary>Outputs</summary>

* **Main Output (Points)**: The original node points, unchanged.
* **Edge Output (Point IOs)**: Modified edges with reordered start and end points according to the specified settings.

</details>

### Properties Overview

Controls how edge endpoints are ordered and potentially sorted.

***

#### Edge Direction Settings

Defines how the direction of each edge is determined.

**Direction Method**

_Controls how the edge's start and end points are selected._

* How it affects results: Determines whether edges are ordered based on their original point order, an attribute value, or other criteria.
* Value ranges: Select from available methods like "Endpoints Order", "Edge Dot Attribute", etc.

**Values**:

* **Endpoints Order**: Uses the original order of points in the edge.
* **Edge Dot Attribute**: Orders edges using a dot product comparison against a specified attribute.
* **Edge Length**: Orders edges by their length, with shortest or longest first.
* **Custom Sort**: Allows sorting based on custom rules defined elsewhere.

**Direction Choice**

_Determines which endpoint is considered the "start" and which is the "end"._

* How it affects results: Influences whether the edge points from smaller to larger values or vice versa.
* Value ranges: Select between smallest-to-greatest or greatest-to-smallest ordering.

**Values**:

* **Smallest To Greatest**: Orders edges so that the smaller value comes first.
* **Greatest To Smallest**: Orders edges so that the larger value comes first.

**Attribute Source**

_The attribute used to determine edge direction when using "Edge Dot Attribute"._

* How it affects results: The chosen attribute is used to compute a dot product, which then determines the ordering of endpoints.
* Value ranges: Any valid point or edge attribute in your data.

**Sort Rules**

_Controls how edges are sorted after endpoint ordering is applied._

* How it affects results: When enabled, edges are reordered based on one or more sorting criteria.
* Value ranges: Define multiple rules with tolerance and invert options for fine-grained control.

### Notes

* This node is especially useful when you need consistent edge directions for downstream processing, such as pathfinding or graph traversal.
* The "Edge Dot Attribute" method can be powerful for aligning edges with a specific vector or direction in your scene.
* When using sorting rules, consider performance implications if dealing with large numbers of edges.
* You can combine this node with other cluster operations to create complex and structured procedural graphs.
