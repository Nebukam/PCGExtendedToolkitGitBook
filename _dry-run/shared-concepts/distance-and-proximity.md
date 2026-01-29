---
icon: ruler-combined
---

# Distance & Proximity

How PCGEx measures distance between points.

## When You'll See This

Distance settings appear throughout PCGEx whenever a node needs to measure separation between points:

- **Filters**: Distance filter, Numeric Compare Nearest
- **Sampling**: Sample Nearest Point, Sample Surface
- **Spatial**: Nearest neighbor queries, proximity checks
- **Matching**: Data correlation by distance

## The Two Questions

When measuring distance, PCGEx asks two separate questions:

1. **Where on each point do we measure from?** → `EPCGExDistance`
2. **How do we calculate the distance?** → `EPCGExDistanceType`

Understanding this separation is key—you can mix and match independently.

---

## Measurement Points

In the editor, this appears as **Source** and **Target** dropdowns under distance settings.

| Option | Measures From | Best For |
|--------|---------------|----------|
| **Center** | The point's location | Simple point-to-point distance |
| **Sphere Bounds** | Surface of the point's bounding sphere | When points represent spherical volumes |
| **Box Bounds** | Surface of the point's bounding box | When points represent box-shaped volumes |

### Center (Default)

Uses the point's transform location directly. This is the simplest and most common mode.

### SphereBounds

Treats each point as a sphere where the radius equals the point's scaled extent. The measurement point is on the sphere's surface, in the direction of the other point.

This matters when your points represent objects with volume. Two spheres whose surfaces touch have zero distance in `SphereBounds` mode, but their centers might be far apart.

### BoxBounds

Treats each point as an axis-aligned bounding box (AABB). The measurement point is the closest point on the box surface toward the other point.

Useful when points represent rectangular volumes and you need edge-to-edge distance.

{% hint style="info" %}
**Source vs Target**: Distance settings typically let you configure the measurement mode separately for source and target points. You might measure from a source's center to a target's sphere surface, for example.
{% endhint %}

---

## Distance Metrics

In the editor, this appears as the **Distance Type** dropdown.

| Option | Formula | Characteristic |
|--------|---------|----------------|
| **Euclidean** | √(dx² + dy² + dz²) | Straight-line distance |
| **Manhattan** | \|dx\| + \|dy\| + \|dz\| | Axis-aligned distance |
| **Chebyshev** | max(\|dx\|, \|dy\|, \|dz\|) | Largest axis difference |

### Euclidean (Default)

Standard straight-line distance. The most intuitive choice for most scenarios.

### Manhattan

Also called "taxicab distance"—the sum of absolute differences along each axis. Useful when movement is constrained to axis-aligned directions.

### Chebyshev

Also called "chessboard distance"—the maximum difference on any single axis. Useful for grid-based scenarios where diagonal movement costs the same as orthogonal.

---

## Overlap Handling

**bOverlapIsZero**: When enabled (default), overlapping geometries return zero distance instead of computing the actual separation.

This affects `SphereBounds` and `BoxBounds` modes:
- Two intersecting spheres → distance = 0
- Two intersecting boxes → distance = 0

When disabled, the actual distance between measurement points is returned even if geometries overlap.

---

## Distance Settings Reference

When you see distance settings in a node, they typically include:

| Setting | Default | Purpose |
|---------|---------|---------|
| **Source** | Center | Where to measure from on source point |
| **Target** | Center | Where to measure to on target point |
| **Distance Type** | Euclidean | Distance calculation formula |
| **Overlap Is Zero** | Enabled | Treat overlapping as zero distance |

---

## Common Configurations

**Simple point distance** (default):
- Source: `Center`, Target: `Center`, Type: `Euclidean`

**Surface-to-surface for spherical objects**:
- Source: `SphereBounds`, Target: `SphereBounds`, Type: `Euclidean`

**Grid-based proximity**:
- Source: `Center`, Target: `Center`, Type: `Chebyshev`

---

## Performance Note

Distance calculations run in parallel across points. The measurement mode affects performance:
- `Center` is fastest (simple vector lookup)
- `SphereBounds` adds normalization and scaling
- `BoxBounds` requires transform operations

For large point sets where precision isn't critical, `Center` mode offers the best performance.
