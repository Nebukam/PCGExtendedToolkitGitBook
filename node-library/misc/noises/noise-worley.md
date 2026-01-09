---
icon: circle-dashed
---

# Noise : Worley

{% hint style="info" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Creates cell-like patterns using Worley/Cellular noise, which generates procedural values based on distance to feature points in a grid.

### Overview

This factory generates **cellular noise** — a type of procedural noise that produces patterns resembling cells or territories. It's commonly used for terrain features, surface textures, or organic-looking variations.

{% hint style="info" %}
Connects to **Noise pins** on other nodes that sample noise values (e.g., Noise Sampling, Noise Blend, etc.)
{% endhint %}

### How It Works

Worley noise works by placing feature points in a 3D grid and calculating the distance from any given point to its nearest neighbors. The pattern emerges from these distances, creating a cellular structure where each cell represents the area closest to a specific feature point.

The algorithm searches a small neighborhood around each point (typically 3x3x3 cells) to find the closest and second-closest feature points, then computes a value based on their distances.

### Inputs

* **Seed**: Sets the random seed for reproducible noise patterns
* **Position**: The input position in world space where the noise is sampled
* **Scale**: Controls the overall size of the cellular pattern
* **Jitter**: Adjusts randomness in feature point placement (0 = regular grid, 1 = maximum randomness)

### Outputs

* **Noise Value**: The resulting scalar value from the noise calculation
* **Noise Pins**: Output pins for connecting to other noise sampling nodes

### Configuration

***

#### General

**Distance Function**

_Controls how distance is calculated between points._

This affects the shape and smoothness of the cellular pattern:

* **Euclidean**: Standard straight-line distance (smoothest)
* **Euclidean Squared**: Faster approximation using squared distances
* **Manhattan**: Taxicab distance (creates more angular patterns)
* **Chebyshev**: Maximum coordinate difference (creates square-like cells)

**Return Type**

_Controls what value is returned from the noise calculation._

Each option gives a different visual result:

* **F1 (Closest)**: Distance to the nearest feature point (most common)
* **F2 (Second Closest)**: Distance to the second-nearest feature point
* **F2 - F1 (Edge Detection)**: Difference between first and second distances — highlights cell boundaries
* **F1 + F2**: Sum of both distances — creates smoother transitions
* **F1 \* F2**: Product of both distances — can emphasize or de-emphasize certain areas
* **Cell Value**: Returns a hash-based value specific to the cell (useful for texture variation)

**Jitter**

_Controls randomness in feature point placement._

A value of 0 creates a regular grid, while 1 introduces maximum randomness:

* **0.0**: Regular grid with sharp, defined cells
* **0.5**: Balanced randomness and structure
* **1.0**: Highly randomized cell patterns

### Usage Example

Use this factory to create terrain features like:

* Stone or rock textures with natural-looking clumps
* Organic surface variations for foliage or terrain
* Cell-like structures such as cracked earth or honeycomb patterns

Connect it to a **Noise Sampling** node and set the sampling mode to "Value" to get scalar outputs. Combine multiple Worley noise sources using a **Noise Blend** node to create more complex patterns.

### Notes

* Higher jitter values produce more organic, less structured patterns
* Use **F2 - F1** return type for sharp edge detection between cells
* Combine with other noise types (like Perlin) for layered effects
* The noise is deterministic — same inputs will always produce the same output
* Lower resolution grids (fewer feature points) create larger, more distinct cells
