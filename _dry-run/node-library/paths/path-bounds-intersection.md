---
icon: cube
description: 'In editor :: PCGEx | Path × Bounds Intersection'
---

# Path × Bounds Intersection

Finds where paths intersect with target point bounds (OBB boxes).

## Overview

Path × Bounds Intersection detects where path segments pass through the oriented bounding boxes of target points. New points are inserted at intersection locations, and paths can be tagged based on whether they were cut. This is useful for detecting where paths enter/exit regions, trimming paths to boundaries, or creating connection points at zone edges.

## How It Works

1. **Build OBB collection** from target points' bounds
2. **Test each path segment** against all relevant bounds
3. **Calculate intersection points** where segments enter/exit boxes
4. **Insert new points** at intersection locations
5. **Blend attributes** for new points from segment endpoints
6. **Tag paths** based on intersection results

```
Path:     ●───────●───────●───────●
                  │       │
Bounds:       ┌───┼───────┼───┐
              │   ○       ○   │
              │  enter    exit│
              └───────────────┘
```

## Settings

### Data Matching

<details>
<summary><strong>Data Matching</strong> <code>Matching Details</code></summary>

Filter which target bounds are tested against which paths. Useful when you have multiple categories of bounds and want selective intersection testing.

</details>

### Blending

<details>
<summary><strong>Blending</strong> <code>Sub-Point Blending Operation</code></summary>

How to interpolate attributes for intersection points. New points are created along path segments, so they need blended attribute values.

Available operations:
- [Interpolate](./sub-point-blending/interpolate.md) - Blend based on position along segment (default)
- [Inherit First](./sub-point-blending/inherit-first.md) - Copy from segment start
- [Inherit Last](./sub-point-blending/inherit-last.md) - Copy from segment end
- [No Blending](./sub-point-blending/none.md) - Skip attribute blending

See [Sub-Point Blending](./sub-point-blending/) for details.

</details>

### Output

<details>
<summary><strong>Output Settings</strong> <code>Box Intersection Details</code></summary>

Configure what attributes are written to intersection points:
- Intersection normal
- Which bounds were hit
- Entry vs exit classification

</details>

### Tagging

<details>
<summary><strong>Tag If Has Cuts</strong> <code>bool</code></summary>

Add a tag to paths that have intersection cuts.

Default: Enabled

</details>

<details>
<summary><strong>Has Cuts Tag</strong> <code>string</code></summary>

Tag applied to paths with intersections.

Default: `HasCuts`

</details>

<details>
<summary><strong>Tag If Uncut</strong> <code>bool</code></summary>

Add a tag to paths that have no intersections.

Default: Disabled

</details>

<details>
<summary><strong>Uncut Tag</strong> <code>string</code></summary>

Tag applied to paths without intersections.

Default: `Uncut`

</details>

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **Paths** | Points | Paths to test for intersection |
| **Bounds** | Points | Target points whose bounds define intersection volumes |

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Paths** | Points | Paths with intersection points inserted |

## Examples

**Trim paths at zone boundary**:
- Input: Paths crossing a region
- Bounds: Single box defining the region
- Result: Intersection points mark where paths enter/exit

**Multi-zone detection**:
- Input: Paths through multiple areas
- Bounds: Points with different zone IDs
- Data Matching: Filter by zone attributes
- Result: Paths tagged with which zones they cross

**Connection points for buildings**:
- Input: Road paths
- Bounds: Building footprint points
- Result: Points where roads meet building edges

## Use Cases

- **Zone boundaries**: Detect path entry/exit points
- **Collision regions**: Find where paths intersect obstacles
- **Network connections**: Create junction points at boundaries
- **Path trimming**: Mark cut points for later splitting

## Related

### Path Intersection
- [Path Crossings](./path-crossings.md) - Path-to-path intersections
- [Split](./split.md) - Divide paths at marked points

### Sub-Point Operations
- [Sub-Point Blending](./sub-point-blending/) - How intersection point attributes are computed

---

📦 **Module**: `PCGExElementsPaths` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPaths/Private/Elements/PCGExBoundsPathIntersection.cpp)
