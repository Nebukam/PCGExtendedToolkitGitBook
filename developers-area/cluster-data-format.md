---
icon: diagram-project
---

# Cluster Data Format

**Clusters are just two PCG point data collections — vertices and edges — linked by matching tags.** The connectivity is encoded in two int64 point attributes using a simple bit-packing scheme. If you can read PCG point data and parse int64s, <mark style="color:$success;">you can reconstruct the full graph topology without any dependency on PCGEx code</mark>.

***

**Overview**

A cluster produces two outputs:

1. **Vtx** — a point data collection where each point is a vertex
2. **Edges** — one or more point data collections where each point represents an edge between two vertices

These are linked together by data tags, and the actual connectivity is stored in per-point int64 attributes using a packing convention described below.

```
Vtx Point Data                         Edge Point Data
══════════════                         ═══════════════
Tags:                                  Tags:
  "PCGEx/Vtx"                           "PCGEx/Edges"
  "PCGEx/Cluster:N"                     "PCGEx/Cluster:N"  (same N)

Per-point attribute:                   Per-point attribute:
  "PCGEx/VData" (int64)                  "PCGEx/EData" (int64)
```

***

**Int64 Packing Convention**

Both attributes pack two uint32 values into a single int64. The convention is straightforward:

```cpp
// Pack
int64 packed = (int64)((uint64)A << 32 | (uint64)B);

// Unpack
uint32 A = (uint32)(packed >> 32);   // upper 32 bits
uint32 B = (uint32)(packed);         // lower 32 bits
```

Every int64 value in the cluster format uses this layout. The upper 32 bits are always "A", the lower 32 bits are always "B". The sections below specify what A and B mean for each attribute.

***

**Step 1: Pair Vtx and Edges by Tag**

Each point data collection carries string tags (the standard `FPCGTaggedData::Tags` set). PCGEx writes three:

| Tag               | Meaning                                                             |
| ----------------- | ------------------------------------------------------------------- |
| `PCGEx/Vtx`       | This collection contains vertex points                              |
| `PCGEx/Edges`     | This collection contains edge points                                |
| `PCGEx/Cluster:N` | Pairing ID — vertex and edge sets with the same `N` belong together |

The `PCGEx/Cluster` tag is a key-value tag in `Key:Value` format. The value is an int64. To pair inputs: group all collections by their `PCGEx/Cluster` value, then within each group the one tagged `PCGEx/Vtx` is the vertex set and those tagged `PCGEx/Edges` are its edge sets.

A single vertex set can have multiple edge collections — PCGEx splits disconnected components into separate edge sets. Each edge collection belongs to exactly one vertex set.

{% hint style="info" %}
**N** changes each execution and uses the UObject' Unique ID to avoid collisions
{% endhint %}

***

**Step 2: Build the Vertex Lookup**

Every vertex point has an int64 attribute named **`PCGEx/VData`**. Unpacked:

| Bits     | Field               | Meaning                                                             |
| -------- | ------------------- | ------------------------------------------------------------------- |
| Upper 32 | **Vertex ID**       | An identifier for this vertex. Edge endpoints reference this value. |
| Lower 32 | **Adjacency count** | How many edges connect to this vertex (useful for validation).      |

Before reading any edges, iterate over the vertex points and build a map from Vertex ID to point index:

```cpp
TMap<uint32, int32> VertexLookup;

for (int32 i = 0; i < VtxPointCount; i++)
{
    int64 Packed = GetInt64Attribute(VtxPoints, "PCGEx/VData", i);

    uint32 VertexId    = (uint32)(Packed >> 32);  // upper 32
    uint32 AdjCount    = (uint32)(Packed);         // lower 32 (optional, for validation)

    VertexLookup.Add(VertexId, i);
}
```

This map is the key to resolving edges.

***

**Step 3: Resolve Edges**

Every edge point has an int64 attribute named **`PCGEx/EData`**. Unpacked:

| Bits     | Field               | Meaning                             |
| -------- | ------------------- | ----------------------------------- |
| Upper 32 | **Start Vertex ID** | The Vertex ID of one endpoint       |
| Lower 32 | **End Vertex ID**   | The Vertex ID of the other endpoint |

These Vertex IDs are the same values stored in the upper 32 bits of `PCGEx/VData` on the vertex points. Resolve them through the lookup built in Step 2:

```cpp
for (int32 i = 0; i < EdgePointCount; i++)
{
    int64 Packed = GetInt64Attribute(EdgePoints, "PCGEx/EData", i);

    uint32 StartId = (uint32)(Packed >> 32);
    uint32 EndId   = (uint32)(Packed);

    int32 StartVtxIndex = VertexLookup[StartId];
    int32 EndVtxIndex   = VertexLookup[EndId];

    // You now have a bidirectional edge:
    //   VtxPoints[StartVtxIndex] ↔ VtxPoints[EndVtxIndex]
    //   with edge attributes on EdgePoints[i]
}
```

That's the complete connectivity. Each resolved pair gives you two indices into the vertex point data, plus the edge point itself carries its own transform and any user-defined attributes (edge weight, tags, etc.).

***

**Putting It Together**

```
For each unique PCGEx/Cluster value:
  1. Find the Vtx collection (tagged PCGEx/Vtx)
  2. Find all Edge collections (tagged PCGEx/Edges)
  3. Read PCGEx/VData from every vertex point
     → Build VertexLookup: upper-32-bits → point index
  4. For each Edge collection, read PCGEx/EData from every edge point
     → Unpack upper/lower 32 bits → two Vertex IDs
     → Resolve both through VertexLookup → two vertex point indices
     → That's one edge
```

The result is a standard adjacency structure. What you do with it from there — adjacency list, adjacency matrix, half-edge mesh, whatever your system needs — is up to you.

{% hint style="info" %}
The adjacency count in the lower 32 bits of `PCGEx/VData` is optional metadata. You can use it to validate your reconstruction (check that each vertex ends up with at least that many edges), but it's not required to rebuild the topology.
{% endhint %}

***

**Edge Notes**

* **Edges are bidirectional.** There is no inherent directionality — `Start` and `End` are interchangeable for connectivity purposes. Some PCGEx nodes apply direction post-hoc via sorting rules, but the raw format is undirected.
* **No duplicate edges.** Each edge appears exactly once in the edge point data. If vertex A connects to vertex B, there is one edge point with `{A, B}`, not two with `{A, B}` and `{B, A}`.
* **No self-loops.** An edge where Start ID equals End ID is invalid and should be discarded.
* **Multiple edge collections.** If the cluster has disconnected components, each component gets its own edge collection. All share the same vertex collection and the same `PCGEx/Cluster` tag value.

***

**Related**

* [clusters](../working-with-pcgex/clusters/ "mention")
