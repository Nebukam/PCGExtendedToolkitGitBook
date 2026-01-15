---
description: 'In editor :: PCGEx | Asset Staging'
icon: circle
---

# Asset Staging

Data staging from PCGEx Asset Collections.

**How It Works**

> AI-Generated, needs proofreading

* The Asset Staging node retrieves data from an asset collection specified by the PCGExCollectionSource setting.
* It processes assets within the designated PCGExAssetCollection using details defined in PCGExRoamingAssetCollectionDetails, focusing on attributes such as Name.
* The node stages the processed asset data according to the Output Mode set by PCGExStagingOutputMode.

#### Configuration

<details>

<summary><strong>Collection Source</strong> <code>PCGExCollectionSource</code></summary>

Controls collection source.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Asset Collection</strong> <code>PCGExAssetCollection</code></summary>

Controls asset collection.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Attribute Set Details</strong> <code>PCGExRoamingAssetCollectionDetails</code></summary>

Controls attribute set details.

📦 See: RoamingAssetCollection configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Attribute</strong> <code>Name</code></summary>

Controls └─ attribute.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Output Mode</strong> <code>PCGExStagingOutputMode</code></summary>

Controls output mode.

**Values:**

* **Point Attributes**: Write asset data on the point
* **Collection Map**: Write collection reference & pick for later use

⚡ PCG Overridable

</details>

<details>

<summary><strong>Asset Path Attribute Name</strong> <code>Name</code></summary>

The name of the attribute to write asset path to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Distribution</strong> <code>PCGExAssetDistributionDetails</code></summary>

Distribution details

📦 See: AssetDistribution configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Distribution (Entry)</strong> <code>PCGExMicroCacheDistributionDetails</code></summary>

Distribution details that are specific to the picked entry -- what it picks depends on the type of collection being staged. For Mesh Collections, this let you control how materials are picked.

📦 See: MicroCacheDistribution configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Scale To Fit</strong> <code>PCGExScaleToFitDetails</code></summary>

Controls scale to fit.

📦 See: ScaleToFit configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Justification</strong> <code>PCGExJustificationDetails</code></summary>

Controls justification.

📦 See: Justification configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Variations</strong> <code>PCGExFittingVariationsDetails</code></summary>

Controls variations.

📦 See: FittingVariations configuration

</details>

<details>

<summary><strong>Prune Empty Points</strong> <code>bool</code></summary>

\*\* If enabled, filter output based on whether a staging has been applied or not (empty entry). Current implementation is slow. \*/

⚡ PCG Overridable

</details>

<details>

<summary><strong>Do Filter Entry Type</strong> <code>bool</code></summary>

Controls do filter entry type.

</details>

<details>

<summary><strong>Entry Type Filter</strong> <code>PCGExStagedTypeFilterDetails</code></summary>

Controls entry type filter.

📦 See: StagedTypeFilter configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Quiet Empty Collection Error</strong> <code>bool</code></summary>

Controls quiet empty collection error.

</details>

**Additional Outputs**

<details>

<summary><strong>Write Entry Type</strong> <code>bool</code></summary>

Controls write entry type.

</details>

<details>

<summary><strong>Entry Type Attribute Name</strong> <code>Name</code></summary>

Name of the FName entry type will be written to

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tagging Details</strong> <code>PCGExAssetTaggingDetails</code></summary>

Tagging details

📦 See: AssetTagging configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Weight To Attribute</strong> <code>PCGExWeightOutputMode</code></summary>

Update point scale so staged asset fits within its bounds

⚡ PCG Overridable

</details>

<details>

<summary><strong>Weight Attribute Name</strong> <code>Name</code></summary>

The name of the attribute to write asset weight to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Output Material Picks</strong> <code>bool</code></summary>

\*\* If enabled, will output mesh material picks. \*/

⚡ PCG Overridable

</details>

<details>

<summary><strong>├─ Fixed Max Index</strong> <code>int32</code></summary>

\*\* If > 0 will create dummy attributes for missing material indices up to a maximum; in order to create a full, fixed-length list of valid (yet null) attributes for the static mesh spawner material overrides. Otherwise, will only create attribute for valid indices. \*/

_Range: min: 0_

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Prefix</strong> <code>Name</code></summary>

Prefix to be used for material slot picks.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Do Output Sockets</strong> <code>bool</code></summary>

Controls do output sockets.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Output Sockets</strong> <code>PCGExSocketOutputDetails</code></summary>

Controls output sockets.

📦 See: SocketOutput configuration

</details>

***

Source: `Source\PCGExCollections\Public\Elements\PCGExAssetStaging.h`
