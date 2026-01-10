---
description: 'In editor :: PCGEx | Cluster : Refine'
icon: scrubber
---

# Refine Cluster

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Refine edges in clusters according to special rules and filtering logic.

#### How It Works

This node processes groups of points and their connections to improve or modify the structure of those connections. It uses a refinement process that evaluates each connection based on custom rules you define. The node can remove unwanted connections, restore specific connections when needed, and output the results in different formats depending on your needs.

The process works like this:

1. **Edge Evaluation**: Each connection between points is checked against the rules defined in the Refinement Subnode.
2. **Filtering**: Connections that don't meet the criteria are removed from the graph.
3. **Sanitization (if enabled)**: If a point ends up with no connections after filtering, the node can restore one or more connections based on specific conditions:
   * **Shortest**: Restores the shortest connection that was previously removed.
   * **Longest**: Restores the longest connection that was previously removed.
   * **Filters**: Uses another set of rules to determine which connections should be restored.
4. **Output Generation**:
   * **Clusters Mode**: Outputs updated groups of points with modified connections.
   * **Points Mode**: Outputs individual points representing the remaining connections.
   * **Attribute Mode**: Writes the results of the filtering directly to point attributes.

The node can process multiple groups at once for better performance when working with large datasets.

#### Configuration

<details>

<summary><strong>Mode</strong><br><em>Selects how the refined data is output.</em></summary>

Controls how the node outputs its result:

* **Clusters**: Outputs groups of points with updated connections.
* **Points**: Outputs individual points representing the remaining connections.
* **Attribute**: Writes filtering results to point attributes.

</details>

<details>

<summary><strong>ResultOutputVtx</strong><br><em>How vertex filtering results are written to attributes.</em></summary>

Configures how the filtering result for vertices is written when in Attribute mode. This includes options for writing boolean, counter, or bitmask values.

</details>

<details>

<summary><strong>ResultOutputEdges</strong><br><em>How edge filtering results are written to attributes.</em></summary>

Configures how the filtering result for edges is written when in Attribute mode. This includes options for writing boolean, counter, or bitmask values.

</details>

<details>

<summary><strong>Sanitization</strong><br><em>How to restore edges when nodes end up with no connections.</em></summary>

Determines how the node handles cases where a point ends up with no remaining connections:

* **None**: No edge restoration occurs.
* **Shortest**: Restores the shortest previously removed connection.
* **Longest**: Restores the longest previously removed connection.
* **Filters**: Uses a filter subnode to determine which connections must be preserved.

</details>

<details>

<summary><strong>bRestoreEdgesThatConnectToValidNodes</strong><br><em>When enabled, restores edges that connect to valid nodes.</em></summary>

When enabled, the node attempts to restore connections that link to points that still have valid connections. This helps maintain overall graph structure in complex networks.

</details>

<details>

<summary><strong>GraphBuilderDetails</strong><br><em>Settings for how clusters are built when outputting as graphs.</em></summary>

Controls how the node constructs group graphs when in Clusters mode, including which edge and vertex attributes to include or exclude.

</details>

#### Usage Example

1. **Create a Cluster** using a point distribution or mesh-based input.
2. **Add an Edge Refinement Subnode** such as a Minimum Spanning Tree or Distance Filter to define how connections should be selected or removed.
3. Set the **Mode** to **Clusters** to output refined groups with updated connection sets.
4. Optionally, enable **Sanitization** to ensure that no point ends up isolated by restoring connections based on length or filter rules.

#### Notes

* The Refinement Subnode is critical for defining behavior; it must be set to determine which connections are kept or removed.
* Sanitization only applies when the output mode is set to Clusters.
* Attribute mode allows for detailed inspection of filtering results without modifying graph structure.
* For best performance with large datasets, ensure that the Refinement Subnode uses efficient filtering logic.
