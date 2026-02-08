---
icon: grid-round-2-plus
---

# Tensors

**Directional field system — effectors define flow, samplers read it, operations respond.** Tensors create invisible vector fields in space. Effectors shape the field, and any operation that supports tensor input can sample it to guide behavior.

### Sections

| Section         | Contents                                                                         |
| --------------- | -------------------------------------------------------------------------------- |
| Common Settings | Shared configuration — tensor sampling mutations                                 |
| Tensors         | Field sources — constant, pole, spin, flow, noise, path/spline, surface, inertia |
| Samplers        | Sampling methods — default, adaptive RK, RK4, six-point averaging                |

#### Tensor Consumers

Two nodes consume tensor fields directly:

* **Path: Extrude Tensors** — Follow the field from seed points to generate paths
* **Tensors Transform** — Move and rotate existing points based on field values

#### Integration

Tensors also appear as optional influence in other systems:

* **Tensor Probe** — Bias edge creation in Connect Points
* **Tensor Heuristic** — Prefer paths following field direction
* **Tensor Dot Filter** — Select points by alignment with field

### Concepts

For understanding tensor fields, effector types, and sampling:

* [Tensor Concepts](../../working-with-pcgex/additional-systems/tensors.md)
