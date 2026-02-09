---
icon: function
---

# Samplers

**Samplers control how tensor fields are evaluated at each point during tracing.** The choice of sampler determines the trade-off between speed and accuracy as the tracer steps through the field.

The default sampler takes a single sample per step — fast and sufficient when the field is smooth. RK4 (fourth-order Runge-Kutta) takes four intermediate samples per step, which dramatically improves accuracy in fields with tight curvature. Six-point sampling averages axis-aligned samples around each position, which smooths out noisy fields. Adaptive sampling adjusts the step size dynamically based on local field curvature — taking smaller steps through sharp bends and larger steps through smooth regions.

### Concepts

* [Tensor Concepts](../../../working-with-pcgex/additional-systems/tensors.md)
