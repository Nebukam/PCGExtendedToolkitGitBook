---
description: 'In editor :: PCGEx | Filter : Bitmask'
icon: circle-dashed
---

# Bitmask

Filter using bitflag comparison.

📌 **Subnode** — Connects to **Filters** pins.

**How It Works**

> AI-Generated, needs proofreading

* The node compares an attribute value from the "Flags Attribute" setting (Operand A) against a bitmask provided in the "Bitmask (Attr)" setting (Operand B).
* Based on the selected "Comparison" type, the node evaluates whether Operand A meets the specified condition relative to Operand B.
* The output consists of elements where the comparison between the attribute value and the bitmask satisfies the chosen flag comparison criteria.

#### Configuration

<details>

<summary><strong>Flags Attribute</strong> <code>Name</code></summary>

Source value. (Operand A)

⚡ PCG Overridable

</details>

<details>

<summary><strong>Comparison</strong> <code>PCGExBitflagComparison</code></summary>

Type of flag comparison

</details>

<details>

<summary><strong>Mask Input</strong> <code>PCGExInputValueType</code></summary>

Type of Mask

</details>

<details>

<summary><strong>Bitmask (Attr)</strong> <code>Name</code></summary>

Mask for testing -- Must be int64. (Operand B)

⚡ PCG Overridable

</details>

<details>

<summary><strong>Bitmask</strong> <code>int64</code></summary>

(Operand B)

⚡ PCG Overridable

</details>

<details>

<summary><strong>Compositions</strong> <code>Array of FPCGExBitmaskRef</code></summary>

External compositions applied to Operand B (whether it's a constant or not)

</details>

<details>

<summary><strong>Invert Result</strong> <code>bool</code></summary>

TBD

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExBitmaskFilterConfig</code></summary>

Filter Config.

📦 See: BitmaskFilter configuration

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExFilters\Public\Filters\Points\PCGExBitmaskFilter.h`
