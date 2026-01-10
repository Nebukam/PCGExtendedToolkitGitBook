---
icon: circle-dashed
---

# Noise : Flow

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Flow noise generates time-coherent animated patterns using smoothly rotating gradients.

#### How It Works

This subnode creates animated noise patterns by rotating gradients over time. Instead of using random noise values, it uses a system where each point has its own unique rotation rate. These rates are determined by the point's position and then scaled by the Rotation Speed setting. As time passes, these gradients rotate in the XY plane, creating smooth, flowing motion. The result is a continuous pattern that feels natural and organic, like water flowing or clouds drifting across the sky.

#### Configuration

<details>

<summary><strong>Octaves</strong><br><em>Number of noise layers to combine.</em></summary>

Controls how many layers of noise are combined. Each octave adds more detail and complexity to the pattern. Higher values create more intricate, noisy results.

**Values**:

* **1**: Single layer noise
* **4**: Four-layer noise with increased complexity
* **8**: Eight-layer noise for highly detailed patterns

</details>

<details>

<summary><strong>Lacunarity</strong><br><em>Spacing between noise frequencies.</em></summary>

Controls how quickly the frequency of noise increases with each octave. Higher values create more rapid changes in pattern detail.

**Values**:

* **1.0**: Minimal spacing between octaves
* **2.0**: Standard spacing (default)
* **4.0**: Fast spacing for sharp transitions

</details>

<details>

<summary><strong>Persistence</strong><br><em>Amplitude of each noise octave.</em></summary>

Controls how much each successive octave contributes to the final pattern. Lower values reduce the influence of higher-frequency details.

**Values**:

* **0.0**: No contribution from higher octaves
* **0.5**: Balanced contribution (default)
* **1.0**: Full contribution from all octaves

</details>

<details>

<summary><strong>Time</strong><br><em>Time parameter for animation.</em></summary>

Controls the time value used to animate the noise pattern. Increasing this value moves the animation forward through time.

**Values**:

* **0.0**: Start of animation
* **1.0**: One unit of time forward
* **Any number**: Custom time progression

</details>

<details>

<summary><strong>RotationSpeed</strong><br><em>Rotation speed of gradients.</em></summary>

Controls how fast the noise gradients rotate over time, affecting the motion and flow of the pattern.

**Values**:

* **0.0**: No rotation (static pattern)
* **1.0**: Standard rotation speed (default)
* **10.0**: Very fast rotation for dramatic motion

</details>
