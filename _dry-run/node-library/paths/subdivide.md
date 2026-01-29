---
icon: diagram-project
description: 'In editor :: PCGEx | Path : Subdivide'
---

# Subdivide

Subdivides path segments by adding intermediate points.

## Overview

Subdivide increases path density by inserting new points between existing ones. Unlike **Resample** (which replaces all points), Subdivide preserves original points and adds new ones in between. Subdivision can be based on distance, count, or Manhattan-style axis separation.

## Before / After

```
Before:  ●─────────────●─────────────●
         (sparse, 3 points)

After:   ●───●───●───●───●───●───●───●
         (dense, original points + subdivisions)
         ↑               ↑               ↑
         Original points preserved
```

## How It Works

For each segment:

1. Calculate **number of subdivisions** based on method
2. Create **new points** along the segment
3. **Blend** properties and attributes between endpoints

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **In** | Points | Path points to subdivide |
| **Point Filters** | Filters | Optional filters to control which segments are subdivided |
| **Blending** | Sub-point Blending Factory | Blending configuration |

## Settings

### Subdivision Method

<details>
<summary><strong>Subdivide Method</strong> <code>EPCGExSubdivideMode</code></summary>

How subdivisions are calculated.

| Option | Description |
|--------|-------------|
| Distance | Add points at fixed distance intervals |
| Count | Add a fixed number of points per segment |
| Manhattan | Subdivide along each axis separately |

Default: `Distance`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Amount Input</strong> <code>Constant | Attribute</code></summary>

Whether the amount is a constant or per-point attribute.

Default: `Constant`

*Visible when Method != Manhattan*

</details>

<details>
<summary><strong>Amount (Distance)</strong> <code>double</code></summary>

Distance between subdivision points.

Default: `10`

*Visible when Method = Distance and Input = Constant*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Amount (Count)</strong> <code>int32</code></summary>

Number of subdivision points per segment.

Default: `10`

*Visible when Method = Count and Input = Constant*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Amount (Attr)</strong> <code>Attribute Selector</code></summary>

Attribute to read subdivision amount from.

*Visible when Input = Attribute*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Redistribute Evenly</strong> <code>bool</code></summary>

Ensure even spacing of subdivision points.

Default: `false`

*Visible when Method = Distance*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Manhattan Details</strong> <code>FPCGExManhattanDetails</code></summary>

Configuration for Manhattan-style subdivision.

*Visible when Method = Manhattan*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Blending</strong> <code>UPCGExSubPointsBlendInstancedFactory</code></summary>

How to blend properties/attributes for new points.

⚡ PCG Overridable

</details>

### Additional Outputs

<details>
<summary><strong>Flag Sub Points</strong> <code>bool</code></summary>

Write a boolean flag marking subdivision points.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Sub Point Flag Name</strong> <code>FName</code></summary>

Name of the subdivision flag attribute.

Default: `IsSubPoint`

*Visible when Flag Sub Points = true*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Write Alpha</strong> <code>bool</code></summary>

Write the interpolation alpha (0-1) for each point.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Alpha Attribute Name</strong> <code>FName</code></summary>

Name of the alpha attribute.

Default: `Alpha`

*Visible when Write Alpha = true*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Default Alpha</strong> <code>double</code></summary>

Alpha value for original (non-subdivided) points.

Default: `1`

*Visible when Write Alpha = true*

⚡ PCG Overridable

</details>

## Examples

**Add points every 50 units**:
- Subdivide Method: `Distance`
- Amount (Distance): `50`

**Add 5 points per segment**:
- Subdivide Method: `Count`
- Amount (Count): `5`

**Mark new points for later filtering**:
- Flag Sub Points: Enabled
- Sub Point Flag Name: `IsSubdivision`

## Subdivide vs Resample

| Subdivide | Resample |
|-----------|----------|
| Keeps original points | Replaces all points |
| Adds points between | Creates entirely new point set |
| Spacing varies by segment | Guarantees uniform spacing |
| Better for refinement | Better for normalization |

## Related

### Path Density
- [Fuse Collinear](./fuse-collinear.md) - Remove points (opposite operation)
- [Resample](./resample.md) - Complete path resampling

---

📦 **Module**: `PCGExElementsPaths` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPaths/Private/Elements/PCGExSubdivide.cpp)
