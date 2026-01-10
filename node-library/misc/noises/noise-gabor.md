---
icon: circle-dashed
---

# Noise : Gabor

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Gabor noise creates directional and anisotropic patterns useful for simulating materials like wood grain, fabric weaves, or brushed metal.

#### How It Works

Gabor noise generates patterns by combining a wave-like structure with a localized envelope. Each point in space is influenced by small, directional elements that create repeating patterns with a specific orientation. The system uses a grid-based approach where each cell contains random impulses. These impulses are combined using mathematical functions to produce the final noise pattern.

The direction of the pattern is controlled by a vector that defines the primary orientation. A bandwidth parameter controls how sharp or diffuse the pattern appears — lower values create more defined, directional features, while higher values produce softer, more isotropic results.

#### Configuration

<details>

<summary><strong>Direction</strong><br><em>Direction of the Gabor kernel (will be normalized)</em></summary>

Controls the primary orientation of the noise pattern. For example:

* `(1,0,0)` creates horizontal stripes
* `(0,1,0)` creates vertical stripes
* `(0.707,0.707,0)` creates diagonal stripes at 45 degrees

</details>

<details>

<summary><strong>Bandwidth</strong><br><em>Bandwidth - controls how directional (lower = more directional)</em></summary>

Controls the sharpness of the pattern:

* Lower values (e.g., 0.1) create very directional, narrow-band patterns
* Higher values (e.g., 5.0) produce more isotropic, wide-band patterns

</details>

<details>

<summary><strong>ImpulsesPerCell</strong><br><em>Number of impulses per cell</em></summary>

Determines how many random impulses are generated per grid cell:

* Higher values increase pattern complexity and visual density
* Lower values (e.g., 1) produce sparse, single-directional patterns

</details>

<details>

<summary><strong>KernelRadius</strong><br><em>Kernel radius</em></summary>

Controls the spatial extent of each Gabor kernel:

* Larger values increase the influence area of each impulse
* Smaller values create more localized, sharp features

</details>

#### Usage Example

To simulate wood grain:

1. Create a Gabor noise subnode with `Direction` set to `(1,0,0)` for horizontal stripes.
2. Set `Bandwidth` to 0.5 for directional control.
3. Use the output to drive point scale or rotation in a mesh generator.
4. Combine multiple Gabor noise subnodes with different directions and weights to add complexity.

#### Notes

* Gabor noise is computationally more expensive than simple Perlin noise due to its kernel-based approach.
* For performance-critical graphs, consider reducing `ImpulsesPerCell` or `KernelRadius`.
* The pattern can be made more complex by stacking multiple Gabor noise subnodes with different directions and bandwidths.
