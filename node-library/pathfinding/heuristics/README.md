---
icon: grid-round-2-plus
---

# Heuristics

Creates a single heuristic computational node, to be used with pathfinding nodes.

📌 **Subnode** — Connects to **Heuristics** pins.

**How It Works**

> AI-Generated, needs proofreading

* Computes a heuristic score based on the specified settings for pathfinding purposes.
* Applies a weight factor to the computed heuristic score to adjust its influence.
* Optionally inverts the final heuristic score if the "Invert" setting is enabled.
* Remaps the heuristic score using either an in-editor curve or an external asset, depending on the "Use Local Curve" setting.

#### Configuration

<details>

<summary><strong>Weight Factor</strong> <code>double</code></summary>

The weight factor for this heuristic.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Invert</strong> <code>bool</code></summary>

Invert the final heuristics score.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Use Local Curve</strong> <code>bool</code></summary>

Whether to use in-editor curve or an external asset.

</details>

<details>

<summary><strong>Score Curve</strong> <code>RuntimeFloatCurve</code></summary>

Curve the value will be remapped over.

</details>

<details>

<summary><strong>Score Curve</strong> <code>CurveFloat</code></summary>

Curve the value will be remapped over.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Score Curve Lookup</strong> <code>PCGExCurveLookupDetails</code></summary>

Controls score curve lookup.

📦 See: CurveLookup configuration

</details>

**Local Weight**

<details>

<summary><strong>Use Local Weight Multiplier</strong> <code>bool</code></summary>

Use a local attribute

⚡ PCG Overridable

</details>

<details>

<summary><strong>Local Weight Multiplier Source</strong> <code>PCGExClusterElement</code></summary>

Local multiplier attribute source

⚡ PCG Overridable

</details>

<details>

<summary><strong>Weight Multiplier Attribute</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Attribute to read multiplier value from.

⚡ PCG Overridable

</details>

**Roaming**

<details>

<summary><strong>UVWSeed</strong> <code>Vector</code></summary>

Bound-relative seed position used when this heuristic is used in a "roaming" context

⚡ PCG Overridable

</details>

<details>

<summary><strong>UVWGoal</strong> <code>Vector</code></summary>

Bound-relative goal position used when this heuristic is used in a "roaming" context

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExHeuristics\Public\Core\PCGExHeuristicsFactoryProvider.h`
