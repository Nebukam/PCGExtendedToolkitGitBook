---
icon: rectangles-mixed
---

# Mesh Collection

{% hint style="warning" %}
## AI-generated page - To be reviewed. 
While not 100% accurante, it should properly capture what it does. It stills needs to be reviewed and proofread by a human.
{% endhint %}

> Creates a collection of static meshes that can be used in procedural generation workflows.

### Overview

This node allows you to define a library of static meshes that can be randomly selected or routed through your PCG graph. It's particularly useful for creating varied environments, such as forests with different tree types, cityscapes with diverse building models, or any scenario where you want to introduce variety while maintaining control over the available assets.

The node supports multiple material variants per mesh entry, enabling you to create visual variation without needing separate mesh assets. You can also define global component settings that apply to all entries in the collection.

{% hint style="info" %}
This collection type is specifically designed for static meshes and cannot be used with other asset types like actors or particle systems.
{% endhint %}

<details>

<summary>Inputs</summary>

* Points (optional): Input points are used for placement when the collection is used in a mesh placement context
* Collection (optional): Can accept another collection as input to merge or override settings

</details>

<details>

<summary>Outputs</summary>

* Collection: Outputs the configured mesh collection for use in downstream nodes

</details>

### Properties Overview

Controls how your mesh collection behaves and what assets it contains.

***

#### General Settings

Configures the core behavior of the mesh collection.

**Global Descriptor Mode**

_Controls how component settings are applied across entries._

* When set to **Per Entry**, each entry can define its own component settings, or inherit from global settings if not specified
* When set to **Overrule**, all entries will use the global component settings regardless of their individual settings

**Values**:

* **Per Entry**: Let the entry choose whether it's using collection settings or its own
* **Overrule**: Disregard the entry settings and enforce collection settings

**Global ISM Settings**

_Global settings for Instanced Static Mesh components._

* These settings will be applied to all entries that use Instanced Static Mesh component descriptors
* Can be overridden per entry if "Per Entry" mode is selected

**Global SM Settings**

_Global settings for Static Mesh components._

* These settings will be applied to all entries that use Static Mesh component descriptors
* Can be overridden per entry if "Per Entry" mode is selected

**Entries**

_List of mesh entries in the collection._

* Each entry defines a static mesh asset and its associated properties
* Supports subcollections for hierarchical organization
* Allows material variants and component descriptor overrides per entry

***

#### Entry Settings

Controls how individual mesh entries behave within the collection.

**Static Mesh**

_The static mesh asset to use for this entry._

* This is the primary mesh that will be placed or used in your procedural generation
* Can be any valid static mesh asset from your project

**Is Sub Collection**

_Marks this entry as a reference to another mesh collection._

* When enabled, this entry acts as a pointer to another collection
* The referenced collection's entries will be included when this entry is selected
* Useful for organizing complex collections into logical groups

**Material Variants**

_Controls how material variants are handled for this entry._

* **None**: No material variants available
* **Single Slot**: Single-slot variants, for when there is only a single material slot override
* **Multi Slots**: Multi-slot variants, more admin, for when there is multiple material slots for the entry

**Slot Index**

_The material slot index to apply variants to._

* Only visible when "Material Variants" is set to "Single Slot"
* Controls which material slot in the mesh will be overridden
* -1 uses the index inside the container

**Variants (Single Slot)**

_List of material overrides for a single material slot._

* Only visible when "Material Variants" is set to "Single Slot"
* Each variant defines a material to apply to the specified slot
* Supports weight-based selection for randomization

**Variants (Multi Slots)**

_List of material override collections for multiple slots._

* Only visible when "Material Variants" is set to "Multi Slots"
* Each entry defines a list of material overrides for different slots in the mesh
* Supports complex multi-slot material variations

**Descriptor Source**

_Controls where component settings are sourced from._

* **Local**: Use the settings defined directly on this entry
* **Global**: Use the global collection settings instead of local ones

**ISM Settings**

_Component settings for Instanced Static Mesh components._

* Only visible when "Descriptor Source" is set to "Local"
* Defines how instanced static mesh components should be configured

**SM Settings**

_Component settings for Static Mesh components._

* Only visible when "Descriptor Source" is set to "Local"
* Defines how static mesh components should be configured

### Notes

* Use subcollections to organize large collections into logical groups
* Material variants are particularly useful for creating visual diversity without increasing asset count
* Global component settings provide a way to standardize appearance across all entries
* When using material variants, ensure your meshes have the correct number of material slots
* The collection supports both single and multi-slot material overrides for maximum flexibility
* For performance considerations, keep the number of variants reasonable to avoid excessive memory usage
