---
description: 'In editor :: PCGEx | Pathfinding : Plot Edges'
icon: scrubber
---

# Pathfinding : Plot Edges

{% hint style="info" %}
### AI-generated page -- to be reviewed

While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Extract a single path from edges clusters, going through every seed points in order.

### Overview

This node processes edge-based graph data to create ordered paths that connect seed points within each cluster. It's designed for scenarios where you want to generate a continuous route through a set of points, such as creating roads, rivers, or connectivity paths between locations.

The node takes clusters of edges and finds a path that visits all seed points in the order they were defined, using a specified search algorithm. It can output paths made of vertices, edges, or both, allowing for flexible visualization and further processing.

{% hint style="info" %}
This node works best when your input data is organized into clear clusters with well-defined seed points. The path will follow the structure of your graph edges to connect these seeds.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input (Required)**: Point data representing clusters of edges
* **Edge Input (Optional)**: Additional edge data that can be used for pathfinding

</details>

<details>

<summary>Outputs</summary>

* **Output**: Generated paths connecting seed points in each cluster
* **Unmatched** (Optional): Data that couldn't be matched to any cluster, if matching is enabled

</details>

### Properties Overview

Controls how the node processes and outputs paths.

***

#### General

Controls core path generation behavior.

**Add Seed To Path**

_When enabled, includes the seed point at the beginning of each generated path._

* Adds the starting point of your path to the output
* Useful for creating clear start locations in your routes

**Add Goal To Path**

_When enabled, includes the goal point at the end of each generated path._

* Adds the ending point of your path to the output
* Helps define clear destinations in your routes

**Add Plot Points To Path**

_When enabled, inserts additional points along the path._

* Adds intermediate points between seed and goal locations
* Creates more detailed paths with smoother curves or additional waypoints

**Closed Loop**

_When enabled, creates a closed loop by connecting the last point back to the first._

* Forms a continuous cycle from start to end and back to start
* Useful for creating circular routes like city walls or race tracks

**Path Composition**

_Determines what elements make up the output path._

**Values**:

* **Vtx**: Output only vertex points
* **Edge**: Output only edge segments
* **Vtx & Edges**: Output both vertices and edges

**Use Octree Search**

_When enabled, uses an octree for faster node lookup during pathfinding._

* Can significantly speed up pathfinding in large datasets
* May slow down performance with very small datasets or simple graphs

**Omit Complete Path On Failed Plot**

_When enabled, skips outputting a complete path if the search fails._

* Prevents partial or invalid paths from being generated
* Useful when you need fully valid results only

**Quiet Invalid Plot Warning**

_When enabled, suppresses warnings about invalid plot operations._

* Reduces clutter in the log when processing many plots
* Helpful for large datasets where some plots may naturally fail

**Greedy Queries**

_When enabled, forces sequential query execution for memory conservation._

* Uses less memory but runs slower
* Recommended only when working with limited system resources

***

#### Node Picking

Controls how seed and goal points are selected within each cluster.

**Seed Picking Method**

_Determines how the seed point is chosen from available nodes._

**Values**:

* **Closest vtx**: Selects the closest vertex to the seed point
* **Closest edge**: Selects the closest edge, then endpoint

**Seed Max Distance**

_Maximum distance at which a node can be selected as a seed._

* Set to -1 to ignore distance check
* Use to prevent seeds from being selected too far away

**Goal Picking Method**

_Determines how the goal point is chosen from available nodes._

**Values**:

* **Closest vtx**: Selects the closest vertex to the goal point
* **Closest edge**: Selects the closest edge, then endpoint

**Goal Max Distance**

_Maximum distance at which a node can be selected as a goal._

* Set to -1 to ignore distance check
* Use to prevent goals from being selected too far away

***

#### Search Algorithm

Configures the pathfinding algorithm used to connect seed points.

**Search Algorithm**

_Selects the pathfinding method for connecting seed points._

* Choose from various search algorithms (A\*, Dijkstra, etc.)
* Different algorithms may produce different route qualities and performance characteristics

***

#### Data Matching

Controls how input data is matched to clusters.

**Matching Mode**

_Enables matching of plots to clusters._

**Values**:

* **Disabled**: No matching applied
* **Exact**: Matches exactly by name or tag
* **Fuzzy**: Allows approximate matching

**Cluster Match Mode**

_Determines which cluster component must match the tags._

**Values**:

* **Vtx**: Match vertex components
* **Edge**: Match edge components

**Split Unmatched**

_When enabled, outputs unmatched data to a separate pin._

* Separates data that couldn't be matched into its own output
* Useful for debugging or handling unmatched elements

***

#### Path Output Settings

Controls filtering and validation of generated paths.

**Remove Small Paths**

_When enabled, filters out paths with fewer points than the minimum._

* Prevents very short or incomplete paths from being output
* Set minimum point count to control this behavior

**Minimum Point Count**

_Sets the minimum number of points required for a path to be output._

* Only paths with at least this many points will be generated
* Use to filter out overly short routes

**Remove Large Paths**

_When enabled, filters out paths with more points than the maximum._

* Prevents extremely long or complex paths from being output
* Set maximum point count to control this behavior

**Maximum Point Count**

_Sets the maximum number of points allowed in an output path._

* Paths exceeding this limit will be filtered out
* Use to prevent performance issues with very long routes

***

#### Tagging & Forwarding

Controls which attributes are forwarded from input data to output paths.

**Plot Forwarding**

_Configures which plot data is forwarded to the output paths._

* Selects which attributes from the input plots are preserved in the output
* Can forward multiple attributes at once using name filters

**Vtx Data Forwarding**

_Configures which vertex data is forwarded to the output paths._

* Only active when Path Composition includes vertices
* Preserves vertex attributes along the path

**Edges Data Forwarding**

_Configures which edge data is forwarded to the output paths._

* Only active when Path Composition includes edges
* Preserves edge attributes along the path
