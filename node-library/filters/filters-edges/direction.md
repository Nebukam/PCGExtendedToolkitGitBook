---
description: 'In editor :: PCGEx | Edge Filter : Edge Direction'
icon: circle-dashed
---

# Direction

{% hint style="warning" %}
## AI-generated page - To be reviewed. 
While not 100% accurante, it should properly capture what it does. It stills needs to be reviewed and proofread by a human.
{% endhint %}

> Filters edges based on the dot product comparison between the edge direction and a reference direction.

### Overview

This factory creates a filter that evaluates whether an edge's direction aligns with a specified reference direction. It's used to selectively keep or discard edges based on their orientation relative to a given vector.

{% hint style="info" %}
Connects to **Filter** pins on edge processing nodes like "Path Builder", "Cluster Filter", or other nodes that accept edge filters.
{% endhint %}

### How It Works

The filter compares the direction of each edge against a reference vector using either:

* A precise dot product comparison
* A fast hash-based comparison with tolerance

It determines if an edge should be included in downstream processing based on this directional relationship.

### Inputs

* **Edge Data**: The collection of edges to filter
* **Point Data**: The point data used for attribute lookups and transforms

### Outputs

* **Filtered Edges**: The subset of edges that pass the directional test

### Configuration

***

#### General

**Direction Settings**

_Controls how the edge's direction is determined._

The filter needs to know which way each edge points. You can configure it to:

* Use the edge's start and end point indices directly
* Sort endpoints using custom rules
* Read a vector attribute from the edge data to determine direction
* Use the edge's own directional vector if available

**Comparison Quality**

_Determines how precise the comparison is._

* **Dot (Precise)**: Uses full dot product calculation for accurate results
* **Hash (Fast)**: Uses simplified hash comparison, faster but less precise

**Compare Against**

_Specifies where the reference direction comes from._

* **Constant**: Use a fixed vector value you define
* **Attribute**: Read the reference direction from a point attribute

**Direction (Attr)**

_The attribute to read the reference direction from._

Only visible when "Compare Against" is set to "Attribute". Selects which point attribute contains the reference vector.

**Invert Direction**

_Reverse the reference direction before comparison._

When enabled, the filter uses the opposite of the selected attribute's vector value.

**Direction**

_The fixed reference vector used for comparison._

Only visible when "Compare Against" is set to "Constant". Defines the vector against which edges are compared.

**Transform Direction**

_Apply local point transforms to the reference direction._

When enabled, the reference direction is transformed by each point's local transform before comparison. Useful for aligning with world space or object-relative directions.

***

#### Dot Comparison Settings

_Configures the dot product test parameters._

**Tolerance**

_The acceptable deviation from perfect alignment._

A value of 0 means the edge must be perfectly aligned. Higher values allow more deviation.

**Invert Result**

_Change the comparison outcome._

When enabled, edges that would normally pass now fail, and vice versa.

***

#### Hash Comparison Settings

_Configures the fast hash-based test parameters._

**Tolerance**

_The tolerance for the hash comparison._

Higher values make the comparison more lenient, allowing more edges to pass through.

**Invert Result**

_Change the comparison outcome._

When enabled, edges that would normally pass now fail, and vice versa.
