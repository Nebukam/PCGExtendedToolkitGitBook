---
description: 'In editor :: PCGEx | Match Attributes'
icon: circle-dashed
---

# Attributes

Compares attribute value on targets against inputs @Data domain value

📌 **Subnode** — Connects to **Match Rules** pins.

**How It Works**

> AI-Generated, needs proofreading

* The node reads an attribute value from candidates in the @Data domain based on the specified "Candidate Attribute Name".
* It compares this candidate attribute value against the target attribute value read from targets, which can be either a target point or data domain element depending on where the match operation is performed.
* The comparison method and tolerance level are defined by the settings "Check" and "Tolerance", respectively, to determine if the values match according to specified criteria.

#### Configuration

<details>

<summary><strong>Candidate Attribute Name</strong> <code>Name</code></summary>

The attribute to read on the candidates (the data that's not used as target). Only support @Data domain, and will only try to read from there.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Target Attribute Name</strong> <code>Name</code></summary>

The attribute to read from on the targets. Depending on where the match operate, this can be read on a target point or data domain. If only data domain is supported, will read first element value.

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

<summary><strong>Swap Operands</strong> <code>bool</code></summary>

If enabled, will swap operands during check

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExMatchAttrToAttrConfig</code></summary>

Rules properties

📦 See: MatchAttrToAttr configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Candidate Attribute Name</strong> <code>Name</code></summary>

The attribute to read on the candidates (the data that's not used as target). Only support @Data domain, and will only try to read from there.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Target Attribute Name</strong> <code>Name</code></summary>

The attribute to read from on the targets. Depending on where the match operate, this can be read on a target point or data domain. If only data domain is supported, will read first element value.

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

<summary><strong>Swap Operands</strong> <code>bool</code></summary>

If enabled, will swap operands during check

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExMatching\Public\Matching\PCGExMatchAttrToAttr.h`
