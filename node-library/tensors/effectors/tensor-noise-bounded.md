---
icon: circle-dashed
---

# Tensor : Noise (Bounded)

A tensor that uses 3D noises as direction, within effector bounds

📌 **Subnode** — Connects to **Tensors** pins.

**How It Works**

> AI-Generated, needs proofreading

* The node generates a tensor based on 3D noise patterns within specified effector bounds.
* If "Normalize Noise Sampling" is enabled, the sampled noise directions are normalized to have unit length.
* The configuration settings for the Tensor properties define how the tensor behaves and interacts with the noise data.

#### Configuration

<details>

<summary><strong>Normalize Noise Sampling</strong> <code>bool</code></summary>

If enabled normalize the sampled noise direction.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExTensorNoiseBoundedConfig</code></summary>

Tensor properties

📦 See: TensorNoiseBounded configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Normalize Noise Sampling</strong> <code>bool</code></summary>

If enabled normalize the sampled noise direction.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsTensors\Public\Tensors\PCGExTensorNoiseBounded.h`
