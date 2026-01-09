---
icon: circle
---

# Self Pruning

{% hint style="info" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> A slower, more precise self pruning node.

### Overview

This node processes points to either remove overlapping ones or count how many overlaps each point has. It's particularly useful when you want to ensure that no two points occupy the same space or when you need to understand spatial density in your procedural content. Unlike faster alternatives, this node performs precise spatial tests to determine overlap, making it more accurate but also more computationally expensive.

{% hint style="info" %}
This node is designed for scenarios where precision matters over performance. It's ideal for creating clean, non-overlapping point distributions or analyzing spatial relationships.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input** (Points): The set of points to process.
* **Filters** (Optional, Point Filters): Filters that determine which points can be considered as overlapping.

</details>

<details>

<summary>Outputs</summary>

* **Main Output** (Points): Points after pruning or with overlap counts written to an attribute.

</details>

### Properties Overview

Controls how the node processes and prunes your point data.

***

#### Mode

Determines whether the node removes overlapping points or writes overlap counts.

**Prune**

_When enabled, the node removes overlapping points from the output._

* Removes points that are within a certain distance of each other.
* Useful for creating clean, non-overlapping distributions.

**Write Result**

_When enabled, the node writes the number of overlaps to an attribute on each point._

* Counts how many other points are within the specified proximity.
* Useful for visualizing density or using overlap counts in downstream logic.

***

#### Sorting

Controls how points are sorted before processing to improve performance or randomness.

**Sort Direction**

_Controls whether points are sorted in ascending or descending order._

* **Ascending**: Points with lower values are processed first.
* **Descending**: Points with higher values are processed first.

**Randomize**

_When enabled, the node sorts points based on a random per-point value to avoid deterministic pruning._

* Helps prevent artifacts from processing points in a fixed order.
* Only applies when using **Prune** mode.

**Random Range**

_Specifies how much randomness is applied to sorting._

* A value of 0 means no randomness.
* A value of 1 means full randomness.
* Only visible when **Randomize** is enabled.

***

#### Output

Controls the attribute and units used when writing overlap counts.

**Output to**

_Name of the attribute where overlap counts are written._

* Only visible in **Write Result** mode.
* Default is "NumOverlaps".

**Units**

_Determines how overlap counts are interpreted._

* **Discrete**: Writes raw overlap count values.
* **Relative**: Normalizes overlap counts between 0 and 1, based on the highest number of overlaps found.

**OneMinus**

_When enabled, subtracts the normalized overlap count from 1._

* Useful for creating inverse density maps (high overlap = low value).
* Only visible when **Units** is set to **Relative**.

***

#### Expansion

Controls how bounds are expanded before spatial tests to include neighboring points.

**Primary Mode**

_Specifies whether and how to expand the bounds of the main point being evaluated._

* **None**: No expansion.
* **Before Transform**: Expands bounds before applying world transform.
* **After Transform**: Expands bounds after applying world transform.

**Primary Expansion Input**

_Determines whether the expansion value is constant or read from an attribute._

* **Constant**: Use a fixed numeric value.
* **Attribute**: Read expansion value from an input attribute.

**Primary Expansion (Attr)**

_Name of the attribute to read expansion values from._

* Only visible when **Primary Expansion Input** is set to **Attribute**.

**Primary Expansion**

_Fixed value used for expansion if **Primary Expansion Input** is set to **Constant**._

* Only visible when **Primary Expansion Input** is set to **Constant**.

**Secondary Mode**

_Specifies whether and how to expand the bounds of neighbor points during overlap tests._

* **None**: No expansion.
* **Before Transform**: Expands bounds before applying world transform.
* **After Transform**: Expands bounds after applying world transform.

**Secondary Expansion Input**

_Determines whether the expansion value is constant or read from an attribute._

* **Constant**: Use a fixed numeric value.
* **Attribute**: Read expansion value from an input attribute.

**Secondary Expansion (Attr)**

_Name of the attribute to read expansion values from._

* Only visible when **Secondary Expansion Input** is set to **Attribute**.

**Secondary Expansion**

_Fixed value used for expansion if **Secondary Expansion Input** is set to **Constant**._

* Only visible when **Secondary Expansion Input** is set to **Constant**.

***

#### Precision

Controls whether the node performs precise spatial tests.

**Precise Test**

_When enabled, performs very accurate overlap checks using OBBs (Oriented Bounding Boxes)._

* Ensures that only truly overlapping points are removed or counted.
* Significantly slower than approximate methods.
* Only supported in **Prune** mode.
