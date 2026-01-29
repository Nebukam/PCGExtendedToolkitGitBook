---
icon: star-half-stroke
description: 'In editor :: PCGEx | Fill Control : Heuristics Scoring'
---

# Heuristics Scoring

Computes heuristic scores for candidates to influence expansion priority.

## Overview

The Heuristics Scoring control uses heuristic sub-nodes to compute scores for diffusion candidates. Unlike Heuristics Budget, this control only performs scoring without validation—it influences which candidates expand first but doesn't stop propagation. Lower scores expand first.

## How It Works

1. **Compute Scores**: Uses connected heuristics to score each candidate
2. **Weight Application**: Multiplies by score weight
3. **Priority Influence**: Candidates with lower scores expand first

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
<summary><strong>Scoring</strong> <code>bitmask</code></summary>

Which score components to include.

| Flag | Description |
|------|-------------|
| **Local Score** | Score from neighbor to neighbor |
| **Global Score** | Score from seed to candidate |
| **Previous Score** | Previously accumulated local score |

Default: `Local Score`

</details>

<details>
<summary><strong>Score Weight</strong> <code>double</code></summary>

Multiplier applied to scores from this control.

Default: `1.0`

⚡ PCG Overridable

</details>

## Applies At

- **Scoring**: Yes (affects candidate priority)
- **Validation**: No (does not stop propagation)

## Examples

**Distance-prioritized fill** (closer expands first):
- Connect Shortest Distance heuristic
- **Scoring**: `Local Score`

**Downhill preference**:
- Connect Gradient heuristic
- **Score Weight**: `2.0` (stronger influence)

## Tips

{% hint style="info" %}
Use multiple Heuristics Scoring controls with different heuristics and weights to create complex expansion priorities.
{% endhint %}

## Related

- [Heuristics Budget](./heuristics-budget.md) - Scoring with budget limit
- [Heuristics Threshold](./heuristics-threshold.md) - Threshold on score values
- [Heuristics](../heuristics/README.md) - Available heuristic types

---

📦 **Module**: `PCGExElementsFloodFill` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsFloodFill/Public/FillControls/PCGExFillControlHxScoring.h)
