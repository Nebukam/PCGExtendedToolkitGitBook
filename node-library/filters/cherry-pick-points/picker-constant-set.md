---
description: 'In editor :: PCGEx | Picker : Indices from Set'
icon: circle-dashed
---

# Picker : Indices from Set

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> A Picker subnode that reads lists of indices from attributes and uses them to select points or elements.

#### Overview

This Picker subnode allows you to define which indices to pick from your data using one or more existing attributes. Instead of hardcoding values, it reads index lists directly from point attributes, making it flexible for dynamic selection based on input data. It's especially useful when you have precomputed sets of indices stored in attributes and want to use those as the basis for picking.

{% hint style="info" %}
Connects to **Picker** processing nodes that require a list of indices to pick.
{% endhint %}

#### How It Works

This Picker subnode reads index values from one or more point attributes. Each attribute is expected to contain a list of integers representing indices. These indices are used to select elements (such as points or edges) from the input data.

The node supports negative indices, which allow you to pick from the end of the list. For example, an index of `-1` refers to the last element, `-2` to the second-to-last, and so on.

When multiple attributes are provided, it combines their values into a single set of picks. If an attribute contains invalid or out-of-bounds indices, the behavior is controlled by the **Index Safety** setting in the Picker configuration, which can ignore, tile, clamp, or mirror such indices.

<details>

<summary>Inputs</summary>

* Expects point data with attributes containing integer lists.
* Each attribute must be a valid integer array (e.g., `int[]`, `int32[]`).

</details>

<details>

<summary>Outputs</summary>

* Provides a list of indices to pick from the input data.
* These indices are used by the connected Picker node to determine which elements to select.

</details>

#### Configuration

***

**Attributes**

_List of attributes to read individual indices from. Use negative values to select from the end._

Each attribute contains a list of integer indices that will be used for selection. You can specify multiple attributes, and their values are combined into one set of picks. Negative values are interpreted as reverse indexing (e.g., `-1` is the last element).

#### Usage Example

You have a point cloud with an attribute called `PickList` that contains lists of indices like `[0, 3, 5]`. You connect this Picker subnode to a Picker node and configure it to read from the `PickList` attribute. The Picker will then select points at indices 0, 3, and 5 from your input data.

#### Notes

* If no attributes are specified in the details panel, the node defaults to using the first available attribute.
* Index safety settings in the parent Picker node control how out-of-bounds indices are handled.
* This subnode is ideal for dynamic selection workflows where index lists are computed or stored in point attributes.
