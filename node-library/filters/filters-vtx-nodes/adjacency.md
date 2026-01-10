---
description: 'In editor :: PCGEx | Vtx Filter : Adjacency'
icon: circle-dashed
---

# Adjacency

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Tests points based on numeric comparisons against adjacent node or edge values.

#### How It Works

This subnode evaluates each point in relation to its neighboring elements — either connected points or edges — using a comparison operation. It first identifies which adjacent elements to use based on the **Operand B Source** setting. Then, it retrieves values from both the point itself (Operand A) and the adjacent element (Operand B), performs the specified comparison, and determines whether the point should pass through the filter.

The process follows these steps:

1. For each point, collect its neighboring nodes or connected edges.
2. Based on **Test Config**, decide how to handle the adjacency data (e.g., test against all neighbors, average them, etc.).
3. Get Operand A value from either a constant or an attribute of the point.
4. Get Operand B value from the neighbor node or edge using the selected source.
5. Apply the comparison operation between Operand A and Operand B.
6.  If the result matches the filter criteria, the point is allowed to pass.

    <div data-gb-custom-block data-tag="hint" data-style="info" class="hint hint-info"><p>Connects to <strong>Filter</strong> pins on processing nodes.</p></div>

#### Inputs

* **Point Data**: Points to be filtered
* **Edge Data**: Edges connecting points (used when Operand B Source is Edge)

#### Outputs

* **Filtered Points**: Points that pass the comparison test

#### Configuration

<details>

<summary><strong>Adjacency</strong><br><em>Adjacency Settings.</em></summary>

Controls how adjacency data is gathered and processed.

**Values**:

* **All**: Test against all adjacent nodes.
* **Some**: Test against some adjacent nodes only (based on threshold).

</details>

<details>

<summary><strong>CompareAgainst</strong><br><em>Type of Operand A.</em></summary>

Determines whether Operand A is a constant or fetched from an attribute.

**Values**:

* **Constant**: Use the value specified in Operand A Constant.
* **Attribute**: Read Operand A from an attribute on the input point.

</details>

<details>

<summary><strong>OperandAConstant</strong><br><em>Constant Operand A for testing.</em></summary>

The constant value used when Compare Against is set to Constant.

</details>

<details>

<summary><strong>Comparison</strong><br><em>Comparison operation to perform.</em></summary>

The comparison logic used to evaluate the operands.

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

<summary><strong>OperandBSource</strong><br><em>Source of the Operand B value.</em></summary>

Specifies whether Operand B is fetched from adjacent nodes or edges.

**Values**:

* **Point**: Fetch value from the neighboring point.
* **Edge**: Fetch value from the edge connecting to the point.

</details>

<details>

<summary><strong>OperandB</strong><br><em>Operand B attribute selector.</em></summary>

Attribute used to fetch Operand B when Operand B Source is set to Point or Edge.

</details>

<details>

<summary><strong>Tolerance</strong><br><em>Rounding mode for near measures.</em></summary>

Used only when the comparison is Nearly Equal or Nearly Not Equal. Defines how close values must be to be considered equal.

</details>

<details>

<summary><strong>Config</strong><br><em>Test Config.</em></summary>

Defines how adjacency data is processed (e.g., test against all neighbors, average them, etc.).

**Values**:

* **Individual**: Test each neighbor individually.
* **Average**: Test against the average of all neighbors.
* **Min**: Test against the minimum value of neighbors.
* **Max**: Test against the maximum value of neighbors.
* **Sum**: Test against the sum of all neighbors.

</details>

#### Usage Example

Create a filter that only passes points where the point's height is nearly equal to the average height of its adjacent points. Set:

* Compare Against = Attribute
* Operand A = Height attribute
* Operand B Source = Vtx
* Comparison = \~= (nearly equal)
* Config = Average

This ensures terrain features like flat areas or ridges are preserved in your procedural generation.

#### Notes

* The filter works on point data and requires edge data for edge-based comparisons.
* When using "Some" adjacency mode, the threshold determines how many neighbors must meet the condition.
* For performance, avoid complex attribute lookups or large adjacency sets.
