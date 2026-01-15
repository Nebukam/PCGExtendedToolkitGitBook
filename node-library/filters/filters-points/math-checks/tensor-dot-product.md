---
description: 'In editor :: PCGEx | Filter : Tensor Dot'
icon: circle-dashed
---

# Tensor Dot Product

Creates a filter definition that compares dot value of a vector and tensors.

📌 **Subnode** — Connects to **Filters** pins.

**How It Works**

> AI-Generated, needs proofreading

* The node computes the dot product between a vector (Operand A) and tensors after optionally applying transformations to Operand A using the local point's transform.
* It then uses predefined Dot Comparison Details settings to compare the computed dot values against specified criteria.
* Tensor Sampling Settings are applied to sample from the tensor data, with these settings affecting the flattened version of the sampled tensors post any individual mutations.
* Based on the comparison outcomes and configured Filter Config parameters, the node generates a filter definition that determines which elements meet the specified conditions.

#### Configuration

<details>

<summary><strong>Operand A</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Vector operand A

</details>

<details>

<summary><strong>Transform Operand A</strong> <code>bool</code></summary>

Transform OperandA with the local point' transform

⚡ PCG Overridable

</details>

<details>

<summary><strong>Dot Comparison Details</strong> <code>PCGExDotComparisonDetails</code></summary>

Dot comparison settings

📦 See: DotComparison configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tensor Sampling Settings</strong> <code>PCGExTensorHandlerDetails</code></summary>

Tensor sampling settings. Note that these are applied on the flattened sample, e.g after & on top of individual tensors' mutations.

📦 See: TensorHandler configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExTensorDotFilterConfig</code></summary>

Filter Config.

📦 See: TensorDotFilter configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Operand A</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Vector operand A

</details>

<details>

<summary><strong>Transform Operand A</strong> <code>bool</code></summary>

Transform OperandA with the local point' transform

⚡ PCG Overridable

</details>

<details>

<summary><strong>Dot Comparison Details</strong> <code>PCGExDotComparisonDetails</code></summary>

Dot comparison settings

📦 See: DotComparison configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tensor Sampling Settings</strong> <code>PCGExTensorHandlerDetails</code></summary>

Tensor sampling settings. Note that these are applied on the flattened sample, e.g after & on top of individual tensors' mutations.

📦 See: TensorHandler configuration

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsTensors\Public\Filters\Points\PCGExTensorDotFilter.h`
