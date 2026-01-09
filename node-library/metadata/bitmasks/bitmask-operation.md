---
description: 'In editor :: PCGEx | Bitmask Operation'
icon: circle
---

# Bitmask Operation

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Do a bitwise operation on an attribute to modify its flags.

### Overview

This node performs bitwise operations on integer attributes, allowing you to manipulate flag values in your point data. It's useful for combining or modifying bitmasks stored in attributes, such as object types, permissions, or state flags. You can apply operations like AND, OR, XOR, and NOT to existing flags using either a constant value or an attribute from the input points.

{% hint style="info" %}
The operation modifies the target attribute directly, overwriting its current value with the result of the bitwise calculation.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input** (optional): Points with attributes to modify. Supports multiple inputs.
* **Point Filter** (optional): Filters points to process.

</details>

<details>

<summary>Outputs</summary>

* **Main Output**: Points with updated attribute values based on the bitwise operation.

</details>

### Properties Overview

Controls how the bitmask operation is applied to your data.

***

#### Settings

Configures the core behavior of the node.

**Flag Attribute**

_The name of the attribute containing the flags to be modified._

* Must be an integer type (int64)
* The result of the operation will overwrite this attribute's value

**Operation**

_The bitwise operation to perform on the flags._

**Values**:

* **Set**: Sets the bits to match the mask exactly.
* **AND**: Performs a bitwise AND, keeping only bits that are set in both values.
* **OR**: Performs a bitwise OR, setting any bit that is set in either value.
* **NOT**: Inverts the bits specified by the mask (AND with inverted mask).
* **XOR**: Performs a bitwise XOR, flipping bits where the mask has 1s.

**Mask Input**

_Determines whether to use a constant or attribute value for the mask._

**Values**:

* **Constant**: Use a fixed integer value.
* **Attribute**: Read the mask value from an attribute on the input points.

**Mask Attribute**

_The name of the attribute containing the mask value, used when "Mask Input" is set to "Attribute."_

* Must be an integer type (int64)
* Each point will use its own mask value for the operation

**Bitmask**

_The constant value to use as the mask, used when "Mask Input" is set to "Constant."_

* Accepts any 64-bit signed integer
* Example: A value of `5` (binary `101`) will affect bits 0 and 2

### Notes

* Bitmasks are commonly used for storing multiple boolean flags in a single integer.
* Use the **OR** operation to add new flags without affecting existing ones.
* Use the **AND** operation with an inverted mask to clear specific flags.
* The **XOR** operation is useful for toggling bits on and off.
* For performance, prefer using constant masks when possible rather than attribute-based masks.
