---
icon: circle-dashed
---

# G-Probe : Level Set

Connects points with similar scalar values (isolines/contours)

📌 **Subnode** — Connects to **Probes** pins.

**How It Works**

> AI-Generated, needs proofreading

* The G-Probe : Level Set node connects points in space that have similar scalar values based on the specified "Level Attribute", forming isolines or contours.
* It enforces connections only between points where the difference in their scalar values does not exceed the defined "Max Level Difference".
* If "Normalize Levels" is set to true, the node normalizes the scalar field values to a 0-1 range before performing comparisons for connection eligibility.
* The node limits each point to connect with up to "Max Connections Per Point", selecting the nearest points within the level tolerance as defined by the scalar value differences and settings.

#### Configuration

<details>

<summary><strong>Level Attribute</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Attribute defining the scalar field

⚡ PCG Overridable

</details>

<details>

<summary><strong>Max Level Difference</strong> <code>double</code></summary>

Max difference in scalar value to allow connection

_Range: min: 0_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Normalize Levels</strong> <code>bool</code></summary>

If true, normalizes level values to 0-1 range before comparison

⚡ PCG Overridable

</details>

<details>

<summary><strong>Max Connections Per Point</strong> <code>int32</code></summary>

Connect K nearest within level tolerance

_Range: min: 1_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExProbeConfigLevelSet</code></summary>

Controls config.

📦 See: ProbeConfigLevelSet configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Level Attribute</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Attribute defining the scalar field

⚡ PCG Overridable

</details>

<details>

<summary><strong>Max Level Difference</strong> <code>double</code></summary>

Max difference in scalar value to allow connection

_Range: min: 0_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Normalize Levels</strong> <code>bool</code></summary>

If true, normalizes level values to 0-1 range before comparison

⚡ PCG Overridable

</details>

<details>

<summary><strong>Max Connections Per Point</strong> <code>int32</code></summary>

Connect K nearest within level tolerance

_Range: min: 1_

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsProbing\Public\Probes\PCGExGlobalProbeLevelSet.h`
