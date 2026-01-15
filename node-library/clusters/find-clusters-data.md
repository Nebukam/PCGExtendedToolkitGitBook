---
description: 'In editor :: PCGEx | Find Clusters'
icon: circle
---

# Find Clusters

Find vtx/edge pairs inside a soup of data collections

**How It Works**

> AI-Generated, needs proofreading

* The Find Clusters node processes a collection of data to identify vertex and edge pairs within that dataset.
* It operates based on the specified Search Mode setting, which determines how the search for clusters is conducted.
* If Skip Trivial Warnings is enabled, the node omits warnings related to minor input mismatches during the clustering process.
* When Skip Important Warnings is activated, the node suppresses significant warning messages that would otherwise alert about potential issues with the inputs.

#### Configuration

<details>

<summary><strong>Search Mode</strong> <code>PCGExClusterDataSearchMode</code></summary>

Search mode.

**Values:**

* **All**
* **Vtx from Edges**
* **Edges from Vtx**

⚡ PCG Overridable

</details>

<details>

<summary><strong>Skip Trivial Warnings</strong> <code>bool</code></summary>

Warning about inputs mismatch and triage

⚡ PCG Overridable

</details>

<details>

<summary><strong>Skip Important Warnings</strong> <code>bool</code></summary>

Warning that you'll get anyway if you try these inputs in a cluster node

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsClusters\Public\Elements\PCGExFindClustersData.h`
