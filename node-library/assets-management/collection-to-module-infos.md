---
description: 'In editor :: PCGEx | Collection to Module Infos'
icon: circle
---

# Collection to Module Infos

Converts an asset collection to a grammar-friendly attribute set that can be used as module infos.

**How It Works**

> AI-Generated, needs proofreading

* Reads an asset collection specified in the "Asset Collection" setting to extract module information.
* Optionally allows duplicate entries based on the state of the "Allow Duplicates" setting; if enabled, duplicates are included.
* Skips entries with a symbol value of "None" if the "Skip Empty Symbol" option is enabled.
* Removes invalid or empty entries from the output when the "Omit Invalid And Empty" setting is activated.
* Writes the "Symbol" value to an attribute named according to the "Symbol" setting, making the data structure compatible with grammar-based processes.

#### Configuration

<details>

<summary><strong>Asset Collection</strong> <code>PCGExAssetCollection</code></summary>

The mesh collection to read module infos from

⚡ PCG Overridable

</details>

<details>

<summary><strong>Allow Duplicates</strong> <code>bool</code></summary>

If enabled, allows duplicate entries (duplicate is same symbol)

⚡ PCG Overridable

</details>

<details>

<summary><strong>Skip Empty Symbol</strong> <code>bool</code></summary>

If enabled, skip entries which symbol is "None"

⚡ PCG Overridable

</details>

<details>

<summary><strong>Omit Invalid And Empty</strong> <code>bool</code></summary>

If enabled, invalid or empty entries are removed from the output

⚡ PCG Overridable

</details>

**Outputs**

<details>

<summary><strong>Symbol</strong> <code>Name</code></summary>

Name of the attribute the "Symbol" value will be written to

⚡ PCG Overridable

</details>

<details>

<summary><strong>Size</strong> <code>Name</code></summary>

Name of the attribute the "Size" value will be written to

⚡ PCG Overridable

</details>

<details>

<summary><strong>Scalable</strong> <code>Name</code></summary>

Name of the attribute the "Scalable" value will be written to

⚡ PCG Overridable

</details>

<details>

<summary><strong>DebugColor</strong> <code>Name</code></summary>

Name of the attribute the "DebugColor" value will be written to

⚡ PCG Overridable

</details>

<details>

<summary><strong>Entry</strong> <code>Name</code></summary>

Controls entry.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Category</strong> <code>Name</code></summary>

Name of the attribute the entry' Category value will be written to

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExCollections\Public\Elements\PCGExCollectionToModuleInfos.h`
