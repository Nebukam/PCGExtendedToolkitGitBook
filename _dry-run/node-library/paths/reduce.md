---
icon: compress
description: 'In editor :: PCGEx | Path : Reduce'
---

# Reduce

Removes points while attempting to preserve the path's overall shape using tangent fitting.

## Overview

Reduce simplifies paths by removing points that don't contribute significantly to the path's shape. It uses Douglas-Peucker simplification to identify which points can be removed, then fits tangents to the remaining points to preserve smooth curves. The node also outputs arrive/leave tangent attributes for use with splines.

## Settings

### Mode

<details>
<summary><strong>Mode</strong> <code>Preserve | Anchors</code></summary>

How filters control point reduction:

| Option | Behavior |
|--------|----------|
| **Preserve** | Filters define points that are guaranteed to be preserved. Other points may be removed based on error tolerance |
| **Anchors** | Filters define exactly which points the path will be reduced to (no simplification algorithm) |

Default: `Preserve`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Error Tolerance</strong> <code>double</code></summary>

Maximum error allowed during Douglas-Peucker simplification. Points within this distance of the simplified line are candidates for removal.

- Lower values = preserve more points (more accurate)
- Higher values = more aggressive reduction

Only visible when Mode is `Preserve`.

Default: `10`

⚡ PCG Overridable

</details>

### Tangent Output

<details>
<summary><strong>Arrive Name</strong> <code>FName</code></summary>

Attribute name to write the arriving tangent vector to.

Default: `ArriveTangent`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Leave Name</strong> <code>FName</code></summary>

Attribute name to write the leaving tangent vector to.

Default: `LeaveTangent`

⚡ PCG Overridable

</details>

### Smoothing

<details>
<summary><strong>Smoothing Mode</strong> <code>None (Accurate) | Direction Only (G1) | Full (C1)</code></summary>

How tangents are smoothed after fitting:

| Option | Behavior |
|--------|----------|
| **None (Accurate)** | Keep tangents separate - most accurate to original curve |
| **Direction Only (G1)** | Blend directions only, re-optimize magnitudes |
| **Full (C1)** | Fully matched tangents with optimized magnitudes |

Default: `Full (C1)`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Smoothing</strong> <code>double (0-1)</code></summary>

How much to blend tangents at junctions. Can be a constant or read from an attribute.

- `0` = precise (no blending)
- `1` = smooth (full blending)

Default: `1.0`

⚡ PCG Overridable

</details>

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **In** | Points | Path points to reduce |
| **Filters** | Point Filters | Filters controlling which points to preserve or use as anchors |

## Examples

**Automatic simplification with preserved corners**:
- Mode: `Preserve`
- Error Tolerance: `10`
- Use Filters to mark corner points as non-removable

**Manual anchor-based reduction**:
- Mode: `Anchors`
- Use Filters to select exactly which points to keep
- Tangents are fitted to connect the anchors smoothly

**Smooth tangent output**:
- Smoothing Mode: `Full (C1)`
- Smoothing: `1.0`
- Results in smooth, continuous tangents suitable for splines

## Use Cases

- **LOD generation**: Simpler paths for distant views
- **Spline preparation**: Reduce point count while generating smooth tangents
- **Performance optimization**: Fewer points to process downstream
- **Pre-processing**: Clean up high-density input before other operations

## Related

### Path Simplification
- [Fuse Collinear](./fuse-collinear.md) - Remove points on straight sections
- [Resample](./resample.md) - Replace with uniform point distribution

### Tangent Operations
- [Write Tangents](./write-tangents.md) - Compute tangents without reduction
- [Create Spline](./create-spline.md) - Convert reduced path to spline

---

📦 **Module**: `PCGExElementsPaths` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPaths/Private/Elements/PCGExPathReduce.cpp)
