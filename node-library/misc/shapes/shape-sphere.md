---
description: 'In editor :: PCGEx | Shape : φ Sphere'
icon: circle-dashed
---

# Shape : Sphere

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Create a Fibonacci Lattice sphere.

#### Overview

This node generates points distributed in a spherical pattern using a Fibonacci lattice algorithm. It's useful for creating even, natural-looking point distributions on a sphere, such as for star fields, flower petal arrangements, or particle systems with spherical constraints. The distribution avoids clustering and provides a visually pleasing spread of points across the sphere's surface.

It takes seed points and generates a set of points that form a Fibonacci lattice on a sphere, allowing for customizable parameters like phi constant and epsilon to fine-tune the distribution.

{% hint style="info" %}
Connects to **Shape Processor** nodes via the "Shape Builder" input pin.
{% endhint %}

#### How It Works

This node creates a spherical point distribution by using a Fibonacci lattice pattern. It calculates positions on a sphere based on mathematical principles derived from the golden ratio or other irrational numbers.

1. For each seed point, it computes a set of points that form a Fibonacci lattice on a unit sphere.
2. The algorithm uses a phi value (related to the golden ratio or another constant) to determine angular spacing between points.
3. Each point is calculated using spherical coordinates converted to Cartesian space:
   * X = cos(θ) \* sin(φ)
   * Y = cos(φ)
   * Z = sin(θ) \* sin(φ)
4. The theta angle (θ) is derived from the index and phi value, while the phi angle (φ) is derived from the index and a normalized y-value.
5. The final point positions are scaled to fit within the sphere's radius.

This method ensures that points are spread evenly across the sphere’s surface without clustering or gaps, making it ideal for natural-looking distributions.

<details>

<summary>Inputs</summary>

* **Seed Points**: A set of input points used as origins for generating the spherical point distribution.
* **Shape Properties**: Configuration settings that define how the sphere is generated and distributed.

</details>

<details>

<summary>Outputs</summary>

* **Points**: A collection of points arranged in a Fibonacci lattice pattern on a sphere, centered around each seed point.

</details>

#### Configuration

<details>

<summary><strong>Phi Constant</strong><br><em>Phi Constant</em></summary>

Selects the mathematical constant used for phi in the Fibonacci lattice calculation.

**Values**:

* **Golden Ratio**: Uses the golden ratio (1.618...).
* **Sqrt 2**: Uses the square root of two.
* **Irrational**: Uses an irrational number approximation.
* **Sqrt 3**: Uses the square root of three.
* **Ln2**: Uses the natural logarithm of two.
* **Custom**: Allows specifying a custom phi value.

</details>

<details>

<summary><strong>Phi Custom Value</strong><br><em>Phi Custom Value</em></summary>

When "Phi Constant" is set to "Custom", this value defines the specific phi used in the Fibonacci lattice calculation.

</details>

<details>

<summary><strong>Epsilon</strong><br><em>Epsilon</em></summary>

A small offset value that adjusts how points are distributed along the vertical axis of the sphere. It helps avoid degenerate cases and can influence the visual spread of points.

</details>

<details>

<summary><strong>Shape properties</strong><br><em>Shape properties</em></summary>

General configuration settings for the shape, such as radius or point count, which define how the Fibonacci lattice is applied to each seed point.

</details>

#### Usage Example

Use this node to generate a spherical distribution of particles for a galaxy or nebula effect. Connect a few seed points to represent star locations, then use this node to create a Fibonacci lattice of points around each seed, simulating a natural star field with even spacing and minimal clustering.

#### Notes

* The Fibonacci lattice provides an aesthetically pleasing and evenly distributed point set on a sphere.
* Adjusting the phi constant or epsilon can alter how tightly packed or spread out the points appear.
* This node works best when used with a small number of seed points, as each seed generates a full spherical distribution.
