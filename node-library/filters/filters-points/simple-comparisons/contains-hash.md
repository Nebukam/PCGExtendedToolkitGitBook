---
description: 'In editor :: PCGEx | Filter : Contains (Hash)'
icon: circle-dashed
---

# Contains (Hash)

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Creates a filter definition that checks whether a given value hash is contained within a one or more set of values. Important note: this is a hash comparison, so it's highly type sensitive! Float 0 != Double 0.

#### Overview

This subnode defines a filtering behavior that evaluates whether the hash of a point's attribute value exists in one or more sets of pre-defined hashes. It is useful for quickly checking if a point matches any of a predefined list of values, especially when dealing with large datasets where performance matters.

It connects to **Filter** pins on processing nodes, allowing you to control which points are processed further based on their attribute values being present in specified sets.

{% hint style="info" %}
Connects to Filter pins on processing nodes.
{% endhint %}

#### How It Works

This filter performs a hash-based comparison between an input point's attribute value and a set of pre-defined hashes. It works by:

1. Reading the value from a specified attribute (Operand A) on each point.
2. Computing a hash for that value.
3. Comparing this hash against a collection of known hashes from one or more data sets.
4. Determining whether the point passes the filter based on how many of the input sets contain the hash:
   * If **Merged** mode is used, all sets are combined into one large set and checked.
   * If **Individual** mode is used, each set is tested separately, and the result depends on the **Inclusion** setting:
     * **Any**: The point passes if its hash is found in at least one set.
     * **All**: The point passes only if its hash is found in all sets.

The comparison is sensitive to data types. For example, a float value of `0` and a double value of `0` will have different hashes, so they are treated as distinct values.

<details>

<summary>Inputs</summary>

* Points with an attribute matching the **Operand A** setting.
* Optional input sets containing attributes named by **SetAttributeName**, which define the hash values to check against.

</details>

<details>

<summary>Outputs</summary>

* Points that pass or fail the hash containment test, depending on the filter result and whether inversion is enabled.

</details>

#### Configuration

***

**Mode**

_Controls how input sets are processed._

When set to **Merged**, all input sets are combined into one large set before comparison. When set to **Individual**, each set is tested separately based on the **Inclusion** setting.

**Values**:

* **Merged**: All input set will be merged into a single set.
* **Individual**: Input set are kept separated, and tested individually.

***

**Inclusion**

_How to test against input sets when using Individual mode._

Controls whether a point must match at least one or all of the sets to pass the filter.

**Values**:

* **Any**: Value must be present in at least one set for the filter to pass.
* **All**: Value must be present in all input set for the filter to pass.

***

**OperandA**

_Name of the attribute on points whose value is hashed and compared._

This defines which point attribute's value will be used to compute the hash for comparison. For example, if set to `Value`, it will compare the hash of each point’s `Value` attribute.

***

**SetAttributeName**

_Name of the attribute in input sets that contains the values to compare against._

This specifies which attribute from the input data sets holds the values to be hashed and compared. The values are expected to be stored as hashes, not raw values.

***

**bTypeInsensitive**

_When enabled, the hash comparison will be less sensitive to data types._

If enabled, numeric values of different types (e.g., float vs double) may be treated as equivalent during hashing, reducing strictness of comparisons.

***

**bInvert**

_Whether to invert the result of the filter._

When enabled, points that would normally pass the filter will instead fail, and vice versa.

#### Usage Example

You have a set of points with an attribute named `ColorID`, and you want to keep only those whose color ID matches one or more specific predefined IDs. You can:

1. Create input sets containing lists of valid `ColorID` values.
2. Set **SetAttributeName** to `ColorID`.
3. Choose **Individual** mode and **Any** inclusion to allow points that match any of the given IDs.
4. Optionally enable **bInvert** if you want to exclude rather than include matching points.

#### Notes

* Hash comparisons are type-sensitive, so `0f` and `0d` are treated as different values.
* Performance is improved when using **Merged** mode with a single large set instead of multiple small sets.
* This filter works best when the input sets contain pre-computed hashes for fast lookup.
