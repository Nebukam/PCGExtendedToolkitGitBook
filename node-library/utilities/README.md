---
icon: grid-round-2-plus
---

# Utilities

**Supporting operations that don't fit neatly into a single system.** Sorting, partitioning, noise generation, data matching, control flow, point selection, and data cleanup all live here. These nodes handle the structural work that other systems depend on — reordering points, splitting collections, routing execution, and combining data.

### Sections

<table data-view="cards"><thead><tr><th>Section</th><th>Contents</th></tr></thead><tbody><tr><td><a data-mention href="discarding/">discarding</a></td><td>Remove collections or actors — by point count, duplicates, spatial triage</td></tr><tr><td><a data-mention href="data-matching/">data-matching</a></td><td>Collection pairing and correspondence — match rules as provider sub-nodes</td></tr><tr><td><a data-mention href="pickers/">pickers</a></td><td>Index-based point selection — Cherry Pick Points with picker sub-nodes</td></tr><tr><td><a data-mention href="noise/">noise</a></td><td>3D noise functions — Perlin, Simplex, and variants as point attribute writers</td></tr><tr><td><a data-mention href="partitioning/">partitioning</a></td><td>Split collections by attribute values or partition rules</td></tr><tr><td><a data-mention href="sorting/">sorting</a></td><td>Point and collection sorting by attribute, distance, or custom criteria</td></tr><tr><td><a data-mention href="control-flow/">control-flow</a></td><td>Execution routing — branching, breaking, iteration, data waiting</td></tr><tr><td><a data-mention href="batch-actions/">batch-actions</a></td><td>Apply multiple attribute writes in a single pass</td></tr></tbody></table>

Beyond the sections above, **Merge Points** combines multiple point collections into a single output — the inverse of partitioning.
