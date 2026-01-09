---
description: 'In editor :: PCGEx | Bitmask'
icon: circle
---

# Bitmask

{% hint style="warning" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> A Simple bitmask attribute.

### Overview

This node allows you to create and manipulate bitmask values, which are useful for storing multiple boolean flags in a single integer value. It's commonly used in procedural generation for tagging points with various attributes or states, such as "isWalkable", "isWater", or "isDangerous". The node supports both direct bitmask assignment and bit-by-bit mutation operations.

{% hint style="info" %}
Bitmasks are particularly useful when you need to combine multiple binary flags into a single attribute for efficient storage and fast lookups.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Source** (optional): Points or data to process. If not connected, the node will use the default input points.

</details>

<details>

<summary>Outputs</summary>

* **Output** (default): The processed points with the new bitmask attribute applied.

</details>

### Properties Overview

Controls how the bitmask is generated and applied.

***

#### General

Controls general behavior of the bitmask node.

**Bitmask**

_The bitmask value to generate or mutate._

* How it affects results: This defines the base value for the bitmask, which can be directly used or modified through operations.
* Value ranges: Any integer value (0 to 2^63 - 1)

**Values**:

* **Direct**: Used for easy override mostly. Will use the value of the bitmask as-is
* **Mutations**: Use an array to mutate the bits of the incoming bitmask (will modify the input if one is provided)

**TitleCharLimit**

_Limit of characters for the title._

* How it affects results: Controls how many characters are used when displaying the node's title.
* Value ranges: Any positive integer

### Notes

* Bitmasks can store up to 64 distinct flags, each represented by a single bit.
* You can use this node to combine multiple boolean conditions into a single attribute for efficient data handling.
* The Mutations mode allows you to modify specific bits of an existing bitmask, making it easy to add or remove flags without recalculating the entire value.
