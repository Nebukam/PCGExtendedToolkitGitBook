---
icon: circle
---

# Best Match Axis

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Rotate a point or transform to closely match an input direction (or look at location) but preserve orthogonality.

#### How It Works

The Best Match Axis node adjusts the orientation of points or transforms so they align as closely as possible with a specified direction or target. It ensures that the alignment preserves right angles between axes, which is useful for creating natural-looking placements or orientations in procedural content.

This node calculates the best rotation for each point based on the selected mode:

1. **Direction** – Rotates the point so its up axis aligns with a given vector (either fixed or from an attribute).
2. **Look at Position (World)** – Rotates the point so its up axis points toward a world-space position.
3. **Look at Position (Relative)** – Rotates the point so its up axis points toward a relative position in local space.
4. **Look at Closest Target** – Rotates the point so its up axis points toward the closest target from a set of potential targets.

In all cases, the rotation is computed to best match the desired direction while maintaining orthogonality — ensuring that the resulting orientation doesn't introduce skewing or distortion. This is particularly useful when working with procedural placements where clean, predictable rotations are important.

#### Configuration

<details>

<summary><strong>Mode</strong><br><em>Drive the best match axis.</em></summary>

Controls how the target direction is determined.

**Values**:

* **Direction**: Aligns with a fixed vector (either constant or from an attribute).
* **Look at Position (World)**: Aligns toward a world-space position.
* **Look at Position (Relative)**: Aligns toward a relative position in local space.
* **Look at Closest Target**: Aligns toward the closest point from a set of targets.

</details>

<details>

<summary><strong>MatchInput</strong><br><em>Up vector source.</em></summary>

Determines whether to use a constant value or an attribute from the input data for the up vector.

**Values**:

* **Constant**: Use a fixed vector defined in the node.
* **Attribute**: Read the vector from an attribute on the input points.

</details>

<details>

<summary><strong>MatchSource</strong><br><em>The attribute or property on selected source to use as Up vector for the look at transform.</em></summary>

The name of the attribute to read the up vector from, when "MatchInput" is set to "Attribute".

</details>

<details>

<summary><strong>MatchConstant</strong><br><em>The constant to use as Up vector for the look at transform.</em></summary>

A fixed vector used as the up direction when "MatchInput" is set to "Constant".

</details>

<details>

<summary><strong>DataMatching</strong><br><em>If enabled, allows you to filter out which targets get sampled by which data.</em></summary>

When using "Look at Closest Target", this setting lets you define how the matching process filters or groups target points.

</details>

<details>

<summary><strong>DistanceDetails</strong><br><em>Distance method to be used for source &#x26; target points.</em></summary>

Specifies how distances are calculated when finding the closest target point, affecting which point is selected as the match.

</details>

#### Usage Example

You have a set of trees placed on a sloped terrain and want them to grow upright while still facing the slope's direction. You can use this node with the **Direction** mode, setting the up vector to be the terrain normal at each tree’s location. This will orient each tree so it stands straight up but follows the slope’s tilt.

Alternatively, if you're placing buildings along a path and want them to face the center of the world, you can use the **Look at Position (World)** mode with a constant vector pointing toward the world origin.

#### Notes

* The node preserves orthogonality during rotation, ensuring clean, non-skewed transformations.
* When using "Look at Closest Target", performance can be improved by limiting the number of potential targets or using spatial filtering.
* This node works best when used with point data that has a defined orientation (e.g., transforms or rotation attributes).
