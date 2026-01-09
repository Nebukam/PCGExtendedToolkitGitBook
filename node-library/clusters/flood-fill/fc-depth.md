---
description: 'In editor :: PCGEx | Fill Control : Depth'
icon: circle-dashed
---

# FC : Depth

{% hint style="info" %}
### AI-generated page -- to be reviewed

While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Control flood fill behavior based on how far a point is from the seed point in terms of diffusion steps.

### Overview

This factory defines how flood fill operations prioritize and limit their expansion based on the depth (number of steps) from the starting point. It's used with flood fill nodes to control how deeply the fill spreads through connected points.

{% hint style="info" %}
Connects to **Probe** pins on flood fill nodes
{% endhint %}

### How It Works

This factory controls the diffusion process by limiting how far a fill can spread based on the number of steps taken from the seed point. Each time a point is flooded, it increases the depth count by one. When the current depth reaches the maximum allowed depth, no further points at that depth or deeper will be considered for flooding.

### Inputs

* **Seed Point**: The starting point for the flood fill operation
* **Connected Points**: Points that are connected to the seed point and can be flooded

### Outputs

* **Flooded Points**: Points that have been successfully flooded within the depth limit
* **Depth Information**: Metadata about the depth of each flooded point

### Configuration

***

#### General

**Max Depth Input**

_Controls whether the maximum depth is defined as a constant value or read from an attribute._

When set to **Constant**, use the fixed value in the "Max Depth" setting. When set to **Attribute**, read the maximum depth from the specified attribute on each point.

**Values**:

* **Constant**: Use the fixed value in the "Max Depth" setting
* **Attribute**: Read the maximum depth from an attribute

**Max Depth (Attr)**

_The name of the attribute to read the maximum depth from._

This setting is only active when "Max Depth Input" is set to **Attribute**.

**Max Depth**

_The maximum number of steps a point can be from the seed before it's no longer considered for flooding._

This value must be at least 1. A value of 1 means only the seed point itself will be flooded.

### Usage Example

Use this factory when you want to create a fill that spreads out in layers from a seed point, like creating a ripple effect or limiting how far a flood fills from its origin. For example, set Max Depth to 5 to ensure the fill stops expanding after 5 steps from the seed point.

### Notes

* This control is useful for creating layered or bounded fills
* Combine with other fill controls to create complex diffusion behaviors
* When using attribute input, make sure the attribute exists on all points that will be processed
