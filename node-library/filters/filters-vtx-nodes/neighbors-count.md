---
description: 'In editor :: PCGEx | Vtx Filter : Neighbors Count'
icon: circle-dashed
---

# Neighbors Count

{% hint style="warning" %}
## AI-generated page - To be reviewed. 
While not 100% accurante, it should properly capture what it does. It stills needs to be reviewed and proofread by a human.
{% endhint %}

> Filters points based on the number of neighboring connections they have in a graph.

### Overview

This factory creates a filter that evaluates whether each node (vertex) in a graph has a specific number of neighbors. It's used to select or exclude nodes based on their connectivity, which is useful for identifying isolated points, hubs, or nodes with specific connection patterns.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes like **Cluster : Filter Points** or **Cluster : Filter Edges**
{% endhint %}

### How It Works

The filter checks each node in a graph and compares its neighbor count against a target value using the specified comparison operator. A node passes the filter if it meets the comparison condition.

### Inputs

* **Points**: Input points to be filtered
* **Graph**: Graph data containing vertex connections

### Outputs

* **Filter**: Filter output that can be connected to downstream processing nodes

### Configuration

***

#### General

**Comparison**

_The logical operation used to compare neighbor count with the target value._

**Values**:

* **==**: Node must have exactly the same number of neighbors as the target
* **!=**: Node must have a different number of neighbors than the target
* **>=**: Node must have at least as many neighbors as the target
* **<=**: Node must have no more neighbors than the target
* **>**: Node must have strictly more neighbors than the target
* **<**: Node must have strictly fewer neighbors than the target
* **\~=**: Node's neighbor count must be nearly equal to the target (within tolerance)
* **!\~=:** Node's neighbor count must not be nearly equal to the target (outside tolerance)

**Compare Against**

_Whether to use a constant value or read the comparison value from an attribute._

**Values**:

* **Constant**: Use the fixed value in the **Operand A** setting
* **Attribute**: Read the comparison value from an attribute on input points

**Operand A (Attr)**

_The attribute containing the neighbor count target value._

Only visible when **Compare Against** is set to **Attribute**.

**Operand A**

_The fixed neighbor count target value._

Only visible when **Compare Against** is set to **Constant**.

**Tolerance**

_Tolerance for nearly equal comparisons._

Only visible when **Comparison** is set to **\~=** or **!\~=:**

### Usage Example

You want to filter out nodes that have fewer than 3 connections in a graph of roads. Connect this factory to the Filter pin of a **Cluster : Filter Points** node.

1. Set **Compare Against** to **Constant**
2. Set **Operand A** to `3`
3. Set **Comparison** to **>=**

This will keep only nodes that have 3 or more neighbors, effectively keeping only junctions with at least 3 connected roads.

### Notes

* This filter works on graph data where nodes have neighbor relationships
* For dynamic filtering based on point attributes, use the **Attribute** mode
* The **Tolerance** setting is useful when dealing with floating-point values that might not be exactly equal due to precision issues
* Combine multiple filters to create complex node selection criteria
