---
icon: sliders
---

# Interpolate

{% hint style="info" %}
### AI-generated page -- to be reviewed

While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Creates a blending operation that combines attribute values from two points along a path, using various blending methods.

### Overview

This factory defines how attribute values are interpolated or combined between two points in a sub-points operation. It's used to blend data from source and target points when generating paths or modifying point data along a route.

{% hint style="info" %}
Connects to **Sub Points** nodes that support blending operations
{% endhint %}

### How It Works

This factory defines how values are combined between two points in a path. It supports multiple blending methods that determine how the source and target data are merged, such as averaging, weighting by distance, or linear interpolation.

### Configuration

***

#### Blending Settings

**Blending Type**

_Controls how the values from the two points are combined._

When set to **None**, no blending is applied and the original value is kept.\
When set to **Average**, values are averaged between the two points.\
When set to **Weight**, values are blended based on distance to the blend targets.\
When set to **Min**, component-wise minimum of both values is used.\
When set to **Max**, component-wise maximum of both values is used.\
When set to **Copy (Target)**, only the target point's value is used.\
When set to **Sum**, values are added together.\
When set to **Weighted Sum**, values are summed with weights applied.\
When set to **Lerp**, values are linearly interpolated using weight as a factor.\
When set to **Subtract**, the second value is subtracted from the first.\
When set to **Unsigned Min**, component-wise minimum of unsigned values, but keeps sign on written data.\
When set to **Unsigned Max**, component-wise maximum of unsigned values, but keeps sign on written data.\
When set to **Absolute Min**, component-wise minimum of absolute values.\
When set to **Absolute Max**, component-wise maximum of absolute values.

**Weight**

_Controls how much influence the weight attribute has in the blending._

A value of 0 means no influence from the weight attribute, while a value of 1 means full influence. This is only used when the blending type is set to **Weight** or **Lerp**.

**Override Attributes**

_Controls which attributes are affected by the blending operation._

When enabled, you can specify different blending methods for individual attributes like density, bounds min, etc. This allows fine-grained control over how each attribute is blended.

### Usage Example

Use this factory with a **Sub Points** node to blend point data along a path. For example, if you're creating a path between two points and want the density of points to gradually change from one end to the other, connect this factory to the Sub Points node's blending input. Set the blending type to **Lerp** and adjust the weight to control how smoothly the transition occurs.

### Notes

* The **Lerp** blending method is often preferred for smooth transitions
* When using **Weight** blending, ensure you have a weight attribute defined in your data
* You can override individual attribute blending methods by enabling the override options
* This factory works best when used with point data that has compatible attributes on both source and target points
