---
description: 'In editor :: PCGEx | Bitmask Operation'
icon: circle
---

# Bitmask Operation

Do a Bitmask operation on an attribute.

**How It Works**

> AI-Generated, needs proofreading

* The node performs a bitmask operation on an attribute specified as the Flag Attribute.
* It uses the Operation setting to determine which bitwise operation (such as AND, OR) to apply between the Flag Attribute and the Bitmask value.
* The Mask Input specifies whether the mask comes from another attribute or directly from the Bitmask setting, with both options requiring the bitmask to be of type int64.
* Outputs the result of applying the chosen bitwise operation on the input attribute using the provided bitmask.

#### Configuration

<details>

<summary><strong>Flag Attribute</strong> <code>Name</code></summary>

Target attribute

⚡ PCG Overridable

</details>

<details>

<summary><strong>Operation</strong> <code>PCGExBitOp</code></summary>

Target attribute

⚡ PCG Overridable

</details>

<details>

<summary><strong>Mask Input</strong> <code>PCGExInputValueType</code></summary>

Type of Mask

⚡ PCG Overridable

</details>

<details>

<summary><strong>Bitmask (Attr)</strong> <code>Name</code></summary>

Mask -- Must be int64.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Bitmask</strong> <code>int64</code></summary>

Controls bitmask.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExFoundations\Public\Elements\Bitmasks\PCGExBitwiseOperation.h`
