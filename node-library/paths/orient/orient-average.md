---
icon: sliders
---

# Orient : Average

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the subnode does, but still needs to be proofread by a human.
{% endhint %}

> Defines an orientation that averages the direction of adjacent points along a path.

#### How It Works

This subnode calculates the orientation for each point in a path by averaging the directions from the previous and next points. It determines the forward direction of each point by combining the direction going into it and the direction going out of it. This creates smooth transitions between orientations, which helps avoid sudden rotations when placing objects along a curved path.

The process works as follows:

1. For each point, it calculates the normalized direction from the previous point to the current point
2. It also calculates the normalized direction from the current point to the next point
3. These two directions are blended together using a 50/50 ratio
4. The resulting averaged direction becomes the forward axis of the output transform
5. The up axis is then applied to ensure consistent orientation along the path

This method ensures that objects placed along the path follow its curvature naturally, making it ideal for creating smooth and visually pleasing arrangements.

#### Configuration

<details>

<summary><strong>Orient Axis</strong><br><em>Which axis of the output transform is aligned with the computed direction.</em></summary>

Controls which axis of the resulting transform points along the path's average direction.

**Values**:

* **Forward**: The forward axis (X+) aligns with the computed direction
* **Backward**: The backward axis (X-) aligns with the computed direction
* **Right**: The right axis (Y+) aligns with the computed direction
* **Left**: The left axis (Y-) aligns with the computed direction
* **Up**: The up axis (Z+) aligns with the computed direction
* **Down**: The down axis (Z-) aligns with the computed direction

</details>

<details>

<summary><strong>Up Axis</strong><br><em>Which axis defines the upward orientation of the output transform.</em></summary>

Determines which axis is considered "up" for the computed orientation.

**Values**:

* **Forward**: Forward axis (X+) points upward
* **Backward**: Backward axis (X-) points upward
* **Right**: Right axis (Y+) points upward
* **Left**: Left axis (Y-) points upward
* **Up**: Up axis (Z+) points upward
* **Down**: Down axis (Z-) points upward

</details>

#### Usage Example

Use this subnode when placing objects along a winding path where you want them to naturally follow the curve. For example, placing trees along a mountain trail or positioning road signs along a curved road. The average orientation ensures that each object aligns smoothly with its neighbors, avoiding sudden rotations.

#### Notes

* This subnode works best on paths with sufficient point density to provide meaningful directional information
* For very short paths (2-3 points), the behavior may appear less smooth due to limited directional data
* The up axis setting helps maintain consistent orientation when the path has significant vertical variation
