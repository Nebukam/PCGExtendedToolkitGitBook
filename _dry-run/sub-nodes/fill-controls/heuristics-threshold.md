---
icon: gauge-high
description: 'In editor :: PCGEx | Fill Control : Heuristics Threshold'
---

# Heuristics Threshold

Stops diffusion when instantaneous heuristic score crosses a threshold.

## Overview

The Heuristics Threshold control uses heuristics to compute a score and stops propagation when that score crosses a threshold. Unlike Budget which tracks accumulated cost, this checks single values—useful for detecting steep edges, sharp turns, or other instantaneous conditions.

## How It Works

1. **Compute Score**: Uses connected heuristics to score the candidate
2. **Select Source**: Chooses which score aspect to compare
3. **Compare**: Tests if score crosses threshold
4. **Validate**: Stops propagation if comparison fails

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **Heuristics** | Heuristic Factories | Heuristics used for scoring |

## Settings

<details>
<summary><strong>Heuristic Score Mode</strong> <code>EPCGExHeuristicScoreMode</code></summary>

How to combine scores from multiple heuristics.

Default: `Weighted Average`

</details>

<details>
<summary><strong>Threshold</strong> <code>double</code></summary>

The threshold value to compare against.

Supports constant value or attribute input.

Default: `0.5`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Comparison</strong> <code>EPCGExComparison</code></summary>

How to compare the score against the threshold. Candidate is valid if: `Score [Comparison] Threshold`

See [Comparison Operators](../../shared-concepts/comparison-operators.md) for all options.

Default: `Strictly Smaller`

</details>

<details>
<summary><strong>Tolerance</strong> <code>double</code></summary>

Tolerance for near-equal comparisons.

*Visible when using Nearly Equal or Nearly Not Equal comparison*

Default: `DBL_COMPARE_TOLERANCE`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Threshold Source</strong> <code>EPCGExFloodFillThresholdSource</code></summary>

Which score value to compare against the threshold.

| Option | Behavior |
|--------|----------|
| **Edge Score** | Current edge's heuristic score |
| **Global Score** | Heuristic distance from seed to candidate |
| **Score Delta** | Change in score from previous candidate |

Default: `Edge Score`

</details>

## Applies At

- **Candidate**: Yes (scoring and validation)

## Examples

**Avoid steep edges**:
- Connect Steepness heuristic
- **Threshold Source**: `Edge Score`
- **Comparison**: `Strictly Smaller`
- **Threshold**: `0.8`

**Stop at sudden changes**:
- Connect relevant heuristics
- **Threshold Source**: `Score Delta`
- **Comparison**: `Strictly Smaller`
- **Threshold**: `0.5`

## Related

- [Heuristics Budget](./heuristics-budget.md) - Accumulated cost limit
- [Heuristics Scoring](./heuristics-scoring.md) - Scoring only
- [Attribute Threshold](./attribute-threshold.md) - Direct attribute comparison

---

📦 **Module**: `PCGExElementsFloodFill` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsFloodFill/Public/FillControls/PCGExFillControlHxThreshold.h)
