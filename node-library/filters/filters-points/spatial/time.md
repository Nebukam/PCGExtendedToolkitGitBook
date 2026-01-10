---
description: 'In editor :: PCGEx | Filter : Time'
icon: circle-dashed
---

# Time

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the subnode does, but still needs to be proofread by a human.
{% endhint %}

> Creates a filter definition that checks points position against a path/spline/polygon2D closest alpha.

#### Overview

This subnode filters points based on their temporal position along one or more paths, splines, or polygonal shapes. It evaluates where each point lies along these geometric elements and compares that position to a specified time value using various comparison operators.

You would use this when you want to selectively process only those points that are at or near a certain stage of a path — for example, filtering points that lie within the first 30% of a spline, or points that are exactly at the midpoint of a loop.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes such as "Filter Points", "Filter Edges", etc.
{% endhint %}

#### How It Works

This filter determines how far along a path a point is by projecting it onto one or more splines or polygonal shapes. It calculates the closest alpha (a normalized position from 0 to 1) of each point on these paths and compares that value against a target operand using a comparison operator.

If a point lies inside multiple paths, the behavior depends on whether you're checking only the closest path or all paths. If checking all paths, it can consolidate their time values using Min, Max, or Average methods before applying the comparison.

The filter supports both constant and attribute-based operands for the comparison value, allowing dynamic thresholds based on point data.

#### Configuration

<details>

<summary><strong>Sample Inputs</strong><br><em>Sample inputs.</em></summary>

Controls how input paths are sampled. Options include:

* **All**: All points on the path are considered.
* **Evenly Spaced**: Points are sampled at even intervals along the path.

</details>

<details>

<summary><strong>Pick</strong><br><em>If a point is both inside and outside a spline (if there are multiple ones), decide what value to favor.</em></summary>

Determines how to handle cases where a point lies on multiple paths:

* **Closest**: Use only the closest path's time value.
* **All**: Evaluate against all paths and consolidate results.

</details>

<details>

<summary><strong>Time Consolidation</strong><br><em>.</em></summary>

Only used when "Pick" is set to "All". Defines how multiple time values are combined:

* **Min**: Use the smallest time value.
* **Max**: Use the largest time value.
* **Average**: Compute the average of all time values.

</details>

<details>

<summary><strong>Comparison</strong><br><em>Comparison</em></summary>

The operator used to compare the point's time value against the operand:

* **==** (Strictly Equal)
* **!=** (Strictly Not Equal)
* **>=** (Equal or Greater)
* **<=** (Equal or Smaller)
* **>** (Strictly Greater)
* **<** (Strictly Smaller)
* **\~=** (Nearly Equal)
* **!\~=** (Nearly Not Equal)

</details>

<details>

<summary><strong>Compare Against</strong><br><em>Type of OperandB</em></summary>

Specifies whether the comparison value is a constant or taken from an attribute:

* **Constant**: Use a fixed numeric value.
* **Attribute**: Read the value from a point attribute.

</details>

<details>

<summary><strong>Operand B</strong><br><em>Operand B for testing</em></summary>

The target time value to compare against. This is either a constant or an attribute depending on "Compare Against".

</details>

<details>

<summary><strong>Tolerance</strong><br><em>Near-equality tolerance</em></summary>

Used when the comparison is set to nearly equal or not equal. Defines how close two values must be to be considered equal.

</details>

<details>

<summary><strong>Invert Result</strong><br><em>If enabled, invert the result of the test</em></summary>

When enabled, points that would normally pass the filter will fail, and vice versa.

</details>

<details>

<summary><strong>Winding Mutation</strong><br><em>Lets you enforce a path winding for testing</em></summary>

Controls how the winding direction of paths is interpreted during projection:

* **Unchanged**: Use the original winding.
* **Clockwise**: Force all paths to be treated as clockwise.
* **CounterClockwise**: Force all paths to be treated as counter-clockwise.

</details>

<details>

<summary><strong>Fidelity</strong><br><em>When projecting, defines the resolution of the polygon created from the spline. Lower values means higher fidelity, but slower execution.</em></summary>

Controls how finely the spline is discretized when projecting points onto it. Higher fidelity (lower number) improves accuracy at the cost of performance.

</details>

<details>

<summary><strong>Check Against Data Bounds</strong><br><em>If enabled, when used with a collection filter, will use collection bounds as a proxy point instead of per-point testing</em></summary>

When using this subnode in a collection context, this option uses the bounding box of each collection to test rather than individual points, improving performance.

</details>

<details>

<summary><strong>Ignore Self</strong><br><em>If enabled, a collection will never be tested against itself</em></summary>

If testing collections against each other, prevents a collection from being compared to itself.

</details>

#### Usage Example

You have a set of points along a winding path and want to only process those that are in the first 50% of the path. Set:

* **Compare Against** to "Constant"
* **Operand B** to `0.5`
* **Comparison** to `<=` This will filter all points whose projected time value is less than or equal to 0.5.

#### Notes

* This subnode works best with closed paths or loops for meaningful time-based comparisons.
* Performance can be improved by increasing the Fidelity setting if high precision isn't required.
* When using "All" in Pick mode, consider the impact of multiple path intersections on consolidation methods.
