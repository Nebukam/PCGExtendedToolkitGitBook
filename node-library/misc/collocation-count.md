---
description: 'In editor :: PCGEx | Collocation Count'
icon: circle
---

# Collocation Count

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Write the number of times a point shares its location with another.

### Overview

This node counts how many other points exist at the exact same location as each input point, which is useful for identifying overlapping or clustered points in procedural content. It's particularly helpful when working with scattered data where you want to know how densely packed points are in certain areas.

{% hint style="info" %}
The node uses an octree-based spatial structure internally for efficient neighbor lookups, so performance scales well even with large datasets.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input** (Default): Points to analyze for collocations

</details>

<details>

<summary>Outputs</summary>

* **Main Output** (Default): Points with additional attributes containing collocation counts

</details>

### Properties Overview

Counts how many other points share the same location as each point.

***

#### Settings

Controls how the collocation count is calculated and written to attributes.

**Collocation Num Attribute Name**

_The name of the attribute that will store the number of points sharing the same location._

* This value is written to each point's metadata
* Default: `NumCollocations`

**Write Linear Occurrences**

_When enabled, also writes a second attribute with linear occurrence counts._

* If enabled, the node calculates how many times a point appears in a sequence or line
* Useful for identifying repeated points in ordered data
* Default: Disabled

**Linear Occurrences Attribute Name**

_The name of the attribute that will store linear occurrence counts._

* Only used when **Write Linear Occurrences** is enabled
* Default: `NumLinearOccurences`

**Tolerance**

_Controls how close two points must be to be considered collocated._

* Points are considered to share a location if their coordinates differ by less than this value
* Increasing tolerance allows for more lenient matching (e.g., rounding errors)
* Default: Based on system tolerance (`DBL_COLLOCATION_TOLERANCE`)

### Notes

* Collocation counting is useful in scenarios like particle systems where you want to know how many particles overlap, or in city generation where you might want to avoid placing too many buildings at the exact same spot.
* When using **Write Linear Occurrences**, consider that it may not be meaningful for all data types and should only be used if your point sequence has a logical order.
* For large datasets, enabling **Bulk Init Data** can improve performance by pre-allocating memory in advance.
