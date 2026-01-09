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

This subnode filters edges based on a numeric comparison between attribute values at the edge's endpoints. It allows you to define conditions that must be met for an edge to pass through the filter, such as ensuring one endpoint's attribute is greater than another's.

It connects to Filter pins on processing nodes that handle edge data, enabling conditional logic in your procedural graphs. You can use it to create rules like "only keep edges where the start point has a higher value than the end point" or "filter out edges where both endpoints have nearly equal values."

{% hint style="info" %}
Connects to **Filter** pins on processing nodes that accept edge filters.
{% endhint %}

#### How It Works

This subnode evaluates numeric attribute values at the two endpoints of each edge and compares them using a specified comparison operator. The logic depends on the selected mode:

* **Start <-> End**: Compares the start point's attribute value against the end point's attribute value.
* **Edge <-> Start**: Compares an edge's own attribute value against its start point's attribute value.
* **Edge <-> End**: Compares an edge's own attribute value against its end point's attribute value.
* **Edge <-> Start, End**: Compares an edge's own attribute value against both endpoints' attribute values.

For each edge, it retrieves the numeric values from the specified attribute at the relevant points (start, end, or the edge itself), applies the comparison operator (e.g., greater than, equal to, nearly equal), and determines whether the edge passes the filter. If `bInvert` is enabled, it reverses the result of the comparison.

<details>

<summary>Inputs</summary>

Expects edge data with a numeric attribute defined in the configuration.

</details>

<details>

<summary>Outputs</summary>

Filters edges based on the comparison result; only edges that meet the condition pass through.

</details>

#### Configuration

***

**Attribute**

_The numeric attribute to compare._

Selects which attribute's value will be used for comparison. This attribute must exist on the edge or its endpoints.

***

**Comparison**

_The comparison check to perform._

Defines how the two values are compared.

**Values**:

* **==**: Operand A Strictly Equal to Operand B
* **!=**: Operand A Strictly Not Equal to Operand B
* **>=**: Operand A Equal or Greater to Operand B
* **<=**: Operand A Equal or Smaller to Operand B
* **>**: Operand A Strictly Greater to Operand B
* **<**: Operand A Strictly Smaller to Operand B
* **\~=**: Operand A Nearly Equal to Operand B
* **!\~=:** Operand A Nearly Not Equal to Operand B

***

**Tolerance**

_Rounding mode for approx. comparison modes._

Only used when the comparison is set to "Nearly Equal" or "Nearly Not Equal". Defines how close the values must be to be considered equal.

***

**bInvert**

_When enabled, inverts the result of the comparison._

If enabled, edges that would normally pass the filter will fail, and vice versa.

***

**Config**

_Test Config._

Internal configuration for the subnode's behavior. Typically managed by the system and not modified directly.

#### Usage Example

You have a graph with edges representing connections between points in a terrain. Each point has a "Height" attribute. You want to keep only edges where the start point is higher than the end point. Set the **Attribute** to "Height", the **Comparison** to "Strictly Greater", and leave **bInvert** unchecked.

#### Notes

* The selected attribute must be numeric (double or float).
* When using "Nearly Equal" or "Nearly Not Equal", ensure the tolerance is appropriate for your data scale.
* This filter can be combined with other edge filters to create complex selection criteria.
