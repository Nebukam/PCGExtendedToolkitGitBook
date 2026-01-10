---
icon: circle-dashed
---

# Noise : White

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> White noise - fast, pure random.

#### Overview

White noise generates completely random values with no spatial correlation, making it ideal for adding grain or randomness to procedural content. It produces a "grainy" appearance and is extremely fast to compute. This subnode is commonly used as an input for noise blending operations, where its pure randomness can be combined with other noise types to create more complex patterns.

{% hint style="info" %}
Connects to **Noise** pins on nodes that support procedural value sampling.
{% endhint %}

#### How It Works

White noise generates a new random value for each unique 3D position. Instead of interpolating between values like other noise types, it directly hashes the integer portion of the input coordinates to produce a pseudo-random output. This creates a "grainy" texture with no smooth transitions or patterns, as each point is independent.

The algorithm:

1. Takes the input 3D position
2. Extracts the integer components (X, Y, Z)
3. Hashes these components using a fast hash function
4. Converts the resulting hash into a floating-point value between -1 and 1

This produces a uniform distribution of values with no correlation between nearby points.

#### Configuration

<details>

<summary><strong>Weight Factor</strong><br><em>The weight factor for this Noise3D (used when combining multiple noise sources).</em></summary>

Controls how much influence this noise has when combined with others. A value of 1 means full influence, while values below 1 reduce its impact.

</details>

<details>

<summary><strong>Blend Mode</strong><br><em>Blend mode when stacked against other noises.</em></summary>

Determines how this noise combines with other noise sources:

* **Blend (Weighted Average)**: Averages all noise values using their weights.
* **Add**: Adds all values together, clamped to \[-1, 1].
* **Multiply**: Multiplies all values together.
* **Min**: Takes the minimum value among all inputs.
* **Max**: Takes the maximum value among all inputs.
* **Subtract**: Subtracts subsequent values from the first.
* **Screen**: Uses screen blend (1 - (1-a)\*(1-b)).
* **Overlay**: Uses overlay blend.
* **Soft Light**: Uses soft light blend.
* **First Valid**: Takes the first non-zero value.

</details>

<details>

<summary><strong>Invert</strong><br><em>Invert the noise output.</em></summary>

When enabled, flips the sign of all noise values. This effectively inverts the range from \[-1, 1] to \[1, -1].

</details>

#### Usage Example

Use this subnode to add random variation to point positions or scalar attributes. For example:

* Add white noise to a set of points to scatter them slightly
* Combine it with a Perlin noise layer to create a more organic-looking terrain
* Use it as a base for procedural texture generation where you want to introduce randomness

#### Notes

* White noise is the fastest noise type available, making it ideal for performance-critical applications.
* It produces no smooth transitions or patterns, so it's best used in combination with other noise types.
* The output values are uniformly distributed between -1 and 1.
