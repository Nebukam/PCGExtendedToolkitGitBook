---
icon: sliders
---

# Inherit End

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Inherits metadata values from the last point of a path when blending sub-points.

#### How It Works

This subnode copies metadata directly from the final point in a path segment and applies it to all intermediate points. When processing a sequence of points between two endpoints, it retrieves attribute data from the "To" point (the end of the segment) and assigns it to each sub-point in the sequence. This method ensures that the last point's properties are maintained consistently across the entire path, without any interpolation or averaging.

#### Configuration

<details>

<summary><strong>Blending Type</strong><br><em>Defines how metadata is inherited from the last point.</em></summary>

Controls the blending behavior. For this subnode, it's fixed to **Copy Other** which means it copies values directly from the target (last) point.

**Values**:

* **None**: No blending is applied.
* **Average**: Averages all sampled values.
* **Weight**: Weights based on distance to blend targets.
* **Min**: Component-wise minimum operation.
* **Max**: Component-wise maximum operation.
* **Copy (Target)**: Copies target data (second value).
* **Sum**: Sums all values.
* **Weighted Sum**: Sums all values, weighted.
* **Lerp**: Uses weight as a linear interpolation factor.
* **Subtract**: Subtracts values.
* **Unsigned Min**: Component-wise minimum on unsigned values.
* **Unsigned Max**: Component-wise maximum on unsigned values.
* **Copy Other**: Copies data from the second point (the "To" point).

</details>

#### Usage Example

Use this subnode when you want to ensure that all points along a path inherit the metadata of the final point. For example, if you're creating a trail where each point should carry the color or material properties of the last point in the sequence, this subnode ensures consistent attribute inheritance.

#### Notes

* This subnode is best used when you want to maintain the final point's attributes throughout the path.
* It does not perform interpolation or averaging; it copies values.
* Ideal for cases where metadata should remain constant across a path segment.
