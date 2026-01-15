---
description: 'In editor :: PCGEx | Tensor : Inertia Constant'
icon: circle-dashed
---

# Tensor : Inertia Constant

A tensor constant that uses the seed transform.

📌 **Subnode** — Connects to **Tensors** pins.

**How It Works**

> AI-Generated, needs proofreading

* The node initializes a tensor constant using a seed transform to ensure reproducibility in procedural generation.
* It applies settings based on the specified Axis (PCGExAxis) and Offset (Rotator), which influence the orientation and position of the inertia tensor.
* If "Set Inertia Once" is enabled, the node sets a consistent inertia value for each point based on its initial transform, maintaining this value throughout subsequent processes.

#### Configuration

<details>

<summary><strong>Axis</strong> <code>PCGExAxis</code></summary>

Controls axis.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Offset</strong> <code>Rotator</code></summary>

Controls offset.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Set Inertia Once</strong> <code>bool</code></summary>

If enabled, will set a constant per-point inertia based on the original point transform

⚡ PCG Overridable

</details>

<details>

<summary><strong>Axis</strong> <code>PCGExAxis</code></summary>

Controls axis.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Offset</strong> <code>Rotator</code></summary>

Controls offset.

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

<summary><strong>Set Inertia Once</strong> <code>bool</code></summary>

If enabled, will set a constant per-point inertia based on the original point transform

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsTensors\Public\Tensors\PCGExTensorInertiaConstant.h`
