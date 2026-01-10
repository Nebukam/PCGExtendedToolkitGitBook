---
icon: circle-dashed
---

# Noise : Caustic

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Simulates light patterns refracted through water, creating caustic effects.

#### How It Works

This subnode generates procedural noise that mimics the complex light refraction patterns seen beneath water surfaces, known as caustics. It does this by layering multiple sine wave patterns that move in different directions across 3D space. Each layer contributes to the overall pattern with its own angle and timing, creating overlapping waves that produce intricate, organic light behaviors.

The process works like this:

1. For each point in 3D space, it calculates projections along several directions
2. Each direction uses a unique angle offset to create overlapping wave patterns
3. Each wave layer applies two sine functions with different wavelengths and phases
4. These layered patterns are combined using a weighted average to produce the final noise value
5. The result is then modulated by intensity and focus parameters to enhance focal points

The animation effect comes from advancing time across all layers, creating shifting light patterns over time.

#### Configuration

<details>

<summary><strong>WaveLayers</strong><br><em>Number of overlapping wave layers.</em></summary>

Controls how many sine wave patterns are layered together to create complexity. Higher numbers produce more intricate, detailed patterns but may increase computational cost.

**Values**:

* **1**: Single wave pattern
* **3**: Standard caustic complexity
* **8**: Maximum detail

</details>

<details>

<summary><strong>Wavelength</strong><br><em>Base wavelength of the sine waves.</em></summary>

Controls the spacing between light and dark bands in the caustic pattern. Smaller values create finer details, while larger values produce broader, smoother patterns.

**Values**:

* **0.1**: Very fine detail
* **1.0**: Standard scale
* **10.0**: Broad, smooth waves

</details>

<details>

<summary><strong>Time</strong><br><em>Time parameter for animation.</em></summary>

Sets the base time value for animation. When set to 0, the pattern is static. Higher values animate the noise over time.

**Values**:

* **0.0**: Static pattern
* **1.0**: One second of animation
* **Any positive number**: Custom time offset

</details>

<details>

<summary><strong>AnimationSpeed</strong><br><em>How fast the animation progresses.</em></summary>

Controls how quickly the noise pattern evolves over time. Higher values make the caustics move faster.

**Values**:

* **0.0**: No animation
* **1.0**: Normal speed
* **5.0**: Fast motion

</details>

<details>

<summary><strong>Intensity</strong><br><em>Caustic intensity (creates bright focal points).</em></summary>

Controls how strong the bright focal points are in the pattern. Higher values create more pronounced highlights.

**Values**:

* **0.5**: Subtle caustics
* **2.0**: Standard intensity
* **4.0**: Very bright focal points

</details>

<details>

<summary><strong>Focus</strong><br><em>Focus sharpness (higher = brighter focal points).</em></summary>

Controls how sharp and concentrated the bright spots are in the pattern. Higher values create more defined, intense focal points.

**Values**:

* **1.0**: Soft focus
* **2.0**: Standard focus
* **8.0**: Very sharp focal points

</details>

#### Usage Example

Use this subnode to animate underwater lighting effects on a water surface. Connect it to a material's scalar parameter and use the output to control emission or opacity. Set Time to a variable that updates each frame, and AnimationSpeed to 0.5 to create slow-moving light patterns.

#### Notes

* The noise is deterministic, meaning identical inputs will always produce identical outputs
* For best results, combine multiple noise sources with different settings for more complex effects
* Performance scales linearly with WaveLayers; use lower values for real-time applications
* The output is normalized to a range suitable for most material parameters
