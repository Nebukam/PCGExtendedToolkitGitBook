---
icon: hexagon
description: 'In editor :: PCGEx | Shape : Polygon'
---

# Polygon

Generates points as vertices of a regular polygon, with optional internal skeleton connections.

## Overview

The Polygon shape creates evenly-spaced vertices forming a regular polygon (triangle, square, pentagon, hexagon, etc.). An optional skeleton can add a center point connected to vertices and/or edge midpoints, creating spoke patterns useful for structural layouts.

## How It Works

1. **Vertex Calculation**: Computes vertex positions for a regular polygon with the specified number of sides
2. **Orientation**: Rotates the polygon based on fitting method (vertex forward, edge forward, or custom angle)
3. **Skeleton Generation**: Optionally adds center point with connections to vertices and/or edges
4. **Point Placement**: Positions points along edges based on resolution settings

## Settings

### Polygon Settings

<details>
<summary><strong>Num Vertices Input</strong> <code>EPCGExInputValueType</code></summary>

Whether the vertex count comes from a constant or attribute.

| Option | Behavior |
|--------|----------|
| **Constant** | Use the constant value below |
| **Attribute** | Read from point attribute |

Default: `Constant`

</details>

<details>
<summary><strong>Number of Vertices (Attr)</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

Attribute to read the vertex count from.

*Visible when Num Vertices Input = Attribute*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Number of Vertices</strong> <code>int32</code></summary>

The number of vertices (sides) for the polygon. 3 = triangle, 4 = square, 5 = pentagon, 6 = hexagon, etc.

*Visible when Num Vertices Input = Constant*

Default: `5`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Add Skeleton Input</strong> <code>EPCGExInputValueType</code></summary>

Whether the skeleton toggle comes from a constant or attribute.

| Option | Behavior |
|--------|----------|
| **Constant** | Use the constant value below |
| **Attribute** | Read from point attribute |

Default: `Constant`

</details>

<details>
<summary><strong>Add Skeleton (Attr)</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

Attribute to read the skeleton toggle from.

*Visible when Add Skeleton Input = Attribute*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Add Skeleton</strong> <code>bool</code></summary>

If enabled, adds a center point with connections to the polygon perimeter.

*Visible when Add Skeleton Input = Constant*

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Skeleton Connection Mode</strong> <code>EPCGExPolygonSkeletonConnectionType</code></summary>

How the skeleton center connects to the polygon perimeter.

| Option | Behavior |
|--------|----------|
| **Vertex** | Connect skeleton to each vertex |
| **Edge** | Connect skeleton to each edge midpoint |
| **Both** | Connect skeleton to both vertices and edge midpoints |

*Visible when Add Skeleton is enabled*

Default: `Vertex`

</details>

<details>
<summary><strong>Polygon Orientation</strong> <code>EPCGExPolygonFittingMethod</code></summary>

How the polygon aligns to the seed point's forward direction.

| Option | Behavior |
|--------|----------|
| **Vertex Forward** | First vertex faces along local X axis |
| **Edge Forward** | First edge is perpendicular to local X axis |
| **Custom** | Use a custom rotation angle |

Default: `Vertex Forward`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Custom Polygon Orientation</strong> <code>float</code></summary>

Custom rotation angle in degrees when using Custom orientation mode.

*Visible when Polygon Orientation = Custom*

Default: `0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Is Closed Loop</strong> <code>bool</code></summary>

If enabled, flags the polygon as a closed loop for downstream path operations.

Default: `true`

⚡ PCG Overridable

</details>

### Output Attributes

<details>
<summary><strong>Write Hull Attribute</strong> <code>bool</code></summary>

If enabled, writes a boolean attribute indicating whether each point is on the polygon's outer hull.

Default: `false`

</details>

<details>
<summary><strong>On Hull Attribute</strong> <code>FName</code></summary>

Name of the boolean attribute for hull membership.

*Visible when Write Hull Attribute is enabled*

Default: `bIsOnHull`

</details>

<details>
<summary><strong>Write Angle Attribute</strong> <code>bool</code></summary>

If enabled, writes the angle of each point relative to the polygon center.

Default: `false`

</details>

<details>
<summary><strong>Angle Attribute</strong> <code>FName</code></summary>

Name of the angle attribute.

*Visible when Write Angle Attribute is enabled*

Default: `Angle`

</details>

<details>
<summary><strong>Write Edge Index Attribute</strong> <code>bool</code></summary>

If enabled, writes which edge each point belongs to.

Default: `false`

</details>

<details>
<summary><strong>Edge Index Attribute</strong> <code>FName</code></summary>

Name of the edge index attribute.

*Visible when Write Edge Index Attribute is enabled*

Default: `EdgeIndex`

</details>

<details>
<summary><strong>Write Edge Alpha Attribute</strong> <code>bool</code></summary>

If enabled, writes the normalized position along the edge (0-1).

Default: `false`

</details>

<details>
<summary><strong>Edge Alpha Attribute</strong> <code>FName</code></summary>

Name of the edge alpha attribute.

*Visible when Write Edge Alpha Attribute is enabled*

Default: `Alpha`

</details>

## Examples

**Hexagon with skeleton spokes**:
- **Number of Vertices**: `6`
- **Add Skeleton**: `true`
- **Skeleton Connection Mode**: `Vertex`

**Square aligned edge-forward**:
- **Number of Vertices**: `4`
- **Polygon Orientation**: `Edge Forward`

**Triangle with high resolution edges**:
- **Number of Vertices**: `3`
- **Resolution Mode**: `Distance`
- **Resolution**: `10` (points every 10 units along edges)

## Related

- [Circle](./circle.md) - Smooth circular arc instead of discrete vertices
- [3D Grid](./grid.md) - Rectangular grid pattern

---

📦 **Module**: `PCGExElementsShapes` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsShapes/Public/Shapes/PCGExShapePolygon.h)
