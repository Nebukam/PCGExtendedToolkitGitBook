---
icon: circle-dashed
---

# G-Probe : Chain

Creates sequential chain connections based on sorting criteria

📌 **Subnode** — Connects to **Probes** pins.

**How It Works**

> AI-Generated, needs proofreading

* The G-Probe : Chain/Path node creates sequential connections between elements in a chain based on specified sorting criteria defined by the Sort Mode setting.
* When using the ByAttribute mode, the node sorts elements according to the value of the specified Sort Attribute before creating connections.
* In ByAxisProjection mode, the node projects elements onto the chosen Projection Axis and then sorts them along that axis to establish the sequence for chain connections.
* If Closed Loop is set to true, the node connects the last element in the sorted sequence back to the first, forming a closed loop.
* The Config setting (PCGExProbeConfigChain) likely contains additional parameters that configure how the chaining process operates, though specific details are not provided.

#### Configuration

<details>

<summary><strong>Sort Mode</strong> <code>PCGExProbeChainSortMode</code></summary>

Controls sort mode.

**Values:**

* **By Attribute**: Sort by a scalar attribute
* **By Axis Projection**: Sort by projection onto an axis
* **By Spatial Curve**
* **By Hilbert Curve**: Sort by Hilbert curve index for spatial locality

⚡ PCG Overridable

</details>

<details>

<summary><strong>Sort Attribute</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Attribute to sort by (for ByAttribute mode)

⚡ PCG Overridable

</details>

<details>

<summary><strong>Projection Axis</strong> <code>Vector</code></summary>

Axis to project onto (for ByAxisProjection mode)

⚡ PCG Overridable

</details>

<details>

<summary><strong>Closed Loop</strong> <code>bool</code></summary>

If true, creates a closed loop connecting last to first

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExProbeConfigChain</code></summary>

Controls config.

📦 See: ProbeConfigChain configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Sort Mode</strong> <code>PCGExProbeChainSortMode</code></summary>

Controls sort mode.

**Values:**

* **By Attribute**: Sort by a scalar attribute
* **By Axis Projection**: Sort by projection onto an axis
* **By Spatial Curve**
* **By Hilbert Curve**: Sort by Hilbert curve index for spatial locality

⚡ PCG Overridable

</details>

<details>

<summary><strong>Sort Attribute</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Attribute to sort by (for ByAttribute mode)

⚡ PCG Overridable

</details>

<details>

<summary><strong>Projection Axis</strong> <code>Vector</code></summary>

Axis to project onto (for ByAxisProjection mode)

⚡ PCG Overridable

</details>

<details>

<summary><strong>Closed Loop</strong> <code>bool</code></summary>

If true, creates a closed loop connecting last to first

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsProbing\Public\Probes\PCGExGlobalProbeChain.h`
