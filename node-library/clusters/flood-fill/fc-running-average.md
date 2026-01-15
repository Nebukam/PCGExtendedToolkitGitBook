---
description: 'In editor :: PCGEx | Fill Control : Running Average'
icon: circle-dashed
---

# FC : Running Average

Ignore candidates which attribute value isn't within the given tolerance of a running average.

📌 **Subnode** — Connects to **Fill Controls** pins.

**How It Works**

> AI-Generated, needs proofreading

* The node computes a running average of attribute values from incoming candidates over a defined window size.
* It checks if each candidate's attribute value falls within a specified tolerance range around the current running average.
* Users can define the window size dynamically through an attribute or set it as a constant, and similarly for the tolerance.
* Candidates whose attribute values do not lie within the tolerance of the running average are ignored by the node.

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

<summary><strong>Tolerance Input</strong> <code>PCGExInputValueType</code></summary>

Controls tolerance input.

</details>

<details>

<summary><strong>Tolerance (Attr)</strong> <code>Name</code></summary>

Tolerance Attribute

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tolerance</strong> <code>double</code></summary>

Tolerance Constant

⚡ PCG Overridable

</details>

<details>

<summary><strong>Operand</strong> <code>PCGAttributePropertyInputSelector</code></summary>

The property that will be averaged and checked against candidates -- will be broadcasted to a `double`.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExFillControlConfigRunningAverage</code></summary>

Control Config.

📦 See: FillControlConfigRunningAverage configuration

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

<summary><strong>Tolerance Input</strong> <code>PCGExInputValueType</code></summary>

Controls tolerance input.

</details>

<details>

<summary><strong>Tolerance (Attr)</strong> <code>Name</code></summary>

Tolerance Attribute

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tolerance</strong> <code>double</code></summary>

Tolerance Constant

⚡ PCG Overridable

</details>

<details>

<summary><strong>Operand</strong> <code>PCGAttributePropertyInputSelector</code></summary>

The property that will be averaged and checked against candidates -- will be broadcasted to a `double`.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsClusters\Public\Elements\FloodFill\FillControls\PCGExFillControlRunningAverage.h`
