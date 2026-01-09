---
description: 'In editor :: PCGEx | Pack Actor Data'
icon: scrubber
---

# Pack Actor Data

{% hint style="warning" %}
## AI-generated page - To be reviewed. 
While not 100% accurante, it should properly capture what it does. It stills needs to be reviewed and proofread by a human.
{% endhint %}

> Use custom blueprint to read data from actor references.

### Overview

The Pack Actor Data node allows you to extract and process data from actor references in your point data. It works by using a custom blueprint class (the Packer) that defines how to read attributes or properties from each referenced actor and write them back into the point data.

This node is particularly useful when you have points that reference actors, and you want to pull specific data from those actors—such as health, position, component values, or custom properties—and store them directly in your point attributes for further processing.

{% hint style="info" %}
The Packer blueprint must be set up separately. It defines the logic for reading actor data and writing it back into points.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input**: Points with actor references (via the `ActorReferenceAttribute`).
* **Optional**: Additional inputs can be used if specified by your Packer blueprint.

</details>

<details>

<summary>Outputs</summary>

* **Main Output**: Points with updated attributes from the referenced actors.
* **Optional**: Additional outputs based on your Packer's configuration.

</details>

### Properties Overview

Settings for configuring how actor data is read and processed.

***

#### General Settings

Controls core behavior of the node.

**Actor Reference Attribute**

_The name of the point attribute that contains the actor references._

* This attribute should contain valid actor references.
* Default value: `ActorReference`

**Packer**

_The custom blueprint class that defines how to read data from actors and write it back into points._

* Must be a subclass of **Custom Actor Data Packer**.
* Defines the logic for reading actor properties and writing them to point attributes.
* This is where you implement your custom data extraction logic.

**Omit Unresolved Entries**

_When enabled, points that reference invalid or unresolved actors are excluded from output._

* If disabled, unresolved entries may produce undefined behavior or errors.
* Default value: **Enabled**

**Omit Empty Outputs**

_When enabled, the node will not output any points if no valid actor references are found._

* Useful for avoiding empty outputs in downstream nodes.
* Default value: **Enabled**

**Track Actors**

_When enabled, the node will monitor referenced actors and trigger graph regeneration when their properties change._

* Helps ensure that changes to actors are reflected in your procedural generation.
* Default value: **Enabled**

**Quiet Uninitialized Packer Warning**

_When enabled, suppresses warnings about uninitialized packer blueprints._

* Useful for avoiding cluttered logs during development.
* Default value: **Disabled**
