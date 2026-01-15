---
description: 'In editor :: PCGEx | Create Spline'
icon: circle
---

# Create Spline

Create splines from input points.

**How It Works**

> AI-Generated, needs proofreading

* The node computes splines based on input points using the specified `PCGCreateSplineMode`.
* It assigns spline points with either the default point type or a custom point type if `Apply Custom Point Type` is enabled.
* Tangents are applied per-point, provided that the spline is not linear.

#### Configuration

<details>

<summary><strong>Mode</strong> <code>PCGCreateSplineMode</code></summary>

Controls mode.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Default Point Type</strong> <code>PCGExSplinePointType</code></summary>

Default spline point type.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Apply Custom Point Type</strong> <code>bool</code></summary>

Controls apply custom point type.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Point Type Attribute</strong> <code>Name</code></summary>

Controls point type attribute.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tangents</strong> <code>PCGExTangentsDetails</code></summary>

Per-point tangent settings. Can't be set if the spline is linear.

📦 See: Tangents configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Post Process Function Names</strong> <code>Array of FName</code></summary>

Specify a list of functions to be called on the target actor after spline mesh creation. Functions need to be parameter-less and with "CallInEditor" flag enabled.

</details>

<details>

<summary><strong>Attachment Rules</strong> <code>PCGExAttachmentRules</code></summary>

Controls attachment rules.

</details>

***

Source: `Source\PCGExElementsPaths\Public\Elements\PCGExCreateSpline.h`
