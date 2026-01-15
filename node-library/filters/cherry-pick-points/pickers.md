---
icon: comment-dots
---

# Pickers

Creates a single Picker definition.

**How It Works**

> AI-Generated, needs proofreading

* The Picker Definition node generates a configuration for selecting items from a collection based on provided indices or relative values.
* When "Treat As Normalized" is enabled, the node interprets input values as relative positions within the range of available options; otherwise, it treats them as discrete indices pointing directly to specific elements in the collection.
* The Truncate Mode setting dictates how the picker handles relative pick values that fall outside the expected range, adjusting or limiting these values according to the specified mode.
* Safety settings determine the behavior when an index is out-of-bounds, ensuring that the picker either defaults to a safe value or adjusts the index within valid bounds.

#### Configuration

<details>

<summary><strong>Treat As Normalized</strong> <code>bool</code></summary>

Whether to treat values as discrete indices or relative ones

⚡ PCG Overridable

</details>

<details>

<summary><strong>Truncate Mode</strong> <code>PCGExTruncateMode</code></summary>

How to truncate relative picks

⚡ PCG Overridable

</details>

<details>

<summary><strong>Safety</strong> <code>PCGExIndexSafety</code></summary>

How to sanitize index pick when they're out-of-bounds

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExPickers\Public\Core\PCGExPickerFactoryProvider.h`
