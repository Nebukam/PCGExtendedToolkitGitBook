---
icon: grid-round-2-plus
---

# Filters

**Filters are PCGEx's universal condition system.** You configure them once as sub-nodes and wire them into any consuming node's filter input. The same filter definition works across dozens of operations without changes.

Every filter lives here, organized by what it evaluates:

| Section         | Contents                                                                       |
| --------------- | ------------------------------------------------------------------------------ |
| Common Settings | Base filter definition — priority, error handling, result output settings       |
| Point Filters   | Evaluate individual points — attribute checks, spatial tests, math comparisons |
| Edge Filters    | Evaluate cluster edges — segment properties, connectivity                      |
| Vtx Filters     | Evaluate cluster Vtx — adjacency, topology                                     |
| Data Filters    | Evaluate entire datasets — entry count, tag checks, bounds                     |

Filter groups let you compose multiple filters into compound AND/OR logic, and groups can nest for arbitrarily complex conditions. When you need filters to drive data flow directly, the Uber Filter nodes are the primary consumers: one variant keeps or discards entire collections based on point pass rates, while another routes points to the first matching branch in priority order.

### Concepts

For understanding filter architecture, composition patterns, and reusability:

* [Filter Concepts](../../working-with-pcgex/filters/)
