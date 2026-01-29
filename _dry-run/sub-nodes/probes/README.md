# Probes

Probes define **connection strategies** for the **Connect Points** node — they determine how point clouds are transformed into connected graphs/clusters. Each probe type uses different algorithms to decide which points should be connected.

---

## What Is a Probe?

A probe examines candidate connections and decides which ones to create:

```
Point Cloud                    Connected Graph

    ●  ●  ●                    ●──●──●
                       ──►        │  │
    ●  ●  ●                    ●──●──●
                                  │
    ●  ●  ●                    ●──●──●

Probes determine the connection pattern
```

---

## Probe Categories

### Local Probes
Process each point individually, searching within a radius:

| Probe | Description |
|-------|-------------|
| [Closest](closest.md) | Connect to N closest points within radius |
| [Direction](direction.md) | Connect to points in a specified direction |
| [Anisotropic](anisotropic.md) | Connect in 16 fixed directions (grid-like) |
| [Index](index.md) | Connect by explicit index reference |
| [Numeric Compare](numeric-compare.md) | Connect where attribute comparison passes |
| [Bitmasks](bitmasks.md) | Connect using bitmask-based direction rules |

### Global Probes (G-Probe)
Process all points together using global algorithms:

| Probe | Description |
|-------|-------------|
| [KNN](knn.md) | K-Nearest Neighbors connectivity |
| [DBSCAN](dbscan.md) | Density-based spatial clustering |
| [Chain](chain.md) | Sequential chain based on sorting |
| [Hub & Spoke](hub-spoke.md) | Hierarchical hub-and-spoke topology |
| [Gradient Flow](gradient-flow.md) | Follow gradient of an attribute |
| [Spanner](spanner.md) | Greedy t-spanner sparse graph |
| [Theta](theta.md) | Theta/Yao graph using angular cones |
| [Level Set](level-set.md) | Connect points with similar values |
| [Global Anisotropic](global-anisotropic.md) | Ellipsoidal distance connectivity |

---

## Local vs Global Probes

### Local Probes
- Process points one at a time
- Use search radius to find candidates
- Faster for sparse connections
- Can create asymmetric connections

### Global Probes (G-Probe)
- Analyze the entire point set
- Often produce more structured graphs
- Can guarantee mathematical properties
- May be slower on large datasets

---

## Shared Settings

All probes share common base settings:

<details>
<summary><strong>Search Radius Input</strong> <code>EPCGExInputValueType</code></summary>

How to specify the search radius.

| Value | Behavior |
|-------|----------|
| **Constant** | Use a fixed radius |
| **Attribute** | Read radius from an attribute |

Default: `Constant`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Search Radius</strong> <code>double</code></summary>

Maximum distance to search for connection candidates.

*Visible when Search Radius Input = Constant*

Default: `100.0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Search Radius (Attr)</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

Attribute to read the search radius from.

*Visible when Search Radius Input = Attribute*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Search Radius Offset</strong> <code>double</code></summary>

Static offset added to the attribute value.

*Visible when Search Radius Input = Attribute*

Default: `0.0`

⚡ PCG Overridable

</details>

---

## Combining Probes

Multiple probes can be connected to **Connect Points**:

```
[Probe: Closest] ──┐
                   ├──► [Connect Points] ──► Graph
[Probe: Direction]─┘

Connections from all probes are combined
```

---

## Consuming Nodes

Nodes that use Probe inputs:

- **Connect Points** — Main consumer, builds graphs from point clouds

---

## Choosing the Right Probe

| Use Case | Recommended Probe |
|----------|------------------|
| Simple nearest neighbors | Closest, KNN |
| Grid-like patterns | Anisotropic |
| Directional (facing) | Direction |
| Sequential paths | Chain |
| Hierarchical networks | Hub & Spoke |
| Height-based flow | Gradient Flow |
| Sparse, well-spread | Spanner, Theta |
| Elevation contours | Level Set |
| Attribute-based rules | Numeric Compare |
| Complex directional rules | Bitmasks |

---

📦 **Module**: `PCGExElementsProbing` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/tree/dev/Source/PCGExElementsProbing/Public/Probes)
