---
icon: grid-2
---

# Effectors

**Tensor effector sub-nodes. Each creates a directional field that tensor samplers read.**

| Sub-Node                             | Description                                                                              |
| ------------------------------------ | ---------------------------------------------------------------------------------------- |
| **Constant**                         | Uniform direction everywhere. Fallback/baseline field.                                   |
| **Noise** / **Noise (Bounded)**      | Directions from 3D noise functions. Bounded variant limits influence to effector points. |
| **Null**                             | Dead zones that cancel other tensor influence.                                           |
| **Pole**                             | Radial attraction/repulsion around points.                                               |
| **Spin**                             | Rotational vortex fields. Configurable axis.                                             |
| **Flow**                             | Directional blending from point sources.                                                 |
| **Inertia** / **Inertia (Constant)** | Momentum-based direction from seed transform. Constant variant needs no input points.    |
| **Spline Flow** / **Spline Pole**    | Fields following or attracting toward splines.                                           |
| **Path Flow** / **Path Pole**        | Fields following or attracting toward paths.                                             |
| **Surface**                          | Direction from surface geometry (along, toward, away, normal, orbit).                    |

### Concepts

* [Tensors](./)
