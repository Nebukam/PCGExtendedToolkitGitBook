---
icon: sliders
---

# Tangents : Transform

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Creates tangents based on the rotation of input transforms, defining direction and orientation for path or curve operations.

### Overview

This factory generates tangent vectors that align with the rotation of input transforms. It's used to define how paths or curves should bend or turn based on transform orientations.

{% hint style="info" %}
Connects to **Tangent** input pins on nodes like **Path Builder**, **Curve**, or **Path Smooth**
{% endhint %}

### How It Works

This factory reads the rotation of each input transform and uses it to compute tangent directions. The tangent vectors are derived from the specified axis (forward, right, up, etc.) of each transform's rotation, inverted for proper orientation.

### Inputs

* **Transform** (Required): Input transforms that define the orientation for tangent generation
* **Tangent** (Output): Generated tangent vectors aligned with the input transform rotations

### Configuration

***

#### General

**Axis**

_Controls which axis of the transform rotation is used to compute the tangent direction._

The selected axis defines the direction of the tangent vector. For example:

* **Forward** uses the X-axis of the transform
* **Right** uses the Y-axis of the transform
* **Up** uses the Z-axis of the transform

### Usage Example

Use this factory when you want to create paths or curves that follow the orientation of input transforms. For instance, if you have a set of transforms representing waypoints along a road, using "Forward" as the axis will make your path follow the direction each waypoint is facing.

### Notes

* Tangents are inverted for proper path orientation (so they point in the opposite direction of the transform's axis)
* This factory works best when input transforms represent meaningful orientations (like vehicle directions or camera views)
* Combine with other tangent factories to create more complex path behaviors
