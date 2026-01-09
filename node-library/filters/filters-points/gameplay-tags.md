---
description: 'In editor :: PCGEx | Filter : GameplayTags'
icon: circle-dashed
---

# Gameplay Tags

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Creates a filter definition that checks gameplay tags of an actor reference.

#### Overview

This subnode filters points based on the gameplay tags assigned to an actor referenced by each point. It's useful when you have points that represent locations or entities in your level, and each point references an actor (like a character, prop, or structure) whose gameplay tags you want to evaluate. The filter can determine whether a point should pass or fail based on the tag query applied.

This subnode connects to Filter pins on processing nodes, such as **Filter Points** or **Filter Edges**, where it defines the condition that points must meet to be considered valid for further processing.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes.
{% endhint %}

#### How It Works

This filter evaluates each point by:

1. Resolving an actor reference from a specified attribute (e.g., `ActorReference`) on the point.
2. Navigating to a tag container within that actor using a property path (e.g., `Component.TagContainer`).
3. Applying a gameplay tag query against the resolved tag container.
4. Returning whether the query passes or fails for that point.

If an actor cannot be found or the property path is invalid, it uses fallback values to determine the result.

<details>

<summary>Inputs</summary>

* Points with an attribute containing a reference to an actor (e.g., `ActorReference`)
* An actor with a tag container accessible via the provided property path

</details>

<details>

<summary>Outputs</summary>

* Points that pass or fail the gameplay tag query
* The filter result is used by the parent node to decide which points proceed in the graph

</details>

#### Configuration

***

**ActorReference**

_Name of the attribute that contains a path to an actor in the level, usually from a GetActorData PCG Node in point mode._

Specifies the name of the attribute on each point that holds a reference to an actor in the level.

**Example**: If your points have an attribute named `ActorRef`, set this to `ActorRef`.

***

**PropertyPath**

_Path to the tag container to be tested, resolve from the actor reference as root._

Defines how to navigate from the referenced actor to the tag container. This is a string path that can include component names and properties.

**Example**: For an actor with a `GameplayTags` component, you might use `GameplayTags.TagContainer`.

***

**TagQuery**

_Query._

The gameplay tag query used to evaluate the tag container. This allows for complex filtering using tag relationships (e.g., `HasTagA AND NOT HasTagB`).

**Example**: A query like `Gameplay.Tag1 OR Gameplay.Tag2` will pass if the actor has either of those tags.

***

**bFallbackMissingActor**

_Value the filter will return for point which actor reference cannot be resolved._

When enabled, points where the actor reference cannot be resolved will be considered to **fail** the filter. When disabled, they will **pass**.

***

**bFallbackPropertyPath**

_Value the filter will return if the actor is found, but the property path could not be resolved._

When enabled, points where the actor is found but the tag container cannot be accessed via the property path will be considered to **fail** the filter. When disabled, they will **pass**.

***

**bQuietMissingPropertyWarning**

_Controls whether warnings are displayed for missing properties._

When enabled, suppresses warning messages when a property path fails to resolve on an actor.

#### Usage Example

1. Use a **GetActorData** node in point mode to assign actor references to points.
2. Connect the output of that node to a **Filter Points** node.
3. Add this **Filter : GameplayTags** subnode to the Filter pin of the **Filter Points** node.
4. Set `ActorReference` to the attribute name used by GetActorData (e.g., `ActorRef`).
5. Set `PropertyPath` to the path of the tag container on the actor (e.g., `GameplayTags.TagContainer`).
6. Define a tag query that matches your desired gameplay tags.
7. The **Filter Points** node will now only pass points where the referenced actor's tags match the query.

#### Notes

* Ensure the actor references are valid and point to actors with the expected tag containers.
* Tag queries support complex logic using AND, OR, NOT operators.
* Fallback settings allow you to control behavior when data is missing or invalid.
