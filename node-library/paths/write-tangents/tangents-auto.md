---
icon: sliders
---

# Tangents : Auto

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Automatically calculates tangents for points along a path based on their geometric arrangement.

#### Overview

This subnode automatically computes tangent vectors for each point in a path, using the positions of neighboring points. It's designed to create smooth transitions between points and is especially useful when you want to define natural-looking curves or directions without manually specifying tangent values.

It works by analyzing the geometric relationship between a point and its adjacent neighbors to determine how the path should curve or turn at that point. This approach ensures consistent and visually pleasing tangents, particularly for paths that are meant to flow naturally.

{% hint style="info" %}
Connects to **Tangents** input pins on nodes like **Write Tangents**.
{% endhint %}

#### How It Works

This subnode calculates tangents by examining the geometric arrangement of three consecutive points in a path: the current point, the previous point, and the next point.

It determines the direction of the tangent at the current point by calculating the angle formed between these three points. The resulting tangent vector is then scaled using the input scale factors for arrival and departure directions.

The algorithm ensures that the tangents are aligned with the natural flow of the path, making it ideal for creating smooth curves or guiding navigation along a route.

#### Configuration

* **Points**: A set of points in 3D space that define a path.
* **Arrive Scale**: Scalar value to scale the arrival tangent direction.
* **Leave Scale**: Scalar value to scale the departure tangent direction.

#### Usage Example

Use this subnode when you want to define smooth, natural-looking tangents along a path. For example, when creating a winding road or a flowing river in a level, this subnode can help generate consistent tangent directions that make the path appear more organic and visually appealing.

#### Notes

* The subnode works best with paths that have well-defined neighboring points.
* Tangent values are computed per point, so performance scales with the number of points in the input data.
* This subnode is ideal for creating smooth curves or guiding navigation along a route without manually specifying each tangent.
