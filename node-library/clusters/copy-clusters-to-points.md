---
description: 'In editor :: PCGEx | Cluster : Copy to Points'
icon: circle
---

# Copy Clusters to Points

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Create copies of input clusters onto target points.

### Overview

This node allows you to duplicate existing clusters and place them onto a set of target points. It's useful for scenarios where you want to replicate cluster structures at different locations, such as placing multiple instances of a building layout across a terrain or duplicating network topologies at various positions.

The node operates by taking input clusters (which can be thought of as structured point sets) and creating copies of them at each target point. Each copy maintains the original cluster's structure but is positioned according to the target point's location.

{% hint style="info" %}
This node does not sanitize input data, so ensure your clusters and target points are properly formatted before using this node.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Clusters**: Input clusters to be copied
* **Points**: Target points where copies will be placed

</details>

<details>

<summary>Outputs</summary>

* **Clusters**: Output clusters that are copies of the input clusters, positioned at target points
* **Edges**: Optional edge data from the original clusters (if enabled)

</details>

### Properties Overview

Controls how the cluster copying process is performed.

***

#### General

Controls core behavior for copying clusters to points.

**Data Matching**

_Controls how input clusters are matched to target points._

* Determines which input cluster gets copied to which target point
* When disabled, clusters are distributed in order to target points
* When enabled, allows you to define custom matching rules based on attributes or tags

**Values**:

* **Default**: Uses default matching behavior
* **Cluster**: Matches based on cluster properties
* **Sampling**: Matches using sampling methods

**Transform Details**

_Configures how copied clusters are transformed._

* Controls position, rotation, and scale of each copy
* Allows you to apply transformations relative to the target point
* Can be used to offset copies or align them with point orientation

#### Tagging & Forwarding

Controls attribute handling for copied clusters.

**Targets Attributes To Cluster Tags**

_Controls how attributes from target points are converted to cluster tags._

* When enabled, attributes from the target point data can be used to tag the copied clusters
* Useful for adding metadata or categorization based on point properties
* Applies to both vertex and edge data of the copied clusters

**Targets Forwarding**

_Configures which attributes from the target points are forwarded to the copied clusters._

* When enabled, selected attributes from the target points are copied to the output clusters
* Allows you to preserve information from the target point data in the cluster structure
* Can be used to maintain point-specific data like height, color, or material properties

### Notes

* This node does not validate or sanitize input data, so ensure your clusters and points are properly formatted
* When using matching, make sure there's a one-to-one correspondence between clusters and target points or define appropriate matching rules
* The output clusters will maintain the original structure of the input clusters but will be positioned at the target point locations
* For performance reasons, consider using fewer copies when possible, as each copy increases processing time
* This node is particularly useful for creating procedural layouts where you want to replicate a base pattern across multiple locations
