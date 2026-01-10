---
description: 'In editor :: PCGEx | Cherry Pick Points'
icon: scrubber
---

# Cherry Pick Points

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Filter points by indices, either read from local attributes or using external sources.

#### How It Works

The Cherry Pick Points node selects specific points from a dataset based on their index positions. It can either read these indices from an attribute on the input data or receive them from additional sources. For each point in the dataset, the node checks if its index matches one of the selected indices. If it does, the point is either kept or discarded depending on the invert setting. When invert is enabled, points that match the indices are discarded instead of kept. The node also supports sending discarded points to a separate output for further processing.

#### Configuration

<details>

<summary><strong>Source</strong><br><em>Where to read the indices from.</em></summary>

* **Self**: Read indices from an attribute on the input point data.
* **Sources**: Read indices from additional input sources connected to the node.

</details>

<details>

<summary><strong>Invert</strong><br><em>Whether to invert the picking (picked indices will be discarded instead or kept).</em></summary>

When enabled, the node discards points that match the selected indices and keeps all others.

</details>

<details>

<summary><strong>Output Discarded Points</strong><br><em>Whether to output discard points to their own dataset.</em></summary>

When enabled, discarded points are sent to a separate output pin for further processing or visualization.

</details>

<details>

<summary><strong>Allow Empty Outputs</strong><br><em>Whether to output discard points collections to be empty.</em></summary>

When enabled, even if no points are discarded, an empty output collection is still generated. When disabled, no output is produced if there are no discarded points.

</details>

<details>

<summary><strong>Attribute Name</strong><br><em>Name of the attribute containing indices when Source is set to Self.</em></summary>

Specify the name of the attribute that holds the indices to pick from the input data.

</details>

#### Usage Example

1. Create a point dataset with 100 points.
2. Add an attribute to the dataset containing indices of 10 specific points you want to keep.
3. Connect this dataset to the **Point Input** of Cherry Pick Points.
4. Set the **Source** to **Self** and specify the attribute name.
5. Enable **Output Discarded Points** to see which points were not selected.

This setup will output only the 10 selected points, with the remaining 90 points sent to the discarded output.

#### Notes

* The node supports multiple input datasets for more complex filtering workflows.
* When using the **Sources** input, ensure that each source provides valid integer indices within the range of the main point dataset.
* Performance can be improved by using bulk initialization if you're working with large datasets and the node supports it.
