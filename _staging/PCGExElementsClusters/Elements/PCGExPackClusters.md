---
icon: box-archive
description: 'Cluster : Pack - Pack clusters into single point data objects'
---

# Cluster : Pack

Pack each cluster into a single point data object containing both vtx and edges.

## Overview

This node consolidates cluster data by combining vertices and edges into unified point collections. Each cluster becomes a single packed data object, simplifying data flow and enabling storage or transfer of complete cluster structures. This is the inverse of the Unpack operation.

## How It Works

1. **Data Collection**: Gathers vertex and edge data for each cluster
2. **Point Merging**: Combines both into a single point collection with metadata
3. **Attribute Preservation**: Carries over selected attributes according to filter settings
4. **Output Generation**: Produces packed cluster objects

#### Usage Notes

- **Serialization**: Packed clusters are easier to store or pass through single-pin connections.
- **Unpack Required**: Use the Unpack node to restore separate Vtx/Edges before cluster operations.
- **Cluster Integrity**: Each packed object contains all data needed to reconstruct the cluster.

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **Vtx** | Points | Cluster vertex points |
| **Edges** | Points | Cluster edge data |

## Settings

<details>
<summary><strong>Carry Over Settings</strong> <code>FPCGExCarryOverDetails</code></summary>

Controls which attributes and tags are preserved during packing.

//→ See TODO FPCGExCarryOverDetails

</details>

### Inherited Settings

This node inherits common settings from its base class.

> See [Clusters Processor Settings](../Common/ClustersProcessor.md) for inherited options.

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Packed Clusters** | Points | Packed cluster data objects |

---

📦 **Module**: `PCGExElementsClusters` · [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/PCGExPackClusters.h)

<!-- VERIFICATION REPORT
Node-Specific Properties: 1 documented
Inherited Properties: Referenced to UPCGExClustersProcessorSettings
Inputs: Vtx, Edges
Outputs: Packed Clusters
-->
