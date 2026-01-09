---
description: 'In editor :: PCGEx | Merge Points by Tag'
icon: circle
---

# Merge Points by Tag

{% hint style="info" %}
### AI-generated page -- to be reviewed

While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Merge points based on shared tags.

### Overview

This node groups and merges point data based on common tag attributes, allowing you to combine related point clouds into unified outputs. It's useful when you have multiple sets of points that should be treated as a single unit if they share certain identifying characteristics.

For example, you might have several point clouds representing different sections of a building (like walls, windows, and doors), each tagged with their respective categories. Using this node, you can merge all wall points together, all window points together, etc., based on those tags.

{% hint style="info" %}
This node works best when your input data has consistent tag attributes across point sets. If some inputs lack certain tags, the fallback behavior determines how those are handled.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Default Input** (Multiple): Accepts multiple point data inputs that will be processed for merging based on tags.

</details>

<details>

<summary>Outputs</summary>

* **Default Output**: Merged point data grouped by shared tags.
* Additional outputs may be created depending on the merge mode and fallback behavior settings.

</details>

### Properties Overview

Controls how points are matched, merged, and handled when no matching tags exist.

***

#### Merge Settings

Determines how overlapping or matching tags are processed.

**Merge Mode**

_Controls the method used to merge point data based on shared tags._

* **Strict**: Merges per-tag, with higher priority tags removing lower priority overlaps.
* **Overlap**: Merges per-tag, allowing overlapping data to be fully merged together.
* **Flatten**: Treats all tags as a single identifier and matches based on that flattened value.

**Sorting Direction**

_Controls how tag priorities are sorted when using Strict or Overlap modes._

* When set to **Ascending**, lower priority tags are processed first.
* When set to **Descending**, higher priority tags are processed first.

**Fallback Behavior**

_Determines what happens to point data that doesn't match any defined tags._

* **Omit**: Points without matching tags are excluded from output.
* **Merge**: All unmatched points are merged into a single output blob.
* **Forward**: Unmatched points are passed through without merging, maintaining their original structure.

***

#### Tag Filters

Define which tags to include or exclude from processing.

**Tag Filters**

_Specifies which tag attributes to process._

* Use this to limit the merge operation to specific tags only.
* Supports both inclusion and exclusion modes for flexible filtering.

***

#### Priority Settings

Control how tags are prioritized during merging.

**Resolution Priorities**

_List of tags ordered by priority._

* Tags listed first take precedence when resolving overlaps in Strict or Overlap modes.
* Example: If you have tags "A", "B", and "C", and tag "A" is listed first, it will override any lower-priority tags in overlapping regions.

***

#### Carry Over Settings

Configure how attributes from input points are carried over to merged outputs.

**Carry Over Settings**

_Determines which attributes are preserved during merging._

* Controls whether point attributes like color, scale, or custom data are copied into the merged output.
* Helps maintain important metadata when combining multiple point sets.
