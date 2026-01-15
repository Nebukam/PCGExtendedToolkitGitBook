---
description: 'In editor :: PCGEx | Tensor : Flow'
icon: circle-dashed
---

# Tensor : Flow

A tensor that represent a vector/flow field

📌 **Subnode** — Connects to **Tensors** pins.

**How It Works**

> AI-Generated, needs proofreading

* The Tensor : Flow node represents a vector/flow field as a tensor.
* It fetches direction data based on settings: either from a local attribute with an option to invert the direction, or directly from input points' transform for direction axis.
* The node determines whether the direction is treated as absolute or transformed according to the owner's transform.

#### Configuration

<details>

<summary><strong>Direction Input</strong> <code>PCGExInputValueType</code></summary>

Direction type.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Direction (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Fetch the direction from a local attribute.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Invert</strong> <code>bool</code></summary>

Controls └─ invert.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Direction</strong> <code>PCGExAxis</code></summary>

Direction axis, read from the input points' transform.

</details>

<details>

<summary><strong>Direction Transform</strong> <code>PCGExTransformMode</code></summary>

Whether the direction is absolute or should be transformed by the owner' transform .

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExTensorFlowConfig</code></summary>

Tensor properties

📦 See: TensorFlow configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Direction Input</strong> <code>PCGExInputValueType</code></summary>

Direction type.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Direction (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Fetch the direction from a local attribute.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Invert</strong> <code>bool</code></summary>

Controls └─ invert.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Direction</strong> <code>PCGExAxis</code></summary>

Direction axis, read from the input points' transform.

</details>

<details>

<summary><strong>Direction Transform</strong> <code>PCGExTransformMode</code></summary>

Whether the direction is absolute or should be transformed by the owner' transform .

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsTensors\Public\Tensors\PCGExTensorFlow.h`
