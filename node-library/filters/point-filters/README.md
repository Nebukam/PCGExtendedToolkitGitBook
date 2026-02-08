---
icon: grid-2
---

# Point Filters

**Individual point-level filters. Each filter evaluates a single point and returns pass or fail.**

### Subcategories

| Category  | Description                           |
| --------- | ------------------------------------- |
| Attribute | Filters based on attribute values     |
| Math      | Numeric and logical comparisons       |
| Spatial   | Position, distance, containment tests |

### Standalone Filters

| Node                | Description                                       |
| ------------------- | ------------------------------------------------- |
| **Constant Filter** | Always pass or always fail                        |
| **Random Filter**   | Probabilistic filtering with per-point randomness |
| **Random Ratio**    | Probabilistic filtering by target ratio           |
| **Picker Filter**   | Index-based point selection                       |
| **Filter Group**    | Combine filters into AND/OR compound logic        |

### Concepts

For understanding filter architecture, composition patterns, and reusability:

* [Filter Concepts](../../../working-with-pcgex/filters/)
