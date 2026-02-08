---
icon: layer-group
description: 'How Heuristics Work Together - Understanding the orchestration system behind multi-heuristic pathfinding'
---

# How Heuristics Work Together

When you connect multiple heuristics to a pathfinding node, they don't just run independently — there's an orchestration layer called the **Heuristics Handler** that combines them into a single coherent scoring system. Understanding this system helps you build more effective multi-heuristic setups.

## The Big Picture

```
┌─────────────────┐
│  Distance       │──┐
│  (Weight: 1.0)  │  │
└─────────────────┘  │    ┌──────────────────────┐
                     │    │                      │
┌─────────────────┐  │    │   Heuristics Handler │     Final
│  Steepness      │──┼───►│                      │────►Score
│  (Weight: 0.5)  │  │    │   (Score Mode)       │
└─────────────────┘  │    │                      │
                     │    └──────────────────────┘
┌─────────────────┐  │
│  Feedback       │──┘
│  (Weight: 2.0)  │
└─────────────────┘
```

The handler collects all connected heuristics, categorizes them by behavior, and combines their scores using a configurable **Score Mode**.

## Heuristic Categories

Internally, heuristics are categorized based on what information they need to compute their score. This categorization enables optimizations — scores that don't change can be cached rather than recomputed.

| Category | Description | Examples |
|----------|-------------|----------|
| **Fully Static** | Score depends only on the edge/node itself — doesn't change based on where you're going or where you've been | Distance, Attribute |
| **Goal Dependent** | Score changes based on the goal location | Azimuth, Steepness (toward goal) |
| **Travel Dependent** | Score changes based on the path taken so far | Inertia, Turn Penalty |
| **Feedback** | Special category that accumulates information during pathfinding | Feedback heuristic |

You don't need to worry about this categorization when setting up heuristics — it happens automatically. But it explains why some heuristics are faster than others, and why Feedback heuristics have special behavior.

## Score Modes

The **Score Mode** setting (found on nodes that consume heuristics) determines how individual heuristic scores are combined into a final score. Each mode has different characteristics:

### Weighted Average (Default)

```
Final = sum(score × weight) / sum(weight)
```

The most balanced option. Each heuristic contributes proportionally to its weight, and the result is normalized. A heuristic with weight 2.0 has twice the influence of one with weight 1.0.

**Best for**: General-purpose pathfinding where you want balanced consideration of all factors.

### Weighted Sum

```
Final = sum(score × weight)
```

Like Weighted Average but without normalization. The total score grows with more heuristics. Useful when you want absolute costs to accumulate.

**Best for**: Cost-based pathfinding where you're computing actual traversal costs.

### Geometric Mean

```
Final = exp(sum(weight × log(score)) / sum(weight))
```

Multiplicative combination that's more sensitive to low scores. If any heuristic returns a very low score, it pulls the whole result down significantly.

**Best for**: Situations where you want to enforce "all heuristics must be satisfied" — a single bad score tanks the result.

### Harmonic Mean

```
Final = sum(weight) / sum(weight / score)
```

Heavily emphasizes low scores. Even more aggressive than Geometric Mean at penalizing paths that score poorly on any single heuristic.

**Best for**: Conservative pathfinding where you want to avoid any "bad" edges, even if other heuristics say they're good.

### Min

```
Final = lowest(score / weight)
```

Returns only the lowest weighted score. The most permissive mode — a path is scored by its best heuristic.

**Best for**: "Any reason is good enough" pathfinding where you want to allow edges that score well on at least one criterion.

### Max

```
Final = highest(score / weight)
```

Returns only the highest weighted score. The most restrictive mode — a path is scored by its worst heuristic.

**Best for**: Strict pathfinding where a single high-cost heuristic should dominate the decision.

## Understanding Feedback

Feedback heuristics are special — they accumulate information as pathfinding progresses and use it to influence future decisions. There are two types:

### Global Feedback

Shared across all pathfinding queries in a single execution. When one path visits a node or edge, that information is available to all subsequent path calculations.

**Use case**: Encouraging path diversity — paths that use already-visited edges get penalized, pushing later paths toward unexplored areas.

### Local Feedback

Isolated to each individual pathfinding query. The feedback resets between different seed-goal pairs.

**Use case**: Penalizing backtracking within a single path search, or tracking accumulated costs specific to one route.

{% hint style="info" %}
### Feedback requires at least one base heuristic

You cannot use feedback heuristics alone — the handler requires at least one non-feedback heuristic (like Distance or Attribute) to function. Feedback modifies scores; it doesn't replace them.
{% endhint %}

## Weight Tips

- **Start with Weight = 1.0** for all heuristics, then adjust based on observed behavior
- **Increase weight** to make a heuristic more influential in the final decision
- **Use local weight multipliers** (per-vertex or per-edge attributes) for spatial variation without creating multiple heuristics
- **Remember normalization**: In Weighted Average mode, only relative weights matter — weights of (1, 2, 3) produce the same result as (0.1, 0.2, 0.3)

## Practical Example

Consider pathfinding that should:
- Prefer shorter paths (Distance)
- Avoid steep terrain (Steepness)
- Encourage smooth turns (Turn Penalty)
- Spread multiple paths apart (Feedback)

```
Distance      (Weight: 1.0)  - Base cost
Steepness     (Weight: 1.5)  - Slightly more important than distance
Turn Penalty  (Weight: 0.5)  - Minor influence
Feedback      (Weight: 2.0)  - Strong push for diversity
```

With **Weighted Average** mode, this creates paths that balance all factors. With **Harmonic Mean**, paths would more aggressively avoid steep terrain even if it means longer routes.

---

[![Static Badge](https://img.shields.io/badge/Source-PCGExHeuristics-473F69)](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExHeuristics/Private/PCGExHeuristicsHandler.cpp)


