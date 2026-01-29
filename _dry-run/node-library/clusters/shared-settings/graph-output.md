---
icon: project-diagram
---

# Graph Output Settings

Most cluster-building nodes share a common set of output settings that control how the generated graph (vertices and edges) is written. These appear as `FPCGExGraphBuilderDetails` in the code and typically show under an "Output" or "Graph Output" section.

## Edge Position

### Write Edge Position

<details>
<summary><strong>Write Edge Position</strong> <code>bool</code></summary>

Creates point data for edges with positions interpolated between their endpoint vertices.

Default: Enabled

</details>

### Edge Position

<details>
<summary><strong>Edge Position</strong> <code>double</code></summary>

Interpolation factor for edge point positions:
- `0.0` = At start vertex
- `0.5` = Midpoint (default)
- `1.0` = At end vertex

Default: `0.5`

⚡ PCG Overridable

</details>

### Basic Edge Solidification

When Write Edge Position is enabled, basic solidification options become available:

<details>
<summary><strong>Solidification Axis</strong> <code>None | X | Y | Z</code></summary>

Aligns edge points to the edge direction over the selected axis. Use `None` for no alignment.

For full control over edge transforms, use the dedicated Edge Properties node instead.

Default: `None`

</details>

<details>
<summary><strong>Radius Type</strong> <code>Average | Lerp | Min | Max | Fixed</code></summary>

How to calculate edge point scale from endpoint bounds:

| Option | Calculation |
|--------|-------------|
| **Average** | Average of endpoint radii |
| **Lerp** | Interpolate based on edge position |
| **Min** | Smaller endpoint radius |
| **Max** | Larger endpoint radius |
| **Fixed** | Use constant value |

Default: `Lerp`

</details>

---

## Cluster Size Filtering

### Remove Small Clusters

<details>
<summary><strong>Remove Small Clusters</strong> <code>bool</code></summary>

Don't output clusters below a minimum size threshold.

Default: Disabled

</details>

<details>
<summary><strong>Min Vtx Count</strong> <code>int32</code></summary>

Minimum vertices required. Clusters with fewer are discarded.

Default: `3`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Min Edge Count</strong> <code>int32</code></summary>

Minimum edges required. Clusters with fewer are discarded.

Default: `3`

⚡ PCG Overridable

</details>

### Remove Big Clusters

<details>
<summary><strong>Remove Big Clusters</strong> <code>bool</code></summary>

Don't output clusters above a maximum size threshold.

Default: Disabled

</details>

<details>
<summary><strong>Max Vtx Count</strong> <code>int32</code></summary>

Maximum vertices allowed. Clusters with more are discarded.

Default: `500`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Max Edge Count</strong> <code>int32</code></summary>

Maximum edges allowed. Clusters with more are discarded.

Default: `500`

⚡ PCG Overridable

</details>

---

## Caching & Pre-Building

### Build and Cache Clusters

<details>
<summary><strong>Build and Cache Clusters</strong> <code>Default | Enabled | Disabled</code></summary>

Output built cluster data alongside the graph for downstream consumption. Caching clusters avoids rebuilding them in later nodes.

Default: `Default` (node decides)

</details>

### Pre-Build Face Enumerator

<details>
<summary><strong>Pre-Build Face Enumerator</strong> <code>bool</code></summary>

Pre-compute planar face enumeration for cell-finding operations. Downstream nodes with matching projection settings will reuse this cache.

Default: Disabled

</details>

<details>
<summary><strong>Face Enumerator Projection</strong> <code>Projection Settings</code></summary>

2D projection settings for face enumeration. Only downstream nodes using the same projection can reuse the cache.

</details>

---

## Extra Data

### Output Edge Length

<details>
<summary><strong>Output Edge Length</strong> <code>bool</code></summary>

Write edge length as a `double` attribute on edge points.

Default: Disabled

</details>

<details>
<summary><strong>Edge Length Name</strong> <code>FName</code></summary>

Attribute name for edge length.

Default: `EdgeLength`

</details>

### Refresh Edge Seed

<details>
<summary><strong>Refresh Edge Seed</strong> <code>bool</code></summary>

Regenerate random seeds for edge points.

Default: Disabled

</details>

---

## Nodes Using These Settings

These settings appear on most cluster-building nodes:

- Build Delaunay Graph (2D/3D)
- Build Voronoi Graph (2D/3D)
- Build Convex Hull (2D/3D)
- Build Custom Graph
- Path to Clusters
- Mesh to Clusters
- Connect Clusters
- Fuse Clusters
- Simplify Clusters
- Sanitize Clusters
- Refine Edges
- And more...

---

📦 **Module**: `PCGExGraphs` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExGraphs/Public/Graphs/PCGExGraphDetails.h)
