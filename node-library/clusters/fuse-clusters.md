---
description: 'In editor :: PCGEx | Cluster : Fuse'
icon: circle
---

# Fuse Clusters

{% hint style="info" %}
### AI-generated page -- to be reviewed

While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Finds Point/Edge and Edge/Edge intersections between all input clusters.

### Overview

This node identifies where points from different clusters intersect with edges, or where edges from different clusters cross each other. It's useful for creating connections or merging data at intersection points in procedural graphs. The results can be used to build networks, generate new geometry, or merge attributes across clusters.

{% hint style="info" %}
This node works on all input clusters simultaneously and finds intersections between them.
{% endhint %}

<details>

<summary>Inputs</summary>

* Point data (clusters)
* Edge data (clusters)

</details>

<details>

<summary>Outputs</summary>

* Merged point data with fused points
* Edge data representing intersections
* Optional graph output for visualizing connections

</details>

### Properties Overview

Controls how intersections are detected and how the resulting data is merged.

***

#### Intersection Settings

Defines which types of intersections to look for and their parameters.

**Find Point/Point Intersections**

_When enabled, the node looks for points from different clusters that are located at the same position._

* Enables detection of overlapping points across clusters

**Point/Point Settings**

_Settings for detecting point-to-point intersections._

* Controls how close points must be to be considered intersecting
* Supports component-wise tolerance (manhattan-style)

**Find Point-Edge Intersections**

_When enabled, the node looks for points that lie on edges from other clusters._

* Enables detection of point-on-edge intersections

**Point/Edge Settings**

_Settings for detecting point-to-edge intersections._

* Controls how close a point must be to an edge to be considered intersecting
* Supports component-wise tolerance (manhattan-style)

**Find Edge-Edge Intersections**

_When enabled, the node looks for edges that cross each other across different clusters._

* Enables detection of edge-to-edge crossings

**Edge/Edge Settings**

_Settings for detecting edge-to-edge intersections._

* Controls how close edges must be to be considered crossing
* Supports component-wise tolerance (manhattan-style)

***

#### Data Blending Settings

Controls how attributes and properties are merged when points or edges are fused.

**Default Points Blending**

_How to merge point properties and attributes when points from different clusters are fused._

* **None**: Keep original values
* **Average**: Average all values
* **Weight**: Blend based on distance
* **Min/Max**: Component-wise minimum or maximum
* **Copy (Target)**: Use the second value
* **Sum**: Add all values together
* **Weighted Sum**: Sum with weights applied
* **Lerp**: Linear interpolation using weight
* **Subtract**: Subtract values
* **Unsigned Min/Max**: Component-wise min/max on unsigned values
* **Absolute Min/Max**: Component-wise minimum or maximum of absolute values

**Default Edges Blending**

_How to merge edge properties and attributes when edges from different clusters are fused._

* Same blending options as points

**Use Custom Point/Edge Blending**

_When enabled, use custom blending settings for Point/Edge intersections._

* Overrides default point blending settings for this specific intersection type

**Custom Point/Edge Settings**

_Custom blending settings for Point/Edge intersections._

* Same blending options as points

**Use Custom Edge/Edge Blending**

_When enabled, use custom blending settings for Edge/Edge intersections._

* Overrides default edge blending settings for this specific intersection type

**Custom Edge/Edge Settings**

_Custom blending settings for Edge/Edge intersections._

* Same blending options as points

***

#### Meta Filters

Controls which attributes are carried over from the original clusters to the fused results.

**Carry Over Settings - Vtx**

_Settings for which point attributes are copied during fusion._

* Selects which attributes from input points are preserved in output points

**Carry Over Settings - Edges**

_Settings for which edge attributes are copied during fusion._

* Selects which attributes from input edges are preserved in output edges

***

#### Cluster Output Settings

Controls how the resulting graph is structured and output.

**Graph Builder Details**

_Settings for building a graph from the fused clusters._

* Determines how to construct the output graph (node/edge connections)
* Controls whether to generate new points or use existing ones
* Defines how to merge attributes during graph construction
