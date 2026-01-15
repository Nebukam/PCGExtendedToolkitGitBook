---
description: 'In editor :: PCGEx | Copy to Path'
icon: circle
---

# Copy to Path

Deform points along a path/spline.

**How It Works**

> AI-Generated, needs proofreading

* The node deforms input points along a specified path or spline.
* With Data Matching enabled, the node filters which target points are sampled based on provided data criteria.
* If Apply Custom Point Type is set to true, the node uses the specified Point Type Attribute name for deformation; otherwise, it defaults to the predefined spline point type.

#### Configuration

<details>

<summary><strong>Data Matching</strong> <code>PCGExMatchingDetails</code></summary>

If enabled, allows you to filter out which targets get sampled by which data

📦 See: Matching configuration

</details>

<details>

<summary><strong>Transform Scale</strong> <code>uint8</code></summary>

Which scale components from the sampled transform should be applied to the point.

</details>

**Deform**

<details>

<summary><strong>Axis Order</strong> <code>PCGExAxisOrder</code></summary>

Axis transformation order. \[Main Axis] > \[Cross Axis] > \[...]

⚡ PCG Overridable

</details>

<details>

<summary><strong>Preserve Original Input Scale</strong> <code>bool</code></summary>

Controls preserve original input scale.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Preserve Aspect Ratio</strong> <code>bool</code></summary>

Controls preserve aspect ratio.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Flatten Axis</strong> <code>PCGExMinimalAxis</code></summary>

Controls flatten axis.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Wrap Closed Loops</strong> <code>bool</code></summary>

Controls wrap closed loops.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Main Axis Settings</strong> <code>PCGExAxisDeformDetails</code></summary>

Controls main axis settings.

📦 See: AxisDeform configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Do Twist</strong> <code>bool</code></summary>

Controls do twist.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Twist Settings</strong> <code>PCGExAxisDeformDetails</code></summary>

Controls twist settings.

📦 See: AxisDeform configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Target Mask Settings</strong> <code>PCGExAxisDeformDetails</code></summary>

Used to shrink the scope per-target, to distribute points only on a subselection.

📦 See: AxisDeform configuration

⚡ PCG Overridable

</details>

**Deform > Bounds**

<details>

<summary><strong>Bounds Source</strong> <code>PCGExPointBoundsSource</code></summary>

Controls bounds source.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Min Bounds Offset</strong> <code>Vector</code></summary>

Controls min bounds offset.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Max Bounds Offset</strong> <code>Vector</code></summary>

Controls max bounds offset.

⚡ PCG Overridable

</details>

**Spline**

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

Controls tangents.

📦 See: Tangents configuration

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsPaths\Public\Elements\PCGExCopyToPaths.h`
