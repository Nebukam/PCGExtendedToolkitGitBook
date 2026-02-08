---
icon: grid-2
---

# Edge Filters

**Edge filters evaluate cluster edges, with access to both the edge itself and its endpoint Vtx data.** This dual access is what makes them distinct from point filters: every test can consider the relationship between the two Vtx an edge connects.

The filters here cover the questions you'd naturally ask about an edge. Length testing is the most straightforward. Endpoint comparison filters check whether the Vtx on either end share or differ in attribute values, both numeric and string. Neighbor count filters test local connectivity density. Direction filters classify an edge's orientation relative to a reference vector, which is useful for pruning edges that don't align with a desired flow.

### Concepts

For understanding filter architecture, composition patterns, and reusability:

* [Filter Concepts](../../../working-with-pcgex/filters/)
