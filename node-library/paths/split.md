---
description: 'In editor :: PCGEx | Path : Split'
icon: circle
---

# Split

{% hint style="warning" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Split existing paths into multiple new paths.

### Overview

This node allows you to break up existing paths at specific points, creating new paths from the original data. It's useful when you want to segment a path based on certain conditions or behaviors, such as splitting a road network at intersections or breaking a trail into sections based on terrain changes.

The node evaluates each point in your input paths against a set of filters. Depending on the selected action, it can duplicate points, remove them, or disconnect segments to create new paths from the remaining data.

{% hint style="info" %}
This node works with point-based path data and requires at least one filter to be defined in the "Split Conditions" input.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input** (Default): Point data containing paths to split.
* **Split Conditions** (Optional): Filters used to determine where to split points.

</details>

<details>

<summary>Outputs</summary>

* **Main Output** (Default): New point data with the split paths.

</details>

### Properties Overview

Controls how paths are split and what happens at each split point.

***

#### Split Settings

Controls the behavior of how paths are split.

**Split Action**

_What action to take when a point matches the filter._

* Determines how the path is modified at the split point.
* When set to **Split**, the point is duplicated so that one becomes the end of the previous path and another becomes the start of a new path.
* When set to **Remove**, the point is removed, shrinking both the previous and next paths.
* When set to **Disconnect**, the point is disconnected from the next point, starting a new path from the next point.
* When set to **Partition**, it creates new data sets only when the filter result changes from its previous result.
* When set to **Switch**, it uses the filter result as a switch signal to toggle between keep/prune behavior.

**Values**:

* **Split**: Duplicate the split point so the original becomes a new end, and the copy a new start.
* **Remove**: Remove the split point, shrinking both the previous and next paths.
* **Disconnect**: Disconnect the split point from the next one, starting a new path from the next.
* **Partition**: Works like split but only create new data set as soon as the filter result changes from its previous result.
* **Switch**: Use the result of the filter as a switch signal to change between keep/prune behavior.

**Initial Behavior**

_Controls how to handle the first point when using Partition or Switch modes._

* Only applies when Split Action is set to **Partition** or **Switch**.
* When set to **Constant**, uses a fixed value defined by "Initial Value".
* When set to **Constant (Preserve)**, same as Constant but does not switch if the first value is the same.
* When set to **From Point**, uses the first point's starting value.
* When set to **From Point (Preserve)**, uses the first point's starting value but preserves its behavior.

**Values**:

* **Constant**: Use a constant value.
* **Constant (Preserve)**: Use a constant value, but does not switch if the first value is the same.
* **From Point**: Use the first point starting value.
* **From Point (Preserve)**: Use the first point starting value, but preserve its behavior.

**Initial Value**

_The initial switch value to start from when using Partition or Switch modes._

* Only applies when Initial Behavior is set to **Constant** and Split Action is **Partition** or **Switch**.
* If false, paths are created only after the first true result.
* If true, paths are created starting from the beginning and stop at the first true result instead.

**Inclusive**

_Should point insertion be inclusive of the behavior change._

* Only applies when Split Action is set to **Partition** or **Switch**.
* When enabled, the behavior change point is included in the new path it affects.

**Omit Single Point Outputs**

_Whether to output single-point data or not._

* When enabled, paths with only one point are excluded from the output.

***

#### Tagging Settings

Controls optional tagging of split results.

**Tag If Even Split**

_When enabled, tag paths that have an even number of points._

* Applies a tag to paths where the number of points is even.
* Useful for distinguishing path segments based on their length.

**Is Even Tag**

_Name of the tag applied to even-length paths._

* Only used when "Tag If Even Split" is enabled.
* Defaults to "EvenSplit".

**Tag If Odd Split**

_When enabled, tag paths that have an odd number of points._

* Applies a tag to paths where the number of points is odd.
* Useful for distinguishing path segments based on their length.

**Is Odd Tag**

_Name of the tag applied to odd-length paths._

* Only used when "Tag If Odd Split" is enabled.
* Defaults to "OddSplit".

### Notes

* This node works best with point-based paths that have a clear sequence.
* Use filters in the "Split Conditions" input to define where splits should occur.
* The **Partition** and **Switch** modes are particularly useful for creating segmented paths based on dynamic conditions.
* When using **Switch**, consider enabling **Inclusive** to ensure that behavior change points are included in the resulting segments.
* For performance, avoid using complex filters or large datasets without caching enabled.
