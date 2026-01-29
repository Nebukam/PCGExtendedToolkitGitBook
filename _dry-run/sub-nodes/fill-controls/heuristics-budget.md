---
icon: coins
description: 'In editor :: PCGEx | Fill Control : Heuristics Budget'
---

# Heuristics Budget

Stops diffusion when accumulated heuristic cost exceeds a budget.

## Overview

The Heuristics Budget control uses heuristic sub-nodes to compute traversal costs and stops the fill when the total cost exceeds a budget. This combines scoring (for prioritization) and validation (for stopping) in one control, making it ideal for cost-limited expansion.

## How It Works

1. **Compute Scores**: Uses connected heuristics to score each candidate
2. **Track Accumulation**: Maintains running total based on budget source
3. **Check Budget**: Stops propagation when accumulated cost exceeds maximum

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **Heuristics** | Heuristic Factories | Heuristics used for scoring |

## Settings

<details>
<summary><strong>Heuristic Score Mode</strong> <code>EPCGExHeuristicScoreMode</code></summary>

How to combine scores from multiple heuristics.

| Option | Behavior |
|--------|----------|
| **Weighted Average** | Average weighted by each heuristic's weight |
| **Sum** | Add all scores together |
| **Min** | Use lowest score |
| **Max** | Use highest score |

Default: `Weighted Average`

</details>

<details>
<summary><strong>Max Budget</strong> <code>double</code></summary>

Maximum accumulated cost allowed before stopping.

Supports constant value or attribute input.

Default: `100.0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Budget Source</strong> <code>EPCGExFloodFillBudgetSource</code></summary>

Which score to track for budget comparison.

| Option | Behavior |
|--------|----------|
| **Path Score** | Accumulated heuristic score along path |
| **Composite Score** | Total combined score |
| **Path Distance** | Accumulated spatial distance |

Default: `Path Score`

</details>

## Applies At

- **Candidate**: Yes (scoring and validation)

## Examples

**Cost-limited exploration**:
- Connect distance and slope heuristics
- **Max Budget**: `1000`
- **Budget Source**: `Path Score`

## Tips

{% hint style="info" %}
This control both scores candidates (affecting expansion order) and validates them (stopping when over budget). For scoring-only, use Heuristics Scoring instead.
{% endhint %}

## Related

- [Heuristics Scoring](./heuristics-scoring.md) - Scoring only (no budget limit)
- [Heuristics Threshold](./heuristics-threshold.md) - Threshold on instantaneous score
- [Heuristics](../heuristics/README.md) - Available heuristic types

---

📦 **Module**: `PCGExElementsFloodFill` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsFloodFill/Public/FillControls/PCGExFillControlHxBudget.h)
