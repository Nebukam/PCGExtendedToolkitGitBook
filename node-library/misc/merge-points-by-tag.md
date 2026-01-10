---
description: 'In editor :: PCGEx | Merge Points by Tag'
icon: circle
---

# Merge Points by Tag

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Merge points that share common tags into unified outputs.

#### How It Works

This node organizes point data based on shared tags and then combines points that belong to the same tag group. It supports different merging strategies depending on how you want overlapping or duplicate data handled.

First, it sorts input points into groups based on their assigned tags. Each unique tag becomes a category, and all points with that tag are placed together.

Next, it applies the selected merge mode:

* In **Strict** mode, higher-priority tags remove overlapping data from lower-priority ones.
* With **Overlap** mode, all data within the same tag group is merged together.
* Using **Flatten** mode combines all tags into one identifier and merges points based on that.

Points that don't match any filters are managed according to the fallback behavior:

* **Omit**: Excludes unmatched points from output.
* **Merge**: Groups unmatched points into a single combined output.
* **Forward**: Passes unmatched points through without merging them.

Finally, the merged results are sent out via the output pins in the specified order.

#### Configuration

<details>

<summary><strong>Mode</strong><br><em>How overlapping tags are resolved during merging.</em></summary>

Controls how to handle data when multiple tags overlap or conflict.

**Values**:

* **Strict**: Merge happens per-tag, and higher priority tags remove overlapping lower-priority data.
* **Overlap**: Merge happens per-tag, overlapping data is merged entirely.
* **Flatten**: Flatten all tags into a unique identifier and match-merge based on that identifier.

</details>

<details>

<summary><strong>SortDirection</strong><br><em>Sorting direction</em></summary>

Determines the order in which points are sorted within each tag bucket before merging. Only used when Mode is not "Flatten".

**Values**:

* **Ascending**: Sorts from lowest to highest.
* **Descending**: Sorts from highest to lowest.

</details>

<details>

<summary><strong>FallbackBehavior</strong><br><em>How unmatched points are handled in Flatten mode.</em></summary>

Defines what happens to points that don't match any tag filters when using the "Flatten" merge mode.

**Values**:

* **Omit**: Do not output data that didn't pass filters.
* **Merge**: Merge all data that didn't pass filter in a single blob.
* **Forward**: Forward data that didn't pass filter without merging them.

</details>

<details>

<summary><strong>TagFilters</strong><br><em>Tags to be processed or ignored.</em></summary>

Defines which tags are included, excluded, or all considered for merging. Tags not matching the filter are skipped.

</details>

<details>

<summary><strong>ResolutionPriorities</strong><br><em>Which tag has merging authority over another.</em></summary>

Sets the priority order of tags when resolving overlaps in "Strict" mode. Tags listed earlier take precedence over later ones.

</details>

<details>

<summary><strong>CarryOverDetails</strong><br><em>Meta filter settings.</em></summary>

Controls how attributes and metadata are carried over during merging, including filtering rules for which data to include or exclude.

</details>

#### Usage Example

You have a point cloud representing different terrain types (e.g., "Grass", "Water", "Rock") and want to merge all points with the same type into single outputs. Use this node to group points by tag and merge them, ensuring that higher-priority tags (like "Water" over "Grass") are respected when overlaps occur.

#### Notes

* The node works best when point data has consistent tag naming.
* For large datasets, consider using "Flatten" mode for better performance.
* When using "Strict" mode, ensure your priority list is well-defined to avoid unexpected merges.
