---
description: 'In editor :: PCGEx | Vtx Filter : Neighbors Count'
icon: circle-dashed
---

# Neighbors Count

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Check if a vertex's neighbor count meets a specified condition.

#### Overview

This filter subnode evaluates whether each vertex in a cluster meets a specific condition based on its number of neighboring vertices. It's useful for filtering out vertices that have too few or too many connections, which can be important for graph-based procedural generation, such as creating networks, road systems, or connectivity constraints.

It connects to the **Filter** pin of processing nodes that operate on vertex data in a cluster.

#### How It Works

This subnode performs a comparison between a vertex's actual neighbor count and a target value. For each vertex, it retrieves the number of connected neighbors and compares it against the configured operand using the specified comparison operator. If the condition is met, the vertex passes the filter and is included in downstream processing.

The neighbor count can be either a fixed constant or derived from an attribute on the input data. When using an attribute, the value is read per-vertex and used as the operand for that specific vertex's test.

<details>

<summary>Inputs</summary>

This node expects vertex data from a cluster, typically provided by a graph or cluster processing node.

</details>

<details>

<summary>Outputs</summary>

Vertices that pass the neighbor count condition are included in the filtered output. Vertices that fail are excluded.

</details>

#### Configuration

***

**Comparison**

_The comparison operator used to evaluate the neighbor count against the operand._

Controls how the vertex's neighbor count is compared to the target value.

**Values**:

* **==**: The neighbor count must exactly match the operand.
* **!=**: The neighbor count must not exactly match the operand.
* **>=**: The neighbor count must be equal to or greater than the operand.
* **<=**: The neighbor count must be equal to or smaller than the operand.
* **>**: The neighbor count must be strictly greater than the operand.
* **<**: The neighbor count must be strictly smaller than the operand.
* **\~=**: The neighbor count must nearly match the operand (within tolerance).
* **!\~=:** The neighbor count must not nearly match the operand (outside tolerance).

**Compare Against**

_Determines whether the operand is a constant or read from an attribute._

Controls how the comparison value is sourced.

**Values**:

* **Constant**: Use the fixed value set in the **Operand A** field.
* **Attribute**: Read the value from an attribute on the input data, using the **Operand A (Attr)** selector.

**Operand A**

_The target neighbor count to compare against._

This value is used as the right-hand side of the comparison. When "Compare Against" is set to "Constant", this field defines the fixed number. When "Attribute", this selects the attribute whose values will be used per-vertex.

**Operand A (Attr)**

_The attribute from which to read the neighbor count for comparison._

Only visible when **Compare Against** is set to **Attribute**. Selects the attribute that contains the per-vertex values to compare against.

**Tolerance**

_Rounding tolerance for nearly equal comparisons._

Only used when the **Comparison** is set to **\~=** or **!\~=:** This defines how close the neighbor count must be to the operand to be considered "nearly equal".

#### Usage Example

You want to keep only vertices that have exactly 3 neighbors. Set:

* **Comparison** to `==`
* **Compare Against** to `Constant`
* **Operand A** to `3`

Alternatively, if you want each vertex to have a number of neighbors defined by an attribute called "TargetNeighbors", set:

* **Comparison** to `==`
* **Compare Against** to `Attribute`
* **Operand A (Attr)** to `TargetNeighbors`

#### Notes

* The neighbor count is determined based on the cluster's graph structure.
* When using attribute-based operands, ensure the attribute exists and contains valid numeric data.
* For nearly equal comparisons, consider the tolerance value carefully to avoid false negatives due to floating-point precision.
