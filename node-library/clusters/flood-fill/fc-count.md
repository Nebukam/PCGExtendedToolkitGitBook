---
description: 'In editor :: PCGEx | Fill Control : Count'
icon: circle-dashed
---

# FC : Count

Stop fill after a certain number of vtx have been captured.

📌 **Subnode** — Connects to **Fill Controls** pins.

**How It Works**

> AI-Generated, needs proofreading

* The Fill Control : Count node halts the fill operation once the specified number of vertices (vtx) have been captured.
* It uses the Max Count setting to determine the threshold for stopping; this can be defined through an attribute (Max Count Attribute), a constant value (Max Count Constant), or another input type (PCGExInputValueType).
* The node evaluates the current count of captured vertices against the Max Count during each fill operation iteration.
* Once the number of captured vertices reaches or exceeds the Max Count, the node stops further capture and processing for that fill operation.

#### Configuration

<details>

<summary><strong>Max Count Input</strong> <code>PCGExInputValueType</code></summary>

Controls max count input.

</details>

<details>

<summary><strong>Max Count (Attr)</strong> <code>Name</code></summary>

Max Count Attribute

⚡ PCG Overridable

</details>

<details>

<summary><strong>Max Count</strong> <code>int32</code></summary>

Max Count Constant

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExFillControlConfigCount</code></summary>

Control Config.

📦 See: FillControlConfigCount configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Max Count Input</strong> <code>PCGExInputValueType</code></summary>

Controls max count input.

</details>

<details>

<summary><strong>Max Count (Attr)</strong> <code>Name</code></summary>

Max Count Attribute

⚡ PCG Overridable

</details>

<details>

<summary><strong>Max Count</strong> <code>int32</code></summary>

Max Count Constant

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsClusters\Public\Elements\FloodFill\FillControls\PCGExFillControlCount.h`
