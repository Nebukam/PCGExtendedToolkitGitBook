---
description: 'In editor :: PCGEx | State : Cluster'
icon: circle-dashed
---

# State : Cluster

Inherits from [state-point.md](../../../filters/write-states/state-point.md "mention")

{% hint style="info" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Creates a filter-driven cluster state that can be used to define conditions for clusters in a procedural graph.

### Overview

This factory creates a single, filter-based state that operates on clusters. It defines a condition that points must meet to be considered part of a specific cluster state. The resulting state can be used by other nodes to make decisions based on cluster membership or properties.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes that work with clusters
{% endhint %}

### How It Works

This factory defines a condition that evaluates whether a cluster meets certain criteria. When a point passes the filter test, it contributes to the defined cluster state. The result is typically used to set flags or properties on clusters that can be queried by downstream nodes.

The state operates at the cluster level rather than individual points, meaning it evaluates conditions based on cluster characteristics rather than individual point attributes.

### Configuration

***

#### General

**Name**

_Name of this state definition._

Sets the identifier for this state. This name is used when referencing the state in other nodes that consume cluster states.

**Priority**

_Priority of this filter in the evaluation order._

Controls the order in which multiple filters are evaluated. Higher priority values are processed first.

**Config**

_Configuration settings for the cluster state._

Contains the core configuration parameters that define how this cluster state behaves and what conditions it evaluates.

### Inputs

* **Cluster**: Input cluster to evaluate
* **Filter**: Filter condition to test against the cluster

### Outputs

* **State**: Output state that can be used by downstream nodes

### Usage Example

Create a "High Density" cluster state that flags clusters containing more than 100 points. Connect this factory to a Filter node that checks point count, then use the resulting state in downstream processing to apply special effects or behaviors to high-density clusters.

### Notes

* Cluster states are evaluated per-cluster rather than per-point
* Multiple cluster state factories can be combined to define complex cluster conditions
* The output is typically used as input for other nodes that process cluster properties
* States can be combined with other point states using state management nodes
