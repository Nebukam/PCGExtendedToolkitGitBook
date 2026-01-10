---
description: 'In editor :: PCGEx | Shape : Circle'
icon: circle-dashed
---

# Shape : Circle

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Create points arranged in a circular shape.

#### How It Works

This node places points around a central location to form a circle or arc. For each input point, it calculates where new points should go based on a radius and angle range. The process starts by converting the start and end angles from degrees into radians. Then, it divides the angular range into equal steps and uses trigonometry to find the X and Y positions of each point relative to the center.

The node can work with fixed angles or read angle values from attributes on the input points. If the full 360-degree range is used, the shape can be marked as closed, which helps downstream nodes understand that the shape forms a complete loop.

#### Configuration

<details>

<summary><strong>Start Angle Input</strong><br><em>Source for the starting angle of the circle.</em></summary>

Controls whether the start angle is a fixed value or read from an attribute.

**Values**:

* **Constant**: Use the constant value defined in "Start Angle".
* **Attribute**: Read the start angle from an attribute on the input data.

</details>

<details>

<summary><strong>Start Angle (Attr)</strong><br><em>Attribute to read the start angle from.</em></summary>

The name of the attribute that contains the starting angle, in degrees. Only used when "Start Angle Input" is set to "Attribute".

</details>

<details>

<summary><strong>Start Angle</strong><br><em>Constant value for the start angle in degrees.</em></summary>

The fixed starting angle of the circle, measured in degrees from the positive X-axis. Only used when "Start Angle Input" is set to "Constant".

</details>

<details>

<summary><strong>End Angle Input</strong><br><em>Source for the ending angle of the circle.</em></summary>

Controls whether the end angle is a fixed value or read from an attribute.

**Values**:

* **Constant**: Use the constant value defined in "End Angle".
* **Attribute**: Read the end angle from an attribute on the input data.

</details>

<details>

<summary><strong>End Angle (Attr)</strong><br><em>Attribute to read the end angle from.</em></summary>

The name of the attribute that contains the ending angle, in degrees. Only used when "End Angle Input" is set to "Attribute".

</details>

<details>

<summary><strong>End Angle</strong><br><em>Constant value for the end angle in degrees.</em></summary>

The fixed ending angle of the circle, measured in degrees from the positive X-axis. Only used when "End Angle Input" is set to "Constant".

</details>

<details>

<summary><strong>bIsClosedLoop</strong><br><em>If enabled, will flag circle as being closed if possible.</em></summary>

When enabled, the node marks the resulting shape as a closed loop. This can be useful for nodes that process closed shapes differently, such as those creating continuous paths or polygons.

</details>
