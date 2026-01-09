---
description: 'In editor :: PCGEx | Edge Filter : Neighbors Count'
icon: circle-dashed
---

# Neighbors Count

{% hint style="warning" %}
## AI-generated page - To be reviewed. 
While not 100% accurante, it should properly capture what it does. It stills needs to be reviewed and proofread by a human.
{% endhint %}

> Filters edges based on the number of neighbors (adjacent connections) at their endpoints.

### Overview

This filter evaluates edges in a graph based on how many connections each endpoint has. It's useful for identifying specific edge types, such as bridges (edges connecting high-degree nodes), or filtering out isolated or sparsely connected edges.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes like **Refine Edges** or **Filter Edges**.
{% endhint %}

### How It Works

The filter checks the adjacency count (number of connections) at each endpoint of an edge. Depending on the mode selected, it can:

* Compare the sum of both endpoints' neighbor counts against a threshold
* Require that at least one endpoint meets the threshold
* Require that both endpoints individually meet the threshold

It then applies a comparison operator to determine if the edge passes the filter.

### Inputs

* **Edges**: The input graph edges to filter
* **Threshold Attribute** (optional): Attribute containing threshold values for each edge

### Outputs

* **Passed**: Edges that meet the filter criteria
* **Failed**: Edges that do not meet the filter criteria

### Configuration

***

#### General

**Threshold Input**

_Whether to read the threshold from an attribute on the edge or a constant._

When set to **Attribute**, you must specify which attribute to use. When set to **Constant**, you define the value directly.

**Values**:

* **Constant**: Use a fixed number as the threshold
* **Attribute**: Read the threshold value from an attribute

**Threshold (Attr)**

_The attribute to fetch threshold from._

Only visible when **Threshold Input** is set to **Attribute**.

**Threshold**

_The number of connections that must be present at endpoints to pass the filter._

Only visible when **Threshold Input** is set to **Constant**. Must be at least 1.

**Mode**

_How should we check if the threshold is reached._

Controls how the neighbor counts are evaluated.

**Values**:

* **Sum**: The total neighbor count of both endpoints is compared against the threshold
* **Any Endpoint**: At least one endpoint must have a neighbor count that meets the threshold
* **Both Endpoints**: Both endpoints must individually meet the threshold

**Comparison**

_Comparison check._

Determines how the evaluated value is compared to the threshold.

**Values**:

* **==**: Equal to
* **!=**: Not equal to
* **>=**: Greater than or equal to
* **<=**: Less than or equal to
* **>**: Greater than
* **<**: Less than
* **\~=**: Nearly equal to (with tolerance)
* **!\~=**: Nearly not equal to (with tolerance)

**Tolerance**

_Rounding mode for approximate comparison modes._

Only visible when **Comparison** is set to **Nearly Equal** or **Nearly Not Equal**.

**Invert**

_When enabled, the filter result is inverted._

If enabled, edges that would have passed now fail and vice versa.
