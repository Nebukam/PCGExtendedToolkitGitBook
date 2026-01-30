---
icon: scissors
description: Cut cluster nodes and edges using paths
---

# Cut Clusters

Uses paths as cutting tools to remove or keep cluster elements based on overlap. Paths act like "erasers" or "selection brushes" that affect nodes and edges they intersect.

```
Cluster:                Path:               Result (Cut):
    ●───●───●               ────────            ●───●
    │   │   │                  │                │
    ●───●───●      +           │        →       ●───●
    │   │   │                  │
    ●───●───●               ────────        (path-overlapping
                                             elements removed)
```

## Inputs & Outputs

| Label | Type | Description |
|-------|------|-------------|
| **In** | Points | Vtx points |
| **In** | Points | Edge points |
| **Paths** | Points | Cutting path points |
| **Node Filters** | Params (Filters) | Additional node filtering |
| **Edge Filters** | Params (Filters) | Additional edge filtering |
| **Out** | Points | Remaining Vtx |
| **Out** | Points | Remaining Edges |

## Settings

### Mode

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Mode | ⚡ Enum | `NodesAndEdges` | What cluster elements to check for overlap |

**Mode** (`EPCGExCutEdgesMode`):
| Value | Description |
|-------|-------------|
| `Nodes` | Only check path overlap with vertices |
| `Edges` | Only check path overlap with edges |
| `NodesAndEdges` | Check overlap with both |

### Intersection

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Intersection Details | ⚡ Path Edge Intersection Details | - | Settings for path-to-edge overlap detection |
| Invert | ⚡ Bool | `false` | Keep overlapping elements instead of removing |

When **Invert** is enabled, the behavior reverses: elements that overlap with paths are kept, and non-overlapping elements are removed.

### Node Settings

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Node Expansion | ⚡ Double | `1` | Expand node bounds for overlap checking |
| Node Distance Settings | ⚡ Enum | `Center` | Measure distance from center or bounds |
| Affected Nodes Affect Connected Edges | ⚡ Bool | `false` | When node is affected, also affect its edges |

### Edge Settings

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Affected Edges Affect Endpoints | ⚡ Bool | `false` | When edge is affected, also affect endpoint nodes |

### Invert Mode Settings

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Keep Edges That Connect Valid Nodes | ⚡ Bool | `false` | When inverted, keep edges between preserved nodes |

### Output

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Cluster Output Settings | ⚡ Graph Builder Details | - | Standard cluster output configuration |

## How It Works

### Basic Cutting

```
Step 1: Detect Overlap      Step 2: Remove Affected
    ●───●───●                   ●───●
    │   │   │                   │
    ●━━━●━━━● ← path    →      ●   ● (edges cut)
    │   │   │                   │
    ●───●───●                   ●───●
```

Elements (nodes/edges) that overlap with the path are marked for removal.

### Node Expansion

```
Node Expansion = 0:          Node Expansion = 10:
  Path must touch node         Path within 10 units
  exactly to affect it         of node affects it

      ●                            ●
      │                           ╱│╲
   ───┼───                    ───╱─┼─╲───
      │                           ╲│╱
      ●                            ●
```

### Cascade Effects

**Affected Nodes Affect Connected Edges:**
```
Node touched by path → Node removed → Connected edges removed
    ●───●───●                         ●   ●
    │   X   │           →                 │
    ●───●───●                         ●───●
        ↑
    path touches
```

**Affected Edges Affect Endpoints:**
```
Edge crossed by path → Edge removed → Endpoint nodes removed
    ●───●───●                         ●       ●
    │   │   │           →                     │
    ●───X───●                                 ●
        ↑
    path crosses
```

### Inverted Mode

```
Normal (Invert = false):    Inverted (Invert = true):
  Remove overlapping          Keep overlapping

      ●───●                       ●
      │   │                       │
  ────●   ●   →               ────●   (only overlapping
      │   │                       │    elements kept)
      ●───●                       ●
```

**Keep Edges That Connect Valid Nodes:**
```
When inverted, edges between preserved nodes are kept
even if the edge itself wasn't directly touched by the path.
```

## Use Cases

### Terrain Carving

```
Path = River course
Cluster = Road network

Cut roads where river crosses:
    Road─────Road
         ≈≈≈ (river)
    Road─────Road
         ↓
    Road  ≈≈≈  Road (gap where river crosses)
```

### Region Masking

```
Path = Region boundary
Invert = true

Keep only elements inside the boundary:
    ┌─────────┐
    │ ●───●   │
    │ │   │   │
    │ ●───●   │
    └─────────┘
```

### Destructible Networks

```
Path = Explosion radius
Node Expansion = Explosion size

Remove network elements within blast radius
```

### Path-Based Selection

```
Draw a path through areas to select/deselect
Use filters for additional criteria
```

---

📦 **Module**: `PCGExElementsClusters`
