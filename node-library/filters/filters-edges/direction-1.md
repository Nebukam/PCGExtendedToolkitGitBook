---
description: 'In editor :: PCGEx | Edge Filter : Length'
icon: circle-dashed
---

# Length

Check against the edge' length.

📌 **Subnode** — Connects to **Filters** pins.

**How It Works**

> AI-Generated, needs proofreading

* The Edge Filter : Length node evaluates edges based on their length against a specified threshold.
* Depending on the Threshold Input setting, the node either reads the threshold value from an attribute defined in Threshold (Attr) or uses a constant double value provided in the Threshold setting.
* The Comparison setting determines how the edge's length is compared to the threshold (e.g., equal to, greater than).
* Tolerance specifies the rounding mode used for approximate comparison modes, affecting how closely the edge length must match the threshold.

#### Configuration

<details>

<summary><strong>Threshold Input</strong> <code>PCGExInputValueType</code></summary>

Whether to read the threshold from an attribute on the edge or a constant.

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

<summary><strong>Invert</strong> <code>bool</code></summary>

Controls invert.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExEdgeLengthFilterConfig</code></summary>

Test Config.

📦 See: EdgeLengthFilter configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Threshold Input</strong> <code>PCGExInputValueType</code></summary>

Whether to read the threshold from an attribute on the edge or a constant.

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

<summary><strong>Invert</strong> <code>bool</code></summary>

Controls invert.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsClusters\Public\Filters\Edges\PCGExEdgeLengthFilter.h`
