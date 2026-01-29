---
icon: chart-line
description: 'In editor :: PCGEx | Path : Properties'
---

# Properties

Computes and writes comprehensive metrics about paths.

## Overview

Path Properties is a one-stop node for extracting information from paths. It can calculate lengths, directions, areas, winding orders, and more—writing results to attributes for use by downstream nodes.

## Settings

### Projection

<details>
<summary><strong>Projection Details</strong> <code>FPCGExGeo2DProjectionDetails</code></summary>

Projection settings for 2D calculations (area, winding, etc.).

⚡ PCG Overridable

</details>

### Path Attributes

<details>
<summary><strong>Packing</strong> <code>Per Input | Merged</code></summary>

How to pack path-level attribute sets.

Default: `Merged`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Write Path Data to Points</strong> <code>bool</code></summary>

Also write path attributes to each point. Can have high memory cost.

Default: Enabled

⚡ PCG Overridable

</details>

<details>
<summary><strong>Path Length</strong> <code>bool</code></summary>

Total path length (sum of all segment lengths).

Attribute: `@Data.PathLength` (double)

</details>

<details>
<summary><strong>Path Direction</strong> <code>bool</code></summary>

Averaged path direction vector.

Attribute: `@Data.PathDirection` (FVector)

</details>

<details>
<summary><strong>Path Centroid</strong> <code>bool</code></summary>

Geometric center of all path points.

Attribute: `@Data.PathCentroid` (FVector)

</details>

<details>
<summary><strong>Is Clockwise</strong> <code>bool</code></summary>

Winding order in projected 2D plane.

Attribute: `@Data.Clockwise` (bool)

</details>

<details>
<summary><strong>Area</strong> <code>bool</code></summary>

Enclosed area in projected 2D plane.

Attribute: `@Data.Area` (double)

</details>

<details>
<summary><strong>Perimeter</strong> <code>bool</code></summary>

2D projected perimeter length.

Attribute: `@Data.Perimeter` (double)

</details>

<details>
<summary><strong>Compactness</strong> <code>bool</code></summary>

Shape compactness metric.

Attribute: `@Data.Compactness` (double)

</details>

### Oriented Bounding Box

<details>
<summary><strong>Bounding Box Center</strong> <code>bool</code></summary>

OBB center position.

Attribute: `@Data.OBBCenter` (FVector)

</details>

<details>
<summary><strong>Bounding Box Extent</strong> <code>bool</code></summary>

OBB half-extents.

Attribute: `@Data.OBBExtent` (FVector)

</details>

<details>
<summary><strong>Bounding Box Orientation</strong> <code>bool</code></summary>

OBB rotation.

Attribute: `@Data.OBBOrientation` (FQuat)

</details>

### Inclusion

<details>
<summary><strong>Inclusion Depth</strong> <code>bool</code></summary>

How many other paths contain this one.

Attribute: `@Data.InclusionDepth` (int32)

</details>

<details>
<summary><strong>Num Inside</strong> <code>bool</code></summary>

How many paths are contained inside this one.

Attribute: `@Data.NumInside` (int32)

</details>

### Point Attributes

<details>
<summary><strong>Up Vector</strong> <code>FVector</code></summary>

Up vector for normal/binormal calculations.

Default: World Up

⚡ PCG Overridable

</details>

<details>
<summary><strong>Dot</strong> <code>bool</code></summary>

Dot product of prev/next directions.

Attribute: `Dot` (double)

</details>

<details>
<summary><strong>Angle</strong> <code>bool</code></summary>

Angle between prev/next directions.

Attribute: `Angle` (double)

**Angle Range**: PI Radians, 2PI Radians, Normalized, Degrees

</details>

<details>
<summary><strong>Distance to Next</strong> <code>bool</code></summary>

Distance to next point.

Attribute: `DistanceToNext` (double)

</details>

<details>
<summary><strong>Distance to Prev</strong> <code>bool</code></summary>

Distance to previous point.

Attribute: `DistanceToPrev` (double)

</details>

<details>
<summary><strong>Distance to Start</strong> <code>bool</code></summary>

Cumulative distance from path start.

Attribute: `DistanceToStart` (double)

</details>

<details>
<summary><strong>Distance to End</strong> <code>bool</code></summary>

Remaining distance to path end.

Attribute: `DistanceToEnd` (double)

</details>

<details>
<summary><strong>Point Time</strong> <code>bool</code></summary>

Normalized position along path (0.0 to 1.0).

Attribute: `PointTime` (double)

**One Minus**: Output (1 - time) instead

</details>

<details>
<summary><strong>Point Normal</strong> <code>bool</code></summary>

Edge normal direction.

Attribute: `PointNormal` (FVector)

</details>

<details>
<summary><strong>Point Average Normal</strong> <code>bool</code></summary>

Averaged normal from neighboring edges.

Attribute: `PointAvgNormal` (FVector)

</details>

<details>
<summary><strong>Point Binormal</strong> <code>bool</code></summary>

Stabilized binormal direction.

Attribute: `PointBinormal` (FVector)

</details>

<details>
<summary><strong>Direction to Next</strong> <code>bool</code></summary>

Normalized direction to next point.

Attribute: `DirectionToNext` (FVector)

</details>

<details>
<summary><strong>Direction to Prev</strong> <code>bool</code></summary>

Normalized direction to previous point.

Attribute: `DirectionToPrev` (FVector)

</details>

### Tagging

<details>
<summary><strong>Tag Concave</strong> <code>bool</code></summary>

Tag paths that are concave.

Tag: `Concave`

</details>

<details>
<summary><strong>Tag Convex</strong> <code>bool</code></summary>

Tag paths that are convex.

Tag: `Convex`

</details>

<details>
<summary><strong>Tag Outer</strong> <code>bool</code></summary>

Tag paths not enclosed by others.

Tag: `Outer`

</details>

<details>
<summary><strong>Tag Inner</strong> <code>bool</code></summary>

Tag paths enclosed by one or more paths.

Tag: `Inner`

</details>

<details>
<summary><strong>Tag Odd Inclusion Depth</strong> <code>bool</code></summary>

Tag paths with odd inclusion depth.

Tag: `OddDepth`

</details>

<details>
<summary><strong>Use Inclusion Pins</strong> <code>bool</code></summary>

Output to additional Outer/Inner/Odd pins.

</details>

<details>
<summary><strong>Outer is not Odd</strong> <code>bool</code></summary>

Don't consider outer paths (depth 0) as "odd" even if technically they are.

Default: Enabled

</details>

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Paths** | Points | Paths with properties written |
| **PathProperties** | Param Data | Path-level attributes as param data |
| **Outer** | Points | Paths with inclusion depth 0 (optional) |
| **Inner** | Points | Enclosed paths (optional) |
| **Odd** | Points | Paths with odd inclusion depth (optional) |

## Examples

**Get path progress for gradient effects**:
- Point Time: Enabled
- Use `PointTime` attribute for color/scale gradients

**Analyze nested paths** (holes in polygons):
- Inclusion Depth: Enabled
- Tag Outer/Inner: Enabled
- Use Inclusion Pins: Enabled

**Calculate coverage area**:
- Area: Enabled
- Bounding Box: Enabled

## Use Cases

- **Progress indicators**: PointTime for fade effects along path
- **Length-based spacing**: Use total length for uniform distribution
- **Area calculations**: Determine enclosed region size
- **Nested polygon analysis**: Find holes vs outer boundaries
- **Downstream filtering**: Filter paths by length, area, or inclusion

## Related

### Path Analysis
- [Write Tangents](./write-tangents.md) - More detailed tangent control

---

📦 **Module**: `PCGExElementsPaths` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPaths/Private/Elements/PCGExWritePathProperties.cpp)
