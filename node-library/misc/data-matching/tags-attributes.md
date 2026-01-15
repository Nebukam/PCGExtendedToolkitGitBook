---
description: 'In editor :: PCGEx | Match : Tags × Attributes'
icon: circle-dashed
---

# Tags × Attributes

Compares attribute value on targets against tags on inputs

📌 **Subnode** — Connects to **Match Rules** pins.

**How It Works**

> AI-Generated, needs proofreading

* The node compares tags from inputs against attribute values on target entities based on specified settings.
* It reads the tag name either from an attribute (`Tag Name (Attr)`) or uses a constant value (`Tag Name`), depending on the configuration of `Type of Tag Name value`.
* Depending on the setting for `Match`, it performs string matching between the input tags and the target attributes' values using the specified mode in `PCGExStringMatchMode`.
* If `Do Value Match` is enabled, the node also compares the tag values associated with the matched names.
* The comparison results are output based on whether there is a match according to the configured criteria.

#### Configuration

<details>

<summary><strong>Tag Name Input</strong> <code>PCGExInputValueType</code></summary>

Type of Tag Name value

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tag Name (Attr)</strong> <code>Name</code></summary>

Attribute to read tag name value from.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tag Name</strong> <code>String</code></summary>

Constant tag name value.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Match</strong> <code>PCGExStringMatchMode</code></summary>

Controls match.

</details>

<details>

<summary><strong>Do Value Match</strong> <code>bool</code></summary>

Whether to do a tag value match or not.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Value Type</strong> <code>PCGExComparisonDataType</code></summary>

Expected value type, this is a strict check.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Value Attribute</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Attribute to read tag name value from.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Comparison</strong> <code>PCGExComparison</code></summary>

Comparison

</details>

<details>

<summary><strong>Tolerance</strong> <code>double</code></summary>

Near-equality tolerance

</details>

<details>

<summary><strong>Comparison</strong> <code>PCGExStringComparison</code></summary>

Comparison

</details>

<details>

<summary><strong>Config</strong> <code>PCGExMatchTagToAttrConfig</code></summary>

Rules properties

📦 See: MatchTagToAttr configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tag Name Input</strong> <code>PCGExInputValueType</code></summary>

Type of Tag Name value

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tag Name (Attr)</strong> <code>Name</code></summary>

Attribute to read tag name value from.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tag Name</strong> <code>String</code></summary>

Constant tag name value.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Match</strong> <code>PCGExStringMatchMode</code></summary>

Controls match.

</details>

<details>

<summary><strong>Do Value Match</strong> <code>bool</code></summary>

Whether to do a tag value match or not.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Value Type</strong> <code>PCGExComparisonDataType</code></summary>

Expected value type, this is a strict check.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Value Attribute</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Attribute to read tag name value from.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Comparison</strong> <code>PCGExComparison</code></summary>

Comparison

</details>

<details>

<summary><strong>Tolerance</strong> <code>double</code></summary>

Near-equality tolerance

</details>

<details>

<summary><strong>Comparison</strong> <code>PCGExStringComparison</code></summary>

Comparison

</details>

***

Source: `Source\PCGExMatching\Public\Matching\PCGExMatchTagToAttr.h`
