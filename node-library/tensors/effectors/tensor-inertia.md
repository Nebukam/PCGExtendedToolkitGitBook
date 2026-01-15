---
description: 'In editor :: PCGEx | Tensor : Inertia'
icon: circle-dashed
---

# Tensor : Inertia

A tensor constant that uses the seed transform.

📌 **Subnode** — Connects to **Tensors** pins.

**How It Works**

> AI-Generated, needs proofreading

* The Tensor : Inertia node generates a tensor constant that applies to point transformations based on a seed transform.
* When "Set Inertia Once" is enabled, the node assigns a consistent inertia value per point using the original point's transformation data.
* The node utilizes settings from "Config: Tensor properties" and "Axis: PCGExAxis" to define the tensor characteristics.

#### Configuration

<details>

<summary><strong>Axis</strong> <code>PCGExAxis</code></summary>

Controls axis.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Set Inertia Once</strong> <code>bool</code></summary>

If enabled, will set a constant per-point inertia based on the original point transform

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExTensorInertiaConfig</code></summary>

Tensor properties

📦 See: TensorInertia configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Axis</strong> <code>PCGExAxis</code></summary>

Controls axis.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Set Inertia Once</strong> <code>bool</code></summary>

If enabled, will set a constant per-point inertia based on the original point transform

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsTensors\Public\Tensors\PCGExTensorInertia.h`
