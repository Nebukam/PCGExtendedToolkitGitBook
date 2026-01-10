---
description: 'In editor :: PCGEx | Cluster : Flood Fill'
icon: scrubber
---

# Flood Fill

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Diffuses vertex attributes onto their neighbors in a cluster.

#### How It Works

This node spreads data values from selected starting points, called seeds, throughout a group of connected vertices. Each seed begins a chain reaction where the data gradually moves to neighboring vertices. The process continues until all reachable vertices have been updated or a stopping condition is met.

The way this diffusion works depends on whether you choose parallel or sequential processing. In parallel mode, all current diffusions move forward at the same time before advancing to the next step. In sequential mode, each vertex is fully processed one at a time, moving from seed to neighbor in order.

You can also control how the seeds are selected and how the data spreads through settings like flow rules and search methods.

{% hint style="info" %}
Connects to **Clusters** processing pins.
{% endhint %}

#### Configuration

<details>

<summary><strong>Seed Picking</strong><br><em>Drive how a seed point selects a node.</em></summary>

Controls how seed points are selected within each cluster. Uses a node selection method to determine which vertices act as starting points for diffusion.

</details>

<details>

<summary><strong>Ordering</strong><br><em>Defines the sorting used for the vtx.</em></summary>

Determines how vertices are ordered during the diffusion process. Options include using index or applying sorting rules.

**Values**:

* **Index**: Uses point index to drive diffusion order.
* **Sorting**: Use sorting rules to drive diffusion order.

</details>

<details>

<summary><strong>Sort Direction</strong><br><em>Sort direction.</em></summary>

Controls whether the vertex ordering is ascending or descending.

**Values**:

* **Ascending**: Sorts in ascending order.
* **Descending**: Sorts in descending order.

</details>

<details>

<summary><strong>Processing</strong><br><em>Defines how each vtx is diffused.</em></summary>

Controls whether the diffusion process runs in parallel or sequentially.

**Values**:

* **Parallel**: Diffuse each vertex once before moving to the next iteration.
* **Sequential**: Diffuse each vertex until it stops before moving to the next one, and so on.

</details>

<details>

<summary><strong>Diffusion</strong><br><em>Diffusion settings.</em></summary>

Settings that define how the diffusion spreads from seed points. Includes parameters for controlling flow behavior.

</details>

<details>

<summary><strong>bUseOctreeSearch</strong><br><em>Whether or not to search for closest node using an octree.</em></summary>

When enabled, uses an octree structure to optimize neighbor searches during diffusion. Can improve performance on large datasets but may slow down smaller ones.

</details>

#### Usage Example

A terrain generation setup where you want to spread elevation data from specific seed points across connected regions. You could use this node to gradually blend height values from a few key points into surrounding areas, creating natural-looking transitions.

#### Notes

The diffusion process can be computationally intensive depending on the number of vertices and edges in each cluster. Consider using sequential processing for more predictable results or parallel for faster execution. Path outputs are useful for visualizing how data spreads through a graph.
