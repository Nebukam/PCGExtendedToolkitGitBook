---
description: 'In editor :: PCGEx | Discard by Point Count'
icon: circle
---

# Discard by Point Count

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Filter outputs by point count.

#### Overview

This node filters clusters or point data based on the number of points they contain. It allows you to discard clusters that are either too small or too large, helping you control the granularity and size of your output data. This is useful when working with clustered point data where certain cluster sizes are undesirable for downstream processing or visual representation.

It operates on clusters or point sets and removes those that fall outside specified point count thresholds. You can configure it to remove clusters below a minimum point count, above a maximum point count, or both. The node supports optional empty output handling, which allows you to decide whether to pass through empty results when all clusters are filtered out.

{% hint style="info" %}
This node connects to **Cluster** or **Point** inputs and outputs filtered data on the main output pin.
{% endhint %}

#### How It Works

The node evaluates each cluster or point set based on its point count. For each input, it checks whether the number of points meets the configured thresholds:

1. If `bRemoveBelow` is enabled, clusters with fewer points than `MinPointCount` are discarded.
2. If `bRemoveAbove` is enabled, clusters with more points than `MaxPointCount` are discarded.
3. Clusters that pass both checks are allowed to proceed to the output.
4. If `bAllowEmptyOutputs` is enabled, even when all clusters are filtered out, an empty output is still passed through.

The filtering happens in a single pass, and the node does not modify point data directly — it decides whether to include or exclude entire clusters based on their size.

<details>

<summary>Inputs</summary>

* **Main Input**: Accepts clusters or point data.
* **Optional Filter Pin**: Not used by this node.

</details>

<details>

<summary>Outputs</summary>

* **Main Output**: Contains filtered clusters or point sets that meet the point count criteria.
* **Empty Output**: Optional, only created if `bAllowEmptyOutputs` is enabled and all input data is filtered out.

</details>

#### Configuration

<details>

<summary><strong>bRemoveBelow</strong><br><em>Don't output Clusters if they have less points than a specified amount.</em></summary>

When enabled, clusters with fewer points than the defined `MinPointCount` are discarded.

</details>

<details>

<summary><strong>MinPointCount</strong><br><em>Discarded if point count is less than</em></summary>

The minimum number of points a cluster must have to be included in the output. Any cluster with fewer points will be filtered out if `bRemoveBelow` is enabled.

**Example**: If set to 5, clusters with 4 or fewer points are discarded.

</details>

<details>

<summary><strong>bRemoveAbove</strong><br><em>Don't output Clusters if they have more points than a specified amount.</em></summary>

When enabled, clusters with more points than the defined `MaxPointCount` are discarded.

</details>

<details>

<summary><strong>MaxPointCount</strong><br><em>Discarded if point count is more than</em></summary>

The maximum number of points a cluster can have to be included in the output. Any cluster with more points will be filtered out if `bRemoveAbove` is enabled.

**Example**: If set to 100, clusters with 101 or more points are discarded.

</details>

<details>

<summary><strong>bAllowEmptyOutputs</strong><br><em>Whether or not to allow empty outputs (either discarded or not)</em></summary>

When enabled, the node will still output an empty result if all input data is filtered out. When disabled, no output is produced if all clusters are discarded.

</details>

#### Usage Example

You're generating a point cloud from a mesh and clustering the points. You want to remove very small clusters (e.g., less than 3 points) and also very large clusters (e.g., more than 1000 points) to keep your data manageable.

1. Set `bRemoveBelow` to **true**.
2. Set `MinPointCount` to **3**.
3. Set `bRemoveAbove` to **true**.
4. Set `MaxPointCount` to **1000**.
5. Set `bAllowEmptyOutputs` to **false**.

This configuration ensures only clusters with between 3 and 1000 points are passed through, discarding both tiny and overly large clusters.

#### Notes

* This node is useful for cleaning up noisy or overly dense data in point-based workflows.
* If both `bRemoveBelow` and `bRemoveAbove` are enabled, the node applies both filters.
* Empty outputs are only created when `bAllowEmptyOutputs` is enabled.
* The node works on clusters and point sets, so it's best used after clustering or point generation operations.
