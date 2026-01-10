---
icon: bezier-curve
---

# Tangents

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Controls how tangent vectors are sourced and scaled for spline-based procedural content.

#### Overview

This configuration block defines how tangent vectors are used when creating or modifying splines in your procedural content. Tangents control the direction and curvature of spline points, which affects how smoothly curves transition between points. You can either use existing attributes on your points or generate tangents automatically using built-in methods. This is commonly needed when working with paths, splines, or any geometry that requires smooth transitions between points.

{% hint style="info" %}
This configuration appears in nodes like: Copy To Paths, Create Spline, Path Spline Mesh Simple, Path Spline Mesh
{% endhint %}

#### Settings

<details>

<summary><strong>Source</strong><br><em>Defines where the tangent data comes from.</em></summary>

Controls whether tangents are read from point attributes or generated automatically.

**Values**:

* **Attribute**: Uses existing point attributes to define tangents.
* **In Place**: Generates tangents using internal logic, with optional overrides for start and end points.

</details>

<details>

<summary><strong>Arrive Tangent Attribute</strong><br><em>The name of the attribute that stores the arrive tangent vector.</em></summary>

When "Source" is set to "Attribute", this defines which point attribute holds the incoming tangent data for each spline point. For example, if you have a custom attribute named "CustomArriveTangent", enter that name here.

</details>

<details>

<summary><strong>Leave Tangent Attribute</strong><br><em>The name of the attribute that stores the leave tangent vector.</em></summary>

When "Source" is set to "Attribute", this defines which point attribute holds the outgoing tangent data for each spline point. For example, if you have a custom attribute named "CustomLeaveTangent", enter that name here.

</details>

<details>

<summary><strong>Tangents</strong><br><em>Factory used to generate tangents when source is set to In Place.</em></summary>

When "Source" is set to "In Place", this defines the method for generating tangent vectors. This can include options like straight-line tangents or smooth curves based on neighboring points.

</details>

<details>

<summary><strong>Start Tangents Override</strong><br><em>Optional override for the start point's tangent generation.</em></summary>

When "Source" is set to "In Place", this allows you to specify a different tangent generation method specifically for the first point of the spline.

</details>

<details>

<summary><strong>End Tangents Override</strong><br><em>Optional override for the end point's tangent generation.</em></summary>

When "Source" is set to "In Place", this allows you to specify a different tangent generation method specifically for the last point of the spline.

</details>

<details>

<summary><strong>Scaling</strong><br><em>Controls how tangent vectors are scaled relative to their original values.</em></summary>

Adjusts the magnitude of the tangent vectors. For example, a scaling value of 2.0 doubles the length of all tangents, making curves more pronounced.

</details>

#### Common Use Cases

* **Creating smooth paths**: Set the source to "Attribute" and use point attributes that define the desired curve direction.
* **Generating automatic curves**: Set the source to "In Place" and use a tangent factory to automatically calculate smooth transitions between points.
* **Fine-tuning spline shape**: Adjust scaling values to make curves sharper or more gradual.

#### Notes

* Tangent attributes must exist on your input points when using "Attribute" as the source.
* When using "In Place", the system will generate tangents based on neighboring points unless overrides are specified.
* Scaling affects all tangents uniformly, so it's best used after you've established a baseline tangent shape.
