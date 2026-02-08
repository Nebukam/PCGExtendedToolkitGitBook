---
icon: grid-2
---

# Tensors

**Each tensor effector defines a directional field that samplers read during tracing.** You build complex tensor fields by layering multiple effectors together — their influences blend at each sample point based on weight and falloff.

The simplest effector is a constant field: one direction everywhere, useful as a baseline or fallback. From there, poles create radial attraction or repulsion around points, spin effectors produce rotational vortex patterns, and noise effectors drive direction from 3D noise functions. Null effectors carve out dead zones that cancel other tensor influence in a region.

Effectors can also follow existing geometry. Spline and path variants produce fields that either flow along the curve or attract toward it. Surface effectors derive direction from collidable geometry — along the surface, toward it, away from it, or orbiting around it. Inertia effectors carry momentum from seed transforms forward through the field.

### Concepts

* [Tensor Concepts](../../../working-with-pcgex/additional-systems/tensors.md)
