---
description: 'In editor :: PCGEx | Cluster : Simplify'
icon: circle
---

# Simplify

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Simplify connections by operating on isolated chains of nodes (only two neighbors).

### Overview

This node simplifies graph structures by removing intermediate nodes from chains where each node has exactly two neighbors. It's useful for cleaning up overly complex networks, reducing visual clutter, or preparing data for downstream processing that benefits from simpler topologies.

The node works by identifying "chains" of connected nodes and collapsing them into direct connections between endpoints. This is particularly effective in scenarios like road networks, skeletal structures, or any graph where intermediate points are redundant.

{% hint style="info" %}
This node only operates on chains where each node has exactly two neighbors. It does not modify nodes with more than two connections or isolated nodes.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Cluster Input** (Required): Point data representing the graph's nodes
* **Edge Input** (Required): Point data representing edges between nodes

</details>

<details>

<summary>Outputs</summary>

* **Cluster Output**: Simplified point data with reduced node count
* **Edge Output**: Simplified edge data reflecting the new connections

</details>

### Properties Overview

Controls how the simplification process behaves and what data is carried over.

***

#### General Settings

Controls basic behavior of the simplification operation.

**Operate On Leaves Only**

_When enabled, only check for dead ends._

* Only processes chains that end in nodes with no neighbors (leaves)
* Useful for preserving certain structural elements while simplifying others

**Edge Filter Role**

_Define the behavior of connected edge filters, if any_

**Values**:

* **Preserve**: Preserve endpoints of edges that pass the filters
* **Collapse**: Collapse endpoints of edges that pass the filters

**Merge Above Angular Threshold**

_If enabled, uses an angular threshold below which nodes are merged._

* When enabled, checks the angle between consecutive segments in a chain
* If the angle is below the specified threshold, the middle node is removed and the segments are merged
* Useful for smoothing curves or removing sharp turns that don't contribute to structure

**Angular Threshold**

_If enabled, uses an angular threshold below which nodes are merged._

* Value in degrees between 0 and 180
* Smaller values mean more aggressive simplification
* Example: Setting to 10° will remove nodes where the angle between connected segments is less than 10°

**Invert Angular Threshold**

_Removes hard angles instead of collinear ones._

* When enabled, removes nodes that create sharp angles rather than straight lines
* Useful for preserving angular features while simplifying straight sections

**Fuse Collocated**

_If enabled, will consider collocated binary nodes for collocation and remove them as part of the simplification._

* When enabled, checks if nodes are located at the same position
* If they are within the specified tolerance, they are merged into a single node
* Useful for cleaning up overlapping points in generated geometry

**Fuse Distance**

_Distance used to consider point to be overlapping._

* Only active when "Fuse Collocated" is enabled
* Value in world units (default 0.001)
* Points closer than this distance are considered overlapping and merged

**Prune Leaves**

_If enabled, prune dead ends._

* Removes nodes that have no neighbors (leaves) from the graph
* Useful for cleaning up terminal points that don't contribute to structure

***

#### Data Blending Settings

Controls how attributes are handled when nodes are collapsed.

**Edge Blending Details**

_Defines how fused point properties and attributes are merged together for Edges._

* Controls how data is combined when edges are created from simplified chains
* Example: If two edges had different "Width" values, this setting determines whether to average them or use one value

**Carry Over Settings**

_Meta filter settings for edge data._

* Determines which attributes are carried over from the original edges to the simplified ones
* Useful for preserving important metadata like material types or connection weights

**Edge Union Data**

_Controls how union metadata is written for edge data._

* Allows you to track which original points were merged together
* Useful for debugging or maintaining references back to source data

***

#### Cluster Output Settings

Controls the output format and structure of the simplified graph.

**Graph Builder Details**

_Graph & Edges output properties_

* Defines how the final graph is constructed
* Controls edge creation, node positioning, and overall topology of the output
