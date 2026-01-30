---
icon: border-outer
description: Find the closest vertex or edge on each cluster's bounds
---

# Find Point on Bounds

Finds the closest vertex or edge to a specific position on each cluster's bounding box. Outputs one point per cluster representing the closest element to the specified bounds location.

```
Cluster:                    Output (UVW = -1,-1,0):
    ●───●───●                   ★
    │   │   │
    ●───●───●      →        (point at bottom-left of bounds)
    │   │   │
    ●───●───●
```

## How It Works

### Bounds Position

```
Cluster Bounds:           UVW (-1, 1, 0):
    ┌─────────┐               ★ (top-left)
    │ ●   ●   │               ┌─────────┐
    │   ●   ● │               │ ●   ●   │
    │ ●   ●   │               │   ●   ● │
    └─────────┘               └─────────┘
```

The UVW coordinates map to positions on the cluster's axis-aligned (or best-fit) bounding box.

### Finding Closest Element

```
Step 1: Compute Target       Step 2: Find Closest
    ★ Target position           ★ Target
    ┌─────────┐                 ┌─────────┐
    │ ●   ●   │                 │ ●←──★   │
    │   ●   ● │       →        │   ●   ● │
    │ ●   ●   │                 │ ●   ●   │
    └─────────┘                 └─────────┘
                               Output: closest ●
```

For each cluster:
1. Compute the target position from UVW on the bounds
2. Find the closest vertex (or edge point) to that target
3. Output that point with optional offset

### Offset Direction

```
Without Offset:             With Offset (away from center):
    ★ (on bounds)               ★→ (offset outward)
    ┌─────────┐                 ┌─────────┐
    │         │                 │         │
    └─────────┘                 └─────────┘
```

The offset pushes the output point away from the cluster's center, useful for placing elements outside the cluster.

---

## Inputs & Outputs

| Label | Type | Description |
|-------|------|-------------|
| **In** | Points | Vtx points |
| **In** | Points | Edge points |
| **Out** | Points | Points at bounds positions (one per cluster) |

## Settings

### Search Configuration

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Search Mode | Enum | `Vtx` | Find closest vertex or edge |
| Output Mode | ⚡ Enum | `Merged` | How to output results |

**Search Mode** (`EPCGExClusterClosestSearchMode`):
| Value | Description |
|-------|-------------|
| `Vtx` | Find closest vertex to bounds position |
| `Edge` | Find closest edge point to bounds position |

**Output Mode** (`EPCGExPointOnBoundsOutputMode`):
| Value | Description |
|-------|-------------|
| `Merged` | All results in single collection |
| `Individual` | Separate collection per cluster |

### Bounds Configuration

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Use Best Fit bounds axis | Bool | `false` | Use oriented bounding box |
| Axis Order | Enum | `YXZ` | Axis priority for best-fit bounds |

### UVW Position

The UVW coordinates specify where on the bounding box to search. Each component ranges from -1 to 1:

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| UVW Input | ⚡ Enum | `Constant` | Constant or Attribute |
| UVW | ⚡ Vector | `(-1, -1, 0)` | Position on bounds (constant) |
| UVW (Attr) | Attribute | - | Attribute for UVW (when Input = Attribute) |
| Element | Enum | `Edge` | Source for attribute (Vtx or Edge) |

**UVW Coordinate System:**
```
        +Y (1)
          │
          │
 -X (-1)──┼──+X (1)
          │
          │
        -Y (-1)

Z: -1 = bottom, +1 = top
```

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Offset | ⚡ Double | `1` | Offset output point away from bounds center |

### Data Handling

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Carry Over Settings | ⚡ Carry Over Details | - | Attribute forwarding settings |
| Quiet Attribute Mismatch Warning | Bool | `false` | Suppress merge warnings |

## Use Cases

### Finding Entry Points

```
UVW = (0, -1, 0):  Find point on south edge

    ●───●───●
    │   │   │
    ●───●───●
    │   │   │
    ●───●───●
        ↓
        ★ Entry point
```

### Finding Corner Vertices

```
UVW = (-1, -1, 0):  Bottom-left corner

    ★───●───●
    │   │   │
    ●───●───●
    │   │   │
    ●───●───●
```

### Attribute-Driven Positions

When **UVW Input = Attribute**, each cluster can have a different target position:

```
Cluster A (UVW attr = -1,0,0):   Cluster B (UVW attr = 1,0,0):
    ★   ●                               ●   ★
    │   │                               │   │
    ●───●                               ●───●
```

---

📦 **Module**: `PCGExElementsClusters`
