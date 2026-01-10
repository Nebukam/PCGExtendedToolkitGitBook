---
description: 'In editor :: PCGEx | Cluster : Relax'
icon: scrubber
---

# Relax Cluster

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Adjusts point positions within clusters using connection-based relaxation forces to create more evenly distributed layouts.

#### Overview

This node modifies the locations of points in clusters by applying relaxation forces based on connections between them. It simulates physical repulsion or attraction between connected points to achieve a smoother, more natural distribution. This is especially useful for reducing overlaps and creating organic-looking arrangements in procedural content.

The node works iteratively, using edge data to determine how points relate to each other and applying force-based adjustments that can be customized through the Relaxing subnode.

{% hint style="info" %}
Connects to **clusters** processing pins.
{% endhint %}

#### How It Works

This node performs a relaxation simulation where it gradually adjusts point positions within clusters based on their connections. For each iteration:

1. It evaluates how connected points influence each other using the configured **InfluenceDetails** settings.
2. Each point calculates a movement vector based on its neighbors' positions and the chosen **Relaxing** operation.
3. The point's position is updated by applying this movement, scaled by influence and relaxation parameters.
4. This process repeats for the specified number of **Iterations**, gradually stabilizing the layout.

The node uses edge data to define how points relate to one another, and applies a force-based relaxation algorithm that can be customized through the Relaxing subnode.

<details>

<summary>Inputs</summary>

* **Points**: The point data representing the cluster elements to relax.
* **Edges**: Edge data defining connections between points in the clusters.
* **Relaxing Subnode**: Defines how the relaxation force is calculated (e.g., linear, inverse distance).

</details>

<details>

<summary>Outputs</summary>

* Modified point positions after relaxation.
* Optional output attributes for direction and amplitude of movement if enabled.

</details>

#### Configuration

<details>

<summary><strong>Iterations</strong><br><em>Number of relaxation steps to perform.</em></summary>

Controls how many times the relaxation algorithm is applied. Higher values result in more stable layouts but take longer to compute.

**Values**: Integer, minimum 1.

</details>

<details>

<summary><strong>InfluenceDetails</strong><br><em>Influence Settings</em></summary>

Defines how influence from neighboring points affects each point's movement. This includes distance thresholds and influence curves.

</details>

<details>

<summary><strong>Relaxing</strong><br><em>Relaxing arithmetics</em></summary>

A subnode that defines the mathematical operation used to compute relaxation forces between connected points.

</details>

<details>

<summary><strong>bWriteDirectionAndSize</strong><br><em>Write the final direction and size of the relaxation.</em></summary>

When enabled, writes a vector attribute containing both the direction and magnitude of the final movement applied to each point.

</details>

<details>

<summary><strong>DirectionAndSizeAttributeName</strong><br><em>Name of the 'FVector' attribute to write direction and size to.</em></summary>

The name of the output attribute where the combined direction and size vector will be stored if `bWriteDirectionAndSize` is enabled.

</details>

<details>

<summary><strong>bWriteDirection</strong><br><em>Write the final direction of the relaxation.</em></summary>

When enabled, writes a vector attribute containing only the direction of the final movement applied to each point.

</details>

<details>

<summary><strong>DirectionAttributeName</strong><br><em>Name of the 'FVector' attribute to write direction to.</em></summary>

The name of the output attribute where the direction vector will be stored if `bWriteDirection` is enabled.

</details>

<details>

<summary><strong>bWriteAmplitude</strong><br><em>Write the final amplitude of the relaxation. (that's the size of the DirectionAndSize vector)</em></summary>

When enabled, writes a scalar attribute containing the magnitude of the final movement applied to each point.

</details>

<details>

<summary><strong>AmplitudeAttributeName</strong><br><em>Name of the 'double' attribute to write amplitude to.</em></summary>

The name of the output attribute where the amplitude value will be stored if `bWriteAmplitude` is enabled.

</details>

#### Usage Example

Use this node to create a more natural distribution of points in a cluster. For example, after generating a set of points with a grid or radial pattern, apply relaxation to spread them out and reduce overlaps. Configure the **Iterations** to 20 for smoother results, and use a **Relaxing** subnode that applies inverse-distance influence to make nearby points have stronger effects on each other.

#### Notes

* Relaxation is computationally intensive when using many iterations or large clusters.
* The node works best with well-defined edges connecting points in the cluster.
* Output attributes are optional and can be used for debugging or further processing.
