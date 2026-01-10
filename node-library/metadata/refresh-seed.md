---
description: 'In editor :: PCGEx | Refresh Seed'
icon: circle
---

# Refresh Seed

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Refresh point seed based on position.

#### Overview

The Refresh Seed node updates the random seed value for each point in your data set using its world position coordinates. This allows you to introduce spatial variation into procedural operations that rely on randomness, ensuring that points at different locations produce different random results while maintaining deterministic behavior within a given seed value.

This is useful when you want to ensure that similar points in space don't generate identical random outcomes, or when you're using seeded random functions and need to vary the seed per point based on their location. It's often used in combination with other nodes that perform randomized operations like noise sampling, distribution, or variation.

{% hint style="info" %}
This node does not connect to any specific subnodes. It operates directly on point data.
{% endhint %}

#### How It Works

The node calculates a new seed value for each point by combining the point's world position with the Base seed value you provide. For each point, it takes the X, Y, and Z coordinates of the point's location and uses them to generate a unique integer seed that is then assigned to that point.

The exact method of combining these values isn't specified in the code but typically involves some form of hashing or mathematical transformation that ensures spatially distinct points produce different seeds. This makes the seed value dependent on position, which allows for reproducible yet varied random behavior across your dataset.

#### Inputs

* **Points** (main input): Accepts point data that will have their seed values refreshed based on position.

#### Outputs

* **Points** (main output): The same point data with updated seed values assigned to each point.

#### Configuration

<details>

<summary><strong>Base</strong><br><em>Base seed.</em></summary>

Sets the base integer value used in calculating the new seed for each point. This value is combined with the point's position to determine the final seed.

</details>

#### Usage Example

You have a set of points distributed across a landscape and want to apply noise-based variation to each point such that nearby points get slightly different noise values. By connecting a Noise node after this Refresh Seed node, you can ensure that each point uses its own unique seed derived from its position, leading to varied but reproducible noise results.

#### Notes

* The seed value is updated in-place on the point data and will be used by downstream nodes that rely on seeded random functions.
* This node does not change the actual point positions or other attributes — only the seed values.
* If you use this node with a fixed Base value, points at identical world coordinates will get the same seed, which may be useful for maintaining consistency in certain procedural effects.
