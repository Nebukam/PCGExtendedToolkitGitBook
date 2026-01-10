---
description: 'In editor :: PCGEx | Collection to Module Infos'
icon: circle
---

# Collection to Module Infos

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Converts an asset collection into a structured set of module information attributes for use in grammar-based procedural generation.

#### How It Works

This node processes each entry in an asset collection and transforms it into a structured format with key attributes. It starts by going through each item in the collection, applying filters based on settings like skipping empty symbols or removing invalid entries.

For each valid item, it extracts important information such as symbol name, size, scalability flag, and debug color. These values are then written to corresponding output attributes. If duplicates are allowed, multiple items with the same symbol can be included; otherwise, only the first occurrence of each symbol is kept.

The node also caches size information for performance optimization during processing. It outputs one point per valid collection entry, with each point containing the module info attributes needed by grammar-based systems.

#### Configuration

<details>

<summary><strong>Asset Collection</strong><br><em>The mesh collection to read module infos from.</em></summary>

Specifies which asset collection to process. This is typically a mesh or asset collection that has been defined in your project.

</details>

<details>

<summary><strong>Allow Duplicates</strong><br><em>If enabled, allows duplicate entries (duplicate is same symbol).</em></summary>

When enabled, multiple entries with the same symbol will be included in the output. When disabled, only the first occurrence of each symbol is kept.

</details>

<details>

<summary><strong>Skip Empty Symbol</strong><br><em>If enabled, skip entries which symbol is "None".</em></summary>

When enabled, entries where the symbol is set to "None" are excluded from processing and output.

</details>

<details>

<summary><strong>Omit Invalid And Empty</strong><br><em>If enabled, invalid or empty entries are removed from the output.</em></summary>

When enabled, entries that are considered invalid or empty (e.g., missing assets or null data) are filtered out before processing.

</details>

<details>

<summary><strong>Symbol Attribute Name</strong><br><em>Name of the attribute the "Symbol" value will be written to.</em></summary>

Defines the name of the output attribute that stores the symbol (unique identifier) for each module.

</details>

<details>

<summary><strong>Size Attribute Name</strong><br><em>Name of the attribute the "Size" value will be written to.</em></summary>

Defines the name of the output attribute that stores the size information (FVector) for each module.

</details>

<details>

<summary><strong>Scalable Attribute Name</strong><br><em>Name of the attribute the "Scalable" value will be written to.</em></summary>

Defines the name of the output attribute that stores a boolean flag indicating whether the module supports scaling.

</details>

<details>

<summary><strong>Debug Color Attribute Name</strong><br><em>Name of the attribute the "DebugColor" value will be written to.</em></summary>

Defines the name of the output attribute that stores a debug color (FLinearColor) for visual debugging purposes.

</details>

<details>

<summary><strong>Entry Attribute Name</strong><br><em>Name of the attribute the entry' Category value will be written to.</em></summary>

Defines the name of the output attribute that stores an index or identifier for the source collection entry.

</details>

<details>

<summary><strong>Category Attribute Name</strong><br><em>Name of the attribute the entry' Category value will be written to.</em></summary>

Defines the name of the output attribute that stores the category label assigned to each collection entry.

</details>

#### Usage Example

1. Create a mesh collection containing various assets (e.g., trees, rocks, buildings).
2. Set up this node with the collection as input.
3. Configure attributes like Symbol and Size to match your grammar requirements.
4. Connect this node's output to a Grammar Staging node that uses module info data.
5. Use the resulting points in procedural generation workflows where assets need to be selected based on symbol or category.

#### Notes

* This node is designed to work with asset collections that are already defined and populated in your project.
* The output points can be used directly by grammar-based systems to select and place assets procedurally.
* Performance improves when duplicates are not allowed, as it reduces the number of entries processed.
* Debug color attribute is useful for visualizing module placements during development.
