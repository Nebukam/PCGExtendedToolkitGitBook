---
description: 'Refine : Line Trace'
icon: sliders
---

# Line Trace

Edge refinement

⚙️ **Behavior** — Instanced edge refinement.

#### Configuration

<details>

<summary><strong>Collision Settings</strong> <code>PCGExCollisionDetails</code></summary>

Controls collision settings.

📦 See: Collision configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Two Way Check</strong> <code>bool</code></summary>

If the first linecast fails, tries the other way around. This is to ensure we don't fail against backfacing, but has high cost.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Scatter</strong> <code>bool</code></summary>

Controls scatter.

⚡ PCG Overridable

</details>

<details>

<summary><strong>├─ Samples</strong> <code>double</code></summary>

Controls ├─ samples.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Radius</strong> <code>double</code></summary>

Controls └─ radius.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Invert</strong> <code>bool</code></summary>

Controls invert.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsClusters\Public\Elements\Refining\PCGExEdgeRefineLineTrace.h`
