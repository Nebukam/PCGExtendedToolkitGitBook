---
description: 'In editor :: PCGEx | Asset Staging'
icon: circle
---

# Asset Staging

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Stages assets from collections onto points, enabling procedural asset placement and data assignment.

#### How It Works

This node processes each point in your input data and assigns an asset from a collection based on your configuration. For every point, it selects an entry using either random or weighted selection methods. The selected asset's path is then written to an attribute on the point.

If you choose "Collection Map" as the output mode, instead of writing asset paths directly, it stores references to the collection and the index of the picked entry for later use in other nodes that can interpret this mapping.

When working with mesh collections, it also handles material picking. If enabled, it writes material slot indices or paths to attributes on the point, allowing for per-instance material assignment. The node supports fixed-length material attribute lists by padding missing indices with null values up to a specified maximum.

Additionally, it can scale points to fit the bounds of their staged assets and apply justification settings to align the asset within the point's space. It also supports writing weight data and entry type information for advanced filtering or procedural behaviors.

#### Configuration

<details>

<summary><strong>Collection Source</strong><br><em>Defines how the collection is sourced.</em></summary>

Controls whether the collection is directly referenced or read from an attribute on the input points.

**Values**:

* **Asset**: Use a direct asset reference.
* **Attribute**: Read the collection path from an attribute on the input points.

</details>

<details>

<summary><strong>Asset Collection</strong><br><em>Reference to the asset collection to use.</em></summary>

The asset collection to draw assets from when using "Asset" as the collection source.

</details>

<details>

<summary><strong>Attribute Set Details</strong><br><em>Details for attribute-based collection sourcing.</em></summary>

Configuration for reading collection paths from an attribute on input points when using the "Attribute" collection source.

</details>

<details>

<summary><strong>Collection Path Attribute Name</strong><br><em>The name of the attribute to read collection path from.</em></summary>

The name of the attribute used to store collection paths when using the "Attribute" collection source.

</details>

<details>

<summary><strong>Output Mode</strong><br><em>How the staging data is written to points.</em></summary>

Controls whether asset data is written directly as point attributes or stored as a reference for later use.

**Values**:

* **Point Attributes**: Write asset path directly to an attribute on the point.
* **Collection Map**: Store collection reference and pick index for later interpretation.

</details>

<details>

<summary><strong>Asset Path Attribute Name</strong><br><em>The name of the attribute to write asset path to.</em></summary>

The name of the attribute where the asset path will be written when using "Point Attributes" output mode.

</details>

<details>

<summary><strong>Distribution Settings</strong><br><em>Distribution details for selecting assets from the collection.</em></summary>

Settings that control how assets are selected from the collection, such as random or weighted selection.

</details>

<details>

<summary><strong>Scale To Fit</strong><br><em>Controls how points scale to fit staged assets.</em></summary>

Settings for scaling points so that their bounds accommodate the size of the staged asset.

</details>

<details>

<summary><strong>Justification</strong><br><em>How to align the staged asset within the point.</em></summary>

Controls how the staged asset is positioned relative to the point's origin.

</details>

<details>

<summary><strong>Variations</strong><br><em>Settings for handling variations in asset selection.</em></summary>

Configuration for applying variations to asset selection, such as randomization or grouping.

</details>

<details>

<summary><strong>Prune Empty Points</strong><br><em>If enabled, filter output based on whether a staging has been applied or not (empty entry).</em></summary>

When enabled, points that did not get a valid asset assigned are removed from the output. Note: This is currently slow.

</details>

<details>

<summary><strong>Write Entry Type</strong><br><em>If enabled, writes the type of entry selected.</em></summary>

When enabled, writes additional information about the type of entry (e.g., mesh, static mesh) to an attribute on the point.

</details>

<details>

<summary><strong>Entry Type</strong><br><em>Details for writing entry type data.</em></summary>

Configuration for how and where entry type information is written.

</details>

<details>

<summary><strong>Tagging Details</strong><br><em>Tagging details for the staged assets.</em></summary>

Settings for applying tags to staged assets, useful for filtering or categorization.

</details>

<details>

<summary><strong>Weight To Attribute</strong><br><em>Update point scale so staged asset fits within its bounds.</em></summary>

Controls whether to write weight information as an attribute on the point. Weight is based on how often an asset was selected from a collection.

**Values**:

* **No Output**: Do not output weight.
* **Raw**: Write raw integer weight.
* **Normalized**: Write normalized weight value (Weight / WeightSum).
* **Normalized (Inverted)**: Write one minus normalized weight (1 - (Weight / WeightSum)).
* **Normalized to Density**: Same as Normalized.
* **Normalized (Inverted) to Density**: Same as Normalized (Inverted).

</details>

<details>

<summary><strong>Weight Attribute Name</strong><br><em>The name of the attribute to write asset weight to.</em></summary>

The name of the attribute where weight data is written when enabled.

</details>

<details>

<summary><strong>Output Material Picks</strong><br><em>If enabled, will output mesh material picks.</em></summary>

When enabled, writes material slot indices or paths to attributes for mesh collections.

</details>

<details>

<summary><strong>Max Material Picks</strong><br><em>If > 0 will create dummy attributes for missing material indices up to a maximum.</em></summary>

If greater than zero, creates fixed-length material attribute lists by padding with null values up to the specified index. Otherwise, only creates attributes for valid indices.

</details>

<details>

<summary><strong>Material Attribute Prefix</strong><br><em>Prefix to be used for material slot picks.</em></summary>

The prefix used when naming material pick attributes (e.g., "Mat0", "Mat1").

</details>

<details>

<summary><strong>Do Output Sockets</strong><br><em>If enabled, outputs socket information from the staged assets.</em></summary>

When enabled, creates additional output sockets for each point based on the asset's socket data.

</details>

<details>

<summary><strong>Output Socket Details</strong><br><em>Details for creating output sockets.</em></summary>

Configuration for how and where socket information is written to the output.

</details>

<details>

<summary><strong>Quiet Empty Collection Error</strong><br><em>If enabled, suppresses errors when a collection is empty.</em></summary>

When enabled, prevents error messages from appearing if an asset collection is empty or invalid.

</details>

#### Usage Example

1. Create a point set representing locations where you want to place assets.
2. Add an Asset Staging node and connect it to the points.
3. Set the Collection Source to "Asset" and select your asset collection.
4. Choose "Point Attributes" as Output Mode and name the attribute for asset paths (e.g., "AssetPath").
5. Configure distribution settings to control how assets are selected from the collection.
6. Optionally, enable "Output Material Picks" if working with mesh collections and you need material data.
7. Connect the output of this node to a spawner or instancer to generate your assets.

#### Notes

* The node supports both static and dynamic asset collections.
* When using "Collection Map" output mode, it's best to use this node in combination with other nodes that can interpret the collection map.
* Material picking is only supported for mesh collections.
* Enabling "Prune Empty Points" can slow down processing due to filtering overhead.
* The node supports multi-threaded processing for better performance on large datasets.
