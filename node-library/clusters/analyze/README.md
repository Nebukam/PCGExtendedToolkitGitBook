---
icon: grid-round-2
---

# Analyze

**Cluster analysis and metadata nodes -- extract structural information from cluster topology and write it back as point or edge attributes.**

| Node                      | Description                                                                                               |
| ------------------------- | --------------------------------------------------------------------------------------------------------- |
| **Cluster Centrality**    | Compute betweenness, closeness, harmonic closeness, degree, eigenvector, katz centrality scores per Vtx   |
| **Write Vtx Properties**  | Extract and write Vtx information derived from connected edges (edge count, normals, OBB)                 |
| **Write Edge Properties** | Extract and write edge length, direction, endpoint blending, heuristic scores                             |
| **Sample Neighbors**      | Aggregate attribute values from adjacent Vtx using blend, attribute, properties, or filter-based samplers |
| **Edge Order**            | Normalize edge start/end endpoint ordering for direction-dependent operations                             |
| **Partition Vertices**    | Split shared Vtx collection into per-cluster groups                                                       |
| **Write States**          | Write cluster states as int64 bitmask attribute from state providers                                      |
| **Adjacency States**      | Apply bitmask operations based on directional adjacency checks                                            |

> See [Clusters](../) for background on cluster data and topology.
