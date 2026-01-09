---
description: 'In editor :: PCGEx | Fill Control : Length'
icon: circle-dashed
---

# FC : Length

{% hint style="info" %}
### AI-generated page -- to be reviewed

While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Stop fill after a certain distance have been captured.

### Overview

This factory defines a stopping condition for flood fill operations based on the accumulated distance from the seed point. It controls how far the fill can spread by measuring the total path length from the starting point to each candidate node.

{% hint style="info" %}
Connects to **Fill Control** pins on flood fill nodes
{% endhint %}

### How It Works

This factory limits how far a flood fill operation can spread by measuring the total distance from the seed point to each candidate node. When the accumulated path length exceeds the defined maximum, no more nodes will be captured or probed.

The distance is measured as the sum of all edge lengths along the path from the seed to the current node. This creates a natural boundary that follows the topology of your input data.

### Inputs

* **Probe** (Pin): Connects to flood fill nodes to define stopping conditions
* **Input Data**: Point data containing the topology for path calculations

### Outputs

* **Control Output**: Provides the stopping condition for flood fill operations

### Configuration

***

#### General

**Use Path Length**

_When enabled, the fill stops based on the total accumulated path length from the seed point. When disabled, it stops based on the direct edge length._

Enabling this allows for more intuitive control over how far the fill spreads, as it considers the actual traversal distance rather than just individual edges.

**Max Length Input Type**

_Controls whether the maximum length is a fixed value or read from an attribute._

**Values**:

* **Constant**: Use a fixed numeric value for the limit
* **Attribute**: Read the limit from a point attribute on the input data

**Max Length Attribute**

_The name of the point attribute that contains the maximum fill distance._

Only visible when "Max Length Input Type" is set to "Attribute".

**Max Length**

_The maximum accumulated path length allowed before stopping the fill._

Only visible when "Max Length Input Type" is set to "Constant". Must be a positive number.

### Usage Example

Use this factory to create a flood fill that spreads only within a certain distance from the seed point. For example:

1. Create a `Flood Fill With Seed` node
2. Connect this `Fill Control : Length` factory to its Probe pin
3. Set "Max Length" to 50
4. The fill will stop spreading once it reaches any point that is more than 50 units away from the seed along the path

This is useful for creating localized effects like:

* Creating a circular area of influence around a point
* Limiting how far a terrain feature spreads
* Constraining procedural generation to specific distances

### Notes

* The path length calculation accounts for the actual traversal distance, not straight-line distance
* When using attributes, make sure the attribute exists on all input points or the operation may fail
* This control works best with connected point data where meaningful paths can be established
* Combine with other fill controls to create complex stopping conditions (e.g., stop by both length and angle)
