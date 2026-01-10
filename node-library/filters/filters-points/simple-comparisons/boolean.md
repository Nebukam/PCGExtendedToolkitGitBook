---
description: 'In editor :: PCGEx | Filter : Bool Compare'
icon: circle-dashed
---

# Boolean

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Compares two boolean values and passes points where the comparison evaluates to true.

#### How It Works

This subnode evaluates whether two boolean values match or differ. It reads a boolean value from one attribute on each point, then compares it against either a fixed value or another attribute. If the comparison condition is met (such as "equal" or "not equal"), the point passes through to the next stage of your procedural graph.

#### Configuration

<details>

<summary><strong>Operand A</strong><br><em>First operand for comparison</em></summary>

Selects the boolean attribute from input points that will be used as the first value in the comparison.

</details>

<details>

<summary><strong>Comparison</strong><br><em>How to compare the two values</em></summary>

Choose how to evaluate the relationship between Operand A and Operand B.

* **Equal**: Passes points where Operand A matches Operand B.
* **NotEqual**: Passes points where Operand A does not match Operand B.

</details>

<details>

<summary><strong>Compare Against</strong><br><em>Type of second operand</em></summary>

Determines whether the second value (Operand B) is a fixed setting or comes from an attribute.

* **Constant**: Use a single boolean value for all comparisons.
* **Attribute**: Read Operand B from a boolean attribute on each point.

</details>

<details>

<summary><strong>Operand B (Attr)</strong><br><em>Second operand from attribute</em></summary>

When Compare Against is set to Attribute, select the boolean attribute that will be used as Operand B in the comparison.

</details>

<details>

<summary><strong>Operand B</strong><br><em>Second operand value</em></summary>

When Compare Against is set to Constant, choose a single boolean value to use for Operand B in all comparisons.

</details>

#### Usage Example

Imagine you have a point cloud where each point has a boolean attribute named "IsSelected". You want to keep only those points that are selected (i.e., IsSelected = true). In this case:

* Set Operand A to "IsSelected"
* Set Compare Against to Constant
* Set Operand B to true
* Choose Equal as the comparison operator

This will pass through only the points where the IsSelected attribute is true.

#### Notes

* Ensure that the attributes selected for Operand A and Operand B contain valid boolean data.
* When using Attribute for Operand B, make sure the attribute exists on all input points or handle missing values appropriately.
* This filter is useful in scenarios like selecting specific regions, filtering based on flags, or creating conditional workflows in your procedural graphs.
