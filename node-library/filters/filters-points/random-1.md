---
description: 'In editor :: PCGEx | Filter : Random (Ratio)'
icon: circle-dashed
---

# Random (Ratio)

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Filters points based on a random ratio, determining whether each point passes or fails a condition.

#### Overview

This subnode filters points using a random value to determine if they should pass or fail a condition. It's useful for introducing randomness into procedural generation workflows, such as randomly selecting a percentage of points for further processing or applying effects to a subset of data. The behavior is controlled by a ratio that defines how many points are selected, and whether the result is inverted.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes.
{% endhint %}

#### How It Works

This subnode generates a random value for each point and compares it against a defined ratio. If the random value is less than or equal to the ratio, the point passes the filter; otherwise, it fails. The process uses a seed-based random number generator to ensure reproducibility. When the **Invert Result** option is enabled, points that would normally pass are filtered out and vice versa.

<details>

<summary>Inputs</summary>

* Points to be filtered

</details>

<details>

<summary>Outputs</summary>

* Points that meet the random ratio condition

</details>

#### Configuration

***

**Random**

_Controls how the random value is generated for each point._

This setting defines the seed and method used to generate a random number per point. The seed can be based on the point's data or a fixed value, ensuring consistent results across runs.

**Values**:

* **Base Seed**: Defines the base seed value used for generating the random number. Can use input data or a fixed integer.
* **Use Point Index as Seed**: When enabled, uses the point index to vary the seed per point, increasing randomness.
* **Amount**: Controls how many points are selected based on the ratio.

**bInvertResult**

_When enabled, reverses the filter result._

If enabled, points that would normally pass the filter will be excluded and those that fail will be included. This allows for selecting the inverse of the random selection.

**Config**

_Configuration settings for the filter behavior._

This section groups the core parameters of the filter, including the random generation method and inversion option.

#### Usage Example

A game designer wants to randomly select 30% of points from a point cloud to apply a special effect. They use this subnode with a ratio of `0.3` to filter out 70% of the points, leaving only 30% for further processing. The seed is set to use the point index so that each point gets a unique random value.

#### Notes

* The random behavior is deterministic when using a fixed seed.
* Using point indices as seeds ensures varied results across different points.
* This filter can be combined with other filters to create more complex selection criteria.
