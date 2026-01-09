---
icon: circle-dashed
---

# Noise : Flow

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Creates time-coherent animated noise patterns with smoothly rotating gradients. Ideal for creating flowing, dynamic effects like clouds, water, smoke, or fire.

### Overview

This factory generates procedural noise that evolves smoothly over time with rotating gradient directions. Unlike standard noise where gradients change randomly, this noise maintains temporal coherence by rotating gradients in a predictable way.

{% hint style="info" %}
Connects to **Noise** input pins on nodes that sample 3D noise values.
{% endhint %}

### How It Works

Instead of using fixed or randomly changing gradient directions, this noise generator rotates the gradient vectors over time. This creates smooth, coherent animations where patterns flow in a consistent direction rather than appearing chaotic.

The rotation speed is determined by a per-cell random factor that's consistent over time, ensuring that each location in space has a unique but stable rotational behavior.

### Configuration

***

#### General Settings

**Octaves**

_Controls the number of noise layers combined to create the final pattern._

Higher values add more detail and complexity. Typical values range from 1 to 8.

**Lacunarity**

_Determines the frequency multiplier between octaves._

A value of 2.0 doubles the frequency with each octave. Higher values create more intricate patterns.

**Persistence**

_Control the amplitude multiplier between octaves._

Controls how much each octave contributes to the final result. Values typically range from 0.1 to 1.0.

**Time**

_Sets the time parameter for animation._

This value advances over time to create animated effects. Use a time source node or increment this manually for looping animations.

**Rotation Speed**

_Control how fast gradients rotate over time._

Values from 0.0 (no rotation) to 10.0 (very fast rotation). Higher values create more dynamic, turbulent motion.

### Inputs

* **Noise** - Input pin that accepts noise data for sampling
* **Time** - Time parameter used to animate the noise pattern over time

### Outputs

* **Noise** - Output pin that provides the generated noise pattern

### Usage Example

Create animated cloud formations by connecting this factory to a **Noise** input pin on a **Sample Points** node. Set the Time parameter to increment over time using a **Time** node or similar. Adjust Octaves to 4-6 for detailed cloud structures and Rotation Speed to 0.5-2.0 for natural-looking flow.

### Notes

* Best used with time-based animation where the Time parameter is incremented
* Lower octaves create large-scale patterns, higher octaves add fine detail
* Rotation speed controls how quickly features move through space
* Good for simulating fluid dynamics like water or smoke
* Combine multiple noise sources with different rotation speeds for complex motion effects
