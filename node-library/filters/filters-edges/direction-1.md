---
description: 'In editor :: PCGEx | Edge Filter : Length'
icon: circle-dashed
---

# Length

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the subnode does, but still needs to be proofread by a human.
{% endhint %}

> Filters edges based on their length using a configurable comparison.

#### How It Works

This subnode evaluates each edge in a graph and determines whether it meets a specific length condition. It calculates the distance between the start and end points of an edge, then compares that distance to a defined threshold using a selected operator. If the comparison is true, the edge passes through; otherwise, it's filtered out.

The process includes:

1. Measuring the straight-line distance between the two points of each edge.
2. Comparing this measured length against a set threshold using the chosen operator.
3. Optionally flipping the result if the invert toggle is enabled.

#### Configuration

<details>

<summary><strong>Threshold Input</strong><br><em>Whether to read the threshold from an attribute on the edge or a constant.</em></summary>

Controls whether the filter uses a fixed value or reads the threshold from an attribute on the edges.

**Values**:

* **Constant**: Use a fixed user-defined value.
* **Attribute**: Read the threshold value from an attribute on the input data.

</details>

<details>

<summary><strong>Threshold (Attr)</strong><br><em>Attribute to fetch threshold from.</em></summary>

The name of the edge attribute that contains the threshold values, used when Threshold Input is set to Attribute.

</details>

<details>

<summary><strong>Threshold</strong><br><em>Constant value for the length threshold.</em></summary>

The fixed threshold value used when Threshold Input is set to Constant. Must be greater than or equal to 1.

</details>

<details>

<summary><strong>Comparison</strong><br><em>Comparison check.</em></summary>

The logical operation used to compare edge lengths against the threshold.

**Values**:

* **==**: Strictly equal to
* **!=**: Strictly not equal to
* **>=**: Equal or greater than
* **<=**: Equal or smaller than
* **>**: Strictly greater than
* **<**: Strictly smaller than
* **\~=**: Nearly equal to (within tolerance)
* **!\~=**: Nearly not equal to (outside tolerance)

</details>

<details>

<summary><strong>Tolerance</strong><br><em>Rounding mode for approx. comparison modes.</em></summary>

A small value used when using approximate comparisons (e.g., Nearly Equal). Defines how close the edge length must be to the threshold to pass.

</details>

<details>

<summary><strong>Invert</strong><br><em>When enabled, the result of the comparison is flipped.</em></summary>

When enabled, edges that would normally pass the filter are excluded, and those that fail are included.

</details>

#### Usage Example

You're building a procedural city network and want to ensure roads (represented as edges) are at least 50 units long. You set the Threshold to 50, Comparison to "Greater Than or Equal", and leave Invert unchecked. This filters out all edges shorter than 50 units, keeping only the significant road connections.

#### Notes

* The length is calculated using the Euclidean distance between the two points of each edge.
* Using Attribute input allows for dynamic thresholds per edge, useful for varying requirements across a dataset.
* When using approximate comparisons (e.g., Nearly Equal), ensure tolerance is set appropriately to avoid unintended filtering.
