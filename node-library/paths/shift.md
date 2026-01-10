---
description: 'In editor :: PCGEx | Path : Shift'
icon: circle
---

# Shift

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Reorders points along a path by shifting the starting point based on an index, metadata value, or custom attribute.

#### How It Works

The Path : Shift node changes the order of points in a path by selecting a new starting point. It determines which point should become first using one of several methods: a fixed index number, a value from metadata, a property like position or rotation, or a filter that selects the first matching point.

Once the new start point is chosen, all points in the path are reordered so that this point becomes the first one. If you enable the reverse option, the node also flips the entire path order after shifting — for example, changing A → B → C to A → C → B.

The node supports different ways of calculating which point to shift to:

* **Discrete**: Uses a fixed number.
* **Relative**: Uses a decimal between 0 and 1 to find a proportional position along the path.
* **Filter**: Finds the first point that meets a specific condition to use as the new start.

It also includes safety options for when the calculated index goes beyond the path length, such as wrapping around, clamping to the maximum valid index, or bouncing back and forth.

#### Configuration

<details>

<summary><strong>Shift Type</strong><br><em>Determines how the shift index is calculated.</em></summary>

Controls which data source is used to determine the shift point.

**Values**:

* **Index**: Use a fixed integer index.
* **Metadata**: Use metadata values from the path points.
* **Properties**: Use native properties of the points (position, rotation, scale).
* **Metadata and Properties**: Combine both metadata and properties.
* **CherryPick**: Select specific point properties or attributes to shift.

</details>

<details>

<summary><strong>Input Mode</strong><br><em>How the shift index is determined.</em></summary>

Controls whether the shift is based on a fixed value, relative position, or filtered selection.

**Values**:

* **Discrete**: Use a fixed integer value.
* **Relative**: Use a decimal between 0 and 1 to determine a proportional point along the path.
* **Filter**: Find the first point that passes a filter condition.

</details>

<details>

<summary><strong>Relative Constant</strong><br><em>Used when Input Mode is Relative.</em></summary>

A decimal value between 0 and 1 that determines where along the path to begin the shift. For example, 0.5 shifts to the middle of the path.

</details>

<details>

<summary><strong>Truncate</strong><br><em>How to handle fractional values in Relative mode.</em></summary>

Controls how decimal indices are rounded when using relative mode.

**Values**:

* **Round**: Round to nearest integer.
* **Floor**: Truncate toward negative infinity.
* **Ceil**: Truncate toward positive infinity.

</details>

<details>

<summary><strong>Discrete Constant</strong><br><em>Used when Input Mode is Discrete.</em></summary>

An integer value that directly specifies the index of the point to shift to.

</details>

<details>

<summary><strong>Index Safety</strong><br><em>How to handle out-of-bounds indices.</em></summary>

Controls behavior when a calculated index exceeds the path length.

**Values**:

* **Ignore**: Skip invalid indices.
* **Tile**: Wrap around (e.g., index 5 on a 3-point path becomes index 2).
* **Clamp**: Clamp to the maximum valid index (e.g., index 5 on a 3-point path becomes index 2).
* **Yoyo**: Mirror back and forth (e.g., index 4 on a 3-point path becomes index 1).

</details>

<details>

<summary><strong>Reverse Shift</strong><br><em>When enabled, reverses the order of points after shifting.</em></summary>

When enabled, the final path is reversed after shifting. This can be used to create mirrored or reversed versions of paths.

</details>

<details>

<summary><strong>Cherry-Picked Properties</strong><br><em>Point properties to be shifted when Shift Type is CherryPick.</em></summary>

Selects which native point properties (position, rotation, scale) are affected by the shift operation.

</details>

<details>

<summary><strong>Cherry-Picked Attributes</strong><br><em>Attributes to be shifted when Shift Type is CherryPick.</em></summary>

Lists specific attributes that should be shifted along with the path points.

</details>

#### Usage Example

Imagine you have a circular race track made of 10 waypoints. You want to start the race from the 3rd waypoint instead of the first. Set the **Shift Type** to **Index**, **Input Mode** to **Discrete**, and set **Discrete Constant** to `2` (since indices are zero-based). This will reorder the path so that the 3rd point becomes the first.

Alternatively, if you want to shift by half the path length, use **Input Mode** = **Relative** and set **Relative Constant** = `0.5`.

#### Notes

* The node modifies the order of points in a path without changing their actual positions.
* When using **Filter** mode, ensure your filters are correctly configured to match expected points.
* Be cautious with **Reverse Shift** as it can produce unexpected results if not used carefully.
* Index safety modes help prevent errors when shifting beyond path bounds.
