---
description: 'In editor :: PCGEx | Cluster : Relax'
icon: scrubber
---

# Relax Cluster

Relax point positions using edges connecting them.

**How It Works**

> AI-Generated, needs proofreading

* The Cluster : Relax node adjusts point positions based on edges connecting them, iterating over this process for a specified number of times defined by the 'Iterations' setting.
* During each iteration, the node applies relaxing arithmetics to smooth out the positions according to the Influence Settings provided under 'Influence Details'.
* If 'Write Direction And Size' is enabled, the final direction and size resulting from the relaxation process are written to an attribute named as specified in 'DirectionAndSize', which is of type 'FVector'.

#### Configuration

<details>

<summary><strong>Iterations</strong> <code>int32</code></summary>

Controls iterations.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Influence Details</strong> <code>PCGExInfluenceDetails</code></summary>

Influence Settings

📦 See: Influence configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Relaxing</strong> <code>PCGExRelaxClusterOperation</code> ⚙️</summary>

Relaxing arithmetics

⚡ PCG Overridable

</details>

**Outputs**

<details>

<summary><strong>Write Direction And Size</strong> <code>bool</code></summary>

Write the final direction and size of the relaxation.

⚡ PCG Overridable

</details>

<details>

<summary><strong>DirectionAndSize</strong> <code>Name</code></summary>

Name of the 'FVector' attribute to write direction and size to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Direction</strong> <code>bool</code></summary>

Write the final direction of the relaxation.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Direction</strong> <code>Name</code></summary>

Name of the 'FVector' attribute to write direction to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Amplitude</strong> <code>bool</code></summary>

Write the final amplitude of the relaxation. (that's the size of the DirectionAndSize vector)

⚡ PCG Overridable

</details>

<details>

<summary><strong>Amplitude</strong> <code>Name</code></summary>

Name of the 'double' attribute to write amplitude to.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsClusters\Public\Elements\PCGExRelaxClusters.h`
