---
description: 'In editor :: PCGEx | Sampler : Test Neighbors'
icon: circle-dashed
---

# Sampler : Test Neighbors

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Tests neighbors against filters and writes counts of passing and failing samples to attributes.

#### How It Works

This node evaluates each point in a cluster by checking its neighboring points against a set of conditions defined in a **Filter Subnode**. For every neighbor, it determines whether the neighbor meets the filter criteria or not.

* If a neighbor meets the filter criteria:
  * Its weight is added to the "inside weight" total.
  * The neighbor count is incremented for "inside count".
* If a neighbor does not meet the filter criteria:
  * Its weight is added to the "outside weight" total.
  * The neighbor count is incremented for "outside count".

At the end of processing, it writes these counts (and optionally normalized values) into new attributes on each point. These can include:

* Number of neighbors that passed the filters
* Number of neighbors that failed the filters
* Total number of neighbors tested
* Weighted sum of neighbors that passed the filters
* Weighted sum of neighbors that failed the filters
* Total weight of neighbors tested

Normalization options allow you to express results as ratios (e.g., "what fraction of neighbors passed the filter").

#### ConfigurationConnects to **Neighbor Sampler** processing nodes. Requires a **Filter Subnode** to define the conditions for passing/failing.

<details>

<summary><strong>bWriteInsideNum</strong><br><em>If enabled, writes the number of neighbors that passed the filters.</em></summary>

When enabled, this setting creates an attribute to store how many neighbors passed the filter criteria for each point.

</details>

<details>

<summary><strong>InsideNumAttributeName</strong><br><em>Name of the attribute to write the number of tests that passed (inside filters).</em></summary>

The name of the attribute where the count of passing neighbors is stored. Defaults to "InsideNum".

</details>

<details>

<summary><strong>bNormalizeInsideNum</strong><br><em>If enabled, outputs the value divided by the total number of samples.</em></summary>

When enabled, the inside neighbor count is normalized by dividing it by the total number of neighbors tested.

</details>

<details>

<summary><strong>bWriteOutsideNum</strong><br><em>If enabled, writes the number of neighbors that failed the filters.</em></summary>

When enabled, this setting creates an attribute to store how many neighbors failed the filter criteria for each point.

</details>

<details>

<summary><strong>OutsideNumAttributeName</strong><br><em>Name of the attribute to write the number of tests that failed (outside filters).</em></summary>

The name of the attribute where the count of failing neighbors is stored. Defaults to "OutsideNum".

</details>

<details>

<summary><strong>bNormalizeOutsideNum</strong><br><em>If enabled, outputs the value divided by the total number of samples.</em></summary>

When enabled, the outside neighbor count is normalized by dividing it by the total number of neighbors tested.

</details>

<details>

<summary><strong>bWriteTotalNum</strong><br><em>If enabled, writes the total number of neighbors tested.</em></summary>

When enabled, this setting creates an attribute to store how many neighbors were evaluated for each point.

</details>

<details>

<summary><strong>TotalNumAttributeName</strong><br><em>Name of the attribute to write the total number of points tested.</em></summary>

The name of the attribute where the total neighbor count is stored. Defaults to "TotalNum".

</details>

<details>

<summary><strong>bWriteInsideWeight</strong><br><em>If enabled, writes the total weight of neighbors that passed the filters.</em></summary>

When enabled, this setting creates an attribute to store the cumulative weight of neighbors that passed the filter criteria.

</details>

<details>

<summary><strong>InsideWeightAttributeName</strong><br><em>Name of the attribute to write the number of tests weight that passed (inside filters).</em></summary>

The name of the attribute where the total passing weight is stored. Defaults to "InsideWeight".

</details>

<details>

<summary><strong>bNormalizeInsideWeight</strong><br><em>If enabled, outputs the value divided by the total weight of samples.</em></summary>

When enabled, the inside weight count is normalized by dividing it by the total weight of all neighbors tested.

</details>

<details>

<summary><strong>bWriteOutsideWeight</strong><br><em>If enabled, writes the total weight of neighbors that failed the filters.</em></summary>

When enabled, this setting creates an attribute to store the cumulative weight of neighbors that failed the filter criteria.

</details>

<details>

<summary><strong>OutsideWeightAttributeName</strong><br><em>Name of the attribute to write the number of tested weight that passed (inside filters).</em></summary>

The name of the attribute where the total failing weight is stored. Defaults to "OutsideWeight".

</details>

<details>

<summary><strong>bNormalizeOutsideWeight</strong><br><em>If enabled, outputs the value divided by the total weight of samples.</em></summary>

When enabled, the outside weight count is normalized by dividing it by the total weight of all neighbors tested.

</details>

<details>

<summary><strong>bWriteTotalWeight</strong><br><em>If enabled, writes the total weight of neighbors tested.</em></summary>

When enabled, this setting creates an attribute to store the cumulative weight of all neighbors evaluated for each point.

</details>

<details>

<summary><strong>TotalWeightAttributeName</strong><br><em>Name of the attribute to write the total weight tested.</em></summary>

The name of the attribute where the total neighbor weight is stored. Defaults to "TotalWeight".

</details>

<details>

<summary><strong>Config</strong><br><em>Sampler Settings.</em></summary>

A collection of settings that define which attributes are written and how they are normalized.

</details>

#### Usage Example

You have a point cloud representing terrain features, and you want to know how many nearby points (within a certain distance) have a height value above a threshold. You can use this node with a **Filter Subnode** that checks the height attribute. Then, for each point, it will write:

* The number of neighbors that are higher than the threshold
* The number of neighbors that are lower than the threshold
* The total number of neighbors tested

This allows you to create features like "steepness" or "height variation" maps directly from your point data.

#### Notes

* This node works best with neighbor relationships already defined in the graph (e.g., from a **Find Neighbors** node).
* If no filters are applied, all neighbors will be counted as passing.
* Normalization is useful for comparing results across clusters or datasets of different sizes.
* Attribute names can be customized to match your workflow's naming conventions.
