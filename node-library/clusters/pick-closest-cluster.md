---
description: 'In editor :: PCGEx | Cluster : Pick Closest'
icon: circle
---

# Pick Closest Cluster

Pick the clusters closest to input targets.

**How It Works**

> AI-Generated, needs proofreading

* The node evaluates clusters based on their proximity to specified input targets according to the Search Mode setting.
* Depending on the Pick Mode setting, the node either allows or disallows the same cluster to be selected as closest for multiple targets.
* The Action type determines what operation is performed once the closest clusters are identified.
* If Expand Search Outside Target Bounds is enabled, the search area extends beyond the bounds of the input targets by a value defined in Target Bounds Expansion.

#### Configuration

<details>

<summary><strong>Search Mode</strong> <code>PCGExClusterClosestSearchMode</code></summary>

What type of proximity to look for

</details>

<details>

<summary><strong>Pick Mode</strong> <code>PCGExClusterClosestPickMode</code></summary>

Whether to allow the same pick for multiple targets or not.

**Values:**

* **Only Best**: Allows duplicate picks for multiple targets
* **Next Best**: If a cluster was already the closest pick of another target, pick the nest best candidate.

</details>

<details>

<summary><strong>Action</strong> <code>PCGExFilterDataAction</code></summary>

Action type.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Target Bounds Expansion</strong> <code>double</code></summary>

Controls target bounds expansion.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Expand Search Outside Target Bounds</strong> <code>bool</code></summary>

Controls expand search outside target bounds.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Keep Tag</strong> <code>Name</code></summary>

Controls keep tag.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Omit Tag</strong> <code>Name</code></summary>

Controls omit tag.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Target Attributes To Tags</strong> <code>PCGExAttributeToTagDetails</code></summary>

TBD

📦 See: AttributeToTag configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Target Forwarding</strong> <code>PCGExForwardDetails</code></summary>

Which Seed attributes to forward on paths.

📦 See: Forward configuration

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsClusters\Public\Elements\PCGExPickClosestClusters.h`
