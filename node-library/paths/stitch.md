---
description: 'In editor :: PCGEx | Path : Stitch'
icon: circle
---

# Stitch

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Stitch paths together by connecting their endpoints.

#### Overview

The Path : Stitch node connects or merges multiple paths at their endpoints to form longer continuous paths. This is useful for joining fragmented path data into coherent routes, such as roads, trails, or any linear structure that should logically connect.

It operates on collections of paths and determines which paths can be joined based on proximity or alignment of their start and end points. The node supports two main methods: "Connect", which preserves all original points and adds segments between paths, and "Fuse", which merges overlapping or nearby endpoints into a single point.

This node is especially helpful when working with procedural data that generates disconnected path segments and needs to be unified for further processing or visualization.

{% hint style="info" %}
Connects to **Input** pins of type _Path_.
{% endhint %}

#### How It Works

The node first evaluates all input paths and identifies potential stitching candidates based on the proximity of their start and end points. It then applies a matching logic:

* If **Only Match Start and Ends** is enabled, it only considers connecting a path's end point to another path's start point.
* Otherwise, it matches any nearby start or end point with another path’s start or end point.

If alignment is required (via the **Requires Alignment** toggle), paths must also be roughly aligned within a specified angular tolerance for stitching to occur.

Once candidates are identified:

* With **Connect** method: Segments are added between paths, preserving all original points.
* With **Fuse** method: Points are merged using one of three operations:
  * **None**: Keeps the selected point as-is.
  * **Average**: Averages the position of the two connecting points.
  * **Line Intersection**: Calculates where the two path segments would intersect if extended.

The stitching process is performed in a way that avoids conflicts, ensuring each point is only merged once. The final result is a set of continuous paths with potentially fewer points or additional segments, depending on the chosen method.

#### Configuration

<details>

<summary><strong>Method</strong><br><em>Choose how paths are connected.</em></summary>

Controls whether paths are joined with new segments (Connect) or points are merged (Fuse).

**Values**:

* **Connect**: Connects paths by adding segments between them, preserving all original points.
* **Fuse**: Merges overlapping or nearby endpoints into a single point.

</details>

<details>

<summary><strong>Fuse Method</strong><br><em>Choose which endpoint to keep during merging.</em></summary>

Only active when **Method** is set to **Fuse**. Determines which endpoint of the two paths to keep during merging.

**Values**:

* **Keep Start**: Retains the start point of the first path.
* **Keep End**: Retains the end point of the first path.

</details>

<details>

<summary><strong>Merge Operation</strong><br><em>Choose how the merged point position is calculated.</em></summary>

Only active when **Method** is set to **Fuse**. Defines how the position of the merged point is calculated.

**Values**:

* **None**: Keeps the selected point as-is.
* **Average**: Averages the coordinates of both connecting points.
* **Line Intersection**: Calculates where the two path segments would intersect if extended.

</details>

<details>

<summary><strong>Only Match Start and Ends</strong><br><em>If enabled, stitching will only happen between a path's end point and another path start point. Otherwise, it's based on spatial proximity alone.</em></summary>

When enabled, paths are only stitched if one ends where another starts.

</details>

<details>

<summary><strong>Requires Alignment</strong><br><em>If enabled, foreign segments must be aligned within a given angular threshold.</em></summary>

When enabled, paths must align within a certain angle to be considered for stitching.

</details>

<details>

<summary><strong>Tolerance</strong><br><em>Controls the maximum distance between points to consider them for stitching.</em></summary>

Sets how close two points must be to be considered for connection or merging. A value of 10 means points within 10 units are candidates.

</details>

<details>

<summary><strong>Sort Direction</strong><br><em>Controls the order in which data will be sorted.</em></summary>

Determines whether the paths are processed in ascending or descending order, affecting stitching priority.

**Values**:

* **Ascending**: Process paths from lowest to highest.
* **Descending**: Process paths from highest to lowest.

</details>

<details>

<summary><strong>Carry Over Settings</strong><br><em>Meta filter settings.</em></summary>

Controls which attributes or metadata are carried over during stitching operations.

</details>

#### Usage Example

Imagine you have a set of disconnected road segments generated procedurally. You can use the Path : Stitch node to connect them into a continuous route. Set the **Method** to **Connect**, and adjust the **Tolerance** to match how close the ends of roads must be to be joined. If you want to merge overlapping road junctions, switch to **Fuse** mode and choose an appropriate **Merge Operation** like **Average**.

#### Notes

* The node works best when input paths are relatively clean and don’t have excessive overlap or complex intersections.
* Using **Fuse** with **Line Intersection** can produce unexpected results if segments are nearly parallel.
* Sorting paths before stitching can help control which connections take precedence.
