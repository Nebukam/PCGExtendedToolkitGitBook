---
description: 'In editor :: PCGEx | Data Filter : Entry Count'
icon: circle-dashed
---

# Entry Count

Does a numeric comparison against the number of entries

📌 **Subnode** — Connects to **Filters** pins.

**How It Works**

> AI-Generated, needs proofreading

* The node compares the number of entries in the input data against a specified operand B using a selected comparison operator (e.g., equal to, greater than).
* Operand B can be set directly as a value or derived from an attribute and is internally converted to `int32` for the comparison.
* A tolerance value can be provided to allow for near-equality comparisons, affecting how closely the entry count must match operand B to satisfy the comparison.
* The node outputs whether the number of entries meets the specified condition based on the comparison settings.

#### Configuration

<details>

<summary><strong>Comparison</strong> <code>PCGExComparison</code></summary>

Comparison

⚡ PCG Overridable

</details>

<details>

<summary><strong>Compare Against</strong> <code>PCGExInputValueType</code></summary>

Type of OperandB

⚡ PCG Overridable

</details>

<details>

<summary><strong>Operand B (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Operand B for testing -- Will be translated to `int32` under the hood.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Operand B</strong> <code>int32</code></summary>

Operand B to test Entries count against

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tolerance</strong> <code>double</code></summary>

Near-equality tolerance

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExEntryCountFilterConfig</code></summary>

Filter Config.

📦 See: EntryCountFilter configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Comparison</strong> <code>PCGExComparison</code></summary>

Comparison

⚡ PCG Overridable

</details>

<details>

<summary><strong>Compare Against</strong> <code>PCGExInputValueType</code></summary>

Type of OperandB

⚡ PCG Overridable

</details>

<details>

<summary><strong>Operand B (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Operand B for testing -- Will be translated to `int32` under the hood.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Operand B</strong> <code>int32</code></summary>

Operand B to test Entries count against

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tolerance</strong> <code>double</code></summary>

Near-equality tolerance

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExFilters\Public\Filters\Collections\PCGExEntryCountFilter.h`
