---
description: 'In editor :: PCGEx | Path : To Clusters'
icon: circle
---

# Path to Clusters

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Merge paths into edge clusters for pathfinding and graph generation.

### Overview

This node takes input paths and converts them into clustered edge representations, which can be used for pathfinding, graph analysis, or further processing. It supports both fusing multiple paths into a single unified graph and generating individual clusters from each path separately. The fused output allows for complex intersection detection between paths, while the non-fused mode preserves separate clusters for each input path.

{% hint style="info" %}
This node is particularly useful when you want to convert linear path data into a format suitable for graph-based algorithms or when you need to analyze how multiple paths interact with each other.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input**: Paths (Point data)
* **Optional Point Filter**: Filters points before processing

</details>

<details>

<summary>Outputs</summary>

* **Output Vertices**: Clustered point data representing the graph nodes
* **Output Edges**: Edge data connecting the clustered vertices
* **Optional Output**: Additional outputs based on settings (e.g., fused path data)

</details>

### Properties Overview

Controls how paths are processed and converted into clusters.

***

#### General Settings

Controls basic behavior of the node.

**Fuse Paths**

_When enabled, multiple input paths are merged into a single unified graph with intersection detection._

* Merges all input paths into one graph
* Detects intersections between paths to create a more complex network
* Useful for creating interconnected pathfinding graphs

**Carry Over Settings**

_Configures how attributes and metadata from the input paths are carried over to the output clusters._

* Controls which properties are preserved during cluster creation
* Helps maintain important data like path IDs or other metadata

***

#### Fusing Settings

Controls how paths are merged when fusion is enabled.

**Point/Point Settings**

_Specifies how points from different paths are considered for merging._

* Defines distance thresholds and methods for detecting point overlaps
* Determines whether to merge points that are close together

**Find Point-Edge Intersections**

_When enabled, detects where points lie on edges of other paths._

* Identifies intersections between points and edges
* Adds new nodes at intersection points to improve graph accuracy

**Point/Edge Settings**

_Configures how point-edge intersections are detected and handled._

* Sets tolerance for detecting if a point lies on an edge
* Controls inclusion criteria for points that intersect with edges

**Find Edge-Edge Intersections**

_When enabled, detects where paths cross each other._

* Identifies crossings between edges of different paths
* Creates new nodes at crossing points to form accurate graph topology

**Edge/Edge Settings**

_Configures how edge-edge intersections are detected and handled._

* Sets tolerance for detecting edge crossings
* Controls how to resolve overlapping or intersecting edges

***

#### Data Blending Settings

Controls how attributes and properties are merged when paths are fused.

**Default Points Blending**

_Specifies how point properties and attributes are combined during fusion._

* Determines the method used to blend values from multiple points at the same location
* Applies to all fused points unless overridden by custom blending settings

**Default Edges Blending**

_Specifies how edge properties and attributes are combined during fusion._

* Determines the method used to blend values from multiple edges that connect to the same nodes
* Applies to all fused edges unless overridden by custom blending settings

**Use Custom Point/Edge Blending**

_When enabled, allows you to define a separate blending method for point-edge intersections._

* Overrides default blending for intersections between points and edges
* Useful when specific handling is needed for these types of intersections

**Point/Edge Blending Settings**

_Configures how attributes are blended specifically for point-edge intersection points._

* Customizes the behavior of attribute merging at point-edge crossings
* Allows fine-tuning of data consistency in complex intersections

**Use Custom Edge/Edge Blending**

_When enabled, allows you to define a separate blending method for edge-edge intersections (crossings)._

* Overrides default blending for intersections between edges
* Useful when specific handling is needed for crossing paths

**Edge/Edge Blending Settings**

_Configures how attributes are blended specifically for edge-edge intersection points._

* Customizes the behavior of attribute merging at edge crossings
* Allows fine-tuning of data consistency in complex graph topologies

***

#### Cluster Output Settings

Controls how the final clustered output is structured and formatted.

**Cluster Output Settings**

_Specifies how the resulting clusters are built, including axis alignment and graph structure._

* Determines which axis to align the cluster along (X, Y, or Z)
* Controls overall structure of the output graph
* Sets up parameters for edge creation and node positioning

### Notes

* Use this node when you want to convert path data into a format suitable for pathfinding or graph analysis.
* Enable fusion if you need to detect intersections between paths; otherwise, keep it disabled to preserve separate clusters.
* Custom blending settings are useful when you have specific requirements for how overlapping points or edges should be merged.
* The output can be directly used in nodes that require clustered edge data, such as pathfinding or graph traversal algorithms.

