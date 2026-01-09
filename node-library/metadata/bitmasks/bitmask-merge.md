---
description: 'In editor :: PCGEx | Bitmask Merge'
icon: circle
---

# Bitmask Merge

{% hint style="info" %}
### AI-generated page -- to be reviewed

While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> A node that combines bitmasks using bitwise operations.

### Overview

This node allows you to merge or modify bitmasks from input data using standard bitwise operations. It's useful when working with metadata flags, where each bit represents a specific property or state. You can combine multiple bitmask values into one, or apply logical operations like AND, OR, XOR, etc., to modify existing flags.

{% hint style="info" %}
This node works on integer values that represent bitmasks. Each bit in the number corresponds to a flag.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main** (optional): Input points or data with bitmask attributes
* **Bitmask** (optional): Additional bitmask input to merge

</details>

<details>

<summary>Outputs</summary>

* **Output**: Points or data with updated bitmask values based on the operation

</details>

### Properties Overview

Controls how the bitmask merging is performed.

***

#### Settings

Configures the operation used to combine bitmasks.

**Operation**

_The bitwise operation to apply when merging masks._

* Determines how input bitmasks are combined
* Can be set to various logical operations like OR, AND, XOR, etc.
* Each operation produces a different result based on the bit values

**Values**:

* **Set**: Sets the bits to the specified value (Flags = Mask)
* **AND**: Returns true only if both bits are 1 (Flags &= Mask)
* **OR**: Returns true if either bit is 1 (Flags |= Mask)
* **NOT**: Inverts the mask bits before applying (Flags &= \~Mask)
* **XOR**: Inverts bits where the mask equals 1 (Flags ^= Mask)

### Notes

* Bitmasks are commonly used for metadata flags, such as terrain types, object properties, or state indicators
* The operation determines how multiple bitmasks interact; for example, OR combines all set bits from both masks
* You can chain multiple Bitmask Merge nodes to build complex flag combinations
* Consider performance when working with large datasets and many operations
