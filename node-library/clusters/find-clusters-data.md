---
description: 'In editor :: PCGEx | Find Clusters'
icon: circle
---

# Find Clusters

{% hint style="warning" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Find vtx/edge pairs inside a soup of data collections.

### Overview

This node identifies and groups related vertex and edge data from multiple input collections, creating clusters based on spatial or topological relationships. It's particularly useful for organizing scattered point and edge data into meaningful groups that can be processed further in your procedural pipeline.

The node searches through all provided inputs to find connections between points and edges, then outputs either the vertices or edges that form these clusters. This is especially helpful when working with complex networks or multi-layered geometry where you need to isolate specific components for additional processing.

{% hint style="info" %}
This node works best when your input data contains both points and edges, as it relies on relationships between them to form clusters.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Default Input** (Multiple): Accepts multiple point collections that may contain vertices and/or edges
* **Point Filter** (Optional): Filters points before processing

</details>

<details>

<summary>Outputs</summary>

* **Default Output**: Points or edges based on the selected search mode
* **Edges** (Optional): Additional output pin for edge data when using "Vtx from Edges" mode
* **Vtx** (Optional): Additional output pin for vertex data when using "Edges from Vtx" mode

</details>

### Properties Overview

Controls how the node searches and groups your input data.

***

#### Search Settings

Configures how the node identifies relationships between points and edges.

**Search Mode**

_Controls which data types are used to find clusters._

* When set to **All**, both vertices and edges from all inputs are considered for clustering
* When set to **Vtx from Edges**, the node searches for vertex data that connects to edges in the input collections
* When set to **Edges from Vtx**, the node searches for edge data that originates from vertices in the input collections

**Values**:

* **All**: All
* **Vtx from Edges**: Vtx from Edges
* **Edges from Vtx**: Edges from Vtx

**Skip Trivial Warnings**

_When enabled, suppresses non-critical warnings about input data mismatches._

* Reduces noise in the log when you're confident about your input setup

**Skip Important Warnings**

_When enabled, suppresses warnings that may affect cluster formation._

* Only disable this if you understand the implications of mismatched inputs

### Notes

* Use this node to organize scattered point and edge data into logical groups before applying further processing
* The "All" search mode is best for general clustering where you want to consider all available data
* When using "Vtx from Edges" or "Edges from Vtx", make sure your inputs contain compatible vertex/edge relationships
* This node can help identify connected components in networks or spatially related groups of geometry
