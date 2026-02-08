---
icon: puzzle-piece
description: 'G-Probe : KNN - K-Nearest Neighbors connectivity'
---

# G-Probe : KNN

K-Nearest Neighbors connectivity.

## Overview

This global probe connects each point to its K nearest neighbors based on Euclidean distance. KNN is one of the most fundamental connectivity algorithms, creating local neighborhood relationships without requiring a search radius. The "Mutual" mode adds an additional constraint requiring both points to consider each other as nearest neighbors for a connection to be created.

## How It Works

1. **Distance Calculation**: Computes distances from each point to all other points
2. **Neighbor Selection**: For each point, identifies the K closest neighbors
3. **Connection Creation**: Creates edges based on the selected mode (default or mutual)
4. **Edge Deduplication**: Removes duplicate edges from bidirectional neighbor relationships

#### Usage Notes

- **No Search Radius**: Unlike other probes, KNN doesn't use a search radius - it always finds exactly K neighbors regardless of distance
- **Mutual Mode**: Requires both points to list each other in their K-nearest for a connection, resulting in fewer but more "reciprocal" connections
- **Variable K**: K can be specified as a constant or read from a per-point attribute, allowing adaptive connectivity density

## Behavior

```
K-Nearest Neighbors (K=2):

    Input Points:              Default Mode:             Mutual Mode:

       •     •                    •─────•                    •     •
          •                       │╲   ╱│                     ╲   ╱
       •     •                    • ╲ ╱ •                      ╲ ╱
                                     ╳                          ╳
       •     •                    • ╱ ╲ •                      ╱ ╲
          •                       │╱   ╲│                     ╱   ╲
       •     •                    •─────•                    •     •

                              Each point → K nearest    Only mutual nearest
                              neighbors connected       neighbors connected
```

## Settings

### KNN Configuration

<details>
<summary><strong>K</strong> <code>FPCGExInputShorthandSelectorInteger32Abs</code></summary>

The number of nearest neighbors to connect to. Can be specified as a constant value or read from a point attribute for per-point variable connectivity.

Default: `5`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Mode</strong> <code>EPCGExProbeKNNMode</code></summary>

How K-nearest neighbor connections are established.

| Option | Description |
|--------|-------------|
| **Default** | Each point connects to its K nearest neighbors (one-way requirement) |
| **Mutual** | Connection only created if both points list each other as K-nearest (two-way requirement) |

Default: `Mutual`

⚡ PCG Overridable

</details>

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Probe** | PCGEx \| Probe | The probe factory to connect to Connect Points |

---

📦 **Module**: `PCGExElementsProbing` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsProbing/Public/Probes/PCGExGlobalProbeKNN.h)

<!-- VERIFICATION REPORT
Node-Specific Properties: 2 documented (K, Mode)
Inherited Properties: None (bSupportRadius=false, no search radius)
Inputs: None
Outputs: Probe (PCGEx | Probe)
Nested Types: FPCGExProbeConfigKNN, EPCGExProbeKNNMode
-->
