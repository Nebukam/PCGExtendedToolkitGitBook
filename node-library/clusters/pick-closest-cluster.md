---
description: 'In editor :: PCGEx | Cluster : Pick Closest'
icon: circle
---

# Pick Closest Cluster

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

\> Pick the clusters closest to input targets.

#### Overview

This node finds and selects the nearest clusters to a set of target points. It's useful when you want to associate each target with its closest cluster, such as assigning regions or zones to points based on proximity. You can configure how the proximity is measured (to vertex or edge) and whether multiple targets can pick the same cluster.

{% hint style="info" %}
Connects to **clusters** input pin and outputs **points** and **edges**.
{% endhint %}

#### How It Works

This node performs a proximity search for each target point to determine which clusters are closest. For each target, it calculates distances to all available clusters using either vertex or edge proximity depending on the selected search mode. Based on the pick mode, it decides whether to allow duplicate cluster selections or to skip already-picked clusters and choose the next best match. The result is a set of selected clusters associated with each target point, which can then be used for further processing or output.

#### Configuration

<details>

<summary><strong>Search Mode</strong><br><em>What type of proximity to look for.</em></summary>

Controls how distance is calculated when comparing targets to clusters.

**Values**:

* **Closest vtx**: Measures distance from the target point to the closest vertex in each cluster.
* **Closest edge**: Measures distance from the target point to the closest edge or endpoint in each cluster.

</details>

<details>

<summary><strong>Pick Mode</strong><br><em>Whether to allow the same pick for multiple targets or not.</em></summary>

Determines whether a cluster can be selected by more than one target.

**Values**:

* **Only Best**: Allows duplicate picks; each target gets the closest available cluster, even if it was already picked.
* **Next Best**: Ensures no cluster is picked twice. If a cluster was already chosen for another target, the next closest available cluster is selected instead.

</details>

<details>

<summary><strong>Action</strong><br><em>Action type.</em></summary>

Defines how to handle the output data after processing.

**Values**:

* **Keep**: Only the selected targets are kept in the output.
* **Omit**: The selected targets are removed from the output.
* **Tag**: All targets are kept, but those matched with a cluster are tagged accordingly.

</details>

<details>

<summary><strong>Target Bounds Expansion</strong><br><em>Expansion factor for target bounds during search.</em></summary>

Controls how much to expand the bounding box of each target when searching for nearby clusters. A value of 10 means the search area is expanded by 10 units in all directions.

</details>

<details>

<summary><strong>Expand Search Outside Target Bounds</strong><br><em>Whether to search outside the bounds of the target.</em></summary>

When enabled, the node searches for clusters even if they are outside the expanded bounds of the target point.

</details>

<details>

<summary><strong>Keep Tag</strong><br><em>Tag name to apply when keeping matched data.</em></summary>

The tag applied to points that match a cluster when using the "Tag" action mode.

</details>

<details>

<summary><strong>Omit Tag</strong><br><em>Tag name to apply when omitting matched data.</em></summary>

The tag applied to points that do not match a cluster when using the "Tag" action mode.

</details>

<details>

<summary><strong>Target Attributes To Tags</strong><br><em>TBD</em></summary>

Controls how attributes from target points are converted into tags in the output.

</details>

<details>

<summary><strong>Target Forwarding</strong><br><em>Which Seed attributes to forward on paths.</em></summary>

Determines which attributes from the target points are forwarded to the resulting edges connecting targets and picked clusters.

</details>

#### Usage Example

Imagine you have a set of locations (targets) and want to assign each to the nearest zone or region (clusters). You can use this node to find the closest cluster for each location. For instance, if you're placing NPCs in a world with different biomes, you could use this node to assign each NPC to the closest biome cluster.

#### Notes

* The node works best when there are more clusters than targets.
* Using "Next Best" pick mode can prevent overloading a single cluster with too many assignments.
* Performance may degrade if the number of clusters is very large.
