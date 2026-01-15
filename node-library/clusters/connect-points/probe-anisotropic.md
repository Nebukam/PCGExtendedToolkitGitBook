---
icon: circle-dashed
---

# Probe : Anisotropic

Probe in 16 directions over the X/Y axis. It's recommended to use internal projection to get the best results

📌 **Subnode** — Connects to **Probes** pins.

**How It Works**

> AI-Generated, needs proofreading

* The node probes in 16 distinct directions across the X/Y axis to gather data points.
* It uses an internal projection method as recommended for optimal performance and accuracy.
* The "Max Angle" setting defines the angular range within which the node searches for data points.
* The "Transform Direction" option allows for adjusting the direction of probing based on the point's transformation.

#### Configuration

<details>

<summary><strong>Max Angle</strong> <code>double</code></summary>

Max angle to search within.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Transform Direction</strong> <code>bool</code></summary>

Transform the direction with the point's

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExProbeConfigAnisotropic</code></summary>

Filter Config.

📦 See: ProbeConfigAnisotropic configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Max Angle</strong> <code>double</code></summary>

Max angle to search within.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Transform Direction</strong> <code>bool</code></summary>

Transform the direction with the point's

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsProbing\Public\Probes\PCGExProbeAnisotropic.h`
