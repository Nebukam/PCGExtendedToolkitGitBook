---
icon: sliders
---

# Remove Leaves

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Removes leaf nodes and their connecting edges from a graph structure.

#### How It Works

This subnode identifies and removes leaf nodes — those with only one connection — along with their associated edges. It works by following chains of connections from each leaf node until it reaches either a complex node (with multiple connections) or a loop. This ensures that entire branches of connected leaves are removed, not just individual endpoints.

#### Configuration

<details>

<summary><strong>Individual Node Processing</strong><br><em>When enabled, processes each node individually.</em></summary>

Controls whether the operation is applied to each node in the cluster independently. This setting is always enabled for this subnode.

</details>

#### Usage Example

Use this subnode after generating a branching graph (like a tree or network) to remove unnecessary endpoints or dead ends. For example, in procedural city generation, you might generate a road network with many small branches that don't connect to anything meaningful — using Remove Leaves will clean up these paths and simplify the structure.

#### Notes

* The operation is applied per-node, so it works best on graphs where leaf chains are not too long.
* Complex nodes (with more than one connection) stop the chain of removals.
* This subnode does not modify the original point data — only the graph structure defined by edges and connections.
