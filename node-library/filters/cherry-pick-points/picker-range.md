---
description: 'In editor :: PCGEx | Picker : Range'
icon: circle-dashed
---

# Picker : Range

A Picker that selects a range of values.

**How It Works**

> AI-Generated, needs proofreading

* The Picker : Range node selects a range of values based on specified start and end indices.
* It uses discrete and relative start/end index settings to determine the range; negative values in these settings indicate selection from the end of the value list.
* Configuration properties for the picker can be adjusted through the Config setting, which affects how the range is selected.

#### Configuration

<details>

<summary><strong>Discrete Start Index</strong> <code>int32</code></summary>

Use negative values to select from the end.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Relative Start Index</strong> <code>double</code></summary>

Use negative values to select from the end.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Discrete End Index</strong> <code>int32</code></summary>

Use negative values to select from the end.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Relative End Index</strong> <code>double</code></summary>

Use negative values to select from the end.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExPickerConstantRangeConfig</code></summary>

Picker properties

📦 See: PickerConstantRange configuration

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExPickers\Public\Pickers\PCGExPickerConstantRange.h`
