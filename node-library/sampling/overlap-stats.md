---
description: 'In editor :: PCGEx | Sample : Overlap Stats'
icon: circle
---

# Overlap Stats

Sample & write per-point overlap stats between entire point data.

**How It Works**

> AI-Generated, needs proofreading

* The node samples and computes per-point overlap statistics for an entire point dataset based on specified parameters.
* It uses the selected bounds source to determine the spatial extent of each point and applies expansion to account for potential transformation errors or lack of oriented bounding boxes (OBB).
* Overlap tests are conducted between points, with overlaps below a defined minimum threshold being excluded from further comparison; this threshold can be set in discrete world space units or as a relative percentage based on the averaged radius.
* The overlap statistics generated per point include information about how much each point overlaps with others according to the specified test mode and threshold measure.

#### Configuration

<details>

<summary><strong>Test Mode</strong> <code>PCGExOverlapTestMode</code></summary>

Overlap test mode

⚡ PCG Overridable

</details>

<details>

<summary><strong>Bounds Source</strong> <code>PCGExPointBoundsSource</code></summary>

Point bounds to be used to compute overlaps

⚡ PCG Overridable

</details>

<details>

<summary><strong>Expansion</strong> <code>double</code></summary>

Expand bounds by that amount to account for a margin of error due to multiple layers of transformation and lack of OBB

⚡ PCG Overridable

</details>

<details>

<summary><strong>Min Threshold</strong> <code>double</code></summary>

The minimum amount two sub-points must overlap to be added to the comparison. The higher, the more "overlap" there must be.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Threshold Measure</strong> <code>PCGExMeanMeasure</code></summary>

How to interpret the min overlap value. Discrete means distance in world space Relative means uses percentage (0-1) of the averaged radius.

⚡ PCG Overridable

</details>

**Outputs**

<details>

<summary><strong>Write Overlap Count</strong> <code>bool</code></summary>

Write the unique overlap count to an int32 attribute.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Overlap Count</strong> <code>Name</code></summary>

Name of the 'int32' attribute to write unique overlap count to. Unique overlap count is the number of time a different point data set overlapped this point.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Overlap Sub Count</strong> <code>bool</code></summary>

Write the total number of overlaps.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Overlap Sub Count</strong> <code>Name</code></summary>

Name of the 'int32' attribute to write total overlap sub-count to. Total overlap count is the number of time another point overlapped this point. This count can get really high, really fast.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Relative Overlap Count</strong> <code>bool</code></summary>

Write the relative unique overlap count to an int32 attribute.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Relative Overlap Count</strong> <code>Name</code></summary>

Name of the 'int32' attribute to write relative unique overlap count to. Relative Unique overlap count is this collection' OverlapSubCount divided by the max of all collections combined

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Relative Overlap Sub Count</strong> <code>bool</code></summary>

Write the total number of overlaps.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Relative Overlap Sub Count</strong> <code>Name</code></summary>

Name of the 'int32' attribute to write relative total overlap sub-count to. Relative Total overlap count is is this collection' OverlapCount divided by the max of all collections combined

⚡ PCG Overridable

</details>

**Tagging**

<details>

<summary><strong>Tag If Has Any Overlap</strong> <code>bool</code></summary>

Controls tag if has any overlap.

</details>

<details>

<summary><strong>Has Any Overlap Tag</strong> <code>String</code></summary>

Controls has any overlap tag.

</details>

<details>

<summary><strong>Tag If Has No Overlap</strong> <code>bool</code></summary>

Controls tag if has no overlap.

</details>

<details>

<summary><strong>Has No Overlap Tag</strong> <code>String</code></summary>

Controls has no overlap tag.

</details>

***

Source: `Source\PCGExElementsSampling\Public\Elements\PCGExSampleOverlapStats.h`
