---
description: 'In editor :: PCGEx | Refresh Seed'
icon: circle
---

# Refresh Seed

{% hint style="warning" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Refresh point seed based on position.

### Overview

This node updates the random seed value of each point based on its world position, ensuring that points at different locations receive unique random values. This is useful when you want to maintain reproducible randomness across multiple runs while ensuring spatial variation in your procedural generation.

{% hint style="info" %}
The seed refresh happens per-point, so points with similar positions will have similar seeds, but points at different world coordinates will have distinct seeds.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Default Input** (Required): Points to process. Each point's position is used to calculate a new seed value.

</details>

<details>

<summary>Outputs</summary>

* **Default Output** (Required): Points with updated seed values based on their world positions.

</details>

### Properties Overview

Controls how the seed values are calculated and applied to your points.

***

#### Settings

Configures the base seed used in the calculation.

**Base**

_The base integer value used to offset the seed calculation._

* This value is added to the position-based seed to create a unique seed per point.
* For example, if `Base` is set to 100 and a point's world X coordinate is 50, the resulting seed will be offset by 100 + 50 = 150.

### Notes

This node is particularly useful when you need consistent but spatially varying randomness across your points. For example, if you're generating terrain features or vegetation where each location should have a unique but deterministic random behavior, this node ensures that nearby points get similar seeds while distant points get very different ones.
