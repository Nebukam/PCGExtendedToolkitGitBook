---
icon: circle-dashed
---

# Noise : Caustic

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Caustic noise generates procedural patterns that simulate light refraction through water, creating dynamic, organic light effects.

### Overview

This factory produces 3D noise that mimics the complex light patterns created by sunlight refracting through water surfaces. It's designed to create underwater lighting effects, magical illumination, or sci-fi energy patterns.

{% hint style="info" %}
Connects to **Noise** input pins on nodes that sample procedural values (like Noise Sampling, Displacement, or Material Parameter nodes).
{% endhint %}

### How It Works

The caustic noise creates overlapping wave patterns in 3D space. Each wave layer contributes to the final pattern with different angles and phases, producing complex, organic light distributions. The result features bright focal points that move over time when animated.

### Inputs

* **Noise** (Input pin): Connects to nodes that sample procedural values
* **Time** (Input pin, optional): Sets the animation time offset for motion
* **Animation Speed** (Input pin, optional): Controls how fast the caustic pattern moves

### Outputs

* **Noise** (Output pin): Provides the generated caustic noise pattern

### Configuration

***

#### General Settings

**Wave Layers**

_Controls how many overlapping wave patterns are used._

More layers create more complex, detailed patterns. Values between 2-5 typically produce good results for most applications.

**Wavelength**

_Determines the spacing between light and dark bands._

Smaller values (0.1-0.5) create fine detail with many bright spots. Larger values (2-5) produce broader, smoother patterns.

**Time**

_Sets the animation time offset for motion._

Use this to animate the pattern over time. Set to 0 for static patterns.

**Animation Speed**

_Control how fast the caustic pattern moves._

Higher values create faster motion. Values between 0.5-2.0 work well for subtle movement.

**Intensity**

_Adjusts overall brightness of the light pattern._

Higher values make the bright focal points more prominent. Values between 1.5-3.0 typically look good.

**Focus**

_Controls sharpness of the bright focal points._

Higher values create sharper, more intense highlights. Lower values produce softer, more diffused patterns.

### Usage Example

Use this factory to create underwater lighting effects on a water surface:

1. Connect the Caustic noise factory to a Noise Sampling node
2. Set Time to a variable or use the Time parameter from your graph
3. Apply the output to a material's light intensity or color
4. Animate the Time value over time for dynamic underwater lighting

### Notes

* The pattern is inherently 3D, so it works best on surfaces that are oriented in 3D space
* Combine multiple noise sources using different blend modes for more complex effects
* Lower Focus values with higher Intensity create dramatic, spotlight-like patterns
* For static effects, set Time to 0 and Animation Speed to 0
* This noise is particularly effective for creating magical or sci-fi energy patterns
