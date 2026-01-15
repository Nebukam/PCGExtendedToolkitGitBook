---
icon: chart-scatter-3d
---

# Projection

#### Settings

<details>

<summary><strong>Method</strong> <code>EPCGExProjectionMethod</code></summary>

Controls method.

**Values:**

* **Normal**: Uses a normal to project on a plane.
* **Best Fit**: Compute eigen values to find the best-fit plane

</details>

<details>

<summary><strong>Projection Normal</strong> <code>FVector</code></summary>

Normal vector of the 2D projection plane. Defaults to Up for XY projection. Used as fallback when using invalid local normal.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Local Projection Normal</strong> <code>bool</code></summary>

Controls local projection normal.

</details>

<details>

<summary><strong>Local Normal</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

Local attribute to fetch projection normal from

</details>

#### Used In

* Cell
* Path
* Clipper2Processor
* Clipper2Boolean
* Clipper2Offset
* Clipper2RectClip
* BuildConvexHull2D
* BuildDelaunayGraph2D
* _...and 19 more_

***

Defined in: `Source\PCGExCore\Public\Math\PCGExProjectionDetails.h`
