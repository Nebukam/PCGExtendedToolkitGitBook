---
icon: circle-dashed
---

# Noise : Swiss

{% hint style="info" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Creates procedural terrain-like noise with natural erosion patterns using derivative-based algorithms.

### Overview

This factory generates Swiss noise, a specialized form of fractal noise that simulates natural erosion features like river channels and canyon walls. It's ideal for creating realistic terrain variations, surface displacement, or organic-looking procedural patterns.

{% hint style="info" %}
Connects to **Noise** input pins on nodes that sample procedural values (e.g., **PCGEx Noise3D**, **PCGEx Displace Points**).
{% endhint %}

### How It Works

This noise factory uses a fractal algorithm enhanced with analytical derivatives to simulate erosion. It builds terrain-like features by:

1. Combining multiple noise octaves
2. Using derivative information to create natural-looking channels and ridges
3. Applying erosion strength to control how much the derivatives influence the final shape
4. Optionally warping the input space based on derivative directions

The result is a smooth, organic pattern that mimics real-world erosion processes.

### Configuration

***

#### General Settings

**Octaves**

_Controls the number of noise layers combined to create the final pattern._

More octaves add finer detail but increase computation cost. Typical values range from 4-8 for natural-looking terrain.

**Lacunarity**

_Determines how quickly frequency increases between octaves._

Higher values (2.0-4.0) create more angular, jagged features. Lower values (1.0-2.0) produce smoother transitions.

**Persistence**

_Control the amplitude decay between octaves._

Values near 0.5 create balanced detail across all frequencies. Lower values emphasize large-scale features, higher values add more fine detail.

**Erosion Strength**

_Controls how much derivative information affects the erosion pattern._

* **0.0**: Standard fractal noise (no erosion)
* **0.5**: Moderate erosion with natural-looking channels
* **1.0**: Strong erosion effects with deep channels

**Warp Factor**

_Adjusts how much the input space is warped based on derivatives._

* **0.0**: No warping (standard noise)
* **0.15**: Subtle warping for natural-looking variation
* **0.5**: Strong warping that distorts the pattern significantly

### Usage Example

Use this factory to create realistic terrain displacement for a mountainous landscape:

1. Connect the Swiss noise factory to a **PCGEx Noise3D** node
2. Set Octaves to 6, Lacunarity to 2.0, and Persistence to 0.5
3. Adjust Erosion Strength to 0.8 for natural-looking erosion channels
4. Use the output to displace points in a **PCGEx Displace Points** node
5. The result will be terrain with realistic river-like valleys and ridge formations

### Notes

* This noise is computationally more expensive than standard fractal noise due to derivative calculations
* Erosion effects are most visible at medium to high octave counts (6+)
* Combine multiple Swiss noise instances with different settings for complex terrain features
* The Warp Factor can be used to add subtle variation to otherwise smooth erosion patterns

### Inputs and Outputs

#### Inputs

* **Noise** (Optional): Input noise to modify with erosion effects

#### Outputs

* **Noise**: Generated Swiss noise with erosion patterns applied
