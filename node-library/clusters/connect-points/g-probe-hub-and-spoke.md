---
icon: circle-dashed
---

# G-Probe : Hub & Spoke

{% hint style="info" %}
### AI-generated page -- to be reviewed

While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Creates a hierarchical hub-and-spoke network topology by identifying key points (hubs) and connecting other points (spokes) to them.

### Overview

This probe factory defines how to build a network where:

* Some points are selected as "hubs"
* Other points are connected to these hubs
* Connections form a tree-like structure with a central hub(s)

It's designed for creating spatial networks like city road systems, communication networks, or data structures where certain key nodes connect to many others.

{% hint style="info" %}
Connects to Probe pins on graph-building nodes such as **Connect Points** or **Graph Builder**
{% endhint %}

### How It Works

This factory builds a network topology by:

1. Identifying hub points based on the selected selection method
2. For each spoke point, finding its connection(s) to hubs
3. Creating directed edges from spokes to hubs (and optionally between hubs)

The probe logic determines which points connect to which other points based on spatial relationships and the chosen hub selection criteria.

### Inputs

* **Points**: Input point data to process
* **Attributes**: Optional attribute data for hub selection

### Outputs

* **Probe**: Output probe data used by graph-building nodes

### Configuration

***

#### General

**Hub Selection Mode**

_Controls how hubs are selected from the input point data._

**Values**:

* **By Local Density**: Points in dense regions become hubs
* **By Attribute**: Points with highest attribute values become hubs
* **By Centrality**: Points closest to centroid of local region become hubs
* **K-Means Centroids**: Run k-means clustering and use cluster centers as hubs

**Number of Hubs**

_Number of hub points to select._

Default: 10\
Minimum: 1

**Hub Attribute**

_Attribute used for hub selection when mode is "By Attribute"._

Default: `$Density`

**Connect Hubs**

_When enabled, hubs are also connected to each other._

This creates a more complex network structure where hubs can be linked directly.

**Nearest Hub Only**

_Controls how spokes connect to hubs._

When enabled, each spoke connects only to its nearest hub. When disabled, spokes connect to all hubs within the specified radius.

**K-Means Iterations**

_Number of iterations for k-means clustering when mode is "K-Means Centroids"._

Default: 10\
Minimum: 1\
Maximum: 100

### Usage Example

Create a point cloud representing a city's street intersections. Use this probe to:

1. Select 5 dense areas as hubs (like major intersections or districts)
2. Connect all other points to their nearest hub
3. Enable "Connect Hubs" to also link the hubs together

This results in a network where each street connects to a central hub, forming a hierarchical structure.

### Notes

* The probe works with any point data input and creates connections based on spatial proximity
* When using "By Attribute", make sure the selected attribute exists on your points
* For large datasets, "By Local Density" mode is typically faster than "K-Means Centroids"
* Hubs are always connected to spokes in a one-way relationship (spokes → hubs)
* The "Connect Hubs" option creates bidirectional connections between hubs when enabled
