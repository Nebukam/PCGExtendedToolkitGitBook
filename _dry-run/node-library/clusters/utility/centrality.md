---
icon: chart-network
description: Compute betweenness centrality for vertices
---

# Centrality

Computes **betweenness centrality** for each vertex in a cluster. Centrality measures how often a vertex lies on shortest paths between other vertices - high centrality vertices are important "hubs" in the network.

```
Cluster:                    Centrality Values:
    ●───●───●                   Low ●───● Med ●───● Low
    │   │   │                       │   │       │
    ●───●───●      →              Med ●───● HIGH ●───● Med
    │   │   │                       │   │       │
    ●───●───●                   Low ●───● Med ●───● Low

                            Center vertex has highest centrality
                            (many shortest paths pass through it)
```

{% hint style="warning" %}
**Performance Warning:** Processing time increases exponentially with vertex count. Use downsampling for large clusters.
{% endhint %}

## Inputs & Outputs

| Label | Type | Description |
|-------|------|-------------|
| **In** | Points | Vtx points |
| **In** | Points | Edge points |
| **Heuristics** | Params (Heuristics) | Path heuristics for weighted centrality |
| **Vtx Filters** | Params (Filters) | Filter nodes for downsampling |
| **Out** | Points | Vtx with centrality attribute |
| **Out** | Points | Edges (forwarded) |

## Settings

### Heuristics

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Heuristic Score Mode | Enum | `WeightedAverage` | How to combine multiple heuristics |

When heuristics are provided, shortest paths are computed using weighted distances rather than hop count.

### Output

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Centrality Value Attribute Name | ⚡ Name | `Centrality` | Attribute to write centrality values |
| Normalize | ⚡ Bool | `true` | Normalize values to 0-1 range |
| OneMinus | ⚡ Bool | `false` | Invert normalized values (1 - value) |

### Downsampling

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Downsampling Mode | Enum | `None` | Strategy to reduce computation |

**Downsampling Modes** (`EPCGExCentralityDownsampling`):
| Value | Description |
|-------|-------------|
| `None` | Compute exact centrality (slowest) |
| `Ratio` | Use random subset of nodes |
| `Filters` | Use filtered subset of nodes |

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Ratio | ⚡ Random Ratio Details | - | Random sampling configuration |

## How It Works

### Betweenness Centrality

For each vertex `v`, betweenness centrality counts how many shortest paths between all other vertex pairs pass through `v`:

```
Example:
    A───B───C
        │
        D

Shortest paths:
  A→C: A-B-C (passes through B)
  A→D: A-B-D (passes through B)
  C→D: C-B-D (passes through B)

Centrality(B) = 3 (all paths through B)
Centrality(A) = 0 (no paths through A)
Centrality(C) = 0 (no paths through C)
Centrality(D) = 0 (no paths through D)
```

### Normalization

When **Normalize** is enabled, values are scaled relative to the maximum:

```
Raw values:      Normalized:
  B = 3            B = 1.0
  A = 0            A = 0.0
  C = 0            C = 0.0
  D = 0            D = 0.0
```

### OneMinus

When both **Normalize** and **OneMinus** are enabled:

```
Normalized:      OneMinus:
  B = 1.0          B = 0.0  (peripheral)
  A = 0.0          A = 1.0  (central)
  C = 0.0          C = 1.0  (central)
  D = 0.0          D = 1.0  (central)
```

This inverts the meaning: high values = edge nodes, low values = hub nodes.

### Weighted Centrality

With heuristics, edge weights affect which paths are considered "shortest":

```
Without weights:          With edge weights:
  A───B───C                 A──1──B──10──C

  A→C: A-B-C (2 hops)       A→C: A-B-C (cost 11)

  Paths use hop count       Paths use heuristic cost
```

## Performance

Centrality computation is O(V × E) where V = vertices, E = edges. For large clusters:

| Vertices | Approximate Time |
|----------|------------------|
| 100 | Fast |
| 1,000 | Seconds |
| 10,000+ | Very slow |

Use downsampling for approximation on large clusters.

## Use Cases

### Finding Hub Vertices

```
High centrality vertices are good candidates for:
  - Room entrances in dungeons
  - Main intersections in road networks
  - Central nodes in communication networks
```

### Network Analysis

```
Centrality + Threshold → Find critical vertices
  If removed, would disconnect the network
```

### Visualization

```
Map centrality to:
  - Vertex size (bigger = more central)
  - Vertex color (gradient from edge to hub)
  - Spawn density (more spawns near hubs)
```

---

📦 **Module**: `PCGExElementsClusters`
