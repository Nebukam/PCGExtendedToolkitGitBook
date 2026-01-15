---
description: 'In editor :: PCGEx | Bounds Axis To Points'
icon: circle
---

# Bounds Axis To Points

Generate a two-point from a bound axis.

**How It Works**

> AI-Generated, needs proofreading

* The Bounds Axis To Points node generates a two-point collection based on a specified bound axis.
* It uses the PCGExPointBoundsSource as the reference for generating points within defined bounds.
* The Priority setting determines the initial direction from which point generation starts along the selected axis.
* If Generate Per Point Data is enabled, it creates individual point collections for each generated point.
* The Direction Constraint adjusts the axis selection based on whether the chosen axis orientation aligns towards or away from a specified static direction vector.

#### Configuration

<details>

<summary><strong>Generate Per Point Data</strong> <code>bool</code></summary>

Generates a point collections per generated point

⚡ PCG Overridable

</details>

<details>

<summary><strong>Bounds Reference</strong> <code>PCGExPointBoundsSource</code></summary>

Controls bounds reference.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Priority</strong> <code>PCGExBoundAxisPriority</code></summary>

Which initial direction should initially picked.

**Values:**

* **Shortest**: Shortest axis
* **Longest**: Longest axis
* **Median**: The leftover axis, that is neither the shortest nor the longest.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Direction Constraint</strong> <code>PCGExAxisDirectionConstraint</code></summary>

Shifts the axis selection based on whether the selected axis points toward or away from a static direction.

**Values:**

* **None**: ...
* **Avoid**: ...
* **Favor**: ...

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Direction</strong> <code>Vector</code></summary>

Controls └─ direction.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Size Constraint</strong> <code>PCGExAxisSizeConstraint</code></summary>

Shifts the axis selection based on whether its size is greater or smaller than a given threshold.

**Values:**

* **None**: ...
* **Greater**: ...
* **Smaller**: ...

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Threshold</strong> <code>double</code></summary>

Controls └─ threshold.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Constraints Order</strong> <code>PCGExAxisConstraintSorting</code></summary>

In which order shifting should be processed, as one is likely to override the other.

**Values:**

* **Size matters more**: ...
* **Direction matters more**: ...

⚡ PCG Overridable

</details>

<details>

<summary><strong>U</strong> <code>double</code></summary>

Extent factor at which the points will be created on the selected world-align axis

⚡ PCG Overridable

</details>

<details>

<summary><strong>Set Extents</strong> <code>bool</code></summary>

Controls set extents.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Extents</strong> <code>Vector</code></summary>

Set the output point' extent to this value

⚡ PCG Overridable

</details>

<details>

<summary><strong>Set Scale</strong> <code>bool</code></summary>

Controls set scale.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Scale</strong> <code>Vector</code></summary>

Set the output point' scale to this value

⚡ PCG Overridable

</details>

<details>

<summary><strong>Point Attributes To Output Tags</strong> <code>PCGExAttributeToTagDetails</code></summary>

TBD

📦 See: AttributeToTag configuration

</details>

***

Source: `Source\PCGExElementsSpatial\Public\Elements\Bounds\PCGExBoundsAxisToPoints.h`
