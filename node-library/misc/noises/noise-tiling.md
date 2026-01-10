---
icon: circle-dashed
---

# Noise : Tiling

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Generates seamless, tileable noise patterns using periodic hashing and fractal techniques.

#### How It Works

This subnode creates repeatable noise patterns that seamlessly connect at their edges. It uses a combination of fractal noise and periodic wrapping techniques to ensure that when the pattern is repeated, there are no visible seams or discontinuities.

The process begins with a base noise function, typically gradient noise, which produces smooth variations in values. To make this noise tileable, the subnode wraps the input coordinates using modulo arithmetic based on specified tile periods for each axis. This wrapping ensures that the noise values at the edges of a tile match exactly with the values at the corresponding edges of adjacent tiles.

For multi-octave noise, multiple layers are combined with different frequencies and amplitudes. Each octave uses its own periodic wrapping to maintain consistency across all noise layers, resulting in a complex but seamless pattern.

{% hint style="info" %}
Connects to **Noise** pins on processing nodes that accept procedural noise data.
{% endhint %}

#### Configuration

<details>

<summary><strong>Octaves</strong><br><em>Number of noise layers to combine.</em></summary>

Controls how many layers of noise are combined to create the final output. More octaves add more detail and complexity, but also increase computation cost.

**Values**:

* **1**: Single layer noise
* **4**: Standard fractal noise with good detail
* **8**: High-detail fractal noise

</details>

<details>

<summary><strong>Lacunarity</strong><br><em>Frequency multiplier between octaves.</em></summary>

Controls how quickly the frequency increases with each octave. Higher values create more rapid changes in pattern, while lower values produce smoother transitions.

**Values**:

* **1.0**: No change in frequency
* **2.0**: Doubling of frequency per octave (standard)
* **4.0**: Quadrupling of frequency per octave

</details>

<details>

<summary><strong>Persistence</strong><br><em>Amplitude multiplier between octaves.</em></summary>

Controls how much each octave contributes to the final result. Lower values make higher-frequency layers less influential, resulting in smoother patterns.

**Values**:

* **0.0**: No contribution from higher octaves
* **0.5**: Standard persistence (halved amplitude per octave)
* **1.0**: Full amplitude (no attenuation)

</details>

<details>

<summary><strong>PeriodX</strong><br><em>Tile period on X axis.</em></summary>

Defines how many units along the X-axis before the pattern repeats. Smaller values create more frequent tiling, while larger values extend the tile size.

**Values**:

* **1**: Minimum tile size
* **4**: Standard tile size
* **256**: Very large tile

</details>

<details>

<summary><strong>PeriodY</strong><br><em>Tile period on Y axis.</em></summary>

Defines how many units along the Y-axis before the pattern repeats. Controls horizontal tiling behavior.

**Values**:

* **1**: Minimum tile size
* **4**: Standard tile size
* **256**: Very large tile

</details>

<details>

<summary><strong>PeriodZ</strong><br><em>Tile period on Z axis.</em></summary>

Defines how many units along the Z-axis before the pattern repeats. Controls vertical tiling behavior.

**Values**:

* **1**: Minimum tile size
* **4**: Standard tile size
* **256**: Very large tile

</details>

#### Usage Example

Create a seamless terrain texture by using this subnode to generate height values for a landscape. Set PeriodX and PeriodY to 8 to create an 8x8 unit tile pattern, then use the output to drive a material's height map. This ensures that when multiple tiles are placed next to each other, there are no visible seams at the edges.

#### Notes

* The noise is designed to be perfectly seamless along all three axes
* Higher octaves increase computation time significantly
* Use larger period values for less frequent tiling patterns
* Combine with other noise subnodes using blend modes for complex effects
