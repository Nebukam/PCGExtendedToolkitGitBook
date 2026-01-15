---
icon: circle-dashed
---

# Probe : Bitmasks

Probe using bitmasks references & collections.

📌 **Subnode** — Connects to **Probes** pins.

**How It Works**

> AI-Generated, needs proofreading

* The node evaluates input data using bitmask operations to filter and process references & collections based on specified configurations.
* It applies transformations to direction values by integrating point-related information according to the "Transform Direction" setting.
* Filters are applied to determine if compositions (operations) should be executed on a flag, with decisions influenced by settings like "Favor" and "Angle".
* The node uses a shared angle threshold defined in the "Angle" setting to make filtering decisions regarding directional data.
* Configurations for filters can be customized through the "Config: Filter Config", affecting how input data is probed and processed.

#### Configuration

<details>

<summary><strong>Transform Direction</strong> <code>bool</code></summary>

Transform the direction with the point's

⚡ PCG Overridable

</details>

<details>

<summary><strong>Favor</strong> <code>PCGExProbeBitmasksPriorization</code></summary>

What matters more?

**Values:**

* **Best alignment**: Favor the candidates that best align with the direction, as opposed to closest ones.
* **Closest position**: Favor the candidates that are the closest, even if they were not the best aligned.

</details>

<details>

<summary><strong>Angle</strong> <code>double</code></summary>

Shared angle threshold

⚡ PCG Overridable

</details>

<details>

<summary><strong>Compositions</strong> <code>Array of FPCGExBitmaskRef</code></summary>

Operations executed on the flag if all filters pass (or if no filter is set)

</details>

<details>

<summary><strong>Config</strong> <code>PCGExProbeConfigBitmasks</code></summary>

Filter Config.

📦 See: ProbeConfigBitmasks configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Transform Direction</strong> <code>bool</code></summary>

Transform the direction with the point's

⚡ PCG Overridable

</details>

<details>

<summary><strong>Favor</strong> <code>PCGExProbeBitmasksPriorization</code></summary>

What matters more?

**Values:**

* **Best alignment**: Favor the candidates that best align with the direction, as opposed to closest ones.
* **Closest position**: Favor the candidates that are the closest, even if they were not the best aligned.

</details>

<details>

<summary><strong>Angle</strong> <code>double</code></summary>

Shared angle threshold

⚡ PCG Overridable

</details>

<details>

<summary><strong>Compositions</strong> <code>Array of FPCGExBitmaskRef</code></summary>

Operations executed on the flag if all filters pass (or if no filter is set)

</details>

***

Source: `Source\PCGExElementsProbing\Public\Probes\PCGExProbeBitmasks.h`
