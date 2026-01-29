---
icon: turn-down
description: 'In editor :: PCGEx | Path : Bevel'
---

# Bevel

Bevels path corners by replacing corner points with arcs or line segments.

## How It Works

For each corner point:

1. Calculate **bevel width** based on mode (radius or distance)
2. Find **arrive/leave positions** along neighboring segments
3. Generate **profile** (line, arc, or custom)
4. Optionally **subdivide** the profile

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **In** | Points | Path points to bevel |
| **Bevel Conditions** | Filters | Optional filters to control which points are beveled |
| **Profile** | Points | Custom profile shape (when Type = Custom) |

## Settings

### Bevel Configuration

<details>
<summary><strong>Mode</strong> <code>EPCGExBevelMode</code></summary>

How bevel width is interpreted.

| Option | Description |
|--------|-------------|
| Radius | Width as radius for computing distance along segments |
| Distance | Width as direct distance along segments |

Default: `Radius`

</details>

<details>
<summary><strong>Type</strong> <code>EPCGExBevelProfileType</code></summary>

Shape of the bevel profile.

| Option | Description |
|--------|-------------|
| Line | Straight cut between points |
| Arc | Curved arc between points |
| Custom | Use input profile shape |

Default: `Line`

</details>

<details>
<summary><strong>Keep Corner Point</strong> <code>bool</code></summary>

Preserve the original corner point in the output.

Default: `false`

*Visible when Type = Line*

⚡ PCG Overridable

</details>

### Width

<details>
<summary><strong>Width Measure</strong> <code>EPCGExMeanMeasure</code></summary>

How to interpret the width value.

| Option | Description |
|--------|-------------|
| Discrete | Actual distance in world units |
| Relative | Percentage of segment length (0-1) |

Default: `Relative`

</details>

<details>
<summary><strong>Width Input</strong> <code>Constant | Attribute</code></summary>

Whether width is constant or per-point.

Default: `Constant`

</details>

<details>
<summary><strong>Width (Attr)</strong> <code>Attribute Selector</code></summary>

Attribute to read width from.

*Visible when Width Input = Attribute*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Width</strong> <code>double</code></summary>

Bevel width constant.

Default: `0.1`

*Visible when Width Input = Constant*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Limit</strong> <code>EPCGExBevelLimit</code></summary>

How to limit bevel extent.

| Option | Description |
|--------|-------------|
| None | No limit |
| Closest Neighbor | Limited by closest neighbor position |
| Balanced | Balance against opposite bevel |

Default: `Balanced`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Slide Along Path</strong> <code>bool</code></summary>

Allow bevels to extend past non-beveled points.

Default: `false`

*Visible when Limit != None*

⚡ PCG Overridable

</details>

### Subdivision

<details>
<summary><strong>Subdivide</strong> <code>bool</code></summary>

Add subdivision points along the bevel profile.

Default: `false`

*Visible when Type != Custom*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Subdivide Method</strong> <code>EPCGExSubdivideMode</code></summary>

How to calculate subdivision count.

Default: `Count`

*Visible when Subdivide = true*

⚡ PCG Overridable

</details>

### Flags

<details>
<summary><strong>Flag Poles</strong> <code>bool</code></summary>

Write boolean marking bevel start/end points.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Flag Start Point</strong> <code>bool</code></summary>

Write boolean marking bevel start points.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Flag End Point</strong> <code>bool</code></summary>

Write boolean marking bevel end points.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Flag Subdivision</strong> <code>bool</code></summary>

Write boolean marking subdivision points.

Default: `false`

⚡ PCG Overridable

</details>

## Examples

**Simple corner chamfer**:
- Mode: `Distance`
- Type: `Line`
- Width: `10`

**Rounded corners**:
- Mode: `Radius`
- Type: `Arc`
- Width: `20`
- Subdivide: Enabled
- Subdivide Method: `Count`
- Subdivision Count: `8`

**Proportional bevels (10% of segment)**:
- Mode: `Distance`
- Width Measure: `Relative`
- Width: `0.1`

## Related

- [Subdivide](./subdivide.md) - Add intermediate points
- [Fuse Collinear](./fuse-collinear.md) - Remove collinear points

---

📦 **Module**: `PCGExElementsPaths` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPaths/Private/Elements/PCGExBevelPath.cpp)
