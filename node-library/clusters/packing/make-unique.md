---
description: 'In editor :: PCGEx | Cluster : Make Unique'
icon: circle
---

# Make Unique

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Creates independent copies of input clusters to prevent data conflicts and ensure each operation works with its own unique data.

#### How It Works

This node takes all incoming clusters and creates fresh, separate copies of their data. Each cluster gets its own unique data pointer, ensuring that modifications made in one part of your procedural graph don't accidentally affect other parts. This isolation prevents unexpected behavior when multiple operations work on the same cluster data.

The process works by:

1. Reading all input clusters
2. Creating new data containers for each cluster
3. Copying the original cluster information into these new containers
4. Sending out the isolated cluster data

This way, downstream nodes can safely modify or read from their clusters without worrying about interference from other parts of your graph.

#### Configuration

No configuration options are available for this node. It automatically processes all input clusters and ensures they are made unique.

#### Usage Example

Use this node when chaining multiple operations that might modify cluster data. For example, if you're first packing clusters together and then distributing them, place this node between those steps to ensure the packing changes don't affect the distribution process. This is especially helpful when working with complex procedural workflows where data sharing could cause unpredictable results.

#### Notes

This node is lightweight and has minimal performance impact. It's recommended to use it whenever you're unsure whether cluster data might be shared across multiple operations in your graph.
