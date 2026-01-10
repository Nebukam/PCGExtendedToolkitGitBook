---
description: 'In editor :: PCGEx | Discard Same'
icon: circle
---

# Discard Same

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Discard entire datasets based on a selection of parameters.

#### How It Works

The Discard Same node compares incoming collections of point data to identify and remove duplicates. It evaluates each collection against others using configurable criteria such as bounding box size, number of points, point positions, or attribute values. When two or more collections are considered the same according to these rules, the node applies a discard mode to determine which ones to keep.

The process works by comparing every collection in a batch with all others. If a match is found based on the selected criteria and tolerance settings, the duplicate collections are removed according to the chosen mode:

* **FIFO** keeps the first collection encountered and discards subsequent duplicates.
* **LIFO** keeps the last collection encountered and discards earlier duplicates.
* **All** discards all collections that have duplicates.

This helps clean up procedural workflows by removing redundant or overlapping datasets, ensuring only unique collections remain in the output.

#### Configuration

<details>

<summary><strong>Mode</strong><br><em>How to handle duplicate collections.</em></summary>

Controls which collection is kept when duplicates are found.

* **FIFO**: Keeps the first collection and discards subsequent duplicates.
* **LIFO**: Keeps the last collection and discards earlier duplicates.
* **All**: Discards all collections that have duplicates.

</details>

<details>

<summary><strong>TestMode</strong><br><em>How to combine multiple tests.</em></summary>

Determines how multiple comparison criteria are combined.

* **AND**: All selected tests must pass for a collection to be discarded.
* **OR**: Only one of the selected tests needs to pass for a collection to be discarded.

</details>

<details>

<summary><strong>bTestBounds</strong><br><em>Enable bounds comparison.</em></summary>

When enabled, compares the bounding boxes of collections to determine if they are duplicates.

</details>

<details>

<summary><strong>TestBoundsTolerance</strong><br><em>Tolerance for bounds equality.</em></summary>

Defines how close two bounds must be to be considered equal. Must be greater than 0.

</details>

<details>

<summary><strong>bTestPointCount</strong><br><em>Enable point count comparison.</em></summary>

When enabled, compares the number of points in each collection to determine if they are duplicates.

</details>

<details>

<summary><strong>TestPointCountTolerance</strong><br><em>Tolerance for point count equality.</em></summary>

Defines how different two point counts can be and still be considered equal. Must be greater than or equal to 0.

</details>

<details>

<summary><strong>bTestPositions</strong><br><em>Enable position comparison.</em></summary>

When enabled, compares the actual positions of points in collections to determine if they are duplicates.

</details>

<details>

<summary><strong>TestPositionTolerance</strong><br><em>Tolerance for position equality.</em></summary>

Defines how close two point positions must be to be considered equal. Must be greater than 0.

</details>

<details>

<summary><strong>TestAttributesHash</strong><br><em>How to use attribute hashes in comparison.</em></summary>

Controls whether attributes are used to determine duplicates.

* **None**: Do not use attributes.
* **Single**: Use a single, overridable attribute.
* **List**: Use a list of attributes.

</details>

<details>

<summary><strong>AttributeHashConfigs</strong><br><em>List of attributes to hash for comparison.</em></summary>

Defines which attributes are used when "TestAttributesHash" is set to "List". Arrays are not supported.

</details>

<details>

<summary><strong>bIncludeSingleAttribute</strong><br><em>Whether to include a single attribute in the hash test.</em></summary>

When enabled, includes an additional single attribute in the comparison if "TestAttributesHash" is set to "List".

</details>

<details>

<summary><strong>AttributeHashConfig</strong><br><em>Single attribute to hash for comparison.</em></summary>

Defines a single attribute to be used when "TestAttributesHash" is set to "Single", or when "bIncludeSingleAttribute" is enabled in "List" mode.

</details>

#### Usage Example

A common use case is generating multiple terrain patches that are nearly identical. You can use this node to discard all but one patch that has the same bounds, point count, and positions. For example:

1. Generate 5 terrain patches using a noise-based system.
2. Connect them to the Discard Same node.
3. Enable "bTestBounds", "bTestPointCount", and "bTestPositions".
4. Set tolerances to 0.1 for bounds and positions, and 0 for point count.
5. Set Mode to "FIFO" to keep the first patch and discard duplicates.

#### Notes

* The node is optimized for batch processing of multiple collections.
* Tolerances are important for handling floating-point inaccuracies in comparisons.
* Attribute hashing can be computationally expensive if many attributes are involved.
* This node works best when used with a consistent data structure across inputs.
