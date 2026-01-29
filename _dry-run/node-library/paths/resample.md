---
icon: ruler-combined
description: 'In editor :: PCGEx | Path : Resample'
---

# Resample

Redistributes path points at uniform intervals.

## How It Works

1. Calculate **total path length**
2. Determine **sample positions** based on mode
3. Create **new points** at sample locations
4. **Blend** properties from neighboring original points

## Settings

### Resample Mode

<details>
<summary><strong>Mode</strong> <code>Sweep | Redistribute</code></summary>

How the path is resampled:

| Option | Behavior |
|--------|----------|
| **Sweep** | Walk along the path at fixed intervals, creating new points |
| **Redistribute** | Keep the same point count but redistribute evenly |

Default: `Sweep`

⚡ PCG Overridable

</details>

### Sweep Mode Settings

<details>
<summary><strong>Resolution Mode</strong> <code>Distance | Count</code></summary>

How to determine sample spacing (Sweep mode only):

| Option | Behavior |
|--------|----------|
| **Distance** | Target distance between points |
| **Count** | Exact number of output points |

Default: `Distance`

</details>

<details>
<summary><strong>Resolution</strong> <code>double</code></summary>

Sample length or count based on Resolution Mode. Supports `@Data` attribute lookup.

Default: `100`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Redistribute Evenly</strong> <code>bool</code></summary>

Adjust sample spacing so all samples are evenly distributed across the path length.

Default: Enabled

⚡ PCG Overridable

</details>

<details>
<summary><strong>Preserve Last Point</strong> <code>bool</code></summary>

Keep the exact last point position (ignored for closed loops).

Default: Disabled

⚡ PCG Overridable

</details>

<details>
<summary><strong>Truncate</strong> <code>Round | Floor | Ceiling</code></summary>

How to handle fractional sample counts.

Default: `Round`

⚡ PCG Overridable

</details>

### Blending

<details>
<summary><strong>Blending Settings</strong> <code>FPCGExBlendingDetails</code></summary>

How to interpolate attributes for resampled points. New points receive blended values from the original points they fall between.

Default: Position uses `Lerp`, other properties use `None`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Ensure Unique Seeds</strong> <code>bool</code></summary>

Ensure each resampled point gets a unique random seed.

Default: Enabled

</details>

## Examples

**Uniform high density**:
- Mode: `Sweep`
- Resolution Mode: `Distance`
- Resolution: `50`

**Exact point count**:
- Mode: `Sweep`
- Resolution Mode: `Count`
- Resolution: `20`

**Redistribute existing points**:
- Mode: `Redistribute`
- (Keeps same point count, just evenly spaces them)

## Resample vs Subdivide

| Resample | Subdivide |
|----------|-----------|
| Replaces all points | Keeps original points |
| Guarantees uniform spacing | Spacing varies by original segment |
| Loses original point positions | Preserves original positions |
| Better for final output | Better for refinement |

## Before / After

```
Before:  ●──●────────●───●──●──────────●
         (irregular spacing)

After:   ●────●────●────●────●────●────●
         (uniform spacing)
```

## Use Cases

- **Consistent instancing**: Uniform object placement along paths
- **Animation timing**: Even spacing for movement keyframes
- **Simplification prep**: Uniform density before reduction
- **LOD generation**: Different densities for distance-based detail

## Related

### Path Shaping
- [Subdivide](./subdivide.md) - Add points without replacing originals
- [Reduce](./reduce.md) - Remove points while preserving shape
- [Smooth](./smooth/) - Often used before resampling

---

📦 **Module**: `PCGExElementsPaths` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPaths/Private/Elements/PCGExPathResample.cpp)
