---
description: 'In editor :: PCGEx | Spline to Path'
icon: circle
---

# Spline to Path

Turns splines to paths.

**How It Works**

> AI-Generated, needs proofreading

* Converts input spline data into path representations by transforming control points along the spline.
* Samples inputs at specified intervals to ensure accurate conversion from splines to paths.
* Optionally writes an 'Arrive Tangent' attribute as an FVector to the output if the Write Arrive Tangent setting is enabled, specifying the tangent vector at arrival points on the path.
* Similarly, optionally writes a 'Leave Tangent' attribute as an FVector to the output if the Write Leave Tangent setting is enabled, indicating the tangent vector at departure points from the path.

#### Configuration

<details>

<summary><strong>Transform Details</strong> <code>PCGExLeanTransformDetails</code></summary>

Point transform

📦 See: LeanTransform configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Arrive Tangent</strong> <code>bool</code></summary>

Controls write arrive tangent.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Arrive Tangent</strong> <code>Name</code></summary>

Name of the 'FVector' attribute to write Arrive tangent to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Leave Tangent</strong> <code>bool</code></summary>

Controls write leave tangent.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Leave Tangent</strong> <code>Name</code></summary>

Name of the 'FVector' attribute to write Leave tangent to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tags To Data</strong> <code>PCGExTagsToDataAction</code></summary>

Tag handling

</details>

<details>

<summary><strong>Write Length At Point</strong> <code>bool</code></summary>

Controls write length at point.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Length at Point</strong> <code>Name</code></summary>

Name of the 'double' attribute to write the length at point to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Alpha</strong> <code>bool</code></summary>

Controls write alpha.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Alpha</strong> <code>Name</code></summary>

Name of the 'double' attribute to write the length at point to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Point Type</strong> <code>bool</code></summary>

Controls write point type.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Point Type</strong> <code>Name</code></summary>

Name of the 'int32' attribute that store the point type.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Carry Over Settings</strong> <code>PCGExCarryOverDetails</code></summary>

Meta filter settings.

📦 See: CarryOver configuration

⚡ PCG Overridable

</details>

**Sampling**

<details>

<summary><strong>Sample Inputs</strong> <code>PCGExSplineSamplingIncludeMode</code></summary>

Sample inputs.

⚡ PCG Overridable

</details>

**Tagging**

<details>

<summary><strong>Tag Forwarding</strong> <code>PCGExNameFiltersDetails</code></summary>

Tags to be forwarded from source splines

📦 See: NameFilters configuration

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsPaths\Public\Elements\PCGExSplineToPath.h`
