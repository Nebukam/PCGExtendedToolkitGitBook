---
description: 'In editor :: PCGEx | Filter : Angle'
icon: circle-dashed
---

# Angle

Creates a filter definition that compares dot value of the direction of a point toward its previous and next points.

📌 **Subnode** — Connects to **Filters** pins.

**How It Works**

> AI-Generated, needs proofreading

* Computes the dot product between the direction vectors of a point towards its previous and next points in a sequence.
* Applies a filter based on the computed dot product according to specified comparison settings.
* Handles edge cases for the first and last points by using predefined fallback values, unless the data is marked as closed (@Data.IsClosed = true), in which case it wraps around to the other end of the sequence.
* Inverts the filter result if the "Invert" setting is enabled, affecting both the primary comparison outcome and any fallback results.

#### Configuration

<details>

<summary><strong>Mode</strong> <code>PCGExAngleFilterMode</code></summary>

Filter mode

**Values:**

* **Curvature**
* **Spread**

</details>

<details>

<summary><strong>First Point Fallback</strong> <code>PCGExFilterFallback</code></summary>

What should this filter return when dealing with first points? (if the data doesn't have @Data.IsClosed = true, otherwise wraps)

</details>

<details>

<summary><strong>Last Point Fallback</strong> <code>PCGExFilterFallback</code></summary>

What should this filter return when dealing with last points? (if the data doesn't have @Data.IsClosed = true, otherwise wraps)

</details>

<details>

<summary><strong>Dot Comparison Details</strong> <code>PCGExDotComparisonDetails</code></summary>

Dot comparison settings

📦 See: DotComparison configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Invert</strong> <code>bool</code></summary>

Whether the result of the filter should be inverted or not. Note that this will also invert fallback results!

</details>

<details>

<summary><strong>Config</strong> <code>PCGExAngleFilterConfig</code></summary>

Filter Config.

📦 See: AngleFilter configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Mode</strong> <code>PCGExAngleFilterMode</code></summary>

Filter mode

**Values:**

* **Curvature**
* **Spread**

</details>

<details>

<summary><strong>First Point Fallback</strong> <code>PCGExFilterFallback</code></summary>

What should this filter return when dealing with first points? (if the data doesn't have @Data.IsClosed = true, otherwise wraps)

</details>

<details>

<summary><strong>Last Point Fallback</strong> <code>PCGExFilterFallback</code></summary>

What should this filter return when dealing with last points? (if the data doesn't have @Data.IsClosed = true, otherwise wraps)

</details>

<details>

<summary><strong>Dot Comparison Details</strong> <code>PCGExDotComparisonDetails</code></summary>

Dot comparison settings

📦 See: DotComparison configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Invert</strong> <code>bool</code></summary>

Whether the result of the filter should be inverted or not. Note that this will also invert fallback results!

</details>

***

Source: `Source\PCGExFilters\Public\Filters\Points\PCGExAngleFilter.h`
