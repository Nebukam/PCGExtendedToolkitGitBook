---
icon: circle-dashed
---

# Noise : Perlin

{% hint style="warning" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Creates classic 3D Perlin gradient noise, a smooth, natural-looking noise pattern commonly used for terrain generation, displacement effects, and organic variations.

### Overview

This factory generates smooth, continuous noise values using the classic Perlin noise algorithm. It's ideal for creating natural-looking variations in procedural content such as terrain heightmaps, surface displacement, or organic patterns.

{% hint style="info" %}
Connects to **Noise** input pins on nodes that require procedural noise sampling
{% endhint %}

### How It Works

Perlin noise creates smooth transitions between random values by interpolating gradients at grid points. This produces natural-looking, organic patterns that are repeatable and deterministic based on position.

The noise is generated through:

1. Dividing 3D space into a grid of unit cubes
2. Assigning random gradient vectors to each corner of the cube
3. Computing dot products between gradient vectors and displacement vectors
4. Interpolating results using smoothstep curves for seamless transitions

### Inputs

* **Noise** (optional): Input noise to blend with this noise source
* **Seed** (optional): Random seed value for deterministic noise generation

### Outputs

* **Noise**: The generated noise value at the specified position

### Configuration

***

#### General

**Octaves**

_Controls how many layers of noise are combined._

Each octave adds finer detail to the noise pattern. Higher values create more complex, rougher textures.

* **1** (default): Single layer, smoothest result
* **4**: Adds significant detail and variation
* **8**: Very detailed, noisy appearance

**Lacunarity**

_Determines how quickly frequency increases between octaves._

Higher values increase the frequency of detail in each octave more rapidly.

* **2.0** (default): Standard progression
* **3.0**: Faster frequency increase, more high-frequency detail
* **1.5**: Slower frequency increase, smoother transitions

**Persistence**

_Control how much each octave contributes to the final result._

Controls amplitude decay between octaves. Lower values make higher octaves contribute less.

* **0.5** (default): Balanced contribution from all octaves
* **0.25**: Higher octaves contribute very little, smoother result
* **0.75**: Higher octaves contribute significantly, more texture detail

### Usage Example

Use this factory to create terrain height variation:

1. Connect to a **Noise** pin on a **Point Noise** node
2. Set Octaves to 4 for detailed terrain features
3. Set Lacunarity to 2.0 and Persistence to 0.5 for natural-looking hills
4. Use the output to drive point elevation or displacement

### Notes

* Perlin noise is deterministic; identical positions always produce identical values
* Higher octave counts increase computational cost
* Combine multiple noise factories using blend modes for complex patterns
* Commonly used with **Point Noise**, **Mesh Noise**, and **Attribute Noise** nodes
