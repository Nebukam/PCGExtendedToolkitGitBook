---
description: 'In editor :: PCGEx | Filter : Segment Cross'
icon: circle-dashed
---

# Segment Cross

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Creates a filter definition that checks points against line segments defined by path-like data such as splines or polygons.

#### How It Works

This subnode evaluates whether individual points lie on or cross specific line segments within path-like data. For each point, it calculates its position relative to the line segments formed between consecutive points in the input geometry. If a point falls within a specified tolerance of any segment, it passes the filter test.

The process uses a projection method to determine if a point intersects with a segment. You can define the direction of the segment — either from the current point to the next one or from the current point to the previous one. The subnode also supports optional result inversion and can ignore self-intersections when comparing against its own data.

#### Configuration

<details>

<summary><strong>Sample Inputs</strong><br><em>Controls how input data is sampled for testing.</em></summary>

**Values**:

* **All**: All input points are used.
* **First**: Only the first point is used.
* **Last**: Only the last point is used.
* **Random**: A random point is selected.
* **Custom**: Use a custom index or range.

</details>

<details>

<summary><strong>Intersection Settings</strong><br><em>Tolerance value used to determine whether a point is considered on the spline or not.</em></summary>

Defines how close a point must be to a segment to be considered as crossing it.

</details>

<details>

<summary><strong>Direction</strong><br><em>Segment definition. Useful when flagging segments "backward" (e.g., so the end point is flagged instead of the first point).</em></summary>

Determines which direction the segment is defined in.

**Values**:

* **To Next**: Segment is from current point to next point.
* **To Prev**: Segment is from current point to previous point.

</details>

<details>

<summary><strong>Invert</strong><br><em>If enabled, invert the result of the test.</em></summary>

When enabled, points that would normally pass the filter will fail, and vice versa.

</details>

<details>

<summary><strong>Fidelity</strong><br><em>When projecting, defines the resolution of the polygon created from the spline. Lower values mean higher fidelity, but slower execution.</em></summary>

Controls how finely the path is subdivided when checking for intersections. Higher values (closer to 1) increase accuracy but slow down processing.

</details>

<details>

<summary><strong>Ignore Self</strong><br><em>If enabled, a collection will never be tested against itself.</em></summary>

When enabled, prevents a data set from being compared against itself during filtering.

</details>

#### Usage Example

Use this subnode to identify points that lie on the edges of a polygon or spline. For example, you could use it to flag all points that cross a specific road segment in a city layout, or to select only those points that lie along the boundary of a terrain feature.

#### Notes

* The tolerance setting is crucial for determining how strictly the filter checks for intersection.
* This subnode works best with closed-loop paths like polygons.
* Performance can be affected by low fidelity settings (high Fidelity values).
