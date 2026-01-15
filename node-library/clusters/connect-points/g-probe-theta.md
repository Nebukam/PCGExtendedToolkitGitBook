---
icon: circle-dashed
---

# G-Probe : Theta

Theta/Yao graph spanner - connects to nearest in angular cones

📌 **Subnode** — Connects to **Probes** pins.

**How It Works**

> AI-Generated, needs proofreading

* The G-Probe : Theta Graph node constructs a spanner graph by dividing space into a specified number of cones around each point, with the cone axis defined by the "Cone Axis" setting.
* For each point in the input set, the node evaluates its nearest neighbors within each cone, using either the Theta or Yao method based on the "Use Yao Variant" setting; if true, it selects the nearest neighbor in each cone (Yao variant), otherwise it projects and connects to the closest projected point (Theta variant).
* The density of the resulting graph increases with a higher number of cones specified by "Num Cones", leading to a more connected but potentially more complex graph structure.

#### Configuration

<details>

<summary><strong>Num Cones</strong> <code>int32</code></summary>

Number of cones (typically 6-8). Higher = denser graph, better spanner.

_Range: min: 4, max: 32_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Cone Axis</strong> <code>Vector</code></summary>

Axis to build cones around (cones are perpendicular to this)

⚡ PCG Overridable

</details>

<details>

<summary><strong>Use Yao Variant</strong> <code>bool</code></summary>

If true, uses Yao graph construction (nearest in cone) instead of Theta (projected nearest)

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExProbeConfigTheta</code></summary>

Controls config.

📦 See: ProbeConfigTheta configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Num Cones</strong> <code>int32</code></summary>

Number of cones (typically 6-8). Higher = denser graph, better spanner.

_Range: min: 4, max: 32_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Cone Axis</strong> <code>Vector</code></summary>

Axis to build cones around (cones are perpendicular to this)

⚡ PCG Overridable

</details>

<details>

<summary><strong>Use Yao Variant</strong> <code>bool</code></summary>

If true, uses Yao graph construction (nearest in cone) instead of Theta (projected nearest)

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsProbing\Public\Probes\PCGExGlobalProbeTheta.h`
