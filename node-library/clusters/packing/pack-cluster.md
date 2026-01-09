---
description: 'In editor :: PCGEx | Cluster : Pack'
icon: circle
---

# Pack Cluster

{% hint style="info" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Pack each cluster into a single point data object containing both vtx and edges.

### Overview

This node takes clusters of points and edges and combines them into a single point output, where each point represents an entire cluster. The packed point contains all the original vertex and edge data from the cluster, allowing you to process clusters as unified entities while preserving their internal structure.

This is useful when you want to perform operations on entire clusters rather than individual elements, such as applying transformations, generating outputs per-cluster, or preparing data for downstream processing that expects clustered structures.

{% hint style="info" %}
The output point will contain all the vertex and edge attributes from the original cluster. Make sure to manage attribute names carefully to avoid conflicts.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input** (Required): Point data containing clusters
* **Edges Input** (Optional): Edge data associated with the point input

</details>

<details>

<summary>Outputs</summary>

* **Main Output**: Single point per cluster, containing packed vertex and edge data
* **Edges Output** (Optional): Edges from the original input, if enabled

</details>

### Properties Overview

Controls how the clustering data is packed into single output points.

***

#### Packing Settings

Determines how the cluster's vertex and edge data are combined into a single point.

**Carry Over Settings**

_Controls which attributes from the original cluster are carried over to the packed output._

* **Carry Over Mode**: Choose whether to carry over all attributes, or filter them by name.
* **Filter Mode**: Select how to interpret the list of attribute names:
  * **All**: Include all attributes
  * **Exclude**: Discard listed attributes, keep the others
  * **Include**: Keep listed attributes, discard the others
* **Matches**: List of attribute names to include or exclude based on the filter mode.
* **Comma Separated Names**: A simple way to list multiple attribute names separated by commas.

**Output Edge Data**

_When enabled, outputs edge data associated with the cluster._

* **Edge Output Mode**: Determines how edges are handled in the output:
  * **None**: No edge data is output
  * **Copy**: Copy original edge data to the output
  * **Merge**: Merge edge data into a single point

**Cluster Filtering**

_Controls which clusters are processed._

* **Filter Clusters**: Enable filtering of clusters based on certain criteria.
* **Cluster Filter Mode**: Choose how to interpret cluster filters:
  * **All**: Process all clusters
  * **Exclude**: Skip listed clusters, process the others
  * **Include**: Only process listed clusters

**Sorting**

_Controls how points within a cluster are sorted before packing._

* **Sort Points**: Enable sorting of points in each cluster.
* **Sorting Rules**: Define rules to sort points by attribute values.

### Notes

* The packed output point will contain all vertex and edge attributes from the original cluster.
* Use the "Carry Over Settings" to control which attributes are included in the output.
* When using edge data, ensure that the edge input is properly connected to maintain relationships between points.
* This node is particularly useful for operations that require processing clusters as single units, such as generating cluster-based outputs or applying transformations per-cluster.
