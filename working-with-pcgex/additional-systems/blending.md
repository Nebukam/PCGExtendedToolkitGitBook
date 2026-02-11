---
icon: blender
---

# Blending

**When a node combines data from multiple sources, something has to decide how attributes merge. That's blending.** A sampler finds three nearby points. What happens to their colors, densities, custom values? Blending defines the math. You configure _what_ gets blended and _how_; the consuming node handles the _when_.

Blending is a sub-node system. It follows the same provider/consumer pattern as filters and match rules, but instead of pass/fail decisions, it produces combined attribute values.

### What does blending do?

Every time a node merges point data (sampling neighbors, fusing overlapping points, smoothing a path), it needs a strategy for each attribute. Blending provides that strategy.

It controls:

* Which attributes participate (all, a specific list, or everything except a list)
* How each attribute combines (average, lerp, copy, min, max, sum, and others)
* Whether built-in point properties (`$Position`, `$Rotation`, `$Scale`, `$Color`, etc.) get special treatment

Without explicit blending configuration, most consuming nodes fall back to sensible defaults. But once you need per-attribute control, blending is where you get it.

### Where does it show up?

Any node with a **Blending** pin is a blending consumer. The most common ones:

| Node                                                                                                        | Context                                                 |
| ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| [sample-nearest-point.md](../../node-library/sampling/nearest/sample-nearest-point.md "mention")            | Transfer and blend attributes from nearby target points |
| [sample-nearest-bounds.md](../../node-library/sampling/nearest/sample-nearest-bounds.md "mention")          | Blend attributes from nearest bounds                    |
| [smoothing.md](../../node-library/paths/transform/path-smooth/smoothing.md "mention")                       | Blend attributes during path smoothing                  |
| [path-blend.md](../../node-library/paths/modify/path-blend.md "mention")                                    | Interpolate attributes along a path between endpoints   |
| [cluster-edge-properties.md](../../node-library/clusters/analyze/cluster-edge-properties.md "mention")      | Blend vtx attributes when writing edge properties       |
| [uber-blend.md](../../node-library/metadata/modify/uber-blend.md "mention")                                 | Standalone blending: apply BlendOps to any point set    |
| [sampler-vtx-blend.md](../../node-library/sampling/cluster-sample-neighbors/sampler-vtx-blend.md "mention") | Blend neighbor attributes during cluster sampling       |

If you see a "Blending" or "Blend Ops" pin on a node, that node is a consumer.

### How is blending configured?

Two interfaces exist: **Individual** and **Monolithic**. Nodes that support both expose a `Blending Interface` setting to switch between them.

#### Individual (BlendOp sub-nodes)

The default on most nodes. You connect **BlendOp** sub-nodes to the Blending pin, one per attribute you care about.

Each BlendOp targets a single attribute with a single blend mode. Different attributes get different treatment: average the color, copy the density, sum a custom score. Maximum control.

```
BlendOp (Average) → "Color"    ─┐
BlendOp (Copy)    → "Density"   ├──► Blending pin on consumer node
BlendOp (Sum)     → "Score"    ─┘
```

Best when you care about a few specific attributes and want precise per-attribute behavior.

See [blendop.md](../../node-library/metadata/blending/blendop.md "mention") for the full BlendOp node reference.

#### Monolithic (bulk configuration)

Switch `Blending Interface` to `Monolithic` and the node exposes an inline settings block instead of a sub-node pin. You set a **default blend mode** applied to all attributes, then override individual attributes or properties as needed.

Key settings:

* **Blending Filter** — All / Include / Exclude. Controls which attributes participate.
* **Default Blending** — The fallback mode for any attribute without a specific override.
* **Properties Overrides** — Per-property overrides for `$Position`, `$Rotation`, `$Scale`, `$Color`, `$Density`, `$BoundsMin`, `$BoundsMax`, `$Steepness`, `$Seed`.
* **Attributes Overrides** — A name-to-mode map for custom attributes.

Best when you want to blend everything (or everything except a short exclusion list) with the same mode.

See [blending-details-monolithic.md](../../node-library/common-settings/blending-details-monolithic.md "mention") for the full settings reference.

### How does a BlendOp work?

A BlendOp defines a single blend operation between two operands:

* **Operand A** — the attribute on the target point (or a constant)
* **Operand B** — optionally a different attribute. If disabled, Operand A is used for both sides.
* **Blend Mode** — how A and B combine
* **Output** — where the result lands (back onto A, onto B, into a new attribute, or into a transient attribute)

The core blend modes:

| Mode                      | Behavior                                          |
| ------------------------- | ------------------------------------------------- |
| **Average**               | Arithmetic mean of all values                     |
| **Weight**                | Weighted average (normalizes by total weight)     |
| **Min** / **Max**         | Component-wise minimum or maximum                 |
| **Copy**                  | Takes A directly                                  |
| **Sum**                   | Adds values together                              |
| **Lerp**                  | Linear interpolation between A and B using weight |
| **Subtract**              | Subtracts B from A                                |
| **Multiply** / **Divide** | Component-wise multiplication or division         |
| **Add**                   | A + B (binary addition)                           |

{% hint style="info" %}
BlendOps support **transient output**: writing to a temporary attribute that only exists during the blending pass. A later BlendOp (with higher Priority) can read that transient value as its own operand. This lets you chain multi-step calculations without leaving intermediary attributes in your data.
{% endhint %}

### What about weights?

Weights control _how much_ each source contributes to the blend. There are two layers:

**1. Consumer-computed weights.** The consuming node calculates a weight for each source point, typically based on distance. A nearby point contributes more than a distant one. Most samplers expose a `Weight Mode` setting (Distance, Attribute, or Constant) and a `Weight Remap` curve.

**2. Per-BlendOp weights.** Each BlendOp can carry its own weight, either a constant value or read from an attribute. This weight is applied _on top of_ whatever the consumer provides. A weight curve can remap the value before it's used.

For multi-source blending (sampling multiple neighbors, fusing several points), the system accumulates blend steps internally and finalizes at the end. Average mode divides by count, Weight mode normalizes by total weight. The math stays correct regardless of how many sources contribute.

### Common patterns

**Transfer attributes from the nearest point** — Use **Sample Nearest Point** with a BlendOp set to `Copy` on each attribute you want to carry over. Copy ignores weight; you get the value from the closest match.

**Smooth neighbors** — Use **Sample Neighbors** with a BlendOp set to `Average`. Each vtx receives the mean of its neighbors' values.

**Blend everything with one mode** — Switch to `Monolithic`, set the default blending to `Average` (or `Weight`), and leave the filter on `All`. Override individual properties if needed.

**Multi-step calculation** — Chain BlendOps using transient output. Priority 0 computes an intermediate value; Priority 1 reads that transient and produces the final result.

### Related

* [blendop.md](../../node-library/metadata/blending/blendop.md "mention") — BlendOp node reference
* [uber-blend.md](../../node-library/metadata/modify/uber-blend.md "mention") — Standalone blending node
* [blending-details-monolithic.md](../../node-library/common-settings/blending-details-monolithic.md "mention") — Monolithic settings reference
* [sampling.md](sampling.md "mention") — Sampling concept page
* [provider-consumer-pattern.md](../architecture/provider-consumer-pattern.md "mention") — How sub-nodes work
