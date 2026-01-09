---
description: 'In editor :: PCGEx | Discard Same'
icon: circle
---

# Discard Same

{% hint style="warning" %}
## AI-generated page - To be reviewed. 
While not 100% accurante, it should properly capture what it does. It stills needs to be reviewed and proofread by a human.
{% endhint %}

> Discard entire datasets based on a selection of parameters.

### Overview

This node filters out entire collections of points from your PCG graph by comparing them against each other using various criteria. It's useful when you want to remove duplicate or similar datasets, such as avoiding identical terrain patches or eliminating redundant procedural structures.

The node compares collections using multiple methods:

* Bounds (size and position)
* Point count
* Positional data
* Attribute values

You can configure how many comparisons are made and which comparison modes are used. The node supports both "FIFO" and "LIFO" discard strategies, allowing you to control whether the first or last collection in a group gets kept.

{% hint style="info" %}
This node works on collections of points, not individual points. It groups inputs into collections and compares those collections against each other.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Default Input** (Multiple): Accepts multiple point datasets to be compared and filtered.

</details>

<details>

<summary>Outputs</summary>

* **Default Output**: Contains the filtered point datasets, with duplicates removed based on your settings.

</details>

### Properties Overview

Controls how collections are compared and discarded.

***

#### General Settings

What this group controls.

**Mode**

_Controls which collection in a group of duplicates gets kept._

* When set to **FIFO**, the first collection in the group is kept, others are discarded.
* When set to **LIFO**, the last collection in the group is kept, others are discarded.
* When set to **All**, all collections in the group are discarded.

**Values**:

* **FIFO**: First in, first out
* **LIFO**: Last in, first out
* **All**: Discard all collections that have found duplicates (does not keep any)

**Test Mode**

_Determines how multiple comparison criteria are combined._

* When set to **AND**, a collection must pass ALL comparison tests to be discarded.
* When set to **OR**, a collection only needs to pass ONE comparison test to be discarded.

**Values**:

* **AND**: All connected filters must pass.
* **OR**: Only a single connected filter must pass.

**Test Bounds**

_When enabled, compares the bounding boxes of collections._

* If enabled, collections with similar bounds (within tolerance) are considered duplicates.
* Use this to remove identical or nearly identical spatial regions.

**Test Bounds Tolerance**

_Tolerance for comparing bounds._

* Sets how close two collections' bounds must be to be considered duplicates.
* A tolerance of 0.1 means collections must have bounds within 0.1 units to be considered the same.

**Test Point Count**

_When enabled, compares the number of points in each collection._

* If enabled, collections with similar point counts (within tolerance) are considered duplicates.
* Useful for removing collections that generate the same amount of geometry.

**Test Point Count Tolerance**

_Tolerance for comparing point counts._

* Sets how close two collections' point counts must be to be considered duplicates.
* A tolerance of 0 means collections must have exactly the same number of points.

**Test Positions**

_When enabled, compares the actual positions of points in each collection._

* If enabled, collections with similar spatial distribution are considered duplicates.
* Note that this compares space occupation, not point count.

**Test Position Tolerance**

_Tolerance for comparing positions._

* Sets how close two collections' positions must be to be considered duplicates.
* A tolerance of 0.1 means points in collections must be within 0.1 units to be considered the same.

***

#### Attribute Hash Settings

What this group controls.

**Test Attributes Hash**

_Controls whether to compare collections using attribute values._

* When set to **None**, no attribute comparison is performed.
* When set to **Single**, a single attribute is used for comparison.
* When set to **List**, multiple attributes are used for comparison.

**Values**:

* **None**: Do not use attributes to check sameness
* **Single**: Use a single, overridable attribute
* **List**: Use a list of attributes. Arrays are not overridable

**Attribute Hash Configs**

_List of attributes to use when comparing collections._

* Defines which attributes are used for hashing and comparison.
* Only available when "Test Attributes Hash" is set to **List**.

**Include Single Attribute**

_When enabled, also includes a single attribute in the hash comparison._

* If enabled along with "Test Attributes Hash" set to **List**, adds one additional attribute to the comparison.
* Only available when "Test Attributes Hash" is set to **List**.

**Attribute Hash Config**

_Configuration for the single attribute used in hashing._

* Defines which single attribute is used for comparison.
* Only available when "Test Attributes Hash" is set to **Single** or when "Include Single Attribute" is enabled and "Test Attributes Hash" is set to **List**.
