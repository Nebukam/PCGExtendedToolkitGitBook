---
description: 'Refine : Filter'
icon: sliders
---

# Filters

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Filters edges in a cluster based on an input filter, keeping or removing them according to the filter result.

#### How It Works

This subnode evaluates an external filter that has already been applied to the edges of a cluster. For each edge, it checks whether the filter allows that edge to remain. Based on the filter outcome and the invert setting, it either keeps or removes the edge from the graph. The process works per-edge, so you can selectively prune or preserve specific connections in your cluster's structure.

The steps are:

1. A parent node applies a filter to all edges in the cluster.
2. This subnode reads the result of that filter for each edge.
3. It sets the validity of each edge based on the filter outcome and whether inversion is enabled.
4. Edges marked as invalid are removed from the graph during refinement.

#### Configuration

<details>

<summary><strong>bInvert</strong><br><em>If enabled, filtered out edges are kept, while edges that pass the filter are removed.</em></summary>

When enabled, this flips the behavior of the filter. Instead of removing edges that pass the filter, it removes those that fail the filter.

**Values**:

* **False**: Edges that pass the filter are kept; those that fail are removed.
* **True**: Edges that fail the filter are kept; those that pass are removed.

</details>

#### Usage Example

1. Start with a cluster of points.
2. Use a **Cluster Graph** node to generate edges between points.
3. Apply a **Filter** subnode (like "Distance Filter") to define which edges should be considered valid.
4. Connect this **Refine : Filter** subnode to the **Refine** pin of the **Cluster Graph** node.
5. Set `bInvert` to `False` to remove edges that don’t meet your filter criteria, or `True` to keep only those that don’t meet the criteria.

This is useful for creating graphs where you want to remove certain connections based on custom logic (e.g., removing long-distance edges in a terrain graph).

#### Notes

* This subnode requires an external filter to be applied before it runs.
* It modifies edge validity flags directly, so it works best with nodes that support edge refinement.
* Be careful with `bInvert` as it changes the behavior of your filtering logic — test both settings to see which fits your use case.
