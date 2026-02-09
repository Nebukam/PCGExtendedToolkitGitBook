---
icon: circle-nodes
---

# The Dual Dataset

**Cluster operations always work with two point collections at once: Vtx and Edges.** They travel together, get modified together, and must stay in sync. Once this clicks, working with clusters becomes straightforward.

### Always Two Collections

Cluster nodes have paired input and output pins:

| Input/Output | Contains                         |
| ------------ | -------------------------------- |
| **Vtx**      | Vertex points                    |
| **Edges**    | Edge points referencing vertices |

Both collections must be present. A cluster without edges has no connectivity. Edges without Vtx have nothing to connect.

<figure><img src="../../.gitbook/assets/placeholder-wide.jpg" alt=""><figcaption><p>Cluster operation node showing paired Vtx and Edges pins on both input and output sides</p></figcaption></figure>

### Data Flow

When processing clusters:

1. Connect Vtx output to Vtx input
2. Connect Edges output to Edges input
3. Operations receive both, may modify both, output both

<figure><img src="../../.gitbook/assets/placeholder-wide.jpg" alt=""><figcaption><p>PCG graph showing cluster data flowing through multiple operations, with Vtx and Edges traveling in parallel</p></figcaption></figure>

Vtx and Edges are separate wires but represent a single logical cluster.

### Find Clusters

[find-clusters.md](../../node-library/clusters/utilities/find-clusters.md "mention") is a no-cost utility node that retrieves matching Vtx and Edges pairs from mixed inputs. It separates and matches — it doesn't combine.

#### Search Modes

| Mode               | Input              | Output                          |
| ------------------ | ------------------ | ------------------------------- |
| **All**            | Mixed soup of data | All valid Vtx/Edges pairs found |
| **Vtx from Edges** | Edges + mixed data | Matching Vtx for those Edges    |
| **Edges from Vtx** | Vtx + mixed data   | Matching Edges for that Vtx     |

#### Routing Pattern

Mixed data can flow through a single wire (switches, reroutes, subgraph pins), then Find Clusters separates it back into Vtx and Edges outputs.

<figure><img src="../../.gitbook/assets/placeholder-wide.jpg" alt=""><figcaption><p>Graph showing mixed cluster data flowing through a switch node, then Find Clusters separating into Vtx and Edges</p></figcaption></figure>

Given a Vtx dataset as key, Find Clusters retrieves all matching Edge datasets. This is how you process clusters individually in a loop.

{% hint style="success" %}
## Find Clusters is lightweight

Use it wherever you need to retrieve or separate cluster data.
{% endhint %}

### One Vtx, Multiple Edges

A single Vtx collection can pair with multiple Edge collections. This happens when disconnected "islands" exist within a single generation.

{% hint style="success" %}
The number of Edge datasets paired with a Vtx is the actual cluster count. Each Edge dataset represents one connected component.
{% endhint %}

{% hint style="warning" %}
One Vtx dataset may have several associated Edge datasets representing separate connected components. This is normal, not a one-to-one pairing.
{% endhint %}

### Reading from Both Collections

Operations may read attributes from either collection:

**Vtx-based decisions**: Filter edges based on endpoint Vtx attributes, weight pathfinding by Vtx properties, sample neighbor Vtx attributes.

**Edge-based decisions**: Filter by edge length or attributes, select edges by type, apply per-connection costs.

Check operation documentation for which collection's attributes are available.

### Modifying Collections

#### Safe with Vanilla Nodes

Vtx and Edges are regular PCG points. Standard operations work for transforms (position, rotation, scale), setting attributes, and copying attributes.

#### Requires Care

Operations that change point count need attention: filtering with deletion, sampling (creates new points), merging/splitting.

{% hint style="warning" %}
If vanilla nodes delete Vtx or Edge points, run [cluster-sanitize.md](../../node-library/clusters/utilities/cluster-sanitize.md "mention") before further PCGEx operations. Indices need updating.
{% endhint %}

#### Handled Automatically

PCGEx cluster operations maintain consistency. Edge refinement updates indices, Vtx filtering handles orphaned edges, and merge operations reconcile references. Use PCGEx nodes for topology changes when possible.

### Common Patterns

#### Enrich Vtx, Then Use in Edge Filters

1. Compute Vtx attributes (neighbor count, centrality, etc.)
2. Filter edges based on endpoint Vtx properties
3. Result: edges filtered by Vtx characteristics

#### Compute Edge Properties, Apply to Vtx

1. Compute edge attributes (length, direction, etc.)
2. Sample edge properties onto connected Vtx
3. Result: Vtx receive aggregated connection data

#### Parallel Processing

Operations process multiple clusters in parallel. Each cluster (Vtx + Edges pair) processes independently, and results merge into unified output collections.

### Related

* [.](./ "mention") - Cluster fundamentals
* [building-clusters.md](building-clusters.md "mention") - Creating clusters from various sources
* [refining-clusters.md](refining-clusters.md "mention") - Modifying cluster topology
