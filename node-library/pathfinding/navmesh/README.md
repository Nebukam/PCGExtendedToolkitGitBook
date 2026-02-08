---
icon: grid-round-2
---

# Navmesh

**Pathfinding through Unreal's navigation mesh instead of a cluster.** These nodes skip the cluster-based pipeline entirely and query the engine's NavMesh directly. Pathfinding : Navmesh finds paths between seed/goal pairs on the NavMesh, and Plot Navmesh writes the results as point data. Useful when you need runtime-compatible paths that respect navigation volumes and obstacles without building a cluster first.
