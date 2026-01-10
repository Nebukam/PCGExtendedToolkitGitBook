---
description: 'In editor :: PCGEx | Vtx Filter : Neighbors Count'
icon: circle-dashed
---

# Neighbors Count

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Filter points based on how many neighbors they have in a cluster.

#### How It Works

This subnode examines each point in a cluster and counts how many other points it connects to (its neighbor count). It then compares this count against a specified value using a comparison operator. The result determines whether the point passes the filter or not.

The process works like this:

1. For each point, calculate its number of neighbors.
2. Retrieve the comparison value (either a fixed number or a value from an attribute).
3. Apply the selected comparison operation between the neighbor count and the comparison value.
4. Return true if the condition is met, false otherwise.

The comparison can be strict equality, inequality, or near-equality (with tolerance). This allows for flexible filtering based on exact counts or approximate values.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes.
{% endhint %}

#### Configuration

<details>

<summary><strong>Comparison</strong><br><em>Comparison</em></summary>

Determines how to compare the neighbor count against the operand.

**Values**:

* **==**: Strictly equal
* **!=**: Strictly not equal
* **>=**: Equal or greater
* **<=**: Equal or smaller
* **>**: Strictly greater
* **<**: Strictly smaller
* **\~=**: Nearly equal (within tolerance)
* **!\~=**: Nearly not equal (outside tolerance)

</details>

<details>

<summary><strong>Compare Against</strong><br><em>Type of Count</em></summary>

Defines whether the comparison value is a fixed number or read from an attribute.

**Values**:

* **Constant**: Use a fixed number defined in the "Operand A" field.
* **Attribute**: Read the comparison value from an attribute on the input data.

</details>

<details>

<summary><strong>Operand A (Attr)</strong><br><em>Operand A for testing -- Will be translated to `double` under the hood.</em></summary>

The attribute used as the comparison value when "Compare Against" is set to "Attribute". Only visible when CompareAgainst is Attribute.

</details>

<details>

<summary><strong>Operand A</strong><br><em>Constant Operand A for testing.</em></summary>

The fixed number used as the comparison value when "Compare Against" is set to "Constant". Only visible when CompareAgainst is Constant.

</details>

<details>

<summary><strong>Tolerance</strong><br><em>Rounding mode for near measures</em></summary>

Used only when the comparison is "Nearly Equal" or "Nearly Not Equal". Defines how close the values must be to be considered equal.

</details>

#### Usage Example

You want to keep only points that have exactly 4 neighbors in a cluster. Set:

* **Comparison** to `==`
* **Compare Against** to `Constant`
* **Operand A** to `4`

This will filter out all points with fewer or more than 4 neighbors.

#### Notes

When using "Attribute" as the comparison type, ensure the attribute exists on your input data and is of a numeric type. The tolerance setting is only active for near-equality comparisons and helps handle floating-point precision issues.
