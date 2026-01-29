---
icon: arrows-to-dot
---

# Tensors

**Tensors are vector fields that tell points which way to go and how fast to move.**

Think of them as **invisible currents in 3D space** - like wind, water flow, gravity, or magnetic fields. Points can "sample" these currents to decide how to move, rotate, or behave.

[[image placeholder: 3D space with vector field arrows showing flow direction and magnitude, with points moving along the field lines]]

Just like paths and clusters, **tensors work with regular points**. The magic is in how those points create influence fields that other points can sample.

## The Core Concept

Imagine you drop a leaf into a river:
- The **river's current** is the tensor field (direction + strength at every position)
- The **leaf** samples the current at its position
- The leaf moves in that direction with that strength

[[image placeholder: Top-down view of curved river with arrows showing current direction, leaf floating and following the current]]

In PCGEx, you can create "rivers" (tensor fields) from:
- **Points** (each acts like a magnet, fan, or whirlpool)
- **Splines** (currents that follow curves)
- **Noise** (chaotic, organic flows)
- **Constants** (uniform flows in one direction)
- **Geometry** (surfaces that attract or repel)

## Why Use Tensors?

### Instead of This (Manual Math):
```
For each point:
  - Calculate direction to goal
  - Calculate strength based on distance
  - Apply some falloff curve
  - Blend multiple influences
  - Normalize and scale
  - Apply to point
```

### You Do This (Tensor Sampling):
```
For each point:
  - Sample tensor field at position
  - Apply result
```

[[image placeholder: Side-by-side graph comparison showing complex multi-node setup on left vs single tensor sampler on right]]

Tensors **encapsulate** the field logic, making complex influence systems simple to use and reuse.

## Tensors Are Just Point Collections

Remember: **No special data types.**

A tensor is defined by regular point collections called **Effectors**:
- Each effector point has position, rotation, and attributes
- Attributes define strength (**Potency**) and influence (**Weight**)
- When you sample the field, nearby effectors contribute based on distance

[[image placeholder: 3D space with effector points shown as colored spheres with influence radius rings, showing how influence decreases with distance]]

## Mental Models for Tensor Types

### Pole Tensor (Attraction/Repulsion)

**Like magnets or gravity wells.**

[[image placeholder: Points being pulled toward (or pushed away from) effector positions]]

- Positive strength = attraction (pulls points in)
- Negative strength = repulsion (pushes points away)
- Used for: Gravity, magnetism, attraction to goals

---

### Flow Tensor (Directional Currents)

**Like wind or water currents.**

[[image placeholder: Arrows showing directional flow from effector points, points moving in those directions]]

- Each effector has a direction (from its rotation)
- Points sample and move in that direction
- Used for: Wind, water flow, directional movement

---

### Spin Tensor (Rotational Forces)

**Like whirlpools or tornadoes.**

[[image placeholder: Circular flow pattern around effector points, showing rotational motion]]

- Creates circular motion around effector
- Strength controls spin speed
- Used for: Vortices, orbital motion, swirling patterns

---

### Inertia Tensor (Momentum)

**Like objects in motion stay in motion.**

[[image placeholder: Points continuing in their original direction with slight influence from field]]

- Uses point's existing direction/scale
- Maintains momentum through the field
- Used for: Smooth transitions, preserving motion

---

### Noise Tensor (Chaotic Fields)

**Like turbulence or chaos.**

[[image placeholder: Random-looking vector field with organic, unpredictable directions]]

- 3D Perlin noise generates direction at each position
- No effector points needed
- Used for: Organic variation, natural chaos, texture

---

## How Tensor Sampling Works

When a point samples a tensor field:

1. **Find nearby effectors** (using spatial acceleration)
2. **For each effector:**
   - Compute distance
   - Apply falloff curve (influence decreases with distance)
   - Calculate contribution (direction × potency × weight)
3. **Combine all contributions** (weighted average, closest, strongest, etc.)
4. **Return final vector** (direction + magnitude)

[[image placeholder: Step-by-step diagram showing point sampling 3 nearby effectors, computing weighted contributions, and arriving at final vector]]

You control:
- **Falloff curves:** How quickly influence decreases
- **Combination mode:** How multiple effectors blend
- **Potency/Weight per effector:** Strength of each source

## Integration Methods (How Points Move Through Fields)

Sampling gives you a vector at ONE position. To move through a field over time/distance, use **integration**:

### Basic Sampler
Sample once at current position, apply result.

**Use for:** Single-step transformations

---

### RK4 (Runge-Kutta 4th Order)
Samples at 4 positions per step for smooth, accurate curves.

[[image placeholder: Comparison showing basic sampling creating jagged path vs RK4 creating smooth curve through same field]]

**Use for:** Smooth paths, accurate trajectories

---

### Adaptive Integration
Automatically adjusts step size based on field complexity.

**Use for:** Fields with varying detail, performance optimization

---

## Common Use Cases

### Procedural Path Generation
Sample tensor field to create paths that follow natural flows.

[[image placeholder: River-like paths generated by following flow tensor field through terrain]]

**Example:** Rivers following terrain gravity + noise

---

### Point Transformation
Move points through tensor field for organic deformation.

[[image placeholder: Grid of points deformed into flowing, curved pattern by tensor field]]

**Example:** Cloth simulation, hair flow, particle effects

---

### Pathfinding with Environmental Forces
Use tensors as pathfinding heuristics to prefer certain directions.

[[image placeholder: Path avoiding areas of high repulsion, following areas of attraction]]

**Example:** Roads avoiding steep terrain, creatures avoiding danger zones

---

### Procedural Tree/Vein Growth
Extrude paths through tensor fields to create branching structures.

[[image placeholder: Tree-like structure growing up (gravity tensor) with noise creating organic branching]]

**Example:** Trees, blood vessels, lightning, cracks

---

### Dynamic Layouts
Position elements based on multiple competing influences.

[[image placeholder: Points distributed around scene with some attracted to light sources, repelled from obstacles]]

**Example:** Crowd distribution, resource placement, territory control

---

## Tensors with Other PCGEx Systems

Tensors integrate deeply with PCGEx:

### With Filters
**Tensor Dot Filter:** Filter points based on alignment with tensor direction.

[[image placeholder: Points colored by filter result - green where aligned with field, red where opposing]]

---

### With Heuristics
**Tensor Heuristic:** Pathfinding that follows tensor flow.

[[image placeholder: Multiple paths between same points, showing path following tensor field vs straight line]]

---

### With Probes
**Tensor Probe:** Connect points by probing in tensor direction.

[[image placeholder: Cluster built by connecting points in direction of tensor field]]

---

### With Paths
**Extrude Tensors:** Generate paths by stepping through tensor field.

[[image placeholder: Multiple paths extruded from seed points, following tensor field like wires in magnetic field]]

---

## Key Rules to Remember

{% hint style="success" %}
**Rule #1: Effectors are just points**\
Create them with any point generation method. Add attributes for Potency/Weight to control strength.
{% endhint %}

{% hint style="info" %}
**Rule #2: Falloff curves are critical**\
Bad falloff = weird results. Start with smooth curves (exponential, ease-out) not linear.
{% endhint %}

{% hint style="info" %}
**Rule #3: Multiple tensor types can combine**\
Stack pole + noise + flow for complex behaviors. Each adds to the final field.
{% endhint %}

{% hint style="warning" %}
**Rule #4: Dense effector fields = slow sampling**\
Keep effector count reasonable. Use spatial partitioning for large fields.
{% endhint %}

{% hint style="warning" %}
**Rule #5: Integration step size matters**\
Too large = jagged paths. Too small = slow performance. Tune based on field complexity.
{% endhint %}

## Dive Deeper

Ready to master tensors?

{% content-ref url="tensors-fundamentals.md" %}
[tensors-fundamentals.md](tensors-fundamentals.md)
{% endcontent-ref %}

{% content-ref url="effector-types.md" %}
[effector-types.md](effector-types.md)
{% endcontent-ref %}

{% content-ref url="integration-with-other-systems.md" %}
[integration-with-other-systems.md](integration-with-other-systems.md)
{% endcontent-ref %}

{% content-ref url="common-use-cases.md" %}
[common-use-cases.md](common-use-cases.md)
{% endcontent-ref %}

## The Big Picture

Tensors are PCGEx's answer to: _"How do I create organic, natural-looking motion and growth patterns?"_

- **Paths** = Connected journeys
- **Clusters** = Explicit relationships
- **Tensors** = Invisible forces

Together, they give you unprecedented control over procedural generation.
