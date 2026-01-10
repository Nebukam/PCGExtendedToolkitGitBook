---
description: 'In editor :: PCGEx | Bitmask Merge'
icon: circle
---

# Bitmask Merge

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Merges bitmask data using bitwise operations.

#### How It Works

The Bitmask Merge node combines multiple sets of flags into one unified set. Each flag represents a specific condition or property, such as terrain type, object behavior, or metadata state. The node applies a chosen operation to merge these flags together, allowing you to create more complex conditional logic in your procedural content.

The process starts with an initial value, typically zero or the first input's flags. Then, for each additional input, it performs the selected bitwise operation:

* **OR** sets any flag that is active in either input
* **AND** only activates a flag if it's active in both inputs
* **XOR** activates a flag if it differs between inputs
* **NOT** inverts flags where the mask has active bits
* **SET** replaces all flags with the new value

This sequential application means the order of inputs affects the final result, especially when using operations like AND or NOT.

#### Configuration

<details>

<summary><strong>Operation</strong><br><em>The bitwise operation to apply when merging bitmasks.</em></summary>

Controls how input bitmasks are combined into a single output.

**Values**:

* **= (SET)**: Assigns the mask value directly to the flags.
* **AND**: Sets a bit only if it's set in both operands.
* **OR**: Sets any bit that is set in either operand.
* **NOT**: Inverts bits where the mask has 1s.
*
  * **XOR**: Sets a bit if it differs between operands.

</details>

#### Usage Example

Suppose you have two bitmask inputs:

* Input A: `0b1010` (binary)
* Input B: `0b1100` (binary)

Using the OR operation, the result would be:

* Output: `0b1110`

This is useful when combining flags like "isWater", "isForest", or "isMountain" to create a combined terrain type.

#### Notes

* The node works with any number of inputs.
* Bit positions are treated as independent flags, so ensure consistent bit usage across all inputs.
* For performance, avoid using many inputs with complex operations if possible.
