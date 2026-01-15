---
icon: circle-dashed
---

# G-Probe : Gradient Flow

K-Nearest Neighbors

📌 **Subnode** — Connects to **Probes** pins.

**How It Works**

> AI-Generated, needs proofreading

* The G-Probe : Gradient Flow node computes connections between nodes based on K-Nearest Neighbors in a gradient field.
* If "Uphill Only" is set to true, the node only establishes connections with neighbors that have higher values, effectively flowing uphill.
* When "Steepest Only" is enabled, the node selects and connects exclusively to the steepest neighbor among its K-nearest neighbors.
* The "Flow Attribute" setting determines which attribute influences the direction and nature of the flow between connected nodes.
* The "Config: Filter Config." option allows for additional filtering or configuration settings that may affect how neighbors are selected or processed.

#### Configuration

<details>

<summary><strong>Uphill Only</strong> <code>bool</code></summary>

If true, only connect to higher values (flow uphill)

⚡ PCG Overridable

</details>

<details>

<summary><strong>Steepest Only</strong> <code>bool</code></summary>

If true, only connect to the steepest neighbor

⚡ PCG Overridable

</details>

<details>

<summary><strong>Flow Attribute</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Controls flow attribute.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExProbeConfigGradientFlow</code></summary>

Filter Config.

📦 See: ProbeConfigGradientFlow configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Uphill Only</strong> <code>bool</code></summary>

If true, only connect to higher values (flow uphill)

⚡ PCG Overridable

</details>

<details>

<summary><strong>Steepest Only</strong> <code>bool</code></summary>

If true, only connect to the steepest neighbor

⚡ PCG Overridable

</details>

<details>

<summary><strong>Flow Attribute</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Controls flow attribute.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsProbing\Public\Probes\PCGExGlobalProbeGradientFlow.h`
