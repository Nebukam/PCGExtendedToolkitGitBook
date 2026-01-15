---
description: 'In editor :: PCGEx | Heuristics : Steepness'
icon: circle-dashed
---

# HX : Steepness

Heuristics based on steepness.

📌 **Subnode** — Connects to **Heuristics** pins.

**How It Works**

> AI-Generated, needs proofreading

* Computes a score based on the steepness of terrain edges relative to an "Up Vector".
* Accumulates scores from previous edges as specified by the "Accumulation Samples" setting if "Accumulate Score" is enabled.
* Adjusts the scoring method depending on whether "Absolute Steepness" is enabled, using either the overall steepness or the full range of dot product values remapped to a 0:1 scale.

#### Configuration

<details>

<summary><strong>Accumulate Score</strong> <code>bool</code></summary>

Controls accumulate score.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Accumulation Samples</strong> <code>int32</code></summary>

How many previous edges should be added to the current score. Use this when dealing with very smooth terrain to exacerbate steepness.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Up Vector</strong> <code>Vector</code></summary>

Vector pointing in the "up" direction. Mirrored.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Absolute Steepness</strong> <code>bool</code></summary>

When enabled, the overall steepness (whether toward or away the UpVector) determine the score. When disabled, the full range of the dot is used, with -1:1 remapped to 0:1

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExHeuristicConfigSteepness</code></summary>

Filter Config.

📦 See: HeuristicConfigSteepness configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Accumulate Score</strong> <code>bool</code></summary>

Controls accumulate score.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Accumulation Samples</strong> <code>int32</code></summary>

How many previous edges should be added to the current score. Use this when dealing with very smooth terrain to exacerbate steepness.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Up Vector</strong> <code>Vector</code></summary>

Vector pointing in the "up" direction. Mirrored.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Absolute Steepness</strong> <code>bool</code></summary>

When enabled, the overall steepness (whether toward or away the UpVector) determine the score. When disabled, the full range of the dot is used, with -1:1 remapped to 0:1

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExHeuristics\Public\Heuristics\PCGExHeuristicSteepness.h`
