---
description: 'In editor :: PCGEx | Heuristics : Tensor'
icon: circle-dashed
---

# HX : Tensor

Heuristics based on tensors.

📌 **Subnode** — Connects to **Heuristics** pins.

**How It Works**

> AI-Generated, needs proofreading

* The node applies heuristics based on tensors to process input data.
* It flattens individual tensor samples before applying configured tensor sampling settings.
* A boolean setting labeled "Absolute" is used but the specific effect of this setting is not detailed in the provided information.
* Filter configurations are applied as part of the processing steps, though the exact nature of these filters is unspecified.

#### Configuration

<details>

<summary><strong>Absolute</strong> <code>bool</code></summary>

Controls absolute.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tensor Sampling Settings</strong> <code>PCGExTensorHandlerDetails</code></summary>

Tensor sampling settings. Note that these are applied on the flattened sample, e.g after & on top of individual tensors' mutations.

📦 See: TensorHandler configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExHeuristicConfigTensor</code></summary>

Filter Config.

📦 See: HeuristicConfigTensor configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Absolute</strong> <code>bool</code></summary>

Controls absolute.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tensor Sampling Settings</strong> <code>PCGExTensorHandlerDetails</code></summary>

Tensor sampling settings. Note that these are applied on the flattened sample, e.g after & on top of individual tensors' mutations.

📦 See: TensorHandler configuration

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsTensors\Public\Heuristics\PCGExHeuristicTensor.h`
