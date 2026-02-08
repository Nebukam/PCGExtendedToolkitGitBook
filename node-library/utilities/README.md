---
icon: grid-round-2-plus
---

# Utilities

**Supporting operations that don't fit neatly into a single system.** Sorting, partitioning, noise generation, data matching, control flow, point selection, and data cleanup all live here. These nodes handle the structural work that other systems depend on — reordering points, splitting collections, routing execution, and combining data.

### Sections

| Section                                   | Contents                                                                      |
| ----------------------------------------- | ----------------------------------------------------------------------------- |
| [discarding](discarding/ "mention")       | Remove collections or actors — by point count, duplicates, spatial triage     |
| [data-matching](data-matching/ "mention") | Collection pairing and correspondence — match rules as provider sub-nodes     |
| [pickers](pickers/ "mention")             | Index-based point selection — Cherry Pick Points with picker sub-nodes        |
| [noise](noise/ "mention")                 | 3D noise functions — Perlin, Simplex, and variants as point attribute writers |
| [partitioning](partitioning/ "mention")   | Split collections by attribute values or partition rules                      |
| [sorting](sorting/ "mention")             | Point and collection sorting by attribute, distance, or custom criteria       |
| [control-flow](control-flow/ "mention")   | Execution routing — branching, breaking, iteration, data waiting              |
| [batch-actions](batch-actions/ "mention") | Apply multiple attribute writes in a single pass                              |

Beyond the sections above, **Merge Points** combines multiple point collections into a single output — the inverse of partitioning.
