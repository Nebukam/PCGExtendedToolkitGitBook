---
icon: list-tree
---

# Distribution

#### Settings

<details>

<summary><strong>Seed Components</strong> <code>uint8</code></summary>

Controls seed components.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Distribution</strong> <code>EPCGExDistribution</code></summary>

Distribution type

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Index Settings</strong> <code>FPCGExAssetDistributionIndexDetails</code></summary>

Index settings

⚡ PCG Overridable

</details>

<details>

<summary><strong>Local Seed</strong> <code>int32</code></summary>

Note that this is only accounted for if selected in the seed component.

⚡ PCG Overridable

</details>

**Category**

<details>

<summary><strong>Use Categories</strong> <code>bool</code></summary>

If enabled, will limit pick to entries flagged with a specific category.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Category Input</strong> <code>EPCGExInputValueType</code></summary>

Type of Category

⚡ PCG Overridable

</details>

<details>

<summary><strong>Category (Attr)</strong> <code>FName</code></summary>

Attribute to read category name from.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Category</strong> <code>FName</code></summary>

Constant category value.

⚡ PCG Overridable

</details>

#### Used In

* PathSplineMesh
* AssetStaging
* CollectionsHelpers

***

Defined in: `Source\PCGExCollections\Public\Details\PCGExStagingDetails.h`
