---
description: 'In editor :: PCGEx | Filter : GameplayTags'
icon: circle-dashed
---

# Gameplay Tags

Creates a filter definition that checks gameplay tags of an actor reference.

📌 **Subnode** — Connects to **Filters** pins.

**How It Works**

> AI-Generated, needs proofreading

* The node creates a filter definition that evaluates gameplay tags associated with an actor reference provided in the level.
* It uses the specified property path to locate and test the tag container starting from the root of the given actor reference.
* If the actor reference cannot be resolved, the filter returns the value defined by "Fallback Missing Actor".
* In cases where the actor is found but the property path cannot be resolved, the node outputs the value set in "Fallback Property Path".

#### Configuration

<details>

<summary><strong>Actor Reference</strong> <code>Name</code></summary>

Name of the attribute that contains a path to an actor in the level, usually from a GetActorData PCG Node in point mode.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Property Path</strong> <code>String</code></summary>

Path to the tag container to be tested, resolve from the actor reference as root.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tag Query</strong> <code>GameplayTagQuery</code></summary>

Query.

</details>

<details>

<summary><strong>Quiet Missing Property Warning</strong> <code>bool</code></summary>

Controls quiet missing property warning.

</details>

<details>

<summary><strong>Config</strong> <code>PCGExGameplayTagsFilterConfig</code></summary>

Filter Config.

📦 See: GameplayTagsFilter configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Actor Reference</strong> <code>Name</code></summary>

Name of the attribute that contains a path to an actor in the level, usually from a GetActorData PCG Node in point mode.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Property Path</strong> <code>String</code></summary>

Path to the tag container to be tested, resolve from the actor reference as root.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tag Query</strong> <code>GameplayTagQuery</code></summary>

Query.

</details>

<details>

<summary><strong>Quiet Missing Property Warning</strong> <code>bool</code></summary>

Controls quiet missing property warning.

</details>

**Fallbacks**

<details>

<summary><strong>Fallback Missing Actor</strong> <code>bool</code></summary>

Value the filter will return for point which actor reference cannot be resolved

</details>

<details>

<summary><strong>Fallback Property Path</strong> <code>bool</code></summary>

Value the filter will return if the actor is found, but the property path could not be resolved

</details>

<details>

<summary><strong>Fallback Missing Actor</strong> <code>bool</code></summary>

Value the filter will return for point which actor reference cannot be resolved

</details>

<details>

<summary><strong>Fallback Property Path</strong> <code>bool</code></summary>

Value the filter will return if the actor is found, but the property path could not be resolved

</details>

***

Source: `Source\PCGExFilters\Public\Filters\Points\PCGExGameplayTagsFilter.h`
