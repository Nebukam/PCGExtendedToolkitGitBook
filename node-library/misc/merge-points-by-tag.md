---
description: 'In editor :: PCGEx | Merge Points by Tag'
hidden: true
icon: circle
---

# Merge Points by Tag

Merge points based on shared tags.

**How It Works**

> AI-Generated, needs proofreading

* The Merge Points by Tag node processes points that share common tags as defined in the Tag Filters setting.
* Depending on the Resolution Priorities setting, the node determines which point's data takes precedence when merging points with overlapping tags.
* The Sort Direction setting influences how merged points are ordered after processing.
* If a scenario arises where no tag has authority over another and there is no clear way to merge based on the provided settings, the Fallback Behavior dictates how the node handles this situation.

#### Configuration

<details>

<summary><strong>Mode</strong> <code>PCGExMergeByTagOverlapResolutionMode</code></summary>

TBD

**Values:**

* **Strict**: Merge happens per-tag, and higher priority tags are removed from lower priority overlaps.
* **Overlap**: Merge happens per-tag, overlapping data is merged entirely.
* **Flatten**: Flatten all tags into a unique identifier and match-merge based on that identifier.

</details>

<details>

<summary><strong>Sort Direction</strong> <code>PCGExSortDirection</code></summary>

Sorting direction

</details>

<details>

<summary><strong>Fallback Behavior</strong> <code>PCGExMergeByTagFallbackBehavior</code></summary>

Fallback behavior

**Values:**

* **Omit**: Do not output data that didn't pass filters
* **Merge**: Merge all data that didn't pass filter in a single blob
* **Forward**: Forward data that didn't pass filter without merging them

</details>

<details>

<summary><strong>Tag Filters</strong> <code>PCGExNameFiltersDetails</code></summary>

Tags to be processed or ignored.

📦 See: NameFilters configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Resolution Priorities</strong> <code>Array of FString</code></summary>

Which tag has merging authority over another.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Carry Over Settings</strong> <code>PCGExCarryOverDetails</code></summary>

Meta filter settings.

📦 See: CarryOver configuration

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExFoundations\Public\Elements\Utils\PCGExMergePointsByTag.h`
