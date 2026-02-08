---
icon: grid-round-2
---

# Partitioning

**Partitioning splits a collection into groups where every point in a group shares the same attribute value.** One collection goes in, multiple come out — each containing only the points that matched a given partition key.

**Partition by Values** is the main node. It uses partition rule sub-nodes to define which attributes drive the grouping. Multiple rules can be combined, creating finer subdivisions where points must match on all specified criteria to land in the same output collection.
