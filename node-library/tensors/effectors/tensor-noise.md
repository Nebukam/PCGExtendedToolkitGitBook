---
icon: circle-dashed
---

# Tensor : Noise

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Generates tensor directions using 3D noise functions.

#### How It Works

This node creates directional influences for points in space by sampling a 3D noise field at each point's location. The noise values are converted into vector directions that define how the tensor affects nearby elements. Each point receives a unique direction based on its position within the noise field, creating organic and varied patterns across the entire set of points.

The process works as follows:

1. For each input point, the system samples a 3D noise function at that point's coordinates.
2. The resulting noise value is interpreted as a directional vector in three-dimensional space.
3. Optionally, this direction can be normalized to ensure consistent strength across all points.
4. The final direction becomes the tensor's influence for that specific point.

This approach allows for natural-looking effects like wind patterns, fluid flow, or terrain features where the influence varies smoothly and organically through space.

#### Configuration

<details>

<summary><strong>bNormalizeNoiseSampling</strong><br><em>If enabled, normalize the sampled noise direction.</em></summary>

When enabled, this setting ensures that all resulting tensor directions have the same strength or magnitude. This prevents some directions from being much stronger than others due to variations in raw noise values.

</details>

<details>

<summary><strong>TensorWeight</strong><br><em>Tensor weight factor.</em></summary>

Controls how strongly this tensor influences other elements in downstream operations. A higher value increases the impact of this tensor's direction on the final result.

</details>

<details>

<summary><strong>Potency</strong><br><em>Tensor potency factor.</em></summary>

Defines the overall strength or intensity of the tensor effect. Increasing this value amplifies how much the noise-based directions affect the output.

</details>

<details>

<summary><strong>Mutations</strong><br><em>Tensor mutations settings.</em></summary>

These settings control how this tensor interacts with other tensors when multiple are applied together. Options include blending modes or priority rules for combining different influences.

</details>

#### Usage Example

Use this node to create a natural-looking wind field for particle systems. Connect it to a **Tensor Subnode Provider** and then to a **Path : Extrude Tensors** node. The noise-based tensor will cause particles to follow organic, flowing paths instead of straight lines.

#### Notes

* The quality and appearance of the tensor depend heavily on the underlying 3D noise parameters.
* Normalizing the sampling can prevent extreme variations in direction magnitude.
* This node works best when used with other tensor processing nodes for complex effects.
