# Keep Highest

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Keeps only the edge with the highest score for each node in a cluster.

#### Overview

This subnode filters edges connected to each node in a cluster, retaining only the one with the highest score. It's useful when you want to reduce graph complexity by keeping only the most relevant connections per node, based on a scoring system defined elsewhere in your PCG setup.

It operates on a per-node basis, evaluating all edges connected to that node and selecting the one with the best score. This is especially helpful for creating directed graphs or simplifying complex networks where you want to prioritize certain relationships.

{% hint style="info" %}
Connects to the **Refine** pin of cluster processing nodes like **Cluster Graph**, **Cluster MST**, or **Cluster Path**.
{% endhint %}

#### How It Works

For each node in the cluster, this subnode evaluates all edges connected to it. It calculates a score for each edge using a scoring system defined by an attached Heuristic subnode. The edge with the highest score is then marked as valid (kept), while all other edges from that node are invalidated (removed). If no valid edges exist for a node, that node remains disconnected.

This process ensures that only one outgoing edge per node is kept, based on the defined scoring criteria.

<details>

<summary>Inputs</summary>

* A cluster of points and edges
* Attached Heuristic subnode that defines how scores are calculated for each edge

</details>

<details>

<summary>Outputs</summary>

* The same cluster with only the highest-scoring edge retained for each node
* All other edges from those nodes are marked as invalid and will be removed during graph processing

</details>

#### Configuration

<details>

<summary><strong>Default Edge Validity</strong><br><em>Whether edges are valid by default before refinement.</em></summary>

When enabled, edges start as valid and are processed for potential removal.

**Values**:

* **False**: Edges start as invalid and must be explicitly marked valid during processing
* **True**: Edges start as valid and may be invalidated during processing

</details>

#### Usage Example

1. Create a cluster with multiple nodes and edges.
2. Attach a Heuristic subnode (like "Distance to Goal" or "Angle") to define edge scores.
3. Add the **Keep Highest Score** subnode to the Refine pin of a cluster graph node.
4. The result will be a simplified graph where each node has only its highest-scoring edge retained.

#### Notes

* This subnode requires an attached Heuristic subnode to compute edge scores.
* It is typically used in conjunction with other refinement operations to shape graph topology.
* Performance scales with the number of edges per node, so large clusters may see slower processing times.
