---
icon: shapes
description: Shape builder sub-nodes for procedural point generation
---

# Shapes

Shape builders define how the **Create Shapes** node generates point patterns from seed points. Each builder produces a specific geometric form, using the seed point's transform (position, rotation, scale) to control placement and sizing.

## Available Shapes

| Shape | Description |
|-------|-------------|
| [Circle](./circle.md) | Points arranged in a circular or arc pattern |
| [Polygon](./polygon.md) | Regular polygon vertices with optional skeleton |
| [3D Grid](./grid.md) | Three-dimensional point grid |
| [φ Sphere](./fiblat.md) | Fibonacci lattice sphere distribution |

## How Shape Builders Work

1. **Seed Input**: Each seed point provides a transform (position, rotation, scale) and bounds
2. **Resolution**: Determines point count - either fixed count or distance-based spacing
3. **Fitting**: Shapes scale and align to fit within seed bounds
4. **Output**: Generated points inherit seed attributes and receive shape-specific metadata

## Shared Settings

All shape builders share these common configuration options:

### Resolution

| Setting | Description |
|---------|-------------|
| **Resolution Mode** | `Fixed` (point count) or `Distance` (spacing between points) |
| **Resolution** | Point count or spacing distance (supports attribute input) |

### Fitting

| Setting | Description |
|---------|-------------|
| **Scale to Fit** | How shapes scale to fit seed bounds (None, Uniform, Individual per-axis) |
| **Justification** | How shapes align within seed bounds (per-axis From/To positioning) |

### Alignment

| Setting | Description |
|---------|-------------|
| **Source Axis** | Seed axis to use as reference |
| **Target Axis** | Shape axis to align to source |
| **Points Look At** | Point orientation - None (canonical) or Seed (face toward seed) |
| **Look At Axis** | Axis used for look-at rotation |

### Data

| Setting | Description |
|---------|-------------|
| **Default Extents** | Default point bounds size |
| **Shape ID** | Integer identifier written to output points |

### Pruning

| Setting | Description |
|---------|-------------|
| **Remove Below** | Discard shapes with fewer than minimum points |
| **Min Point Count** | Minimum threshold (default: 2) |
| **Remove Above** | Discard shapes with more than maximum points |
| **Max Point Count** | Maximum threshold (default: 500) |

## Parent Node

Shape builders are consumed by the [Create Shapes](../../node-library/misc/create-shapes.md) node.

---

📦 **Module**: `PCGExElementsShapes`
