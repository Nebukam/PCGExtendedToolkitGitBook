---
icon: circle-dashed
---

# Noise : Perlin

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Generates classic Perlin gradient noise for procedural content.

#### How It Works

This subnode creates smooth, natural-looking variations by using a modified version of Ken Perlin's classic algorithm. It works by:

1. Dividing 3D space into a grid of cubes
2. Assigning random gradient vectors to each corner of the cube containing a point
3. Calculating dot products between vectors from each corner to the sample point and the assigned gradients
4. Interpolating these values using smoothstep curves for seamless transitions
5. Combining multiple layers of noise with varying frequencies and amplitudes

The result is a continuous function that produces smooth, organic variations across space. This makes it perfect for creating natural-looking patterns in terrain, vegetation, or any effect requiring subtle variation.

#### Configuration

<details>

<summary><strong>Octaves</strong><br><em>Number of noise layers to combine.</em></summary>

Controls how many times the noise function is applied at different frequencies and amplitudes. Higher values create more detailed patterns but increase computation cost.

**Values**:

* **1**: Single octave (smoothest)
* **4**: Four octaves (more complex)
* **8**: Eight octaves (high detail)

</details>

<details>

<summary><strong>Lacunarity</strong><br><em>Frequency multiplier between octaves.</em></summary>

Determines how quickly the frequency increases with each octave. Higher values create more intricate patterns but may introduce artifacts if too high.

**Values**:

* **1.0**: No change in frequency
* **2.0**: Doubling of frequency per octave (standard)
* **4.0**: Quadrupling of frequency per octave

</details>

<details>

<summary><strong>Persistence</strong><br><em>Amplitude multiplier between octaves.</em></summary>

Controls how much each octave contributes to the final result. Lower values make higher octaves less influential, resulting in smoother noise.

**Values**:

* **0.0**: No contribution from higher octaves
* **0.5**: Standard persistence (default)
* **1.0**: Full amplitude for all octaves

</details>

#### Usage Example

Use this subnode to add natural variation to point placement or scalar attributes. For example, connect it to a "Noise" input pin on a "Point Scatter" node to vary the density of scattered points across space, or use it with a "Scalar Operation" node to modulate point scale based on noise values.

#### Notes

* Perlin noise is deterministic; identical inputs will always produce identical outputs
* Multi-octave settings can significantly impact performance
* Values outside the typical range (0-1) may be clamped depending on downstream usage
* Combine with other noise subnodes using blend modes for complex procedural effects
