---
description: 'In editor :: PCGEx | Bitmask'
icon: circle
---

# Bitmask

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Applies bitmask operations to attributes in a procedural data set.

#### How It Works

The Bitmask node modifies attribute flags using bitwise operations. It evaluates filter conditions for each point and applies the selected operation only when those conditions are met. The node supports several types of bitwise operations that let you combine or modify flag states in flexible ways.

For each point, the system first checks if any defined filters pass. If they do, it performs the chosen bitmask operation (such as setting specific bits, combining flags with AND or OR, or toggling bits with XOR) using a provided mask value. This process is repeated for every point, allowing precise control over how flag values are updated across your dataset.

#### Configuration

<details>

<summary><strong>Bitmask</strong><br><em>Operations executed on the flag if all filters pass.</em></summary>

Controls how the bitmask is applied to the target attribute. This subnode defines the operation type and mask value.

**Values**:

* **Set**: Sets the bits in the flag to match the mask exactly.
* **AND**: Performs a bitwise AND between the flag and mask, keeping only bits that are set in both.
* **OR**: Performs a bitwise OR between the flag and mask, setting any bit that is set in either value.
* **NOT**: Performs a bitwise AND with the inverted mask, clearing bits where the mask has 1s.
* **XOR**: Performs a bitwise XOR between the flag and mask, flipping bits where the mask has 1s.

</details>

<details>

<summary><strong>TitleCharLimit</strong><br><em>Limit of characters for the title.</em></summary>

Limits how many characters are used in the node's display title. This is useful when working with long attribute names or complex configurations.

</details>

#### Usage Example

You're creating a terrain generation graph where each point represents a tile that can be flagged as "Water", "Forest", or "Mountain". You want to mark tiles that are both water and forest as "Wetland".

1. Add a Bitmask node.
2. Set the operation to **OR**.
3. Define a mask value of `0b110` (binary) to represent "Forest" and "Water".
4. Apply this to an attribute like `TileFlags`.
5. The node will set the appropriate bits for any point that matches your filter conditions.

#### Notes

* Bitmask operations are efficient and fast, making them ideal for large datasets.
* Ensure that the target attribute is compatible with integer-based bitwise operations.
* Use filters to control which points are affected by the operation.
