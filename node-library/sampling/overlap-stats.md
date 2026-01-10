---
description: 'In editor :: PCGEx | Sample : Overlap Stats'
icon: circle
---

# Overlap Stats

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Sample and write per-point overlap statistics between entire point datasets.

#### Overview

This node analyzes how much overlap exists between different point datasets in your PCG graph. It calculates unique and total overlap counts for each point based on spatial relationships, which can be useful for generating variation, avoiding collisions, or understanding spatial distribution.

It's particularly helpful when you want to know how many other datasets a point overlaps with, or how much overlap occurs overall. You can use this information to drive visual variations, influence placement logic, or tag points based on their overlap characteristics.

{% hint style="info" %}
Connects to **Point Filters** subnode for filtering which points are considered for overlap analysis.
{% endhint %}

#### How It Works

This node performs a multi-step spatial analysis between all input point datasets:

1. For each dataset, it computes bounds (either scaled, density-based, or raw) for every point, optionally expanding them by a margin to account for transformations.
2. It then compares these bounds across all pairs of datasets using the selected overlap test mode:
   * **Fast**: Only compares overall bounding boxes of datasets.
   * **Box**: Tests each point's bounds as transformed boxes (may miss some overlaps).
   * **Sphere**: Tests each point's bounds as spheres (may produce false positives).
3. When an overlap is detected, it records the intersection volume and updates statistics for both points involved.
4. It calculates unique overlap count (how many different datasets overlapped each point) and total overlap sub-count (total number of overlaps per point).
5. If enabled, it also computes relative values by normalizing these counts against the maximum values found across all datasets.

The results are written to attributes on each point, allowing downstream nodes to use this data for further processing or visualization.

<details>

<summary>Inputs</summary>

* Point data from multiple input pins (at least one required).
* Optional point filter subnode to define which points participate in overlap checks.

</details>

<details>

<summary>Outputs</summary>

* Modified point data with new attributes added based on configuration.
* Optionally tags points based on whether they have any or no overlaps.

</details>

#### Configuration

<details>

<summary><strong>Test Mode</strong><br><em>Overlap test mode.</em></summary>

Controls how overlap is detected between points.

**Values**:

* **Fast**: Only compares overall bounds of datasets.
* **Box**: Tests each point's bounds as transformed boxes.
* **Sphere**: Tests each point's bounds as spheres.

</details>

<details>

<summary><strong>Bounds Source</strong><br><em>Point bounds to be used to compute overlaps.</em></summary>

Determines how the spatial extent of each point is calculated for overlap testing.

**Values**:

* **Scaled Bounds**: Uses bounds scaled by point size.
* **Density Bounds**: Uses bounds scaled with density and steepness factors.
* **Bounds**: Raw, unscaled bounds.
* **Center**: Treats each point as a tiny box centered on itself.

</details>

<details>

<summary><strong>Expansion</strong><br><em>Expand bounds by that amount to account for a margin of error due to multiple layers of transformation and lack of OBB.</em></summary>

Adds a margin around each point's bounds to account for transformations or inaccuracies in bounding box calculations.

</details>

<details>

<summary><strong>Min Threshold</strong><br><em>The minimum amount two sub-points must overlap to be added to the comparison. The higher, the more "overlap" there must be.</em></summary>

Sets the minimum required overlap for a pair of points to be considered overlapping.

</details>

<details>

<summary><strong>Threshold Measure</strong><br><em>How to interpret the min overlap value. Discrete means distance in world space Relative means uses percentage (0-1) of the averaged radius.</em></summary>

Defines how the minimum threshold is interpreted.

**Values**:

* **Relative**: Treats the threshold as a percentage of the average point radius.
* **Discrete**: Treats the threshold as an absolute distance in world units.

</details>

<details>

<summary><strong>Write Overlap Count</strong><br><em>Write the unique overlap count to an int32 attribute.</em></summary>

When enabled, writes how many different datasets overlapped each point.

</details>

<details>

<summary><strong>Overlap Count Attribute Name</strong><br><em>Name of the 'int32' attribute to write unique overlap count to. Unique overlap count is the number of time a different point data set overlapped this point.</em></summary>

Name of the attribute that stores the unique overlap count.

</details>

<details>

<summary><strong>Write Overlap Sub Count</strong><br><em>Write the total number of overlaps.</em></summary>

When enabled, writes the total number of overlaps for each point (including multiple overlaps with the same dataset).

</details>

<details>

<summary><strong>Overlap Sub Count Attribute Name</strong><br><em>Name of the 'int32' attribute to write total overlap sub-count to. Total overlap count is the number of time another point overlapped this point. This count can get really high, really fast.</em></summary>

Name of the attribute that stores the total overlap sub-count.

</details>

<details>

<summary><strong>Write Relative Overlap Count</strong><br><em>Write the relative unique overlap count to an int32 attribute.</em></summary>

When enabled, writes a normalized version of the unique overlap count based on the maximum found across all datasets.

</details>

<details>

<summary><strong>Relative Overlap Count Attribute Name</strong><br><em>Name of the 'int32' attribute to write relative unique overlap count to. Relative Unique overlap count is this collection' OverlapSubCount divided by the max of all collections combined.</em></summary>

Name of the attribute that stores the relative unique overlap count.

</details>

<details>

<summary><strong>Write Relative Overlap Sub Count</strong><br><em>Write the total number of overlaps.</em></summary>

When enabled, writes a normalized version of the total overlap sub-count based on the maximum found across all datasets.

</details>

<details>

<summary><strong>Relative Overlap Sub Count Attribute Name</strong><br><em>Name of the 'int32' attribute to write relative total overlap sub-count to. Relative Total overlap count is is this collection' OverlapCount divided by the max of all collections combined.</em></summary>

Name of the attribute that stores the relative total overlap sub-count.

</details>

<details>

<summary><strong>Tag If Has Any Overlap</strong><br><em>...</em></summary>

When enabled, tags points that have at least one overlap with a custom tag.

</details>

<details>

<summary><strong>Has Any Overlap Tag</strong><br><em>...</em></summary>

The tag name to apply to points that have any overlap.

</details>

<details>

<summary><strong>Tag If Has No Overlap</strong><br><em>...</em></summary>

When enabled, tags points that have no overlaps with a custom tag.

</details>

<details>

<summary><strong>Has No Overlap Tag</strong><br><em>...</em></summary>

The tag name to apply to points that have no overlap.

</details>

#### Usage Example

Use this node in a graph where you're generating multiple point distributions (e.g., trees, rocks, and flowers). Connect each distribution to the input pins. Configure the overlap test mode to "Sphere" for accurate overlap detection. Enable writing of both overlap count and overlap sub-count attributes. Then use these attributes downstream to adjust point scale or color based on how much they overlap with other distributions.

#### Notes

* This node is computationally expensive, especially with many points or datasets.
* The "Fast" test mode is the quickest but least accurate for complex overlaps.
* Relative values are normalized using the maximum overlap count found across all datasets, so results may vary between different data configurations.
* Consider filtering input points to reduce processing time if you only need overlap stats for a subset of your data.
