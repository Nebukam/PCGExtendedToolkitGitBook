---
description: 'In editor :: PCGEx | Tensor : Path Flow'
icon: circle-dashed
---

# Tensor : Path Flow

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Creates a tensor that represents a vector/flow field along a path.

#### How It Works

This node builds a directional flow field that guides points along a path. It calculates how strongly each point is influenced by the path based on its distance and orientation. The influence decreases smoothly as points move away from the path, creating a natural falloff effect. The direction of the tensor's influence aligns with the path's orientation, determined by the selected axis.

1. For each input point, it checks if the point lies within the tensor's radius.
2. If inside the radius, it calculates how far along the path the point is.
3. It then determines the direction and strength of the flow based on that position and the path's orientation.
4. The resulting vector guides the point along the path, with stronger influence closer to the path.

#### Configuration

<details>

<summary><strong>Point Type</strong><br><em>Which point type to use. Shared amongst all points; if you want tight control, create a fully-fledged spline instead.</em></summary>

Controls how the path is interpreted when building the tensor.

**Values**:

* **Linear**: Interpolates points linearly along the path.
* **Smooth**: Uses smooth interpolation for a more natural curve.

</details>

<details>

<summary><strong>Smooth Linear</strong><br><em>When enabled, uses smooth interpolation for linear point types.</em></summary>

When enabled, applies smooth interpolation to the path when using the Linear point type. This creates a more natural curve.

</details>

<details>

<summary><strong>Sample Inputs</strong><br><em>Sample inputs.</em></summary>

Controls which points along the path are used for sampling the tensor field.

**Values**:

* **All**: Samples all input points.
* **Start Only**: Samples only the first point.
* **End Only**: Samples only the last point.

</details>

<details>

<summary><strong>Radius</strong><br><em>Base radius of the spline. Will be scaled by control points' scale length.</em></summary>

Defines how far from the path the tensor has an effect. Larger values mean a wider influence area.

</details>

<details>

<summary><strong>Spline Direction</strong><br><em>Which spline transform axis is to be used.</em></summary>

Determines which direction along the spline is considered "forward" for the tensor's orientation.

**Values**:

* **Forward**: X+ axis.
* **Backward**: X- axis.
* **Right**: Y+ axis.
* **Left**: Y- axis.
* **Up**: Z+ axis.
* **Down**: Z- axis.

</details>

{% hint style="info" %}
Connects to \*\*Tensor\*\* processing nodes as a Subnode.
{% endhint %}

#### Usage Example

Use this node to create a wind effect that follows the shape of a winding river. Connect a path to the input, set the radius to cover the area around the river, and configure the direction to match the flow of water. Then connect it to a tensor processing node to apply the effect to points in your scene.

#### Notes

The tensor's influence is strongest at the center of the path and decreases with distance. Adjust the radius to control how far the effect extends. The spline direction setting allows you to define which way the flow points along the path.
