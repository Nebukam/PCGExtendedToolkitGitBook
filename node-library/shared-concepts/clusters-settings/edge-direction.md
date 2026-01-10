---
icon: share-nodes
---

# Edge Direction

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Controls how edge directions are determined in procedural graphs, allowing for consistent orientation of connections between points.

#### Overview

This configuration block defines how edges — the connections between points or clusters — are oriented within your procedural setup. You can choose from several methods to determine which direction an edge should point, such as based on the order of endpoints, a custom attribute, or sorting criteria. It's useful when you need predictable or meaningful orientations for paths, connections, or directional data in your procedural content.

Adjusting these settings ensures that edges behave consistently across different parts of your graph, especially when working with clusters, paths, or directional filters. The options work together to give fine-grained control over how direction is interpreted and applied, whether through fixed rules or dynamic attributes.

{% hint style="info" %}
This configuration appears in nodes like: Write Edge Properties, Break Clusters To Paths, Edge Order, Subdivide Edges, Iso Edge Direction Filter
{% endhint %}

#### Settings

<details>

<summary><strong>Direction Method</strong><br><em>Defines the approach used to determine the direction of an edge.</em></summary>

Specifies how the direction of each edge is calculated.

**Values**:

* **Endpoints Order**: Uses the order in which the endpoints were defined.
* **Edge Dot Attribute**: Uses a custom attribute value to determine direction based on dot product.
* **Endpoints Sort**: Sorts the endpoints using a set of rules before determining direction.

</details>

<details>

<summary><strong>Direction Source Attribute</strong><br><em>Selects an attribute to use when the Direction Method is set to Edge Dot Attribute.</em></summary>

When "Edge Dot Attribute" is selected as the method, this property lets you specify which attribute contains the directional data used for calculating edge orientation.

</details>

<details>

<summary><strong>Direction Choice</strong><br><em>Refines how direction is chosen when using certain methods like Endpoints Sort.</em></summary>

This setting further defines how to interpret the sorting or selection logic when the Direction Method is set to "Endpoints Sort". It determines whether the edge should point from the smallest to greatest value, or vice versa.

**Values**:

* **Smallest To Greatest**: The edge points from the smaller endpoint value to the larger one.
* **Greatest To Smallest**: The edge points from the larger endpoint value to the smaller one.

</details>

#### Common Use Cases

* When building paths through clusters, you might want to ensure all edges flow in a consistent direction, such as from start to end.
* When using directional filters or visualizations, controlling edge orientation helps maintain clarity and predictability.
* In procedural terrain generation, aligning edges with elevation or other data attributes can improve the realism of connections.

#### Notes

The "Endpoints Sort" method requires additional sorting rules to be defined in your graph. If you're using this method, make sure to configure those rules accordingly. The attribute-based direction method is especially useful when working with dynamic data that changes based on external factors like terrain height or object properties.
