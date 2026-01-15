---
description: 'In editor :: PCGEx | Fill Control : Keep Direction'
icon: circle-dashed
---

# FC : Keep Direction

Stop fill after a certain number of vtx have been captured.

📌 **Subnode** — Connects to **Fill Controls** pins.

**How It Works**

> AI-Generated, needs proofreading

* The node evaluates vertices during a fill operation and stops once a specified number of vertices have been captured.
* The "Window Size" setting determines the threshold for the number of vertices that triggers the stop condition; this can be set via an input attribute or a constant value.
* Hash comparison settings are used to ensure consistency in how vertices are evaluated against the window size criteria.

#### Configuration

<details>

<summary><strong>Window Size Input</strong> <code>PCGExInputValueType</code></summary>

Controls window size input.

</details>

<details>

<summary><strong>Window Size (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Window Size Attribute

⚡ PCG Overridable

</details>

<details>

<summary><strong>Window Size</strong> <code>int32</code></summary>

Window Size Constant

⚡ PCG Overridable

</details>

<details>

<summary><strong>Hash Comparison Details</strong> <code>PCGExVectorHashComparisonDetails</code></summary>

Hash comparison settings

📦 See: VectorHashComparison configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExFillControlConfigKeepDirection</code></summary>

Control Config.

📦 See: FillControlConfigKeepDirection configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Window Size Input</strong> <code>PCGExInputValueType</code></summary>

Controls window size input.

</details>

<details>

<summary><strong>Window Size (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Window Size Attribute

⚡ PCG Overridable

</details>

<details>

<summary><strong>Window Size</strong> <code>int32</code></summary>

Window Size Constant

⚡ PCG Overridable

</details>

<details>

<summary><strong>Hash Comparison Details</strong> <code>PCGExVectorHashComparisonDetails</code></summary>

Hash comparison settings

📦 See: VectorHashComparison configuration

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsClusters\Public\Elements\FloodFill\FillControls\PCGExFillControlKeepDirection.h`
