---
description: 'In editor :: PCGEx | Asset Collection to Set'
icon: circle
---

# Asset Collection to Set

{% hint style="warning" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Converts an asset collection to an attribute set.

### Overview

This node takes an asset collection and converts it into a point-based attribute set that can be used in subsequent procedural operations. It's useful when you want to work with asset data as points, for example to randomly select assets, or to access metadata like bounds and weights.

{% hint style="info" %}
The output is a point-based attribute set containing one point per asset entry in the collection.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input**: Asset Collection (UPCGExAssetCollection)

</details>

<details>

<summary>Outputs</summary>

* **Main Output**: Attribute Set (Points with asset metadata as attributes)

</details>

### Properties Overview

Controls how the asset collection is converted into an attribute set.

***

#### General

Controls core behavior for converting the collection.

**Asset Collection**

_The asset collection to convert to an attribute set._

* This is the source data that will be processed.
* The collection can contain multiple levels of sub-collections, which are handled based on the **Sub-collection Handling** setting.

**Sub-collection Handling**

_How to handle sub-collections within the main collection._

* Controls what happens when the asset collection contains nested collections.
* **Ignore**: Sub-collections are skipped entirely.
* **Expand**: All assets from sub-collections are included in the output.
* **Random**: One asset is randomly selected from each sub-collection.
* **Random weighted**: One asset is randomly selected, with weights taken into account.
* **First item**: The first asset in each sub-collection is used.
* **Last item**: The last asset in each sub-collection is used.

**Allow Duplicates**

_If enabled, allows duplicate entries (duplicate is same object path & category)._

* When disabled, duplicate assets are removed from the output.
* Useful when you want to avoid having the same asset represented multiple times.

**Omit Invalid and Empty**

_If enabled, invalid or empty entries are removed from the output._

* Removes any entries that don't point to valid assets or have no data.
* Helps clean up the output by filtering out broken or empty references.

***

#### Outputs

Controls which metadata attributes are written to the output attribute set.

**Write Asset Path**

_If enabled, writes the asset path to the output._

* Adds an attribute containing the full path to each asset.
* Useful for referencing assets later in your graph.

**Asset Path Attribute Name**

_Name of the attribute on the AttributeSet that contains the asset path._

* The name of the attribute where the asset path is stored.
* Defaults to **AssetPath**.

**Write Asset Class**

_If enabled, writes the asset class to the output._

* Adds an attribute containing the type of each asset (e.g., StaticMesh, Material).
* This setting is always enabled and cannot be disabled.

**Write Weight**

_If enabled, writes the asset weight to the output._

* Adds an attribute containing the weight assigned to each asset.
* Useful for weighted random selection or influence-based operations.

**Weight Attribute Name**

_Name of the attribute on the AttributeSet that contains the asset weight._

* The name of the attribute where the weight is stored.
* Defaults to **Weight**.

**Write Category**

_If enabled, writes the asset category to the output._

* Adds an attribute containing the category assigned to each asset.
* Categories help organize assets and can be used for filtering or grouping.

**Category Attribute Name**

_Name of the attribute on the AttributeSet that contains the asset category._

* The name of the attribute where the category is stored.
* Defaults to **Category**.

**Write Extents**

_If enabled, writes the asset bounds' Extents to the output._

* Adds an attribute containing the size of each asset's bounding box.
* Useful for scaling or positioning based on asset dimensions.

**Extents Attribute Name**

_Name of the attribute on the AttributeSet that contains the asset bounds' Extents._

* The name of the attribute where the extents are stored.
* Defaults to **Extents**.

**Write Bounds Min**

_If enabled, writes the asset BoundsMin to the output._

* Adds an attribute containing the minimum point of each asset's bounding box.
* Useful for precise positioning or collision detection.

**Bounds Min Attribute Name**

_Name of the attribute on the AttributeSet that contains the asset BoundsMin._

* The name of the attribute where the bounds minimum is stored.
* Defaults to **BoundsMin**.

**Write Bounds Max**

_If enabled, writes the asset BoundsMax to the output._

* Adds an attribute containing the maximum point of each asset's bounding box.
* Useful for precise positioning or collision detection.

**Bounds Max Attribute Name**

_Name of the attribute on the AttributeSet that contains the asset BoundsMax._

* The name of the attribute where the bounds maximum is stored.
* Defaults to **BoundsMax**.

**Write Nesting Depth**

_If enabled, writes the asset depth to the output._

* Adds an attribute containing how deeply nested each asset is in the collection hierarchy.
* Useful for understanding structure or applying depth-based logic.

**Nesting Depth Attribute Name**

_Name of the attribute on the AttributeSet that contains the asset depth._

* The name of the attribute where the nesting depth is stored.
* Defaults to **NestingDepth**.
