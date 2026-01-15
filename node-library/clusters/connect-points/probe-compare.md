---
icon: circle-dashed
---

# Probe : Compare

Connect points that pass the value comparison between the probing point and the candidate point.

📌 **Subnode** — Connects to **Probes** pins.

**How It Works**

> AI-Generated, needs proofreading

* The Probe : Numeric Compare node evaluates and connects points based on a comparison of numeric attributes between a probing point and candidate points.
* It uses a specified attribute for comparison and applies a defined comparison check to determine if the connection should be made.
* The maximum number of connections allowed per point is controlled by an input setting, which can either be directly set as an int32 value or selected from available attributes via PCGAttributePropertyInputSelector.

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

<summary><strong>Attribute</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Attribute to compare

⚡ PCG Overridable

</details>

<details>

<summary><strong>Comparison</strong> <code>PCGExComparison</code></summary>

Comparison check

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tolerance</strong> <code>double</code></summary>

Rounding mode for approx. comparison modes

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

<summary><strong>Config</strong> <code>PCGExProbeConfigNumericCompare</code></summary>

Filter Config.

📦 See: ProbeConfigNumericCompare configuration

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

<summary><strong>Attribute</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Attribute to compare

⚡ PCG Overridable

</details>

<details>

<summary><strong>Comparison</strong> <code>PCGExComparison</code></summary>

Comparison check

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tolerance</strong> <code>double</code></summary>

Rounding mode for approx. comparison modes

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

Source: `Source\PCGExElementsProbing\Public\Probes\PCGExProbeNumericCompare.h`
