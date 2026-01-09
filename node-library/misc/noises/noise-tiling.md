---
icon: circle-dashed
---

# Noise : Tiling

{% hint style="warning" %}
## AI-generated page - To be reviewed. 
While not 100% accurante, it should properly capture what it does. It stills needs to be reviewed and proofread by a human.
{% endhint %}

> Creates seamless, tileable gradient noise patterns that can repeat without visible seams.

### Overview

This factory generates fractal noise that is designed to tile seamlessly in 3D space. It's particularly useful when you need to create repeating patterns that look natural and continuous across boundaries, such as textures for terrain, backgrounds, or materials.

{% hint style="info" %}
Connects to **Noise** input pins on nodes like **Noise Sample**, **Noise Blend**, or **Noise Remap**.
{% endhint %}

### How It Works

The tiling noise algorithm uses a hash-based gradient noise approach that wraps coordinates at specified periods along each axis. This ensures that when the noise pattern repeats, it matches perfectly at the edges, creating seamless transitions.

The fractal behavior is achieved through multiple layers (octaves) of noise with varying frequencies and amplitudes, controlled by lacunarity and persistence parameters.

### Inputs

* **Noise** - Output pin for connecting to other noise processing nodes

### Outputs

* **Noise** - Generated tileable noise pattern that can be used for various procedural effects

### Configuration

***

#### General

**Octaves**

_Controls how many layers of noise are combined._

Higher values create more detailed patterns but increase computation cost.\
**Default:** 1\
**Range:** 1 to 16

**Lacunarity**

_Determines the frequency multiplier between octaves._

Higher values increase the frequency of detail in each octave.\
**Default:** 2.0\
**Range:** 1.0 to 4.0

**Persistence**

_Control the amplitude multiplier between octaves._

Controls how much each octave contributes to the final result. Lower values make higher octaves less influential.\
**Default:** 0.5\
**Range:** 0.0 to 1.0

***

#### Tiling

**Period X**

_Specifies the tile period along the X axis._

The noise pattern repeats every N units along the X axis, where N is this value.\
**Default:** 4\
**Range:** 1 to 256

**Period Y**

_Specifies the tile period along the Y axis._

The noise pattern repeats every N units along the Y axis, where N is this value.\
**Default:** 4\
**Range:** 1 to 256

**Period Z**

_Specifies the tile period along the Z axis._

The noise pattern repeats every N units along the Z axis, where N is this value.\
**Default:** 4\
**Range:** 1 to 256

### Usage Example

Use this factory to create seamless terrain textures or repeating material patterns.

1. Place a **Noise : Tiling** node in your graph
2. Connect it to the **Noise** input of a **Noise Sample** node
3. Adjust Period X/Y/Z to control how often the pattern repeats
4. Use the output to drive texture coordinates or scalar values for material variation

This setup will generate a seamless, tileable noise pattern that can be used as a base for terrain heightmaps or procedural textures.

### Notes

* The Period settings define how far apart the repeating patterns are
* Lower period values create coarser, more obvious repeats
* Higher period values produce finer, less noticeable tiling
* Combine multiple tiling noise sources with different periods to create complex, seamless patterns
* Tiling noise works best when used in 3D space for texture generation or terrain displacement
