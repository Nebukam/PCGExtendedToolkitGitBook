---
icon: grid-2
---

# Point Filters

**Point filters evaluate a single point and return pass or fail.** That simple contract is the same everywhere they're used: pruning, partitioning, weighting, masking. The node consuming the filter decides what to do with the result; the filter just answers the question.

They're organized into three subcategories by what they look at. Attribute filters test stored values on the point. Math filters apply numeric and logical operations. Spatial filters reason about position, distance, and containment.

Alongside the subcategories, a handful of standalone utilities round out the toolkit. Constant and random filters are useful for debugging or probabilistic workflows. Picker filters select points by index. And Filter Group is the composition primitive — it combines multiple filters into compound AND/OR logic, letting you build layered conditions from simple parts.

### Concepts

For understanding filter architecture, composition patterns, and reusability:

* [Filter Concepts](../../../working-with-pcgex/filters/)
