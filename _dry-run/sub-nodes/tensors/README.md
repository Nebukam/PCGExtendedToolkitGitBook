# Tensors

Tensors define **directional vector fields** — they describe which direction things should flow, pull, or push at any given point in 3D space. Nodes like **Extrude Tensors** and **Tensors Transform** use these fields to guide path extrusion or orient points.

---

## What Is a Tensor Field?

A tensor field associates a direction and magnitude with every point in space:

```
                Tensor Field (Flow)

        ──►  ──►  ──►  ──►  ──►
        ──►  ──►  ──►  ──►  ──►
        ──►  ──►  ──►  ──►  ──►
        ──►  ──►  ──►  ──►  ──►

                Tensor Field (Pole)

             ↖   ↑   ↗
              ↖  ↑  ↗
           ←  ←  ●  →  →
              ↙  ↓  ↘
             ↙   ↓   ↘
```

When you sample a tensor at a position, you get back:
- **Direction** — which way the field points there
- **Magnitude** — how strong the influence is
- **Weight** — how much this sample should contribute to the final result

---

## Tensor Categories

### Global Tensors
Apply everywhere, without spatial bounds:

| Tensor | Description |
|--------|-------------|
| [Constant](constant.md) | Same direction everywhere |
| [Inertia](inertia.md) | Uses the probe's current direction |
| [Inertia (Constant)](inertia-constant.md) | Fixed inertia with offset |
| [Noise](noise.md) | 3D noise as direction field |

### Point-Based Tensors
Use input points as effectors with influence radius:

| Tensor | Description |
|--------|-------------|
| [Flow](flow.md) | Directional flow from points |
| [Pole](pole.md) | Attraction/repulsion to points |
| [Spin](spin.md) | Rotation around point axes |
| [Null](null.md) | Zero-out regions |
| [Noise (Bounded)](noise-bounded.md) | Noise within effector bounds |

### Path/Spline Tensors
Use paths or splines to define the field:

| Tensor | Description |
|--------|-------------|
| [Path Flow](path-flow.md) | Flow along point paths |
| [Path Pole](path-pole.md) | Attraction toward paths |
| [Spline Flow](spline-flow.md) | Flow along splines |
| [Spline Pole](spline-pole.md) | Attraction toward splines |

### Surface Tensors
Derive direction from nearby surfaces:

| Tensor | Description |
|--------|-------------|
| [Surface](surface.md) | Direction based on surface proximity |

---

## How Tensors Are Combined

When multiple tensors are connected, their samples are combined based on the **Sampling Mode**:

| Mode | Behavior |
|------|----------|
| **Weighted** | Weighted average of all tensor samples |
| **Ordered (in place)** | Apply tensors sequentially at same position |
| **Ordered (mutated)** | Apply tensors sequentially, updating position after each |

---

## Shared Settings

All tensors share common configuration:

### Tensor Weight

<details>
<summary><strong>Tensor Weight</strong> <code>double</code></summary>

Overall weight multiplier for this tensor's contribution.

Higher values give this tensor more influence when combined with others.

Default: `1.0`

⚡ PCG Overridable

</details>

### Potency Settings

<details>
<summary><strong>Potency Input</strong> <code>EPCGExInputValueType</code></summary>

How to specify the potency (strength/magnitude).

| Value | Behavior |
|-------|----------|
| **Constant** | Use a fixed potency value |
| **Attribute** | Read potency from an attribute |

Default: `Attribute` (for point-based) or `Constant`

</details>

<details>
<summary><strong>Potency</strong> <code>double</code></summary>

The base strength/magnitude of the tensor.

Affects the length of the resulting direction vector.

Default: `1.0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Potency Falloff Curve</strong></summary>

Curve that modulates potency based on distance from effector.

Can use a local curve or reference an external asset.

</details>

<details>
<summary><strong>Potency Scale</strong> <code>double</code></summary>

Final multiplier applied after all potency calculations.

Use negative values to invert the tensor's influence.

Default: `1.0`

⚡ PCG Overridable

</details>

### Weight Falloff Settings

<details>
<summary><strong>Weight Input</strong> <code>EPCGExInputValueType</code></summary>

How to specify per-effector weight.

| Value | Behavior |
|-------|----------|
| **Constant** | Use a fixed weight value |
| **Attribute** | Read weight from an attribute |

Default: `Constant`

</details>

<details>
<summary><strong>Weight</strong> <code>double</code></summary>

Per-effector weight for blending.

Default: `1.0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Weight Falloff Curve</strong></summary>

Curve that modulates weight based on distance from effector.

Can use a local curve or reference an external asset.

</details>

### Effector Flatten Mode

<details>
<summary><strong>Effector Flatten Mode</strong> <code>EPCGExEffectorFlattenMode</code></summary>

How overlapping effectors within a single tensor are combined.

| Value | Behavior |
|-------|----------|
| **Weighted** | Weighted average of all effectors |
| **Closest** | Use only the closest effector |
| **Strongest (Weight)** | Use effector with highest weight |
| **Strongest (Potency)** | Use effector with highest potency |

Default: `Weighted`

</details>

### Guide Curve

<details>
<summary><strong>Guide Curve</strong> <code>FRuntimeVectorCurve</code></summary>

A 3D curve that can modulate the sampled direction based on distance.

Useful for creating twisted or varying directional patterns within an effector's influence.

Can use a local curve or reference an external asset.

</details>

### Sampling Mutations

<details>
<summary><strong>Invert</strong> <code>bool</code></summary>

Mirror the sampled direction (multiply by -1).

Default: `false`

</details>

<details>
<summary><strong>Bidirectional</strong> <code>bool</code></summary>

When enabled, performs a dot product with the probe's reference axis. If negative, the sampled direction is reversed.

Useful for ensuring consistent flow direction regardless of approach angle.

Default: `false`

</details>

<details>
<summary><strong>Scale Direction and Size</strong> <code>bool</code></summary>

Apply a scale factor to the direction and size.

Handy for "flattening" tensors (e.g., scale by (1, 1, 0) to remove vertical component).

Default: `false`

</details>

---

## Consuming Nodes

Nodes that use Tensor inputs:

- **Extrude Tensors** — Extrudes paths by following tensor fields
- **Tensors Transform** — Transforms points using tensor directions
- **Heuristics : Tensor** — Uses tensor as pathfinding heuristic
- **Probe : Tensor** — Probes for connectivity using tensor direction
- **Filter : Tensor Dot** — Filters based on tensor dot product

---

📦 **Module**: `PCGExElementsTensors` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/tree/dev/Source/PCGExElementsTensors/Public/Tensors)
