---
description: 'In editor :: PCGEx | Vtx Filter : Adjacency'
icon: circle-dashed
---

# Adjacency

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Numeric comparison of adjacent values, testing either adjacent nodes or connected edges.

#### Overview

This filter evaluates whether a point meets specific numeric conditions based on its neighboring points or connecting edges. It allows you to define rules that compare a value from the current point against values from its neighbors using various comparison operators. This is useful for creating spatial logic where point behavior depends on local topology or attribute values.

It connects to **Filter** pins on processing nodes that accept vertex filters, enabling conditional filtering based on adjacency relationships.

#### How It Works

This subnode performs a numeric comparison between a value from the current point and a value derived from its neighbors. It first determines which neighbors are considered (based on adjacency settings), then calculates a test value from those neighbors (either individually or as an aggregate). The comparison is performed using a specified operator, such as "equal to" or "greater than", with optional tolerance for floating-point comparisons.

The logic works in steps:

1. For each point being evaluated, it identifies its adjacent points or edges.
2. It fetches a value from the current point (Operand A) and a value from neighbors (Operand B).
3. Depending on the configuration, it may test against all neighbors individually or compute an aggregate value (like average, min, max).
4. The comparison is made using the selected operator, and the result determines whether the point passes the filter.

<details>

<summary>Inputs</summary>

* Points with attributes to be evaluated
* Adjacent points or edges in a cluster structure

</details>

<details>

<summary>Outputs</summary>

* Points that satisfy the adjacency-based comparison condition

</details>

#### Configuration

***

**Adjacency**

_Controls how neighbors are selected for testing._

This setting defines whether all adjacent nodes are considered, or only some of them.

**Values**:

* **All**: Tests the condition using all adjacent nodes.
* **Some**: Tests the condition using a subset of adjacent nodes based on threshold settings.

***

**CompareAgainst**

_Determines if Operand A is a constant value or an attribute._

Controls whether the first operand (Operand A) is a fixed number or fetched from an attribute on the input data.

**Values**:

* **Constant**: Use a user-defined constant value.
* **Attribute**: Read the value from an attribute on the point being evaluated.

***

**Operand A**

_The fixed value used for comparison when CompareAgainst is set to Constant._

This is the static number used in comparisons when Operand A is not derived from attributes.

***

**Comparison**

_Selects the type of numeric comparison to perform._

Defines how the two operands are compared. For example, "equal to" or "greater than".

**Values**:

* **==**: Strictly equal to
* **!=**: Strictly not equal to
* **>=**: Equal or greater than
* **<=**: Equal or smaller than
* **>**: Strictly greater than
* **<**: Strictly smaller than
* **\~=**: Nearly equal to (with tolerance)
* \*\*!\~=: Nearly not equal to (with tolerance)

***

**OperandBSource**

_Specifies whether Operand B is fetched from the point or edge._

Controls if the second operand comes from the neighboring point or the connecting edge.

**Values**:

* **Point**: Value is fetched from the adjacent point.
* **Edge**: Value is fetched from the edge connecting to the point.

***

**Operand B**

_The attribute used for Operand B when OperandBSource is set to Point._

This defines which attribute on the neighbor point or edge is used in the comparison.

***

**Tolerance**

_Rounding tolerance used for nearly equal comparisons._

Controls how close two floating-point values must be to be considered "nearly equal".

**Values**:

* Any positive double value (default is `DBL_COMPARE_TOLERANCE`)

***

**Config**

_Configuration settings for adjacency testing._

Sets up the mode of adjacency testing, including how many neighbors are tested and whether the test passes if a minimum or maximum number of conditions are met.

**Values**:

* **All**: All neighbors must satisfy the condition.
* **Some**: Only some neighbors (based on threshold) need to satisfy the condition.
