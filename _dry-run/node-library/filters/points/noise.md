---
icon: wave-square
description: 'In editor :: PCGEx | Filter : Noise'
---

# Noise

Compares a threshold against 3D noise sampled at each point's position.

{% hint style="info" %}
This filter is part of the **Meta** module and requires noise generator input.
{% endhint %}

## Overview

The Noise filter evaluates each point by sampling 3D noise at the point's spatial position and comparing the result against a threshold. This enables organic, procedural filtering patterns—creating natural variation, density falloff, or spatially coherent selection.

This filter requires a **noise generator input** that defines the noise function.

## How It Works

For each point:

1. **Sample noise** at the point's 3D position
2. **Compare noise value** against threshold using selected operator
3. **Return result**: pass if comparison is true

## Settings

### Comparison

<details>
<summary><strong>Comparison</strong> <code>Comparison Selector</code></summary>

Configuration for comparing noise value against threshold:

- **Operand B** - Threshold value (constant or from attribute)
- **Comparison Operator** - How to compare (typically `>=` or `<=`)

Default threshold: `0.5`

⚡ PCG Overridable

</details>

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **In** | Points | Points to filter |
| **Noise** | Noise Generator | Noise function definition |

## Noise Value Range

The noise generator typically outputs values in a normalized range (often 0.0 to 1.0 or -1.0 to 1.0, depending on the noise type). Adjust your threshold accordingly.

## Examples

**Keep ~50% of points** (organic selection):
- Comparison: `>=`
- Operand B: `0.5`

**Keep ~25% of points** (sparse selection):
- Comparison: `>=`
- Operand B: `0.75`

**Create dense center, sparse edges** (with appropriate noise setup):
- Use noise configured with radial falloff
- Comparison: `>=`
- Operand B: `0.3`

**Attribute-based adaptive threshold**:
- Operand B: Use attribute mode
- Operand B (Attr): `NoiseThreshold`

## Use Cases

- **Organic density variation**: Natural-looking point removal
- **Procedural masking**: Spatially coherent selection patterns
- **Terrain-driven filtering**: When noise correlates with terrain features
- **Randomization with spatial coherence**: Unlike pure random, nearby points tend to share similar results

## Noise vs Random

| Noise Filter | Random Filter |
|--------------|---------------|
| Spatially coherent | No spatial correlation |
| Nearby points have similar results | Each point independent |
| Organic patterns | Uniform distribution |
| Requires noise generator | Built-in random |

## Related

### Filters
- [Random](./random.md) - Non-spatial random filtering
- [Random Ratio](./random-ratio.md) - Exact ratio random selection

### Meta Module
- Noise generator nodes that create the noise input

---

:package: **Module**: `PCGExElementsMeta` | :page_facing_up: [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsMeta/Private/Filters/Points/PCGExNoiseFilter.cpp)
