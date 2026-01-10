---
description: 'In editor :: PCGEx | Filter : Contains (Hash)'
icon: circle-dashed
---

# Contains (Hash)

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Creates a filter definition that checks whether a given value hash is contained within a one or more set of values.

#### How It Works

This subnode evaluates whether a point's attribute value exists within a collection of reference values. It uses hash-based comparison, which is fast but sensitive to data types (for example, float 0 and double 0 are treated as different). The filter compares the hash of an input value against hashes stored in one or more reference sets.

* First, it reads the value from the point using the `OperandA` attribute name.
* Then, it computes a hash for that value.
* If the `Mode` is **Merged**, all reference sets are combined into one large set before comparison.
* If the `Mode` is **Individual**, each reference set is checked separately:
  * If `Inclusion` is **Any**, the point passes if its hash matches any value in at least one set.
  * If `Inclusion` is **All**, the point passes only if its hash matches all values in every set.
* The result can be inverted using the `bInvert` flag.

This approach allows for efficient lookups, especially when dealing with large datasets or multiple reference sets. It's particularly useful for filtering based on discrete categories or predefined lists of values.

#### Configuration

<details>

<summary><strong>Mode</strong><br><em>How to process input sets.</em></summary>

Controls how the reference sets are handled during comparison.

**Values**:

* **Merged**: All reference sets are combined into one large set for comparison.
* **Individual**: Reference sets are kept separate and tested individually.

</details>

<details>

<summary><strong>Inclusion</strong><br><em>How to test against input sets.</em></summary>

Only applies when `Mode` is set to **Individual**. Determines how the filter evaluates matches across multiple sets.

**Values**:

* **Any**: The point passes if its hash matches at least one value in any of the sets.
* **All**: The point passes only if its hash matches all values in every set.

</details>

<details>

<summary><strong>OperandA</strong><br><em>Operand A for testing.</em></summary>

The name of the attribute on points to compare against the reference sets. For example, if you're filtering based on a "Category" attribute, this would be set to `Category`.

</details>

<details>

<summary><strong>SetAttributeName</strong><br><em>Name of the attribute to read on sets.</em></summary>

The name of the attribute in the reference data that contains the values to compare against. This is used when reading from external data sources.

</details>

<details>

<summary><strong>bTypeInsensitive</strong><br><em>If enabled, the hash comparison will be less sensitive.</em></summary>

When enabled, the filter attempts to normalize type differences during hash computation (e.g., treating float and double values as equivalent). This is useful when you want to ignore minor type variations in your data.

</details>

<details>

<summary><strong>bInvert</strong><br><em>Whether to invert the result of the filter.</em></summary>

When enabled, the filter logic is inverted. Points that would normally pass now fail, and vice versa.

</details>

#### Usage Example

1. Create a point cloud with a "MaterialType" attribute.
2. Set up a data source containing reference values like `["Wood", "Metal", "Stone"]`.
3. Use this subnode to filter points where the `MaterialType` matches any of these values.
4. Connect it to a processing node (e.g., a "Filter Points" node) to apply the condition.

#### Notes

* Hash comparisons are fast but type-sensitive. Be mindful of data types when defining your reference sets.
* The `bTypeInsensitive` flag can help reduce false negatives due to type mismatches, but may increase computational overhead.
* This filter works best with discrete or categorical data rather than continuous values.
