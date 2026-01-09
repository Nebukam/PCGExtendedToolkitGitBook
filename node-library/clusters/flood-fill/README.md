---
description: 'In editor :: PCGEx | Cluster : Flood Fill'
icon: scrubber
---

# Flood Fill

{% hint style="warning" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

### Overview

This node performs a diffusion process that spreads values from seed points across connected nodes in clusters, similar to how water would spread out from a source point. It's useful for creating organic-looking patterns, propagating data through networks, or simulating influence areas.

The node works by starting from seed points and expanding outward along edges, assigning values to neighboring nodes based on configurable rules. You can control how the diffusion spreads, how it's ordered, and what attributes are written back to the points.

{% hint style="info" %}
This node requires clusters to be defined in your graph. It operates on the connectivity of points within each cluster.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input**: Points that define the cluster structure
* **Edges**: Optional edge data that defines connections between points

</details>

<details>

<summary>Outputs</summary>

* **Output Points**: Modified point data with diffusion attributes
* **Output Edges**: Optional edge output if path information is requested
* **Paths**: Optional path data representing the diffusion paths

</details>

### Properties Overview

Settings to configure how the diffusion process works and what data is written.

***

#### Seeds

Controls how seed points are selected and ordered for diffusion.

**Seed Picking Method**

_Controls how a seed point selects a node within its cluster._

* Uses either the closest vertex or edge to the seed point as the starting node
* Distance-based selection can be limited with MaxDistance

**Ordering**

_Drives how seeds are ordered for processing._

* **Index**: Seeds are processed in their original index order
* **Sorting**: Seeds are sorted using the sorting rules defined below

**Sort Direction**

_Sets the direction of the seed sorting._

* **Ascending**: Smallest values first
* **Descending**: Largest values first

***

#### Diffusion Settings

Controls how the diffusion process behaves.

**Processing Mode**

_Determines how diffusions are processed._

* **Parallel**: Each vertex is diffused once before moving to the next iteration
* **Sequential**: Each vertex is diffused until it stops before moving to the next one

**Max Diffusion Distance**

_Limits how far the diffusion can spread._

* Set to 0 or negative to allow unlimited spread
* Positive values cap the total distance of the diffusion

**Max Diffusion Depth**

_Sets the maximum number of steps a diffusion can take._

* Set to -1 for unlimited depth
* Higher values create longer, more complex diffusions

**Fill Controls**

_Configures how the diffusion fills nodes._

* Controls rate and behavior of node filling during diffusion
* Can be used to simulate different types of influence or spread behaviors

***

#### Outputs

Controls what data is written back to the points.

**Write Diffusion Depth**

_When enabled, writes the depth at which each point was reached._

* Creates an integer attribute named "DiffusionDepth" by default
* Useful for visualizing how far each point was diffused from its seed

**Write Diffusion Order**

_When enabled, writes the order in which points were processed._

* Creates an integer attribute named "DiffusionOrder" by default
* Helps track the sequence of diffusion steps

**Write Diffusion Distance**

_When enabled, writes the cumulative distance traveled during diffusion._

* Creates a double attribute named "DiffusionDistance" by default
* Useful for creating gradient effects or distance-based visualizations

**Write Diffusion Ending**

_When enabled, marks points that are endpoints of diffusions._

* Creates a boolean attribute named "DiffusionEnding" by default
* Points marked as true are at the end of their diffusion path

**Seed Forwarding**

_Configures which seed attributes to forward to the diffused points._

* Selects which attributes from the seed point will be copied to the target points
* Useful for propagating properties like color, material, or other characteristics

***

#### Outputs - Paths

Controls how path data is generated and output.

**Path Output Mode**

_Specifies how paths are output._

* **None**: No path data is generated
* **Full**: Generates full paths from seed to endpoint (can create overlaps)
* **Partitions**: Generates partial paths with overlapping endpoints only

**Partition Over**

_Determines how partitions are sorted when using "Partitions" mode._

* **Length**: Sort by path length
* **Score**: Sort by path score
* **Depth**: Sort by path depth

**Partition Sorting**

_Sets the sorting direction for path partitions._

* **Ascending**: Shorter paths first
* **Descending**: Longer paths first

**Seed Attributes to Path Tags**

_Configures which seed attributes are used to tag path data._

* Maps seed point attributes to tags in the output path data
* Useful for categorizing or filtering paths based on seed properties
