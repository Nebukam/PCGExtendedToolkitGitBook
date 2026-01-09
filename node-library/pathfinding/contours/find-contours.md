---
description: 'In editor :: PCGEx | Pathfinding : Find Cells'
icon: circle
---

# Find Cells

{% hint style="warning" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Attempts to find a closed cell of connected edges around seed points.

### Overview

This node searches for closed polygonal cells formed by connected edges in your graph data, starting from seed points. It's useful for extracting meaningful shapes or regions from procedural graphs, such as finding the boundaries of areas, rooms, or terrain features.

It works by taking a set of seed points and attempting to trace a path around them using connected edges. The resulting paths form closed cells that can be output as new point collections. You can filter the results based on whether the generated cells are convex or concave.

{% hint style="info" %}
The node requires valid edge data in your input to function properly. Make sure your graph has connected edges for meaningful results.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input** (Point): Seed points from which to start the cell search
* **Edges Input** (Edge): Graph edges that define connectivity between points

</details>

<details>

<summary>Outputs</summary>

* **Main Output** (Point): Generated cells as point collections, each representing a closed path
* **SeedGenSuccess** (Point): Filtered set of seed points that successfully generated a valid cell
* **SeedGenFailed** (Point): Seed points that failed to generate a valid cell

</details>

### Properties Overview

Controls how the node searches for cells and formats the output.

***

#### Cell Search Settings

Configures how the node finds and processes closed paths from seed points.

**Seed Picking**

_Drives how a seed selects a node._

* Determines whether the seed point itself or the closest node in the graph is used as the starting point for pathfinding
* When using "Closest edge", it will search for the nearest edge to the seed point and use that edge's endpoints

**Use Octree Search**

_Whether or not to search for closest node using an octree._

* When enabled, uses spatial acceleration for faster seed-to-node lookups
* Can improve performance on large datasets but may slow down smaller ones

***

#### Cell Constraints

Sets rules for what constitutes a valid cell.

**Max Path Length**

_Maximum number of edges in a path._

* Limits how far the search can extend from the seed point
* Set to 0 or less to disable this constraint

**Min Path Length**

_Minimum number of edges in a path._

* Ensures that only paths with at least this many edges are considered valid
* Useful for filtering out very small or degenerate cells

**Max Angle Deviation**

_Maximum angle deviation allowed during path building._

* Controls how sharp turns are allowed in the generated cell boundaries
* Lower values create smoother, more rounded shapes

**Shape Type Output**

_Which types of cells to output._

**Values**:

* **Convex & Concave**: Output both convex and concave cells
* **Convex Only**: Output only convex cells
* **Concave Only**: Output only concave cells

***

#### Cell Artifacts

Controls what additional data is attached to the generated cells.

**Output Orientation**

_Direction in which cell points are ordered._

**Values**:

* **Clockwise**: Points are ordered in a clockwise direction
* **Counter Clockwise**: Points are ordered in a counter-clockwise direction

**Output Properties**

_Additional properties to compute and output for each cell._

**Values**:

* **None**: No extra properties
* **Density**: Compute how densely the edges are packed
* **Steepness**: Measure of how steep the path is
* **R Channel**: Red channel color value
* **G Channel**: Green channel color value
* **B Channel**: Blue channel color value
* **A Channel**: Alpha channel color value

***

#### Seed Mutation

Controls how seed points are adjusted when generating cells.

**Seed Location**

_Where to place the seed point within the generated cell._

**Values**:

* **Original**: Keep the seed at its original position
* **Centroid**: Place the seed at the geometric center of the path
* **Path bounds center**: Place the seed at the center of the path's bounding box
* **First Node**: Place the seed on the first node of the path

**Seed Scale**

_Scale factor applied to the seed point._

* Multiplies the seed's scale by this value when placing it within the cell
* Useful for adjusting how the seed appears in relation to the generated shape

***

#### Forwarding Settings

Controls which attributes from the input points are forwarded to the output.

**Seed Attributes To Path Tags**

_Forward attributes from seeds as tags on paths._

* When enabled, selected attributes from seed points are added as tags to the resulting cell paths

**Seed Forwarding**

_Forward attributes from seeds to paths._

* When enabled, selected attributes from seed points are copied to the generated cell point data
* Can preserve original point properties like color, height, or other metadata
