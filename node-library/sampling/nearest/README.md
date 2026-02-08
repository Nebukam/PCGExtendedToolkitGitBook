---
icon: grid-round-2
---

# Nearest

**Spatial query samplers that find nearby geometry and write the results as attributes.** Each node in this section targets a different kind of spatial data — points, bounds, splines, surfaces, or paths — but they all work the same way: define a search, find the closest match, and output what you need as point attributes.

Point and bounds lookups give you distance-weighted blending against other collections. Spline sampling returns transforms, tangents, and alpha positions along curves. Surface sampling traces to collidable geometry and writes hit location, normal, and distance. Path lookups test proximity to edges and can determine whether a point sits inside a closed path boundary. Line tracing fires directed rays to collision surfaces, optionally capturing UV coordinates and vertex colors at the hit point.

That's it. Pick the geometry type you want to query, wire it in, and the sampler handles the spatial lookup.

### Concepts

* [Sampling](../../../working-with-pcgex/additional-systems/sampling.md)
