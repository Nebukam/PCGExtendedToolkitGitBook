---
description: 'In editor :: PCGEx | Tensor : Spline Pole'
icon: circle-dashed
---

# Tensor : Spline Pole

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Creates a tensor that represents a vector/flow field along a spline.

#### How It Works

This node builds a directional flow field that follows the shape of a spline. For each point in space, it calculates how strongly that point should be influenced by the spline's path. The influence is strongest when a point is close to the spline and decreases as the distance increases. The direction of the influence always aligns with the spline's tangent at the closest point on the curve.

The node evaluates input points against a set of splines to determine their proximity. For each point, it finds the nearest location on the spline and computes how much influence that point should have based on its distance from the spline. Points within the defined radius are affected, with the strength of the effect decreasing as they move further away.

#### Configuration

<details>

<summary><strong>Sample Inputs</strong><br><em>Controls which splines are sampled.</em></summary>

Determines whether all input splines are used or only closed loops or open lines.

**Values**:

* **All**: Sample all inputs.
* **Closed loops only**: Sample only closed loops.
* **Open lines only**: Sample only open lines.

</details>

<details>

<summary><strong>Radius</strong><br><em>Base radius of the spline. Will be scaled by control points' scale length.</em></summary>

Controls how far from the spline the tensor's influence extends. The actual radius is scaled by the control point's scale factor.

</details>

#### Usage Example

Use this node to create a flow field that guides particles along a winding path, such as a river or road. Connect a set of points (like particles or agents) to the tensor field, and they will be influenced to move along the shape of the spline. Adjust the radius to control how tightly the influence follows the spline.

#### Notes

The tensor's direction is always aligned with the spline's tangent at the closest point. This makes it ideal for creating smooth, continuous directional flows along curves.

{% hint style="info" %}
Connects to **Tensor Subnode** nodes as a subnode.
{% endhint %}
