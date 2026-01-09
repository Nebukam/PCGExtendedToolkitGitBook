---
icon: sliders
---

# Orient : Look At

{% hint style="info" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Creates orientation data that orients points along a path using specified axes.

### Overview

This factory generates orientation information for points along a path, determining how they should be rotated in 3D space. It's used to control the direction and up vector of points as they follow a path, enabling smooth transitions and consistent alignment.

{% hint style="info" %}
Connects to **Path** input pins on nodes that require orientation data, such as **Transform** or **Point** nodes.
{% endhint %}

### How It Works

The Orient factory calculates the rotation needed to align points along a path. It uses two axes:

* The **Orient Axis** determines the forward direction of the point
* The **Up Axis** determines which direction is "up" for the point's orientation

For each point on the path, it computes a transform that aligns the Orient Axis with the path's tangent and sets the Up Axis to point in the specified direction.

### Inputs

* **Path**: Input path data to orient points along
* **Points**: Point data to apply orientation to

### Outputs

* **Orientation**: Computed orientation data for each point

### Configuration

***

#### Orientation Settings

**Orient Axis**

_Controls which axis of the output transform points forward along the path._

The selected axis will be aligned with the path's direction at each point. For example, if set to **Forward**, the X-axis of the resulting transform will point along the path.

**Values**:

* **Forward**: X+ axis points along the path
* **Backward**: X- axis points along the path
* **Right**: Y+ axis points along the path
* **Left**: Y- axis points along the path
* **Up**: Z+ axis points along the path
* **Down**: Z- axis points along the path

**Up Axis**

_Controls which axis of the output transform points upward._

This determines the "up" direction for each point's orientation. For example, if set to **Up**, the Z-axis will point up (away from the path surface).

**Values**:

* **Forward**: X+ axis points upward
* **Backward**: X- axis points upward
* **Right**: Y+ axis points upward
* **Left**: Y- axis points upward
* **Up**: Z+ axis points upward
* **Down**: Z- axis points upward

### Usage Example

Use this factory when you want to orient objects along a path, such as placing trees that face the path direction or vehicles that follow a road. Connect it to a **Path** node and then to a **Transform** node to apply the computed orientations to your point data.

### Notes

* The orientation is calculated based on the path's tangent at each point
* When using **Up Axis = Up**, the orientation will naturally align with gravity if the path follows terrain
* Combine with other factories like **Offset** or **Scale** to create more complex point arrangements along paths
