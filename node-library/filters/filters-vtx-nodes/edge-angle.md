---
description: 'In editor :: PCGEx | Vtx Filter : Edge Angle'
icon: circle-dashed
---

# Edge Angle

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Filters points based on the angle between edges connected to a node using dot product comparison.

#### Overview

This filter evaluates the angular relationship between edges connected to each node in a graph. It's primarily useful for binary nodes — those with exactly two edges — where it compares the direction of these edges using a dot product. For leaf nodes (with only one edge) or complex nodes (with more than two edges), fallback behaviors are used to determine whether they pass or fail the filter.

This subnode connects to Filter pins on processing nodes that operate on graph vertices, allowing you to selectively include or exclude nodes based on their edge angles.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes.
{% endhint %}

#### How It Works

This filter computes the angle between edges connected to a node by taking the dot product of their normalized directions. For binary nodes (two edges), it compares this dot product against a threshold defined in the settings.

* If the node has exactly two edges, it calculates the dot product of the two edge vectors and evaluates whether that value meets the comparison criteria.
* If the node is a leaf (one edge) or non-binary (more than two edges), the filter returns either `Pass` or `Fail` based on the configured fallback settings.
* The result can be inverted using the invert toggle, which also affects the fallback behavior.

The dot product of two normalized vectors ranges from -1 to 1:

* A value of 1 means the vectors are aligned (0° angle).
* A value of -1 means they are opposite (180° angle).
* A value of 0 means they are perpendicular (90° angle).

This allows you to define conditions like "edges are nearly parallel" or "edges are nearly perpendicular" using comparison operators.

<details>

<summary>Inputs</summary>

Expects a graph data input with nodes and edges. It operates on vertex data associated with each node in the graph.

</details>

<details>

<summary>Outputs</summary>

Returns filtered results based on whether each node's edge angle meets the defined criteria. Nodes that pass the filter are included; those that fail are excluded.

</details>

#### Configuration

<details>

<summary><strong>LeavesFallback</strong><br><em>What should this filter return when dealing with leaf nodes? (nodes that only have one edge)</em></summary>

Controls behavior for nodes with only one connected edge.

**Values**:

* **Pass**: Nodes with one edge will be considered to pass the filter.
* **Fail**: Nodes with one edge will be considered to fail the filter.

</details>

<details>

<summary><strong>NonBinaryFallback</strong><br><em>What should this filter return when dealing with complex, non-binary nodes? (nodes that have more than two edges)</em></summary>

Controls behavior for nodes with more than two connected edges.

**Values**:

* **Pass**: Nodes with more than two edges will be considered to pass the filter.
* **Fail**: Nodes with more than two edges will be considered to fail the filter.

</details>

<details>

<summary><strong>DotComparisonDetails</strong><br><em>Dot comparison settings</em></summary>

Settings that define how the dot product result is compared against a threshold.

</details>

<details>

<summary><strong>bInvert</strong><br><em>Whether the result of the filter should be inverted or not. Note that this will also invert fallback results!</em></summary>

When enabled, the output of the filter is flipped — what would normally pass now fails, and vice versa.

</details>

#### Usage Example

Use this subnode to filter nodes where edges are aligned in a specific way. For instance, you might want to keep only nodes where two connected edges form an angle close to 90 degrees (i.e., nearly perpendicular). Configure the comparison to test if the dot product is near zero, and set fallbacks to `Fail` for leaf or non-binary nodes.

#### Notes

* This filter works best on binary nodes. On leaf or complex nodes, it uses fallback behavior.
* The invert toggle affects both regular filtering and fallback results.
* Dot product comparisons are sensitive to vector normalization — ensure edge directions are normalized if needed.
