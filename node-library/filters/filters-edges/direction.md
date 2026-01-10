---
description: 'In editor :: PCGEx | Edge Filter : Edge Direction'
icon: circle-dashed
---

# Direction

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Filters edges based on the dot product comparison of their direction against a local attribute or constant.

#### How It Works

This subnode evaluates whether edges in a graph align with a specified reference direction. It calculates the dot product between each edge's direction and the reference vector to determine how closely they match. If the result meets the configured criteria, the edge passes through the filter. The process can use either precise dot product calculations or a faster hash-based method for performance.

The subnode first determines the reference direction from either a fixed vector or an attribute on points. It then compares this direction against each edge's orientation using a mathematical operation called the dot product. Based on the comparison result and configured thresholds, edges are either included or excluded from further processing.

#### Configuration

<details>

<summary><strong>Comparison Quality</strong><br><em>Type of check; Note that Fast comparison ignores adjacency consolidation.</em></summary>

Determines whether to use a precise dot product comparison or a faster hash-based comparison.

**Values**:

* **Dot (Precise)**: Uses full dot product calculations for accurate directional checks.
* **Hash (Fast)**: Uses simplified hash comparisons, which are faster but less precise.

</details>

<details>

<summary><strong>Compare Against</strong><br><em>Where to read the compared direction from.</em></summary>

Defines whether the reference direction is a constant value or comes from an attribute on the input points.

**Values**:

* **Constant**: Uses a fixed vector defined in the node.
* **Attribute**: Reads the direction from a point attribute.

</details>

<details>

<summary><strong>Direction (Attr)</strong><br><em>Operand B for testing -- Will be translated to `double` under the hood.</em></summary>

The name of the attribute to read the reference direction from, when "Compare Against" is set to "Attribute".

</details>

<details>

<summary><strong>Invert</strong><br><em>└─ Invert</em></summary>

When enabled, inverts the reference direction before comparison.

</details>

<details>

<summary><strong>Direction</strong><br><em>Direction for computing the dot product against the edge's.</em></summary>

The constant vector used as the reference direction when "Compare Against" is set to "Constant".

</details>

<details>

<summary><strong>Transform Direction</strong><br><em>Transform the reference direction with the local point' transform</em></summary>

When enabled, applies the point's local transform to the reference direction before comparison.

</details>

<details>

<summary><strong>Dot Comparison Details</strong><br><em>Dot comparison settings</em></summary>

Settings for how the dot product is evaluated, including thresholds and tolerance values.

</details>

<details>

<summary><strong>Hash Comparison Details</strong><br><em>Hash comparison settings</em></summary>

Settings for how the hash-based comparison evaluates directional alignment, including tolerance levels.

</details>

#### Usage Example

A common use case is filtering edges in a terrain graph to only include those flowing uphill. You could:

1. Set "Compare Against" to "Attribute".
2. Use a point attribute like `Normal` or `Slope`.
3. Enable "Invert Direction" if you want to filter against the opposite of the normal.
4. Adjust dot comparison thresholds to define what constitutes "uphill".

This ensures that only edges aligned with your desired direction (e.g., uphill) are processed further.

#### Notes

* The "Dot" mode is more accurate but slower, while "Hash" is faster but less precise.
* When using attribute-based directions, ensure the attribute contains valid normalized vectors for consistent results.
* This filter works best when edge directions are well-defined and aligned with your intended use case.
