---
icon: bullseye-pointer
description: Pick clusters closest to target points
---

# Pick Closest

Selects clusters based on their proximity to target points. Each target point can pick the closest cluster, allowing you to filter clusters by spatial relationships.

```
Targets:    Clusters:             Result (Keep):
    ★           ●───●                 ●───●
                │   │                 │   │
            ●───●───●      →      ●───●───●
                │   │
                ●───●          (closest to ★)

    ★       ●───●              (other cluster omitted)
            │   │
            ●───●
```

## How It Works

### Basic Selection

```
Step 1: Find Distances       Step 2: Pick Closest
     ★                            ★
     │                            │
d=10─┼─d=50                       └─→ Pick
     │
  Cluster A                    Cluster A selected

d=30─┼─d=20
     │
  Cluster B
```

For each target, distances are computed to all clusters. The cluster with minimum distance is selected.

### Pick Mode: Next Best

```
Target 1 ★ → Cluster A (d=10)     ✓ Picked
Target 2 ★ → Cluster A (d=15)     Already picked!
         ↳ → Cluster B (d=20)     ✓ Picked instead
```

With **NextBest** mode, if a cluster was already picked by another target, the next closest cluster is selected. This ensures each target gets a unique cluster (when possible).

### Search Mode: Edge

```
Search Mode = Vtx:          Search Mode = Edge:
    ★                           ★
    │                           │
    ↓ d=50                      ↓ d=30 (to edge)
    ●───────────●               ●───────────●
```

When using **Edge** search mode, distance is measured to the closest point on any edge, which may be closer than either endpoint.

## Use Cases

### Associating Clusters with Locations

```
Spawn Points:        Clusters:         Assignment:
    ★ A                  ●───●             Cluster 1 → A
                         │   │
    ★ B                  ●───●   →        Cluster 2 → B

                         ●───●             Cluster 3 → C
    ★ C                  │   │
                         ●───●
```

### Filtering by Region

Use target points to define regions, then keep only clusters within those regions.

```
Region Centers:        Result:
    ★   ★               ●───●   ●───●
                        │   │   │   │
                        ●───●   ●───●

    (other clusters outside regions removed)
```


## Inputs & Outputs

| Label | Type | Description |
|-------|------|-------------|
| **In** | Points | Vtx points |
| **In** | Points | Edge points |
| **Targets** | Points | Target points for proximity search |
| **Out** | Points | Vtx (filtered) |
| **Out** | Points | Edges (filtered) |

## Settings

### Search Configuration

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Search Mode | Enum | `Vtx` | What to measure distance to |
| Pick Mode | Enum | `OnlyBest` | How to handle duplicate picks |
| Action | ⚡ Enum | `Keep` | What to do with picked clusters |

**Search Mode** (`EPCGExClusterClosestSearchMode`):
| Value | Description |
|-------|-------------|
| `Vtx` | Distance to nearest vertex |
| `Edge` | Distance to nearest edge, then endpoint |

**Pick Mode** (`EPCGExClusterClosestPickMode`):
| Value | Description |
|-------|-------------|
| `OnlyBest` | Allow same cluster to be picked by multiple targets |
| `NextBest` | If already picked, select next best candidate |

**Action** (`EPCGExFilterDataAction`):
| Value | Description |
|-------|-------------|
| `Keep` | Output only picked clusters |
| `Omit` | Output clusters NOT picked |
| `Tag` | Tag clusters instead of filtering |

### Bounds Expansion

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Target Bounds Expansion | ⚡ Double | `10` | Expand target bounds for initial search |
| Expand Search Outside Target Bounds | ⚡ Bool | `true` | Search globally if no cluster found within bounds |

### Tagging (Tag Action)

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Keep Tag | ⚡ Name | - | Tag applied to picked clusters |
| Omit Tag | ⚡ Name | - | Tag applied to non-picked clusters |

### Data Forwarding

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Target Attributes to Tags | ⚡ Attribute To Tag Details | - | Copy target attributes as cluster tags |
| Target Forwarding | ⚡ Forward Details | - | Forward target attributes to picked clusters |

---

📦 **Module**: `PCGExElementsClusters`
