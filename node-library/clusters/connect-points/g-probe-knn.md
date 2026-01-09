---
icon: circle-dashed
---

# G-Probe : KNN

{% hint style="warning" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Creates a global probe that finds K-nearest neighbors for each point in the input data.

### Overview

This factory generates a probe operation that identifies the K closest points to each input point, based on spatial distance. It's used to create connections or relationships between nearby points in your procedural graph.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes like "Connect Points" or "Cluster Points"
{% endhint %}

### How It Works

The probe analyzes all input points and for each point, finds the K nearest neighbors based on spatial distance. The result is a set of connections between points that can be used by downstream nodes to create edges, clusters, or other relationships.

When **Mutual** mode is enabled, connections are only created if both points consider each other as neighbors (bidirectional). When **Default** mode is used, each point creates connections to its K nearest neighbors regardless of whether the reverse relationship exists.

### Configuration

***

#### General

**K**

_Controls how many neighbors to find for each point._

Set this value to determine how many closest points will be considered for each input point. For example, if set to 3, each point will connect to its 3 nearest neighbors.

**Mode**

_Determines whether connections are mutual or unidirectional._

* **Default**: Each point connects to its K nearest neighbors without checking if the reverse relationship exists.
* **Mutual**: Only creates connections when both points consider each other as neighbors. This ensures bidirectional relationships.

### Usage Example

Use this factory with a "Connect Points" node to create edges between nearby points. Set K to 5 to connect each point to its 5 nearest neighbors, then use the resulting connections to generate lines or meshes. With Mutual mode enabled, you'll get symmetrical connections where both points in a pair consider each other as neighbors.

### Notes

* This probe is global and processes all input points together
* Higher K values create denser networks with more connections per point
* Mutual mode creates more selective but potentially sparser connections
* The probe works best with spatially distributed input data for meaningful neighbor relationships

### Inputs

* **Points**: Input point data to analyze for neighbor relationships

### Outputs

* **Probe**: Generated probe data that can be used by downstream nodes to create connections or relationships between points
