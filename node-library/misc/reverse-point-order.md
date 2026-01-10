---
description: 'In editor :: PCGEx | Reverse Point Order'
icon: circle
---

# Reverse Point Order

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Reverse the sequence of points or adjust the winding direction of paths.

#### Overview

The Reverse Order node lets you change how points are arranged in your data. You can reverse their order or adjust the winding of paths. This is helpful when you need consistent point sequencing for mesh creation, path following, or other procedural workflows that depend on ordered data.

It works with both point data and path data. For points, it simply changes their sequence. For paths, it modifies how the points are oriented in 2D space to achieve a specific winding direction.

{% hint style="info" %}
This node connects to **Point** and **Path** inputs and outputs modified point or path data.
{% endhint %}

#### How It Works

The Reverse Order node changes point sequences based on the method you choose:

* **None**: No changes are made. Points stay in their original order.
* **Sorting Rules**: Points are reordered using a sorting rule, like arranging them from low to high along an axis. This reorders all points according to that rule.
* **Winding**: For paths, this adjusts the direction the points follow in 2D space. It calculates how the path is oriented on a flat surface and then reverses the point order so it matches your desired winding (either clockwise or counter-clockwise).

You can also mark points or paths that were changed, which helps with debugging or applying conditions later in your workflow.

<details>

<summary>Inputs</summary>

* **Points**: Accepts point data to reorder.
* **Paths**: Accepts path data to adjust winding.

</details>

<details>

<summary>Outputs</summary>

* **Points**: Outputs the reordered point data.
* **Paths**: Outputs paths with adjusted winding or reordered points.

</details>

#### Configuration

<details>

<summary><strong>Method</strong><br><em>How to reverse the point order.</em></summary>

Controls how the reversal is performed.

**Values**:

* **None**: No reversal.
* **Sorting Rules**: Reverses based on sorting rules.
* **Winding**: Changes the winding direction of paths.

</details>

<details>

<summary><strong>Sort Direction</strong><br><em>Sort direction</em></summary>

Only used when "Sorting Rules" is selected. Determines whether to sort in ascending or descending order.

**Values**:

* **Ascending**: Sorts points from low to high.
* **Descending**: Sorts points from high to low.

</details>

<details>

<summary><strong>Winding</strong><br><em>Winding</em></summary>

Only used when "Winding" is selected. Sets the desired winding direction for paths.

**Values**:

* **Clockwise**: Points are ordered clockwise.
* **Counter Clockwise**: Points are ordered counter-clockwise.

</details>

<details>

<summary><strong>Projection Details</strong><br><em>Projection settings. Winding is computed on a 2D plane.</em></summary>

Only used when "Winding" is selected. Defines how the 2D projection of the path is calculated for winding determination.

</details>

<details>

<summary><strong>Swap Attributes Values</strong><br><em>...</em></summary>

Allows swapping values between two attributes on points, optionally multiplying one by -1.

</details>

<details>

<summary><strong>Tag If Reversed</strong><br><em>...</em></summary>

When enabled, adds a tag to points or paths that were reversed.

</details>

<details>

<summary><strong>Is Reversed Tag</strong><br><em>...</em></summary>

The name of the tag applied when a point or path is reversed.

</details>

<details>

<summary><strong>Tag If Not Reversed</strong><br><em>...</em></summary>

When enabled, adds a tag to points or paths that were not reversed.

</details>

<details>

<summary><strong>Is Not Reversed Tag</strong><br><em>...</em></summary>

The name of the tag applied when a point or path was not reversed.

</details>

#### Usage Example

1. Take a set of points representing a polygon.
2. Use the Reverse Order node with the "Winding" method to ensure that the points are ordered counter-clockwise.
3. Connect the output to a mesh generation node to create a correctly oriented mesh.

#### Notes

* When using the Winding method, projection settings affect how the 2D plane is calculated for winding determination.
* Tagging can help identify which data was modified during processing.
* The node does not modify the original point positions; it only changes their order or winding direction.
