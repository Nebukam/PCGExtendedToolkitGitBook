# Sampling

**"What's nearest? What's the value here? How far away is that?"** Sampling answers spatial questions. You have a set of points and you want them to know something about the world around them — the closest surface, the nearest neighbor's attributes, the distance to a spline. Sampling queries a target and writes the answer back onto your points.

The mental model is simple: **source points ask, targets answer, attributes carry the result.**

<!-- IMAGE: Points sampling nearest surface — arrows from source points to surface, with attributes transferring back -->

## Spatial Samplers

These find the nearest thing and extract data from it:

| Sampler | Target | Key Output |
|---------|--------|------------|
| **Nearest Point** | Other point sets | Transform, distance, transferred attributes from closest point(s) |
| **Nearest Bounds** | Point bounds (box/sphere) | Distance, signed distance, component-wise distance to nearest bounds |
| **Nearest Spline** | Spline curves | Position on spline, tangent, alpha (normalized position along curve) |
| **Nearest Surface** | Collision surfaces | Hit location, normal, physical material, inside/outside detection |
| **Line Trace** | Collision surfaces | Directed trace — hit point, normal, UV coords, vertex color, face index |
| **Nearest Path** | Paths (as edges) | Nearest point on path edges, signed distance, inside/outside for closed paths |
| **Inside Path** | Closed paths | Containment test — whether points lie inside closed path boundaries |

Most spatial samplers support multiple **sample methods**: within range (all targets in radius), closest, farthest, or best candidate (weighted evaluation). Results include success/failure flags, distance, and optional look-at transforms.

**Nearest Surface** and **Line Trace** both use collision queries but serve different purposes — Nearest Surface searches omnidirectionally from each point, while Line Trace fires in a specific direction with configurable origin and distance.

## Overlap and Pruning

A separate family of samplers deals with overlap between datasets or within a single dataset:

| Node | Purpose |
|------|---------|
| **Discard By Overlap** | Scores entire datasets by how much they overlap others, then prunes low- or high-scoring sets |
| **Overlap Stats** | Writes per-point overlap counts — how many other datasets overlap each point |
| **Self Pruning** | Removes overlapping points within a single collection, with optional OBB precision testing |

These are useful for cleaning up overlapping distributions before spawning.

## Texture Sampling

Texture sampling uses a three-node pipeline:

1. **Texture Params** (sub-node) — define what to extract: which texture parameter, which channels (R, G, B, A, RGB, RGBA), output type
2. **Get Texture Data** — load textures from material paths or direct texture paths, with tiling and transform options
3. **Sample Texture** — sample the loaded texture at UV coordinates and write values to attributes

Multiple texture params can feed into a single sampling pass, extracting different channels or textures simultaneously.

## Mesh Socket Extraction

**Sample Sockets** extracts socket positions from static meshes as new points — with tag and name filtering to select specific sockets. This feeds into modular construction workflows where named attachment points drive procedural assembly.

## Data Transfer

Sampling is also the primary tool for **transferring attributes between datasets**. If you've processed points through a cluster workflow and need to bring values back from an earlier state, you sample the original dataset from the processed one. The nearest-point query bridges the two, carrying attributes across.

{% hint style="success" %}
Sampling is the glue between processing stages. Whenever you need to recover attributes lost during conversion or bring in data from a separate source, a sampling pass handles it.
{% endhint %}

## Related

- [Sampling Nodes](/node-library/sampling/)
- [Filters](/concepts/04-filters/) - Distance filters use similar spatial queries
- [Cluster Path Interop](/concepts/03-clusters/cluster-path-interop.md) - Sampling for attribute recovery across formats
