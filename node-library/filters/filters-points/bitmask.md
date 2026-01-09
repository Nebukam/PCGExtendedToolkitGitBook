---
description: 'In editor :: PCGEx | Filter : Bitmask'
icon: circle-dashed
---

# Bitmask

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Filter points using bitwise flag comparisons.

#### Overview

This filter evaluates whether a point's flags match a specified bitmask according to a comparison rule. It's useful for filtering data based on combinations of boolean states or categories represented as bits. You can compare the flags against either a constant value or an attribute from the input data.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes.
{% endhint %}

#### How It Works

This filter performs bitwise operations between a point's flag value and a mask to determine if it passes the test. The comparison logic depends on the selected mode:

* **Match (any)**: At least one bit in the mask is set in the flags
* **Match (all)**: All bits in the mask are set in the flags
* **Match (strict)**: Flags exactly equal the mask
* **No match (any)**: No bits from the mask are set in the flags
* **No match (all)**: Not all bits in the mask are set in the flags

The filter can also apply external compositions to the mask value, allowing for dynamic or computed masks. When enabled, the result is inverted.

<details>

<summary>Inputs</summary>

Expects a point data input with an attribute containing flag values (int64) and optionally a mask attribute or constant value.

</details>

<details>

<summary>Outputs</summary>

Filters points based on whether they meet the specified bitflag criteria.

</details>

#### Configuration

***

**FlagsAttribute**

_Source value. (Operand A)_

Specifies the name of the attribute containing flag values to test against the mask.

**Comparison**

_Type of flag comparison_

Determines how the flags and mask are compared:

* **Match (any)**: Value & Mask != 0 (At least some flags in the mask are set)
* **Match (all)**: Value & Mask == Mask (All the flags in the mask are set)
* **Match (strict)**: Value == Mask (Flags strictly equals mask)
* **No match (any)**: Value & Mask == 0 (Flags does not contains any from mask)
* **No match (all)**: Value & Mask != Mask (Flags does not contains the mask)

**MaskInput**

_Type of Mask_

Controls whether to use a constant value or an attribute for the mask:

* **Constant**: Use the fixed Bitmask value
* **Attribute**: Read the mask from the specified attribute

**BitmaskAttribute**

_(Operand B)_

When using an attribute for the mask, this specifies which attribute to read the mask value from.

**Bitmask**

_(Operand B)_

When using a constant for the mask, this is the fixed bitmask value to compare against.

**Compositions**

_External compositions applied to Operand B (whether it's a constant or not)_

Applies additional transformations to the mask value before comparison. These can be used to compute dynamic masks from other data.

**bInvertResult**

_TBD_

When enabled, inverts the result of the comparison — points that would pass now fail and vice versa.

**Config**

_Filter Config._

A container for all filter settings, including flags attribute, comparison mode, mask input type, bitmask value, compositions, and inversion option.

#### Usage Example

Suppose you have a set of points with a "Flags" attribute representing different categories (e.g., 1 = Grass, 2 = Water, 4 = Forest). You want to keep only the points that are either grass or water. Set the **Comparison** to **Match (any)**, and the **Bitmask** to **3** (binary 11). This will pass any point where the flags contain at least one of those bits.

#### Notes

* Bitmasks work with 64-bit integers, allowing up to 64 unique flags.
* The filter supports both constant and attribute-based masks for flexibility.
* Compositions can be used to combine multiple attributes or compute derived values.
* Inversion is useful for creating "not" conditions in your filters.
