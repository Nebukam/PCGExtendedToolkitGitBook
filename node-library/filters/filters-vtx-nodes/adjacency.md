---
description: 'In editor :: PCGEx | Vtx Filter : Adjacency'
icon: circle-dashed
---

# Adjacency

{% hint style="warning" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Filters points based on numeric comparisons between a point's value and the values of its adjacent nodes or edges.

### Overview

This filter factory tests whether a point passes a condition when compared to values from its neighbors. It's useful for creating rules that depend on spatial relationships or connectivity, such as "only keep points where the neighbor height is within 10% of the point's height."

{% hint style="info" %}
Connects to **Filter** pins on processing nodes like **Vtx Filter**, **Edge Filter**, or **Cluster Filter**
{% endhint %}

### How It Works

The filter compares a value from the current point (Operand A) against values from adjacent points or edges (Operand B). It supports multiple comparison operators and different ways to aggregate neighbor values.

For example, you can test if a point's elevation is greater than the average elevation of its neighbors, or if it's within 5 units of any neighbor's value.

### Inputs

* **Filter** - Input filter to be processed
* **Source Points** - Point data to use for filtering
* **Source Edges** - Edge data to use for filtering (optional)

### Outputs

* **Filtered Points** - Points that pass the filter condition
* **Unfiltered Points** - Points that do not pass the filter condition

### Configuration

***

#### General Settings

**Adjacency**

_Controls how many adjacent nodes are considered in the comparison._

* **All**: Tests against all adjacent nodes.
* **Some**: Tests against a subset of adjacent nodes based on threshold settings.

**Comparison**

_Selects the mathematical relationship to test between Operand A and Operand B._

* **==**: Strictly equal
* **!=**: Strictly not equal
* **>=**: Equal or greater than
* **<=**: Equal or smaller than
* **>**: Strictly greater than
* **<**: Strictly smaller than
* **\~=**: Nearly equal (within tolerance)
* \*\*!\~=: Nearly not equal (outside tolerance)

**OperandBSource**

_Determines whether to read the comparison value from adjacent points or edges._

* **Point**: Read from the point itself.
* **Edge**: Read from the edge connecting to the point.

**OperandA Source**

_Specifies how to get the first operand for comparison._

* **Constant**: Use a fixed numeric value.
* **Attribute**: Read from an attribute on the input data.

**Operand A (Attribute)**

_The attribute to read when "Operand A Source" is set to "Attribute"._

**Operand A (Constant)**

_The constant value to use when "Operand A Source" is set to "Constant"._

**Operand B**

_The attribute to read from adjacent points or edges._

**Tolerance**

_Tolerance for near-equality comparisons (when using&#x20;_~~_= or !_~~_=)._

### Usage Example

Create a filter that keeps only points where the point's height is within 10% of the average height of its neighbors:

1. Set **Operand A Source** to "Constant"
2. Set **Operand A** to `1.0` (representing 100%)
3. Set **Comparison** to **\~=**
4. Set **OperandBSource** to **Point**
5. Set **Operand B** to your height attribute
6. Configure **Adjacency** to use **Average** aggregation mode
7. Connect this filter to a **Vtx Filter** node

This will keep points where the point's height is within 10% of the average height of its neighbors.

### Notes

* The filter works with both vertex and edge data, depending on the **OperandBSource** setting.
* When using **Some** adjacency mode, you can control how many neighbors must meet the condition via threshold settings.
* For performance reasons, avoid using **All** adjacency mode with large clusters unless necessary.
* Combine with other filters to create complex spatial rules.
