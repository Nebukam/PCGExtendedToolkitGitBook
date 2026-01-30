---
icon: box-open
description: 'In editor :: PCGEx | Cluster : Unpack'
---

# Cluster : Unpack

Restores **Vtx/Edge clusters from packed dataset**, converting the single-collection format back to the standard two-collection cluster format.

> This is a legacy feature.

## Overview

Unpack Clusters is the inverse of [Pack Clusters](./pack-clusters.md). It takes packed cluster data (single collection containing both vertices and edges) and separates it back into the standard Vtx + Edges format that most cluster operations require.

## Key Behavior

```
Before:                        After Unpack:
  Packed: [●, ●, ●, ─, ─]          Vtx: [●, ●, ●]
              ↓           →        Edges: [─, ─]
  Single collection
  with both vtx and edges       Separate collections
```

## How It Works

1. **Read Packed Data**: Parse the combined collection
2. **Identify Types**: Use markers to distinguish vtx from edge points
3. **Separate Collections**: Create distinct Vtx and Edges outputs
4. **Restore References**: Rebuild edge-to-vertex relationships

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **Packed Clusters** | Points | Single collection containing both vtx and edges |

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Vtx** | Points | Restored vertex collection |
| **Edges** | Points | Restored edge collection |

## Settings

<details>
<summary><strong>Flatten</strong> <code>bool</code></summary>

Flatten unpacked metadata. Depending on your setup, this is a tradeoff between memory and speed.

- **Enabled**: Flattens metadata for faster access, uses more memory
- **Disabled**: Preserves original metadata structure, uses less memory

Default: `false`

⚡ PCG Overridable

</details>

## Use Cases

### Loading from Assets
After loading a packed cluster from an asset, unpack to work with it.

### Receiving from Subgraphs
Unpack data received through subgraph interfaces.

### Post-Serialization
Restore clusters after deserialization.

## Workflow Example

```
Pack Clusters ──► Save to Asset ──► Load from Asset ──► Unpack Clusters ──► Process
```

## Related

- [Pack Clusters](./pack-clusters.md) - Convert to packed format
- [Merge Vertices](./merge-vertices.md) - Merge multiple vertex collections

---

📦 **Module**: `PCGExElementsClusters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/PCGExUnpackClusters.h)
