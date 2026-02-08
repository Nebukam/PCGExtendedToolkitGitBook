---
icon: grid-2
---

# Data Filters

**Data filters evaluate entire point collections rather than individual points.** Where point filters ask a question per-point, data filters ask a question per-collection and return a single answer for the whole dataset.

They test the properties you'd check before processing begins: how many entries are in the collection, whether specific tags are present, what values those tags carry, the shape and extent of the bounding box, and whether a particular attribute exists at all. These are the guards that let you skip, route, or branch based on collection-level metadata without ever inspecting individual points.

### Concepts

For understanding filter architecture, composition patterns, and reusability:

* [Filter Concepts](../../../working-with-pcgex/filters/)
