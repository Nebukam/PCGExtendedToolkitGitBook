---
icon: circle-dashed
---

# G-Probe : Anisotropic

Ellipsoidal distance metric for directional connectivity

📌 **Subnode** — Connects to **Probes** pins.

**How It Works**

> AI-Generated, needs proofreading

* Computes an ellipsoidal distance metric based on specified primary and secondary axes for directional connectivity analysis.
* Uses the Primary Axis setting to define the preferred direction of connections, scaling this axis by the Primary Scale factor to influence connection preference along this direction.
* Utilizes the Secondary Axis setting in conjunction with the Primary Axis to establish a plane for cross-directional connections, applying the Secondary Scale factor to adjust connectivity preferences within this plane.
* Determines the Tertiary Axis as the cross product of the Primary and Secondary Axes, scaling it by the Tertiary Scale factor to complete the ellipsoidal metric.

#### Configuration

<details>

<summary><strong>Primary Axis</strong> <code>Vector</code></summary>

Primary axis (preferred connection direction)

⚡ PCG Overridable

</details>

<details>

<summary><strong>Secondary Axis</strong> <code>Vector</code></summary>

Secondary axis (cross direction)

⚡ PCG Overridable

</details>

<details>

<summary><strong>Primary Scale</strong> <code>double</code></summary>

Scale factor for primary axis (>1 = prefer connections along this axis)

_Range: min: 0.1_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Secondary Scale</strong> <code>double</code></summary>

Scale factor for secondary axis

_Range: min: 0.1_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tertiary Scale</strong> <code>double</code></summary>

Scale factor for tertiary axis (computed as cross product)

_Range: min: 0.1_

⚡ PCG Overridable

</details>

<details>

<summary><strong>K</strong> <code>int32</code></summary>

Number of nearest neighbors (in GlobalAnisotropic distance)

_Range: min: 1_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Use Per Point Normal</strong> <code>bool</code></summary>

If true, uses per-point normals as primary axis

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExProbeConfigGlobalAnisotropic</code></summary>

Controls config.

📦 See: ProbeConfigGlobalAnisotropic configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Primary Axis</strong> <code>Vector</code></summary>

Primary axis (preferred connection direction)

⚡ PCG Overridable

</details>

<details>

<summary><strong>Secondary Axis</strong> <code>Vector</code></summary>

Secondary axis (cross direction)

⚡ PCG Overridable

</details>

<details>

<summary><strong>Primary Scale</strong> <code>double</code></summary>

Scale factor for primary axis (>1 = prefer connections along this axis)

_Range: min: 0.1_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Secondary Scale</strong> <code>double</code></summary>

Scale factor for secondary axis

_Range: min: 0.1_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tertiary Scale</strong> <code>double</code></summary>

Scale factor for tertiary axis (computed as cross product)

_Range: min: 0.1_

⚡ PCG Overridable

</details>

<details>

<summary><strong>K</strong> <code>int32</code></summary>

Number of nearest neighbors (in GlobalAnisotropic distance)

_Range: min: 1_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Use Per Point Normal</strong> <code>bool</code></summary>

If true, uses per-point normals as primary axis

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsProbing\Public\Probes\PCGExGlobalProbeAnisotropic.h`
