---
icon: route
---

# Path Nodes

Path nodes process ordered sequences of points. Unlike loose point clouds, paths have a defined order—each point connects to the next, forming a continuous journey from start to end.

## Understanding Paths

A path is simply a point collection where **order matters**. The first point is the start, the last is the end, and every point in between follows a sequence. This ordering enables operations that wouldn't make sense on unordered points: smoothing along the path, measuring total length, inserting points at intersections, or splitting at specific locations.

### Open vs Closed Paths

- **Open paths** have distinct start and end points
- **Closed paths** loop back—the last point connects to the first

Many nodes detect closed paths automatically and adjust their behavior accordingly.

## Node Categories

### Path Creation

Convert other data types into paths.

| Node | Purpose |
|------|---------|
| [Create Spline](./create-spline.md) | Create spline actors from point sequences |
| [Spline to Path](./spline-to-path.md) | Convert UE splines back into path points |

### Path Shaping

Modify the geometry of paths.

| Node | Purpose |
|------|---------|
| [Smooth](./smooth.md) | Reduce jaggedness through averaging |
| [Subdivide](./subdivide.md) | Add points between existing points |
| [Reduce](./reduce.md) | Remove points while preserving shape |
| [Resample](./resample.md) | Redistribute points at uniform spacing |
| [Fuse Collinear](./fuse-collinear.md) | Merge points that lie on straight lines |
| [Bevel](./bevel.md) | Create rounded or chamfered corners |

### Path Transformation

Move, rotate, or deform paths.

| Node | Purpose |
|------|---------|
| [Offset](./offset.md) | Displace path perpendicular to its direction |
| [Orient](./orient.md) | Compute orientation transforms along path |
| [Shift](./shift.md) | Rotate point order within the path |
| [Slide](./slide.md) | Move points along the path direction |
| [Shrink](./shrink.md) | Trim path from its endpoints |
| [Solidify](./solidify.md) | Expand path into 3D volume |

### Path Connectivity

Combine or split paths.

| Node | Purpose |
|------|---------|
| [Split](./split.md) | Divide path at specified points |
| [Stitch](./stitch.md) | Connect multiple paths at endpoints |
| [Path Crossings](./path-crossings.md) | Find intersections between paths |
| [Bounds Intersection](./bounds-intersection.md) | Find where paths cross spatial bounds |

### Path Analysis

Extract information from paths.

| Node | Purpose |
|------|---------|
| [Properties](./properties.md) | Compute length, direction, area, winding |
| [Write Tangents](./write-tangents.md) | Calculate arrive/leave tangents |

### Path Blending

Interpolate attributes along paths.

| Node | Purpose |
|------|---------|
| [Blend Path](./blend-path.md) | Interpolate from start to end |
| [Attribute Rolling](./attribute-rolling.md) | Rolling blend within ranges |

### Data Operations

Transform data using paths.

| Node | Purpose |
|------|---------|
| [Copy to Path](./copy-to-path.md) | Deform points along a path |
| [Insert](./insert.md) | Add external points into path |
| [Reverse Order](./reverse-order.md) | Flip path direction |
| [Spline Mesh](./spline-mesh.md) | Generate spline mesh components |

---

## Common Patterns

### Progressive Refinement

Paths often go through multiple stages:

```
Create → Smooth → Subdivide → Orient → Output
```

Each step builds on the previous, refining the path geometry.

### Filter-Driven Operations

Many path nodes accept [filters](../filters/README.md) to select which points are affected:

- **Split**: Divide at points matching a condition
- **Bevel**: Round only specific corners
- **Attribute Rolling**: Control blend boundaries

### Attribute Preservation

Path operations generally preserve point attributes unless they're computing new values. Nodes that interpolate (Subdivide, Smooth, Resample) blend attribute values from neighboring points.

---

## Tips

{% hint style="info" %}
**Check path order**: If a path operation produces unexpected results, verify your points are in the expected order. The Reverse Order node can flip direction if needed.
{% endhint %}

{% hint style="info" %}
**Closed loop detection**: Most nodes detect closed paths automatically. If detection fails, ensure your first and last points are at the exact same position.
{% endhint %}

{% hint style="info" %}
**Tangent continuity**: Operations like Smooth and Bevel work best when tangents are continuous. Use Write Tangents before operations that depend on path direction.
{% endhint %}
