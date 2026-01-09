---
description: 'In editor :: PCGEx | Path : Stitch'
icon: circle
---

# Stitch

{% hint style="info" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Stitch paths together by their endpoints.

### Overview

This node connects or merges multiple paths at their endpoints, allowing you to create continuous routes from separate path segments. It's useful for joining disconnected paths into a single continuous path, such as connecting road segments, building pathways, or creating seamless navigation meshes.

The node offers two main methods: "Connect" which preserves all original points and adds segments between paths, and "Fuse" which merges overlapping endpoints into a single point. You can control how the stitching is performed based on spatial proximity or alignment requirements.

{% hint style="info" %}
When using the Fuse method, you can choose whether to keep the start or end point of each path during the merge operation.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input** (Default): Path data to be stitched together
* **Point Filter**: Optional filter for which points to consider

</details>

<details>

<summary>Outputs</summary>

* **Main Output** (Default): Stitched path data

</details>

### Properties Overview

Controls how paths are connected or merged.

***

#### Stitching Method

Determines how paths are joined together.

**Method**

_Controls whether paths are connected with new segments or fused into single points._

* When set to **Connect**, existing points are preserved and new segments are added between paths.
* When set to **Fuse**, overlapping endpoints are merged into a single point.

**Values**:

* **Connect**: Connect existing point with a segment (preserve all input points)
* **Fuse**: Merge points that should be connected, only leaving a single one.

**Fuse Method**

_Controls which endpoint is kept when fusing paths._

* When enabled, you can choose whether to keep the start or end point of each path during the merge.
* This affects how the fused point's position is determined.

**Values**:

* **Keep Start**: Keep start point during the merge
* **Keep End**: Keep end point during the merge

**Merge Operation**

_Controls how the position of the merged point is calculated._

* Only applies when using the Fuse method.
* Determines whether to keep the original point position, average positions, or calculate intersection.

**Values**:

* **None**: Keep the chosen point as-is
* **Average**: Average connect point position
* **Line Intersection**: Connection point position is at the line/line intersection

***

#### Matching Behavior

Controls how paths are matched for stitching.

**Only Match Start and Ends**

_When enabled, paths are only stitched if one's end connects to another's start._

* If disabled, paths are stitched based on spatial proximity alone.
* If enabled, paths must have matching start/end points to be connected.

**Require Alignment**

_When enabled, paths must align within a given angular threshold before stitching._

* Ensures that paths are properly oriented when connecting.
* Useful for creating clean, continuous routes where direction matters.

**Dot Comparison Details**

_Configuration for alignment checking._

* Defines how the angular alignment is measured between path segments.
* Only used if "Require Alignment" is enabled.

**Tolerance**

_Sets the maximum distance at which paths can be considered for stitching._

* Paths closer than this distance will be connected or fused.
* Default value is 10 units, but can be adjusted based on your scene scale.

***

#### Sorting and Data Handling

Controls how data is sorted and carried over during stitching.

**Sort Direction**

_Sets the order in which paths are processed for stitching._

* Paths are processed either in ascending or descending order.
* Affects which paths get stitched first when multiple candidates exist.

**Values**:

* **Ascending**: Process paths from lowest to highest index
* **Descending**: Process paths from highest to lowest index

**Carry Over Settings**

_Configures which attributes and metadata are preserved during stitching._

* Controls how data is transferred between input paths and the resulting stitched path.
* Useful for preserving properties like material, height, or other custom data.
