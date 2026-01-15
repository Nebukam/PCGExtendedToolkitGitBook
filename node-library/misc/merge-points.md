---
description: 'In editor :: PCGEx | Merge Points'
icon: circle
---

# Merge Points

An alternative to the native Merge Points node with additional controls.

**How It Works**

> AI-Generated, needs proofreading

* The Merge Points node combines multiple point sets into one by utilizing settings from the Collection Sorting section to organize and prioritize points during merging.
* Using Carry Over Settings, the node applies meta filters to determine which attributes are carried over from individual points to the merged set.
* If Tag To Attributes is enabled, the node converts specified tags into corresponding attributes for each point; simple tags become boolean values while others can be converted into int32, double, FString, or FVector types with dimensions 2 through 4.
* The Quiet Tag Overlap Warning setting suppresses warning messages when there are overlapping tags during the conversion process if set to true.

#### Configuration

<details>

<summary><strong>Collection Sorting</strong> <code>PCGExCollectionSortingDetails</code></summary>

Sorting settings.

📦 See: CollectionSorting configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Carry Over Settings</strong> <code>PCGExCarryOverDetails</code></summary>

Meta filter settings.

📦 See: CarryOver configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tag To Attributes</strong> <code>bool</code></summary>

If enabled, will convert tags into attributes.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tags To Attributes</strong> <code>PCGExNameFiltersDetails</code></summary>

Tags that will be converted to attributes. Simple tags will be converted to boolean values, other supported formats are int32, double, FString, and FVector 2-3-4.

📦 See: NameFilters configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Quiet Tag Overlap Warning</strong> <code>bool</code></summary>

Controls quiet tag overlap warning.

</details>

***

Source: `Source\PCGExFoundations\Public\Elements\Utils\PCGExMergePoints.h`
