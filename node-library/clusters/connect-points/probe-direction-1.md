---
icon: circle-dashed
---

# Probe : Tensor

Sample a tensor at point location and probe in that direction.

📌 **Subnode** — Connects to **Probes** pins.

**How It Works**

> AI-Generated, needs proofreading

* The node samples a tensor at a specified point location and uses that sampled direction for further operations.
* If "Invert Tensor Direction" is enabled, the sampled direction from the tensors gets mirrored by multiplying with -1.
* The setting "Use Component Wise Angle" determines whether angles are considered component-wise in calculations involving "Max Angle".
* Both "Max Angle" and "Max Angles" settings define the maximum angle within which to search for directions, though their exact distinction or application is not specified.

#### Configuration

<details>

<summary><strong>Invert Tensor Direction</strong> <code>bool</code></summary>

Mirror (\*-1) the direction sampled from the tensors.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Favor</strong> <code>PCGExProbeDirectionPriorization</code></summary>

What matters more?

</details>

<details>

<summary><strong>Use Component Wise Angle</strong> <code>bool</code></summary>

Controls use component wise angle.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Max Angle</strong> <code>double</code></summary>

Max angle to search within.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Max Angles</strong> <code>Rotator</code></summary>

Max angle to search within.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Do Chained Processing</strong> <code>bool</code></summary>

This probe will sample candidates after the other. Can yield different results.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tensor Sampling Settings</strong> <code>PCGExTensorHandlerDetails</code></summary>

Tensor sampling settings. Note that these are applied on the flattened sample, e.g after & on top of individual tensors' mutations.

📦 See: TensorHandler configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExProbeConfigTensor</code></summary>

Filter Config.

📦 See: ProbeConfigTensor configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Invert Tensor Direction</strong> <code>bool</code></summary>

Mirror (\*-1) the direction sampled from the tensors.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Favor</strong> <code>PCGExProbeDirectionPriorization</code></summary>

What matters more?

</details>

<details>

<summary><strong>Use Component Wise Angle</strong> <code>bool</code></summary>

Controls use component wise angle.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Max Angle</strong> <code>double</code></summary>

Max angle to search within.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Max Angles</strong> <code>Rotator</code></summary>

Max angle to search within.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Do Chained Processing</strong> <code>bool</code></summary>

This probe will sample candidates after the other. Can yield different results.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tensor Sampling Settings</strong> <code>PCGExTensorHandlerDetails</code></summary>

Tensor sampling settings. Note that these are applied on the flattened sample, e.g after & on top of individual tensors' mutations.

📦 See: TensorHandler configuration

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsTensors\Public\Probes\PCGExProbeTensor.h`
