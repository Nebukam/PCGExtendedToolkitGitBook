---
description: 'In editor :: PCGEx | Filter : Angle'
icon: circle-dashed
---

# Angle

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Creates a filter definition that compares dot value of the direction of a point toward its previous and next points.

#### How It Works

This subnode evaluates the angle formed between three consecutive points in a sequence. It calculates directional vectors from one point to the next and compares them using a dot product. The result is then compared against a threshold to determine whether the middle point should pass or fail the filter.

The calculation method depends on the selected mode:

* In **Curvature** mode, it measures the angle between the direction from the previous point to the current point and the direction from the current point to the next point.
* In **Spread** mode, it measures the angle between the direction from the current point to the previous point and the direction from the current point to the next point.

Points at the beginning or end of a sequence (where there isn't enough context) are handled based on fallback settings.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes.
{% endhint %}

#### Configuration

<details>

<summary><strong>Mode</strong><br><em>Filter mode.</em></summary>

Determines how the angle is calculated between three consecutive points.

**Values**:

* **Curvature**: Check against the dot product of (Prev to Current) -> (Current to Next)
* **Spread**: Check against the dot product of (Current to Prev) -> (Current to Next)

</details>

<details>

<summary><strong>FirstPointFallback</strong><br><em>What should this filter return when dealing with first points?</em></summary>

Controls how the filter behaves for the first point in a sequence, which lacks a previous point.

**Values**:

* **Pass**: The first point is considered to pass the filter.
* **Fail**: The first point is considered to fail the filter.

</details>

<details>

<summary><strong>LastPointFallback</strong><br><em>What should this filter return when dealing with last points?</em></summary>

Controls how the filter behaves for the last point in a sequence, which lacks a next point.

**Values**:

* **Pass**: The last point is considered to pass the filter.
* **Fail**: The last point is considered to fail the filter.

</details>

<details>

<summary><strong>DotComparisonDetails</strong><br><em>Dot comparison settings.</em></summary>

Defines how the computed dot product value is compared against a threshold to determine if a point passes or fails.

</details>

<details>

<summary><strong>bInvert</strong><br><em>Whether the result of the filter should be inverted or not.</em></summary>

When enabled, the filter results are inverted. Points that would pass now fail, and vice versa. This also affects fallback behavior.

</details>

#### Usage Example

Use this subnode to filter out points in a path where the turn is too sharp. For example, you could set the comparison mode to "Greater than" with a threshold of 0.5 (representing a 60-degree angle) in Curvature mode. This would allow only smooth turns and reject sharp U-turns or sudden direction changes.

#### Notes

* The filter requires ordered point data; it's most effective on paths or sequences.
* When the data is not closed, first and last points are handled according to fallback settings.
* If you're working with a closed loop (e.g., a circle), the subnode wraps around to handle edge cases automatically.
