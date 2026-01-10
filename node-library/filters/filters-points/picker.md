---
description: 'In editor :: PCGEx | Filter : Picker'
icon: circle-dashed
---

# Picker

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Creates a filter definition that checks if the point or collection index is picked, using picker subnodes.

#### How It Works

The Picker Filter Subnode evaluates whether a point or collection index is included in a set of selected indices. It acts as a conditional gate that allows or rejects data based on predefined selections. This is useful when you want to selectively process only certain points or collections from a larger dataset.

It operates by using picker subnodes to define which indices should be considered "picked". These picks are then used to determine if a point or collection passes the filter.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes.
{% endhint %}

#### Configuration

<details>

<summary><strong>bForcePerPointEvaluation</strong><br><em>If enabled, will force per-point evaluation when used in collections only.</em></summary>

When enabled, ensures that the filter evaluates each point individually, even when processing collections. This is useful if you want consistent behavior between single points and collections.

</details>

<details>

<summary><strong>bInvert</strong><br><em>Invert the filter</em></summary>

When enabled, reverses the filter result. Points that would normally pass now fail, and those that fail now pass.

</details>

#### Usage Example

1. Create a Picker Subnode (e.g., a Random Picker or Index Picker) to define which indices are picked.
2. Connect this picker to the Filter : Picker Subnode.
3. Use the Filter : Picker Subnode in a processing node like "Filter Points" or "Process Collections".
4. The filter will now only pass points or collections whose indices match those defined by the picker.

#### Notes

* Multiple picker subnodes can be connected to define complex pick sets.
* This filter works with both individual points and collections.
* Be cautious when using with large datasets — picking logic should be efficient to avoid performance bottlenecks.
