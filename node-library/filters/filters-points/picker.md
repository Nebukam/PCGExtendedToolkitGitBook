---
description: 'In editor :: PCGEx | Filter : Picker'
icon: circle-dashed
---

# Picker

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Creates a filter definition that checks if the point or collection index is picked, using pickers.

#### Overview

This subnode defines a filtering behavior that determines whether individual points or collections pass a test based on whether their indices are "picked" by one or more picker subnodes. It allows you to selectively include or exclude elements in your procedural pipeline by referencing predefined selection criteria from picker nodes.

It's commonly used when you want to apply filters conditionally, such as only processing a subset of points or collections that match specific index ranges, patterns, or selections defined elsewhere in your graph.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes.
{% endhint %}

#### How It Works

This filter evaluates each point or collection against a set of "picked" indices. These picked indices are defined by picker subnodes connected to the parent node. The filter checks if the index of the current item (point or collection) is included in those picks.

If the item's index matches one of the picked indices, it passes the filter unless the invert toggle is enabled, which flips the result. This behavior allows for both inclusion and exclusion logic depending on how you configure the picker and the filter.

The evaluation mode can be set to force per-point or collection-based processing, ensuring compatibility with different data structures in your graph.

<details>

<summary>Inputs</summary>

* **Filter pin**: Accepts a reference to this filter subnode.
* **Picker pins**: Connected to picker subnodes that define which indices are "picked".

</details>

<details>

<summary>Outputs</summary>

* **Filtered data**: Points or collections that pass the filter condition.

</details>

#### Configuration

***

**bForcePerPointEvaluation**

_If enabled, will force per-point evaluation when used in collections only._

When enabled, this setting ensures that even if the filter is applied to a collection, it evaluates each point individually rather than treating the entire collection as a single unit.

**bInvert**

_Invert the filter_

When enabled, the filter behavior is inverted. Points or collections that would normally pass the filter will fail, and vice versa.

**Config**

_Filter Config._

A container for settings related to how the filter behaves, including evaluation mode and inversion options.

#### Usage Example

1. Create a **Picker : Index** subnode and configure it to pick indices 0, 5, and 10.
2. Add a **Filter : Picker** subnode to your graph.
3. Connect the **Picker : Index** node to the **Picker** pin of the **Filter : Picker** node.
4. Connect the **Filter : Picker** node to a **Filter** pin on a processing node (e.g., a **Point Spawner**).
5. The processing node will now only operate on points with indices 0, 5, and 10.

#### Notes

* Multiple picker subnodes can be connected to a single filter subnode to combine different selection criteria.
* This filter works with both individual points and collections, depending on how the evaluation mode is set.
* The **bInvert** option allows for flexible logic without needing multiple filter nodes.
