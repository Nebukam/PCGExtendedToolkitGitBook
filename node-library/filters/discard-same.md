---
description: 'In editor :: PCGEx | Discard Same'
icon: circle
---

# Discard Same

Discard entire datasets based on a selection of parameters

**How It Works**

> AI-Generated, needs proofreading

* The node evaluates datasets based on specified parameters such as bounds equality and point count.
* It uses the `Mode` setting to determine how to discard datasets that match certain criteria defined by the parameters.
* With `Test Bounds` enabled, the node checks if the bounds of the dataset are equal within a specified tolerance level (`Test Bounds Tolerance`).
* When `Test Point Count` is set to true, the node compares the number of points in each dataset and discards those that match the criteria defined by other settings.
* The `Test Mode` setting influences how groups of datasets are filtered or tested against the discard criteria.

#### Configuration

<details>

<summary><strong>Mode</strong> <code>PCGExDiscardSameMode</code></summary>

Controls mode.

**Values:**

* **FIFO**: First in, first out
* **LIFO**: Last in, first out
* **All**

⚡ PCG Overridable

</details>

<details>

<summary><strong>Test Mode</strong> <code>PCGExFilterGroupMode</code></summary>

Controls test mode.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Test Bounds</strong> <code>bool</code></summary>

Controls test bounds.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Test Bounds Tolerance</strong> <code>double</code></summary>

Test collection bounds equality, within tolerance

⚡ PCG Overridable

</details>

<details>

<summary><strong>Test Point Count</strong> <code>bool</code></summary>

Controls test point count.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Test Point Count Tolerance</strong> <code>int32</code></summary>

Test collection point count equality, within tolerance

⚡ PCG Overridable

</details>

<details>

<summary><strong>Test Positions</strong> <code>bool</code></summary>

Controls test positions.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Test Position Tolerance</strong> <code>double</code></summary>

Test point positions equality, within tolerance. Note that it computes space occupation, and does not account for point count.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Test Attributes Hash</strong> <code>PCGExDiscardAttributeHashMode</code></summary>

Controls test attributes hash.

**Values:**

* **None**: Do not use attributes to check sameness
* **Single**: Use a single, overridable attribute.
* **List**: Use a list of attributes. Arrays are not overridable

</details>

<details>

<summary><strong>Attribute Hash Configs</strong> <code>Array of FPCGExAttributeHashConfig</code></summary>

Build a hash from a single attribute and test it against the others.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Append Overridable</strong> <code>bool</code></summary>

Controls └─ append overridable.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Attribute Hash Config</strong> <code>PCGExAttributeHashConfig</code></summary>

Build a hash from a single attribute and test it against the others.

📦 See: AttributeHash configuration

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExFoundations\Public\Elements\Filtering\PCGExDiscardSame.h`
