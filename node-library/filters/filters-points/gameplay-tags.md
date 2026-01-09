---
description: 'In editor :: PCGEx | Filter : GameplayTags'
icon: circle-dashed
---

# Gameplay Tags

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Creates a filter definition that checks gameplay tags of an actor reference.

### Overview

This factory generates a filter that evaluates gameplay tags from actors referenced by points in your PCG graph. It's designed to work with point data that contains references to actors in the level, allowing you to filter points based on their associated actor's tag state.

{% hint style="info" %}
Connects to Filter pins on processing nodes like **Filter Points** or **Select Points**
{% endhint %}

### How It Works

The filter works by:

1. Reading an actor reference from a point attribute (default name: "ActorReference")
2. Following a property path from that actor to find a tag container
3. Testing the tags against a GameplayTagQuery
4. Returning whether the query passes or fails for that actor's tags

### Configuration

***

#### General

**ActorReference**

_The name of the attribute containing actor references._

Set this to match the name of your point attribute that holds actor references (usually from a GetActorData node). For example, if your actor reference attribute is named "MyActorRef", set this to "MyActorRef".

**PropertyPath**

_Path to the tag container to be tested, resolve from the actor reference as root._

Specify the path to find the tag container on the referenced actor. For example:

* `"Component.TagContainer"` - looks for a TagContainer property on a component
* `"Tags"` - looks directly at the actor's Tags property

**TagQuery**

_Query to test against the actor's gameplay tags._

Define your tag query using Unreal's GameplayTag system syntax. Examples:

* `"Gameplay.Tag1"` - passes if the actor has this tag
* `"Gameplay.Tag1 AND Gameplay.Tag2"` - passes if actor has both tags
* `"Gameplay.Tag1 OR Gameplay.Tag2"` - passes if actor has either tag

***

#### Fallbacks

**bFallbackMissingActor**

_When enabled, points with invalid actor references will pass the filter._

If a point's actor reference cannot be resolved (actor missing or invalid), this setting determines how to handle it. When enabled, such points are considered to pass the filter.

**bFallbackPropertyPath**

_When enabled, points where the property path can't be resolved will pass the filter._

If an actor is found but the specified property path cannot be resolved, this setting controls the behavior. When enabled, such points are considered to pass the filter.

***

#### Warnings and Errors

**bQuietMissingPropertyWarning**

_When enabled, suppresses warnings about missing property paths._

Disable this if you want to see warnings when the specified property path cannot be found on actors. Useful for debugging your property paths.

### Usage Example

1. Use a **GetActorData** node to populate point data with actor references
2. Connect that to a **Filter Points** node
3. Create a new GameplayTags filter using this node
4. Set the ActorReference to match your attribute name (e.g., "ActorRef")
5. Set PropertyPath to "Tags" to check the actor's direct tags
6. Configure TagQuery to match desired tag conditions
7. Connect the filter to the Filter pin of the Filter Points node

This setup will only pass points whose referenced actors have tags matching your query.

### Notes

* The filter requires a valid actor reference attribute on input points
* Property paths are resolved at runtime, so ensure they exist on your actors
* GameplayTagQuery syntax supports AND, OR, NOT operators and nested queries
* Use fallback settings to control behavior when data is missing or invalid
* This filter works best with actors that have tag containers like `FGameplayTagContainer` or `UGameplayTagsComponent`

### Inputs and Outputs

#### Inputs

* **Points**: Point data containing actor references to be filtered
* **Filter**: Filter input for connecting to processing nodes

#### Outputs

* **Filtered Points**: Point data that passes the gameplay tag filter
* **Rejected Points**: Point data that fails the gameplay tag filter
