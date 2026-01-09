---
icon: circle-dashed
---

# Tensor : Noise (Bounded)

See [noises](../../misc/noises/ "mention")

{% hint style="info" %}
### AI-generated page -- to be reviewed

While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Creates a tensor that uses 3D noise as direction within effector bounds.

### Overview

This node generates a tensor field where each point's direction is determined by sampling 3D noise. The noise is confined to the boundaries of effectors, creating natural-looking directional fields for procedural generation. It's particularly useful for generating organic movement patterns, flow directions, or spatially varying orientations that follow noise-based gradients.

{% hint style="info" %}
This node works with effector bounds - the noise direction is only computed within the influence area of each effector.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Points** (Optional): Input points to process
* **Effectors** (Required): Effector points that define the spatial bounds and influence areas

</details>

<details>

<summary>Outputs</summary>

* **Factory**: A tensor factory that can be used by other nodes to sample noise directions

</details>

### Properties Overview

Controls how the noise-based tensor is generated and applied.

***

#### General

Configures core tensor behavior and noise sampling parameters.

**Normalize Noise Sampling**

_When enabled, the sampled noise direction is normalized to unit length._

* Ensures consistent magnitude for all noise vectors
* Useful when you want uniform directional influence regardless of noise value

### Notes

* Combine this with other tensor nodes like "Tensor : Extrude" or "Tensor : Transform" to create complex procedural effects
* The noise sampling is deterministic based on seed and position, so identical inputs will produce identical outputs
* Use with "Tensor : Noise (Unbounded)" for different noise behavior outside of effector bounds
* Good for creating organic flow patterns, wind directions, or natural-looking vector fields
