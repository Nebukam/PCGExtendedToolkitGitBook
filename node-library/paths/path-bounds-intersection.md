---
description: 'In editor :: PCGEx | Path × Bounds Intersection'
icon: circle
---

# Path × Bounds Intersection

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Find where paths cross or touch bounding volumes defined by input points.

#### Overview

This node detects where paths intersect with bounding volumes created from input points. It helps determine how many times a path crosses through or touches specific areas in space. This is useful for procedural placement, modifying paths, or generating cut points along paths.

It works on a group of paths and compares them against point data to find intersections. The results can be used to split paths, tag segments, or add new points at intersection locations.

{% hint style="info" %}
Connects to **Paths** input pin and outputs modified paths with optional intersection data.
{% endhint %}

#### How It Works

This node performs the following steps:

1. It takes a set of paths and a set of points as inputs.
2. For each path, it creates bounding volumes (such as boxes or oriented bounding boxes) based on the input point data.
3. It then checks for intersections between each segment of the path and these bounding volumes.
4. When intersections are found, new points are generated at those locations along the path.
5. These intersection points can be blended with neighboring points using a blending subnode to smooth transitions or inherit properties.
6. Optionally, segments of paths that intersect with bounds are tagged based on settings.

The node supports both closed and open paths, and can be configured to tag paths as "cut" or "uncut" depending on whether they intersect with any bounds.

<details>

<summary>Inputs</summary>

* **Paths**: Input path data to process.
* **Points**: Input point data used to define bounding volumes for intersection checks.

</details>

<details>

<summary>Outputs</summary>

* Modified paths with new intersection points inserted where applicable.
* Optional tags applied to paths based on whether they intersect bounds.

</details>

#### Configuration

<details>

<summary><strong>DataMatching</strong><br><em>If enabled, allows you to filter out which targets get sampled by which data.</em></summary>

When enabled, this setting lets you define how input points are matched to path segments for intersection testing. This can be useful when you want to limit which bounds affect which paths.

</details>

<details>

<summary><strong>Blending</strong><br><em>Blending applied on intersecting points along the path prev and next point.</em></summary>

A subnode that defines how to blend properties of intersection points with their neighboring points. This is different from inheriting external properties, as it focuses specifically on blending between adjacent points in a path.

</details>

<details>

<summary><strong>OutputSettings</strong><br><em>Output settings for the intersection results.</em></summary>

Controls how intersection data is structured and outputted. Defines which attributes are created or modified during processing.

</details>

<details>

<summary><strong>bTagIfHasCuts</strong><br><em>When enabled, paths that intersect bounds will be tagged.</em></summary>

When enabled, paths that have intersections with bounding volumes are tagged with the value specified in `HasCutsTag`.

</details>

<details>

<summary><strong>HasCutsTag</strong><br><em>Tag applied to paths that have cuts.</em></summary>

The tag name used when a path intersects with any bounding volume.

</details>

<details>

<summary><strong>bTagIfUncut</strong><br><em>When enabled, paths that do not intersect bounds will be tagged.</em></summary>

When enabled, paths that do not intersect with any bounding volumes are tagged with the value specified in `UncutTag`.

</details>

<details>

<summary><strong>UncutTag</strong><br><em>Tag applied to paths that have no cuts.</em></summary>

The tag name used when a path does not intersect with any bounding volume.

</details>

#### Usage Example

1. Create a set of paths using a Path Generator node.
2. Use a Point Generator or Point Source node to define points that will form bounding volumes.
3. Connect both the paths and points to this node.
4. Optionally, configure the Blending subnode to control how intersection points inherit properties from neighboring points.
5. Enable tagging if you want to identify which paths intersect with bounds.
6. The output will be a modified set of paths with new points inserted at intersection locations.

#### Notes

* This node is computationally intensive when dealing with many paths and point sets, so performance can be affected by input size.
* Tagging is useful for downstream filtering or visual identification of path segments.
* Blending subnodes allow fine-grained control over how intersection points are interpolated or blended into the existing path structure.
