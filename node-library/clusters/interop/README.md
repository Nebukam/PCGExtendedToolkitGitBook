---
icon: grid-round-2
---

# Interop

**Convert between clusters and other data formats.**

| Node                        | Description                                                                                                    |
| --------------------------- | -------------------------------------------------------------------------------------------------------------- |
| **Break Clusters to Paths** | Extract edge chains as ordered paths. Configurable chain handling, winding enforcement, point count filtering. |
| **Cut Clusters**            | Cut cluster topology using paths as cutting lines. Node/edge/both intersection modes.                          |
| **Path to Clusters**        | Convert paths into cluster topology with endpoint merging for intersection creation.                           |
| **Copy Clusters to Points** | Stamp cluster copies at target positions with transform inheritance.                                           |
| **Find Clusters**           | Retrieve Vtx/Edge pairs from mixed point collections at runtime.                                               |
| **Sanitize Clusters**       | Rebuild connectivity after non-PCGEx modifications.                                                            |
| **Make Clusters Unique**    | Deep-copy shared cluster data for independent editing.                                                         |
| **Pick Closest Clusters**   | Select clusters nearest to target points.                                                                      |
| **Find Point on Bounds**    | Locate closest Vtx or edge on cluster bounds at UVW position.                                                  |
| **Sample Vtx by ID**        | Direct Vtx lookup by unique ID without spatial search.                                                         |
| **Merge Vertices**          | Consolidate multiple Vtx collections into one shared collection.                                               |

> See [Cluster-Path Interop](./) for background on data format conversion.
