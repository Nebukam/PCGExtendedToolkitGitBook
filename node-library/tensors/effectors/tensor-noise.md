---
icon: circle-dashed
---

# Tensor : Noise

A tensor that uses 3D noises as direction.

📌 **Subnode** — Connects to **Tensors** pins.

**How It Works**

> AI-Generated, needs proofreading

* The node generates a tensor using 3D noise as its directional basis.
* If "Normalize Noise Sampling" is enabled, the sampled noise direction gets normalized to have a unit length.
* The node applies a weight factor specified by "Tensor Weight" and adjusts the intensity of the noise through the "Potency" setting.
* Additional modifications to the tensor can be made via settings defined in "Sampling Mutations".

#### Configuration

<details>

<summary><strong>Normalize Noise Sampling</strong> <code>bool</code></summary>

If enabled normalize the sampled noise direction.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tensor Weight</strong> <code>double</code></summary>

Controls tensor weight.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Potency</strong> <code>double</code></summary>

Controls potency.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Normalize Noise Sampling</strong> <code>bool</code></summary>

If enabled normalize the sampled noise direction.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Sampling Mutations</strong> <code>PCGExTensorSamplingMutationsDetails</code></summary>

Tensor mutations settings.

📦 See: TensorSamplingMutations configuration

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsTensors\Public\Tensors\PCGExTensorNoise.h`
