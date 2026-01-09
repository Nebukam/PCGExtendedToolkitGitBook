---
description: 'In editor :: PCGEx | Edge Filter : Endpoints Compare (Numeric)'
icon: circle-dashed
---

# Endpoints Compare (Numeric)

{% hint style="info" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Filters edges based on a numeric comparison between attribute values at the edge's endpoints.

### Overview

This filter factory creates a condition that compares numeric attribute values at the start and end points of edges. It determines whether an edge should pass or fail a test based on the result of that comparison.

{% hint style="info" %}
Connects to **Filter** pins on edge processing nodes like **Edge Filter**, **Edge Splitter**, or **Edge Transformer**.
{% endhint %}

### How It Works

This filter evaluates a numeric comparison between attribute values at an edge's endpoints. The specific comparison depends on the mode selected, and the result determines if the edge passes the filter.

The filter supports multiple comparison operators (equal, greater than, etc.) and can be inverted to reverse the logic.

### Inputs

* **Edge Data**: The edge data containing the attributes to compare
* **Point Data**: The point data containing the attributes to compare

### Outputs

* **Filter**: The resulting filter that can be connected to other edge processing nodes

### Configuration

***

#### General

**Attribute**

_The numeric attribute to compare on each endpoint._

Specify which attribute's value will be used for comparison. This should be a numeric attribute present on both the edge data and the point data.

**Comparison**

_The comparison operator to use._

Select how to compare the values from the endpoints.

**Values**:

* **==**: Operand A Strictly Equal to Operand B
* **!=**: Operand A Strictly Not Equal to Operand B
* **>=**: Operand A Equal or Greater to Operand B
* **<=**: Operand A Equal or Smaller to Operand B
* **>**: Operand A Strictly Greater to Operand B
* **<**: Operand A Strictly Smaller to Operand B
* **\~=**: Operand A Nearly Equal to Operand B
* \*\*!\~=: Operand A Nearly Not Equal to Operand B

**Tolerance**

_The tolerance value for approximate comparisons._

Only used when the comparison is set to "Nearly Equal" or "Nearly Not Equal". Defines how close the values must be to be considered equal.

**Invert**

_When enabled, the filter result is inverted._

If enabled, edges that would have passed now fail, and vice versa. This is useful for creating "not" conditions without needing multiple filters.

***

#### Comparison Mode

**Against Each**

_Compare Edge's start point value against Edge's end point value._

The attribute values from both endpoints are compared directly to each other.

**Against Start**

_Compare the Edge's start point value against the Edge itself._

The start point's attribute value is compared against the edge's own attribute value (if it has one).

**Against End**

_Compare the Edge's end point value against the Edge itself._

The end point's attribute value is compared against the edge's own attribute value (if it has one).

**Against Self Both**

_Compare the Edge's value against each of its end points._

The edge's own attribute value is compared against both endpoints' values.

### Usage Example

You want to filter edges where the start point's height is greater than the end point's height.

1. Set **Attribute** to "Height"
2. Set **Comparison** to ">="
3. Set **Mode** to "Against Each"
4. Connect this filter factory to an edge processing node like **Edge Filter**

This will pass only edges where the start point's height is greater than or equal to the end point's height.

### Notes

* The filter works on both edge and point data, so make sure your attribute exists in the appropriate data domain
* When using "Nearly Equal" comparisons, consider what tolerance value makes sense for your data
* You can combine multiple filters using **Filter Merge** nodes to create complex conditions
* For performance reasons, it's best to use this filter with a small number of edges or when combined with other filters that reduce the edge count early in the graph
