---
description: 'In editor :: PCGEx | Filter : Angle'
icon: circle-dashed
---

# Angle

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Creates a filter definition that compares dot value of the direction of a point toward its previous and next points.

#### Overview

This subnode filters points based on the angle formed between consecutive points in a sequence. It evaluates whether the turn or curvature at each point meets specific criteria, making it useful for creating smooth paths, detecting sharp bends, or enforcing directional constraints.

It's particularly helpful when working with point-based data such as curves, paths, or splines where you want to control how sharply the path changes direction.

This subnode connects to **Filter** pins on processing nodes that support point filtering.

#### How It Works

This filter calculates the angle formed by three consecutive points — the previous point, the current point, and the next point — and compares the resulting dot product against a threshold. The comparison is based on either:

* **Curvature**: Evaluates the turn from (Prev → Current) to (Current → Next)
* **Spread**: Evaluates the turn from (Current → Prev) to (Current → Next)

For each point, it computes two directional vectors:

1. From the previous point to the current point
2. From the current point to the next point

It then calculates the dot product of these two vectors and compares it against a threshold using a comparison operator (e.g., greater than, less than). The result determines whether the point passes or fails the filter.

If a point is at the beginning or end of an open sequence, fallback behavior defines how to treat it:

* First points use the `FirstPointFallback` setting
* Last points use the `LastPointFallback` setting

The final result can be inverted using the `bInvert` toggle, which also affects the fallback results.

<details>

<summary>Inputs</summary>

This subnode operates on point data with a sequence of points that have defined previous and next neighbors. It requires at least three points to compute meaningful angles.

</details>

<details>

<summary>Outputs</summary>

This subnode defines a filter behavior that can be consumed by processing nodes. It does not produce or modify data directly but sets up the filtering logic for downstream operations.

</details>

#### Configuration

***

**Mode**

_Controls how the angle is calculated between consecutive points._

**Values**:

* **Curvature**: Compares the dot product of (Prev to Current) and (Current to Next)
* **Spread**: Compares the dot product of (Current to Prev) and (Current to Next)

**FirstPointFallback**

_Determines how first points are treated when evaluating the filter._

**Values**:

* **Pass**: First points are considered to pass the filter
* **Fail**: First points are considered to fail the filter

**LastPointFallback**

_Determines how last points are treated when evaluating the filter._

**Values**:

* **Pass**: Last points are considered to pass the filter
* **Fail**: Last points are considered to fail the filter

**DotComparisonDetails**

_Configures how the dot product result is compared against a threshold._

This setting includes:

* A comparison operator (e.g., greater than, less than)
* A threshold value for the comparison
* An optional tolerance for "nearly equal" comparisons

**bInvert**

_When enabled, inverts the filter result — points that would pass now fail and vice versa._

This also affects how fallback results are interpreted.

#### Usage Example

You're creating a procedural path and want to ensure it doesn't have sharp turns. You can use this filter with:

* **Mode**: Curvature
* **DotComparisonDetails**: Use a comparison like "Greater Than" with a threshold of `0.7`
* **FirstPointFallback** and **LastPointFallback**: Set to Fail
* **bInvert**: Disabled

This setup will exclude points where the angle between consecutive segments is too sharp, resulting in smoother paths.

#### Notes

* This filter works best on closed loops or sequences with sufficient neighboring points.
* For open-ended data (e.g., a path that isn't closed), first and last points are handled according to fallback settings.
* The dot product comparison helps define angular thresholds in a normalized way, making it robust across different scales.
