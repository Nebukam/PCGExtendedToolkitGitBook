---
icon: circle-dashed
---

# Noise : Value

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the subnode does, but still needs to be proofread by a human.
{% endhint %}

> Generates procedural noise using interpolated random values at grid points.

#### How It Works

This subnode creates noise by assigning random scalar values to points on a 3D grid. For any given position in space, it identifies the surrounding grid points and interpolates between their assigned values to produce a smooth output.

The process works as follows:

1. It determines which grid cell the input position falls into.
2. It retrieves the random values at the 8 corners of that cell.
3. It interpolates these values using a smoothstep function to generate a continuous value.
4. For multi-octave noise, it combines multiple layers of noise at different frequencies and amplitudes.

The resulting noise pattern is smooth but retains a "blocky" character due to the interpolation between discrete values, making it distinct from gradient noise which uses vector gradients for smoother transitions.

#### Configuration

<details>

<summary><strong>Octaves</strong><br><em>Number of noise layers to combine.</em></summary>

Controls how many layers of noise are combined to create the final output. Each octave adds finer detail and complexity.

* **Range**: 1 to 16
* **Default**: 1

Higher values produce more detailed patterns but increase computation cost.

</details>

<details>

<summary><strong>Lacunarity</strong><br><em>Frequency multiplier between octaves.</em></summary>

Determines how quickly the frequency increases with each octave. A higher lacunarity creates more rapid changes in detail.

* **Range**: 1.0 to 4.0
* **Default**: 2.0

Typical values range from 1.5 to 3.0 for natural-looking results.

</details>

<details>

<summary><strong>Persistence</strong><br><em>Amplitude multiplier between octaves.</em></summary>

Controls how much each octave contributes to the final result. Lower persistence values reduce the influence of higher-frequency layers.

* **Range**: 0.0 to 1.0
* **Default**: 0.5

Values near 0.5 are common for balanced multi-octave noise.

</details>

#### Usage Example

Use this subnode to create terrain heightmaps where you want smooth but not overly refined noise. For example, set Octaves to 4, Lacunarity to 2.0, and Persistence to 0.5 to generate a natural-looking elevation pattern with both large-scale features and fine details.

#### Notes

Value noise is computationally efficient compared to gradient noise, making it suitable for real-time applications or when performance is a concern. However, its blocky nature may not be ideal for smooth surfaces like water or clouds where gradient noise would produce better results.
