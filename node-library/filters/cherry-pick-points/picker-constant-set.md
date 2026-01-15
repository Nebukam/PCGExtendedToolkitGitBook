---
description: 'In editor :: PCGEx | Picker : Indices from Set'
icon: circle-dashed
---

# Picker : Indices from Set

A Picker that accept lists of values, read from one of more attribute. Note that if no attribute is set in the details, it will use the first available one.

**How It Works**

> AI-Generated, needs proofreading

* The Picker : Indices from Set node reads indices from specified attributes in a list format.
* If specific attributes are not defined, the node defaults to using the first available attribute for index reading.
* Negative values within the attribute settings allow selection of indices starting from the end of the list.

#### Configuration

<details>

<summary><strong>Attributes</strong> <code>Array of FPCGAttributePropertyInputSelector</code></summary>

List of attributes to read individual indices from. Use negative values to select from the end.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExPickerAttributeSetConfig</code></summary>

Picker properties

📦 See: PickerAttributeSet configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Attributes</strong> <code>Array of FPCGAttributePropertyInputSelector</code></summary>

List of attributes to read individual indices from. Use negative values to select from the end.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExPickers\Public\Pickers\PCGExPickerAttributeSet.h`
