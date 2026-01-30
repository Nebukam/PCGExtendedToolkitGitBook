---
icon: copy
description: Create cluster copies at target point locations
---

# Copy Clusters to Points

Creates copies of input clusters at target point locations. Each target point receives a transformed copy of the cluster, optionally matched by attribute.

```
Cluster:        Targets:            Output:
  ●───●             ★                   ●───●
  │   │             ★       →           │   │  (at ★ positions)
  ●───●             ★                   ●───●
                                        ●───●
                                        │   │
                                        ●───●
                                        ●───●
                                        │   │
                                        ●───●
```

## Inputs & Outputs

| Label | Type | Description |
|-------|------|-------------|
| **In** | Points | Vtx points |
| **In** | Points | Edge points |
| **Targets** | Points | Target points for cluster placement |
| **Vtx** | Points | Copied vertex points |
| **Edges** | Points | Copied edge points |

{% hint style="warning" %}
**Note:** This node does not sanitize input. Ensure clusters are valid before copying.
{% endhint %}

## Settings

### Data Matching

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Data Matching | Matching Details | Cluster | Match clusters to targets by attribute |

When enabled, clusters are matched to targets based on attribute values, allowing different clusters to be placed at different targets.

### Transform

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Transform Details | ⚡ Transform Details | - | How target transforms affect cluster copies |

Controls how the target point's transform (position, rotation, scale) is applied to each cluster copy.

### Tagging & Forwarding

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Targets Attributes to Cluster Tags | Attribute to Tag Details | - | Copy target attributes as cluster tags |
| Targets Forwarding | Forward Details | - | Forward target attributes to cluster points |

## How It Works

### Basic Copying

For each target point, a complete copy of the cluster is created:

```
Target 1 (pos: 0,0,0):       Target 2 (pos: 100,0,0):
       ●───●                        ●───●
       │   │                        │   │
       ●───●                        ●───●
       at origin                    offset by 100
```

### Transform Application

The target's transform is applied to the cluster copy:

```
Target Transform:         Cluster Copy:
  Position: (100, 50, 0)    All vertices offset by (100, 50, 0)
  Rotation: 45°             All vertices rotated 45°
  Scale: 2.0                All edges scaled 2x
```

### Attribute Matching

With Data Matching enabled, clusters can be assigned to specific targets:

```
Clusters:                    Targets:
  [ClusterType: "A"]           [Match: "A"]  → gets Cluster A
  [ClusterType: "B"]           [Match: "B"]  → gets Cluster B
                               [Match: "A"]  → gets Cluster A
```

### Attribute Forwarding

Target attributes can be forwarded to all points in the copied cluster:

```
Target:                     Copied Cluster Points:
  Color: Red                  All vertices get Color: Red
  BiomeID: 5                  All vertices get BiomeID: 5
```

## Use Cases

### Scatter Networks

```
Place road network cluster at multiple locations:

Targets (spawn points):     Result:
    ★   ★   ★                 Network at each ★
        ★                     with proper transforms
    ★       ★
```

### Modular Pieces

```
Different cluster types for different targets:

Match by "PieceType":
  "Corner" → Corner cluster
  "Straight" → Straight cluster
  "T-Junction" → T-junction cluster
```

### Inherited Properties

```
Forward terrain data to cluster copies:

Target: BiomeType = "Forest"
  → All vertices in copy receive BiomeType = "Forest"
  → Can be used for per-biome coloring/behavior
```

---

📦 **Module**: `PCGExElementsClusters`
