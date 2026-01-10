---
icon: circle-dashed
---

# Noise : Marble

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Generates marble-like veined patterns with turbulence distortion.

#### How It Works

This subnode creates natural-looking veining by combining a base sine wave pattern with turbulent noise distortion. The process begins with a sine wave aligned to a chosen axis (X, Y, Z, or radial), which defines the basic direction and spacing of the veins. This base pattern is then distorted using multi-octave turbulence to simulate organic flow and variation found in real marble. The sharpness parameter controls how defined the vein edges appear, allowing for soft transitions or crisp, well-defined lines. The result is a procedural noise value that represents the marble pattern, where higher values indicate vein areas.

#### Configuration

<details>

<summary><strong>Direction</strong><br><em>Direction of marble veins.</em></summary>

Controls which axis the base sine wave is aligned to.

**Values**:

* **X**: Veins run along the X-axis
* **Y**: Veins run along the Y-axis
* **Z**: Veins run along the Z-axis
* **Radial**: Veins radiate from a central point

</details>

<details>

<summary><strong>VeinFrequency</strong><br><em>Frequency of the sine wave creating veins.</em></summary>

Controls how closely spaced the veins are. Higher values create more frequent, finer veining.

Range: 0.1 to 20.0 Default: 5.0

</details>

<details>

<summary><strong>TurbulenceStrength</strong><br><em>Strength of turbulence distortion.</em></summary>

Controls how much the veins are distorted by turbulent noise. Higher values create more organic, flowing patterns.

Range: 0.0 to 5.0 Default: 1.0

</details>

<details>

<summary><strong>TurbulenceOctaves</strong><br><em>Number of turbulence octaves.</em></summary>

Controls the complexity of the turbulence distortion. More octaves create more detailed, rougher patterns.

Range: 1 to 8 Default: 4

</details>

<details>

<summary><strong>VeinSharpness</strong><br><em>Sharpness of vein edges (1 = soft, higher = sharper).</em></summary>

Controls how defined the vein edges appear. Lower values create softer transitions between veins and background, while higher values create crisp, well-defined veins.

Range: 1.0 to 8.0 Default: 1.0

</details>
