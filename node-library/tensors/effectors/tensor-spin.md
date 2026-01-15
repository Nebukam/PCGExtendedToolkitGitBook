---
description: 'In editor :: PCGEx | Tensor : Spin'
icon: circle-dashed
---

# Tensor : Spin

A tensor that represent a spin around a given axis

📌 **Subnode** — Connects to **Tensors** pins.

**How It Works**

> AI-Generated, needs proofreading

* The node initializes a tensor to represent a spin around an axis defined by the Axis Input setting, which can be either fetched from a local attribute or read directly from input points' transform data.
* It determines the direction of the spin based on the specified Axis setting and whether this direction is absolute or should be transformed according to the owner's transform state as indicated by the Axis Transform option.
* The node applies tensor properties configured through the Config settings, which influence how the spin operation is processed and outputted.

#### Configuration

<details>

<summary><strong>Axis Input</strong> <code>PCGExInputValueType</code></summary>

Direction type.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Axis (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Fetch the direction from a local attribute.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Axis</strong> <code>PCGExAxis</code></summary>

Direction axis, read from the input points' transform.

</details>

<details>

<summary><strong>Axis Transform</strong> <code>PCGExTransformMode</code></summary>

Whether the direction is absolute or should be transformed by the owner' transform .

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExTensorSpinConfig</code></summary>

Tensor properties

📦 See: TensorSpin configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Axis Input</strong> <code>PCGExInputValueType</code></summary>

Direction type.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Axis (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Fetch the direction from a local attribute.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Axis</strong> <code>PCGExAxis</code></summary>

Direction axis, read from the input points' transform.

</details>

<details>

<summary><strong>Axis Transform</strong> <code>PCGExTransformMode</code></summary>

Whether the direction is absolute or should be transformed by the owner' transform .

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsTensors\Public\Tensors\PCGExTensorSpin.h`
