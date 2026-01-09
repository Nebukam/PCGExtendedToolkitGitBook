---
icon: circle-dashed
---

# Noise : White

{% hint style="warning" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> White noise - fast, pure random.

### Overview

Creates a pure random noise pattern with no spatial correlation. This factory generates procedural scalar values that are completely uncorrelated between adjacent points in space, producing a grainy, static-like appearance.

{% hint style="info" %}
Connects to **Noise** input pins on nodes that require procedural value sampling
{% endhint %}

### How It Works

White noise produces random values at every point in 3D space without any smooth transitions or patterns. Each position generates an independent random value, making it ideal for adding high-frequency variation or creating static-like textures.

The output values are uniformly distributed between -1 and 1, with no predictable pattern or continuity between neighboring points.

### Configuration

***

#### General

**Weight Factor**

Controls how much this noise contributes when combined with other noise sources.

Higher values increase the influence of this noise in blended operations. For example, setting to 2.0 will double its contribution compared to a default weight of 1.0.

**Blend Mode**

How this noise combines with other noise sources when stacked.

* **Blend (Weighted Average)**: Smooth weighted average of all values
* **Add**: Adds all values together (clamped)
* **Multiply**: Multiplies all values
* **Min**: Takes the minimum value
* **Max**: Takes the maximum value
* **Subtract**: Subtracts subsequent values from first
* **Screen**: Screen blend operation
* **Overlay**: Overlay blend mode
* **Soft Light**: Soft light blend mode
* **First Valid**: Uses the first non-zero value

**Invert**

When enabled, inverts the noise output.

Flips all values from positive to negative and vice versa. A value of 0.5 becomes -0.5, and -0.8 becomes 0.8.

**Use Local Curve**

When enabled, remaps output values using a custom curve.

Allows you to shape the distribution of noise values for more control over the final appearance.

**Remap Curve**

Custom curve used to remap noise output when "Use Local Curve" is enabled.

Adjusts how the random values are distributed. For example, using a curve that peaks at 0.5 will produce more values near the center range.

### Usage Example

Create a white noise pattern to add grain to terrain displacement:

1. Place a **Noise : White** node in your graph
2. Connect it to a **PCGEx Noise Sample** node's Noise input
3. Use the sampled values as displacement on a grid or mesh
4. Set Weight Factor to 0.5 for subtle variation
5. Enable Invert if you want negative displacement

This creates a grainy, static-like texture that can be used for terrain roughness, material variations, or procedural scatter patterns.

### Notes

* White noise is computationally very fast since it doesn't require interpolation
* Due to its lack of spatial correlation, it's excellent for creating high-frequency variation
* Often used as a base layer in multi-layer noise setups for texture blending
* Values are uniformly distributed between -1 and 1, making it ideal for creating random offsets or variations

### Inputs

* **Noise** (Input pin): Connects to nodes that require procedural value sampling

### Outputs

* **Noise** (Output pin): Provides the generated white noise values for downstream processing
