---
icon: sliders
---

# Orient : Average

{% hint style="warning" %}
## AI-generated page - To be reviewed. 
While not 100% accurante, it should properly capture what it does. It stills needs to be reviewed and proofread by a human.
{% endhint %}

> Creates an orientation operation that averages the direction of adjacent points along a path to determine the orientation at each point.

### Overview

This factory generates an orientation action that calculates the direction between a point's previous and next neighbors, then averages these directions to produce smooth, natural-looking rotations along a path. It's commonly used for creating organic-looking terrain, roads, or object placements that follow a path naturally.

{% hint style="info" %}
Connects to **Orient** nodes that accept action factories
{% endhint %}

### How It Works

This factory computes the orientation at each point by:

1. Getting the direction vector from the previous point to the current point
2. Getting the direction vector from the current point to the next point
3. Averaging these two vectors to create a smooth transition direction
4. Using this averaged direction to orient the point

The result is a smooth, natural-looking orientation that follows the path's curvature.

### Inputs & Outputs

#### Inputs

* **Points**: The collection of points to process for orientation calculation

#### Outputs

* **Transforms**: The resulting oriented transforms for each point in the input collection

### Configuration

***

#### Orientation Settings

**Orient Axis**

_Controls which axis of the output transform points forward._

When set to **Forward**, the orientation will align the object's forward axis with the computed direction. When set to **Backward**, the orientation will align the object's backward axis with the computed direction. When set to **Right**, the orientation will align the object's right axis with the computed direction. When set to **Left**, the orientation will align the object's left axis with the computed direction. When set to **Up**, the orientation will align the object's up axis with the computed direction. When set to **Down**, the orientation will align the object's down axis with the computed direction.

**Up Axis**

_Controls which axis of the output transform points upward._

This setting determines the up direction for the resulting transform. It's used as a reference when computing the final rotation from the averaged direction vector.

**Values**:

* **Forward**: Uses the forward axis (X+) as up
* **Backward**: Uses the backward axis (X-) as up
* **Right**: Uses the right axis (Y+) as up
* **Left**: Uses the left axis (Y-) as up
* **Up**: Uses the up axis (Z+) as up
* **Down**: Uses the down axis (Z-) as up

### Usage Example

Use this factory with an **Orient** node to create smooth, natural-looking object placement along a path. For example:

1. Create a path using a **Path** node
2. Connect it to an **Orient** node
3. Set the **Action Factory** of the Orient node to "Average"
4. The objects will be oriented smoothly following the path's curvature

This is particularly useful for creating roads, rivers, or any linear feature that should naturally follow a path while maintaining consistent orientation.

### Notes

* This factory works best with paths that have sufficient point density to provide meaningful directional information
* For very sharp turns, the averaged direction may not perfectly match the exact turn angle but will produce smooth transitions
* The "Average" orientation is ideal for creating organic-looking placements where objects should follow the path's natural flow rather than rigidly aligning with each segment
