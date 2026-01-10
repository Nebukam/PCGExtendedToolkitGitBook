---
icon: share-nodes
---

# Edge Union

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Controls whether to write metadata about edge relationships and attributes during processing.

#### Overview

This configuration block determines if and how edge relationship data is stored as attributes during procedural operations. It's commonly used when working with geometric data that has interconnected edges, such as meshes or networks, where you need to track which edges are part of a larger structure or have been modified during processing.

When enabled, this setting creates an attribute that marks edges as either "sub edges" or not. This is useful for filtering, visualizing, or applying different behaviors to specific subsets of edges in your procedural graph.

{% hint style="info" %}
This configuration appears in nodes like: PCGEx Intersection, PCGEx Simplify Clusters
{% endhint %}

#### Settings

<details>

<summary><strong>bWriteIsSubEdge</strong><br><em>When enabled, the system will write metadata about whether edges are sub-edges.</em></summary>

When enabled, this setting tells the system to create an attribute that marks each edge as either a "sub edge" or not. This is useful when you're working with hierarchical or clustered geometry where some edges are part of a larger structure and others are standalone.

This attribute can then be used in downstream nodes for filtering, visualization, or applying different processing rules based on the edge's relationship status.

</details>

<details>

<summary><strong>IsSubEdgeAttributeName</strong><br><em>Name of the attribute that stores whether an edge is a sub-edge.</em></summary>

This setting lets you specify what name the attribute will have when it's created. By default, it's named "SubEdge", but you can change this to match your workflow or avoid naming conflicts.

The attribute will be of type boolean and will store either true or false for each edge, indicating whether it's classified as a sub-edge in the current processing context.

</details>

#### Common Use Cases

* **Mesh Processing**: When simplifying or modifying mesh edges, you might want to track which edges were derived from others to preserve topology information.
* **Network Analysis**: In graph-based generation, this can help identify edges that are part of larger connections or paths.
* **Visual Feedback**: Using the attribute in visualization nodes to highlight specific edge relationships.

#### Notes

The attribute created by this configuration will only exist if the "bWriteIsSubEdge" option is enabled. If you're using multiple nodes that write similar attributes, make sure to use unique names to avoid overwriting data. The attribute value is typically set during the processing phase and can be used in subsequent operations to make decisions based on edge relationships.
