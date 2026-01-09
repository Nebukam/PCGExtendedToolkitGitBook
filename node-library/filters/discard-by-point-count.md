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

This node filters clusters or point data based on the number of points they contain. It allows you to discard clusters that are either too small or too large, helping you control the granularity and size of your procedural output. This is useful when you want to exclude noisy or overly complex data from downstream processing.

{% hint style="info" %}
Connects to **Cluster** or **Point** inputs, and outputs filtered results to **Output** pins.
{% endhint %}

#### How It Works

This node evaluates each cluster or group of points in the input and compares its point count against user-defined thresholds. It operates by checking two conditions:

1. If **Remove Below** is enabled, it discards clusters with fewer points than the specified **Min Point Count**.
2. If **Remove Above** is enabled, it discards clusters with more points than the specified **Max Point Count**.

Clusters that meet both discard criteria (too few or too many points) are excluded from the output. The node supports allowing empty outputs when no clusters pass the filter, which can be useful for handling cases where all data gets filtered out.

<details>

<summary>Inputs</summary>

Accepts **Cluster** or **Point** data as input, typically from a clustering or point generation operation.

</details>

<details>

<summary>Outputs</summary>

Produces filtered **Cluster** or **Point** data based on the defined point count thresholds. Output pins are dynamically configured based on whether the node is filtering clusters or points.

</details>

#### Configuration

***

**bRemoveBelow**

_When enabled, clusters with fewer points than the specified minimum will be discarded._

Controls whether to filter out clusters that contain fewer points than the **Min Point Count** value.

**MinPointCount**

_Discarded if point count is less than_

The minimum number of points a cluster must have to be included in the output. Any cluster with fewer points is removed.

**bRemoveAbove**

_When enabled, clusters with more points than the specified maximum will be discarded._

Controls whether to filter out clusters that contain more points than the **Max Point Count** value.

**MaxPointCount**

_Discarded if point count is more than_

The maximum number of points a cluster can have to be included in the output. Any cluster with more points is removed.

**bAllowEmptyOutputs**

_Whether or not to allow empty outputs (either discarded or not)_

When enabled, allows the node to output nothing if no clusters pass the filtering criteria. When disabled, it may prevent downstream nodes from receiving valid data.

#### Usage Example

You're generating clusters of points using a clustering algorithm and want to remove very small clusters that are likely noise. Set **bRemoveBelow** to true and **Min Point Count** to 5. This ensures only clusters with at least 5 points are passed forward, discarding smaller groups.

Alternatively, if you're working with large point clouds and want to limit cluster sizes for performance reasons, set **bRemoveAbove** to true and **Max Point Count** to 1000. This will discard any cluster that contains more than 1000 points.

#### Notes

* The node works on both clusters and individual point data.
* If both **Remove Below** and **Remove Above** are enabled, only clusters with a point count within the specified range will be kept.
* This node is commonly used in preprocessing steps to clean up noisy or overly complex data before further processing.
