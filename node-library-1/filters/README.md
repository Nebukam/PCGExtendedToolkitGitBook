---
icon: grid-round-2-plus
---

# Filters

**All PCGEx filters live here** — regardless of what they filter or where they're consumed. Filters are the universal condition system: point filters, edge filters, Vtx filters, collection-level filters, and filter groups for composition.

Filters follow the provider/consumer pattern. They're configured once as sub-nodes and connected to any consuming node's filter input. The same filter definition works across dozens of operations.

### Sections

| Section       | Contents                                                                       |
| ------------- | ------------------------------------------------------------------------------ |
| Point Filters | Evaluate individual points — attribute checks, spatial tests, math comparisons |
| Edge Filters  | Evaluate cluster edges — segment properties, connectivity                      |
| Vtx Filters   | Evaluate cluster Vtx — adjacency, topology                                     |
| Data Filters  | Evaluate entire datasets — entry count, tag checks, bounds                     |

#### Filter Composition

Filter groups combine multiple filters into compound logic:

* **AND Groups**: All filters must pass
* **OR Groups**: Any filter must pass
* Groups can nest for complex conditions

#### Uber Filters

Uber Filter nodes are the primary consumers — they apply filter logic to route data:

* **Uber Filter (Data)**: Keeps or discards entire collections based on point pass rates
* **Uber Filter (Cascade)**: Routes points to the first matching branch in priority order

### Concepts

For understanding filter architecture, composition patterns, and reusability:

* [Filter Concepts](../../working-with-pcgex-1/filters/)
