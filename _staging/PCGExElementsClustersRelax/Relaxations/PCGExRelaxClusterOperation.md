---
icon: puzzle-piece
description: 'Relax Cluster Operation - Base class for all cluster relaxation operations'
---

# Relax Cluster Operation

Abstract base class for all cluster relaxation operations used with the Relax Clusters node.

## Overview

Relax Cluster Operations are sub-nodes that define how vertex positions are adjusted during the relaxation process. Each operation implements a specific algorithm for repositioning vertices — whether through physics simulation, geometric smoothing, or collision resolution. Operations process vertices and/or edges in configurable steps, accumulating position deltas that are applied each iteration.

## How It Works

1. **Preparation**: The operation receives the cluster data and initializes internal buffers.
2. **Step Execution**: Each iteration executes one or more processing steps on vertices and/or edges.
3. **Delta Accumulation**: Position changes are accumulated using thread-safe atomic operations.
4. **Buffer Swap**: Read and write buffers are swapped between iterations.
5. **Iteration**: The process repeats for the configured number of iterations.

#### Usage Notes

- **Multi-Step Operations**: Some operations use multiple steps per iteration (e.g., spring forces, then repulsion, then position update).
- **Precision**: The precision setting controls floating-point accuracy for delta accumulation.
- **Thread Safety**: Delta accumulation uses atomic operations for safe parallel processing.

## Available Operations

### Smoothing
- [Laplacian (Poisson)](./PCGExLaplacianRelax.md) - Simple centroid-based smoothing

### Force-Directed
- [Force Directed](./PCGExForceDirectedRelax.md) - Spring attraction + electrostatic repulsion

### Fitting-Based
- [Box Fitting](./PCGExBoxFittingRelax.md) - Axis-aligned bounding box collision
- [Box Fitting v2](./PCGExBoxFittingRelax2.md) - Advanced box fitting with configurable extents
- [Radius Fitting](./PCGExRadiusFittingRelax.md) - Spherical collision detection

### Physics Simulation
- [Verlet](./PCGExVerletRelax.md) - Verlet integration with constraints

## Settings

<details>
<summary><strong>Floating Point Precision</strong> <code>double</code></summary>

Controls the precision of delta accumulation. Position deltas are multiplied by this factor during accumulation and divided when applied. A value of 100 provides two decimal places of precision.

Default: `100`

⚡ PCG Overridable

*(Advanced setting)*

</details>

---

![Static Badge](https://img.shields.io/badge/Module-PCGExElementsClusters-473F69)  ·  [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/Relax/PCGExRelaxClusterOperation.h)

<!-- VERIFICATION REPORT
Node-Specific Properties: 1 documented (Precision)
Inherited Properties: None (this IS the base)
Inputs: N/A
Outputs: N/A
Nested Types: None
-->
