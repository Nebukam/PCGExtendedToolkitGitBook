---
description: 'In editor :: PCGEx | Cluster : Cut'
icon: circle
---

# Cut Clusters

Cut clusters nodes & edges using paths.

**How It Works**

> AI-Generated, needs proofreading

* The Cluster : Cut node processes clusters by cutting nodes and edges based on specified paths.
* It uses PCGExPathEdgeIntersectionDetails to determine intersection details for cutting operations.
* With the Invert setting enabled, the node retains intersections or proximity areas instead of removing them.
* The Node Expansion factor scales bounds around node points to check for initial overlap before performing cuts.
* PCGExDistance settings define parameters used in determining distances relevant to the cut operation.

#### Configuration

<details>

<summary><strong>Intersection Details</strong> <code>PCGExPathEdgeIntersectionDetails</code></summary>

Controls intersection details.

📦 See: PathEdgeIntersection configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Invert</strong> <code>bool</code></summary>

Keep intersections/proximity instead of removing.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Mode</strong> <code>PCGExCutEdgesMode</code></summary>

Controls mode.

**Values:**

* **Nodes**: Check for path overlap with nodes
* **Edges**: Check for path overlap with edges
* **Edges & Nodes**: Check for overlap with both nodes and edges

⚡ PCG Overridable

</details>

<details>

<summary><strong>Node Expansion</strong> <code>double</code></summary>

Expansion factor of node points to check for initial overlap. Uses scaled bounds expanded by the specified value.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Node Distance Settings</strong> <code>PCGExDistance</code></summary>

Controls node distance settings.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Affected Nodes Affect Connected Edges</strong> <code>bool</code></summary>

Controls affected nodes affect connected edges.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Affected Edges Affect Endpoints</strong> <code>bool</code></summary>

Controls affected edges affect endpoints.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Keep Edges That Connect Valid Nodes</strong> <code>bool</code></summary>

Controls keep edges that connect valid nodes.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Cluster Output Settings</strong> <code>PCGExGraphBuilderDetails</code></summary>

Graph & Edges output properties

📦 See: GraphBuilder configuration

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsClusters\Public\Elements\Paths\PCGExCutClusters.h`
