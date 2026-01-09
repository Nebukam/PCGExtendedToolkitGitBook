---
description: 'In editor :: PCGEx | Fill Control : Running Average'
icon: circle-dashed
---

# FC : Running Average

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Ignore candidates which attribute value isn't within the given tolerance of a running average.

#### Overview

This subnode defines a filtering behavior for flood fill operations that evaluates candidate points based on how their attribute values compare to a moving average of previously accepted candidates. It's used to ensure that new candidates are not too far from the current "trend" of selected points, helping maintain consistency or smoothness in procedural generation.

It connects to **Probe** pins on graph-building nodes, where it controls which candidates are considered valid for inclusion in the diffusion process.

#### How It Works

This subnode maintains a running average of attribute values from previously accepted candidates within a defined window size. When evaluating a new candidate:

1. It calculates the average of the last N accepted candidates' attribute values (where N is the window size).
2. It compares the candidate's attribute value to this average.
3. If the absolute difference between the candidate’s value and the average is less than or equal to the configured tolerance, the candidate is accepted.
4. Otherwise, it is rejected.

The window size determines how many previous candidates are considered in the average calculation, and the tolerance controls how strict the comparison is.

<details>

<summary>Inputs</summary>

* Expects a data source with attributes that can be used for the `Operand` property.
* Requires a valid flood fill context and handler to operate within.

</details>

<details>

<summary>Outputs</summary>

* Modifies the list of candidates considered valid during flood fill diffusion.
* Does not produce new data; it filters existing candidates based on the running average logic.

</details>

#### Configuration

***

**Window Size Input**

_Controls whether the window size is a constant or read from an attribute._

When set to **Constant**, use the `Window Size` value.\
When set to **Attribute**, use the `Window Size (Attr)` value from input data.

**Values**:

* **Constant**: Use a fixed integer window size.
* **Attribute**: Read the window size from a point attribute.

**Window Size**

_Window Size Constant_

Controls how many of the most recent accepted candidates are included in the running average calculation.\
A larger window size smooths out fluctuations more, while a smaller one allows for more variation.

**Range**: Minimum value is 1.

**Tolerance Input**

_Controls whether the tolerance is a constant or read from an attribute._

When set to **Constant**, use the `Tolerance` value.\
When set to **Attribute**, use the `Tolerance (Attr)` value from input data.

**Values**:

* **Constant**: Use a fixed double tolerance.
* **Attribute**: Read the tolerance from a point attribute.

**Tolerance**

_Tolerance Constant_

Defines how close a candidate's attribute value must be to the running average to be accepted.\
A higher tolerance allows more variation, while a lower one enforces stricter adherence to the trend.

**Range**: Minimum value is 0.

**Operand**

_The property that will be averaged and checked against candidates -- will be broadcasted to a `double`._

Specifies which attribute of the input points is used for calculating the running average and comparing candidate values.\
For example, using `$Position.Z` would base the average on Z coordinates.

#### Usage Example

Use this subnode in a flood fill graph where you want to maintain a consistent height or value trend. For instance, when generating terrain features like ridges or valleys, you can set the operand to `Z Position`, window size to 10, and tolerance to 5. This ensures that new points added to the fill are within 5 units of the average Z height of the last 10 points.

#### Notes

* The running average is updated only with accepted candidates.
* If fewer than the window size of candidates have been accepted, the average will be calculated over all available candidates.
* This subnode works best when used in scenarios where a smooth or gradual transition between values is desired.
