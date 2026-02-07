---
icon: rectangles-mixed
---

# Samplers

**Tensor sampler sub-nodes. Control how tensor fields are evaluated at each point.**

| Sub-Node        | Description                                                                                           |
| --------------- | ----------------------------------------------------------------------------------------------------- |
| **Default**     | Single-point sampling with configurable step size and error tolerance.                                |
| **RK4**         | Fourth-order Runge-Kutta. Four intermediate samples per step for higher accuracy.                     |
| **Six Points**  | Averages six axis-aligned samples for noise smoothing.                                                |
| **Adaptive RK** | Adaptive step size based on field curvature. Smaller steps in curved regions, larger in smooth areas. |

### Concepts

* [Tensors](./)
