---
description: 'In editor :: PCGEx | Filter : Random (Ratio)'
icon: circle-dashed
---

# Random (Ratio)

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Filter points using a random ratio.

#### Overview

This filter subnode randomly includes or excludes points based on a configurable probability ratio. It's useful for introducing stochastic variation into procedural generation workflows, such as randomly selecting a percentage of points for further processing or applying effects to a subset of data. You can use it to create varied, non-uniform distributions or to simulate randomness in your content.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes.
{% endhint %}

#### How It Works

This filter evaluates each point individually and decides whether to include or exclude it based on a random value compared against a configured ratio. For each point, a random number is generated using the specified seed and noise parameters. If this random number falls below the defined ratio (between 0 and 1), the point passes the filter. Optionally, the result can be inverted so that points pass when the random value is _above_ the ratio.

The randomness is seeded per-point to ensure consistent results across runs when using the same seed values, but still allows for variation within a single execution.

#### Configuration

<details>

<summary><strong>Random</strong><br><em>Type of seed input and noise parameters for randomness.</em></summary>

Controls how random values are generated per point. This includes settings like the base seed, noise type, and scale.

**Values**:

* **BaseSeed**: The seed used to initialize the random number generator for each point.
* **NoiseMode**: Type of spatial noise used to vary randomness across space (e.g., Perlin, Voronoi).
* **Scale**: Controls how much variation is introduced by the noise function.

</details>

<details>

<summary><strong>bInvertResult</strong><br><em>When enabled, points pass when their random value is greater than the ratio.</em></summary>

When enabled, the filter logic is inverted. Instead of including points where the random value is less than or equal to the ratio, it includes points where the random value is greater than the ratio.

</details>

#### Usage Example

Use this subnode in a point filtering node to randomly select 30% of points for further processing. Set the ratio to 0.3 and leave invert disabled. This will include approximately one-third of all input points, with the selection being consistent across runs when using the same seed.

#### Notes

* The random behavior is deterministic based on the point's position or index and the provided seed.
* When using noise modes like Voronoi or Perlin, the ratio will vary spatially across the point cloud.
* Inverting the result can be useful for creating exclusion zones or selecting the complement of a random subset.
