---
description: 'In editor :: PCGEx | Edge Filter : Endpoints Compare (Numeric)'
icon: circle-dashed
---

# Endpoints Compare (Numeric)

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Compare the value of an attribute on each of the edge endpoint.

#### Overview

This subnode filters edges based on a numeric comparison between attribute values at the edge's endpoints. It allows you to define rules that determine whether an edge should be included or excluded from further processing based on how its start and end points relate numerically.

It is useful when working with graph data where you want to enforce constraints on the relationship between connected nodes, such as ensuring edges only exist between nodes with specific numeric attribute relationships (e.g., a node's height must be greater than its neighbor’s).

{% hint style="info" %}
Connects to **Filter** pins on processing nodes.
{% endhint %}

#### How It Works

This subnode evaluates the value of a specified numeric attribute at each edge endpoint and compares them using a defined comparison operator. The comparison can be made between:

* The start point and end point values (AgainstEach)
* The edge's own value and the start point value (AgainstStart)
* The edge's own value and the end point value (AgainstEnd)
* The edge's own value against both endpoints (AgainstSelfBoth)

The result of this comparison determines whether the edge passes the filter. If the condition is met, the edge is included; otherwise, it is excluded. When **Invert** is enabled, the logic is flipped — edges that would normally pass now fail and vice versa.

#### Inputs

* **Edge Data**: Expects a graph with edge data containing the specified attribute.
* **Point Data**: Requires point data to access endpoint attributes.

#### Outputs

* A filtered set of edges based on the comparison result.

#### Configuration

<details>

<summary><strong>Attribute</strong><br><em>Attribute to compare.</em></summary>

The numeric attribute used for comparison. This can be any scalar attribute present on the edge or point data.

</details>

<details>

<summary><strong>Comparison</strong><br><em>Comparison check.</em></summary>

The type of comparison to perform:

* **==**: Strictly equal
* **!=**: Strictly not equal
* **>=**: Equal or greater than
* **<=**: Equal or smaller than
* **>**: Strictly greater than
* **<**: Strictly smaller than
* **\~=**: Nearly equal (within tolerance)
* **!\~=**: Nearly not equal (outside tolerance)

</details>

<details>

<summary><strong>Tolerance</strong><br><em>Rounding mode for approx. comparison modes.</em></summary>

Used only when the comparison is set to "Nearly Equal" or "Nearly Not Equal". Defines how close two values must be to be considered equal.

</details>

<details>

<summary><strong>bInvert</strong><br><em>When enabled, the filter result is inverted.</em></summary>

When enabled, edges that would normally pass the comparison are filtered out, and those that fail are allowed through.

</details>

<details>

<summary><strong>Config</strong><br><em>Test Config.</em></summary>

Internal configuration used to define how the comparison is performed between endpoints.

</details>

#### Usage Example

You have a graph of terrain points with a "Height" attribute. You want to keep only edges where the start point height is strictly greater than the end point height. Set:

* Attribute: Height
* Comparison: Strictly Greater (>)

This will filter out all edges where the start point has a lower or equal height compared to the end point.

#### Notes

* This subnode works with numeric attributes only.
* The comparison logic can be inverted using the **Invert** toggle for more flexible filtering.
* When using "Nearly Equal" comparisons, ensure the tolerance is set appropriately for your data precision.
