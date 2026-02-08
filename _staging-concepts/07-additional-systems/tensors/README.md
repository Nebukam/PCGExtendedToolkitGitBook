# Tensors

**Tensors give direction to empty space.** Think of them as invisible flow fields — wind, current, magnetic pull — that exist independently of your points. Once a tensor field is defined, any operation can sample it and respond: orient along the flow, prefer edges that follow it, bias distribution toward it.

<!-- IMAGE: Tensor field visualization — arrows showing direction and intensity across space -->

## Effectors

A tensor field is built from **effectors** — sub-nodes that each contribute directional influence. They blend together at sample time, so combining a radial pull with a directional flow creates the kind of organic, curving field that's hard to author by hand.

| Category | Effectors | Behavior |
|----------|-----------|----------|
| **Basic** | Constant, Null | Uniform direction everywhere / dead zones that neutralize other influence |
| **Momentum** | Inertia, Inertia (Constant) | Direction from the probe's own heading — momentum-like continuation |
| **Point-based** | Pole, Flow, Spin | Radial attraction/repulsion, directional influence from points, rotational vortex fields |
| **Noise** | Noise, Noise (Bounded) | Global 3D noise-driven direction / localized noise within influence zones |
| **Path/Spline** | Path Flow, Path Pole, Spline Flow, Spline Pole | Follow path/spline tangents or create radial fields around curves |
| **Surface** | Surface | Direction from surface geometry — terrain-following, surface-aware flows |

Point-based effectors (Pole, Flow, Spin) use distance-based falloff with weight and potency curves, so their influence fades naturally with distance. Path and spline effectors work similarly but along curves instead of points.

{% hint style="info" %}
**Constant** is worth noting as a safety net. It guarantees a fallback direction everywhere in the field, preventing sampling failures in areas with no other effector influence.
{% endhint %}

## Sampling

Tensor sampling reads the blended field at each point position and writes direction and strength to attributes. Four sampler types trade accuracy against performance:

| Sampler | Behavior |
|---------|----------|
| **Default** | Single-point sample — fast, good enough for smooth fields |
| **Adaptive RK** | Dynamic step sizing — smaller steps in curved regions, larger in smooth areas |
| **RK4** | Fourth-order Runge-Kutta — consistent high accuracy, four weighted samples per step |
| **Six Points** | Averages six cardinal offset samples — smooths noisy fields and reduces jitter |

After sampling, **mutations** can post-process the result: invert direction, enable bidirectional mode (mirror around a reference axis), or apply per-axis scaling.

## Using Tensors

Two nodes consume tensor fields directly:

**Path: Extrude Tensors** follows the field from seed points to generate paths — iteratively sampling and stepping along the flow direction. Supports intersection detection, child extrusions, closed loop detection, and stop filters.

**Tensors Transform** moves and rotates existing points in-place based on the field, with configurable iteration counts and diagnostic output (distance traveled, effector pings, graceful stop flags).

## Integration Points

Tensors also surface in other PCGEx systems as an optional influence layer:
- **Tensor probes** in Connect Points bias edge creation toward field direction
- **Tensor heuristics** in pathfinding prefer paths that follow the flow
- **Tensor dot filter** selects points by their alignment with the field

The tensor system is self-contained. It adds organic, flow-driven behavior to operations that would otherwise be purely geometric.

## Related

- [Tensor Nodes](/node-library/tensors/)
- [Probe sampling](/node-library/clusters/probes/) - Tensor probes for cluster generation
- [Heuristics](/concepts/06-pathfinding/heuristics.md) - Tensor-aware pathfinding
