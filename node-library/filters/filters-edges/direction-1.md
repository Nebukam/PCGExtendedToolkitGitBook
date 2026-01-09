---
description: 'In editor :: PCGEx | Edge Filter : Length'
icon: circle-dashed
---

# Length

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Check edges based on their length against a threshold value.

#### Overview

This subnode filters edges in a graph by comparing their length to a defined threshold. It's useful for removing or keeping only edges that meet certain size criteria, such as filtering out very short connections between points or ensuring all edges are above a minimum length.

It connects to the **Filter** input pin of processing nodes that work with edges, allowing you to define which edges should pass through in downstream operations.

{% hint style="info" %}
Connects to Filter pins on edge-processing nodes.
{% endhint %}

#### How It Works

This subnode evaluates each edge in a graph and compares its length to a threshold value using a comparison operator. The result determines whether the edge passes the filter or not.

* It first calculates the length of an edge, which is the Euclidean distance between its start and end points.
* Then, it compares this length against the configured threshold using the selected comparison mode.
* If the comparison evaluates to true, the edge passes the filter; otherwise, it fails.
* Optionally, the result can be inverted so that edges that would normally pass instead fail, and vice versa.

<details>

<summary>Inputs</summary>

Expects a graph data input containing edges to be filtered.

</details>

<details>

<summary>Outputs</summary>

Produces a filtered list of edges based on the defined length criteria.

</details>

#### Configuration

***

**ThresholdInput**

_Whether to read the threshold from an attribute on the edge or a constant._

When set to **Constant**, the node uses the value specified in the **Threshold** setting.\
When set to **Attribute**, it reads the threshold value from an attribute on the edge data.

**Values**:

* **Constant**: Use a fixed value for comparison.
* **Attribute**: Read the comparison threshold from an attribute on each edge.

***

**ThresholdConstant**

_Threshold value used for comparison when ThresholdInput is set to Constant._

Controls the length value that edges are compared against.\
For example, setting this to 50 means edges shorter than 50 units will be filtered out if using a "Greater Than" comparison.

***

**Comparison**

_Comparison check used to evaluate edge lengths._

Determines how the edge's length is compared to the threshold.

**Values**:

* **==**: Strictly equal to threshold.
* **!=**: Strictly not equal to threshold.
* **>=**: Equal or greater than threshold.
* **<=**: Equal or smaller than threshold.
* **>**: Strictly greater than threshold.
* **<**: Strictly smaller than threshold.
* **\~=**: Nearly equal to threshold (within tolerance).
* **!\~=**: Nearly not equal to threshold (outside tolerance).

***

**Tolerance**

_Rounding mode for approximate comparison modes._

Only used when using **Nearly Equal** or **Nearly Not Equal** comparisons.\
Controls how close the edge length must be to the threshold to be considered "nearly equal".

***

**bInvert**

_When enabled, inverts the filter result._

When enabled, edges that would normally pass the filter are rejected, and those that fail are accepted.

#### Usage Example

You're building a terrain mesh using point clusters connected by edges. You want to remove any edges that are shorter than 10 units to avoid creating overly dense geometry. Set **ThresholdInput** to **Constant**, **ThresholdConstant** to 10, and **Comparison** to **StrictlyGreater**. This will only allow edges longer than 10 units to pass through.

#### Notes

* The edge length is calculated as the straight-line distance between its start and end points.
* Using **Attribute** for threshold input allows dynamic filtering based on per-edge data, such as varying thresholds across a graph.
* The **Tolerance** setting is helpful when dealing with floating-point precision issues in comparisons.
* Inverting the filter can be useful for creating exclusion zones or removing specific edge types from further processing.
