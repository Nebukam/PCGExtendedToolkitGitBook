---
icon: grid-4
---

# Architecture

**PCGEx has one architectural idea that, once you get it, makes the entire toolkit click: sub-nodes configure, consumers execute.**

You place a small configuration node (a filter, a heuristic, a probe), wire its output into any compatible operation, and that operation uses the configuration at runtime. The same configuration node can feed into multiple operations. Change it once, everything updates.

That's the mental model. The rest of this section fills in the details.

### Points All The Way

PCGEx operates on standard PCG point data. Paths are points. Clusters are points. Everything remains compatible with vanilla PCG nodes, so you can mix PCGEx and standard PCG operations freely.

What PCGEx adds is a **modular configuration system** that separates _what to do_ from _how to configure it_.

### Provider/Consumer Architecture

Most PCGEx nodes follow a provider/consumer pattern:

* **Provider nodes** (sub-nodes) output configuration: conditions, behaviors, rules
* **Consumer nodes** accept these configurations through specialized input pins
* **One provider can connect to many consumers**

Configure a filter once, use it everywhere. Change one provider, all connected consumers reflect the change. Mix and match configurations without duplicating logic.

This pattern appears throughout PCGEx — filters, probes, heuristics, sorting rules, shape builders, and more. Once you recognize it, the toolkit becomes predictable.

<figure><img src="../../.gitbook/assets/placeholder-wide.jpg" alt=""><figcaption></figcaption></figure>

### Sub-Nodes

Provider nodes are called **sub-nodes** in PCGEx. They're easy to spot:

* A dashed circle icon (instead of a filled circle)
* Names prefixed by type: `Filter : Compare`, `Probe : Sample`, `Heuristics : Distance`
* Output pins with a distinctive icon matching consumer input pins

<figure><img src="../../.gitbook/assets/placeholder-wide.jpg" alt=""><figcaption></figcaption></figure>

Sub-nodes are lightweight. They don't process data themselves; they describe _how_ something should be done. The consumer that receives them handles the actual processing.

{% hint style="warning" %}
**Do Not Serialize Sub-Nodes**\
Sub-nodes hold runtime state and references that don't survive serialization. Never store sub-node outputs in a PCG Data Asset.
{% endhint %}

#### Sub-Node Types

PCGEx has many sub-node types. Here are the major categories:

* **Filters**: Pass/fail conditions at various layers (point, Vtx, Edge, collection), plus Filter Groups for AND/OR composition.
* **Rules & Resolvers**: Sorting Rules, Partition Rules, Match Rules, Index Pickers.
* **Behaviors**: Probes (sampling behaviors), Heuristics (pathfinding costs), Samplers (data extraction).
* **State & Properties**: Point State, Cluster State, Vtx Property.
* **Generation**: Shape Builders (parametric geometry), Tensors (directional fields), Noise3D (procedural noise), Fill Controls (flood fill behavior).
* **Sampling & Blending**: Blending (value combination), Actions (staged operations), TexParam (texture parameters).

> Each type has dedicated input pins on compatible consumer nodes. The naming convention makes types discoverable: `Filter : Distance`, `Heuristics : Steepness`, `Shape : Grid`.

### Why This Pattern Matters

#### Composition

Multiple sub-nodes connect to the same consumer pin. Filters stack (AND logic). Heuristics combine. Complex behavior builds from simple blocks without monolithic nodes.

<figure><img src="../../.gitbook/assets/placeholder-wide.jpg" alt=""><figcaption><p>Three filter providers connected to one consumer's Filters pin</p></figcaption></figure>

#### Context Independence

A filter doesn't know whether it's filtering points for sampling, edges for pathfinding, or vertices for cluster refinement. It evaluates conditions; the consumer provides context. The same filter logic works across entirely different operations, and learning one sub-node type teaches you patterns that apply everywhere.

#### Subgraph Packaging

Sub-nodes flow through subgraph pins like any other PCG data. Wrap a sub-node configuration in a subgraph, expose parameters, and reuse it across your project as a "prefab configuration."

```
Subgraph: "High Threshold Filter"
├─ Filter : Compare (Numeric)
│   └─ Threshold: [Exposed Parameter]
└─ Output Pin
```

Each instance uses the same logic with different parameter values.

### Working With Vanilla PCG

PCGEx data is standard PCG point data with semantic meaning. A "path" is just points with order implied. A "cluster" is Vtx points plus Edge points with topology attributes. Since it's all just points, vanilla PCG nodes work on PCGEx data:

* Use **Transform Points** on cluster vertices
* Use **Density Filter** on paths
* Use **Merge** to combine PCGEx outputs

<figure><img src="../../.gitbook/assets/placeholder-wide.jpg" alt=""><figcaption><p>PCG graph showing a PCGEx cluster output flowing into a vanilla PCG Transform Points node</p></figcaption></figure>

PCGEx doesn't lock you into its ecosystem. Mix approaches based on what each operation does best.

#### Semantic Labels

PCGEx uses naming conventions to mark point collections:

* `PCGEx/PathID` attribute identifies path membership
* `Vtx` and `Edges` output pins carry cluster topology
* Tags mark data provenance

Vanilla nodes ignore these semantics and just see points. PCGEx nodes understand them.

### Mental Model Summary

1. **Everything is points**: Paths, clusters, all standard PCG data
2. **Sub-nodes configure, consumers execute**: Separation of concerns
3. **Connect one to many**: Reuse configurations across operations
4. **Context doesn't matter to sub-nodes**: Same filter works everywhere
5. **Vanilla interop is native**: Mix PCGEx and vanilla freely

### In This Section

* Provider/Consumer Pattern - Deep dive into sub-nodes and factories

### Related

**Concepts:**

* [filters](../filters/ "mention") - The most common sub-node type
* [clusters](../clusters/ "mention") - Where sub-nodes configure topology operations
* [pathfinding](../pathfinding/ "mention") - Where heuristics sub-nodes configure traversal

**Node Library:**

* [filters](../../node-library/filters/ "mention") - All filter sub-nodes
* Sub-nodes appear throughout the library, marked with dashed circle icons
