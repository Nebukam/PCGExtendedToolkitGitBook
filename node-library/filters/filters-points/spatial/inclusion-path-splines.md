---
description: 'In editor :: PCGEx | Filter : Inclusion (Path/Splines)'
icon: circle-dashed
---

# Inclusion (Path/Splines)

Creates a filter definition that checks points inclusion against path-like data (paths, splines, polygons).

📌 **Subnode** — Connects to **Filters** pins.

**How It Works**

> AI-Generated, needs proofreading

* The node evaluates whether given points are included within path-like data structures such as paths, splines, or polygons using specified inclusion checks.
* It utilizes projection settings to determine the method of projecting points onto the path-like structures for accurate inclusion testing.
* The node applies a tolerance value to decide if a point is considered part of the spline, allowing for some degree of error in the inclusion check.
* In cases where a point may be both inside and outside multiple splines, the "Pick" setting determines which condition takes precedence in the final output.

#### Configuration

<details>

<summary><strong>Projection Details</strong> <code>PCGExGeo2DProjectionDetails</code></summary>

Projection settings (used for inclusion checks).

📦 See: Geo2DProjection configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Sample Inputs</strong> <code>PCGExSplineSamplingIncludeMode</code></summary>

Sample inputs.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Check Type</strong> <code>PCGExSplineCheckType</code></summary>

Controls check type.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Pick</strong> <code>PCGExSplineFilterPick</code></summary>

If a point is both inside and outside a spline (if there are multiple ones), decide what value to favor.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tolerance</strong> <code>double</code></summary>

Tolerance value used to determine whether a point is considered on the spline or not

⚡ PCG Overridable

</details>

<details>

<summary><strong>Spline Scales Tolerance</strong> <code>bool</code></summary>

Scale the tolerance with spline' "thickness" (Scale' length)

⚡ PCG Overridable

</details>

<details>

<summary><strong>Inclusion Offset</strong> <code>double</code></summary>

If non-zero, will apply an offset (inset) to the data used for inclusion testing.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Use Min Inclusion Count</strong> <code>bool</code></summary>

Controls use min inclusion count.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Min Inclusion Count</strong> <code>int32</code></summary>

Controls min inclusion count.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Use Max Inclusion Count</strong> <code>bool</code></summary>

Controls use max inclusion count.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Max Inclusion Count</strong> <code>int32</code></summary>

Controls max inclusion count.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Invert</strong> <code>bool</code></summary>

If enabled, invert the result of the test

⚡ PCG Overridable

</details>

<details>

<summary><strong>Expand ZAxis</strong> <code>double</code></summary>

Controls expand zaxis.

</details>

<details>

<summary><strong>Winding Mutation</strong> <code>PCGExWindingMutation</code></summary>

Lets you enforce a path winding for testing

</details>

<details>

<summary><strong>Fidelity</strong> <code>double</code></summary>

When projecting, defines the resolution of the polygon created from the spline. Lower values means higher fidelity, but slower execution.

</details>

<details>

<summary><strong>Check Against Data Bounds</strong> <code>bool</code></summary>

If enabled, when used with a collection filter, will use collection bounds as a proxy point instead of per-point testing

⚡ PCG Overridable

</details>

<details>

<summary><strong>Ignore Self</strong> <code>bool</code></summary>

If enabled, a collection will never be tested against itself

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExInclusionFilterConfig</code></summary>

Filter Config.

📦 See: InclusionFilter configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Projection Details</strong> <code>PCGExGeo2DProjectionDetails</code></summary>

Projection settings (used for inclusion checks).

📦 See: Geo2DProjection configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Sample Inputs</strong> <code>PCGExSplineSamplingIncludeMode</code></summary>

Sample inputs.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Check Type</strong> <code>PCGExSplineCheckType</code></summary>

Controls check type.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Pick</strong> <code>PCGExSplineFilterPick</code></summary>

If a point is both inside and outside a spline (if there are multiple ones), decide what value to favor.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tolerance</strong> <code>double</code></summary>

Tolerance value used to determine whether a point is considered on the spline or not

⚡ PCG Overridable

</details>

<details>

<summary><strong>Spline Scales Tolerance</strong> <code>bool</code></summary>

Scale the tolerance with spline' "thickness" (Scale' length)

⚡ PCG Overridable

</details>

<details>

<summary><strong>Inclusion Offset</strong> <code>double</code></summary>

If non-zero, will apply an offset (inset) to the data used for inclusion testing.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Use Min Inclusion Count</strong> <code>bool</code></summary>

Controls use min inclusion count.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Min Inclusion Count</strong> <code>int32</code></summary>

Controls min inclusion count.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Use Max Inclusion Count</strong> <code>bool</code></summary>

Controls use max inclusion count.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Max Inclusion Count</strong> <code>int32</code></summary>

Controls max inclusion count.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Invert</strong> <code>bool</code></summary>

If enabled, invert the result of the test

⚡ PCG Overridable

</details>

<details>

<summary><strong>Expand ZAxis</strong> <code>double</code></summary>

Controls expand zaxis.

</details>

<details>

<summary><strong>Winding Mutation</strong> <code>PCGExWindingMutation</code></summary>

Lets you enforce a path winding for testing

</details>

<details>

<summary><strong>Fidelity</strong> <code>double</code></summary>

When projecting, defines the resolution of the polygon created from the spline. Lower values means higher fidelity, but slower execution.

</details>

<details>

<summary><strong>Check Against Data Bounds</strong> <code>bool</code></summary>

If enabled, when used with a collection filter, will use collection bounds as a proxy point instead of per-point testing

⚡ PCG Overridable

</details>

<details>

<summary><strong>Ignore Self</strong> <code>bool</code></summary>

If enabled, a collection will never be tested against itself

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExFilters\Public\Filters\Points\PCGExInclusionFilter.h`
