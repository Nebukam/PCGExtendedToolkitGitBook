---
description: 'In editor :: PCGEx | Filter : Contains (Hash)'
icon: circle-dashed
---

# Contains (Hash)

Creates a filter definition that checks whether a given value hash is contained within a one or more set of values. Important note : this is a hash comparison, so it's highly type sensitive! Float 0 != Double 0

📌 **Subnode** — Connects to **Filters** pins.

**How It Works**

> AI-Generated, needs proofreading

* The node creates a filter that evaluates whether the hash of a given value exists within specified sets of values.
* It operates in a type-sensitive manner by default; for example, the float 0 and double 0 have different hashes and are treated as distinct.
* Depending on the "Mode" setting, it processes input sets either individually or collectively to apply the filter criteria.
* The "Inclusion" setting determines the specific condition under which the hash of Operand A is tested against the set values for containment.
* If "Type Insensitive" is enabled, the node adjusts its comparison logic to reduce sensitivity towards type differences when comparing hashes.

#### Configuration

<details>

<summary><strong>Mode</strong> <code>PCGExValueHashMode</code></summary>

How to process input sets

**Values:**

* **Merged**: All input set will be merged into a single set.
* **Individual**: Input set are kept separated, and tested individually.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Inclusion</strong> <code>PCGExValueHashSetInclusionMode</code></summary>

How to test against input sets

**Values:**

* **Any**: Value must be present in at least one set for the filter to pass.
* **All**: Value must be present in all input set for the filter to pass.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Operand A</strong> <code>Name</code></summary>

Operand A for testing.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Set Attribute Name</strong> <code>Name</code></summary>

Name of the attribute to read on sets.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Type Insensitive</strong> <code>bool</code></summary>

If enabled, the hash comparison will be less sensitive.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Invert</strong> <code>bool</code></summary>

Whether to invert the result of the filter

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExValueHashFilterConfig</code></summary>

Filter Config.

📦 See: ValueHashFilter configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Mode</strong> <code>PCGExValueHashMode</code></summary>

How to process input sets

**Values:**

* **Merged**: All input set will be merged into a single set.
* **Individual**: Input set are kept separated, and tested individually.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Inclusion</strong> <code>PCGExValueHashSetInclusionMode</code></summary>

How to test against input sets

**Values:**

* **Any**: Value must be present in at least one set for the filter to pass.
* **All**: Value must be present in all input set for the filter to pass.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Operand A</strong> <code>Name</code></summary>

Operand A for testing.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Set Attribute Name</strong> <code>Name</code></summary>

Name of the attribute to read on sets.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Type Insensitive</strong> <code>bool</code></summary>

If enabled, the hash comparison will be less sensitive.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Invert</strong> <code>bool</code></summary>

Whether to invert the result of the filter

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExFilters\Public\Filters\Points\PCGExValueHashFilter.h`
