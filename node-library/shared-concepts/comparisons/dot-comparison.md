---
icon: angle
---

# Dot Comparison

#### Settings

<details>

<summary><strong>Domain</strong> <code>EPCGExAngularDomain</code></summary>

Value domain (units)

**Values:**

* **Scalar**: Read the value as the result of a normalized dot product
* **Degrees**: Read the value as degrees

</details>

<details>

<summary><strong>Comparison</strong> <code>EPCGExComparison</code></summary>

Comparison

**Values:**

* \*\* == \*\*: Operand A Strictly Equal to Operand B
* \*\* != \*\*: Operand A Strictly Not Equal to Operand B
* \*\* >= \*\*: Operand A Equal or Greater to Operand B
* \*\* <= \*\*: Operand A Equal or Smaller to Operand B
* \*\* > \*\*: Operand A Strictly Greater to Operand B
* \*\* < \*\*: Operand A Strictly Smaller to Operand B
* \*\* \~= \*\*: Operand A Nearly Equal to Operand B
* \*\* !\~= \*\*: Operand A Nearly Not Equal to Operand B

</details>

<details>

<summary><strong>Unsigned Comparison</strong> <code>bool</code></summary>

If enabled, the dot product will be made absolute before testing.

</details>

<details>

<summary><strong>Threshold Input</strong> <code>EPCGExInputValueType</code></summary>

Type of Dot value source

</details>

<details>

<summary><strong>Threshold (Attr)</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

Attribute value use for comparison, whether Scalar or Degrees

⚡ PCG Overridable

</details>

<details>

<summary><strong>Scalar</strong> <code>double</code></summary>

Dot value use for comparison (In raw -1/1 range)

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Tolerance</strong> <code>double</code></summary>

Tolerance for dot comparison.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Degrees</strong> <code>double</code></summary>

Dot value use for comparison (In degrees)

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Tolerance</strong> <code>double</code></summary>

Tolerance for dot comparison.

⚡ PCG Overridable

</details>

#### Used In

* VtxPropertyEdgeMatch
* IsoEdgeDirectionFilter
* NodeEdgeAngleFilter
* NodeEdgeDirectionFilter
* TensorDotFilter
* AngleFilter
* DotFilter

***

Defined in: `Source\PCGExCore\Public\Utils\PCGExCompare.h`
