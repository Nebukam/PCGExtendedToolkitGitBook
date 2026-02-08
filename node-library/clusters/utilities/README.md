---
icon: grid-round-2
---

# Utilities

**Housekeeping. Nothing here changes cluster shape — it's about finding, fixing, and moving cluster data.**

These nodes handle the structural plumbing around the main pipeline. Finding which clusters exist in a mixed point collection, sanitizing connectivity after non-PCGEx modifications, merging duplicate Vtx collections, and packing clusters for serialization or storage. There are also selection helpers for picking clusters by proximity and lookup nodes for direct Vtx access by ID.

If your cluster data is malformed or needs reorganizing before the next processing step, this is where you fix it.
