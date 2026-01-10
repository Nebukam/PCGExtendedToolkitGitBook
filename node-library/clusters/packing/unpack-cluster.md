---
description: 'In editor :: PCGEx | Cluster : Unpack'
icon: circle
---

# Unpack Cluster

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Restores vertex and edge clusters from a packed dataset.

#### How It Works

The Cluster : Unpack node reverses the packing process that was previously applied to clustered data. When data is packed, it's compressed or consolidated into a more compact format to reduce memory usage and improve performance. This node takes that packed data and reconstructs the original vertex and edge structures, restoring them to their full detail.

The node processes each packed cluster entry and expands it back into its constituent points or edges. It maintains the spatial relationships between these elements and ensures that all attributes and metadata are correctly assigned to their respective points or edges. This allows downstream nodes to work with the full, original cluster structure without any loss of information.

When the **Flatten** option is enabled, the node modifies how metadata is handled during unpacking. Instead of preserving hierarchical or nested structures, it flattens all metadata into a single, unified structure. This can improve performance for certain downstream operations but may increase memory usage depending on your specific dataset and workflow.

#### Configuration

<details>

<summary><strong>bFlatten</strong><br><em>Flatten unpacked metadata. Depending on your setup this is a tradeoff between memory and speed.</em></summary>

When enabled, the node flattens the unpacked metadata structure. This can improve performance by reducing complexity in data handling but may use more memory depending on your specific dataset.

</details>

#### Usage Example

1. Start with a graph that includes a "Cluster : Pack" node.
2. Connect your clustered point data to the pack node's input.
3. After packing, connect the output of the pack node to the input of the "Cluster : Unpack" node.
4. Configure the unpack node as needed (e.g., enable flatten if desired).
5. The output from the unpack node can now be used for further processing like filtering or rendering.

#### Notes

* Ensure that the data being unpacked was originally packed using a compatible method; otherwise, the unpacking process may fail or produce incorrect results.
* The flatten option is particularly useful when working with large datasets where performance is critical and you're not relying on nested metadata structures.
* This node does not modify the original input data but instead creates new output data based on the unpacked clusters.
