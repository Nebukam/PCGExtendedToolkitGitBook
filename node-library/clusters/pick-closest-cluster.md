---
description: 'In editor :: PCGEx | Cluster : Pick Closest'
icon: circle
---

# Pick Closest Cluster

{% hint style="info" %}
### AI-generated page -- to be reviewed

While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Pick the clusters closest to input targets.

### Overview

This node finds the nearest cluster to each target point and allows you to decide how to handle cases where multiple targets might pick the same cluster. It's useful for assigning points or objects to their nearest cluster, such as grouping particles by proximity to cluster centers or distributing assets to nearby clusters.

{% hint style="info" %}
The node works with clusters generated from a previous step in your graph and uses target points to determine which cluster is closest.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input** (Points): Target points that will be used to find the closest clusters.
* **Cluster Input** (Points): Clusters that are searched for proximity to targets.

</details>

<details>

<summary>Outputs</summary>

* **Main Output** (Points): The target points, with cluster data attached or filtered based on your settings.
* **Edge Output** (Edges): Edges connecting each target point to its closest cluster.

</details>

### Properties Overview

Controls how the node searches for and assigns clusters to targets.

***

#### General

What type of proximity to look for and how to handle duplicate picks.

**Search Mode**

_Controls whether the search is based on proximity to a cluster's vertex or to its edges._

* When set to **Closest vtx**, the node measures distance from each target point to the cluster's vertex (center).
* When set to **Closest edge**, the node measures distance from each target point to the closest edge of the cluster, then to the endpoints if needed.

**Pick Mode**

_Controls whether multiple targets can select the same cluster._

* When set to **Only Best**, each target will pick the absolute closest cluster, even if it means multiple targets share the same cluster.
* When set to **Next Best**, if a cluster was already picked by another target, the node will look for the next best candidate for that target.

***

#### Filtering

How to handle the output data after picking clusters.

**Action**

_Determines what happens to the input points after processing._

* When set to **Keep**, only the points that were successfully matched to a cluster are kept in the output.
* When set to **Omit**, points that were matched to a cluster are removed from the output.
* When set to **Tag**, all points are kept, and tags are added to indicate whether they were matched or not.

**Target Bounds Expansion**

_Expands the search area around each target point by this distance._

* Affects how far the node searches for clusters.
* Useful when you want to include nearby clusters even if they're slightly outside the direct proximity of a target.

**Expand Search Outside Target Bounds**

_When enabled, allows searching beyond the bounds defined by the expansion._

* If disabled, the search is limited to within the expanded bounds.
* If enabled, the search can extend beyond those bounds.

**Keep Tag**

_Tag name used when Action is set to Tag and the point is kept._

**Omit Tag**

_Tag name used when Action is set to Tag and the point is omitted._

***

#### Attribute Forwarding

Controls which attributes from the target points are forwarded to the output.

**Target Attributes To Tags**

_Controls how certain attributes on the target points are converted into tags._

* Useful for preserving data like IDs or types in the output.

**Target Forwarding**

_Configures which attributes from the targets are forwarded to the resulting points._

* Enables you to carry over useful metadata from the input points to the output.
