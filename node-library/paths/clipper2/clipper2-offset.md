---
description: 'In editor :: PCGEx | Clipper2 : Offset'
icon: circle
---

# Clipper2 : Offset

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Applies a geometric offset to paths in your PCG graph, useful for creating outlines, expanding or contracting shapes, and generating buffer zones.

#### How It Works

This node takes input paths and applies a geometric offset using Clipper2's offsetting algorithm. The process involves:

1. Projecting the path onto a 2D plane based on the specified projection settings (normal or best-fit).
2. Applying an offset amount to each path segment, either inward or outward.
3. Handling corner joins according to the selected join type (round, square, miter, etc.).
4. Managing path ends with specific end types for open and closed paths.
5. Optionally applying multiple iterations of the offset operation, with a consolidation method to determine how many iterations to apply when sources have different values.
6. Writing iteration data to attributes or tags if enabled.

The node supports both single and dual (inward + outward) offsets, allowing you to create shapes that are simultaneously expanded and contracted from the original path.

#### Configuration

<details>

<summary><strong>Projection Details</strong><br><em>Projection settings.</em></summary>

Controls how the input paths are projected onto a 2D plane for offsetting. This affects the orientation of the offset operation.

</details>

<details>

<summary><strong>Iterations</strong><br><em>Number of iterations to apply</em></summary>

The number of times the offset operation is applied to each path. For example, setting this to 3 will apply the offset three times in sequence.

</details>

<details>

<summary><strong>Iteration Consolidation</strong><br><em>How to determine final iteration count when iteration attribute from multiple source differ</em></summary>

Determines how to resolve differences in iteration counts if multiple input paths have different values. Options are:

* **First**: Use the first path's value.
* **Last**: Use the last path's value.
* **Average**: Take the average of all values.
* **Min**: Use the minimum value.
* **Max**: Use the maximum value.

</details>

<details>

<summary><strong>Min Iterations</strong><br><em>Minimum guaranteed iterations</em></summary>

Sets a minimum number of iterations to apply, even if the input iteration count is lower. This ensures at least this many offset operations are performed.

</details>

<details>

<summary><strong>Offset</strong><br><em>Offset amount</em></summary>

The distance by which to offset the paths. Positive values expand the shape outward; negative values contract it inward.

</details>

<details>

<summary><strong>Offset Scale</strong><br><em>Offset Scale (mostly useful when using attributes)</em></summary>

A multiplier applied to the base offset value, useful when the offset is driven by an attribute.

</details>

<details>

<summary><strong>Join Type</strong><br><em>Join type for corners</em></summary>

Controls how sharp corners are handled during offsetting. Options include:

* **Round**: Corners are rounded.
* **Square**: Corners are squared.
* **Miter**: Corners are extended to meet at a point (with a limit).
* **Bevel**: Corners are cut off.

</details>

<details>

<summary><strong>Miter Limit</strong><br><em>Miter limit (only used with Miter join type)</em></summary>

When using the Miter join type, this controls how far the corner can extend before being clipped. A value of 2.0 means that if the miter length exceeds twice the offset distance, it will be clipped to a square end.

</details>

<details>

<summary><strong>End Type Closed</strong><br><em>End type for closed paths</em></summary>

Controls how closed paths are treated at their endpoints. Options include:

* **Polygon**: Treats as a closed polygon.
* **Joined**: Joins the ends (creates thin paths with double-sided offsets).
* **Butt**: Ends are cut off square.
* **Square**: Ends are extended square.
* **Round**: Ends are rounded.

</details>

<details>

<summary><strong>End Type Open</strong><br><em>End type for open paths</em></summary>

Controls how open paths are treated at their endpoints. Options include:

* **Polygon**: Treats as a closed polygon.
* **Joined**: Joins the ends (creates thin paths with double-sided offsets).
* **Butt**: Ends are cut off square.
* **Square**: Ends are extended square.
* **Round**: Ends are rounded.

</details>

<details>

<summary><strong>Write Iteration</strong><br></summary>

When enabled, writes the iteration index to a data attribute.

</details>

<details>

<summary><strong>Iteration Attribute Name</strong><br><em>Write the iteration index to a data attribute</em></summary>

The name of the data attribute where the iteration index will be written.

</details>

<details>

<summary><strong>Tag Iteration</strong><br></summary>

When enabled, writes the iteration index to a tag.

</details>

<details>

<summary><strong>Iteration Tag</strong><br><em>Write the iteration index to a tag</em></summary>

The name of the tag where the iteration index will be written.

</details>

<details>

<summary><strong>Tag Dual</strong><br></summary>

When enabled, writes a tag to indicate dual (negative) offsets.

</details>

<details>

<summary><strong>Dual Tag</strong><br><em>Write this tag on the dual (negative) offsets</em></summary>

The name of the tag to apply to negative offset paths when using dual mode.

</details>

#### Usage Example

Create a set of open and closed paths, then use this node to generate an offset version of each. Set the offset amount to 50 units, and choose "Round" for join type and "Butt" for end type. This will create clean, rounded outlines around your original paths with square ends.

#### Notes

* The offset operation is performed in 2D space, projected using the specified projection settings.
* Iteration consolidation can be used to ensure consistent results when combining paths with different iteration counts.
* Dual offset mode allows you to generate both inward and outward offsets from a single path, useful for creating shapes like borders or outlines.
