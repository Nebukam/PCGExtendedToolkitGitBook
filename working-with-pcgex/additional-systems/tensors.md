---
icon: up-down-left-right
---

# Tensors

**Tensors give direction to empty space.** Think of them as invisible flow fields — wind, current, magnetic pull — that exist independently of your points. Once a tensor field is defined, any operation can sample it and respond: orient along the flow, prefer edges that follow it, bias distribution toward it.

<figure><img src="../../.gitbook/assets/placeholder-wide.jpg" alt=""><figcaption><p>Tensor field visualization — arrows showing direction and intensity across space</p></figcaption></figure>

### Effectors

A tensor field is built from **effectors** — sub-nodes that each contribute directional influence. They blend together at sample time, so combining a radial pull with a directional flow creates the kind of organic, curving field that's hard to author by hand.

| Category        | Effectors                                                                                                                                                                                                                                                                                                                                                                  | Behavior                                                                                 |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| **Basic**       | [tensor-constant.md](../../node-library/tensors/tensors/tensor-constant.md "mention"), [tensor-null.md](../../node-library/tensors/tensors/tensor-null.md "mention")                                                                                                                                                                                                       | Uniform direction everywhere / dead zones that neutralize other influence                |
| **Momentum**    | [tensor-inertia.md](../../node-library/tensors/tensors/tensor-inertia.md "mention"), [tensor-inertia-constant.md](../../node-library/tensors/tensors/tensor-inertia-constant.md "mention")                                                                                                                                                                                 | Direction from the probe's own heading — momentum-like continuation                      |
| **Point-based** | [tensor-pole.md](../../node-library/tensors/tensors/tensor-pole.md "mention"), [tensor-flow.md](../../node-library/tensors/tensors/tensor-flow.md "mention"), [tensor-spin.md](../../node-library/tensors/tensors/tensor-spin.md "mention")                                                                                                                                | Radial attraction/repulsion, directional influence from points, rotational vortex fields |
| **Noise**       | [tensor-noise.md](../../node-library/tensors/tensors/tensor-noise.md "mention"), [tensor-noise-bounded.md](../../node-library/tensors/tensors/tensor-noise-bounded.md "mention")                                                                                                                                                                                           | Global 3D noise-driven direction / localized noise within influence zones                |
| **Path/Spline** | [tensor-path-flow.md](../../node-library/tensors/tensors/tensor-path-flow.md "mention"), [tensor-path-pole.md](../../node-library/tensors/tensors/tensor-path-pole.md "mention"), [tensor-spline-flow.md](../../node-library/tensors/tensors/tensor-spline-flow.md "mention"), [tensor-spline-pole.md](../../node-library/tensors/tensors/tensor-spline-pole.md "mention") | Follow path/spline tangents or create radial fields around curves                        |
| **Surface**     | [tensor-surface.md](../../node-library/tensors/tensors/tensor-surface.md "mention")                                                                                                                                                                                                                                                                                        | Direction from surface geometry — terrain-following, surface-aware flows                 |

Point-based effectors (Pole, Flow, Spin) use distance-based falloff with weight and potency curves, so their influence fades naturally with distance. Path and spline effectors work similarly but along curves instead of points.

{% hint style="info" %}
**Constant** is worth noting as a safety net. It guarantees a fallback direction everywhere in the field, preventing sampling failures in areas with no other effector influence.
{% endhint %}

### Sampling

Tensor sampling reads the blended field at each point position and writes direction and strength to attributes. Four sampler types trade accuracy against performance:

| Sampler                                                                                                      | Behavior                                                                            |
| ------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| [tensor-sampler-default.md](../../node-library/tensors/samplers/tensor-sampler-default.md "mention")         | Single-point sample — fast, good enough for smooth fields                           |
| [tensor-sampler-adaptive-rk.md](../../node-library/tensors/samplers/tensor-sampler-adaptive-rk.md "mention") | Dynamic step sizing — smaller steps in curved regions, larger in smooth areas       |
| [tensor-sampler-rk4.md](../../node-library/tensors/samplers/tensor-sampler-rk4.md "mention")                 | Fourth-order Runge-Kutta — consistent high accuracy, four weighted samples per step |
| [tensor-sampler-six-points.md](../../node-library/tensors/samplers/tensor-sampler-six-points.md "mention")   | Averages six cardinal offset samples — smooths noisy fields and reduces jitter      |

After sampling, **mutations** can post-process the result: invert direction, enable bidirectional mode (mirror around a reference axis), or apply per-axis scaling.

### Using Tensors

Two nodes consume tensor fields directly:

[path-extrude-tensors.md](../../node-library/paths/generate/path-extrude-tensors.md "mention") follows the field from seed points to generate paths — iteratively sampling and stepping along the flow direction. Supports intersection detection, child extrusions, closed loop detection, and stop filters.

**Tensors Transform** moves and rotates existing points in-place based on the field, with configurable iteration counts and diagnostic output (distance traveled, effector pings, graceful stop flags).

### Integration Points

Tensors also surface in other PCGEx systems as an optional influence layer:

* [probe-tensor.md](../../node-library/clusters/generate/cluster-connect-points/probe-tensor.md "mention") in Connect Points bias edge creation toward field direction
* [heuristics-tensor.md](../../node-library/pathfinding/heuristics/heuristics-tensor.md "mention") in pathfinding prefer paths that follow the flow
* [filter-tensor-dot.md](../../node-library/filters/point-filters/spatial/filter-tensor-dot.md "mention") selects points by their alignment with the field

The tensor system is self-contained. It adds organic, flow-driven behavior to operations that would otherwise be purely geometric.
