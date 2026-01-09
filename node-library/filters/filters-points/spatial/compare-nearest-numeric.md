---
description: 'In editor :: PCGEx | Filter : Compare Nearest (Numeric)'
icon: circle-dashed
---

# Compare Nearest (Numeric)

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Creates a filter definition that compares two numeric attribute values.

#### Overview

This subnode defines a filtering behavior that evaluates whether a point's numeric attribute value meets a comparison condition against another value—either a constant or an attribute from nearby points. It is useful for creating rules that depend on spatial relationships and attribute comparisons, such as selecting points where a property is greater than the nearest neighbor’s value.

This subnode connects to Filter pins on processing nodes like **Filter Points** or **Filter Edges**, where it defines which points pass or fail based on the comparison logic.

#### How It Works

This filter evaluates each point against another numeric value using a comparison operator. It first identifies the nearest point (or points) based on the configured distance method, then reads a numeric attribute from the target point and compares it to a second operand—either a constant or an attribute from the same point. The comparison is performed using one of several operators, such as greater than, less than, or near-equal.

The filter can be configured to ignore self-comparisons (i.e., comparing a point to itself), which is helpful when comparing against nearest neighbors.

<details>

<summary>Inputs</summary>

* **Target Points**: The points that are evaluated for filtering.
* **Operand A**: A numeric attribute read from the target points.
* **Operand B**: Either a constant or an attribute from the target points, depending on the `CompareAgainst` setting.

</details>

<details>

<summary>Outputs</summary>

* **Filtered Points**: Points that pass the comparison test are included in the output; those that fail are excluded.

</details>

#### Configuration

***

**DistanceDetails**

_Controls how distance is calculated between points._

This defines the method used to compute spatial distances when identifying the nearest point. Common options include Euclidean, Manhattan, or custom distance functions.

**Values**:

* **Euclidean**: Standard straight-line distance.
* **Manhattan**: Sum of absolute differences in coordinates.
* **Custom**: User-defined distance function.

**OperandA**

_The numeric attribute to read from the target points._

This is the first operand used in the comparison. It must be a numeric attribute, such as height or weight, and is read directly from each point being tested.

**Comparison**

_The operator used to compare Operand A and Operand B._

This determines how the two values are compared.

**Values**:

* **==**: Strictly equal.
* **!=**: Strictly not equal.
* **>=**: Equal or greater than.
* **<=**: Equal or smaller than.
* **>**: Strictly greater than.
* **<**: Strictly smaller than.
* **\~=**: Nearly equal (within tolerance).
* **!\~=**: Nearly not equal (outside tolerance).

**CompareAgainst**

_Specifies whether Operand B is a constant or an attribute._

This controls how the second operand for comparison is sourced.

**Values**:

* **Constant**: Use a fixed numeric value defined in `OperandBConstant`.
* **Attribute**: Read the second operand from an attribute on the target points.

**OperandBConstant**

_The constant value used as Operand B when `CompareAgainst` is set to "Constant"._

This is only active when `CompareAgainst` is set to Constant. It defines the fixed numeric value used in comparisons.

**Tolerance**

_Near-equality tolerance for `~=`, `!~=` comparisons._

When using near-equal comparisons, this sets how close two values must be to be considered equal. The default is a small epsilon value suitable for floating-point comparisons.

**bIgnoreSelf**

_When enabled, prevents a point from comparing against itself._

This is useful when comparing a point's attribute to its nearest neighbor. If enabled, the point will skip self-comparison and instead compare to the next closest point.

#### Usage Example

You want to filter points where the height of each point is greater than or equal to the height of its nearest neighbor.

1. Set **OperandA** to a numeric attribute like `Height`.
2. Set **CompareAgainst** to `Attribute`.
3. Set **OperandB** to the same `Height` attribute.
4. Choose **Comparison** as `EqualOrGreater`.
5. Enable **bIgnoreSelf** to avoid comparing a point with itself.

This will keep only those points where their height is greater than or equal to that of their nearest neighbor.

#### Notes

* This filter works best when used in conjunction with spatial operations like "Find Nearest" or "Nearest Neighbors".
* For performance, avoid using `bIgnoreSelf = false` unless necessary.
* When using near-equality comparisons (`~=`, `!~=`), ensure that the tolerance is appropriate for your data scale.
