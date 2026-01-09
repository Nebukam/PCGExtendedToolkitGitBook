---
icon: circle-dashed
---

# Noise : Marble

{% hint style="info" %}
### AI-generated page -- to be reviewed

While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Creates procedural marble-like patterns with veined structures and turbulence distortion.

### Overview

This factory generates 3D noise that produces veined, marble-like patterns by combining sine wave oscillations with turbulent distortion. The result is a natural-looking pattern that can simulate stone textures, wood grain, or geological formations.

{% hint style="info" %}
Connects to **Noise** input pins on nodes that sample procedural values
{% endhint %}

### How It Works

The marble noise factory creates patterns by:

1. Generating a base sine wave pattern along a specified axis
2. Applying turbulent distortion to create organic, flowing veins
3. Combining the base pattern with distortion to produce natural-looking veining

The pattern is generated in 3D space and can be sampled at any point to get a scalar value representing the "marble-ness" at that location.

### Inputs

* **Noise** (Input): Connects to other noise generation nodes to build complex patterns
* **Seed** (Input): Controls the randomness of the pattern generation

### Outputs

* **Noise** (Output): Provides the generated marble pattern for use in other nodes

### Configuration

***

#### General

**Direction**

_Controls the primary axis along which veins are oriented._

* **X Axis**: Veins run horizontally (left to right)
* **Y Axis**: Veins run vertically (top to bottom)
* **Z Axis**: Veins run depth-wise (front to back)
* **Radial**: Veins radiate outward from a central point

**Vein Frequency**

_Control the density of veins in the pattern._

Higher values create more frequent, tighter veins. For example:

* Value of 2.0: Sparse, wide veins
* Value of 10.0: Dense, fine veins

**Turbulence Strength**

_Control how much the veins are distorted._

Values between 0.0 and 5.0:

* 0.0: No distortion, clean sine waves
* 1.0: Gentle, natural-looking distortion
* 3.0+: More chaotic, irregular veining

**Turbulence Octaves**

_Control the complexity of turbulence._

Higher values create more detailed, complex distortion patterns:

* 1 octave: Simple, smooth distortion
* 4 octaves: Rich, organic-looking veining
* 8 octaves: Very detailed, noisy patterns

**Vein Sharpness**

_Control how defined vein edges are._

Values between 1.0 and 8.0:

* 1.0: Soft, gradual transitions between veins
* 4.0: Medium definition
* 8.0+: Very sharp, well-defined veins

### Usage Example

Use this factory to create a marble texture effect on a mesh:

1. Connect the Marble noise factory to a **Noise** input pin
2. Use it with a **Sample Noise** node to generate values for material parameters
3. Set Direction to **X Axis** for horizontal veining
4. Set Vein Frequency to **5.0** for balanced density
5. Set Turbulence Strength to **1.0** for natural-looking distortion
6. Connect the output to a **Material Parameter Collection** or **Scalar Parameter** node

This creates a procedural marble pattern that can be used for:

* Stone textures
* Wood grain effects
* Geological surface variations
* Stylized artistic patterns

### Notes

* The noise is most effective when combined with other noise sources using blending operations
* Lower Vein Frequency values work well with higher Turbulence Strength for dramatic veining
* Radial direction creates circular patterns that are great for simulating rings or growth patterns
* Combine with **Remap Curve** to adjust the distribution of values for more control over contrast and range
