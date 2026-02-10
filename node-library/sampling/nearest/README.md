---
icon: grid-round-2
---

# Nearest

**Spatial query samplers that find nearby geometry and write the results as attributes.** Each node in this section targets a different kind of spatial data — points, bounds, splines, surfaces, or paths — but they share a common pattern: define a search, find matches, and output results as point attributes.

Not all samplers work by proximity. Bounds and path samplers default to **containment testing** — they check whether a point lies inside a target's boundary rather than searching for the nearest one. Path sampling goes both directions: points can sample the paths they're inside of, or paths can sample the target points they contain and write aggregated results to their `@Data` domain.

Point lookups give you distance-weighted blending against other collections. Spline sampling returns transforms, tangents, and alpha positions along curves. Surface sampling traces to collidable geometry and writes hit location, normal, and distance. Line tracing fires directed rays to collision surfaces, optionally capturing UV coordinates and vertex colors at the hit point.

Pick the geometry type you want to query, wire it in, and the sampler handles the spatial lookup.

### Concepts

* [Sampling](../../../working-with-pcgex/additional-systems/sampling.md)
