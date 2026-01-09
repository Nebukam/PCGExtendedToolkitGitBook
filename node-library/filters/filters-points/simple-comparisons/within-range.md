---
description: 'In editor :: PCGEx | Filter : Within Range'
icon: circle-dashed
---

# Within Range

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Creates a filter definition that checks if a value is within a given range.

#### Overview

This subnode defines a filtering behavior that evaluates whether a numeric value falls within a specified minimum and maximum range. It's useful for selecting points based on attribute values, such as distance, height, or any other measurable property.

It connects to the **Filter** pin of processing nodes like "Filter Points" or "Filter Edges", where it determines which elements pass through the filter.

{% hint style="info" %}
Connects to Filter pins on processing nodes.
{% endhint %}

#### How It Works

This subnode evaluates a numeric operand against a defined range. It reads the operand value from an attribute, compares it to the specified minimum and maximum values, and determines whether the point should pass or fail the filter.

The evaluation logic works as follows:

1. The operand value is read from the selected attribute.
2. If the `Source` is set to **Constant**, the range is fixed using `RangeMin` and `RangeMax`.
3. If the `Source` is set to **Attribute Set**, it reads a range from an external attribute, which must be a FVector2 containing min and max values.
4. The comparison checks if the operand value lies within the defined range.
5. If `bInclusive` is enabled, the boundary values are included in the pass condition.
6. If `bInvert` is enabled, the result is flipped — points outside the range will pass instead of those inside.

<details>

<summary>Inputs</summary>

This subnode expects a point data input with attributes that can be used as the operand for comparison.

</details>

<details>

<summary>Outputs</summary>

This subnode does not produce new data. It defines a filtering behavior that is consumed by other nodes to determine which points pass or fail.

</details>

#### Configuration

***

**OperandA**

_The attribute containing the numeric value to test._

Selects the point attribute whose value will be compared against the range. The attribute must contain a numeric type, which will be converted to double for comparison.

**Source**

_Where to read ranges from._

Controls whether the range is defined directly in this node or pulled from an external attribute set.

* **Constant**: Uses `RangeMin` and `RangeMax` values directly.
* **Attribute Set**: Reads the range from a FVector2 attribute in an external source.

**Values**:

* **Constant**: Uses fixed values for the range
* **Attribute Set**: Pulls range data from a FVector2 attribute

**Attributes**

_List of attributes to read ranges from FVector2._

When `Source` is set to **Attribute Set**, this list defines which attributes contain the min/max range values. Each attribute must be a FVector2 where X is the minimum and Y is the maximum.

**RangeMin**

_Minimum value of the range._

The lower bound of the acceptable range when `Source` is set to **Constant**.

**RangeMax**

_Maximum value of the range._

The upper bound of the acceptable range when `Source` is set to **Constant**.

**bInclusive**

_Whether the test should be inclusive of min/max values._

When enabled, points with values exactly equal to `RangeMin` or `RangeMax` will pass the filter.

**bInvert**

_If enabled, invert the result of the test and pass if value is outside the given range._

When enabled, the filter passes points that are **outside** the defined range instead of inside it.

#### Usage Example

Suppose you want to keep only points whose height (from a "Height" attribute) is between 50 and 150 units. You would:

1. Set `OperandA` to the "Height" attribute.
2. Set `Source` to **Constant**.
3. Set `RangeMin` to `50` and `RangeMax` to `150`.
4. Leave `bInclusive` as `false` (optional).
5. Connect this subnode to a filter node that uses it.

#### Notes

* The operand attribute must be numeric; non-numeric types will cause the filter to fail.
* When using **Attribute Set** for ranges, ensure the source attributes are properly populated with valid FVector2 values.
* Inverting the filter can be useful for removing outliers or selecting elements outside a desired range.
