---
description: 'In editor :: PCGEx | Shape : φ Sphere'
icon: circle-dashed
---

# Shape : Sphere

{% hint style="info" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Create a Fibonacci Lattice sphere.

### Overview

This node generates points distributed in a spherical pattern using the Fibonacci lattice algorithm. It creates a set of evenly spaced points on a sphere's surface, which is useful for distributing objects uniformly around a central point. The distribution follows mathematical principles that ensure minimal clustering and maximum uniformity.

The φ (phi) in the name refers to the chosen constant used in the algorithm, typically the Golden Ratio but customizable. This approach produces more even distributions than simple spherical coordinate methods, especially when dealing with larger numbers of points.

{% hint style="info" %}
This node works best when used with a seed point that defines the center and scale of the sphere. The number of points generated depends on the resolution setting.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Seed** (Points): Defines the center point and scale for the sphere generation.

</details>

<details>

<summary>Outputs</summary>

* **Shape Builder**: A shape builder that can be consumed by a Shape processor node to generate actual points on the sphere surface.

</details>

### Properties Overview

Settings for controlling the Fibonacci lattice sphere generation.

***

#### General

Controls core parameters of the sphere distribution.

**Phi Constant**

_Selects which mathematical constant to use in the Fibonacci lattice algorithm._

* Changes how the points are distributed across the sphere surface
* Different constants produce subtly different patterns of point placement

**Values**:

* **Golden Ratio**: Uses the classic Golden Ratio (1.618...) for point distribution
* **Sqrt 2**: Uses the square root of two (1.414...)
* **Irrational**: Uses an irrational number (0.724592938...)
* **Sqrt 3**: Uses the square root of three (1.732...)
* **Ln2**: Uses the natural logarithm of 2 (0.693...)
* **Custom**: Allows you to specify your own constant value

**Phi Custom Value**

_Specifies a custom mathematical constant for the Fibonacci lattice._

* Only visible when "Phi Constant" is set to "Custom"
* Controls the specific mathematical constant used in point distribution
* Values typically range from 0.1 to 2.0 for meaningful results

**Epsilon**

_Adds a small offset to the point distribution algorithm._

* Adjusts how points are positioned along the vertical axis of the sphere
* Can help reduce clustering at the poles when set to small positive values
* Common values range from 0.0 to 0.1

### Notes

* The Fibonacci lattice method creates more uniform point distributions than traditional spherical coordinate approaches
* Higher resolution values will generate more points on the sphere surface
* This node is particularly useful for creating natural-looking distributions of objects like stars, flowers, or particle systems
* When using with a Shape processor, consider setting "Output Mode" to "Per Seed" to get one sphere per seed point
* The algorithm works best when the number of points is large (100+), as smaller numbers may appear less uniform
