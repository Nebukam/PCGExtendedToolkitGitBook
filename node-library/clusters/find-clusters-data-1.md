---
description: 'In editor :: PCGEx | Cluster : Filter Vtx'
icon: scrubber
---

# Filter Vtx

Filter out vtx from clusters.

**How It Works**

> AI-Generated, needs proofreading

* The Cluster : Filter Vtx node processes vertex clusters and filters out vertices based on specified criteria.
* It outputs details of the filtering process as defined by the Result setting, which is set to PCGExFilterResultDetails.
* The Invert setting, when enabled, inverts the filter result, meaning vertices that would normally be included are excluded, and vice versa.
* If Node Invalidate Edges is enabled, invalidating a node also results in the invalidation of its connected edges.

#### Configuration

<details>

<summary><strong>Mode</strong> <code>PCGExVtxFilterOutput</code></summary>

Type of output

**Values:**

* **Clusters**: Outputs clusters.
* **Points**: Outputs regular points
* **Attribute**: Writes the result of the filters to a boolean attribute.

</details>

<details>

<summary><strong>└─ Result</strong> <code>PCGExFilterResultDetails</code></summary>

Controls └─ result.

📦 See: FilterResult configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Node Invalidate Edges</strong> <code>bool</code></summary>

If enabled, invalidating a node invalidate connected edges.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Invert</strong> <code>bool</code></summary>

Invert the filter result

⚡ PCG Overridable

</details>

<details>

<summary><strong>Invert Edge Filters</strong> <code>bool</code></summary>

Invert the edge filters result

⚡ PCG Overridable

</details>

<details>

<summary><strong>Split Outputs By Connectivity</strong> <code>bool</code></summary>

If enabled, inside/outside groups will be partitioned by initial edge connectivity.

</details>

<details>

<summary><strong>Swap</strong> <code>bool</code></summary>

Swap Inside & Outside content

</details>

<details>

<summary><strong>Cluster Output Settings</strong> <code>PCGExGraphBuilderDetails</code></summary>

Graph & Edges output properties

📦 See: [Cluster Output Settings](https://pcgex.gitbook.io/pcgex/node-library/clusters/common-settings/output-settings)

⚡ PCG Overridable

</details>

**Tagging**

<details>

<summary><strong>Tag If Any Point Passed</strong> <code>bool</code></summary>

Controls tag if any point passed.

</details>

<details>

<summary><strong>Has Any Point Passed Tag</strong> <code>String</code></summary>

...

</details>

<details>

<summary><strong>Tag If All Points Passed</strong> <code>bool</code></summary>

Controls tag if all points passed.

</details>

<details>

<summary><strong>All Points Passed Tag</strong> <code>String</code></summary>

...

</details>

<details>

<summary><strong>Tag If No Point Passed</strong> <code>bool</code></summary>

Controls tag if no point passed.

</details>

<details>

<summary><strong>No Point Passed Tag</strong> <code>String</code></summary>

...

</details>

***

Source: `Source\PCGExElementsClusters\Public\Elements\PCGExFilterVtx.h`
