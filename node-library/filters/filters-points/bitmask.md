---
description: 'In editor :: PCGEx | Filter : Bitmask'
icon: circle-dashed
---

# Bitmask

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Filter points using bitwise flag comparisons.

#### How It Works

The Bitmask filter subnode checks if a point's flags match a specified bitmask based on a comparison rule. It reads a flag value from each point and compares it with a mask using one of several logic options:

1. **Operand A** is the flags value from the point (read from an attribute or constant).
2. **Operand B** is the mask, which can be a fixed value or read from an attribute.
3. The comparison logic determines how these two values are evaluated:
   * **Match (any)**: At least one flag in the mask is set in the operand.
   * **Match (all)**: All flags in the mask are set in the operand.
   * **Match (strict)**: The operand exactly matches the mask.
   * **No match (any)**: No flags from the mask are set in the operand.
   * **No match (all)**: Not all flags from the mask are set in the operand.

Optional external operations can be applied to Operand B to modify the mask before comparison. If invert result is enabled, the outcome of the comparison is flipped.

#### Configuration

<details>

<summary><strong>Flags Attribute</strong><br><em>Source value. (Operand A)</em></summary>

The name of the attribute from which the flags value is read for comparison.

</details>

<details>

<summary><strong>Comparison</strong><br><em>Type of flag comparison</em></summary>

How the flags and mask are compared:

* **Match (any)**: At least some flags in the mask are set.
* **Match (all)**: All flags in the mask are set.
* **Match (strict)**: The flags exactly match the mask.
* **No match (any)**: No flags from the mask are set.
* **No match (all)**: Not all flags from the mask are set.

</details>

<details>

<summary><strong>Mask Input</strong><br><em>Type of Mask</em></summary>

Whether the mask value is a constant or read from an attribute:

* **Constant**: Use the fixed value in the Bitmask field.
* **Attribute**: Read the mask value from the specified attribute.

</details>

<details>

<summary><strong>Bitmask (Attr)</strong><br><em>Mask for testing -- Must be int64. (Operand B)</em></summary>

The name of the attribute containing the mask value, used when `MaskInput` is set to "Attribute".

</details>

<details>

<summary><strong>Bitmask</strong><br><em>Mask for testing -- Must be int64. (Operand B)</em></summary>

The fixed bitmask value used when `MaskInput` is set to "Constant".

</details>

<details>

<summary><strong>Compositions</strong><br><em>External compositions applied to Operand B (whether it's a constant or not)</em></summary>

Optional operations that modify the mask before comparison, such as shifting or combining with other values.

</details>

<details>

<summary><strong>Invert Result</strong><br><em>TBD</em></summary>

When enabled, the result of the comparison is inverted. Points that would pass now fail, and vice versa.

</details>
