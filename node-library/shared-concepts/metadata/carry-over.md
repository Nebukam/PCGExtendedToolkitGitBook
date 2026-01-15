---
icon: list-tree
---

# Carry Over

#### Settings

<details>

<summary><strong>Preserve Attributes Default Value</strong> <code>bool</code></summary>

If enabled, will preserve the initial attribute default value.

</details>

<details>

<summary><strong>Attributes</strong> <code>FPCGExNameFiltersDetails</code></summary>

Attributes to carry over.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Data domain to Elements</strong> <code>bool</code></summary>

Controls └─ data domain to elements.

</details>

<details>

<summary><strong>Tags</strong> <code>FPCGExNameFiltersDetails</code></summary>

Tags to carry over.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Flatten tag value</strong> <code>bool</code></summary>

If enabled, will test full tag with its value ('Tag:Value'), otherwise only test the left part ignoring the right `:Value` ('Tag').

</details>

#### Used In

* Clipper2Processor
* PathToClusters
* ConnectClusters
* FindPointOnBoundsClusters
* FuseClusters
* MergeVertices
* PackClusters
* SimplifyClusters
* _...and 10 more_

***

Defined in: `Source\PCGExCore\Public\Data\Utils\PCGExDataFilterDetails.h`
