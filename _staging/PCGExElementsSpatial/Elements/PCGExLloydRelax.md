---
icon: arrows-left-right
description: 'Lloyd Relax 3D - Applies Lloyd relaxation to the input points.'
---

# Lloyd Relax 3D

Applies Lloyd relaxation to the input points.

## Overview

Lloyd Relax 3D iteratively moves points toward more uniform spacing using Voronoi-based relaxation. Each iteration computes a 3D Voronoi diagram, then moves each point toward the centroid of its Voronoi cell. This gradually distributes points more evenly throughout their volume while respecting the overall shape of the point cloud.

## How It Works

1. **Voronoi Computation**: Builds a 3D Voronoi diagram from the current point positions.
2. **Centroid Calculation**: For each point, calculates the centroid of its Voronoi cell.
3. **Position Update**: Moves each point toward its cell centroid, scaled by the influence factor.
4. **Iteration**: Repeats the process for the specified number of iterations.

#### Usage Notes

- **Convergence**: More iterations produce more uniform spacing, but with diminishing returns. Typically 5-20 iterations is sufficient.
- **Boundary Behavior**: Points near the boundary of the point cloud tend to move inward over iterations, potentially shrinking the overall volume slightly.
- **Progressive Influence**: When enabled, the influence factor increases across iterations, starting gentle and becoming stronger toward the end.

## Behavior

```
Initial Points:              After Lloyd Relax (5 iterations):

  ●  ●●                        ●     ●
     ●                    →         ●
  ●     ●●                     ●     ●
                                  ●

Clustered distribution      More uniform spacing
```

## Settings

### Node-Specific Settings

<details>
<summary><strong>Iterations</strong> <code>int32</code></summary>

Number of relaxation iterations to perform. More iterations produce more uniform spacing, but with diminishing returns after a certain point.

Default: `5`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Influence Details</strong> <code>FPCGExInfluenceDetails</code></summary>

Controls how strongly points move toward their Voronoi cell centroids.

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **Influence Input** | `EPCGExInputValueType` | `Constant` | Whether to use a constant value or read from an attribute |
| **Influence** | `double` | `1.0` | How much each point moves toward its centroid (0 = no movement, 1 = full movement to centroid) |
| **Progressive Influence** | `bool` | `true` | When enabled, influence starts low and increases each iteration, creating smoother convergence |

⚡ PCG Overridable

</details>

### Inherited Settings

This node inherits common settings from its base class.

→ See [Points Processor Settings](../../PCGExFoundations/Core/PCGExPointsProcessor.md) for shared point processing options.

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Out** | Point Data | Points with more uniform spacing after relaxation |

---

📦 **Module**: `PCGExElementsSpatial` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsSpatial/Public/Elements/PCGExLloydRelax.h)

<!-- VERIFICATION REPORT
Node-Specific Properties: 2 documented
Inherited Properties: Referenced to UPCGExPointsProcessorSettings
Inputs: Standard point input (inherited)
Outputs: Out (Point Data)
Nested Types: EPCGExOptionState, FPCGExInfluenceDetails
-->
