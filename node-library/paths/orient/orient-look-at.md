---
icon: sliders
---

# Orient : Look At

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Defines how to orient points along a path by making them look at a specified target.

#### How It Works

This Subnode controls the orientation of points along a path by calculating which direction each point should face. The method used depends on the selected mode:

* **Next Point**: Each point turns to face the next point in the sequence, creating a smooth flow along the path.
* **Previous Point**: Each point turns to face the previous point in the sequence, reversing the orientation direction.
* **Direction**: Uses a vector attribute to define a local direction that each point should look at. The attribute must contain valid vector data.
* **Position**: Uses a vector attribute to define world positions that each point should look at. The point's current location is used as the starting point for calculating the direction.

The orientation is computed using the Subnode's defined axis and up axis, ensuring consistent alignment regardless of the chosen look-at method.

#### Configuration

<details>

<summary><strong>Look At</strong><br><em>Look at method</em></summary>

Controls how the direction each point should face is determined.

**Values**:

* **Next Point**: Each point looks toward the next point in the path.
* **Previous Point**: Each point looks toward the previous point in the path.
* **Direction**: Uses a local vector attribute as a direction to look at.
* **Position**: Uses a local vector attribute as a world position to look at.

</details>

<details>

<summary><strong>Look At Attribute</strong><br><em>Vector attribute representing either a direction or world position, depending on selected mode.</em></summary>

The name of the vector attribute used when **Direction** or **Position** modes are selected. The attribute must exist and be valid for the operation to succeed.

</details>

#### Usage Example

Place a path with several points, then connect this Look At Subnode to an **Orient** node. Set the mode to **Next Point** to make each point in the path face the next one along the route. This creates a natural-looking orientation that follows the path's direction.

Alternatively, use **Direction** mode and provide a vector attribute to control how each point is oriented based on custom data like wind direction or slope.

#### Notes

* When using **Direction** or **Position** modes, ensure the specified attribute exists and contains valid vector data.
* The orientation behavior is applied per point in the path, so results will vary depending on point spacing and path shape.
* This Subnode works best with paths that have sufficient point density for smooth transitions.
