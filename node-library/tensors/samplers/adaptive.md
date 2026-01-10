---
icon: sliders
---

# Adaptive

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Samples tensors using an adaptive step size based on field curvature for more accurate results in complex regions.

#### How It Works

This subnode adjusts the distance between samples dynamically as it moves through a tensor field. Instead of using the same step size everywhere, it measures how quickly the field is changing in space (curvature) and takes smaller steps where changes are rapid, and larger steps where the field is smooth.

The process works like this:

1. It starts with an initial step size based on the base radius and minimum/maximum fractions
2. It evaluates the tensor field at multiple points along the current path
3. It estimates how quickly values change between these points to determine curvature
4. It adjusts the next step size to keep errors within a set tolerance level
5. It repeats this process until it reaches its target point or hits the maximum number of internal steps

This method ensures that areas with sharp changes are sampled more carefully, while smooth regions use larger steps for better performance.

#### Configuration

<details>

<summary><strong>Radius</strong><br><em>Base radius for sampling.</em></summary>

Controls how far apart samples are taken initially. Larger values mean fewer samples but broader coverage.

</details>

<details>

<summary><strong>Min Step Fraction</strong><br><em>Minimum step size as fraction of base radius.</em></summary>

Sets the smallest allowed step size. Must be between 0.01 and 1.0. Smaller values allow finer sampling in complex regions.

</details>

<details>

<summary><strong>Max Step Fraction</strong><br><em>Maximum step size as fraction of base radius.</em></summary>

Sets the largest allowed step size. Must be between 0.1 and 2.0. Larger values improve performance in smooth regions.

</details>

<details>

<summary><strong>Error Tolerance</strong><br><em>Error tolerance for step size adaptation.</em></summary>

Controls how much error is acceptable when adjusting the step size. Smaller values (0.001 to 0.5) result in more accurate but slower sampling.

</details>

<details>

<summary><strong>Max Sub-Steps</strong><br><em>Maximum sub-steps per sample.</em></summary>

Limits how many internal steps are taken per sample. Must be between 1 and 16. Higher values allow for more precise adaptation but increase computation cost.

</details>

#### Usage Example

Use this subnode in a graph where you're applying forces or transformations based on tensor fields that vary rapidly in space, such as magnetic fields or fluid flow. For example, when generating particle paths influenced by a complex vector field, using adaptive sampling ensures particles follow the field accurately even through sharp turns or high-gradient areas.

#### Notes

* This subnode is computationally more expensive than fixed-step sampling due to curvature estimation.
* Best suited for scenarios where accuracy is more important than speed.
* The error tolerance setting allows balancing between performance and fidelity.
