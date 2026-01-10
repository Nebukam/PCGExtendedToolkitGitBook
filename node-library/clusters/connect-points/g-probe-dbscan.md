---
icon: circle-dashed
---

# G-Probe : DBSCAN

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Defines density-based connectivity between points using a DBSCAN-style algorithm.

#### How It Works

This subnode creates connections between points based on how densely they are grouped together in space. It mimics the behavior of the DBSCAN clustering algorithm by identifying points that have enough nearby neighbors to be considered part of a dense region, and then linking those points together.

The process works in two main steps:

1. **Identifying Dense Regions**: For each point, it counts how many other points fall within a certain distance (the search radius). If this number meets or exceeds the minimum required count (`MinPoints`), that point is marked as a core point — meaning it's part of a dense cluster.
2. **Connecting Points**: Core points are connected to other core points nearby. Border points — those that aren't core but are close to one — can be connected in different ways depending on settings:
   * If enabled, border points connect only to the nearest core point.
   * If disabled, border points connect to all core points reachable through a chain of connections from other core points.

This method produces natural-looking clusters and networks that reflect real-world density patterns rather than simple distance thresholds.

#### Configuration

<details>

<summary><strong>MinPoints</strong><br><em>Minimum number of neighbors within the search radius for a point to be considered a core point.</em></summary>

Controls how many nearby points must exist for a point to be treated as part of a dense cluster. A higher value means fewer, more tightly packed clusters.

**Values**: Integer, minimum 1

</details>

<details>

<summary><strong>bCoreToCoreOnly</strong><br><em>If true, only connects core points to each other.</em></summary>

When enabled, core points are only linked to other core points. When disabled, core points may also connect to border points that are near them.

</details>

<details>

<summary><strong>bBorderToNearestCoreOnly</strong><br><em>If true, connects border points to their nearest core point only. If false, connects to all reachable core points.</em></summary>

When enabled, border points link directly to the closest core point. When disabled, they connect to all core points that can be reached through a series of connections from other core points.

</details>

#### Usage Example

Use this subnode in graph-building nodes like **Create Graph** or **Build Graph** to define how points should connect based on density. For example:

* Set `MinPoints` to 5 to require at least 5 neighbors for a point to be considered part of a dense cluster.
* Enable `bCoreToCoreOnly` to only connect core points to each other, forming a skeleton of dense regions.
* Enable `bBorderToNearestCoreOnly` to ensure border points link directly to the nearest core point, creating a star-like structure around clusters.

This is ideal for generating natural-looking networks such as road systems, foliage clustering, or terrain connectivity where density determines spatial relationships.

#### Notes

* This subnode uses an octree structure for fast neighbor lookups, making it efficient even with large datasets.
* The `MinPoints` setting directly affects how tightly clustered the resulting connections are. Lower values create more sparse connections, while higher values lead to denser clusters.
* Consider using this with a **Search Radius** attribute or similar to control the spatial extent of the density check.
