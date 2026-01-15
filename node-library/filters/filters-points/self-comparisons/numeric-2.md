---
description: 'In editor :: PCGEx | Filter : Segment Length'
icon: circle-dashed
---

# Segment Length

Creates a filter definition that compares the distance between the tested point and another inside the same dataset.

📌 **Subnode** — Connects to **Filters** pins.

**How It Works**

> AI-Generated, needs proofreading

* The node evaluates the distance between pairs of points within the same dataset based on the specified threshold and comparison type.
* Depending on the "Threshold Input" setting, the node either reads the threshold value from an attribute ("Threshold (Attr)") or uses a constant double value provided in the "Threshold" setting.
* If "Squared Distance" is enabled, the node compares the squared distance between points to the threshold; otherwise, it compares the actual distance.
* The comparison operation specified by "Comparison" determines whether each point pair meets the defined criteria based on their distance relative to the threshold.

#### Configuration

<details>

<summary><strong>Threshold Input</strong> <code>PCGExInputValueType</code></summary>

Whether to read the threshold from an attribute on the point or a constant.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Threshold (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Attribute to fetch threshold from

⚡ PCG Overridable

</details>

<details>

<summary><strong>Threshold</strong> <code>double</code></summary>

Controls threshold.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Squared Distance</strong> <code>bool</code></summary>

If enabled, will compare against the squared distance.

</details>

<details>

<summary><strong>Comparison</strong> <code>PCGExComparison</code></summary>

Comparison check

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tolerance</strong> <code>double</code></summary>

Rounding mode for approx. comparison modes

⚡ PCG Overridable

</details>

<details>

<summary><strong>Index Mode</strong> <code>PCGExIndexMode</code></summary>

Index mode

⚡ PCG Overridable

</details>

<details>

<summary><strong>Compare Against</strong> <code>PCGExInputValueType</code></summary>

Type of OperandB

⚡ PCG Overridable

</details>

<details>

<summary><strong>Index (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Index value to use according to the selected Index Mode -- Will be translated to `int32` under the hood.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Index</strong> <code>int32</code></summary>

Const Index value to use according to the selected Index Mode, If offset mode, 1 would be next point, -1 previous point.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Index Safety</strong> <code>PCGExIndexSafety</code></summary>

Index safety

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Tile on closed loops</strong> <code>bool</code></summary>

If enabled, will force Tile safety on closed loop paths

</details>

<details>

<summary><strong>Invalid Point Fallback</strong> <code>PCGExFilterFallback</code></summary>

What should this filter return when the point required for computing length is invalid? (i.e, first or last point)

</details>

<details>

<summary><strong>Invert</strong> <code>bool</code></summary>

Whether the result of the filter should be inverted or not. Note that this will also invert fallback results!

</details>

<details>

<summary><strong>Config</strong> <code>PCGExSegmentLengthFilterConfig</code></summary>

Filter Config.

📦 See: SegmentLengthFilter configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Threshold Input</strong> <code>PCGExInputValueType</code></summary>

Whether to read the threshold from an attribute on the point or a constant.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Threshold (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Attribute to fetch threshold from

⚡ PCG Overridable

</details>

<details>

<summary><strong>Threshold</strong> <code>double</code></summary>

Controls threshold.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Squared Distance</strong> <code>bool</code></summary>

If enabled, will compare against the squared distance.

</details>

<details>

<summary><strong>Comparison</strong> <code>PCGExComparison</code></summary>

Comparison check

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tolerance</strong> <code>double</code></summary>

Rounding mode for approx. comparison modes

⚡ PCG Overridable

</details>

<details>

<summary><strong>Index Mode</strong> <code>PCGExIndexMode</code></summary>

Index mode

⚡ PCG Overridable

</details>

<details>

<summary><strong>Compare Against</strong> <code>PCGExInputValueType</code></summary>

Type of OperandB

⚡ PCG Overridable

</details>

<details>

<summary><strong>Index (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Index value to use according to the selected Index Mode -- Will be translated to `int32` under the hood.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Index</strong> <code>int32</code></summary>

Const Index value to use according to the selected Index Mode, If offset mode, 1 would be next point, -1 previous point.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Index Safety</strong> <code>PCGExIndexSafety</code></summary>

Index safety

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Tile on closed loops</strong> <code>bool</code></summary>

If enabled, will force Tile safety on closed loop paths

</details>

<details>

<summary><strong>Invalid Point Fallback</strong> <code>PCGExFilterFallback</code></summary>

What should this filter return when the point required for computing length is invalid? (i.e, first or last point)

</details>

<details>

<summary><strong>Invert</strong> <code>bool</code></summary>

Whether the result of the filter should be inverted or not. Note that this will also invert fallback results!

</details>

***

Source: `Source\PCGExFilters\Public\Filters\Points\PCGExSegmentLengthFilter.h`
