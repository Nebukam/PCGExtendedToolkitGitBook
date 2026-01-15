---
icon: circle-dashed
---

# G-Probe : Hub & Spoke

Creates hierarchical hub-and-spoke network topology

📌 **Subnode** — Connects to **Probes** pins.

**How It Works**

> AI-Generated, needs proofreading

* The G-Probe : Hub & Spoke node generates a hierarchical network where nodes are organized into clusters around central hubs based on specified parameters.
* Depending on the selected hub selection mode (PCGExHubSelectionMode), the node determines the number of hubs to create, either through predefined settings or clustering algorithms like KMeans for which Num Hubs specifies the value of K.
* Each non-hub node (spoke) connects to one or more hubs based on the Nearest Hub Only setting; if true, each spoke connects only to its nearest hub, otherwise it connects to all hubs within a defined radius.
* If Connect Hubs is set to true, the node also establishes connections between the identified hubs themselves, forming an interconnected network of hubs.

#### Configuration

<details>

<summary><strong>Hub Selection Mode</strong> <code>PCGExHubSelectionMode</code></summary>

Controls hub selection mode.

**Values:**

* **By Local Density**: Points in dense regions become hubs
* **By Attribute**: Points with highest attribute values become hubs
* **By Centrality**: Points closest to centroid of local region become hubs
* **K-Means Centroids**: Run k-means and use cluster centers as hubs

⚡ PCG Overridable

</details>

<details>

<summary><strong>Num Hubs</strong> <code>int32</code></summary>

Number of hubs to create (for KMeans mode, this is K)

_Range: min: 1_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Hub Attribute</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Attribute for hub selection (for ByAttribute mode)

⚡ PCG Overridable

</details>

<details>

<summary><strong>Connect Hubs</strong> <code>bool</code></summary>

If true, also connect hubs to each other

⚡ PCG Overridable

</details>

<details>

<summary><strong>Nearest Hub Only</strong> <code>bool</code></summary>

If true, each spoke connects only to nearest hub. If false, connects to all hubs within radius.

⚡ PCG Overridable

</details>

<details>

<summary><strong>KMeans Iterations</strong> <code>int32</code></summary>

K-Means iterations (for KMeansCentroids mode)

_Range: min: 1, max: 100_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExProbeConfigHubSpoke</code></summary>

Controls config.

📦 See: ProbeConfigHubSpoke configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Hub Selection Mode</strong> <code>PCGExHubSelectionMode</code></summary>

Controls hub selection mode.

**Values:**

* **By Local Density**: Points in dense regions become hubs
* **By Attribute**: Points with highest attribute values become hubs
* **By Centrality**: Points closest to centroid of local region become hubs
* **K-Means Centroids**: Run k-means and use cluster centers as hubs

⚡ PCG Overridable

</details>

<details>

<summary><strong>Num Hubs</strong> <code>int32</code></summary>

Number of hubs to create (for KMeans mode, this is K)

_Range: min: 1_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Hub Attribute</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Attribute for hub selection (for ByAttribute mode)

⚡ PCG Overridable

</details>

<details>

<summary><strong>Connect Hubs</strong> <code>bool</code></summary>

If true, also connect hubs to each other

⚡ PCG Overridable

</details>

<details>

<summary><strong>Nearest Hub Only</strong> <code>bool</code></summary>

If true, each spoke connects only to nearest hub. If false, connects to all hubs within radius.

⚡ PCG Overridable

</details>

<details>

<summary><strong>KMeans Iterations</strong> <code>int32</code></summary>

K-Means iterations (for KMeansCentroids mode)

_Range: min: 1, max: 100_

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsProbing\Public\Probes\PCGExGlobalProbeHubSpoke.h`
