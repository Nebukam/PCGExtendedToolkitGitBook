---
description: Radius Fitting
icon: sliders
---

# Radius Fitting

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Applies repulsion forces between cluster points based on their radius to prevent overlap.

#### How It Works

This node adjusts the positions of points within a cluster to avoid overlap by applying repulsion forces. It calculates how much each point overlaps with others based on their defined radii, and then pushes them apart if they are too close. The strength of this push is determined by the inverse square law — meaning the closer the points are, the stronger the repulsion force becomes.

Each point only moves if it actually overlaps with another point in the cluster. If no overlaps exist, the positions remain unchanged. This ensures that the layout remains stable while still preventing any two points from occupying the same space.

#### Configuration

<details>

<summary><strong>Radius Input</strong><br><em>Type of radius value to use.</em></summary>

Controls whether the radius is a constant value or read from an attribute.

**Values**:

* **Constant**: Use the fixed value specified in the Radius setting.
* **Attribute**: Read the radius value from an attribute on the input data.

</details>

<details>

<summary><strong>Radius (Attr)</strong><br><em>Attribute to read radius value from.</em></summary>

The name of the attribute used when Radius Input is set to Attribute. It must contain scalar values representing the radius for each point.

</details>

<details>

<summary><strong>Radius</strong><br><em>Constant radius value.</em></summary>

The fixed radius value used when Radius Input is set to Constant. This defines how far each point should repel others, acting like a "size" parameter for the repulsion force.

</details>

#### Usage Example

1. Create a cluster of points using a **Generate Points** or similar node.
2. Connect it to a **Relax Cluster** node.
3. Add this **Radius Fitting** node as a subnode to the Relax Cluster.
4. Set Radius Input to Constant and define a radius value (e.g., 50) to ensure points stay at least 50 units apart.
5. Run the graph to see the points automatically adjusted to avoid overlapping.

#### Notes

* The repulsion force is calculated using inverse square law, so very close points will have stronger repulsion.
* If using an attribute for radius, make sure it's populated with valid scalar values.
* This node works best when used in conjunction with other relaxation techniques to achieve stable layouts.
