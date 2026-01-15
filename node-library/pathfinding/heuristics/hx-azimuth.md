---
description: 'In editor :: PCGEx | Heuristics : Azimuth'
icon: circle-dashed
---

# HX : Azimuth

Heuristics based on direction toward final goal (north star).

📌 **Subnode** — Connects to **Heuristics** pins.

**How It Works**

> AI-Generated, needs proofreading

* Computes heuristic values based on the azimuth (direction) toward a predefined final goal, often referred to as the "north star".
* Utilizes configuration settings from the Filter Config to adjust how the azimuth-based heuristics are calculated or applied.
* Outputs these heuristic values which can be used in pathfinding algorithms to estimate the cost of reaching the goal based on direction.

#### Configuration

<details>

<summary><strong>Config</strong> <code>PCGExHeuristicConfigAzimuth</code></summary>

Filter Config.

📦 See: HeuristicConfigAzimuth configuration

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExHeuristics\Public\Heuristics\PCGExHeuristicAzimuth.h`
