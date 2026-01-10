---
icon: circle-dashed
---

# Noise : FBM

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Generates fractal Brownian motion noise with multiple variants including ridged, billow, and warped.

#### How It Works

This subnode creates procedural noise by layering multiple noise samples at increasing frequencies and decreasing amplitudes. Each layer is called an octave, and the combination of these octaves produces a complex, natural-looking pattern.

The process starts with a base noise function (typically Perlin or Simplex) and then iteratively adds higher-frequency, lower-amplitude variations to create the fractal effect. The parameters control how many layers are combined, how quickly the frequency increases, and how much each layer contributes.

Different variants modify how these octaves are combined:

* **Standard**: Basic additive combination of noise values.
* **Ridged**: Inverts the noise values and applies a ridge offset to create sharp peaks.
* **Billow**: Takes absolute values of noise, creating smoother, cloud-like patterns.
* **Hybrid**: Combines standard and billow methods for mixed results.
* **Warped**: Distorts the input coordinates before sampling noise, creating spatial warping effects.

#### Configuration

<details>

<summary><strong>Octaves</strong><br><em>Number of noise layers to combine.</em></summary>

Controls how many times the noise is sampled at different frequencies. More octaves create more detailed patterns but may increase computation cost.

**Values**:

* **1 to 16**: Number of noise layers. Higher values produce more complex patterns.

</details>

<details>

<summary><strong>Lacunarity</strong><br><em>Frequency multiplier between octaves.</em></summary>

Determines how quickly the frequency increases with each octave. A value of 2 means each octave has twice the frequency of the previous one.

**Values**:

* **1.0 to 4.0**: Frequency growth factor per octave. Higher values create more fine details.

</details>

<details>

<summary><strong>Persistence</strong><br><em>Amplitude multiplier between octaves.</em></summary>

Controls how much each octave contributes to the final result. Lower values make higher-frequency layers less influential.

**Values**:

* **0.0 to 1.0**: Amplitude decay factor per octave. Lower values produce smoother results.

</details>

<details>

<summary><strong>Variant</strong><br><em>FBM variant.</em></summary>

Selects the method used to combine noise layers and modify their behavior.

**Values**:

* **Standard fBm**: Basic additive combination.
* **Ridged Multifractal**: Sharp ridges in the pattern.
* **Billow (Turbulence)**: Smooth, cloud-like appearance.
* **Hybrid Multifractal**: Mix of standard and billow.
* **Domain Warped**: Applies spatial distortion before noise sampling.

</details>

<details>

<summary><strong>RidgeOffset</strong><br><em>Ridge offset for ridged variant.</em></summary>

Adjusts the shape of ridges when using the Ridged variant. Affects how sharp or smooth the peaks appear.

**Values**:

* **0.0 to 2.0**: Ridge offset value. Higher values create sharper ridges.

</details>

<details>

<summary><strong>WarpStrength</strong><br><em>Warp strength for warped variant.</em></summary>

Controls how much the input coordinates are distorted when using the Warped variant. Affects the spatial warping effect.

**Values**:

* **0.0 to 2.0**: Strength of coordinate distortion. Higher values create more dramatic warping.

</details>
