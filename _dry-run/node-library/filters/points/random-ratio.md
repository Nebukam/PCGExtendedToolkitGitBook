---
icon: shuffle
description: 'In editor :: PCGEx | Filter : Random (Ratio)'
---

# Random Ratio

Randomly selects a specified ratio or count of points.

## Overview

The Random Ratio filter probabilistically selects points based on a target ratio or count. Unlike the Random filter which evaluates each point independently, this filter ensures the final selection matches the requested proportion—useful when you need exactly N points or a specific percentage of the total.

## How It Works

1. **Calculate target count** based on ratio and total points
2. **Randomly select** exactly that many points using the seed
3. **Return result**: pass for selected points, fail for others

## Settings

### Selection

<details>
<summary><strong>Random Settings</strong> <code>Random Ratio Details</code></summary>

Configuration for random selection:

- **Seed** - Random seed for reproducible results
- **Ratio** - Target proportion (0.0 to 1.0) or absolute count
- **Mode** - How to interpret the ratio value

</details>

### Behavior

<details>
<summary><strong>Invert Result</strong> <code>bool</code></summary>

Flip the selection—selected points fail, unselected points pass.

Default: Disabled

</details>

## Selection Modes

The Random Settings support different modes for specifying the selection:

| Mode | Meaning |
|------|---------|
| **Ratio** | Select this proportion of total points (0.5 = 50%) |
| **Count** | Select exactly this many points |
| **Per Collection** | Apply ratio/count per collection separately |
| **Global** | Apply ratio/count across all collections combined |

## Examples

**Select 25% of points**:
- Ratio: `0.25`
- Mode: `Ratio`

**Select exactly 100 points**:
- Ratio: `100`
- Mode: `Count`

**Keep 80% of points** (remove 20%):
- Ratio: `0.2`
- Invert Result: Enabled

**Reproducible random selection**:
- Seed: `12345`
- Ratio: `0.5`

## Seed Behavior

The seed ensures reproducible results:
- Same seed + same data = same selection
- Different seeds = different selections
- Seed of 0 typically uses a random seed

## Related

### Filters
- [Random](./random.md) - Per-point probability (may not hit exact ratio)
- [Modulo Compare](./modulo-compare.md) - Pattern-based selection
- [Picker](./picker.md) - Index-based selection

---

:package: **Module**: `PCGExFilters` | :page_facing_up: [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFilters/Private/Filters/Points/PCGExRandomRatioFilter.cpp)
