---
description: 'In editor :: PCGEx | Pack Actor Data'
icon: scrubber
---

# Pack Actor Data

Use custom blueprint to read data from actor references.

**How It Works**

> AI-Generated, needs proofreading

* The Pack Actor Data node reads data from provided actor references using a custom blueprint.
* It uses a Builder instance specified in the Packer setting to organize and process the actor data.
* If Execute On Main Thread is enabled, the node ensures that any component spawning actions occur on the main thread.
* When Omit Unresolved Entries is set to true, the node excludes any entries for which it cannot resolve valid actor references from its output.
* If Omit Empty Outputs is true, the node will not include any data sets that do not contain relevant information after processing.

#### Configuration

<details>

<summary><strong>Execute On Main Thread</strong> <code>bool</code></summary>

Enable this if you're spawning components.

</details>

<details>

<summary><strong>Actor Reference Attribute</strong> <code>Name</code></summary>

Actor reference

⚡ PCG Overridable

</details>

<details>

<summary><strong>Packer</strong> <code>PCGExCustomActorDataPacker</code> ⚙️</summary>

Builder instance.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Omit Unresolved Entries</strong> <code>bool</code></summary>

Controls omit unresolved entries.

</details>

<details>

<summary><strong>Omit Empty Outputs</strong> <code>bool</code></summary>

Controls omit empty outputs.

</details>

<details>

<summary><strong>Track Actors</strong> <code>bool</code></summary>

When enabled, will track referenced actors and trigger a graph regeneration when their properties change.

</details>

<details>

<summary><strong>Quiet Uninitialized Packer Warning</strong> <code>bool</code></summary>

If enabled, will turn off uninitialized packer warning.

</details>

***

Source: `Source\PCGExElementsMeta\Public\Elements\PCGExPackActorData.h`
