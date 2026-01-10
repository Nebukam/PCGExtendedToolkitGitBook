---
description: 'In editor :: PCGEx | Picker : Indices from Set'
icon: circle-dashed
---

# Picker : Indices from Set

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Reads a list of indices from one or more attributes and uses them as picks for point selection.

#### How It Works

This node collects index values from specified attributes and converts them into a set of point selections. Each attribute contains a list of numbers that represent positions within your dataset. These numbers are interpreted as indices, where each index corresponds to a specific point in your data.

The node reads all values from each selected attribute and compiles them into a unified list of picks. These picks can then be used by downstream nodes to select specific points. Negative numbers count from the end of the dataset (for example, -1 selects the last point, -2 the second-to-last).

#### Configuration

<details>

<summary><strong>Attributes</strong><br><em>List of attributes to read individual indices from. Use negative values to select from the end.</em></summary>

Specifies which attributes contain the indices to use for picking.

* If no attribute is specified, it will use the first available one
* Each value in an attribute represents an index into the point data
* Negative values count from the end of the dataset (e.g., -1 = last point)
* Multiple attributes can be used to combine different sets of indices

</details>

{% hint style="info" %}
Connects to \*\*Picker\*\* pins on processing nodes that require index-based selection.
{% endhint %}

#### Usage Example

1. Create a set of points representing a terrain or mesh
2. Add integer attributes to these points containing desired indices (e.g., "PickIndices")
3. Configure this node with the attribute(s) containing your indices
4. Connect the output to a picker-consuming node like "Cherry Pick Points"
5. The node will select only the points at the specified indices

#### Notes

* Indices are 0-based, meaning index 0 refers to the first point
* Out-of-bounds indices are handled according to the safety mode set in the picker configuration
* Multiple attributes can be used to combine different sets of indices into a single picker
* If no attribute is explicitly set, the node will attempt to use the first available one
