---
description: 'In editor :: PCGEx | Path : Insert'
icon: circle
---

# Insert

{% hint style="warning" %}
This node is currently hidden (WIP)
{% endhint %}

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Insert nearest points into paths using different methods.

#### How It Works

This node takes existing paths and adds new points along them by finding the closest locations on each path to input points. For every point that falls within a specified distance from a path, it calculates where that point would best fit along the path. If snapping is enabled, the new point is placed exactly on the path at that location. Otherwise, the point keeps its original position but is still added to the path. The node supports filtering based on distance, so only points near enough to be useful are considered for insertion.

#### Configuration

<details>

<summary><strong>Snap To Path</strong><br><em>If enabled, inserted points will be snapped to the path. Otherwise, they retain their original location.</em></summary>

When enabled, the new points are placed exactly on the path at the closest point along the path to where they were originally located. When disabled, the points keep their original positions.

</details>

<details>

<summary><strong>Within Range</strong><br><em>Only insert points that are within a certain distance from the path.</em></summary>

When enabled, only points within a specified range of the path are considered for insertion. This helps limit how many new points are added and avoids inserting distant points.

</details>

<details>

<summary><strong>Range Input</strong><br><em>How to determine the maximum distance for insertion.</em></summary>

* **Constant**: Use a fixed value for the range.
* **Attribute**: Read the range from an attribute on the input points.

</details>

<details>

<summary><strong>Range (Attr)</strong><br><em>Attribute name to read the insertion range from.</em></summary>

The name of the attribute that contains the range value when "Range Input" is set to "Attribute".

</details>

<details>

<summary><strong>Range</strong><br><em>Maximum distance for insertion.</em></summary>

The fixed maximum distance from the path within which points are considered for insertion. Only used when "Range Input" is set to "Constant".

</details>

<details>

<summary><strong>Carry Over Settings</strong><br><em>Meta filter settings.</em></summary>

Controls how attributes and metadata from the original points are carried over or blended into the new path points.

</details>

#### Usage Example

You have a set of paths representing roads and a collection of points representing landmarks. You want to add these landmarks as new waypoints on the roads, but only if they are within 50 units of any road. Enable "Within Range", set the range to 50, and optionally enable "Snap To Path" so that the landmarks align exactly with the road geometry.

#### Notes

* Insertion is performed per-path and may result in multiple new points being added.
* If snapping is disabled, the inserted point's position will not change, but it will still be added to the path.
* The node does not modify the original input points; it only affects the output paths.
* Performance can degrade with many points or long paths due to distance calculations.
