---
icon: circle-dashed
---

# Probe : Closest

Probe in a given Closest.

📌 **Subnode** — Connects to **Probes** pins.

**How It Works**

> AI-Generated, needs proofreading

* The node identifies and connects to the closest entities based on input parameters.
* It limits the number of connections made by enforcing a maximum defined by the "Max Connections" setting.
* Optionally, the node attempts to prevent coincidental connections with similar directions using the "Prevent Coincidence" feature and its associated tolerance level.

#### Configuration

<details>

<summary><strong>Max Connections Input</strong> <code>PCGExInputValueType</code></summary>

Controls max connections input.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Max Connections (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Controls max connections (attr).

⚡ PCG Overridable

</details>

<details>

<summary><strong>Max Connections</strong> <code>int32</code></summary>

Controls max connections.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Prevent Coincidence</strong> <code>bool</code></summary>

Attempts to prevent connections that are roughly in the same direction

⚡ PCG Overridable

</details>

<details>

<summary><strong>Coincidence Prevention Tolerance</strong> <code>double</code></summary>

Attempts to prevent connections that are roughly in the same direction

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExProbeConfigClosest</code></summary>

Filter Config.

📦 See: ProbeConfigClosest configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Max Connections Input</strong> <code>PCGExInputValueType</code></summary>

Controls max connections input.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Max Connections (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Controls max connections (attr).

⚡ PCG Overridable

</details>

<details>

<summary><strong>Max Connections</strong> <code>int32</code></summary>

Controls max connections.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Prevent Coincidence</strong> <code>bool</code></summary>

Attempts to prevent connections that are roughly in the same direction

⚡ PCG Overridable

</details>

<details>

<summary><strong>Coincidence Prevention Tolerance</strong> <code>double</code></summary>

Attempts to prevent connections that are roughly in the same direction

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsProbing\Public\Probes\PCGExProbeClosest.h`
