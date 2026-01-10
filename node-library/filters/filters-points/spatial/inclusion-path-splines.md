---
description: 'In editor :: PCGEx | Filter : Inclusion (Path/Splines)'
icon: circle-dashed
---

# Inclusion (Path/Splines)

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Creates a filter definition that checks points inclusion against path-like data (paths, splines, polygons).

#### How It Works

This subnode evaluates whether points fall inside, outside, or on the edge of path-like shapes such as splines, paths, or polygons. It projects 3D points into 2D space and performs inclusion tests based on the shape's geometry.

For each point:

1. If a single path is used, it determines if the point lies within that path.
2. When multiple paths are present, it evaluates all paths and combines results according to the **Pick** setting.
3. The result can be inverted using the **Invert** toggle.
4. Optional tolerance and offset settings allow for fine-tuning of inclusion boundaries.
5. For collections, it can optionally use bounds instead of individual point testing.

The subnode supports both polygonal and spline-based inclusion checks, with options to control how paths are projected and evaluated.

#### Configuration

<details>

<summary><strong>ProjectionDetails</strong><br><em>Projection settings (used for inclusion checks).</em></summary>

Controls how the 3D point data is projected into 2D space for inclusion testing. This affects the accuracy of the check when working with non-planar geometry.

</details>

<details>

<summary><strong>SampleInputs</strong><br><em>Sample inputs.</em></summary>

Determines how input splines are sampled during inclusion testing:

* **All**: Tests against all points along the spline.
* **Closest**: Only tests against the closest point on the spline.

</details>

<details>

<summary><strong>CheckType</strong><br><em>Type of inclusion test to perform.</em></summary>

Defines the type of inclusion test to perform:

* **IsInside**: Point is inside the shape.
* **IsOutside**: Point is outside the shape.
* **IsOnEdge**: Point is on the edge of the shape.

</details>

<details>

<summary><strong>Pick</strong><br><em>If a point is both inside and outside a spline (if there are multiple ones), decide what value to favor.</em></summary>

Controls behavior when a point's inclusion status conflicts across multiple paths:

* **Closest**: Uses the result from the closest path.
* **All**: Requires all paths to agree for a pass.

</details>

<details>

<summary><strong>Tolerance</strong><br><em>Tolerance value used to determine whether a point is considered on the spline or not.</em></summary>

A distance threshold used to determine if a point lies on or near the spline. Larger values make inclusion checks more lenient.

</details>

<details>

<summary><strong>bSplineScalesTolerance</strong><br><em>Scale the tolerance with spline' "thickness" (Scale' length).</em></summary>

When enabled, scales the tolerance value based on the spline's thickness to account for varying scale in inclusion checks.

</details>

<details>

<summary><strong>InclusionOffset</strong><br><em>If non-zero, will apply an offset (inset) to the data used for inclusion testing.</em></summary>

Applies a uniform offset to the shape used for inclusion testing. Positive values inset the shape, negative values outset it.

</details>

<details>

<summary><strong>bUseMinInclusionCount</strong><br><em>Require a minimum number of paths to include a point.</em></summary>

When enabled, requires a minimum number of paths to include a point.

</details>

<details>

<summary><strong>MinInclusionCount</strong><br><em>Minimum number of paths that must include a point for it to pass the filter.</em></summary>

The minimum number of paths that must include a point for it to pass the filter. Only used when **bUseMinInclusionCount** is enabled.

</details>

<details>

<summary><strong>bUseMaxInclusionCount</strong><br><em>Set a maximum number of paths that can include a point.</em></summary>

When enabled, sets a maximum number of paths that can include a point.

</details>

<details>

<summary><strong>MaxInclusionCount</strong><br><em>Maximum number of paths that can include a point for it to pass the filter.</em></summary>

The maximum number of paths that can include a point for it to pass the filter. Only used when **bUseMaxInclusionCount** is enabled.

</details>

<details>

<summary><strong>bInvert</strong><br><em>If enabled, invert the result of the test.</em></summary>

When enabled, reverses the inclusion logic. Points that would normally pass now fail and vice versa.

</details>

<details>

<summary><strong>ExpandZAxis</strong><br><em>Controls how Z-axis values are handled during projection (advanced setting).</em></summary>

Controls how Z-axis values are handled during projection (advanced setting).

</details>

<details>

<summary><strong>WindingMutation</strong><br><em>Lets you enforce a path winding for testing.</em></summary>

Forces the winding direction of paths to ensure consistent inclusion results:

* **Unchanged**: Uses original winding.
* **Clockwise**: Forces clockwise winding.
* **CounterClockwise**: Forces counter-clockwise winding.

</details>

<details>

<summary><strong>Fidelity</strong><br><em>When projecting, defines the resolution of the polygon created from the spline. Lower values means higher fidelity, but slower execution.</em></summary>

Controls how many points are used to approximate a spline when converting it into a polygon for inclusion testing. Lower values mean more accurate but slower tests.

</details>

<details>

<summary><strong>bCheckAgainstDataBounds</strong><br><em>If enabled, when used with a collection filter, will use collection bounds as a proxy point instead of per-point testing.</em></summary>

When enabled, uses the bounding box of each data source for inclusion testing instead of individual points. Improves performance for large collections.

</details>

<details>

<summary><strong>bIgnoreSelf</strong><br><em>If enabled, a collection will never be tested against itself.</em></summary>

When enabled, prevents a collection from being tested against its own data, avoiding self-inclusion issues.

</details>

#### Usage Example

A game designer wants to place trees only within a defined forest area. They create a polygonal path representing the forest boundary and use this filter subnode to ensure that any point placed outside the boundary is discarded. The designer sets **CheckType** to "IsInside", and **Invert** to false, so only points inside the polygon pass the test.

#### Notes

* This subnode works best with closed paths or polygons.
* Performance can be improved by using **bCheckAgainstDataBounds** for large collections.
* Tolerance settings are important when dealing with splines that have sharp turns or small details.
* The **Pick** setting is useful when multiple overlapping shapes are used to define inclusion zones.
