---
description: 'In editor :: PCGEx | Cluster : Build Custom Graph'
icon: scrubber
---

# Build Custom Graph

{% hint style="info" %}
### AI-generated page -- to be reviewed

While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Create clusters using custom blueprint objects.

### Overview

This node allows you to generate custom graph-based clusters by defining your own graph structure through blueprint logic. Instead of using standard clustering algorithms, you define the relationships between points manually in a custom graph builder. This gives you complete control over how nodes are connected and how the resulting cluster is structured.

The node works by creating one or more graph settings objects that define individual graph structures. Each graph setting object can be configured to build its own unique cluster based on your custom logic. The builder receives input actors and processes them to generate point-based graphs with defined connections.

{% hint style="info" %}
This node requires a custom blueprint class derived from "Custom Graph Builder" to function. You must create and assign this builder to define how your clusters are built.
{% endhint %}

<details>

<summary>Inputs</summary>

* Points: Input point data that will be used as cluster nodes
* Actors (when using Actor References mode): Input actors with reference attributes

</details>

<details>

<summary>Outputs</summary>

* Vertices: Point data representing the graph nodes
* Edges: Line data representing connections between nodes

</details>

### Properties Overview

Settings for controlling how custom graphs are built from point data.

***

#### Data

Controls how input actors are fetched and processed.

**Mode**

_Controls how input actors are sourced._

* When set to **Owner**, the PCG component's owner actor is used as input
* When set to **Actor References**, points must contain an attribute with actor references

**Values**:

* **Owner**: Uses the PCG component owner actor
* **Actor References**: Uses point data containing actor reference attributes

**Actor Reference Attribute**

_The name of the point attribute that contains actor references._

* This attribute should contain valid actor references when using "Actor References" mode
* Must be a valid attribute name in your input point data

***

#### Result

Controls how graph results are handled and output.

**Graph Builder Details**

_Configures how the generated graphs are structured._

* Controls edge creation, node attributes, and graph properties
* Defines how points and edges are connected in the final output

***

#### Inputs

Controls processing behavior for the graph building process.

**Do Edge Attribute Step**

_When enabled, processes edge attributes after graph construction._

* Allows you to set additional attributes on edges after they're created
* Useful for adding metadata or properties to connections between nodes

***

#### Outputs

Controls how warnings and errors are handled during execution.

**Quiet Unprocessed Settings Warning**

_When enabled, suppresses warnings about unprocessed graph settings._

* Prevents warning messages when some graph settings aren't fully processed
* Useful when you expect some settings to be skipped intentionally

**Quiet Failed Build Graph Warning**

_When enabled, suppresses warnings when graph building fails._

* Prevents warning messages when individual graph building operations fail
* Useful for handling expected failures gracefully

***

#### Warnings and Errors

Controls error reporting behavior.

**Quiet Unprocessed Settings Warning**

_When enabled, suppresses warnings about unprocessed graph settings._

* Prevents warning messages when some graph settings aren't fully processed
* Useful when you expect some settings to be skipped intentionally

**Quiet Failed Build Graph Warning**

_When enabled, suppresses warnings when graph building fails._

* Prevents warning messages when individual graph building operations fail
* Useful for handling expected failures gracefully

### Notes

* This node requires a custom blueprint class derived from "Custom Graph Builder" to function properly
* The builder must implement the initialization and graph building logic in Blueprint
* You can create multiple graph settings to generate multiple independent clusters
* Edge attributes are only processed when "Do Edge Attribute Step" is enabled
* When using "Actor References" mode, make sure your point data contains valid actor references
* Graph settings are built in a multi-threaded context, so avoid modifying shared state directly
* Consider performance implications when building large graphs with many nodes and edges
