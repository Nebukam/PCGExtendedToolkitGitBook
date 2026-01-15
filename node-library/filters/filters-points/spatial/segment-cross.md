---
description: 'In editor :: PCGEx | Filter : Segment Cross'
icon: circle-dashed
---

# Segment Cross

Creates a filter definition that checks points SegmentCross against path-like data (paths, splines, polygons).

📌 **Subnode** — Connects to **Filters** pins.

**How It Works**

> AI-Generated, needs proofreading

* The node creates a filter definition that evaluates whether given points intersect with path-like data such as paths, splines, or polygons based on the SegmentCross method.
* It uses an intersection tolerance value to determine if a point is considered part of the spline, adjusting the precision of the intersection detection.
* The Direction setting allows for specifying how segments are defined, which can affect whether endpoints or starting points are flagged in the filtering process.
* If Invert is enabled, the node inverts the outcome of the intersection test, effectively selecting points that do not intersect with the path-like data instead.
* The Fidelity parameter controls the resolution of polygons created from splines during projection; lower values indicate higher fidelity but can increase processing time.

#### Configuration

<details>

<summary><strong>Sample Inputs</strong> <code>PCGExSplineSamplingIncludeMode</code></summary>

Sample inputs.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Intersection Settings</strong> <code>PCGExPathIntersectionDetails</code></summary>

Tolerance value used to determine whether a point is considered on the spline or not

📦 See: PathIntersection configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Direction</strong> <code>PCGExSegmentCrossWinding</code></summary>

Segment definition. Useful when flagging segments "backward" (e.g so the end point is flagged instead of the first point)

**Values:**

* **To Next**
* **To Prev**

</details>

<details>

<summary><strong>Invert</strong> <code>bool</code></summary>

If enabled, invert the result of the test

⚡ PCG Overridable

</details>

<details>

<summary><strong>Fidelity</strong> <code>double</code></summary>

When projecting, defines the resolution of the polygon created from the spline. Lower values means higher fidelity, but slower execution.

</details>

<details>

<summary><strong>Ignore Self</strong> <code>bool</code></summary>

If enabled, a collection will never be tested against itself

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExSegmentCrossFilterConfig</code></summary>

Filter Config.

📦 See: SegmentCrossFilter configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Sample Inputs</strong> <code>PCGExSplineSamplingIncludeMode</code></summary>

Sample inputs.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Intersection Settings</strong> <code>PCGExPathIntersectionDetails</code></summary>

Tolerance value used to determine whether a point is considered on the spline or not

📦 See: PathIntersection configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Direction</strong> <code>PCGExSegmentCrossWinding</code></summary>

Segment definition. Useful when flagging segments "backward" (e.g so the end point is flagged instead of the first point)

**Values:**

* **To Next**
* **To Prev**

</details>

<details>

<summary><strong>Invert</strong> <code>bool</code></summary>

If enabled, invert the result of the test

⚡ PCG Overridable

</details>

<details>

<summary><strong>Fidelity</strong> <code>double</code></summary>

When projecting, defines the resolution of the polygon created from the spline. Lower values means higher fidelity, but slower execution.

</details>

<details>

<summary><strong>Ignore Self</strong> <code>bool</code></summary>

If enabled, a collection will never be tested against itself

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExFilters\Public\Filters\Points\PCGExSegmentCrossFilter.h`
