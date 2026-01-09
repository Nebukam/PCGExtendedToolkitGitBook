---
description: 'In editor :: PCGEx | Cluster : Find point on Bounds'
icon: circle
---

# Find point on Bounds

{% hint style="info" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Find the closest vtx or edge on each cluster' bounds.

### Overview

This node finds the closest point on the boundary of each cluster's bounding box and outputs either a merged set of points or one dataset per cluster. It's useful for placing objects along cluster edges, sampling cluster boundaries, or creating constraints based on cluster geometry.

{% hint style="info" %}
The output points are positioned at the closest location on the cluster bounds to the original input point, optionally offset from that position.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input** (Required): Point data representing clusters
* **Edge Input** (Optional): Edge data for edge-based searches

</details>

<details>

<summary>Outputs</summary>

* **Output** (Merged or Per-cluster): Points positioned on cluster bounds
* **Edge Output** (Optional): Edges connecting original points to their bound positions

</details>

### Properties Overview

Controls how the closest point is found and how results are structured.

***

#### General

Controls core search behavior and output structure.

**SearchMode**

_Finds the closest point using either vertex or edge of the cluster bounds._

* **Vtx**: Uses the closest vertex on the cluster's bounding box.
* **Edge**: Uses the closest edge on the cluster's bounding box.

**OutputMode**

_Determines how the output points are organized._

* **Merged Points**: All results are combined into a single output dataset.
* **Per-point dataset**: Each cluster produces its own separate output dataset.

**bBestFitBounds**

_When enabled, uses best-fit bounds instead of axis-aligned bounding boxes._

* This option allows for more accurate boundary detection when clusters have irregular shapes.

**AxisOrder**

_Selects the axis ordering used for best-fit bounds calculation._

* **X > Y > Z**: Prioritizes X-axis as the primary direction.
* **Y > Z > X**: Prioritizes Y-axis as the primary direction.
* **Z > X > Y**: Prioritizes Z-axis as the primary direction.
* **Y > X > Z**: Prioritizes Y-axis, then X-axis.
* **Z > Y > X**: Prioritizes Z-axis, then Y-axis.
* **X > Z > Y**: Prioritizes X-axis, then Z-axis.

**UVWInput**

_Selects whether to use a constant or attribute-based UVW value for position sampling._

* **Constant**: Uses the manually set UVW value.
* **Attribute**: Reads the UVW value from an input attribute.

**LocalUVW**

_The attribute to read UVW values from when using Attribute mode._

* This is only visible when **UVWInput** is set to **Attribute**.

**ClusterElement**

_Selects whether to sample from cluster vertices or edges for UVW calculation._

* **Point**: Uses the point's own data.
* **Edge**: Uses the edge connecting to the point.

**UVW**

_The UVW value used when **UVWInput** is set to **Constant**._

* UVW values are normalized between 0 and 1, where:
  * U = X-axis position (0 to 1)
  * V = Y-axis position (0 to 1)
  * W = Z-axis position (0 to 1)

**Offset**

_Adds a distance offset from the closest point on the bounds._

* Positive values move the point away from the center of the cluster.
* Negative values move the point towards the center.

**CarryOverDetails**

_Configures which attributes are carried over from input points to output points._

* Allows preserving metadata like cluster ID, point index, or custom tags.

**bQuietAttributeMismatchWarning**

_Disables warnings when attribute types don't match between inputs and outputs._

* Useful for avoiding clutter in large graphs where mismatches are expected.
