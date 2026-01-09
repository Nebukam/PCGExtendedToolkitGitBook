---
description: 'In editor :: PCGEx | Sampler : Test Neighbors'
icon: circle-dashed
---

# Sampler : Test Neighbors

{% hint style="info" %}
### AI-generated page -- to be reviewed

While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Writes the number of neighbors that pass the provided filters.

### Overview

This node counts how many neighboring points satisfy your filter criteria and writes those counts as attributes on the target points. It's useful for analyzing local neighborhood properties, such as how many nearby points meet certain conditions like being within a specific distance, having particular attributes, or matching a certain type.

You can configure it to count neighbors that pass (inside) or fail (outside) your filters, and optionally normalize these counts by the total number of neighbors or their combined weight. This is helpful for creating density-like attributes or comparing neighborhoods of different sizes.

{% hint style="info" %}
This node requires a neighbor sampling context to function. It must be used within a graph that has established neighbor relationships (e.g., using a "Flood Fill" or "Cluster" node).
{% endhint %}

<details>

<summary>Inputs</summary>

* **Default**: Points to sample neighbors for
* **Filters** (Optional): Filters to apply when testing neighbors

</details>

<details>

<summary>Outputs</summary>

* **Sampler**: The modified points with new attributes added based on neighbor test results

</details>

### Properties Overview

Controls how the neighbor tests are performed and which attributes are written.

***

#### Sampling Settings

Configures how the node counts neighbors that pass or fail filters.

**Write Inside Num**

_When enabled, writes the count of neighbors that passed the filters._

* How it affects results: Adds a new integer attribute with the number of passing neighbors
* Value ranges: Integer values representing neighbor counts

**Inside Num Attribute Name**

_Name of the attribute to write the number of tests that passed (inside filters)._

* How it affects results: Determines where the inside count is stored on each point
* Value ranges: Any valid attribute name

**Normalize Inside Num**

_When enabled, outputs the inside count divided by the total number of neighbors._

* How it affects results: Produces a normalized value between 0 and 1 for easier comparison across different neighborhood sizes

**Write Outside Num**

_When enabled, writes the count of neighbors that failed the filters._

* How it affects results: Adds a new integer attribute with the number of failing neighbors
* Value ranges: Integer values representing neighbor counts

**Outside Num Attribute Name**

_Name of the attribute to write the number of tests that failed (outside filters)._

* How it affects results: Determines where the outside count is stored on each point
* Value ranges: Any valid attribute name

**Normalize Outside Num**

_When enabled, outputs the outside count divided by the total number of neighbors._

* How it affects results: Produces a normalized value between 0 and 1 for easier comparison across different neighborhood sizes

**Write Total Num**

_When enabled, writes the total number of neighbors tested._

* How it affects results: Adds a new integer attribute with the total neighbor count
* Value ranges: Integer values representing neighbor counts

**Total Num Attribute Name**

_Name of the attribute to write the total number of points tested._

* How it affects results: Determines where the total count is stored on each point
* Value ranges: Any valid attribute name

***

#### Weighted Sampling Settings

Controls how weights are used in the neighbor tests.

**Write Inside Weight**

_When enabled, writes the total weight of neighbors that passed the filters._

* How it affects results: Adds a new double attribute with the sum of passing neighbor weights
* Value ranges: Double values representing accumulated weights

**Inside Weight Attribute Name**

_Name of the attribute to write the number of tests weight that passed (inside filters)._

* How it affects results: Determines where the inside weight is stored on each point
* Value ranges: Any valid attribute name

**Normalize Inside Weight**

_When enabled, outputs the inside weight divided by the total weight of neighbors._

* How it affects results: Produces a normalized value between 0 and 1 for easier comparison across different neighborhood weights

**Write Outside Weight**

_When enabled, writes the total weight of neighbors that failed the filters._

* How it affects results: Adds a new double attribute with the sum of failing neighbor weights
* Value ranges: Double values representing accumulated weights

**Outside Weight Attribute Name**

_Name of the attribute to write the number of tested weight that passed (inside filters)._

* How it affects results: Determines where the outside weight is stored on each point
* Value ranges: Any valid attribute name

**Normalize Outside Weight**

_When enabled, outputs the outside weight divided by the total weight of neighbors._

* How it affects results: Produces a normalized value between 0 and 1 for easier comparison across different neighborhood weights

**Write Total Weight**

_When enabled, writes the total weight of all neighbors tested._

* How it affects results: Adds a new double attribute with the sum of all neighbor weights
* Value ranges: Double values representing accumulated weights

**Total Weight Attribute Name**

_Name of the attribute to write the total weight tested._

* How it affects results: Determines where the total weight is stored on each point
* Value ranges: Any valid attribute name

### Notes

* The node only works when used within a graph that has established neighbor relationships.
* Use normalized values when comparing neighborhoods of different sizes or weights.
* Combine this with other sampling nodes to build complex neighborhood analysis workflows.
* Consider using the "Neighbor Sample" node as a base for more advanced neighbor-based operations.
