---
description: 'In editor :: PCGEx | Cluster : Decomposition'
icon: circle
---

# Decomposition

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Compute convex/k decomposition of clusters and write partition as an ID on the nodes.

#### Overview

This node takes clusters of points and breaks them down into smaller, convex components. It assigns a unique identifier to each component, which can then be used for further processing or visualization. This is especially useful when working with complex cluster shapes that need to be simplified or analyzed in parts.

It modifies vertex data by adding an attribute that identifies which convex partition each point belongs to. The node works on clusters and expects input from nodes that define these clusters, such as those that group points based on proximity or connectivity.

{% hint style="info" %}
Connects to **Cluster** processing nodes.
{% endhint %}

#### How It Works

This node performs a decomposition of each cluster into convex parts. For every cluster, it calculates the convex hull and then splits it into smaller convex components if needed. Each resulting convex part is assigned a unique ID.

The process starts by collecting all points within a cluster and determining their spatial relationships. Then, it computes the convex hull of the cluster to get its basic shape. If the hull is not already convex (i.e., it has concavities), the node further subdivides it into smaller convex sections.

Each point in the original cluster gets tagged with an ID that corresponds to which convex component it belongs to. These IDs are written as a new attribute on the vertex data, allowing downstream nodes to use this information for filtering or styling.

<details>

<summary>Inputs</summary>

Expects input from **Cluster** processing nodes. It reads vertex and edge data representing clusters of points.

</details>

<details>

<summary>Outputs</summary>

Writes a new attribute named `CellID` (or the name specified in settings) to the vertex data, containing the ID of the convex component each point belongs to.

</details>

#### Configuration

***

**DecompositionSettings**

_Controls how the decomposition is performed._

This setting allows you to configure the parameters for the convex decomposition algorithm. It determines whether the decomposition should be based on a fixed number of parts or adaptively split into convex components.

**Values**:

* **Convex**: Decomposes clusters into convex hulls.
* **K-Decomposition**: Splits clusters into K convex parts, where K is a user-defined parameter.

**CellIDAttributeName**

_Name of the attribute to write the cell ID to._

Controls the name of the output attribute that will store the convex component IDs. This attribute can then be used in downstream nodes for further processing or visualization.

#### Usage Example

Use this node after a clustering operation to break down complex cluster shapes into simpler, convex components. For example, if you have clusters representing buildings or terrain features, you could use this node to split them into manageable convex parts that can be individually processed or rendered differently.

#### Notes

* The decomposition process may increase the number of points in the output compared to the input, as each convex component is assigned a unique ID.
* This node works best on clusters that are reasonably well-defined and not too noisy.
* Consider using this node before applying operations that require convexity, such as certain collision detection or physics simulations.
