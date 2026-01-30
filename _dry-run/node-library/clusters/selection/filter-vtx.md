---
icon: filter
description: Filter vertices from clusters using the PCGEx filter system
---

# Filter Vtx

Filters vertices from clusters based on filter conditions. Can output modified clusters, separated point collections, or write filter results to an attribute.

```
Input Cluster:              After Filtering (Mode: Clusters):
    ●───●───●                   ●───●
    │   │   │                   │
    ●───●───●      →            ●───●
    │   │   │
    ●───●───●        Vertices failing filter removed,
                     edges invalidated
```


## How It Works

### Clusters Mode

```
1. Filter Vertices      2. Invalidate Edges     3. Rebuild Cluster
   ●=keep ○=remove         ●─X─○                   ●───●
   ●   ○   ●               │ X │                   │
   │   │   │               ●─X─○       →          ●
   ●   ●   ○       →       │ │ X
   │   │   │               ●─●─X
   ●   ●   ●
```

Vertices that fail the filter are removed. If **Node Invalidate Edges** is enabled, all edges connected to removed vertices are also removed. The cluster is then rebuilt with valid connections only.

### Points Mode

```
Input:              Inside (passed):     Outside (failed):
  ●=pass ○=fail         ●                    ○   ○
  ●   ○   ○             ●   ●
  │   │   │                      →              ○
  ●   ●   ○         ●   ●
  │   │   │
  ●   ○   ●             ●       ●
```

Vertices are separated into Inside (passed filter) and Outside (failed filter) collections. Original edge connectivity is lost but can be used to partition the outputs.

### Attribute Mode

```
Input:                      Output:
  ●   ●   ●                 ●(T) ●(F) ●(T)
  │   │   │       →         │    │    │
  ●   ●   ●                 ●(T) ●(T) ●(F)

                        PassedFilter attribute added
```

Original cluster structure is preserved, but a boolean attribute is written indicating whether each vertex passed the filter.

---

## Inputs & Outputs

| Label | Type | Description |
|-------|------|-------------|
| **In** | Points | Vtx points |
| **In** | Points | Edge points |
| **Vtx Filters** | Params (Filters) | Filter factories for vertex filtering |
| **Sanitize Filters** | Params (Filters) | Edge filters for cluster output mode |

**Outputs vary by Mode:**

| Mode | Outputs |
|------|---------|
| Clusters | Vtx Out, Edges Out (filtered clusters) |
| Points | Inside, Outside (separated point collections) |
| Attribute | Vtx Out, Edges Out (original with attribute) |

## Settings

### Mode

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Mode | Enum | `Clusters` | Output format |

**Mode Options** (`EPCGExVtxFilterOutput`):
| Value | Description |
|-------|-------------|
| `Clusters` | Output filtered clusters (Vtx + Edges) |
| `Points` | Output Inside/Outside point collections |
| `Attribute` | Write filter result to boolean attribute |

### Filter Behavior

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Result | ⚡ Filter Result Details | - | Attribute settings for filter result (Attribute mode) |
| Node Invalidate Edges | ⚡ Bool | `false` | Remove edges connected to filtered vertices |
| Invert | ⚡ Bool | `false` | Invert the filter result |
| Invert Edge Filters | ⚡ Bool | `false` | Invert edge filter result (Clusters mode) |

### Points Mode Settings

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Split Outputs by Connectivity | Bool | `true` | Partition Inside/Outside by original edge connectivity |
| Swap | Bool | `false` | Swap Inside and Outside outputs |

### Cluster Output Settings

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Cluster Output Settings | ⚡ Graph Builder Details | - | Settings for rebuilding cluster output |

## Use Cases

### Removing Leaf Nodes

```
Filter: EdgeCount > 1

Before:               After:
  ●───●───●           ●───●───●
  │   │                   │
  ●   │       →          │
      │                   │
      ●                   ●
```

### Keeping Interior Vertices

```
Filter: NOT OnBoundary

Before:               After:
  ●───●───●               ●
  │   │   │               │
  ●───●───●    →          ●
  │   │   │               │
  ●───●───●               ●
```

---

📦 **Module**: `PCGExElementsClusters`
