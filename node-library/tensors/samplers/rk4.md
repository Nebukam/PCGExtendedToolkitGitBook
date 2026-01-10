---
icon: sliders
---

# RK4

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Samples tensor fields using the Runge-Kutta 4 integration method for accurate and stable field traversal.

#### Overview

The RK4 node performs advanced sampling of tensor fields using the Runge-Kutta 4 (RK4) numerical integration method. It's designed to provide more accurate and stable traversal through vector or tensor fields, especially when dealing with complex or rapidly changing data such as forces, directions, or influences in procedural generation.

This node is particularly useful for simulating physical behaviors, pathfinding, or any scenario where smooth and precise field sampling is required. It improves upon basic sampling methods by using multiple evaluations per step to estimate the next position more accurately.

{% hint style="info" %}
Connects to **Tensor** subnodes that define the tensor fields to sample.
{% endhint %}

#### How It Works

The RK4 node integrates a tensor field using the Runge-Kutta 4 method, which is a widely used numerical technique for solving differential equations. This approach evaluates the field at multiple points during each step to compute a more accurate approximation of the next position.

It calculates four intermediate steps (k1, k2, k3, k4) based on the current position and the tensor field's direction. These steps are combined using weighted averages to determine the final displacement for the next sample point. This multi-step evaluation reduces error and provides smoother traversal through complex fields.

The method adapts step size dynamically based on error tolerance, ensuring both performance and accuracy. It can also handle multiple sub-steps per sample, allowing for fine-grained control over how much the field influences the sampling path.

#### Configuration

<details>

<summary><strong>Radius</strong><br><em>The base radius used for sampling.</em></summary>

Controls the spatial extent over which the tensor field is sampled. Larger values consider a wider area but may reduce precision.

</details>

<details>

<summary><strong>Min Step Fraction</strong><br><em>Minimum step size as fraction of base radius.</em></summary>

Sets the smallest allowable step size during integration, ensuring fine control in areas with high field variation.

**Values**:

* **0.01 to 1.0**: Fraction of the base radius

</details>

<details>

<summary><strong>Max Step Fraction</strong><br><em>Maximum step size as fraction of base radius.</em></summary>

Defines the largest allowable step size, preventing large jumps that could miss important field details.

**Values**:

* **0.1 to 2.0**: Fraction of the base radius

</details>

<details>

<summary><strong>Error Tolerance</strong><br><em>Error tolerance for step size adaptation.</em></summary>

Controls how much error is allowed in each integration step. Lower values result in more accurate but slower sampling.

**Values**:

* **0.001 to 0.5**: Fraction of the base radius

</details>

<details>

<summary><strong>Max Sub-Steps</strong><br><em>Maximum sub-steps per sample.</em></summary>

Determines how many internal steps are taken per sample point, affecting both accuracy and performance.

**Values**:

* **1 to 16**: Number of internal steps

</details>

#### Usage Example

Use this node when you want to simulate smooth movement along a vector field, such as guiding particles along wind patterns or creating natural-looking paths through terrain. For example, connect it to a tensor field that defines directional forces and apply it to a set of points to generate smooth, physics-based trajectories.

#### Notes

* The RK4 method is computationally more expensive than simpler methods but offers significantly better accuracy.
* Adjust the error tolerance and step size settings based on the complexity of your tensor fields.
* This node works best when connected to tensor subnodes that define continuous vector or tensor fields.
