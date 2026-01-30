---
icon: magnifying-glass
description: Find matching vtx/edge pairs in data collections
---

# Find Clusters

Finds and matches Vtx/Edge pairs within collections of point data. Useful when cluster data arrives as separate collections that need to be paired together before processing.

```
Mixed Data Soup:             Matched Pairs:
  [Points A]                   Vtx A ──┬── Edges A
  [Points B]                           │
  [Points C]      →           Vtx B ──┬── Edges B
  [Points D]                           │
  [Points E]                   Vtx C ──┬── Edges C

                          (Paired by cluster metadata)
```

## How It Works

PCGEx clusters use metadata to associate vertices and edges. This node scans the input data and matches collections that belong together.

### Cluster Metadata

```
Vtx Collection:              Edge Collection:
  Points: ●●●●●                Points: ────
  ClusterID: 42    ←─────→     ClusterID: 42
  Type: Vtx                    Type: Edge
```

The node reads cluster metadata from each collection and pairs those with matching IDs.

### Search Modes

**All Mode:**
```
Input:                    Output:
  [Vtx A, Edges A,          Vtx: [A, B, C]
   Vtx B, Edges B,    →     Edges: [A, B, C]
   Vtx C, Edges C]
```

**VtxFromEdges Mode:**
```
Input:                    Output:
  [Edges A] (search key)    Edges: [A]
  [Vtx A, Vtx B, Vtx C] →   Vtx: [A] (matched)
```

**EdgesFromVtx Mode:**
```
Input:                    Output:
  [Vtx B] (search key)      Vtx: [B]
  [Edges A, Edges B] →      Edges: [B] (matched)
```

## Use Cases

### Processing Mixed Data

When data arrives from multiple sources or after merging operations:

```
Before:                   After Find Clusters:
  Mixed collection          ┌─ Vtx A ──── Edges A
  containing:      →        ├─ Vtx B ──── Edges B
  - Multiple clusters       └─ Vtx C ──── Edges C
  - Unmatched data
                            Ready for cluster processing!
```

## Inputs & Outputs

| Label | Type | Description |
|-------|------|-------------|
| **In** | Points | Mixed point data collections |

**Outputs vary by Search Mode:**

| Search Mode | Outputs |
|-------------|---------|
| `All` | Vtx Out, Edges Out |
| `VtxFromEdges` | Edges (search key), Vtx Out |
| `EdgesFromVtx` | Vtx (search key), Edges Out |

## Settings

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Search Mode | ⚡ Enum | `All` | How to search for pairs |
| Skip Trivial Warnings | ⚡ Bool | `false` | Suppress warnings about minor mismatches |
| Skip Important Warnings | ⚡ Bool | `false` | Suppress warnings about critical issues |

**Search Mode** (`EPCGExClusterDataSearchMode`):
| Value | Description |
|-------|-------------|
| `All` | Find all vtx/edge pairs in the data |
| `VtxFromEdges` | Given edges, find matching vertices |
| `EdgesFromVtx` | Given vertices, find matching edges |


### Selecting Specific Clusters

Use **VtxFromEdges** or **EdgesFromVtx** to find the matching half of a cluster when you only have one:

```
Have: Edge collection
Need: Matching vertices

Use: VtxFromEdges mode
Result: Paired vtx/edge for further processing
```

## Warnings

The node can produce warnings when:
- Collections have no matching pair
- Metadata is missing or corrupted
- Multiple collections claim the same cluster ID

Use the warning suppression settings if you expect partial matches.

---

📦 **Module**: `PCGExElementsClusters`
