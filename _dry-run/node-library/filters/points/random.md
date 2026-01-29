---
icon: dice
description: 'In editor :: PCGEx | Filter : Random'
---

# Random

Probabilistic filtering based on random values.

## Overview

The Random filter evaluates each point using a random number generator, passing points that roll below a threshold. This creates randomized selection without requiring pre-computed random attributes.

## How It Works

For each point:

1. **Generate random value** (0-1) using seed and point index
2. **Apply optional weight** from attribute or curve
3. **Compare against threshold**
4. **Return result**: pass if random value < threshold

## Settings

### Basic

<details>
<summary><strong>Random Seed</strong> <code>int32</code></summary>

Seed for the random number generator. Same seed produces same results.

Default: `42`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Threshold Input</strong> <code>Constant | Attribute</code></summary>

Whether threshold comes from a fixed value or per-point attribute.

Default: `Constant`

</details>

<details>
<summary><strong>Threshold</strong> <code>double (0-1)</code></summary>

Probability of passing (0 = none pass, 1 = all pass).

Default: `0.5` (50% pass rate)

⚡ PCG Overridable

</details>

### Weighting

<details>
<summary><strong>Per Point Weight</strong> <code>bool</code></summary>

Enable per-point weighting from an attribute.

Default: Disabled

</details>

<details>
<summary><strong>Weight</strong> <code>Attribute Selector</code></summary>

Attribute containing weight values. Higher weights increase pass probability.

</details>

<details>
<summary><strong>Remap Weight Internally</strong> <code>bool</code></summary>

Normalize weight values to 0-1 range based on min/max in dataset.

Default: Disabled

</details>

### Curve

<details>
<summary><strong>Use Local Curve</strong> <code>bool</code></summary>

Apply a curve to modify the random distribution.

Default: Disabled

</details>

<details>
<summary><strong>Local Weight Curve</strong> <code>Curve</code></summary>

In-editor curve for remapping random values.

</details>

<details>
<summary><strong>Weight Curve</strong> <code>Curve Asset</code></summary>

External curve asset for remapping.

</details>

### Output

<details>
<summary><strong>Invert Result</strong> <code>bool</code></summary>

Flip pass/fail results.

Default: Disabled

</details>

## Examples

**Random 30% selection**:
- Threshold: `0.3`

**Weighted random by density**:
- Per Point Weight: Enabled
- Weight: `$Density`
- Threshold: `0.5`

**Reproducible random**:
- Set a specific Random Seed
- Same seed + same data = same selection

## Related

### Filters
- [Random Ratio](./random-ratio.md) - Select exact count/percentage
- [Picker](./picker.md) - Index-based selection

---

:package: **Module**: `PCGExFilters` | :page_facing_up: [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFilters/Private/Filters/Points/PCGExRandomFilter.cpp)
