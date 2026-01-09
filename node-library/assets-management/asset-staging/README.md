---
description: 'In editor :: PCGEx | Asset Staging'
icon: circle
---

# Asset Staging

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Data staging from PCGEx Asset Collections.

### Overview

Asset Staging prepares and writes asset data from collections onto points in your procedural graph. It allows you to assign assets from collections to individual points, making them available for spawning or further processing. The node supports multiple output modes and can handle various asset types including meshes, materials, and more.

{% hint style="info" %}
Asset Staging requires a valid collection source. You can either select an asset collection directly or use an attribute set that maps to collections.
{% endhint %}

<details>

<summary>Inputs</summary>

* Points: Input points to stage assets on
* Optional filters: Point filters to determine which points get staged

</details>

<details>

<summary>Outputs</summary>

* Points: Modified points with asset data written to attributes or collection references

</details>

### Properties Overview

Settings for controlling how asset data is staged onto points.

***

#### Collection Source

Controls where the asset collection comes from.

**Collection Source**

_Where the asset collection is sourced from._

* Determines whether you're using a direct asset reference or an attribute-based collection mapping
* When set to **Asset**, you select a specific collection asset directly
* When set to **Attribute**, you use an attribute that contains collection paths

**Values**:

* **Asset**: Use a direct asset collection reference
* **Attribute**: Use an attribute containing collection paths

**Asset Collection**

_The collection asset to use for staging._

* Selects the specific asset collection to draw from
* Only visible when "Collection Source" is set to "Asset"

**AttributeSetDetails**

_Details for building collections from attribute sets._

* When "Collection Source" is set to "Attribute", this defines how to build collections from input attributes
* Controls type of temporary collection to create from the input attribute set

**Collection Path Attribute Name**

_The name of the attribute containing collection paths._

* Only visible when "Collection Source" is set to "Attribute"
* Defines which attribute contains collection path data for each point

***

#### Output Mode

Controls how asset data is written to points.

**Output Mode**

_How asset data is written to points._

* Determines whether asset data is written directly as attributes or stored as collection references
* When set to **Point Attributes**, asset data is written directly onto the point
* When set to **Collection Map**, a reference to the collection and pick index are stored for later use

**Values**:

* **Point Attributes**: Write asset data on the point
* **Collection Map**: Write collection reference & pick for later use

**Asset Path Attribute Name**

_The name of the attribute to write asset paths to._

* Only visible when "Output Mode" is set to "Point Attributes"
* Controls the name of the attribute that will contain asset path data

***

#### Distribution Settings

Controls how assets are distributed across points.

**Distribution Settings**

_How assets are selected from the collection._

* Defines how entries are picked from the collection for each point
* Supports various distribution methods like random, weighted, or sequential picking
* Controls how multiple entries from a single collection are handled

**Entry Distribution Settings**

_Distribution settings specific to individual entries._

* Controls how entries within collections are distributed
* Particularly relevant for mesh collections where material picking is involved
* Allows fine-tuning of how materials are selected from meshes

***

#### Fitting and Transform Settings

Controls how staged assets are scaled and positioned.

**Scale To Fit**

_How to scale the asset to fit its bounds._

* Controls whether and how the point's scale should be adjusted to fit the asset
* Supports different fitting modes like Fill, Min, Max, or Average
* Can be useful for ensuring assets fit within their designated space

**Justification**

_How to position the asset within its bounds._

* Controls alignment of the asset within its point bounds
* Supports Min, Center, and Max justification options
* Helps with proper positioning when scaling assets

**Variations**

_Variation settings for staged assets._

* Controls how variations are applied to staged assets
* Includes options for randomization and distribution of variation parameters
* Useful for creating visual diversity in spawned assets

***

#### Pruning and Filtering

Controls which points get processed.

**Prune Empty Points**

_Whether to remove points that couldn't be staged._

* When enabled, points that don't have valid asset data will be filtered out
* Can help clean up results by removing empty or invalid staging entries
* May impact performance due to additional filtering steps

***

#### Additional Outputs

Controls extra attributes and data written during staging.

**Write Entry Type**

_Whether to output the type of entry being staged._

* When enabled, writes an attribute indicating what type of collection entry was used
* Useful for downstream processing that needs to know entry types

**Entry Type**

_Details for writing entry type information._

* Controls how entry type data is written to points
* Defines the attribute name and other settings for entry type output

**Tagging Details**

_Settings for tagging staged assets._

* Allows adding tags to staged assets for filtering or categorization
* Supports various tagging methods and attribute names

**Weight To Attribute**

_Controls writing asset weights to attributes._

* When enabled, writes asset weight data to an attribute
* Supports different weight output modes like raw, normalized, or inverted
* Useful for downstream processing that needs weight information

**Weight Attribute Name**

_The name of the attribute to write asset weights to._

* Only visible when "Weight To Attribute" is enabled
* Controls the name of the attribute that will contain weight data

**Output Material Picks**

_Whether to output material picks from mesh collections._

* When enabled, writes material pick information for mesh collections
* Particularly useful for mesh spawners that need material overrides
* Only available when "Output Mode" is set to "Point Attributes"

**Max Material Picks**

_Maximum number of material picks to output._

* When > 0, creates dummy attributes for missing material indices
* Useful for creating fixed-length lists of material attributes
* Only visible when "Output Material Picks" is enabled

**Material Attribute Prefix**

_Prefix used for material attribute names._

* Controls the naming convention for material pick attributes
* Only visible when "Output Material Picks" is enabled
* Helps organize material-related attributes in the output

**Do Output Sockets**

_Whether to output socket information from staged assets._

* When enabled, writes socket data from assets to points
* Useful for connecting spawned assets or creating attachment points
* Requires additional setup for socket handling

**Output Socket Details**

_Settings for writing socket data._

* Controls how socket information is written to points
* Defines which sockets are output and their attribute naming
* Only visible when "Do Output Sockets" is enabled

***

#### Warnings and Errors

Controls error reporting behavior.

**Quiet Empty Collection Error**

_Suppresses errors when collections are empty._

* When enabled, prevents error messages for empty collections
* Useful for graphs that may legitimately have empty collections
* Helps reduce noise in the log output
