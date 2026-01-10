---
icon: sliders
---

# Default

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Samples a single location in the tensor field.

#### How It Works

This subnode evaluates tensor data at a specific point in space by collecting contributions from multiple tensor operations. It processes each operation at the given probe location and combines their effects into a single sample that represents the overall tensor field behavior at that point. The process adapts the sampling approach based on settings like step size and error tolerance to balance accuracy and performance.

#### Configuration

<details>

<summary><strong>Radius</strong><br><em>Base radius for sampling.</em></summary>

Controls the scale of the sampling operation. Larger values will consider a wider area around the probe point when evaluating tensors.

</details>

<details>

<summary><strong>MinStepFraction</strong><br><em>Minimum step size as fraction of base radius.</em></summary>

Sets the smallest allowable step size for adaptive sampling, expressed as a fraction of the base radius. Smaller values allow for more precise sampling but may increase computation time.

</details>

<details>

<summary><strong>MaxStepFraction</strong><br><em>Maximum step size as fraction of base radius.</em></summary>

Sets the largest allowable step size for adaptive sampling, expressed as a fraction of the base radius. Larger values can speed up computation but may reduce accuracy.

</details>

<details>

<summary><strong>ErrorTolerance</strong><br><em>Error tolerance for step size adaptation.</em></summary>

Controls how much error is acceptable in adaptive sampling. Lower values will result in more precise but potentially slower sampling, while higher values allow for faster but less accurate results.

</details>

<details>

<summary><strong>MaxSubSteps</strong><br><em>Maximum sub-steps per sample.</em></summary>

Limits the number of internal steps taken during adaptive sampling. Higher values allow for more detailed evaluation but increase computation time.

</details>
