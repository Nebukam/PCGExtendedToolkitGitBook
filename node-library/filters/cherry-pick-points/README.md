---
description: 'In editor :: PCGEx | Cherry Pick Points'
icon: scrubber
---

# Cherry Pick Points

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Filter points by indices, either read from local attributes or using external sources.

#### Overview

The Cherry Pick Points node allows you to selectively keep or discard specific points from a dataset based on predefined indices. These indices can come from an attribute within the input data or from external sources connected to the node. This is useful for extracting specific elements from a larger point cloud, such as selecting certain locations for further processing or removing unwanted points.

{% hint style="info" %}
Connects to **Points** processing nodes and supports subnodes for defining how indices are sourced.
{% endhint %}

#### How It Works

This node operates by reading a list of indices that define which points should be kept or discarded. It evaluates each point in the input dataset against these indices:

1. If the source is set to **Self**, it reads the indices from an attribute on the input data.
2. If the source is set to **Sources**, it uses indices provided by external subnodes connected to the node's input pins.
3. For each point, it checks if its index matches one of the specified indices:
   * When **Invert** is disabled, points with matching indices are kept.
   * When **Invert** is enabled, points with matching indices are discarded.
4. If **Output Discarded Points** is enabled, discarded points are sent to a separate output dataset.
5. The node can optionally allow empty outputs when no points match the criteria.

<details>

<summary>Inputs</summary>

* **Main Input**: A point dataset from which points are filtered.
* **Sources (optional)**: Additional input pins that provide index lists for filtering, used when the source is set to "Sources".

</details>

<details>

<summary>Outputs</summary>

* **Output Points**: The filtered point dataset containing either the selected or discarded points, depending on the settings.
* **Discarded Points (optional)**: A separate output dataset containing points that were discarded if **Output Discarded Points** is enabled.

</details>

#### Configuration

***

**bInvert**

_Whether to invert the picking (picked indices will be discarded instead or kept)._

When enabled, the node keeps all points except those whose indices match the specified list. When disabled, only points with matching indices are retained.

**bOutputDiscardedPoints**

_Whether to output discard points to their own dataset._

When enabled, points that are filtered out are sent to a separate output pin named "Discarded Points". This allows you to process or visualize discarded elements separately from the main result.

**bAllowEmptyOutputs**

_Whether to output discard points collections to be empty._

When enabled, even if no points match the filtering criteria, an empty output dataset is still generated. When disabled, no output is produced for discarded points if none are filtered out.

#### Usage Example

You have a point cloud representing a forest with each point being a tree location. You want to extract only the trees at specific indices (e.g., every 5th tree) and discard the rest. You can use this node with the **Self** source, where an attribute on the input points contains the desired indices. Alternatively, you could connect a subnode that generates these indices dynamically, using the **Sources** option.

#### Notes

* The node supports both single and multiple data inputs for flexibility in how point data is structured.
* Using the **Invert** option allows for easy exclusion of specific points instead of inclusion.
* When using external sources, ensure that the subnode providing indices is properly configured to output integer arrays or lists compatible with this node.
