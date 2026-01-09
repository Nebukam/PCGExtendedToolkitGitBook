---
description: 'In editor :: PCGEx | Path : Shift'
icon: circle
---

# Shift

{% hint style="warning" %}
## AI-generated page - To be reviewed. 
While not 100% accurante, it should properly capture what it does. It stills needs to be reviewed and proofread by a human.
{% endhint %}

> Shift path points along a path by reordering them.

### Overview

This node allows you to reorder the points of a path by shifting them from their original positions. You can shift points by index, metadata value, or properties, and choose how the shift is applied using discrete values, relative ratios, or filters. It's useful for creating variations in path layouts, implementing cyclic behavior, or preparing paths for specific processing workflows.

{% hint style="info" %}
This node modifies the order of points within each path, but does not change the actual point positions themselves.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input**: Point data containing paths to be shifted
* **Filters (optional)**: Point filters used when `InputMode` is set to "Filter"

</details>

<details>

<summary>Outputs</summary>

* **Main Output**: Modified point data with reordered path points

</details>

### Properties Overview

Controls how the shift operation is performed and what data is affected.

***

#### General Settings

Controls the core behavior of the shift operation.

**Shift Type**

_Controls which data is used to determine the shift amount._

* Determines whether the shift is based on point index, metadata, properties, or a combination
* When set to **Index**, points are shifted by their position in the path
* When set to **Metadata**, the shift amount is determined by a metadata attribute
* When set to **Properties**, the shift amount is determined by a point property
* When set to **Metadata and Properties**, both metadata and properties are used together
* When set to **CherryPick**, you can select specific properties and attributes to shift

**Values**:

* **Index**: Shift points using their index in the path
* **Metadata**: Shift points using a metadata value
* **Properties**: Shift points using a point property
* **Metadata and Properties**: Use both metadata and properties for shifting
* **CherryPick**: Select specific properties and attributes to shift

**Input Mode**

_Controls how the shift amount is interpreted._

* When set to **Discrete**, the shift amount is an absolute index value
* When set to **Relative**, the shift amount is a ratio from 0.0 to 1.0, which is converted to an index
* When set to **Filter**, the first point that passes the provided filters is used as the shift starting point

**Values**:

* **Discrete**: Shift point is selected using a discrete value
* **Relative**: Shift point is selected using a value relative to the input size
* **Filter**: Shift point using the first point that passes the provided filters

**Relative Constant**

_The relative shift amount when `InputMode` is set to "Relative"._

* Value between 0.0 and 1.0, where 0.0 means start at the beginning of the path, and 1.0 means start at the end
* For example, a value of 0.5 shifts the path to start halfway through

**Truncate Mode**

_How to handle decimal values when `InputMode` is set to "Relative"._

* Controls how fractional relative values are converted to integer indices
* **Round**: Rounds to the nearest integer (e.g., 0.7 becomes 1)
* **Floor**: Truncates toward negative infinity (e.g., 0.7 becomes 0)
* **Ceil**: Truncates toward positive infinity (e.g., 0.2 becomes 1)

**Discrete Constant**

_The absolute shift amount when `InputMode` is set to "Discrete"._

* A whole number representing the index from which to start the shifted path
* For example, a value of 3 shifts the path so that point 3 becomes the first point

**Index Safety**

_How to handle out-of-bounds indices._

* Controls behavior when the calculated shift index exceeds the path bounds
* **Ignore**: Out of bounds indices are ignored (0,1,2,-1,-1,-1,...)
* **Tile**: Out of bounds indices wrap around (0,1,2,0,1,2...)
* **Clamp**: Out of bounds indices are clamped to the path boundaries (0,1,2,2,2,2...)
* **Yoyo**: Out of bounds indices mirror and back (0,1,2,1,0,1...)

**Reverse Shift**

_When enabled, reverses the shift direction._

* If enabled, the path is shifted in the reverse direction
* For example, a shift of 2 becomes a shift of -2

**Cherry-Picked Properties**

_Selected point properties to be shifted when `ShiftType` is set to "CherryPick"._

* Allows you to specify which native point properties should be reordered
* Use bitwise flags to select multiple properties

**Cherry-Picked Attributes**

_Selected attributes to be shifted when `ShiftType` is set to "CherryPick"._

* Allows you to specify which custom attributes should be reordered
* Enter attribute names separated by commas or use the array editor to add them individually

#### Warnings and Errors

Controls whether warnings are shown during execution.

**Quiet Double Shift Warning**

_When enabled, suppresses warnings about double shifts._

* If enabled, no warning will appear if a path is shifted twice in sequence
* Useful when you're intentionally chaining shift operations
