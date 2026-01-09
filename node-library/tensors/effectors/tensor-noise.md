---
icon: circle-dashed
---

# Tensor : Noise

See [noises](../../misc/noises/ "mention")

{% hint style="warning" %}
## AI-generated page - To be reviewed. 
While not 100% accurante, it should properly capture what it does. It stills needs to be reviewed and proofread by a human.
{% endhint %}

> A tensor that uses 3D noises as direction.

### Overview

This node creates a tensor that samples 3D noise values to define directional influence. Instead of using fixed vectors, it generates dynamic directions based on noise functions, which can create organic, natural-looking patterns in procedural generation workflows. It's particularly useful for creating terrain features, vegetation placement, or any effect where you want smooth, flowing directional forces.

{% hint style="info" %}
The noise sampling is deterministic based on the input point's position, ensuring consistent results across runs.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input**: Points to sample the tensor from
* **Optional Secondary Input**: Additional data for tensor configuration (not required)

</details>

<details>

<summary>Outputs</summary>

* **Main Output**: Points with updated tensor directions based on noise sampling

</details>

### Properties Overview

This node uses standard tensor properties along with noise-specific settings to control how the 3D noise is sampled and applied.

***

#### General Settings

Controls the core behavior of the noise-based tensor.

**Tensor Weight**

_Sets the overall influence strength of this tensor._

* Affects how much this tensor contributes to the final direction when multiple tensors are combined
* Value range: Any positive number (default: 1)

**Potency**

_Sets the strength multiplier for the tensor's effect._

* Controls how powerful the noise influence is at each point
* Value range: Any positive number (default: 1)

**Normalize Noise Sampling**

_When enabled, normalizes the sampled noise direction to unit length._

* Ensures all directions have equal magnitude, preventing bias toward longer vectors
* Useful for consistent force application across different noise regions

**Sampling Mutations**

_Configures how the tensor sampling can be modified during evaluation._

* Allows for variation in how the noise is applied (e.g., rotation, scale)
* Can create more organic or varied results

**Config**

_Internal configuration settings for the noise tensor._

* Advanced settings that control internal behavior of the noise sampling process
* Typically left at default unless fine-tuning is required

### Notes

* This node works best with a large number of points to achieve smooth, continuous noise patterns
* Combine multiple noise tensors with different parameters to create complex directional effects
* The noise direction is deterministic based on point position, so identical points will always produce the same result
* Useful for creating natural-looking wind patterns, water flow directions, or terrain slope variations
