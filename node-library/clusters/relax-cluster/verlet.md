---
description: Verlet (Gravity/Cloth)
icon: sliders
---

# Verlet

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Applies Verlet integration physics to cluster points with gravity and edge constraints.

#### How It Works

This node simulates physical behavior on clusters using a technique called Verlet integration. It applies forces like gravity and spring-like constraints between connected points, creating organic, fluid-like deformations or soft-body dynamics.

The simulation runs through multiple iterations, updating point positions based on accumulated forces from previous steps. Each iteration refines the cluster's shape by applying:

1. **Gravity**: Pulls all points in a specified direction
2. **Edge Constraints**: Adjusts distances between connected points to maintain structural integrity
3. **Friction**: Reduces movement over time to stabilize the simulation

Each step calculates how forces affect point positions, then updates them accordingly. This process repeats for a set number of iterations, allowing for smooth and stable physical behavior.

#### Configuration

<details>

<summary><strong>Gravity Input</strong><br><em>Type of Gravity.</em></summary>

Controls whether gravity is defined as a constant value or read from an attribute on the input points.

**Values**:

* **Constant**: Use a fixed vector for gravity.
* **Attribute**: Read gravity values from a point attribute.

</details>

<details>

<summary><strong>Gravity</strong><br><em>Constant Gravity value. Think of it as gravity vector.</em></summary>

The fixed gravity vector applied to each point in the cluster during simulation. For example, `FVector(0, 0, -100)` simulates downward pull.

</details>

<details>

<summary><strong>Friction Input</strong><br><em>Type of Friction.</em></summary>

Controls whether friction is defined as a constant value or read from an attribute on the input points.

**Values**:

* **Constant**: Use a fixed scalar for friction.
* **Attribute**: Read friction values from a point attribute.

</details>

<details>

<summary><strong>Friction</strong><br><em>Constant friction value. Expected to be in the [0..1] range.</em></summary>

A scalar value between 0 and 1 that determines how much velocity is retained each iteration. A value of 0 means no friction (velocity persists), while 1 means full friction (velocity stops immediately).

</details>

<details>

<summary><strong>Edge Scaling Input</strong><br><em>Type of Edge scaling.</em></summary>

Controls whether edge scaling is defined as a constant value or read from an attribute on the input edges.

**Values**:

* **Constant**: Use a fixed scalar for edge scaling.
* **Attribute**: Read scaling values from an edge attribute.

</details>

<details>

<summary><strong>Edge Scaling</strong><br><em>Constant Edge scaling value.</em></summary>

A scalar multiplier applied to the original edge lengths when calculating spring forces. Values greater than 1 stretch edges, while less than 1 compress them.

</details>

<details>

<summary><strong>Edge Stiffness Input</strong><br><em>Type of Edge stiffness.</em></summary>

Controls whether edge stiffness is defined as a constant value or read from an attribute on the input edges.

**Values**:

* **Constant**: Use a fixed scalar for edge stiffness.
* **Attribute**: Read stiffness values from an edge attribute.

</details>

<details>

<summary><strong>Edge Stiffness</strong><br><em>Constant Edge stiffness value. Note that this value is expected to be in the [0..1] range and will be divided by 3 internally.</em></summary>

A scalar value between 0 and 1 that determines how strongly edges resist stretching or compression. Higher values make edges more rigid.

</details>

<details>

<summary><strong>Time Step</strong><br><em>If this was a physics simulation, represent the time advance each iteration.</em></summary>

Controls the size of each time increment in the simulation. Smaller values provide more stable but slower simulations. A typical value is `0.1`.

</details>

#### Usage Example

To create a soft-body effect on a cluster:

1. Connect a cluster to this node.
2. Set **Gravity Input** to "Constant" and define a gravity vector like `FVector(0, 0, -50)` to pull points downward.
3. Set **Friction** to `0.1` to gradually slow movement.
4. Set **Edge Stiffness** to `0.7` to keep edges relatively rigid but still allow some deformation.
5. Adjust **Time Step** to `0.05` for smoother results.

#### Notes

* This node is computationally intensive due to its iterative nature and edge-based calculations.
* For best performance, limit the number of iterations or use a low-resolution cluster.
* The simulation assumes constant edge lengths unless modified via attributes or scaling.
