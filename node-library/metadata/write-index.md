---
description: 'In editor :: PCGEx | Write Index'
icon: circle
---

# Write Index

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Writes the current point index and related metadata to attributes.

### Overview

This node assigns sequential indices to points, which is useful for tracking point order, creating unique identifiers, or enabling data-driven behaviors based on position in a dataset. It supports writing both individual point indices and collection-level metadata like total entry count and collection index.

{% hint style="info" %}
The point index starts at 0 and increments by 1 for each point in the input data.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Default Input** (Required): Points to write indices to. Can accept multiple inputs.

</details>

<details>

<summary>Outputs</summary>

* **Default Output**: Modified points with new attributes added based on settings.

</details>

### Properties Overview

Controls how and what index data is written to the point attributes.

***

#### Point Index Settings

Writes individual point indices to an attribute.

**Write Point Index**

_When enabled, writes the current point index to an attribute._

* Adds a numeric attribute containing the sequential index of each point.
* The index starts at 0 and increases by 1 for each subsequent point.

**Values**:

* **Disabled**: No point index is written.
* **Enabled**: Point index is written.

**Attribute Name**

_Name of the attribute to write the point index to._

* The name must be unique within the point data.
* Default value is "CurrentIndex".

**One Minus**

_When enabled, writes (index - 1) instead of the raw index._

* Useful for creating zero-based indices that start at -1.
* For example, if a point has an index of 5, it will write 4.

**Normalized**

_When enabled, writes a normalized value between 0 and 1._

* The normalized value is calculated as: `index / (total_points - 1)`.
* This ensures that the first point is 0 and the last point is 1.
* Useful for interpolating or mapping values across the dataset.

***

#### Collection Index Settings

Writes metadata about the collection to attributes.

**Write Collection Index**

_When enabled, writes the index of the collection this point belongs to._

* Useful when processing multiple data inputs or collections.
* Each collection gets a unique index starting from 0.

**Attribute Name**

_Name of the attribute to write the collection index to._

* Default value is "@Data.CollectionIndex".

**Type**

_Data type for the collection index._

* **Double**: Floating-point number.
* **Float**: Single-precision floating-point number.
* **Int32**: 32-bit integer.
* **Int64**: 64-bit integer.

**Output to Tags**

_When enabled, writes the collection index as a tag instead of an attribute._

* Tags are used for filtering or grouping in downstream nodes.
* Useful when you want to group points by their collection without storing numeric data.

***

#### Collection Num Entries Settings

Writes the total number of entries in each collection.

**Write Num Entries**

_When enabled, writes the total number of points in the collection._

* Useful for calculating ratios or scaling values based on collection size.
* Each point receives the same value: the total count of points in its collection.

**Attribute Name**

_Name of the attribute to write the number of entries to._

* Default value is "@Data.NumEntries".

**Type**

_Data type for the number of entries._

* **Double**: Floating-point number.
* **Float**: Single-precision floating-point number.
* **Int32**: 32-bit integer.
* **Int64**: 64-bit integer.

**Normalized**

_When enabled, writes a normalized value between 0 and 1._

* The normalized value is calculated as: `num_entries / max_num_entries`.
* Useful for mapping collection sizes to a consistent range.

**Output to Tags**

_When enabled, writes the number of entries as a tag instead of an attribute._

* Tags are used for filtering or grouping in downstream nodes.
* Useful when you want to group points by collection size without storing numeric data.

***

#### General Settings

Controls how attributes are created and handled.

**Allow Interpolation**

_Whether the created attributes allow interpolation._

* When enabled, attributes can be interpolated between points.
* This is useful for smooth transitions or blending in visual effects.

### Notes

* The node supports both single and multi-input scenarios. In multi-input cases, each collection will get a unique index.
* Use normalized values when you need consistent ranges across different-sized datasets.
* Writing to tags instead of attributes can simplify filtering logic in later stages of your graph.
* If you're using this node with other nodes that expect specific attribute names, make sure the attribute names match their expectations.
