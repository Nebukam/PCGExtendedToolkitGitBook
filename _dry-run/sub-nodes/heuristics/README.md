---
description: Score graph nodes and edges for pathfinding algorithms
icon: route
---

# Heuristics

Heuristics define **how nodes and edges are scored** during pathfinding. Lower scores indicate preferred paths. Multiple heuristics combine to guide path selection through clusters.

📌 **Sub-node** — Connects to **Heuristics** pins.

```
Seed ○─────●─────●─────● Goal
           │     │
           ●     ●
           │
           ●

Heuristics evaluate nodes and edges:
  • Distance to goal → prefer closer
  • Steepness → prefer flat
  • Attribute value → prefer low-cost
  • Turn angle → prefer straight
```

---

## How It Works

Pathfinding algorithms (A*, Dijkstra, etc.) use heuristics to decide which paths to explore. Each heuristic computes both a **global score** (node-level) and an **edge score** (edge-level) in the 0–1 range, which are combined with others based on the **Score Mode**.

**Categories:**
- **Fully Static** — Computed once per cluster (Attribute, Least Nodes)
- **Goal Dependent** — Depends on goal position (Distance, Azimuth, Steepness)
- **Travel Dependent** — Depends on path history (Inertia, Turn Penalty, accumulated Steepness)
- **Feedback** — Accumulates during pathfinding (visited penalty)

---

## Score Aggregation Modes

When multiple heuristics connect, their scores combine:

| Mode | Formula | Behavior |
|------|---------|----------|
| **Weighted Average** | `Σ(score × weight) / Σ(weight)` | Balanced blending, scores normalized to 0–1 |
| **Geometric Mean** | `∏(score^weight)^(1/Σweight)` | Sensitive to extremes, single low score dominates |
| **Weighted Sum** | `Σ(score × weight)` | Direct contribution, scale varies with count |
| **Harmonic Mean** | `Σ(weight) / Σ(weight/score)` | Heavily emphasizes low scores |
| **Min** | `min(score × weight)` | Most permissive, any heuristic can allow |
| **Max** | `max(score × weight)` | Most restrictive, any heuristic can block |

---

## Shared Settings

All heuristics inherit these base settings:

<details>
<summary><strong>Weight Factor</strong> <code>double</code></summary>

Relative importance of this heuristic when combining multiple heuristics.

Higher values = more influence on final score.

Default: `1`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Invert</strong> <code>bool</code></summary>

Invert the final heuristic score (1 - score).

Useful for reversing the preference direction.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Use Local Curve</strong> <code>bool</code></summary>

Use an in-editor curve instead of an external asset.

Default: `false`

</details>

<details>
<summary><strong>Score Curve</strong> <code>CurveFloat</code></summary>

Remaps the raw score (0–1) through a curve for non-linear responses.

Default: Linear (0,0) → (1,1)

*Available as local curve or asset reference*

⚡ PCG Overridable (asset reference only)

</details>

### Score Curve Lookup

<details>
<summary><strong>Mode</strong> <code>EPCGExCurveLUTMode</code></summary>

How to evaluate the score curve.

| Value | Behavior |
|-------|----------|
| **Direct** | Evaluate curve directly (more accurate) |
| **Lookup** | Use lookup table (faster, slight interpolation) |

Default: `Direct`

</details>

<details>
<summary><strong>Samples</strong> <code>int32</code></summary>

Number of samples in the lookup table.

Higher = more accurate but more memory.

Range: ≥32

Default: `512`

*Visible when Mode = Lookup*

</details>

### Local Weight Multiplier

<details>
<summary><strong>Use Local Weight Multiplier</strong> <code>bool</code></summary>

Read a per-vertex or per-edge attribute to multiply the weight locally.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Local Weight Multiplier Source</strong> <code>EPCGExClusterElement</code></summary>

Where to read the multiplier from.

| Value | Source |
|-------|--------|
| **Vtx** | Vertex attributes |
| **Edge** | Edge attributes |

Default: `Vtx`

*Visible when Use Local Weight Multiplier = true*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Weight Multiplier Attribute</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

Attribute to read the local weight multiplier from.

*Visible when Use Local Weight Multiplier = true*

⚡ PCG Overridable

</details>

### Roaming Settings

<details>
<summary><strong>UVW Seed</strong> <code>FVector</code></summary>

Bound-relative seed position for "roaming" contexts (no explicit seed point).

Default: `(0, 0, 0)`

⚡ PCG Overridable

</details>

<details>
<summary><strong>UVW Goal</strong> <code>FVector</code></summary>

Bound-relative goal position for "roaming" contexts (no explicit goal point).

Default: `(0, 0, 0)`

⚡ PCG Overridable

</details>

---

## Available Heuristics

| Heuristic | Category | Description |
|-----------|----------|-------------|
| [Shortest Distance](shortest-distance.md) | Goal Dependent | Prefers edges closer to the goal |
| [Attribute](attribute.md) | Fully Static | Uses vertex/edge attribute as score |
| [Gradient](gradient.md) | Fully Static | Scores based on attribute change |
| [Inertia](inertia.md) | Travel Dependent | Prefers continuing in same direction |
| [Turn Penalty](turn-penalty.md) | Travel Dependent | Penalizes sharp turns |
| [Azimuth](azimuth.md) | Goal Dependent | Prefers edges pointing toward goal |
| [Steepness](steepness.md) | Goal/Travel | Prefers flat or less steep edges |
| [Least Nodes](least-nodes.md) | Fully Static | Minimizes number of nodes traversed |
| [Feedback](feedback.md) | Feedback | Penalizes already-visited paths |

---

## Consuming Nodes

Heuristics are used by pathfinding nodes:

- **Pathfinding : Edges** — Find paths through clusters
- **Pathfinding : Plot Edges** — Plot sequential paths
- **Pathfinding : Grow Paths** — Grow paths from seeds
- **Find Contours** — Find contour paths
- **Find All Cells** — Find closed cells

Also used by **Cluster : Refine** operations that use scoring.

---

📦 **Module**: `PCGExHeuristics` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/tree/dev/Source/PCGExHeuristics)
