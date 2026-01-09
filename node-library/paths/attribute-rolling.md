---
description: 'In editor :: PCGEx | Path : Attribute Rolling'
icon: circle
---

# Attribute Rolling

{% hint style="warning" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Does a rolling blending of properties & attributes along paths.

### Overview

This node applies a rolling blend operation to points along a path, allowing you to gradually transition attribute values based on position within a defined range. It's particularly useful for creating smooth transitions between different states or properties as you move along a path — such as changing color, scale, or other attributes from start to end.

The node supports two main modes of rolling: **Start/Stop** and **Toggle**, which define how the rolling range is determined. You can also control whether the blending happens inside or outside the defined range, and choose what value to use for reference during the rolling process.

{% hint style="info" %}
This node modifies point attributes based on their position in a path and applies blending operations accordingly.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input**: Points that make up the path(s) to process.
* **Optional Filters**: Point filters can be applied to define when rolling starts or stops.

</details>

<details>

<summary>Outputs</summary>

* Modified points with updated attributes based on rolling blending.
* Optional output attributes for tracking range start, stop, pole, index, and inside-range status.

</details>

### Properties Overview

Settings that control how the rolling blending is applied along paths.

***

#### Settings

Controls how the rolling behavior is defined and executed.

**Rolling Range Control**

_Controls whether the rolling uses a single toggle or two separate filters for start and stop._

* **Start/Stop**: Uses two separate sets of filters to define where rolling begins and ends.
* **Toggle**: Uses one set of filters that switches rolling on/off when a point passes through it.

**Rolling Value Control**

_Determines what value is used as the reference for rolling._

* **Pin**: Uses a filter to determine which points are used as reference for rolling.
* **Previous**: Uses the previous point's value as the rolling reference.
* **Range Start**: Uses the first point of a range as the rolling reference.

**Initial Value Mode**

_Specifies how the initial rolling state is determined._

* **Constant**: Starts with a fixed boolean value.
* **Constant (Preserve)**: Starts with a constant value but does not switch if the first point matches that value.
* **From Point**: Uses the value from the first point in the path.

**Starting Toggle Value**

_The initial rolling state when using "Constant" or "Constant (Preserve)" modes._

* When enabled, rolling starts as active; otherwise, it starts inactive.

**Reverse Rolling Order**

_When enabled, reverses the direction of the rolling process along the path._

* Useful for creating effects that begin at the end of a path and progress toward the start.

**Blend Outside Range**

_Controls whether blending operations are applied outside the defined rolling range._

* When enabled, blending continues beyond the start/stop points.
* When disabled, blending only occurs within the defined range.

**Blend Stop Element**

_When blending outside the range is disabled, this controls how the stop element is handled._

* When enabled, the stop point is included in the blending process.

***

#### Output

Configures which attributes are written to track rolling state and progress.

**Write Range Start**

_When enabled, writes a boolean attribute indicating when a point marks the start of a rolling range._

**Range Start Attribute Name**

_Name of the boolean attribute that stores whether a point is at the range start._

**Write Range Stop**

_When enabled, writes a boolean attribute indicating when a point marks the stop of a rolling range._

**Range Stop Attribute Name**

_Name of the boolean attribute that stores whether a point is at the range stop._

**Write Range Pole**

_When enabled, writes a boolean attribute indicating whether a point is either start or stop of a rolling range._

**Range Pole Attribute Name**

_Name of the boolean attribute that stores whether a point is a pole (start or stop)._

**Write Range Index**

_When enabled, writes an integer index representing the current rolling range._

**Range Index Attribute Name**

_Name of the integer attribute that stores the rolling range index._

**Index Offset**

_Adds an offset to the range index value. Default is -1, so first valid index is 0._

**Write Is Inside Range**

_When enabled, writes a boolean attribute indicating whether a point is inside the rolling range._

**Is Inside Range Attribute Name**

_Name of the boolean attribute that stores whether a point is inside the rolling range._

**Write Index Inside Range**

_When enabled, writes an integer index representing position within the current rolling range._

**Index Inside Range Attribute Name**

_Name of the integer attribute that stores the index within the rolling range._

### Notes

* Use this node to create smooth transitions in visual properties along paths.
* Combine with point filters to control exactly where blending begins and ends.
* The **Toggle** mode is great for creating dynamic effects that respond to specific points along a path.
* Consider using **Blend Outside Range** when you want to extend the influence of rolling beyond the defined range.
* Attribute outputs can be used in downstream nodes to further manipulate or visualize the rolling effect.
