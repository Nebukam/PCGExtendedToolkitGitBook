---
description: 'In editor :: PCGEx | Filter : Inclusion (Path/Splines)'
icon: circle-dashed
---

# Inclusion (Path/Splines)

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Creates a filter definition that checks points inclusion against path-like data (paths, splines, polygons).

#### Overview

This subnode defines a filtering behavior that determines whether individual points are inside or outside of path-like geometric data such as splines, paths, or polygons. It's used to selectively pass or reject points based on their spatial relationship to these shapes.

It is particularly useful for creating boundaries, exclusion zones, or area-based selection logic in procedural content generation workflows. For example, you might use it to only place trees inside a forest boundary defined by a spline, or to avoid placing buildings within a water body.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes that support point filtering.
{% endhint %}

#### How It Works

This subnode evaluates whether each input point lies inside or outside of one or more path-like shapes. It uses geometric algorithms to determine inclusion:

1. It projects the point onto the shape's surface or boundary for comparison.
2. For splines and polygons, it checks if a point is inside or outside using winding rules or ray casting methods.
3. If multiple shapes are present, it evaluates each one and combines results based on the **Pick** setting.
4. Optionally, it applies an offset (inset or outset) to the shape for more flexible inclusion testing.
5. It can enforce a specific winding order for consistent behavior.
6. Results can be inverted using the **Invert** toggle.

The evaluation process considers:

* The type of shape (spline, path, polygon)
* Whether the point is within tolerance of the shape's edge
* The number of shapes intersecting with the point (controlled by Min/Max Inclusion Count)
* Whether to use per-point or collection bounds for testing

<details>

<summary>Inputs</summary>

Expects a set of points and associated path-like data such as splines, paths, or polygons. The path data is used to define inclusion boundaries.

</details>

<details>

<summary>Outputs</summary>

Produces a boolean result per point indicating whether it passes the inclusion test (true) or fails (false). This result can be used by downstream nodes to filter or process points accordingly.

</details>

#### Configuration

***

**ProjectionDetails**

_Controls how points are projected onto the path data for inclusion testing._

This setting defines the coordinate system and projection method used when evaluating point inclusion. It affects how the point's position is interpreted relative to the shape.

**SampleInputs**

_Controls which input paths are sampled during inclusion checks._

* **All**: All input paths are considered.
* **Closest**: Only the closest path is used for testing.

**CheckType**

_Determines what type of inclusion test to perform._

* **IsInside**: Point must be inside the shape.
* **IsOutside**: Point must be outside the shape.

**Pick**

_Controls behavior when a point intersects multiple paths._

* **Closest**: If a point is both inside and outside different paths, use the result from the closest path.
* **All**: Use all path results to determine final inclusion (logical AND/OR based on other settings).

**Tolerance**

_Tolerance value used to determine whether a point is considered on the spline or not._

A small distance value that defines how close a point must be to a shape's edge to be treated as "on" the shape. Higher values make the inclusion test more lenient.

**bSplineScalesTolerance**

_When enabled, scales the tolerance based on the spline's thickness._

If enabled, the tolerance is multiplied by the spline's scale factor (its "thickness"), making it adaptive to varying path sizes.

**InclusionOffset**

_If non-zero, applies an inset or outset to the shape used for inclusion testing._

Positive values create an inset (shrink) of the original shape. Negative values create an outset (expand). This allows for more flexible boundary definitions.

**bUseMinInclusionCount**

_When enabled, requires a minimum number of paths to include a point._

If enabled, a point must be included in at least the specified number of paths to pass the filter.

**MinInclusionCount**

_Number of paths that must include a point when Min Inclusion Count is enabled._

Sets the minimum number of path intersections required for a point to be considered inside.

**bUseMaxInclusionCount**

_When enabled, limits the maximum number of paths a point can be included in._

If enabled, a point cannot be included in more than the specified number of paths.

**MaxInclusionCount**

_Maximum number of paths that can include a point when Max Inclusion Count is enabled._

Sets the upper limit on path intersections for a point to pass the filter.

**bInvert**

_When enabled, inverts the result of the inclusion test._

If enabled, points that would normally pass the filter (inside) are rejected, and vice versa.

**ExpandZAxis**

_Advanced setting that controls Z-axis expansion for 2D projections._

Controls how the Z-axis is treated when projecting 2D shapes into 3D space. Negative values use default behavior.

**WindingMutation**

_Enforces a specific winding order for path inclusion testing._

* **Unchanged**: Uses the original winding of the shape.
* **Clockwise**: Forces all paths to be interpreted as clockwise.
* **CounterClockwise**: Forces all paths to be interpreted as counter-clockwise.

**Fidelity**

_Resolution of polygon created from spline during projection._

Affects how accurately the spline is represented when converted into a polygon for inclusion testing. Lower values mean higher resolution and more accurate results, but slower performance.

**bCheckAgainstDataBounds**

_When enabled, uses collection bounds instead of individual points for testing._

If enabled, when working with collections, the filter tests against the bounding box of each collection rather than testing each point individually.

**bIgnoreSelf**

_When enabled, prevents a collection from being tested against itself._

If enabled, when using collection-based inclusion, a collection will not be tested against its own data.
