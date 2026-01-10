---
icon: circle-dashed
---

# Noise : Simplex

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Generates high-quality, efficient gradient noise using Ken Perlin's Simplex algorithm.

#### How It Works

This subnode creates a noise operation based on Ken Perlin's Simplex algorithm. The algorithm works by:

1. Creating a grid of random gradients at lattice points in 3D space
2. For each input point, determining which grid cells it lies between
3. Computing the contribution from each corner of the surrounding cell
4. Combining these contributions using smooth interpolation

The fractal nature is achieved through multiple octaves:

* Each octave increases frequency (Lacunarity) and decreases amplitude (Persistence)
* The final value is a weighted sum of all octaves
* This creates natural-looking terrain-like patterns with fine detail

The noise pattern is continuous and differentiable, meaning there are no sharp transitions or artifacts in the output.

#### Configuration

<details>

<summary><strong>Octaves</strong><br><em>Number of fractal octaves.</em></summary>

Controls how many layers of noise are combined. Each octave adds finer detail to the pattern. Higher values create more complex, detailed patterns but require more computation.

**Range:** 1 to 16

</details>

<details>

<summary><strong>Lacunarity</strong><br><em>Frequency multiplier per octave.</em></summary>

Controls how much the frequency increases with each octave. Higher values create more "zoomed-in" patterns. A value of 2.0 doubles the frequency at each octave.

**Range:** 1.0 to 4.0

</details>

<details>

<summary><strong>Persistence</strong><br><em>Amplitude multiplier per octave.</em></summary>

Controls how much each octave contributes to the final result. Lower values make higher octaves less influential. A value of 0.5 halves the amplitude at each octave.

**Range:** 0.0 to 1.0

</details>

#### Usage Example

Use this subnode to create terrain variation:

1. Connect it to a "Noise" pin on a node like "Point Noise"
2. Set Octaves to 4 for detailed terrain features
3. Set Lacunarity to 2.0 and Persistence to 0.5 for natural-looking hills and valleys
4. Sample the noise at point locations to drive height or color variation

#### Notes

* Simplex noise produces continuous, smooth results with no visible grid artifacts
* Higher octave counts create more complex patterns but may impact performance
* The combination of Lacunarity and Persistence controls the balance between large-scale and fine-scale features
* This noise type is particularly effective for creating natural-looking terrain or organic textures
