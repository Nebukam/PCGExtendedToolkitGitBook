---
description: 'In editor :: PCGEx | Vtx Filter : Edge Angle'
icon: circle-dashed
---

# Edge Angle

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Dot product comparison of connected edges against themselves. Mostly useful on binary nodes only.

#### Overview

This filter evaluates the angle between edges connected to a vertex (node) using dot products. It's primarily designed for binary nodes — those with exactly two connected edges. For nodes with fewer or more edges, it uses fallback behavior to determine whether they pass or fail the filter.

This subnode is useful when you want to define rules based on angular relationships between connected edges in a graph structure, such as filtering sharp turns or straight paths in procedural road networks or branching structures.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes that accept vertex filters.
{% endhint %}

#### How It Works

This filter calculates the angle between two edges that connect to a node by computing their dot product. The dot product is then compared against a threshold value using configurable comparison logic.

For binary nodes (with exactly two connected edges), it computes the angle between those two edges and evaluates whether that angle meets the specified condition (e.g., greater than 45 degrees). For leaf nodes (single edge) or complex nodes (more than two edges), it returns either a pass or fail based on the configured fallback behavior.

The filter supports inverting its result, which also affects how fallbacks are interpreted. It does not directly modify data but instead defines a condition that can be used to determine whether a node should be included or excluded from further processing.

<details>

<summary>Inputs</summary>

* Vertex (Node) data
* Edge data connecting vertices

</details>

<details>

<summary>Outputs</summary>

* Boolean result per vertex indicating pass/fail based on angle comparison

</details>

#### Configuration

***

**LeavesFallback**

_What should this filter return when dealing with leaf nodes? (nodes that only have one edge)_

When a node has only one connected edge, the filter cannot compute an angle between two edges. This setting determines whether such nodes are considered to pass or fail the filter.

**Values**:

* **Pass**: Leaf nodes will be included in the filtered result.
* **Fail**: Leaf nodes will be excluded from the filtered result.

***

**NonBinaryFallback**

_What should this filter return when dealing with complex, non-binary nodes? (nodes that have more than two edges)_

When a node has more than two connected edges, the filter cannot compute a meaningful angle between two edges. This setting determines whether such nodes are considered to pass or fail the filter.

**Values**:

* **Pass**: Complex nodes will be included in the filtered result.
* **Fail**: Complex nodes will be excluded from the filtered result.

***

**DotComparisonDetails**

_Dot comparison settings_

This controls how the dot product of edge vectors is compared against a threshold. It includes options for comparison type (e.g., greater than, equal to) and the threshold value itself.

***

**bInvert**

_Whether the result of the filter should be inverted or not. Note that this will also invert fallback results!_

When enabled, the pass/fail behavior of the filter is reversed. That is, nodes that would normally pass now fail, and vice versa. This also applies to fallback behaviors.

#### Usage Example

Use this filter in a graph-based procedural generation setup where you want to identify straight paths or sharp turns. For instance:

* Set `LeavesFallback` to **Fail** so leaf nodes (dead ends) are excluded.
* Set `NonBinaryFallback` to **Fail** so branching points with more than two edges are not included.
* Configure the dot comparison to require that the angle between connected edges is greater than 90 degrees, effectively filtering for sharp turns.

This configuration would let you isolate only nodes where edges form acute angles — useful for creating winding paths or detecting corners in a terrain mesh.

#### Notes

* This filter works best on binary nodes (nodes with exactly two connected edges).
* For leaf or complex nodes, the fallback behavior is applied.
* The dot product comparison can be used to detect various angular relationships such as straight lines, sharp turns, or wide angles.
* Inverting the result allows for filtering out specific angular configurations instead of including them.
