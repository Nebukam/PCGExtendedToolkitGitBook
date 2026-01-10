---
description: 'In editor :: PCGEx | Tensor : Spline Flow'
icon: circle-dashed
---

# Tensor : Spline Flow

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Generates a tensor that represents a vector/flow field along a spline.

#### How It Works

This node creates a directional flow field that follows the shape of input splines. For each point in space, it calculates how strongly that point is influenced by nearby splines. The influence decreases with distance from the spline, creating a smooth transition between areas affected by different splines.

The node evaluates each point to determine its proximity to splines and assigns a vector direction based on the spline's orientation at that location. This creates a continuous flow field where points near a spline are pulled along its path, while points farther away experience less influence.

#### Configuration

<details>

<summary><strong>Sample Inputs</strong><br><em>Which spline inputs to sample.</em></summary>

Controls which splines are used in the tensor generation.

**Values**:

* **All**: Sample all input splines.
* **Closed loops only**: Only use closed-loop splines (e.g., circles).
* **Open lines only**: Only use open-line splines (e.g., curves that don't loop back).

</details>

<details>

<summary><strong>Radius</strong><br><em>Base radius of the spline. Will be scaled by control points' scale length.</em></summary>

Defines how far from a spline the tensor will have an effect. The actual radius is scaled by the spline's control point scale.

</details>

<details>

<summary><strong>Spline Direction</strong><br><em>Which spline transform axis is to be used.</em></summary>

Determines which direction along the spline is considered "forward" for the tensor's output vector.

**Values**:

* **Forward**: Use the X+ axis of the spline.
* **Backward**: Use the X- axis of the spline.
* **Right**: Use the Y+ axis of the spline.
* **Left**: Use the Y- axis of the spline.
* **Up**: Use the Z+ axis of the spline.
* **Down**: Use the Z- axis of the spline.

</details>

{% hint style="info" %}
Connects to \*\*Tensor Subnode\*\* nodes that define how the tensor is generated.
{% endhint %}

#### Usage Example

Use this node to create a flow field that guides particle systems along a series of curved paths. For example, you could generate a set of splines representing river courses and use this tensor to make particles flow along those rivers. Connect the output to a **Tensor : Apply** node to influence point placement or movement.

#### Notes

* The tensor's effect is strongest near the spline and tapers off as distance increases.
* This node works best with smooth, continuous splines for predictable flow behavior.
* Adjust the radius to control how far the influence extends from the spline.
