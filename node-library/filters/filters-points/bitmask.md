---
description: 'In editor :: PCGEx | Filter : Bitmask'
icon: circle-dashed
---

# Bitmask

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Filters points based on bitwise flag comparisons between a point's flags and a mask value.

### Overview

This filter evaluates whether a point's bitflags match a specified bitmask using various comparison modes. It's commonly used for categorizing or filtering points based on multiple boolean properties stored as bits in an integer.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes like **Point Filter**, **Point Switch**, or **Point Merge**
{% endhint %}

### How It Works

The filter performs bitwise operations between a point's flags value and a mask. It supports multiple comparison types:

* Match any flags in the mask
* Match all flags in the mask
* Match flags exactly as specified
* No match for any flags
* No match for all flags

It can read the flags from an attribute or use a constant, and the mask can also be an attribute or constant value.

### Configuration

***

#### General

**Flags Attribute**

_The name of the attribute containing the bitflags to test._

This is the source value (Operand A) for the comparison. Must be an integer type.

**Example**: If your points have a "Flags" attribute with values like 5 (binary: 101), this is what gets compared against the mask.

**Comparison**

_The type of bitwise comparison to perform._

* **Match (any)**: At least one flag from the mask must be set in the flags value
* **Match (all)**: All flags from the mask must be set in the flags value
* **Match (strict)**: The flags value must exactly equal the mask
* **No match (any)**: No flags from the mask can be set in the flags value
* **No match (all)**: Not all flags from the mask are set in the flags value

**Mask Input**

_Whether to read the mask value from an attribute or use a constant._

* **Constant**: Use the fixed value in the "Bitmask" field
* **Attribute**: Read the mask value from the specified attribute on input points

**Bitmask Attribute**

_The name of the attribute containing the mask value (when Mask Input is set to Attribute)._

This is Operand B for the comparison. Must be an integer type.

**Bitmask**

_The constant mask value to compare against (when Mask Input is set to Constant)._

This is Operand B for the comparison.

**Compositions**

_External bit operations applied to the mask before comparison._

Allows applying additional bitwise operations to the mask, such as OR, AND, XOR, or NOT. This can be used to modify the mask dynamically based on other values.

**Invert Result**

_When enabled, the filter result is inverted._

If enabled, points that would normally pass now fail, and vice versa.

### Usage Example

You have a set of points with a "Flags" attribute containing bitflags:

* 1 = IsPlayer
* 2 = IsEnemy
* 4 = IsBoss
* 8 = IsBossMinion

To filter for all enemies (IsEnemy = 2) or bosses (IsBoss = 4), you'd:

1. Set **Flags Attribute** to "Flags"
2. Set **Comparison** to "Match (any)"
3. Set **Mask Input** to "Constant"
4. Set **Bitmask** to 6 (binary: 110, which is IsEnemy OR IsBoss)

This would select all points that have either the enemy flag or boss flag set.

### Notes

* Bitflags are typically represented as powers of 2 (1, 2, 4, 8, 16, etc.) for easy combination
* The filter works with any integer type that can represent bitflags
* Multiple filters can be combined using **Filter : Combine** to create complex logic
* When using attribute-based masks, make sure the attribute exists on all input points to avoid errors

### Inputs

* **Points**: Input points to filter
* **Filter**: Connection point for filter operations

### Outputs

* **Pass**: Points that pass the filter condition
* **Fail**: Points that fail the filter condition
