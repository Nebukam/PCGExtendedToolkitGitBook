---
icon: grid-round-2-plus
---

# Filters

**Filters are PCGEx's universal condition system.** You configure them once as sub-nodes and wire them into any consuming node's filter input. The same filter definition works across dozens of operations without changes.

Every filter lives here, organized by what it evaluates:

<table data-view="cards"><thead><tr><th>Section</th><th>Contents</th><th data-hidden data-card-cover data-type="image">Cover image</th></tr></thead><tbody><tr><td><a data-mention href="common-settings/">common-settings</a></td><td>Base filter definition — priority, error handling, result output settings</td><td></td></tr><tr><td><a data-mention href="point-filters/">point-filters</a></td><td>Evaluate individual points — attribute checks, spatial tests, math comparisons</td><td></td></tr><tr><td><a data-mention href="edge-filters/">edge-filters</a></td><td>Evaluate cluster edges — segment properties, connectivity</td><td></td></tr><tr><td><a data-mention href="vtx-filters/">vtx-filters</a></td><td>Evaluate cluster Vtx — adjacency, topology</td><td></td></tr><tr><td><a data-mention href="data-filters/">data-filters</a></td><td>Evaluate entire datasets — entry count, tag checks, bounds</td><td></td></tr></tbody></table>

Filter groups let you compose multiple filters into compound AND/OR logic, and groups can nest for arbitrarily complex conditions. When you need filters to drive data flow directly, the Uber Filter nodes are the primary consumers: one variant keeps or discards entire collections based on point pass rates, while another routes points to the first matching branch in priority order.

### Concepts

For understanding filter architecture, composition patterns, and reusability:

* [Filter Concepts](../../working-with-pcgex/filters/)
