---
icon: times
description: 'In editor :: PCGEx | Path × Path Crossings'
---

# Path Crossings

Finds intersection points where paths cross each other or themselves.

## Overview

Path Crossings detects where path segments intersect—both self-intersections (a path crossing itself) and inter-path intersections (different paths crossing each other). New points are inserted at intersection locations, and existing paths can be split at these points.

## How It Works

1. **Project paths** to 2D (using configured projection plane)
2. **Test segment pairs** for intersections
3. **Calculate intersection points** with precise positions
4. **Insert new points** at intersections (optional)
5. **Split paths** at intersection points (optional)

## Settings

### Detection

<details>
<summary><strong>Find Self-Intersections</strong> <code>bool</code></summary>

Detect where a path crosses itself.

Default: Enabled

</details>

<details>
<summary><strong>Find Inter-Path Intersections</strong> <code>bool</code></summary>

Detect where different paths cross each other.

Default: Enabled

</details>

### Projection

<details>
<summary><strong>Projection</strong> <code>XY | XZ | YZ</code></summary>

Plane to project paths onto for intersection testing. Intersections are detected in 2D, then 3D positions are interpolated.

Default: `XY`

</details>

### Output

<details>
<summary><strong>Insert Intersection Points</strong> <code>bool</code></summary>

Add new points at intersection locations.

Default: Enabled

</details>

<details>
<summary><strong>Split At Intersections</strong> <code>bool</code></summary>

Break paths into segments at intersection points.

Default: Disabled

</details>

### Intersection Point Attributes

<details>
<summary><strong>Write Intersection Type</strong> <code>bool</code></summary>

Write an attribute indicating intersection type (self or inter-path).

Attribute: `IntersectionType`

</details>

<details>
<summary><strong>Write Crossing Path ID</strong> <code>bool</code></summary>

For inter-path intersections, write the ID of the crossing path.

Attribute: `CrossingPathID`

</details>

### Tolerance

<details>
<summary><strong>Tolerance</strong> <code>double</code></summary>

Distance tolerance for intersection detection. Very small values may miss near-intersections; very large values may detect false positives.

Default: `0.001`

</details>

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **Paths** | Points | Paths to check for crossings |

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Paths** | Points | Paths with intersection points inserted |
| **Crossings** | Points | Just the intersection points (optional) |

## Examples

**Find and mark all crossings**:
- Find Self-Intersections: Enabled
- Find Inter-Path Intersections: Enabled
- Insert Intersection Points: Enabled
- Split At Intersections: Disabled

**Split paths at crossings** (for network graphs):
- Insert Intersection Points: Enabled
- Split At Intersections: Enabled
- Result: Path segments suitable for graph building

**Self-intersection only** (validate path quality):
- Find Self-Intersections: Enabled
- Find Inter-Path Intersections: Disabled

## Use Cases

- **Network creation**: Build road/path networks with proper junctions
- **Validation**: Detect unwanted self-intersections
- **Graph building**: Create nodes at path crossings
- **Collision detection**: Find where paths would conflict

## Related

### Path Connectivity
- [Stitch](./stitch.md) - Connect paths at endpoints
- [Split](./split.md) - Divide paths at arbitrary points
- [Path × Bounds Intersection](./path-bounds-intersection.md) - Path/bounds crossings

---

📦 **Module**: `PCGExElementsPaths` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPaths/Private/Elements/PCGExPathCrossings.cpp)
