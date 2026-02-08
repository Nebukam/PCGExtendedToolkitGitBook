---
icon: puzzle-piece
description: 'Noise : Worley - Worley/Cellular noise - cell-like patterns.'
---

# Noise : Worley

Worley/Cellular noise - cell-like patterns.

## Overview

This noise generates cellular patterns based on distances to randomly distributed feature points, also known as Worley noise or Cellular noise. It divides 3D space into cells, each containing a jittered feature point, then evaluates distances from sample points to these features. By offering multiple distance functions (Euclidean, Manhattan, Chebyshev) and various ways to combine distance values (F1, F2, F2-F1, etc.), Worley noise provides extensive control over cell appearance — from organic bubbles to crystalline structures to abstract patterns. It's closely related to Voronoi noise but offers more flexibility in distance metrics and output combinations.

## How It Works

1. **Grid Setup**: Divides 3D space into a cubic grid of cells
2. **Feature Point Placement**: Places one feature point per cell:
   - Jitter controls randomization (0 = centered, 1 = fully random within cell)
3. **Neighbor Search**: For each sample point, searches nearby grid cells to find feature points
4. **Distance Calculation**: Computes distances using the selected DistanceFunction:
   - **Euclidean**: Standard straight-line distance (circular cells)
   - **Euclidean Squared**: Squared distance (circular cells, faster computation)
   - **Manhattan**: Sum of axis distances (diamond-shaped cells)
   - **Chebyshev**: Maximum axis distance (square cells)
5. **Distance Sorting**: Identifies the closest (F1) and second-closest (F2) feature points
6. **Return Type Application**: Generates output based on ReturnType:
   - **F1**: Distance to closest point (cell center gradients)
   - **F2**: Distance to second-closest point (outer regions)
   - **F2-F1**: Difference (emphasizes cell boundaries)
   - **F1+F2**: Sum (combined distance effects)
   - **F1×F2**: Product (multiplicative combination)
   - **Cell Value**: Random value for nearest cell (flat regions)
7. **Inherited Processing**: Applies base noise settings (frequency, transform, contrast, remap curve, etc.)

## Behavior

```
Distance Function Effects:

Euclidean:     ●  ●  ●  (circular/spherical cells)
Manhattan:     ◆  ◆  ◆  (diamond cells, axis-aligned)
Chebyshev:     ■  ■  ■  (square cells)
Euclidean Sq:  ●  ●  ●  (circular, faster computation)
```
```
Return Type Effects:

F1:            ·●●●●●·  (bright at edges, dark at centers)
F2:            ●●●·●●●  (dark at edges, bright in outer regions)
F2-F1:         ████││  (strong edge emphasis, cell boundaries)
F1+F2:         ∼∼∼●∼∼∼  (combined distance influence)
F1×F2:         ≈≈≈●≈≈≈  (multiplicative blend)
Cell Value:    ▓▓▒▒░░  (flat per-cell values, hard edges)
```
```
Jitter Effect:

None (0.0):   ████████  (perfect grid, regular cells)
Low (0.5):    ███▓██▓█  (slight irregularity)
Full (1.0):   █▓▒▓█▒▓█  (organic, natural variation)
```
```
Distance Metrics Comparison:

Euclidean:   Natural, circular cells
Manhattan:   Cross-shaped, 45° diamond cells
Chebyshev:   Square cells, axis-aligned
```

Good for: cellular textures, organic patterns, stone walls, bubble effects, crystal structures, cracked surfaces, water droplets

## Settings

### Node-Specific Settings

<details>
<summary><strong>Distance Function</strong> <code>EPCGExWorleyDistanceFunc</code></summary>

Determines how distance is measured from sample points to feature points. Different metrics create different cell shapes.

| Option | Description |
|--------|-------------|
| **Euclidean** (default) | Standard straight-line distance (√(dx²+dy²+dz²)). Creates circular/spherical cells with natural, organic appearance. |
| **Euclidean Squared** | Squared Euclidean distance (dx²+dy²+dz²). Creates circular cells like Euclidean but faster to compute (avoids square root). |
| **Manhattan** | Sum of absolute differences (|dx|+|dy|+|dz|). Creates diamond-shaped cells with 45° axis alignment. Also known as "taxicab" or "city block" distance. |
| **Chebyshev** | Maximum axis difference (max(|dx|,|dy|,|dz|)). Creates square/cubic cells aligned to world axes. |

Default: `Euclidean`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Return Type</strong> <code>EPCGExWorleyReturnType</code></summary>

Determines what value the noise returns based on the computed distances to feature points.

| Option | Description |
|--------|-------------|
| **F1 (Closest)** (default) | Returns the distance to the nearest feature point. Creates gradients from cell centers (dark) to edges (bright). |
| **F2 (Second Closest)** | Returns the distance to the second-nearest feature point. Emphasizes outer cell regions. |
| **F2 - F1 (Edge Detection)** | Returns the difference between F2 and F1. Very low values at cell boundaries, creating strong edge emphasis. Excellent for crack/edge effects. |
| **F1 + F2** | Returns the sum of F1 and F2. Combines both distance influences for unique patterns. |
| **F1 * F2** | Returns the product of F1 and F2. Multiplicative blend creating different gradient characteristics. |
| **Cell Value** | Returns a random value for the nearest cell. Creates flat regions with hard boundaries, similar to Voronoi Cell Value mode. |

Default: `F1 (Closest)`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Jitter</strong> <code>double</code></summary>

Controls how much feature points are randomly offset within their cells. Lower values create more regular patterns, higher values produce organic, irregular cells.

- **0.0**: No jitter, feature points at cell centers (perfect grid, regular cells)
- **0.5**: Moderate randomization
- **1.0** (default): Maximum randomization, feature points anywhere in cell (organic, natural)

Jitter affects cell shape variety and pattern regularity.

Default: `1.0`

Range: `0.0` to `1.0`

⚡ PCG Overridable

</details>

### Inherited Settings

This noise inherits common settings from the base noise configuration.

→ See [Noise3D Factory Provider](../Core/PCGExNoise3DFactoryProvider.md) for: Weight Factor, Blend Mode, Invert, Remap Curve, Seed, Transform, Frequency, Contrast, and other shared noise properties.

**Tip**: Experiment with combinations:
- **Manhattan + F2-F1**: Cross-shaped cracks and boundaries
- **Chebyshev + F1**: Square cells with radial gradients
- **Euclidean + F2-F1**: Natural crack/cell boundary patterns
- **Any metric + Cell Value**: Flat colored regions (like stained glass)

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Noise3D** | Noise3D | Noise factory that can be used by nodes requiring noise input |

---

📦 **Module**: `PCGExNoise3D` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExNoise3D/Public/Noises/PCGExNoiseWorley.h)

<!-- VERIFICATION REPORT
Node-Specific Properties: 3 documented (DistanceFunction, ReturnType, Jitter)
Inherited Properties: Referenced to Noise3D Factory Provider
Inputs: None (noise generator)
Outputs: Noise3D (Noise factory)
Nested Types: FPCGExNoiseConfigWorley, EPCGExWorleyDistanceFunc (4 metrics), EPCGExWorleyReturnType (6 types)
Use Cases: cellular textures, organic patterns, stone walls, bubble effects, crystal structures, cracked surfaces, water droplets
Special Features: Multiple distance metrics, multiple return types, F1/F2 distance calculations, jitter control
Algorithm: Worley/Cellular noise with configurable distance functions
Distance Metrics: Euclidean (circular), Manhattan (diamond), Chebyshev (square), Euclidean Squared (circular, faster)
Return Types: F1, F2, F2-F1 (edges), F1+F2, F1×F2, Cell Value
Technical: Feature point placement, multi-cell search, distance sorting
Aliases: Also known as Cellular noise
-->
