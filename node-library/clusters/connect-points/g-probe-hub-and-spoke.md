---
icon: circle-dashed
---

# G-Probe : Hub & Spoke

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Creates hierarchical hub-and-spoke network topology by defining how points connect to hubs and spokes.

#### How It Works

This subnode builds a structured network where points are organized into a hub-and-spoke pattern. It first identifies central points called "hubs" based on a chosen method, then connects other points ("spokes") to these hubs. Each spoke can connect to just the nearest hub or to all hubs within a certain distance, depending on settings.

The selection of hubs depends on the chosen method:

* **By Local Density**: Areas with many points become hubs.
* **By Attribute**: Points with high values of a specific attribute are selected as hubs.
* **By Centrality**: Points near the center of local groups become hubs.
* **K-Means Centroids**: The system groups points into clusters and uses cluster centers as hubs.

Once hubs are chosen, the subnode connects spokes to them. If "Nearest Hub Only" is enabled, each spoke links only to its closest hub. Otherwise, spokes connect to all hubs within a defined radius. Optionally, it can also link hubs together if that setting is enabled.

#### Configuration

<details>

<summary><strong>Hub Selection Mode</strong><br><em>How hubs are selected from the point cloud.</em></summary>

Controls how the system identifies which points become hubs.

**Values**:

* **By Local Density**: Points in dense regions become hubs.
* **By Attribute**: Points with highest attribute values become hubs.
* **By Centrality**: Points closest to centroid of local region become hubs.
* **K-Means Centroids**: Run k-means and use cluster centers as hubs.

</details>

<details>

<summary><strong>Number of Hubs</strong><br><em>How many hubs to create (for KMeans mode, this is K).</em></summary>

Determines how many hub points will be selected. In K-Means mode, this sets the number of clusters.

</details>

<details>

<summary><strong>Hub Attribute</strong><br><em>Attribute for hub selection (for ByAttribute mode).</em></summary>

The attribute used to rank and select hubs when "By Attribute" is chosen as the selection mode.

</details>

<details>

<summary><strong>Connect Hubs</strong><br><em>If true, also connect hubs to each other.</em></summary>

When enabled, creates connections between hubs themselves, forming a network of hub-to-hub links in addition to spoke-to-hub links.

</details>

<details>

<summary><strong>Nearest Hub Only</strong><br><em>If true, each spoke connects only to nearest hub. If false, connects to all hubs within radius.</em></summary>

Controls how spokes connect to hubs:

* When enabled: Each spoke connects to only its closest hub.
* When disabled: Each spoke connects to all hubs within a specified radius.

</details>

<details>

<summary><strong>K-Means Iterations</strong><br><em>K-Means iterations (for KMeansCentroids mode).</em></summary>

The number of iterations used in the k-means clustering algorithm when "K-Means Centroids" is selected as the hub selection mode.

</details>

#### Usage Example

Create a point cloud representing a city layout. Use this subnode to define hubs as the most densely populated areas (By Local Density). Configure it so that each spoke connects only to its nearest hub ("Nearest Hub Only" enabled) and that hubs are also connected to each other ("Connect Hubs" enabled). This results in a network where neighborhoods connect to nearby city centers, and city centers are linked together.

#### Notes

* The "By Attribute" mode requires an attribute to be specified.
* K-Means mode is computationally more expensive but can create more evenly distributed hubs.
* Enabling "Connect Hubs" increases the number of connections in the output graph.
