---
icon: puzzle-piece
description: 'Decomposition Factory - Base factory for cluster decomposition operations'
---

# Decomposition Factory

Base factory for cluster decomposition operations.

## Overview

Abstract base class for all decomposition sub-nodes. Each decomposition operation receives a cluster and produces a mapping of node index to cell ID, partitioning the cluster's vertices into discrete groups. Concrete implementations define the decomposition algorithm.

This factory is consumed by the [Cluster : Decomposition](../../PCGExElementsClusters/Elements/Decomposition/PCGExClusterDecomposition.md) node.

## How It Works

1. **Preparation**: The operation receives a cluster and optional heuristics data. Octrees are built on demand if the algorithm requires spatial queries.
2. **Decomposition**: The algorithm assigns each cluster node to a cell ID, producing a flat mapping and total cell count.
3. **Output**: The parent node uses the cell ID mapping to write attributes or partition the cluster.

## Settings

This is an abstract base class with no user-facing settings. See the concrete decomposition types for configurable options:

- [BSP Occupancy](../Decomposition/PCGExDecompBSPOccupancy.md)
- [Convex BSP](../Decomposition/PCGExDecompConvexBSP.md)
- [Grid Partition](../Decomposition/PCGExDecompGridPartition.md)
- [Max Boxes](../Decomposition/PCGExDecompMaxBoxes.md)
- [Max Boxes (Extended)](../Decomposition/PCGExDecompMaxBoxesExt.md)
- [Spectral](../Decomposition/PCGExDecompSpectral.md)
- [Threshold](../Decomposition/PCGExDecompThreshold.md)

---

[![Static Badge](https://img.shields.io/badge/Source-PCGExElementsClustersDecomp-473F69)](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClustersDecomp/Public/Core/PCGExDecompositionOperation.h)

<!-- VERIFICATION REPORT
Node-Specific Properties: 0 (abstract base class)
Inherited Properties: Referenced to UPCGExInstancedFactory
Inputs: N/A (sub-node)
Outputs: N/A (sub-node)
Nested Types: FPCGExDecompositionResult, FPCGExDecompositionOperation
-->
