---
description: 'In editor :: PCGEx | Data Filter : Bounds'
icon: circle-dashed
---

# Data Bounds

Test an aspect of the collection' bounds

📌 **Subnode** — Connects to **Filters** pins.

**How It Works**

> AI-Generated, needs proofreading

* The Data Filter : Bounds node evaluates an aspect of the collection's bounds by comparing Operand A and Operand B using the specified Sub Operand operation.
* It uses the Ratio setting to adjust the comparison between Operand A and Operand B as part of its evaluation process.
* The PCGExCompareSelectorDouble is used for Operand B, indicating a double-precision floating-point comparison in the filter's logic.
* If Invert is enabled, the node will invert the result of the comparison, effectively reversing the outcome of the filtering operation.

#### Configuration

<details>

<summary><strong>Operand A</strong> <code>PCGExDataBoundsAspect</code></summary>

Operand A

**Values:**

* **Extents**: Bound's Extents
* **Min**: Bound's Min
* **Max**: Bound's Max
* **Size**: Bound's Size
* **Volume**: Bound's Volume
* **Ratio**: Bound's Size Ratio
* **Sorted Ratio**

</details>

<details>

<summary><strong>Sub Operand</strong> <code>PCGExDataBoundsComponent</code></summary>

Sub Operand

**Values:**

* **Length**
* **Length Squared**
* **X**
* **Y**
* **Z**

</details>

<details>

<summary><strong>Ratio</strong> <code>PCGExDataBoundsRatio</code></summary>

Ratio

**Values:**

* **XY**
* **XZ**
* **YZ**
* **YX**
* **ZX**
* **ZY**

</details>

<details>

<summary><strong>Operand B</strong> <code>PCGExCompareSelectorDouble</code></summary>

Controls operand b.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Invert</strong> <code>bool</code></summary>

Invert the result of this filter.

</details>

<details>

<summary><strong>Config</strong> <code>PCGExDataBoundsFilterConfig</code></summary>

Filter Config.

📦 See: DataBoundsFilter configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Operand A</strong> <code>PCGExDataBoundsAspect</code></summary>

Operand A

**Values:**

* **Extents**: Bound's Extents
* **Min**: Bound's Min
* **Max**: Bound's Max
* **Size**: Bound's Size
* **Volume**: Bound's Volume
* **Ratio**: Bound's Size Ratio
* **Sorted Ratio**

</details>

<details>

<summary><strong>Sub Operand</strong> <code>PCGExDataBoundsComponent</code></summary>

Sub Operand

**Values:**

* **Length**
* **Length Squared**
* **X**
* **Y**
* **Z**

</details>

<details>

<summary><strong>Ratio</strong> <code>PCGExDataBoundsRatio</code></summary>

Ratio

**Values:**

* **XY**
* **XZ**
* **YZ**
* **YX**
* **ZX**
* **ZY**

</details>

<details>

<summary><strong>Operand B</strong> <code>PCGExCompareSelectorDouble</code></summary>

Controls operand b.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Invert</strong> <code>bool</code></summary>

Invert the result of this filter.

</details>

***

Source: `Source\PCGExFilters\Public\Filters\Collections\PCGExDataBoundsFilter.h`
