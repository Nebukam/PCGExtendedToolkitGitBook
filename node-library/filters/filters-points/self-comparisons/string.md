---
description: 'In editor :: PCGEx | Filter : Self Compare (String)'
icon: circle-dashed
---

# String

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Creates a filter definition that compares an attribute value against itself at another index.

#### How It Works

This subnode evaluates each point in your data and compares its string attribute value with the same attribute from another point in the dataset. The comparison is based on a defined index mode and operand, which determines how the target point is selected.

1. For each point, it retrieves the value of the specified string attribute (Operand A).
2. It calculates the index of the point to compare against using the Index Mode and Compare Against settings.
3. Depending on the index mode:
   * If **Pick**, it uses the index directly.
   * If **Offset**, it adds an offset to the current point's index.
4. The index is adjusted according to the Index Safety setting if it goes out of bounds:
   * **Ignore**: Invalid indices are skipped.
   * **Tile**: Wraps around to valid indices.
   * **Clamp**: Uses the closest valid index.
   * **Yoyo**: Mirrors back from the boundary.
5. If the target point's attribute value is accessible, it compares the two string values using the specified comparison method.
6. If the comparison passes, the original point is included in the filtered output.

#### Configuration

<details>

<summary><strong>Operand A</strong><br><em>String attribute to test.</em></summary>

The name of the string attribute whose value will be compared against another instance of itself.

</details>

<details>

<summary><strong>Comparison</strong><br><em>Comparison method for string values.</em></summary>

How the two string values are compared.

* **StrictlyEqual**: Values must match exactly.
* **Contains**: First value contains second as a substring.
* **StartsWith**: First value starts with second.
* **EndsWith**: First value ends with second.

</details>

<details>

<summary><strong>Index Mode</strong><br><em>How the comparison index is calculated.</em></summary>

Whether to pick a specific index or calculate an offset from the current point's index.

* **Pick**: Use a fixed index directly.
* **Offset**: Add an offset value to the current index.

</details>

<details>

<summary><strong>Compare Against</strong><br><em>Source of operand B.</em></summary>

Determines whether Operand B is a constant or comes from an attribute.

* **Constant**: Use a fixed integer value.
* **Attribute**: Read the index value from an input attribute.

</details>

<details>

<summary><strong>Index (Attr)</strong><br><em>Attribute to read comparison index from.</em></summary>

When Compare Against is set to Attribute, this defines which attribute to use for the index value.

</details>

<details>

<summary><strong>Index</strong><br><em>Fixed index value for comparison.</em></summary>

When Compare Against is set to Constant, this defines the fixed integer index to compare against.

</details>

<details>

<summary><strong>Index Safety</strong><br><em>How out-of-bounds indices are handled.</em></summary>

What to do when the calculated index exceeds data bounds.

* **Ignore**: Skip invalid comparisons.
* **Tile**: Wrap around to valid indices.
* **Clamp**: Use the nearest valid index.
* **Yoyo**: Mirror back from boundary.

</details>

<details>

<summary><strong>Invalid Index Fallback</strong><br><em>How to treat points with invalid indices.</em></summary>

Whether points with invalid indices should pass or fail the filter.

* **Pass**: Points are included in output.
* **Fail**: Points are excluded from output.

</details>

<details>

<summary><strong>Swap Operands</strong><br><em>Invert comparison direction for contains checks.</em></summary>

When enabled, swaps the operands so that the comparison becomes "B contains A" instead of "A contains B". Useful for inverting substring checks.

</details>

#### Usage Example

You have a sequence of points representing a path and want to filter out points where the point's name matches the name of another point at an offset of 2. Set Operand A to your point's name attribute, Index Mode to Offset, Compare Against to Constant, Index to 2, and Comparison to StrictlyEqual.

#### Notes

* This subnode is useful for creating self-referential filters.
* Be cautious with large offsets or index safety settings that may cause unexpected behavior in small datasets.
* The comparison logic supports case-sensitive operations by default; consider using string conversion utilities if needed.
