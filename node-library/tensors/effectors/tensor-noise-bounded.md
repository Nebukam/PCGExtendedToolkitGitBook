---
icon: circle-dashed
---

# Tensor : Noise (Bounded)

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> A tensor that uses 3D noises as direction, within effector bounds.

#### How It Works

This node creates a directional field by sampling 3D noise at each point's location. The noise function generates a vector that defines the direction for that point. The key feature of this bounded version is that it respects effector boundaries — meaning the noise-based directions are only applied within the defined spatial limits of each effector.

The process works as follows:

1. For each input point, the node identifies which effectors are relevant based on spatial proximity.
2. It samples a 3D noise function at the point's location to generate a direction vector.
3. If enabled, the sampled direction is normalized to ensure consistent magnitude.
4. The resulting vector becomes the tensor's direction for that point, constrained by the effector's bounds.

This creates smooth, natural-looking directional fields useful for effects like wind patterns, fluid flow, or organic growth directions.

#### Configuration

<details>

<summary><strong>bNormalizeNoiseSampling</strong><br><em>If enabled normalize the sampled noise direction.</em></summary>

When enabled, the sampled noise vector is normalized to unit length. This ensures that all directions have equal magnitude, which can be important for consistent tensor influence.

</details>

#### Usage Example

Use this node in a graph where you want to create organic directional fields for point placement or movement. For example:

1. Create a set of points using a grid or scatter node.
2. Connect those points to a **Tensor : Noise (Bounded)** Subnode.
3. Configure the noise settings to control the flow pattern.
4. Use the resulting tensor field with a **Transform** or **Path** node to influence point behavior.

#### Notes

* The noise sampling is deterministic based on seed and position, so identical inputs will produce identical outputs.
* This node works best when combined with effectors that define clear spatial boundaries.
* Performance can be affected by the complexity of the noise function and the number of input points.
