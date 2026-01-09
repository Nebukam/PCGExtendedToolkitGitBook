---
description: 'In editor :: PCGEx | Sample Nearest Surface'
icon: scrubber
---

# Sample Neighbors

{% hint style="warning" %}
## AI-generated page - To be reviewed. 
While not 100% accurante, it should properly capture what it does. It stills needs to be reviewed and proofread by a human.
{% endhint %}

> Sample values from neighboring points in a cluster and write them to the current point.

### Overview

This node allows you to gather data from nearby points within a cluster and store it as new tags on the current point. It's useful for creating local influence effects, such as averaging neighbor properties, finding the closest neighbor, or collecting multiple neighbors based on distance or sorting criteria.

You can sample values from either the points themselves (vtx) or from edges connecting to those points. The node supports various sampling methods and allows you to define how many neighbors to collect and how to sort them.

{% hint style="info" %}
This node works within clusters, so it expects input data to be organized into clusters. It will process each cluster separately.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input (Points)**: Points that define the cluster structure and are used as the base for sampling.
* **Edges**: Optional edge data defining relationships between points in the cluster.

</details>

<details>

<summary>Outputs</summary>

* **Output Points**: Points with new tags added from sampled neighbor values.
* **Output Edges**: Optional, if enabled, outputs modified edges.

</details>

### Properties Overview

Settings for controlling how neighbors are selected and sampled.

***

#### Sampling Settings

Controls the method and parameters for selecting neighbors to sample from.

**Sample From**

_Whether to sample data from points or edges._

* When set to **Point**, values are fetched from the point being evaluated.
* When set to **Edge**, values are fetched from the edge connecting to the point being evaluated.

**Values**:

* **Point**: Value is fetched from the point being evaluated.
* **Edge**: Value is fetched from the edge connecting to the point being evaluated.

**Max Distance**

_Maximum distance at which a neighbor can be considered._

* Use `-1` or `0` to ignore distance checks and consider all neighbors within the cluster.
* Positive values limit sampling to neighbors within that distance.

**Sampling Method**

_How to select neighbors from the cluster._

* **Closest vtx**: Selects neighbors based on proximity to the point's position.
* **Closest edge**: Selects neighbors based on proximity to the connecting edge, then to endpoints.

**Values**:

* **Closest vtx**: Proximity to node position
* **Closest edge**: Proximity to edge, then endpoint

**Number of Samples**

_Number of neighbors to sample from._

* Determines how many neighbor values are collected and stored.
* If set to `0`, no sampling occurs.
* If more samples are requested than available neighbors, all available neighbors will be used.

**Sort Neighbors**

_Whether to sort neighbors before sampling._

* When enabled, neighbors are sorted based on the specified sorting rules before sampling.
* Sorting is applied per cluster and can improve consistency of results.

**Sort Rules**

_Configuration for how neighbors are sorted._

* Defines which tags to use for sorting and whether to invert the order.
* Multiple rules can be added to create complex sorting behavior.

***

#### Output Settings

Controls how sampled values are written to output points.

**Output Tags**

_Tags to write sampled values into._

* Each tag corresponds to a sampled neighbor value.
* If more samples are taken than tags, only the first N samples will be written.
* If fewer samples are taken than tags, unused tags will remain empty.

**Tag Prefix**

_Prefix added to all output tag names._

* Helps organize and identify sampled data in the output.
* Example: If prefix is `Neighbor`, output tags would be `Neighbor0`, `Neighbor1`, etc.

**Use Index as Tag Suffix**

_Whether to append neighbor index to output tags._

* When enabled, adds a numeric suffix to each tag (e.g., `MyTag0`, `MyTag1`).
* When disabled, all samples are written to the same tag name.

**Sample Value Test**

_Whether to perform a value test on sampled neighbors._

* When enabled, only neighbors whose values meet a specified condition are included in sampling.
* Useful for filtering based on criteria like distance or specific value ranges.

**Value Test Tag**

_Tag used for testing neighbor values._

* Specifies which tag's value should be tested against the threshold.
* Only neighbors with matching values will be considered for sampling.

**Value Test Threshold**

_Threshold value for neighbor selection._

* Neighbors must meet this condition to be included in sampling.
* Can be a fixed number or a dynamic value from another tag.

**Value Test Invert**

_Invert the value test condition._

* When enabled, neighbors that do NOT match the threshold will be selected.
* Useful for excluding certain values from sampling.
