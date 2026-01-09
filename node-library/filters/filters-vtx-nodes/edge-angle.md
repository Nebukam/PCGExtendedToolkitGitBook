---
description: 'In editor :: PCGEx | Vtx Filter : Edge Angle'
icon: circle-dashed
---

# Edge Angle

{% hint style="warning" %}
## AI-generated page - To be reviewed. 
While not 100% accurante, it should properly capture what it does. It stills needs to be reviewed and proofread by a human.
{% endhint %}

> Filters points based on the angle between their connected edges using dot product comparison.

### Overview

This filter evaluates the angle formed by edges connected to each vertex (node). It compares the dot product of adjacent edges against a threshold value, determining whether a node passes or fails the filter. This is particularly useful for analyzing graph structures where edge angles are meaningful, such as in network topology or pathfinding analysis.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes like **Cluster : Filter**, **Cluster : Split**, or **Cluster : Prune**
{% endhint %}

### How It Works

The filter calculates the angle between edges connected to each node by computing the dot product of adjacent edge vectors. For binary nodes (with exactly two edges), it directly compares this value against a threshold. For non-binary nodes, it uses an average of all pairwise edge comparisons.

* **Binary Nodes**: Uses the angle between the two connected edges
* **Non-Binary Nodes**: Computes the average angle across all pairs of edges
* **Leaves**: Nodes with only one edge (no angle to compute) are handled according to fallback settings

### Configuration

***

#### General

**Leaves Fallback**

_What should this filter return when dealing with leaf nodes? (nodes that only have one edge)_

When a node has only one connected edge, there is no angle to compute. This setting determines whether such nodes pass or fail the filter.

**Values**:

* **Pass**: Leaf nodes will be considered to successfully pass the filter
* **Fail**: Leaf nodes will be considered to failing to pass the filter

**Non-Binary Fallback**

_What should this filter return when dealing with complex, non-binary nodes? (nodes that have more than two edges)_

When a node has more than two connected edges, the filter computes an average angle across all pairs. This setting determines whether such nodes pass or fail the filter.

**Values**:

* **Pass**: Non-binary nodes will be considered to successfully pass the filter
* **Fail**: Non-binary nodes will be considered to failing to pass the filter

**Dot Comparison Details**

_Dot product comparison settings_

Controls how the dot product result is compared against a threshold value. This includes the comparison operator and the threshold value itself.

**Invert Result**

_Whether the result of the filter should be inverted or not. Note that this will also invert fallback results!_

When enabled, nodes that would normally pass now fail, and vice versa.

### Usage Example

Use this filter to identify sharp turns in a network graph. For example:

1. Connect a **Cluster : Graph** node to a **Vtx Filter : Edge Angle** node
2. Set the dot comparison threshold to `0.707` (approximately 45 degrees)
3. Configure fallbacks to **Fail** for both leaf and non-binary nodes
4. Connect the filter output to a **Cluster : Prune** node

This setup will remove nodes where connected edges form angles less than 45 degrees, effectively pruning sharp turns from your graph.

### Notes

* This filter works best on binary nodes (nodes with exactly two edges)
* Leaf nodes (single edge) and complex nodes (more than two edges) are handled according to fallback settings
* The dot product result is normalized between -1 and 1, where:
  * `1.0` = 0 degrees (parallel edges)
  * `0.0` = 90 degrees (perpendicular edges)
  * `-1.0` = 180 degrees (opposite edges)
* For best results, use thresholds between `0.0` and `1.0` for meaningful angle comparisons

### Inputs

* **Cluster** (required): Input cluster to filter
* **Filter** (optional): Optional filter input that can be used to pre-filter the cluster before processing

### Outputs

* **Pass**: Cluster containing nodes that passed the filter
* **Fail**: Cluster containing nodes that failed the filter
