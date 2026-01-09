---
description: 'In editor :: PCGEx | Path : Slide'
icon: circle
---

# Slide

{% hint style="info" %}
### AI-generated page -- to be reviewed

While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Slides points along a path, either toward the next or previous point in the sequence.

### Overview

This node allows you to move points along a path segment, shifting them closer to the next or previous point in the sequence. It's useful for creating smooth transitions, adjusting point placement, or preparing data for further processing that requires specific spatial relationships. You can also store and restore original positions using attributes.

{% hint style="info" %}
The node works on paths defined by input points. Make sure your data is structured as a path before applying this node.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input** (Default): Points that define the path to be processed
* **Filters** (Optional): Filters to determine which points are affected

</details>

<details>

<summary>Outputs</summary>

* **Main Output** (Default): Modified points with updated positions, or restored positions if using Restore mode

</details>

### Properties Overview

Controls how the sliding operation is performed and what data is used.

***

#### Mode

Determines whether to slide points along the path or restore their original positions.

**Slide Mode**

_Whether to slide points or restore their original positions._

* When enabled, points are moved along the path
* When disabled, points are restored from an attribute

**Values**:

* **Slide**: Slide points along the path
* **Restore**: Restore original positions and delete the stored attribute

***

#### Direction

Controls whether points slide toward the next or previous point in the path.

**Slide Direction**

_Whether to slide points toward the next or previous point._

* When set to "Next", points move toward the subsequent point in the path
* When set to "Previous", points move toward the prior point in the path

**Values**:

* **Next**: Slide toward next point
* **Previous**: Slide toward previous point

***

#### Amount

Controls how far along the path each point is moved.

**Amount Measure**

_Whether the slide amount is a percentage of the segment or an absolute distance._

* When set to "Relative", the value is treated as a percentage (0.0 to 1.0) of the segment length
* When set to "Discrete", the value is treated as an absolute distance

**Values**:

* **Relative**: Input value will be normalized between 0..1, or used as a factor
* **Discrete**: Raw value will be used, or used as absolute

**Slide Amount Input**

_Whether to use a constant or attribute value for the slide amount._

* When set to "Constant", a fixed value is used
* When set to "Attribute", the value is read from an input point attribute

**Values**:

* **Constant**: Use a constant, user-defined value
* **Attribute**: Read the value from the input data

**Slide Amount (Attribute)**

_The name of the attribute containing the slide amount._

* The attribute must be of type float or double
* Used only when "Slide Amount Input" is set to "Attribute"

**Slide Amount**

_The fixed slide amount used when "Slide Amount Input" is set to "Constant"._

* For relative measure, use values between 0.0 and 1.0
* For discrete measure, use actual distance values

***

#### Position Storage

Controls whether to store original positions for later restoration.

**Write Old Position**

_Whether to store the original position in an attribute before sliding._

* When enabled, the original point position is saved to an attribute
* When disabled, no storage occurs and restore functionality is not available

**Restore Position Attribute Name**

_Name of the attribute used to store or retrieve the original position._

* Used only when "Write Old Position" is enabled or in Restore mode
* Default is "PreSlidePosition"

### Notes

* Sliding works on path segments; points are moved along the line between their current position and the target point (next or previous)
* For best results, ensure your input points form a continuous path with no gaps
* When using relative amounts, values of 0.5 will move points halfway along each segment
* Restore mode requires that original positions were previously stored using "Write Old Position"
* The node supports both closed loops and open paths, but behavior may differ for the first and last points in an open path
