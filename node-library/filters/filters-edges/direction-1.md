---
description: 'In editor :: PCGEx | Edge Filter : Length'
icon: circle-dashed
---

# Length

{% hint style="warning" %}
## AI-generated page - To be reviewed. 
While not 100% accurante, it should properly capture what it does. It stills needs to be reviewed and proofread by a human.
{% endhint %}

> Filters edges based on their length, allowing you to selectively keep or discard edges that meet specific length criteria.

### Overview

This factory creates a filter that evaluates the length of each edge in a graph and determines whether it passes or fails based on a threshold value and comparison operator. It's used to control which edges are processed further in your PCG workflow.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes like **Cluster Edges** or **Graph Operations**.
{% endhint %}

### How It Works

The filter evaluates each edge in a graph and compares its length against a defined threshold. If the comparison passes, the edge is kept; otherwise, it's discarded. The behavior depends on:

* The **threshold value** (constant or from an attribute)
* The **comparison operator** (greater than, less than, equal to, etc.)
* Whether to **invert** the result

### Configuration

***

#### General

**Threshold Input**

_Whether to read the threshold from an attribute on the edge or a constant._

When set to **Attribute**, you must specify which attribute to use. When set to **Constant**, you define a fixed value.

**Values**:

* **Constant**: Use a fixed numeric value for the threshold.
* **Attribute**: Read the threshold value from an attribute on the input data.

**Threshold (Attr)**

_The attribute to fetch the threshold value from._

Only visible when **Threshold Input** is set to **Attribute**.

**Threshold**

_The constant value used as the threshold when "Threshold Input" is set to "Constant"._

This value defines the length that edges are compared against. For example, setting this to `50` means edges shorter than 50 units will be filtered out if using a "greater than" comparison.

**Comparison**

_How to compare the edge length with the threshold._

**Values**:

* **==**: Edge length must exactly equal the threshold.
* **!=**: Edge length must not equal the threshold.
* **>=**: Edge length must be greater than or equal to the threshold.
* **<=**: Edge length must be less than or equal to the threshold.
* **>**: Edge length must be strictly greater than the threshold.
* **<**: Edge length must be strictly less than the threshold.
* **\~=**: Edge length must be nearly equal to the threshold (within tolerance).
* \*\*!\~=: Edge length must not be nearly equal to the threshold (outside tolerance).

**Tolerance**

_Tolerance for approximate comparisons._

Only visible when using **Nearly Equal** or **Nearly Not Equal** comparisons. Defines how close the edge length must be to the threshold to pass the filter.

**Invert**

_When enabled, the filter result is inverted._

If enabled, edges that would normally pass the test will be filtered out, and those that fail will be kept. This allows you to exclude specific lengths rather than include them.

### Usage Example

You're building a procedural terrain where you want to keep only long roads (edges) in your graph. Set:

* **Threshold Input** to **Constant**
* **Threshold** to `100`
* **Comparison** to **Strictly Greater**
* **Invert** to **False**

This will keep only edges longer than 100 units, filtering out shorter roads.

### Notes

* The edge length is calculated as the Euclidean distance between the two points of the edge.
* Use attribute-based thresholds for dynamic filtering based on edge properties (e.g., road type or material).
* Combine multiple filters to create complex edge selection criteria.
* Invert can be useful for removing specific edge lengths from a dataset.

### Inputs

* **Filter** - The filter input pin that connects to processing nodes like Cluster Edges or Graph Operations.
* **Edge Data** - Input data containing the edges to be filtered.

### Outputs

* **Filtered Edges** - Output of the filtered edges that meet the specified criteria.
