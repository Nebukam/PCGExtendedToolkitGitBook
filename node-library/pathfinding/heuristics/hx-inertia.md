---
description: 'In editor :: PCGEx | Heuristics : Inertia'
icon: circle-dashed
---

# HX : Inertia

Heuristics based on direction inertia from last visited node. NOTE: Can be quite expensive.

📌 **Subnode** — Connects to **Heuristics** pins.

**How It Works**

> AI-Generated, needs proofreading

* Computes direction inertia by averaging the directions of the specified number of previous edges as defined by the "Samples" setting.
* Uses a fallback score if there are insufficient samples based on the "Ignore If Not Enough Samples" setting and the "Fallback Inertia Score".
* Provides a global inertia score for initial sorting in algorithms like A\* Star, using the value set in "Global Inertia Score".
* Applies filtering according to the configuration specified in "Config".

#### Configuration

<details>

<summary><strong>Samples</strong> <code>int32</code></summary>

How many previous edges should be averaged to compute the inertia.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Ignore If Not Enough Samples</strong> <code>bool</code></summary>

If enabled, use fallback score if there is less samples than the specified number.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExHeuristicConfigInertia</code></summary>

Filter Config.

📦 See: HeuristicConfigInertia configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Samples</strong> <code>int32</code></summary>

How many previous edges should be averaged to compute the inertia.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Ignore If Not Enough Samples</strong> <code>bool</code></summary>

If enabled, use fallback score if there is less samples than the specified number.

⚡ PCG Overridable

</details>

**Fallbacks**

<details>

<summary><strong>Global Inertia Score</strong> <code>double</code></summary>

Value used for global score. Primarily used by A\* Star to do initial sorting.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Fallback Inertia Score</strong> <code>double</code></summary>

Fallback heuristic score for when no inertia value can be computed (no previous node).

⚡ PCG Overridable

</details>

<details>

<summary><strong>Global Inertia Score</strong> <code>double</code></summary>

Value used for global score. Primarily used by A\* Star to do initial sorting.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Fallback Inertia Score</strong> <code>double</code></summary>

Fallback heuristic score for when no inertia value can be computed (no previous node).

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExHeuristics\Public\Heuristics\PCGExHeuristicInertia.h`
