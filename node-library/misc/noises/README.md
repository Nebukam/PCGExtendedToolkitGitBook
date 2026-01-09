---
icon: grid-round-2
---

# Noises

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Creates a single Noise3D computational node, to be used with nodes that support it.

### Overview

This factory generates a 3D noise pattern that can be sampled by other nodes in the PCG graph. It defines the parameters and behavior of a noise source, such as frequency, seed, and blending settings.

{% hint style="info" %}
Connects to **Noise** input pins on nodes that support 3D noise sampling.
{% endhint %}

### How It Works

The Noise3D Definition creates a procedural noise pattern in three-dimensional space. This pattern can be used to generate terrain features, texture variations, or any other procedural content that benefits from noise-based randomness. The noise is generated using mathematical algorithms that produce smooth, natural-looking variations.

### Inputs

* **Noise** - Input pin for connecting to nodes that support 3D noise sampling

### Outputs

* **Noise** - Output pin that provides the noise pattern for downstream processing

### Configuration

***

#### Settings

**Frequency**

_Sets how detailed the noise pattern is._

Higher values create more fine-grained patterns with more variation per unit of space. Lower values create smoother, larger-scale features. For example, a frequency of 0.01 creates large-scale terrain features, while 0.1 creates smaller details.

**Seed**

_Determines the starting point for the noise pattern._

All noise patterns with the same seed will produce identical results. This is useful for creating reproducible procedural content. Changing this value will create a completely different noise pattern.

**Blend Mode**

_Selects how this noise blends with others when combined._

* **Blend**: Standard blending where noise values are averaged or combined based on weights.
* **Multiply**: Multiplies noise values together, which can create more dramatic effects.
* **Add**: Adds noise values together, useful for layering multiple noise sources.

**Weight Factor**

_Scales the influence of this noise source._

This value multiplies the final noise output. A weight factor of 2 will double the noise intensity, while 0.5 will halve it. Useful when combining multiple noise sources to control their relative contributions.

**Invert**

_When enabled, flips the noise values from positive to negative and vice versa._

This can be used to create contrasting patterns or to invert the effect of other noise operations.

***

#### Weighting

**Use Local Curve**

_When enabled, uses the local remap curve instead of an external asset._

Controls whether to use a built-in curve editor or reference an external curve asset.

**Remap Curve**

_Selects the curve used to remap noise values._

This curve modifies how noise values are distributed. For example, using a steep S-curve can create more dramatic contrast in the output.

**Apply Transform**

_When enabled, applies a transformation to the input coordinates before sampling._

This allows you to scale, rotate, or translate the noise pattern in space.

**Transform**

_Configures the transformation applied to input coordinates._

Controls how the noise is transformed in 3D space. This can be used to create directional patterns or to stretch/rotate noise features.

***

#### Contrast

**Contrast**

_Adjusts the contrast of the noise output._

A value of 1.0 means no change. Values greater than 1 increase contrast (making peaks and valleys more extreme), while values less than 1 decrease contrast (smoothing out variations).

**Contrast Curve**

_Selects the curve type used for applying contrast adjustments._

* **Power**: Simple power-based curve that's predictable and easy to control.
* **S-Curve (Sigmoid)**: Smooth S-curve using tanh that never clips and provides natural-looking transitions.
* **Gain**: Attempt function S-curve that's symmetrical and subtle, good for fine-tuning contrast.

### Usage Example

To create a terrain with varied height:

1. Add a "Noise3D Definition" node to your graph
2. Set Frequency to 0.01 for large-scale terrain features
3. Set Seed to 42 for reproducible results
4. Connect this node to a "Noise3D Sample" node that will use the noise to drive point heights
5. Adjust Weight Factor and Blend Mode to combine with other noise sources for more complex terrain

### Notes

* Noise patterns are deterministic, meaning identical seed and frequency values will always produce the same result
* The Priority setting affects how multiple noise sources are ordered when blended together
* Use the Remap Curve to shape how noise values are distributed across the output range
* Contrast adjustments can dramatically change the appearance of noise without changing its fundamental pattern
* For best performance, keep the number of active noise definitions low in complex graphs
