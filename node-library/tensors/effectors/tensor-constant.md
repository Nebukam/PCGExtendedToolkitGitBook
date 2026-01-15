---
description: 'In editor :: PCGEx | Tensor : Constant'
icon: circle-dashed
---

# Tensor : Constant

A tensor that has a constant value in the field. Note that this tensor will prevent sampling from failing.

📌 **Subnode** — Connects to **Tensors** pins.

**How It Works**

> AI-Generated, needs proofreading

* The node generates a tensor with a constant value that remains unchanged throughout its usage in the field.
* It allows configuration of the tensor's direction as a vector and assigns a weight to the tensor as a double precision floating-point number.
* Users can specify the potency of the tensor, also as a double precision floating-point number, influencing the strength or impact of the tensor value.
* The node includes settings for sampling mutations related to the tensor, though specific mutation details are not provided.

#### Configuration

<details>

<summary><strong>Direction</strong> <code>Vector</code></summary>

Controls direction.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tensor Weight</strong> <code>double</code></summary>

Controls tensor weight.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Direction</strong> <code>Vector</code></summary>

Controls direction.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Potency</strong> <code>double</code></summary>

Controls potency.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Sampling Mutations</strong> <code>PCGExTensorSamplingMutationsDetails</code></summary>

Tensor mutations settings.

📦 See: TensorSamplingMutations configuration

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsTensors\Public\Tensors\PCGExTensorConstant.h`
