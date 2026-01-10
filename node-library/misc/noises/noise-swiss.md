---
icon: circle-dashed
---

# Noise : Swiss

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Generates terrain-like noise with natural erosion patterns using derivative-based erosion.

#### How It Works

This subnode creates realistic terrain features by combining multiple layers of noise and applying erosion effects based on how quickly the noise values change in different directions. It starts with a base 3D noise function and calculates gradients at each point to determine where erosion should occur. Areas with steeper gradients (rapid changes in noise value) are eroded more intensely, forming valleys and channels that mimic natural weathering processes.

The process works in several steps:

1. Multiple layers of noise are stacked together to build complexity
2. For each point in space, the subnode calculates how quickly the noise value changes in all directions (the gradient)
3. These gradients guide where erosion occurs - steeper areas erode more
4. The amount of erosion is controlled by a strength parameter
5. A warping factor can subtly shift sampling points to add extra variation

This approach creates natural-looking terrain features like river channels, smooth slopes, and organic shapes that would be difficult to achieve manually.

#### Configuration

<details>

<summary><strong>Octaves</strong><br><em>Number of noise layers to combine.</em></summary>

Controls how many layers of noise are combined to produce the final result. More octaves add more detail and complexity but also increase computation cost.

**Values**:

* **1 to 16**: Number of noise layers

</details>

<details>

<summary><strong>Lacunarity</strong><br><em>Frequency multiplier between octaves.</em></summary>

Determines how much the frequency increases with each octave. Higher values create more detailed, fine-grained patterns.

**Values**:

* **1.0 to 4.0**: Frequency multiplier per octave

</details>

<details>

<summary><strong>Persistence</strong><br><em>Amplitude multiplier between octaves.</em></summary>

Controls how much each successive octave contributes to the final result. Lower values make higher octaves less influential.

**Values**:

* **0.0 to 1.0**: Amplitude multiplier per octave

</details>

<details>

<summary><strong>ErosionStrength</strong><br><em>How much derivatives affect erosion (0 = standard fBm).</em></summary>

Controls the intensity of the erosion effect. When set to 0, it behaves like standard fBm without erosion.

**Values**:

* **0.0 to 2.0**: Strength of the erosion effect

</details>

<details>

<summary><strong>WarpFactor</strong><br><em>Warp factor for derivative warping.</em></summary>

Controls how much the analytical derivatives influence the sampling position, adding subtle warping or distortion to the noise field.

**Values**:

* **0.0 to 1.0**: Amount of warping applied

</details>
