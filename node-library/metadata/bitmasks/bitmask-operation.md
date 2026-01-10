---
description: 'In editor :: PCGEx | Bitmask Operation'
icon: circle
---

# Bitmask Operation

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Perform bitwise operations on integer attributes to manage flags or settings represented as bitmasks.

#### How It Works

This node modifies integer attributes using bitwise operations, which are useful for managing multiple boolean states within a single number. For each point in your data, it reads the current value of an attribute and applies a specified operation with a mask. The mask can be a fixed value or read from another attribute. The result is stored back into the target attribute.

The process works as follows:

1. Read the current value from the target attribute on each point.
2. Determine what mask value to use - either a constant value you define, or a value read from an attribute on each point.
3. Apply one of several bitwise operations (AND, OR, XOR, NOT, or SET) between the current value and the mask.
4. Store the resulting value back into the target attribute.

This operation is performed in parallel across all points, making it efficient for large datasets.

#### Configuration

<details>

<summary><strong>Target Attribute</strong><br><em>Integer attribute to modify</em></summary>

The name of the integer attribute that will be modified by the bitwise operation. This attribute must exist on your input points.

</details>

<details>

<summary><strong>Operation Type</strong><br><em>Type of bitwise operation</em></summary>

Select how to combine the current value with the mask:

* **Set**: Replace the entire value with the mask.
* **AND**: Keep only bits that are 1 in both values.
* **OR**: Set any bit to 1 if either value has it set.
* **NOT**: Apply AND with the inverted mask.
* **XOR**: Flip bits where the mask equals 1.

</details>

<details>

<summary><strong>Mask Source</strong><br><em>How to determine the mask value</em></summary>

Choose whether to use a fixed value or read from an attribute:

* **Constant**: Use the value you specify in the "Bitmask Value" setting.
* **Attribute**: Read the mask from an integer attribute on each point.

</details>

<details>

<summary><strong>Mask Attribute</strong><br><em>Attribute to read mask from</em></summary>

The name of the integer attribute that contains the mask values, when "Mask Source" is set to "Attribute". This attribute must exist on your input points and contain integer values.

</details>

<details>

<summary><strong>Bitmask Value</strong><br><em>Fixed integer mask</em></summary>

The constant integer value used as the mask when "Mask Source" is set to "Constant". This defines which bits are affected by the operation.

</details>
