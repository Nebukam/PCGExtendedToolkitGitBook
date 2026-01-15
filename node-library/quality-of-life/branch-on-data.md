---
description: 'In editor :: PCGEx | Branch on Data'
icon: circle
---

# Branch on Data

Branch on @Data domain attribute.

**How It Works**

> AI-Generated, needs proofreading

* The Branch on Data node evaluates an attribute from the @Data domain based on specified settings.
* It compares the selected data attribute against a predefined value using the comparison operator defined in the "Comparison" setting.
* Depending on whether the comparison condition is met (true or false), the node routes the data to one of its output pins, which are labeled according to the "Label" setting.
* The "Tolerance" setting influences how closely the attribute must match the value for the comparison to succeed, particularly affecting comparisons involving floating-point numbers.

#### Configuration

<details>

<summary><strong>Label</strong> <code>Name</code></summary>

Name of the output pin

⚡ PCG Overridable

</details>

<details>

<summary><strong>Check</strong> <code>PCGExComparisonDataType</code></summary>

How should the data be compared.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Comparison</strong> <code>PCGExComparison</code></summary>

Comparison

⚡ PCG Overridable

</details>

<details>

<summary><strong>Value</strong> <code>int64</code></summary>

Value

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tolerance</strong> <code>double</code></summary>

Rounding mode for near measures

⚡ PCG Overridable

</details>

<details>

<summary><strong>Comparison</strong> <code>PCGExStringComparison</code></summary>

Comparison

⚡ PCG Overridable

</details>

<details>

<summary><strong>Value</strong> <code>String</code></summary>

Value

⚡ PCG Overridable

</details>

<details>

<summary><strong>Branch Source</strong> <code>Name</code></summary>

The @Data domain attribute to check

⚡ PCG Overridable

</details>

<details>

<summary><strong>Selection Mode</strong> <code>PCGExControlFlowSelectionMode</code></summary>

Determines the type of value to be used to select an output.

</details>

<details>

<summary><strong>Branches</strong> <code>Array of FPCGExBranchOnDataPin</code></summary>

Controls branches.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Enum Source</strong> <code>PCGExEnumConstantSourceType</code></summary>

Controls enum source.

</details>

<details>

<summary><strong>Enum Class</strong> <code>Enum</code></summary>

Determines which Enum be used.

</details>

<details>

<summary><strong>Enum Picker</strong> <code>EnumSelector</code></summary>

Determines which Enum be used. Enum selection is ignored here, it's only using the class value internally.

</details>

<details>

<summary><strong>Default Pin Name</strong> <code>Name</code></summary>

Name of the default/fallback output pin. This is exposed because to allow easy disambiguation when 'default' is a valid switch.

</details>

***

Source: `Source\PCGExFoundations\Public\Elements\ControlFlow\PCGExBranchOnDataAttribute.h`
