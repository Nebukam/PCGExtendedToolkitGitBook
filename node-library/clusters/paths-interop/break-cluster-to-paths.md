---
description: 'In editor :: PCGEx | Cluster : Break to Paths'
icon: circle
---

# Break Cluster to Paths

Create individual paths from continuous edge chains.

**How It Works**

> AI-Generated, needs proofreading

* The Cluster : Break to Paths node processes continuous edge chains by segmenting them into individual paths based on specified settings.
* It handles leaves according to the selected "Leaves Handling" option, which influences how endpoints or isolated points are treated in the path creation process.
* Points within each path are ordered following the defined direction settings, ensuring that the sequence of points forms coherent and directed paths.
* The node enforces a winding order for paths if enabled through the "Winding" setting, with an option to apply this only to closed loops via "Wind Only Closed Loops".
* Operation targets can be specified by the user through the "Operate On" setting, allowing control over which parts of the edge chains are processed into individual paths.

#### Configuration

<details>

<summary><strong>Leaves Handling</strong> <code>PCGExBreakClusterLeavesHandling</code></summary>

How to handle leaves

**Values:**

* **Include Leaves**: Include leaves.
* **Exclude Leaves**: Exclude leaves.
* **Only Leaves**: Only process leaves.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Operate On</strong> <code>PCGExBreakClusterOperationTarget</code></summary>

Operation target mode

**Values:**

* **Paths**: Operate on edge chains which form paths with no crossings. e.g, nodes with only two neighbors.
* **Edges**

⚡ PCG Overridable

</details>

<details>

<summary><strong>Direction Settings</strong> <code>PCGExEdgeDirectionSettings</code></summary>

Defines the direction in which points will be ordered to form the final paths.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Winding</strong> <code>PCGExWindingMutation</code></summary>

Enforce a winding order for paths.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Wind Only Closed Loops</strong> <code>bool</code></summary>

Whether to apply winding on closed loops only or all paths.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Projection Details</strong> <code>PCGExGeo2DProjectionDetails</code></summary>

Projection settings. Winding is computed on a 2D plane.

📦 See: Geo2DProjection configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Min Point Count</strong> <code>int32</code></summary>

Do not output paths that have less points that this value

⚡ PCG Overridable

</details>

<details>

<summary><strong>Omit Above Point Count</strong> <code>bool</code></summary>

Controls omit above point count.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Max Point Count</strong> <code>int32</code></summary>

Do not output paths that have more points that this value

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsClusters\Public\Elements\Paths\PCGExBreakClustersToPaths.h`
