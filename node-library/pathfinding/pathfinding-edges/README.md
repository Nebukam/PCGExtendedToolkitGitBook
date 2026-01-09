---
description: 'In editor :: PCGEx | Pathfinding : Edges'
icon: scrubber
---

# Pathfinding : Edges

{% hint style="warning" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Extract paths from edges clusters.

### Overview

This node finds and outputs paths between seed and goal points within edge-based clusters, such as road networks or graph structures. It's designed for scenarios where you want to generate routes through connected edges, like finding the shortest path between two locations in a city grid or navigating a network of connections.

It operates on clusters of edges (like roads or links) and uses a pathfinding algorithm to determine the route from a seed point to a goal point. The resulting paths can be made up of either vertices (points), edges, or both, depending on your configuration.

{% hint style="info" %}
This node works best with pre-clustered edge data, such as roads or network connections. It does not perform clustering itself.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input** (Default): Clustered edges to process
* **Seeds** (Optional): Points used as starting locations for pathfinding
* **Goals** (Optional): Points used as destination locations for pathfinding

</details>

<details>

<summary>Outputs</summary>

* **Paths** (Default): Generated paths from seed to goal points, represented as point collections
* **Edges** (Optional): Original edges that were part of the pathfinding process

</details>

### Properties Overview

Controls how paths are generated and what data is included in the output.

***

#### Node Picking

Configures how seed and goal points are mapped to nodes within clusters.

**Seed Picking Method**

_Controls how a seed point selects a node within a cluster._

* Determines whether the closest edge or vertex is used for pathfinding start
* When set to **Closest vtx**, the path starts at the nearest vertex
* When set to **Closest edge**, the path starts at the nearest edge, then to its endpoint

**Goal Picking Method**

_Controls how a goal point selects a node within a cluster._

* Determines whether the closest edge or vertex is used for pathfinding end
* When set to **Closest vtx**, the path ends at the nearest vertex
* When set to **Closest edge**, the path ends at the nearest edge, then to its endpoint

**Max Distance**

_Maximum distance allowed between a point and a node._

* If a point is further than this distance from any node, it will be skipped
* Set to -1 to ignore distance checks (default)

***

#### Path Composition

Controls what elements make up the resulting paths.

**Path Composition**

_What are the paths made of._

* **Vtx**: Paths consist only of vertices (points)
* **Edge**: Paths consist only of edges (connections between points)
* **Vtx & Edges**: Paths include both vertices and edges in sequence

***

#### Tagging & Forwarding

Controls how attributes from seed and goal points are transferred to the output paths.

**Seed Attributes To Path Tags**

_Which seed attributes to use as tags on paths._

* Selects attributes from seed points to tag each path with
* Useful for categorizing or identifying paths based on seed properties

**Seed Forwarding**

_Which seed attributes to forward on paths._

* Copies selected attributes from seed points to the output paths
* Enable this to preserve data like names, types, or other metadata from seeds

**Goal Attributes To Path Tags**

_Which goal attributes to use as tags on paths._

* Selects attributes from goal points to tag each path with
* Useful for categorizing or identifying paths based on goal properties

**Goal Forwarding**

_Which goal attributes to forward on paths._

* Copies selected attributes from goal points to the output paths
* Enable this to preserve data like names, types, or other metadata from goals

***

#### Advanced

Additional settings that control path generation and performance.

**Add Seed To Path**

_When enabled, adds the seed point at the beginning of each path._

* Useful for visualizing where paths start
* Adds one extra point to each path

**Add Goal To Path**

_When enabled, adds the goal point at the end of each path._

* Useful for visualizing where paths end
* Adds one extra point to each path

**Search Algorithm**

_Selects the algorithm used to find paths between nodes._

* Choose from various pathfinding algorithms (e.g., A\*, Dijkstra)
* Different algorithms may perform better depending on your data structure and requirements

**Goal Picker**

_Configures how goals are selected for pathfinding._

* Determines which goal point is used when multiple goals exist for a seed
* Options include selecting by index, closest point, or other methods

**Path Output Settings**

_Configures filtering of output paths based on length._

* **Remove Small Paths**: Removes paths with fewer points than the minimum threshold
* **Minimum Points**: Minimum number of points required for a path to be output (default: 3)
* **Remove Large Paths**: Removes paths with more points than the maximum threshold
* **Maximum Points**: Maximum number of points allowed in an output path (default: 500)

**Statistics**

_Enables outputting various performance and pathfinding statistics._

* When enabled, outputs additional data about the pathfinding process
* Useful for debugging or optimizing your setup

**Use Octree Search**

_Whether to use octree-based search for finding closest nodes._

* Can significantly speed up node selection in large datasets
* May slow down processing in small datasets due to overhead

**Greedy Queries**

_Controls memory allocation behavior for pathfinding queries._

* When enabled, each query uses its own memory allocations (faster but more memory)
* When disabled, queries share memory allocations (slower but more conservative)
