---
icon: vector-square
description: 'In editor :: PCGEx | Path : Bevel'
---

# Bevel

Creates beveled corners at path points.

## Overview

Bevel replaces sharp corners with line cuts or arc curves by adding geometry around selected points. The original corner point is replaced with bevel profile points. This node accepts filters to control which corners get beveled.

## How It Works

For each corner point (matching filters):

1. **Calculate incoming and outgoing directions**
2. **Compute bevel width** along each segment
3. **Generate profile** (line or arc) between bevel endpoints
4. **Optionally subdivide** the profile for smoother curves
5. **Replace corner** with bevel points

## Settings

### Bevel Mode

<details>
<summary><strong>Mode</strong> <code>Radius | Distance</code></summary>

How to interpret the width value:

| Option | Behavior |
|--------|----------|
| **Radius** | Width is used as a radius to compute distance along each neighboring segment |
| **Distance** | Width is used directly as distance along each neighboring segment |

Default: `Radius`

</details>

### Profile Type

<details>
<summary><strong>Type</strong> <code>Line | Arc | Custom</code></summary>

Shape of the bevel profile:

| Option | Result |
|--------|--------|
| **Line** | Straight chamfer between endpoints |
| **Arc** | Curved arc following the corner angle |
| **Custom** | Use external point data as profile shape |

Default: `Line`

</details>

<details>
<summary><strong>Keep Corner Point</strong> <code>bool</code></summary>

When using **Line** profile, optionally keep the original corner point. If enabled, subdivision is ignored.

Default: Disabled

</details>

### Width

<details>
<summary><strong>Width Measure</strong> <code>Relative | Discrete</code></summary>

How the width value is interpreted:

| Option | Behavior |
|--------|----------|
| **Relative** | Width as fraction of segment length (0-1) |
| **Discrete** | Width as absolute distance |

Default: `Relative`

</details>

<details>
<summary><strong>Width Input</strong> <code>Constant | Attribute</code></summary>

Where to read bevel width from.

Default: `Constant`

</details>

<details>
<summary><strong>Width</strong> <code>double</code></summary>

Bevel width value (constant or attribute name).

Default: `0.1`

⚡ PCG Overridable

</details>

### Limits

<details>
<summary><strong>Limit</strong> <code>None | Closest Neighbor | Balanced</code></summary>

How to constrain bevel size when corners are close together:

| Option | Behavior |
|--------|----------|
| **None** | No limit - bevels can overlap |
| **Closest Neighbor** | Limit by closest neighbor position |
| **Balanced** | Weighted balance against opposite bevel, falling back to closest neighbor |

Default: `Balanced`

</details>

<details>
<summary><strong>Slide Along Path</strong> <code>bool</code></summary>

When enabled, bevels can extend past non-beveled points, limited only by neighboring bevels or path endpoints. Intermediate non-beveled points will be removed.

Default: Disabled

</details>

### Subdivision

<details>
<summary><strong>Subdivide</strong> <code>bool</code></summary>

Whether to add subdivision points to the profile. Not available for Custom profiles.

Default: Disabled

</details>

<details>
<summary><strong>Subdivide Method</strong> <code>Count | Distance | Manhattan</code></summary>

How to determine subdivision:

| Option | Behavior |
|--------|----------|
| **Count** | Fixed number of subdivision points |
| **Distance** | Points at regular distance intervals |
| **Manhattan** | Axis-aligned step pattern |

Default: `Count`

</details>

<details>
<summary><strong>Subdivision Count/Distance</strong> <code>int32 / double</code></summary>

Amount of subdivision based on method.

Count Default: `10`
Distance Default: `10`

⚡ PCG Overridable

</details>

### Custom Profile Scaling

When using **Custom** profile type:

<details>
<summary><strong>Main Axis Scaling</strong> <code>Uniform | Scale | Distance</code></summary>

How to scale the custom profile on the main axis (along bevel direction).

</details>

<details>
<summary><strong>Cross Axis Scaling</strong> <code>Uniform | Scale | Distance</code></summary>

How to scale the custom profile perpendicular to the bevel direction.

</details>

### Output Flags

<details>
<summary><strong>Flag Poles</strong> <code>bool</code></summary>

Write boolean attribute marking bevel endpoint positions (start or end).

Attribute: `IsBevelPole`

</details>

<details>
<summary><strong>Flag Start Point</strong> <code>bool</code></summary>

Write boolean attribute marking bevel start points.

Attribute: `IsBevelStart`

</details>

<details>
<summary><strong>Flag End Point</strong> <code>bool</code></summary>

Write boolean attribute marking bevel end points.

Attribute: `IsBevelEnd`

</details>

<details>
<summary><strong>Flag Subdivision</strong> <code>bool</code></summary>

Write boolean attribute marking subdivision points.

Attribute: `IsSubdivision`

</details>

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **In** | Points | Path points to bevel |
| **Bevel Conditions** | Filters | Point filters controlling which corners get beveled |
| **Profile** | Points | Custom profile shape (when Type is Custom) |

## Examples

**Simple chamfer**:
- Type: `Line`
- Width: `0.15` (relative)
- Subdivide: Disabled

**Rounded corners**:
- Type: `Arc`
- Subdivide: Enabled
- Subdivision Count: `8`

**Variable width bevels**:
- Width Input: `Attribute`
- Width Attribute: `CornerRadius`

## Before / After

```
Before:       ●
             / \
            /   \
           ●     ●

After:        ●─●      (Line profile)
             /   \
            /     \
           ●       ●

After:       ●╮ ╭●     (Arc profile with subdivisions)
             │╰─╯│
            /     \
           ●       ●
```

## Use Cases

- **Road corners**: Smooth turns instead of sharp angles
- **Building outlines**: Chamfered or rounded corners
- **Collision-friendly geometry**: Remove sharp angles
- **Decorative paths**: Stylized corner treatments

## Related

### Path Shaping
- [Smooth](./smooth/) - Global smoothing (affects all points)
- [Subdivide](./subdivide.md) - Add points along segments

---

📦 **Module**: `PCGExElementsPaths` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPaths/Private/Elements/PCGExBevelPath.cpp)
