---
icon: wave-sine
description: 'In editor :: PCGEx | Path : Smooth'
---

# Smooth

Reduces path jaggedness by averaging point positions with their neighbors.

## Overview

Smoothing softens sharp corners and irregularities in a path by blending each point's position with nearby points. The result is a more flowing, organic path that still follows the general trajectory of the original.

The specific smoothing behavior is controlled by the **Smoothing Method**—an instanced sub-node that defines how neighbors are selected and weighted.

## Smoothing Methods

| Method | Description |
|--------|-------------|
| [Moving Average](./moving-average.md) | Window-based smoothing using point indices |
| [Radius](./radius.md) | Spatial smoothing using distance-based neighbor search |

## How It Works

For each point:

1. **Select smoothing method** (Moving Average or Radius)
2. **Identify neighbors** based on method's criteria
3. **Calculate weighted blend** from neighbor values
4. **Apply influence** to control blend strength

## Settings

### Smoothing Method

<details>
<summary><strong>Smoothing Method</strong> <code>Instanced Factory</code> ⚙️</summary>

The algorithm used to select and weight neighboring points. Click the dropdown to choose between available methods, each with its own settings.

See child pages for method-specific settings.

</details>

### Influence

<details>
<summary><strong>Influence Input</strong> <code>Constant | Attribute</code></summary>

Where to read the influence value (blend strength toward smoothed position).

</details>

<details>
<summary><strong>Influence</strong> <code>double</code></summary>

How much to blend toward the smoothed position.

- `0.0` = No change
- `1.0` = Move fully to smoothed position

Default: `1.0`

⚡ PCG Overridable

</details>

### Smoothing Amount

<details>
<summary><strong>Smoothing Input</strong> <code>Constant | Attribute</code></summary>

Where to read the smoothing amount. Interpretation depends on the selected method:
- **Moving Average**: Number of neighbors on each side
- **Radius**: Search radius in world units

</details>

<details>
<summary><strong>Smoothing</strong> <code>double</code></summary>

The smoothing amount. Range and meaning depends on the selected method.

Default: `1.0`

⚡ PCG Overridable

</details>

### Endpoint Handling

<details>
<summary><strong>Preserve Start</strong> <code>bool</code></summary>

Keep the first point at its original position.

Default: Enabled

⚡ PCG Overridable

</details>

<details>
<summary><strong>Preserve End</strong> <code>bool</code></summary>

Keep the last point at its original position.

Default: Enabled

⚡ PCG Overridable

</details>

### Attribute Blending

<details>
<summary><strong>Blending Settings</strong> <code>Blending Details</code></summary>

Controls how attributes are blended during smoothing. Applies the same neighbor weighting to attribute values.

See [Attribute Mapping](../../shared-concepts/attribute-mapping.md) for blending options.

</details>

## Examples

**Gentle smoothing** (subtle cleanup):
- Smoothing Method: Moving Average
- Smoothing: `2` (2 neighbors each side)
- Influence: `0.5`

**Aggressive spatial smoothing**:
- Smoothing Method: Radius
- Smoothing: `200` (200 unit radius)
- Influence: `0.8`

**Smooth while keeping endpoints fixed**:
- Preserve Start: Enabled
- Preserve End: Enabled

## Before / After

```
Before:  ●───●
              \
               ●───●
                    \
                     ●

After:   ●─────●─────●─────●─────●
         (smoother curve)
```

## Related

### Path Shaping
- [Reduce](../reduce.md) - Remove points while preserving shape
- [Resample](../resample.md) - Uniform point spacing
- [Fuse Collinear](../fuse-collinear.md) - Merge straight-line points

### See Also
- [Bevel](../bevel.md) - Rounds corners with explicit geometry

---

📦 **Module**: `PCGExElementsPaths` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPaths/Private/Elements/PCGExSmooth.cpp)
