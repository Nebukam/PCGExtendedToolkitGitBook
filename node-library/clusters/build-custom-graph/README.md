---
description: 'In editor :: PCGEx | Cluster : Build Custom Graph'
icon: scrubber
---

# Build Custom Graph

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Create clusters using custom blueprint objects.

#### Overview

The **Cluster : Build Custom Graph** subnode allows you to define and generate custom graph-based clusters using blueprint logic. Instead of relying on standard clustering algorithms, this subnode lets you write custom logic in Blueprint to determine how nodes and edges are structured within your clusters. It is particularly useful for creating complex or domain-specific graph structures that don't fit into standard PCG clustering methods.

This subnode connects to the **Builder** input pin of a processing node, which defines how the cluster data is generated and processed. It allows you to define custom behavior for building nodes and edges, setting attributes, and initializing point metadata based on external data or logic.

{% hint style="info" %}
Connects to the **Builder** input pin of a processing node.
{% endhint %}

#### How It Works

This subnode defines a custom graph-building process that runs in a multi-threaded environment. It works by:

1. **Initialization**: The builder is initialized with settings from a custom Blueprint class, which defines how nodes and edges are created.
2. **Graph Building**: For each cluster, the system calls the `BuildGraph` function of the custom settings object to define node relationships and edge connections.
3. **Node Attributes**: The system allows you to initialize or set point attributes for each node in the graph using various data types (integers, floats, vectors, etc.).
4. **Point Updates**: After building the graph, it updates each node's point with its final transform and properties.

The process is executed per cluster, and all operations are thread-safe, meaning that multiple clusters can be built simultaneously without conflicts.

<details>

<summary>Inputs</summary>

* **Builder** (Subnode): A custom Blueprint class that defines how to build the graph. It handles node creation, edge definition, and attribute setting.
* **Point Data** (Optional): Only required when using `ActorReferences` mode for fetching actors from point data.

</details>

<details>

<summary>Outputs</summary>

* **Cluster Output**: A set of clustered points representing nodes in the graph, with edges defined between them.
* **Graph Settings**: Custom settings objects that define how each cluster is built and what attributes are assigned to its nodes.

</details>

#### Configuration

<details>

<summary><strong>Mode</strong><br><em>Actor fetching mode. These actors will be forwarded to the builder so it can fetch components and data from there during its initialization.</em></summary>

Controls how actors are retrieved for use in the graph-building process.

**Values**:

* **Owner**: Uses the PCG component's owner as the source of data.
* **Actor References**: Fetches actor references from a point attribute specified by `ActorReferenceAttribute`.

</details>

<details>

<summary><strong>ActorReferenceAttribute</strong><br><em>Actor reference</em></summary>

The name of the point attribute that contains actor references when using the `ActorReferences` mode.

</details>

<details>

<summary><strong>Builder</strong><br><em>Builder instance.</em></summary>

A Blueprint class that defines how to build each graph. This subnode must be a subclass of `UPCGExCustomGraphBuilder`.

</details>

<details>

<summary><strong>GraphBuilderDetails</strong><br><em>Graph &#x26; Edges output properties</em></summary>

Settings that control how the resulting graph is structured and output, such as edge types, node count, and output attributes.

</details>

#### Usage Example

1. Create a new Blueprint class inheriting from `UPCGExCustomGraphBuilder`.
2. Implement the `Initialize` and `BuildGraph` functions to define how your clusters are built.
3. Add this subnode to a **Cluster : Build Custom Graph** node in your PCG graph.
4. Assign your custom builder class to the **Builder** input.
5. Configure the **Mode** to either use the PCG component owner or point data with actor references.
6. Run the graph to generate custom clusters based on your logic.

#### Notes

* The `BuildGraph` function is executed in a multi-threaded context, so avoid using non-thread-safe operations.
* Attribute initialization must be done during the `InitializeSettings` phase for deterministic behavior.
* This subnode is best used when you need fine-grained control over how clusters are structured and what data they contain.
