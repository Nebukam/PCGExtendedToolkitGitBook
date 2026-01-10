---
description: 'In editor :: PCGEx | Cluster : Decomposition'
icon: circle
---

# Decomposition

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Compute convex/k decomposition of clusters and write partition as an ID on the nodes.

#### How It Works

This node takes groups of points that have been organized into clusters and breaks each cluster down into smaller, convex shapes. Each point within a cluster gets assigned a unique number that identifies which part of the decomposition it belongs to. This allows you to treat different sections of a cluster separately, such as applying different materials or behaviors to each section.

The process analyzes the shape of each cluster and determines how to split it into convex components. These components are then numbered, and the numbers are stored in an attribute on each point so that other nodes can use this information for further processing.

#### Configuration

<details>

<summary><strong>DecompositionSettings</strong><br><em>Controls how the convex decomposition is performed.</em></summary>

Determines the method used to split clusters into convex parts. Options include:

* **Convex**: Splits each cluster into only convex shapes.
* **K-Decomposition**: Allows for a specified maximum number of partitions per cluster.

</details>

<details>

<summary><strong>CellIDAttributeName</strong><br><em>Name of the attribute storing decomposition IDs.</em></summary>

Specifies the name of the attribute where the decomposition IDs will be saved. This attribute is added to the point data so that downstream operations can access it.

</details>

#### Usage Example

Use this node after organizing points into clusters to separate each cluster into convex sections. For example, if you have scattered points forming irregular shapes, this node helps identify and label each convex part within those shapes. You can then use these labels to apply different materials or effects to each section.

{% hint style="info" %}
Connects to **Cluster** processing nodes.
{% endhint %}
