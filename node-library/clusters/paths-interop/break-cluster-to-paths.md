---
description: 'In editor :: PCGEx | Cluster : Break to Paths'
icon: circle
---

# Break Cluster to Paths

{% hint style="info" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Create individual paths from continuous edge chains.

### Overview

This node breaks clusters of connected edges into individual paths, allowing you to process or visualize each continuous chain separately. It's particularly useful for creating roads, rivers, or any linear feature that follows a network of connected segments. You can control how the node handles leaf nodes (nodes with only one connection) and define the order in which points are sequenced within each path.

{% hint style="info" %}
This node operates on clusters, so it requires input data that has been processed through a clustering operation first.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input** (Point): Points representing nodes in the graph
* **Edges Input** (Edge): Edges connecting the points
* **Filters** (Point, optional): Filters to identify break points

</details>

<details>

<summary>Outputs</summary>

* **Paths Output** (Path): Individual paths created from continuous edge chains
* **Edges Output** (Edge): Original edges, optionally filtered or reorganized

</details>

### Properties Overview

Controls how the node processes clusters and creates paths.

***

#### General Settings

Controls the core behavior of path creation.

**Leaves Handling**

_Controls how leaf nodes are treated in path creation._

* Leaf nodes are nodes with only one connection
* **Include**: Include leaf nodes in paths (default)
* **Exclude**: Exclude leaf nodes from paths
* **Only**: Only process leaf nodes as individual paths

**Operation Target**

_Determines whether to work on entire edge chains or individual edges._

* **Paths**: Operate on continuous edge chains that form paths with no crossings (e.g., nodes with only two neighbors)
* **Edges**: Operate on each edge individually (very expensive)

**Direction Settings**

_Defines the direction in which points will be ordered to form the final paths._

* Controls how the node traverses connected edges to build paths
* Can be used to ensure consistent path orientation

**Winding**

_Enforce a winding order for paths._

* **Unchanged**: No change to original winding
* **Clockwise**: Force all paths to have clockwise winding
* **CounterClockwise**: Force all paths to have counter-clockwise winding

**Wind Only Closed Loops**

_Whether to apply winding on closed loops only or all paths._

* When enabled, winding is applied only to closed loops (paths that start and end at the same node)
* When disabled, winding is applied to all paths regardless of closure

**Projection Details**

_Projection settings. Winding is computed on a 2D plane._

* Defines how to project 3D points onto a 2D plane for winding calculations
* Only relevant when winding is not set to "Unchanged"

**Min Point Count**

_Do not output paths that have less points than this value._

* Paths with fewer points than this threshold are discarded
* Default is 2, meaning only paths with at least 2 points are output

**Omit Above Point Count**

_Enable limiting maximum point count for output paths._

* When enabled, paths exceeding the Max Point Count are omitted from output

**Max Point Count**

_Do not output paths that have more points than this value._

* Only used when "Omit Above Point Count" is enabled
* Default is 500, meaning paths with more than 500 points are discarded

### Notes

* This node works best on clustered data where edges form continuous chains
* For complex networks, consider using "Include Leaves" to ensure all nodes are processed
* When working with closed loops (like circular roads), enabling "Wind Only Closed Loops" can help maintain consistent winding
* Use the Min/Max Point Count settings to filter out very short or extremely long paths that might not be useful for your use case
* The Direction Settings allow you to control how paths are ordered, which is helpful when you need consistent orientation across multiple clusters
