---
description: 'In editor :: PCGEx | Edge Filter : Neighbors Count'
icon: circle-dashed
---

# Neighbors Count

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Check if an edge's endpoints meet a specified neighbor count threshold.

#### Overview

This subnode filters edges based on how many connections (neighbors) their start and end points have in the graph. It is useful for identifying edges that connect nodes with specific connectivity levels, such as bridges or bottlenecks in network structures.

It connects to **Filter** pins on processing nodes that handle edge data.

#### How It Works

This subnode evaluates whether an edge meets a defined threshold based on the number of neighbors (connections) its endpoints have. The behavior depends on the selected **Mode**:

* **Sum**: Adds up the neighbor counts of both endpoints and compares that total against the threshold.
* **Any Endpoint**: Checks if at least one endpoint has enough neighbors to pass the comparison.
* **Both Endpoints**: Requires both endpoints to individually meet the comparison against the threshold.

The **Comparison** type determines how the neighbor count is compared to the threshold (e.g., greater than, equal to, etc.). Optionally, you can invert the result using the **Invert** toggle.

<details>

<summary>Inputs</summary>

This subnode expects edge data with associated point data that contains neighbor information. It uses the adjacency relationships between points to determine how many neighbors each endpoint has.

</details>

<details>

<summary>Outputs</summary>

This subnode does not produce new data but defines a filtering condition for edges. Edges that pass the filter will be included in downstream processing steps.

</details>

#### Configuration

***

**Threshold Input**

_Whether to read the threshold from an attribute on the edge or a constant._

When set to **Attribute**, the subnode reads the threshold value from a specified point or edge attribute. When set to **Constant**, it uses the fixed value defined in the **Threshold** setting.

**Threshold (Constant)**

\_Display: "Threshold", _The number of connection endpoints must have to be considered a Bridge._

Defines the minimum neighbor count required for an edge to pass the filter, when using a constant threshold.

**Values**:

* **1**: Only edges where at least one endpoint has 1 neighbor will pass.
* **2**: Only edges where both endpoints have at least 2 neighbors will pass (for "Both Endpoints" mode).

**Mode**

_How should we check if the threshold is reached._

Controls how the neighbor counts of the edge's endpoints are evaluated against the threshold.

**Values**:

* **Sum**: The total neighbor count of both endpoints is compared against the threshold.
* **Any Endpoint**: At least one endpoint must meet the comparison against the threshold.
* **Both Endpoints**: Both endpoints must individually pass the comparison against the threshold.

**Comparison**

_Comparison check_

Determines how the neighbor count is compared to the threshold value.

**Values**:

* **==**: Strictly equal
* **!=**: Strictly not equal
* **>=**: Equal or greater than
* **<=**: Equal or smaller than
* **>**: Strictly greater than
* **<**: Strictly smaller than
* **\~=**: Nearly equal (with tolerance)
* **!\~=**: Nearly not equal (with tolerance)

**Tolerance**

_Rounding mode for approx. comparison modes_

Used only when using **Nearly Equal** or **Nearly Not Equal** comparisons. Defines the acceptable difference between values.

**Invert**

_Whether to invert the filter result._

When enabled, edges that would normally pass the filter will be rejected, and vice versa.

#### Usage Example

Use this subnode to identify "bridge" edges in a graph — those connecting nodes with high connectivity. For example:

* Set **Mode** to **Both Endpoints**
* Set **Comparison** to **>=**
* Set **Threshold** to 3
* This will select edges where both endpoints have at least 3 neighbors, effectively filtering for strong connections.

#### Notes

* The neighbor count is determined by the graph's structure and adjacency data.
* Using **Any Endpoint** mode can help identify edges connected to highly connected nodes.
* Combining this filter with other edge filters allows for complex graph analysis.
