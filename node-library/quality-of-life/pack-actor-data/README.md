---
description: 'In editor :: PCGEx | Pack Actor Data'
icon: scrubber
---

# Pack Actor Data

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Use custom blueprint to read data from actor references.

#### Overview

The Pack Actor Data subnode allows you to extract and process data from actor references using a custom blueprint implementation. Instead of working directly with raw actor data, you define how that data should be interpreted and transformed through a dedicated packer subnode. This enables complex data extraction and manipulation workflows where each point in your PCG graph can reference an actor and have its properties read or computed based on custom logic.

This is particularly useful when you want to transfer information from actors (like health, position, component data) into your procedural points for further processing. It's a flexible way to bridge the gap between static procedural data and dynamic actor state.

{% hint style="info" %}
Connects to the **Packer** input pin of the Pack Actor Data processing node.
{% endhint %}

#### How It Works

This subnode defines a custom behavior for reading and packing data from actor references. When processing points, it uses a custom blueprint class (the Packer) that implements specific methods to handle each actor reference.

The system works by:

1. Reading the actor reference attribute from each point
2. For each unique actor, calling the Packer's `ProcessEntry` method in a multi-threaded context
3. Optionally executing additional logic on the main thread if `bExecuteOnMainThread` is enabled
4. Using the Packer's initialization methods to set up default values for attributes
5. Writing final processed data back into point attributes using buffer helpers

The packer blueprint defines how to extract information from actors, including setting up initial attribute values and processing each actor reference.

<details>

<summary>Inputs</summary>

* Actor references from the point data, specified by the `ActorReferenceAttribute` setting
* A custom Packer subnode that defines the behavior for reading data from actors

</details>

<details>

<summary>Outputs</summary>

* Modified point data with attributes populated or updated based on actor data processing
* Optionally creates components on actors if component spawning is enabled in the Packer

</details>

#### Configuration

<details>

<summary><strong>ActorReferenceAttribute</strong><br><em>Actor reference</em></summary>

The name of the attribute that contains actor references to be processed.

</details>

<details>

<summary><strong>Packer</strong><br><em>Builder instance.</em></summary>

A custom blueprint class that defines how to read and process data from actors. This subnode must implement methods like `Initialize` and `ProcessEntry`.

</details>

<details>

<summary><strong>bOmitUnresolvedEntries</strong><br></summary>

When enabled, points with unresolved actor references (null actors) are skipped during processing.

</details>

<details>

<summary><strong>bOmitEmptyOutputs</strong><br></summary>

When enabled, points that result in no output data after processing are omitted from the final results.

</details>

<details>

<summary><strong>bTrackActors</strong><br><em>When enabled, will track referenced actors and trigger a graph regeneration when their properties change.</em></summary>

When enabled, the system monitors referenced actors for changes. If any tracked actor's properties are modified, the PCG graph will automatically regenerate to reflect those updates.

</details>

<details>

<summary><strong>bQuietUninitializedPackerWarning</strong><br><em>If enabled, will turn off uninitialized packer warning.</em></summary>

When enabled, suppresses warnings about uninitialized packer instances during graph execution.

</details>

#### Usage Example

1. Create a PCG graph with points that have an actor reference attribute
2. Add a Pack Actor Data node and connect your point data to it
3. Create a custom blueprint class inheriting from `UPCGExCustomActorDataPacker`
4. Implement the `Initialize` method to set up default values for attributes
5. Implement the `ProcessEntry` method to read actor properties and populate point attributes
6. Assign your custom packer blueprint to the Packer setting in the Pack Actor Data node
7. Configure other settings like `bOmitUnresolvedEntries` as needed

#### Notes

* The Packer subnode must be properly implemented with both `Initialize` and `ProcessEntry` methods for this node to function.
* Component spawning requires `bExecuteOnMainThread` to be enabled.
* Tracking actors can significantly impact performance if many actors are referenced.
* Ensure that actor references in the point data are valid, or use `bOmitUnresolvedEntries` to skip invalid entries.
