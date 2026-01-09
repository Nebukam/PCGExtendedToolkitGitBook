---
description: 'In editor :: PCGEx | Cluster : Flood Fill'
icon: scrubber
---

# Flood Fill

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Diffuses vertex attributes onto their neighbors.

#### Overview

This node performs a diffusion process on clustered data, spreading vertex attributes across connected nodes in a graph. It's useful for propagating information such as scores, weights, or other values from seed points throughout a cluster structure.

It works by selecting seed points and then "flood-filling" attribute values to neighboring vertices based on defined rules. The diffusion process can be controlled to run either in parallel or sequentially, allowing for different behaviors depending on the desired outcome.

This node connects to clusters and expects edge data that defines how nodes are connected. It outputs modified vertex data with new attributes reflecting the diffusion results.

{% hint style="info" %}
Connects to **Clusters** and **Edges** inputs.
{% endhint %}

#### How It Works

The Flood Fill node begins by selecting seed points from the input cluster using a defined selection method. These seeds are then used as starting points for diffusing attributes across connected nodes.

It supports two modes of diffusion:

* **Parallel**: Each vertex is processed once per iteration before moving to the next.
* **Sequential**: Each vertex is fully diffused until it stops before proceeding to the next vertex.

The process continues iteratively, spreading values from each node to its neighbors based on the defined flow rules. The algorithm tracks how far each vertex has been diffused and whether it reached an endpoint, allowing for complex attribute propagation patterns.

Each diffusion step can be configured with distance thresholds and blending operations, enabling fine-grained control over the spread behavior.

<details>

<summary>Inputs</summary>

* **Clusters**: A collection of clustered data points.
* **Edges**: Defines connections between nodes in the clusters.

</details>

<details>

<summary>Outputs</summary>

* **Points**: Modified vertex data with new attributes reflecting diffusion results.
* **Edges**: (Optional) Modified edge data if needed for further processing.

</details>

#### Configuration

***

**SeedPicking**

_Drive how a seed point selects a node._

Controls the method used to select initial seed points from the cluster. This can be based on index, distance, or other selection criteria.

**Ordering**

_Defines the sorting used for the vtx_

Determines whether the order of processing vertices is driven by their index or by a sorting rule.

**SortDirection**

_Sort direction_

Controls whether the sorting order is ascending or descending.

**Seeds**

_Seeds settings_

Settings related to how seed points are selected and processed.

**Processing**

_Defines how each vtx is diffused_

Sets the diffusion mode:

* **Parallel**: Diffuse all vertices once per iteration.
* **Sequential**: Fully diffuse one vertex before moving to the next.

**Diffusion**

_Diffusion settings_

Controls how the diffusion process behaves, including distance limits and blending operations.

**bUseOctreeSearch**

_Whether or not to search for closest node using an octree. Depending on your dataset, enabling this may be either much faster, or much slower._

When enabled, uses an octree structure to optimize neighbor searches, which can improve performance with large datasets.

***

**bWriteDiffusionDepth**

_Write the diffusion depth the vtx was subjected to._

When enabled, writes how many steps of diffusion a vertex went through.

**DiffusionDepthAttributeName**

_Name of the 'int32' attribute to write diffusion depth to._

The name of the attribute where the diffusion depth is stored.

**bWriteDiffusionOrder**

_Write the final diffusion order._

When enabled, records the order in which vertices were processed during diffusion.

**DiffusionOrderAttributeName**

_Name of the 'int32' attribute to write order to._

The name of the attribute where the diffusion order is stored.

**bWriteDiffusionDistance**

_Write the final diffusion distance._

When enabled, stores the total distance traveled during diffusion.

**DiffusionDistanceAttributeName**

_Name of the 'double' attribute to write diffusion distance to._

The name of the attribute where the diffusion distance is stored.

**bWriteDiffusionEnding**

_Write on the vtx whether it's a diffusion "endpoint"._

When enabled, marks vertices that reached an endpoint in the diffusion process.

**DiffusionEndingAttributeName**

_Name of the 'bool' attribute to write diffusion ending to._

The name of the attribute where the endpoint flag is stored.

**SeedForwarding**

_Which Seed attributes to forward on the vtx they diffused to._

Controls which attributes from seed points are copied onto the vertices they diffuse to.

***

**PathOutput**

_TBD_

Controls whether and how paths are output during diffusion.

**Values**:

* **None**: No paths are generated.
* **Full**: Full paths from seed to endpoint are generated.
* **Partitions**: Only partial paths are generated, with overlapping endpoints.

**PathPartitions**

\_ ├─ Partition over\_

Controls how paths are partitioned when using the "Partitions" output mode.

**Values**:

* **Length**: Partition by path length.
* **Score**: Partition by score.
* **Depth**: Partition by diffusion depth.

**PartitionSorting**

\_ └─ Sorting\_

Determines the sorting order for partitions in the path output.

**Values**:

* **Ascending**: Sort ascending.
* **Descending**: Sort descending.

**SeedAttributesToPathTags**

_TBD_

Defines which seed attributes are used to tag paths during output.

#### Usage Example

Use this node to simulate a "spread" effect, such as propagating influence from a central point across a network of connected nodes. For example, you could use it to model how a resource spreads through a terrain cluster or how a signal propagates through a graph structure.

#### Notes

* The performance of the diffusion process can be affected by the number of vertices and edges in your clusters.
* Enabling octree search may improve performance for large datasets but could slow things down with small data sets.
* Diffusion depth and distance attributes are useful for visualizing or analyzing how far values have spread.
