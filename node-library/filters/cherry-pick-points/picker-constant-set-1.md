---
description: 'In editor :: PCGEx | Picker : Ranges from Set'
icon: circle-dashed
---

# Picker : Ranges from Set

A Picker that accept lists of ranges in the form of FVector2, read from one of more attribute. Note that if no attribute is set in the details, it will use the first available one.

**How It Works**

> AI-Generated, needs proofreading

* The Picker node reads lists of ranges specified as FVector2 from one or more attributes provided in its settings.
* If no specific attribute is designated for reading ranges, the node defaults to using the first available attribute.
* Negative values within the FVector2 are interpreted to select indices from the end of the list.

#### Configuration

<details>

<summary><strong>Attributes</strong> <code>Array of FPCGAttributePropertyInputSelector</code></summary>

List of attributes to read ranges of indices from FVector2. Use negative values to select from the end.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExPickerAttributeSetRangesConfig</code></summary>

Picker properties

📦 See: PickerAttributeSetRanges configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Attributes</strong> <code>Array of FPCGAttributePropertyInputSelector</code></summary>

List of attributes to read ranges of indices from FVector2. Use negative values to select from the end.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExPickers\Public\Pickers\PCGExPickerAttributeSetRanges.h`
