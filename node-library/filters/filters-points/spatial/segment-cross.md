---
description: 'In editor :: PCGEx | Filter : Segment Cross'
icon: circle-dashed
---

# Segment Cross

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Creates a filter definition that checks points SegmentCross against path-like data (paths, splines, polygons).

#### Overview

This subnode determines whether points lie on or cross specific line segments defined by paths, splines, or polygons. It's useful for identifying points that are part of a segment, such as flagging the start or end point of a path segment.

It connects to **Filter** pins on processing nodes that accept point filters.

#### How It Works

This subnode evaluates each point in a collection to determine if it lies on a specific line segment defined by a path-like input. The line segment is determined by the point's position relative to adjacent points in the path, and can be configured to use either the "next" or "previous" point as the segment endpoint.

The algorithm performs the following steps:

1. For each point, it identifies its associated segment using the specified direction (either to next or previous point).
2. It projects the point onto that segment.
3. It checks if the projected point is within a defined tolerance distance from the original point.
4. If the point is within tolerance, it's considered to "cross" the segment and passes the filter test.

The result can be inverted using the invert toggle, allowing you to filter out points that cross segments instead of including them.

<details>

<summary>Inputs</summary>

* **Points**: The collection of points to be filtered.
* **Path-like data**: Paths, splines, or polygons that define the segments to check against.

</details>

<details>

<summary>Outputs</summary>

* Points that pass the filter test are included in the output.
* Points that fail the filter test are excluded from the output.

</details>

#### Configuration

***

**SampleInputs**

_Sample inputs._

Controls how the input path-like data is sampled. This affects which segments of a path or spline are considered for the cross check.

**Values**:

* **All**: All points in the input are used.
* **First**: Only the first point is used.
* **Last**: Only the last point is used.
* **Evenly Spaced**: Points are sampled evenly along the path.
* **Random**: Points are randomly selected from the path.

**IntersectionSettings**

_Tolerance value used to determine whether a point is considered on the spline or not._

Defines how close a point must be to a segment to be considered as crossing it. Lower tolerance values mean stricter matching.

**Direction**

_Segment definition. Useful when flagging segments "backward" (e.g so the end point is flagged instead of the first point)._

Specifies which direction the segment is defined in, either from the current point to the next or from the current point to the previous.

**Values**:

* **To Next**: Segment is defined as current point to next point.
* **To Prev**: Segment is defined as current point to previous point.

**bInvert**

_If enabled, invert the result of the test._

When enabled, points that would normally pass the filter test are excluded, and vice versa.

**Fidelity**

_When projecting, defines the resolution of the polygon created from the spline. Lower values means higher fidelity, but slower execution._

Controls how many segments are used to approximate a spline when projecting points onto it. Higher values (lower fidelity) mean more precise projection but slower performance.

**bIgnoreSelf**

_If enabled, a collection will never be tested against itself._

When enabled, prevents a point collection from being compared against its own segments, avoiding self-intersection issues.

**Config**

_Filter Config._

A container for all the filter settings that define how points are evaluated against segments.

#### Usage Example

Use this subnode to identify and flag the end points of path segments in a spline. For example, you could use it to mark where a road changes direction or where a river turns. Set the Direction to "To Prev" to flag the start point of each segment instead of the end.

#### Notes

* This filter works best with closed-loop paths or polygons.
* Higher Fidelity values improve accuracy but may slow down processing.
* Use the invert option to exclude points that cross segments rather than include them.
