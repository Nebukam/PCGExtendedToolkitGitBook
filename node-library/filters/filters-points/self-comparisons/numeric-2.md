---
description: 'In editor :: PCGEx | Filter : Segment Length'
icon: circle-dashed
---

# Segment Length

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Creates a filter definition that compares the distance between the tested point and another inside the same dataset.

#### How It Works

This filter evaluates the length of a segment formed between two points within the same dataset. For each point in the input data, it calculates the distance to another point based on a specified index mode and offset or pick value. This computed distance is then compared against a threshold using a chosen comparison operator. The result determines whether the point passes or fails the filter.

The process works as follows:

1. For every input point, determine which other point to measure against using the Index Mode and Index value.
2. If the Index Mode is **Offset**, the reference point index is calculated by adding the Index Constant to the current point's index.
3. If the Index Mode is **Pick**, the reference point is selected directly using the Index Constant as an absolute index.
4. Apply index safety rules (Clamp, Tile, Yoyo, Ignore) if the resulting index is out of bounds.
5. Compute the distance between the two points.
6. Compare this distance against the threshold value using the specified comparison operator.
7. Return whether the comparison passes or fails.

If a point cannot be evaluated due to invalid indices (e.g., first or last point in a sequence), the Invalid Point Fallback setting determines the result.

#### Configuration

<details>

<summary><strong>Threshold Input</strong><br><em>Whether to read the threshold from an attribute on the point or a constant.</em></summary>

Controls how the comparison threshold is determined.

* **Constant**: Use a fixed value for all points.
* **Attribute**: Read the threshold from an attribute on each point.

</details>

<details>

<summary><strong>Threshold (Constant)</strong><br><em>Threshold value to compare segment length against.</em></summary>

The constant value used when Threshold Input is set to Constant. Must be greater than 0.

</details>

<details>

<summary><strong>Squared Distance</strong><br><em>If enabled, will compare against the squared distance.</em></summary>

When enabled, compares against the square of the distance instead of the actual distance for performance optimization. This avoids expensive square root calculations.

</details>

<details>

<summary><strong>Comparison</strong><br><em>Comparison check to apply.</em></summary>

The comparison operator used to evaluate whether the segment length meets the threshold.

* **Strictly Greater**: Segment length > Threshold
* **Greater Or Equal**: Segment length ≥ Threshold
* **Strictly Less**: Segment length < Threshold
* **Less Or Equal**: Segment length ≤ Threshold
* **Nearly Equal**: Segment length ≈ Threshold (within tolerance)
* **Nearly Not Equal**: Segment length ≠ Threshold (outside tolerance)

</details>

<details>

<summary><strong>Tolerance</strong><br><em>Rounding mode for approx. comparison modes.</em></summary>

Used when Comparison is set to Nearly Equal or Nearly Not Equal. Defines how close the values must be to be considered equal.

</details>

<details>

<summary><strong>Index Mode</strong><br><em>Index mode for selecting reference point.</em></summary>

How the index of the reference point is calculated.

* **Pick**: Use an absolute index directly.
* **Offset**: Add a constant offset to the current point's index.

</details>

<details>

<summary><strong>Compare Against</strong><br><em>Type of OperandB for comparison.</em></summary>

Controls how the second point index is determined.

* **Constant**: Use a fixed index value.
* **Attribute**: Read the index from an attribute on each point.

</details>

<details>

<summary><strong>Index (Constant)</strong><br><em>Index value to use according to the selected Index Mode.</em></summary>

The constant index used when Compare Against is set to Constant. In Offset mode, 1 means the next point, -1 means the previous point.

</details>

<details>

<summary><strong>Index Safety</strong><br><em>How to handle out-of-bounds indices.</em></summary>

Controls behavior when the computed index for the reference point is outside valid range.

* **Ignore**: Skip invalid points (return fallback).
* **Tile**: Wrap around using modulo arithmetic.
* **Clamp**: Use the nearest valid index.
* **Yoyo**: Mirror back and forth.

</details>

<details>

<summary><strong>Tile on Closed Loops</strong><br><em>If enabled, will force Tile safety on closed loop paths.</em></summary>

When enabled, forces Tile index safety even on closed-loop paths to prevent incorrect wrapping behavior.

</details>

<details>

<summary><strong>Invalid Point Fallback</strong><br><em>What should this filter return when the point required for computing length is invalid?</em></summary>

Determines how to treat points that cannot be evaluated due to index issues (e.g., first or last point).

* **Pass**: Treats invalid points as passing the filter.
* **Fail**: Treats invalid points as failing the filter.

</details>

<details>

<summary><strong>Invert</strong><br><em>Whether the result of the filter should be inverted.</em></summary>

When enabled, reverses the outcome of the filter. A point that would pass now fails, and vice versa.

</details>

#### Usage Example

Use this filter to remove points from a path where the segment to the next point is shorter than 50 units. Set:

* Threshold Input = Constant
* Threshold (Constant) = 50
* Index Mode = Offset
* Index (Constant) = 1
* Comparison = Strictly Greater

This ensures that only points where the distance to the next point exceeds 50 units are allowed through.

#### Notes

* This filter works best on ordered datasets like paths or sequences.
* The index safety mode affects how edge cases are handled, especially for first and last points.
* For performance, consider using Squared Distance when possible.
* When using Attribute-based inputs, ensure the attributes exist and are properly populated in your dataset.
