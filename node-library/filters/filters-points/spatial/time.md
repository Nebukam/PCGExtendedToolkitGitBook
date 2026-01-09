---
description: 'In editor :: PCGEx | Filter : Time'
icon: circle-dashed
---

# Time

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Creates a filter definition that checks points position against a path/spline/polygon2D closest alpha.

#### Overview

This subnode filters points based on their time along a spline or polygon path. It evaluates where each point lies in relation to the path's parameterization and compares that value against a target operand. This is useful for creating effects like "points within 50% of a path's length" or "points near the start of a route."

It connects to **Filter** pins on processing nodes, allowing you to define which points should pass through based on their position along a path.

#### How It Works

This filter calculates how far along a path each point is, using a normalized time value (alpha) from 0.0 to 1.0. For each input point:

1. It projects the point onto one or more paths/splines.
2. It determines the closest point on the path and computes its alpha value (time along the path).
3. It compares this alpha value against a target operand using a comparison operator.
4. The result of that comparison determines whether the point passes the filter.

The behavior changes depending on how multiple paths are handled:

* If a point is near multiple paths, it can pick the closest or consolidate values from all paths.
* You can choose to invert the result of the test for more complex filtering logic.

<details>

<summary>Inputs</summary>

This subnode expects points and optionally one or more paths/splines to compare against. It can also use collection data if configured to do so.

</details>

<details>

<summary>Outputs</summary>

It outputs a filtered set of points based on whether their projected time along the path meets the comparison criteria.

</details>

#### Configuration

***

**SampleInputs**

_Sample inputs._

Controls how input paths are sampled. Can be "All" or "Selected".

**Values**:

* **All**: All input paths are used.
* **Selected**: Only selected paths are used.

***

**Pick**

_If a point is both inside and outside a spline (if there are multiple ones), decide what value to favor._

Controls how to handle cases where a point is near multiple paths.

**Values**:

* **Closest**: Use the time from the closest path.
* **All**: Use all times and consolidate them.

***

**TimeConsolidation**

_If a point is both inside and outside a spline (if there are multiple ones), decide what value to favor._

Only used when `Pick` is set to **All**. Determines how to combine time values from multiple paths.

**Values**:

* **Min**: Use the smallest time value.
* **Max**: Use the largest time value.
* **Average**: Use the average of all time values.

***

**Comparison**

_Comparison_

The comparison operator used to test the point's time against the operand.

**Values**:

* **StrictlyEqual**: `==`
* **StrictlyNotEqual**: `!=`
* **EqualOrGreater**: `>=`
* **EqualOrSmaller**: `<=`
* **StrictlyGreater**: `>`
* **StrictlySmaller**: `<`
* **NearlyEqual**: `~=` (near equality with tolerance)
* **NearlyNotEqual**: `!~=` (near inequality with tolerance)

***

**CompareAgainst**

_Type of OperandB_

Defines whether the operand is a constant value or an attribute from the input data.

**Values**:

* **Constant**: Use a fixed numeric value.
* **Attribute**: Read the comparison value from a point attribute.

***

**Operand B**

_Operand B for testing_

The value to compare against when `CompareAgainst` is set to **Constant**.

***

**Operand B (Attr)**

_Operand B for testing_

The attribute name to read the comparison value from when `CompareAgainst` is set to **Attribute**.

***

**Tolerance**

_Near-equality tolerance_

Only used when using "Nearly Equal" or "Nearly Not Equal" comparisons. Defines how close two values must be to be considered equal.

***

**bInvert**

_If enabled, invert the result of the test_

When enabled, points that would normally pass now fail and vice versa.

***

**WindingMutation**

_Lets you enforce a path winding for testing_

Controls whether the path winding is preserved or forced to a specific orientation during projection.

**Values**:

* **Unchanged**: Preserve original winding.
* **Clockwise**: Force clockwise winding.
* **CounterClockwise**: Force counter-clockwise winding.

***

**Fidelity**

_When projecting, defines the resolution of the polygon created from the spline. Lower values means higher fidelity, but slower execution._

Controls how accurately a spline is converted into a polygon for projection. Higher fidelity (lower number) gives more precise results but takes longer to compute.

***

**bCheckAgainstDataBounds**

_If enabled, when used with a collection filter, will use collection bounds as a proxy point instead of per-point testing_

When using this subnode in a collection context, it can test against the bounding box of collections rather than individual points for performance.

***

**bIgnoreSelf**

_If enabled, a collection will never be tested against itself_

In collection filtering, prevents a collection from being compared to its own data.

***

**Config**

_Filter Config._

A group of settings that define how the filter behaves. Includes all the above options in one place.

#### Usage Example

Use this subnode to filter points that are within the first 30% of a path. Set:

* `Comparison` to **EqualOrSmaller**
* `CompareAgainst` to **Constant**
* `OperandBConstant` to `0.3`
* `Pick` to **Closest**

This will keep only those points that project onto the path before the 30% mark.

#### Notes

* This filter works best with closed paths or splines where a meaningful time parameter exists.
* For open paths, the time is normalized from start to end of the path.
* Using `bCheckAgainstDataBounds` can significantly improve performance when working with large collections.
