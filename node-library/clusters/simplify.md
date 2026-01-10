---
description: 'In editor :: PCGEx | Cluster : Simplify'
icon: circle
---

# Simplify

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Simplify connections by operating on isolated chains of nodes (only two neighbors).

#### How It Works

This node cleans up graph structures by identifying and simplifying linear chains of nodes where each node (except the endpoints) has exactly two neighbors. These are referred to as "isolated chains" or "linear segments."

For each identified chain, the node performs the following actions:

1. If enabled, it checks whether the angular deviation between consecutive edges in the chain is below a specified threshold.
2. If so, it merges nodes based on that angle or distance criteria.
3. It then removes intermediate nodes from the chain and connects the remaining endpoints directly with new edges.
4. Optionally, it can remove dead ends (nodes with only one neighbor) if enabled.

This process ensures that linear paths are simplified while preserving important structural features like sharp turns or junctions.

#### Configuration

<details>

<summary><strong>Operate On Leaves Only</strong><br><em>If enabled, only check for dead ends.</em></summary>

When enabled, the node will only simplify chains that are at the "ends" of the graph (i.e., nodes with only one neighbor). When disabled, it processes all linear chains regardless of their position in the graph.

</details>

<details>

<summary><strong>Edge Filter Role</strong><br><em>Define the behavior of connected edge filters, if any.</em></summary>

Controls how edge filters are handled during simplification:

* **Preserve**: Endpoints of edges that pass the filter are kept.
* **Collapse**: Endpoints of edges that pass the filter are collapsed into a single point.

</details>

<details>

<summary><strong>Merge Above Angular Threshold</strong><br><em>If enabled, uses an angular threshold below which nodes are merged.</em></summary>

When enabled, the node will merge consecutive nodes in a chain if the angle between their connecting edges is below the specified threshold. This helps simplify paths that are nearly straight.

</details>

<details>

<summary><strong>Angular Threshold</strong><br><em>If enabled, uses an angular threshold below which nodes are merged.</em></summary>

Sets the maximum angle (in degrees) allowed for two consecutive edges in a chain to be considered collinear. If the angle is smaller than this value, the intermediate node will be removed.

**Range**: 0 to 180 degrees

</details>

<details>

<summary><strong>Invert</strong><br><em>Removes hard angles instead of collinear ones.</em></summary>

When enabled, the node removes nodes at sharp angles (where the angle is greater than the threshold) rather than those that are nearly straight.

</details>

<details>

<summary><strong>Fuse Collocated</strong><br><em>If enabled, will consider collocated binary nodes for collocation and remove them as part of the simplification.</em></summary>

When enabled, nodes that are located very close to each other (within the Fuse Distance) are merged into a single point during simplification.

</details>

<details>

<summary><strong>Fuse Distance</strong><br><em>Distance used to consider point to be overlapping.</em></summary>

Sets the minimum distance between two points for them to be considered collocated and eligible for merging. Smaller values result in more aggressive merging.

**Range**: 0.001 and above

</details>

<details>

<summary><strong>Prune Leaves</strong><br><em>If enabled, prune dead ends.</em></summary>

When enabled, the node removes nodes that have only one neighbor (dead ends) from the graph, effectively trimming off terminal branches.

</details>

<details>

<summary><strong>Edge Blending Details</strong><br><em>Defines how fused point properties and attributes are merged together for Edges.</em></summary>

Controls how data from merged points is combined when creating new edges. This affects attribute values on the resulting edges.

</details>

<details>

<summary><strong>Carry Over Settings</strong><br><em>Meta filter settings for edge data.</em></summary>

Determines which attributes or metadata from the original edges are carried over to the simplified edges.

</details>

<details>

<summary><strong>Edge Union Data</strong><br><em>Edge Union Data</em></summary>

Defines how unioned attributes from multiple edges are handled during simplification, particularly when multiple edges are collapsed into one.

</details>

<details>

<summary><strong>Cluster Output Settings</strong><br><em>Graph &#x26; Edges output properties</em></summary>

Controls how the resulting graph and edge data are structured in the output. This includes settings for metadata, attribute handling, and output formatting.

</details>

#### Usage Example

You have a procedural path network with many intermediate nodes that represent minor waypoints or noise in the path. You want to simplify it so that only meaningful turns or junctions remain.

1. Connect your cluster input to this node.
2. Enable **Prune Leaves** to remove terminal branches.
3. Set **Merge Above Angular Threshold** to true and set an angular threshold of 10 degrees.
4. Optionally, enable **Fuse Collocated** with a small tolerance like 0.001 to merge very close points.

This setup will clean up the path by removing unnecessary intermediate nodes while preserving sharp turns and maintaining structural integrity.

#### Notes

* This node works best on linear or near-linear chains of nodes.
* Enabling both angular merging and collocation can produce more aggressive simplification.
* Be cautious with very low thresholds, as they may remove important features from your graph.
* The node does not modify the original input data; it creates a new simplified version.
