---
icon: circle-dashed
---

# Noise : Simplex

{% hint style="info" %}
### AI-generated page -- to be reviewed

While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Creates procedural gradient noise using Ken Perlin's improved simplex algorithm. This noise type produces smooth, natural-looking variations that are efficient to compute.

### Overview

This factory generates 3D gradient noise values for use in procedural content generation. It's designed to create organic patterns like terrain heightmaps, displacement effects, or surface variations.

{% hint style="info" %}
Connects to **Noise** input pins on nodes that require procedural noise sampling
{% endhint %}

### How It Works

Simplex noise is an improvement over classic Perlin noise that produces smoother transitions with lower computational cost. It generates continuous noise values that vary gradually across 3D space, making it ideal for creating natural-looking patterns.

The algorithm uses a combination of octaves (layers) to build complexity:

* Each octave adds finer detail
* Lacunarity controls how much frequency increases per octave
* Persistence controls how much amplitude decreases per octave

### Configuration

***

#### General

**Octaves**

_Number of noise layers to combine._

Controls the level of detail in the noise pattern. More octaves create more complex, detailed patterns.

* **1** - Smooth, simple noise (good for large-scale variations)
* **4** - Medium complexity (good for terrain features)
* **8** - High detail (good for fine surface textures)

**Lacunarity**

_Frequency multiplier per octave._

Controls how quickly the frequency increases between octaves. Higher values create more rapid changes in pattern detail.

* **2.0** - Standard progression (default)
* **1.5** - Slower frequency increase (smoother transitions)
* **4.0** - Fast frequency increase (more chaotic patterns)

**Persistence**

_Amplitude multiplier per octave._

Controls how much each octave contributes to the final result. Lower values make higher octaves less influential.

* **0.5** - Standard persistence (default)
* **0.25** - Subtle high-frequency details
* **0.75** - Stronger high-frequency components

### Usage Example

Use this noise factory to create terrain heightmaps by connecting it to a **Noise** pin on a **Point** or **Mesh** node. For example:

1. Connect the Noise : Simplex factory to a **Noise** input
2. Set Octaves to 6 for detailed terrain features
3. Set Lacunarity to 2.0 and Persistence to 0.5 for natural-looking variation
4. Use the output to drive height or displacement properties

### Notes

* Simplex noise is ideal for creating organic, natural-looking patterns
* Combine multiple noise sources using different blend modes for complex effects
* Lower octave counts work well for large-scale features like continents or terrain baselines
* Higher octave counts are better for fine details like surface textures or small-scale variations

### Inputs

* **Noise** - Input pin for connecting to nodes that require procedural noise sampling

### Outputs

* **Noise** - Output pin that provides the generated noise values for use in downstream nodes
