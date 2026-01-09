---
description: 'In editor :: PCGEx | Cherry Pick Points'
icon: scrubber
---

# Cherry Pick Points

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Filter points by indices, either read from local attributes or using external sources.

### Overview

This node allows you to selectively keep or discard specific points from a dataset based on their index positions. You can define which indices to pick either directly from an attribute on the input data or by connecting additional source inputs that contain the indices. This is useful for extracting specific elements from a larger point cloud, such as selecting certain vertices from a mesh or choosing specific locations from a procedural distribution.

{% hint style="info" %}
This node supports both inverting the selection (keeping all points except the specified indices) and optionally outputting discarded points to a separate dataset.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Default Input** _(Required)_: Point data to filter.
* **Sources** _(Optional, Multiple)_: Additional inputs containing point index data for filtering.

</details>

<details>

<summary>Outputs</summary>

* **Default Output** _(Required)_: Points that match the cherry-pick criteria.
* **Discarded** _(Optional)_: Points that were filtered out when "Output Discarded Points" is enabled.

</details>

### Properties Overview

Controls how the node filters and processes point data.

***

#### Settings

Defines core filtering behavior.

**Invert**

_When enabled, the node will discard the specified indices instead of keeping them._

* Reverses the selection logic
* Useful for excluding specific points from a larger dataset

**Output Discarded Points**

_When enabled, discarded points are sent to a separate output pin._

* Creates an additional output called "Discarded"
* Allows you to visualize or further process the filtered-out points
* Only active when "Allow Empty Outputs" is also enabled

**Allow Empty Outputs**

_When enabled, output pins can be left empty if no points match criteria._

* Prevents errors when no points are selected
* Useful for conditional workflows where some outputs may legitimately be empty

#### Source

Controls how indices are read for filtering.

**Source Type**

_Specifies whether to read indices from the input data or external sources._

* **Self**: Read indices from an attribute on the current input dataset.
* **Sources**: Read indices from one or more connected source inputs.
