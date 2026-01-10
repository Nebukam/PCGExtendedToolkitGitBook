---
description: 'In editor :: PCGEx | Filter : Within Range'
icon: circle-dashed
---

# Within Range

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Filters points based on whether a specified value falls within a defined range.

#### How It Works

This subnode checks each point to see if a selected numeric value falls within a given range. It can use fixed values or read the range limits from point attributes. The comparison can be inclusive or exclusive of the boundary values, and you can choose to pass points inside the range or outside it. This allows for flexible filtering based on attribute values like distance, height, or intensity.

#### Configuration

<details>

<summary><strong>Operand A</strong><br><em>Operand A for testing -- Will be translated to `double` under the hood.</em></summary>

Selects the attribute or value to test against the range. This is typically a scalar numeric attribute like distance, height, or intensity.

</details>

<details>

<summary><strong>Source</strong><br><em>Where to read ranges from</em></summary>

Controls how the range limits are determined:

* **Constant**: Use the fixed RangeMin and RangeMax values.
* **Attribute Set**: Read the range from a FVector2 attribute on the points.

**Values**:

* **Constant**: Uses fixed min/max values.
* **Attribute Set**: Reads the range from a point attribute.

</details>

<details>

<summary><strong>Attributes</strong><br><em>List of attributes to read ranges from FVector2.</em></summary>

When Source is set to "Attribute Set", this list defines which attributes contain the min/max range values as FVector2. The first component is used as the minimum, and the second as the maximum.

</details>

<details>

<summary><strong>Range Min</strong><br><em>Range min value.</em></summary>

The lower boundary of the range when Source is set to "Constant". Points with Operand A values less than this will fail the filter unless inverted.

</details>

<details>

<summary><strong>Range Max</strong><br><em>Range max value</em></summary>

The upper boundary of the range when Source is set to "Constant". Points with Operand A values greater than this will fail the filter unless inverted.

</details>

<details>

<summary><strong>B Inclusive</strong><br><em>Whether the test should be inclusive of min/max values</em></summary>

When enabled, points with Operand A values exactly equal to RangeMin or RangeMax are considered to pass the filter.

</details>

<details>

<summary><strong>B Invert</strong><br><em>If enabled, invert the result of the test and pass if value is outside the given range</em></summary>

When enabled, the filter passes points that fall outside the defined range instead of inside it.

</details>
