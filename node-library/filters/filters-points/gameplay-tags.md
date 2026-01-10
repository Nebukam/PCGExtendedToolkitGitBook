---
description: 'In editor :: PCGEx | Filter : GameplayTags'
icon: circle-dashed
---

# Gameplay Tags

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Filters points based on gameplay tags assigned to actors referenced by those points.

#### How It Works

This subnode evaluates whether each point in a PCG graph passes or fails a filter condition based on the gameplay tags of an actor. For every point, it:

1. Retrieves an actor reference from a specified point attribute.
2. Resolves that reference to an actual actor in the level.
3. Navigates to a tag container on the actor using a defined path.
4. Checks if the tags on that container match a specific gameplay tag query.
5. If the actor or tag container cannot be found, it uses fallback settings to decide whether to pass or fail the point.

This process allows you to filter points based on complex tag relationships, such as requiring an actor to have certain tags or meet specific tag conditions.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes (e.g., Point Filter, Point Switch).
{% endhint %}

#### Configuration

<details>

<summary><strong>ActorReference</strong><br><em>Name of the attribute that contains a path to an actor in the level, usually from a GetActorData PCG Node in point mode.</em></summary>

Specifies the name of the point attribute that holds the actor reference. This is typically set by a GetActorData node.

**Example**: If you have a point attribute named `MyActorRef`, set this to `MyActorRef`.

</details>

<details>

<summary><strong>PropertyPath</strong><br><em>Path to the tag container to be tested, resolve from the actor reference as root.</em></summary>

Defines how to navigate from the resolved actor to the tag container. This is a string path, such as `Component.TagContainer` or `Tags`.

**Example**: For an actor with a component named `MyTagComponent`, set this to `MyTagComponent.TagContainer`.

</details>

<details>

<summary><strong>TagQuery</strong><br><em>Query.</em></summary>

A gameplay tag query that defines the conditions for passing the filter. This can include tag requirements, exclusions, and logical combinations.

**Example**:

* `GameplayTags.Tag1` (requires Tag1)
* `GameplayTags.Tag1 & GameplayTags.Tag2` (requires both Tag1 and Tag2)
* `GameplayTags.Tag1 | GameplayTags.Tag2` (requires either Tag1 or Tag2)

</details>

<details>

<summary><strong>bFallbackMissingActor</strong><br><em>Value the filter will return for point which actor reference cannot be resolved.</em></summary>

Controls the behavior when an actor cannot be resolved from the `ActorReference`. If enabled, the filter returns **true** (passes), otherwise it returns **false** (fails).

</details>

<details>

<summary><strong>bFallbackPropertyPath</strong><br><em>Value the filter will return if the actor is found, but the property path could not be resolved.</em></summary>

Controls the behavior when an actor is found but the tag container at `PropertyPath` cannot be accessed. If enabled, the filter returns **true** (passes), otherwise it returns **false** (fails).

</details>

<details>

<summary><strong>bQuietMissingPropertyWarning</strong><br><em>Suppresses warnings about missing properties during filtering.</em></summary>

When enabled, suppresses warning messages in the log when a property path cannot be resolved. Useful to reduce noise in large graphs.

</details>

#### Usage Example

1. Use a **GetActorData** node to extract actor references from points.
2. Connect the output of that node to a **Point Filter** node.
3. Add this **Filter : GameplayTags** subnode to the Point Filter's **Filter** input pin.
4. Set `ActorReference` to match the attribute name from GetActorData (e.g., `ActorRef`).
5. Set `PropertyPath` to point to the tag container on the actor (e.g., `Tags` or `Component.TagContainer`).
6. Configure a `TagQuery` such as `CharacterType.Enemy` to filter only enemy characters.
7. Use the output of the Point Filter to control downstream processing, like spawning different objects based on actor tags.

#### Notes

* The `PropertyPath` must point to a valid tag container (e.g., `FGameplayTagContainer`) on the actor or its components.
* Tag queries support complex logic using `&` (and), `|` (or), and `!` (not) operators.
* This subnode works best when used with actors that have tag containers defined in their components or properties.
