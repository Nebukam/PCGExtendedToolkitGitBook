---
description: 'In editor :: PCGEx | Filter : Self Compare (Numeric)'
icon: circle-dashed
---

# Numeric

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Creates a filter definition that compares an attribute numeric value against itself at another index.

#### How It Works

This subnode evaluates whether a point's numeric attribute meets a comparison condition against the same attribute from another point in the data set. For each input point, it reads a value from Operand A and compares it to a value from Operand B, which is taken from a different point based on an index calculation.

The process works like this:

1. It reads the numeric value of Operand A from the current point.
2. It calculates which other point to compare against using the Index Mode and either a fixed index or an attribute-based index.
3. If the calculated index is valid, it reads the value of Operand B from that point.
4. It checks if the comparison between Operand A and Operand B passes the defined condition.
5. If the comparison passes, the point is included in the output; otherwise, it's excluded.

The index calculation can be either:

* **Pick**: Uses a specific fixed index.
* **Offset**: Adds an offset value to the current point's index.

Index safety modes determine how invalid indices are handled:

* **Ignore**: Invalid indices are skipped.
* **Tile**: Wraps around to valid indices.
* **Clamp**: Clamps invalid indices to the nearest valid one.
* **Yoyo**: Mirrors invalid indices back and forth.

#### Configuration

<details>

<summary><strong>Operand A</strong><br><em>Operand A for testing -- Will be translated to `double` under the hood.</em></summary>

The numeric attribute from the current point that will be used as the left-hand side of the comparison.

</details>

<details>

<summary><strong>Comparison</strong><br><em>Comparison</em></summary>

The comparison operator to use. Options include:

* **Equal**: Values must be exactly equal.
* **Not Equal**: Values must not be equal.
* **Nearly Equal**: Values must be within tolerance.
* **Nearly Not Equal**: Values must differ by more than tolerance.
* **Greater Than**: Operand A must be greater than Operand B.
* **Greater Than or Equal**: Operand A must be greater than or equal to Operand B.
* **Less Than**: Operand A must be less than Operand B.
* **Less Than or Equal**: Operand A must be less than or equal to Operand B.

</details>

<details>

<summary><strong>Tolerance</strong><br><em>Near-equality tolerance</em></summary>

The tolerance used when comparing values for "Nearly Equal" and "Nearly Not Equal". Only applies if the comparison is set to those options.

</details>

<details>

<summary><strong>Index Mode</strong><br><em>Index mode</em></summary>

How the index of the point to compare against is calculated:

* **Pick**: Uses a fixed index.
* **Offset**: Adds an offset value to the current point's index.

</details>

<details>

<summary><strong>Compare Against</strong><br><em>Type of OperandB</em></summary>

Whether to use a constant or attribute value for the comparison:

* **Constant**: Use Index Constant.
* **Attribute**: Use Index Attribute.

</details>

<details>

<summary><strong>Index (Attr)</strong><br><em>Const Index value to use according to the selected Index Mode</em></summary>

The attribute used as the index when Compare Against is set to "Attribute".

</details>

<details>

<summary><strong>Index</strong><br><em>Const Index value to use according to the selected Index Mode</em></summary>

The fixed index value used when Compare Against is set to "Constant".

</details>

<details>

<summary><strong>Index Safety</strong><br><em>Index safety</em></summary>

How invalid indices are handled:

* **Ignore**: Invalid indices are ignored.
* **Tile**: Wraps around to valid indices.
* **Clamp**: Clamps invalid indices to the nearest valid one.
* **Yoyo**: Mirrors invalid indices back and forth.

</details>

<details>

<summary><strong>Invalid Index Fallback</strong><br><em>How to deal with invalid indices</em></summary>

What happens when an index is invalid:

* **Pass**: Invalid indices are treated as passing the filter.
* **Fail**: Invalid indices are treated as failing the filter.

</details>

#### Usage Example

You want to filter points so that only those whose height attribute is greater than the height of the point at index 5. Set Operand A to a height attribute, Comparison to "Greater Than", Index Mode to "Pick", and Index Constant to 5. This will keep only points where their own height exceeds that of the point at index 5.

#### Notes

This filter is useful for creating spatial or sequential dependencies in procedural generation. Be careful with index safety settings when using offsets, as they can lead to unexpected behavior if not properly constrained.
