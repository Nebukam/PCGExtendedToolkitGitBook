---
icon: grid-round-2
---

# Noise

**Procedural noise generation written directly to point attributes.** **Uber Noise** is the main entry point — it exposes algorithm selection so you can pick the noise type that fits the pattern you need. The available range covers Perlin, Simplex, Voronoi, Worley, value noise, FBM layering, curl, gabor, marble, spots, caustic, swiss erosion, tiling variants, and more.

All noise is evaluated in 3D from point positions. The output is written as attributes, so it feeds naturally into any downstream node that reads attribute values — filters, blending, color ramps, displacement.
