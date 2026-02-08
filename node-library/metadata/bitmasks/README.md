---
icon: grid-round-2
---

# Bitmasks

**Bitmask nodes treat int64 attributes as bit fields — compact, combinable state you can test anywhere downstream.** The workflow starts with defining a named set of flags through a bitmask collection, which gives semantic meaning to individual bit positions. From there, filter results can be written directly into bitmask attributes, encoding pass/fail states as flag patterns rather than separate boolean columns.

Individual bits can be read and written on any int64 attribute. When multiple collections carry their own masks, merge operations combine them into a single unified field. Bitwise operations — AND, OR, XOR, NOT — let you compose masks against each other, testing intersections or differences between attribute states without writing custom filter logic.
