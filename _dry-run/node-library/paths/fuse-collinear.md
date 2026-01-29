---
icon: compress
description: 'In editor :: PCGEx | Path : Fuse Collinear'
---

# Fuse Collinear

Removes collinear points from a path, simplifying it while preserving shape.

## How It Works

For each point:

1. Calculate the **angle** between incoming and outgoing segments
2. If angle is below **threshold** (points are nearly collinear), remove the point
3. Optionally **blend** properties from removed points into remaining ones

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **In** | Points | Path points to simplify |
| **Keep Conditions** | Filters | Optional filters to force-keep specific points |

## Settings

<details>
<summary><strong>Threshold</strong> <code>double</code></summary>

Angular threshold in degrees. Points with segment angles below this are considered collinear and removed.

Default: `10`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Invert Threshold</strong> <code>bool</code></summary>

Fuse points that are NOT collinear instead (smooth-like behavior).

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Fuse Collocated</strong> <code>bool</code></summary>

Also fuse points that are at the same location (distance < threshold).

Default: `true`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Fuse Distance</strong> <code>double</code></summary>

Distance below which points are considered collocated.

Default: `0.001`

*Visible when Fuse Collocated = true*

</details>

<details>
<summary><strong>Do Blend</strong> <code>bool</code></summary>

Enable property/attribute blending for fused points.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Blending Details</strong> <code>FPCGExBlendingDetails</code></summary>

How fused point properties and attributes are merged.

Default: Properties = `Average`, Attributes = `None`

*Visible when Do Blend = true*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Union Details</strong> <code>FPCGExUnionMetadataDetails</code></summary>

Metadata settings for union operations.

⚡ PCG Overridable

</details>

<details>
<summary><strong>Omit Invalid Paths From Output</strong> <code>bool</code></summary>

Exclude paths that become invalid (too few points) from output.

Default: `true`

⚡ PCG Overridable

</details>

## Examples

**Remove near-straight segments** (< 5° deviation):
- Threshold: `5`

**Aggressive simplification** (< 20° deviation):
- Threshold: `20`

**Smooth by removing sharp corners**:
- Threshold: `90`
- Invert Threshold: `true`

## Related

- [Subdivide](./subdivide.md) - Add points (opposite operation)
- [Resample](./resample.md) - Redistribute points evenly

---

📦 **Module**: `PCGExElementsPaths` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPaths/Private/Elements/PCGExFuseCollinear.cpp)
