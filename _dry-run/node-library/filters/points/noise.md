---
icon: wave-square
description: 'In editor :: PCGEx | Filter : Noise'
---

# Noise

Compares a threshold against 3D noise sampled at each point's position.

{% hint style="info" %}
This filter is part of the **Meta** module and requires noise generator input.
{% endhint %}

## How It Works

For each point:

1. Sample **noise** at the point's 3D position
2. Compare noise value against **threshold** using selected operator
3. Return result: pass if comparison is true

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **In** | Points | Points to filter |
| **Noise** | Noise Generator | Noise function definition |

## Settings

### Comparison

<details>
<summary><strong>Comparison</strong> <code>FPCGExCompareSelectorDouble</code></summary>

Configuration for comparing noise value against threshold.

Contains:
- **Comparison** - Operator to use (default: `~=` Nearly Equal)
- **Input** - Constant or Attribute mode (default: `Constant`)
- **Constant** - Threshold value (default: `0.5`)
- **Attribute** - Attribute selector when using Attribute mode
- **Tolerance** - For near-equality comparisons

⚡ PCG Overridable

</details>

## Examples

**Keep ~50% of points** (organic selection):
- Comparison: `>=`
- Constant: `0.5`

**Keep ~25% of points** (sparse selection):
- Comparison: `>=`
- Constant: `0.75`

**Attribute-based adaptive threshold**:
- Input: `Attribute`
- Attribute: `NoiseThreshold`

## Noise vs Random

| Noise Filter | Random Filter |
|--------------|---------------|
| Spatially coherent | No spatial correlation |
| Nearby points have similar results | Each point independent |
| Organic patterns | Uniform distribution |
| Requires noise generator | Built-in random |

## Related

- [Random](./random.md) - Non-spatial random filtering
- [Random Ratio](./random-ratio.md) - Exact ratio random selection

---

📦 **Module**: `PCGExElementsMeta` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsMeta/Private/Filters/Points/PCGExNoiseFilter.cpp)
