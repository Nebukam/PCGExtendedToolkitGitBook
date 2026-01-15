---
icon: circle-dashed
---

# G-Probe : DBSCAN

Density-based connectivity/reachability (DBSCAN-style)

📌 **Subnode** — Connects to **Probes** pins.

**How It Works**

> AI-Generated, needs proofreading

* The G-Probe : DBSCAN node processes data using density-based clustering to identify clusters of points based on their proximity and density.
* It identifies core points as those having at least the specified "Min Points" within a given radius (Epsilon).
* If "Core To Cor Only" is set to true, the node ensures connections only between identified core points; otherwise, it allows for broader connectivity.
* When "Border To Nearest Core Only" is enabled, border points connect exclusively to their nearest core point; if disabled, they can connect to all reachable core points within Epsilon.

#### Configuration

<details>

<summary><strong>Min Points</strong> <code>int32</code></summary>

Minimum points within Epsilon to be considered a core point

_Range: min: 1_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Core To Cor Only</strong> <code>bool</code></summary>

If true, only connects core points to each other

⚡ PCG Overridable

</details>

<details>

<summary><strong>Border To Nearest Core Only</strong> <code>bool</code></summary>

If true, connects border points to their nearest core point only. If false, connects to all reachable core points.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExProbeConfigDBSCAN</code></summary>

Controls config.

📦 See: ProbeConfigDBSCAN configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Min Points</strong> <code>int32</code></summary>

Minimum points within Epsilon to be considered a core point

_Range: min: 1_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Core To Cor Only</strong> <code>bool</code></summary>

If true, only connects core points to each other

⚡ PCG Overridable

</details>

<details>

<summary><strong>Border To Nearest Core Only</strong> <code>bool</code></summary>

If true, connects border points to their nearest core point only. If false, connects to all reachable core points.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsProbing\Public\Probes\PCGExGlobalProbeDBSCAN.h`
