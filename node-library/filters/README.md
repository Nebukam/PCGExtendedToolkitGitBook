---
icon: grid-round-2-plus
---

# Filters

**Filters are PCGEx's universal condition system.** You configure them once as sub-nodes and wire them into any consuming node's filter input. The same filter definition works across dozens of operations without changes.

Every filter lives here, organized by what it evaluates:

| Section                                       | Contents                                                                       |
| --------------------------------------------- | ------------------------------------------------------------------------------ |
| [common-settings](common-settings/ "mention") | Base filter definition — priority, error handling, result output settings      |
| [point-filters](point-filters/ "mention")     | Evaluate individual points — attribute checks, spatial tests, math comparisons |
| [edge-filters](edge-filters/ "mention")       | Evaluate cluster edges — segment properties, connectivity                      |
| [vtx-filters](vtx-filters/ "mention")         | Evaluate cluster Vtx — adjacency, topology                                     |
| [data-filters](data-filters/ "mention")       | Evaluate entire datasets — entry count, tag checks, bounds                     |

Filter groups let you compose multiple filters into compound AND/OR logic, and groups can nest for arbitrarily complex conditions. When you need filters to drive data flow directly, the Uber Filter nodes are the primary consumers: one variant keeps or discards entire collections based on point pass rates, while another routes points to the first matching branch in priority order.

### Concepts

For understanding filter architecture, composition patterns, and reusability:

* [Filter Concepts](../../working-with-pcgex/filters/)
