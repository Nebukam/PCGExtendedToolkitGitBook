---
description: 'In editor :: PCGEx | Cluster : Build Custom Graph'
icon: scrubber
---

# Build Custom Graph

Create clusters using custom blueprint objects

**How It Works**

> AI-Generated, needs proofreading

* The Cluster : Build Custom Graph node initializes by referencing an internal index known as Settings Index to identify specific configuration settings for its operation.
* It validates its operational parameters through the Is Valid boolean flag, ensuring that the node can proceed with valid settings and configurations.
* Utilizing PCGExCustomGraphSettings, the node configures itself according to predefined custom graph settings which dictate how clusters are formed.
* The node operates in a specified Actor fetching mode defined by the Mode setting, allowing it to retrieve actors based on this mode for further processing within its initialization phase.
* During initialization, the node uses the Actor Reference Attribute to identify and reference specific actors that will be utilized for fetching components and data necessary for building clusters.

#### Configuration

<details>

<summary><strong>Is Valid</strong> <code>bool</code></summary>

Controls is valid.

</details>

<details>

<summary><strong>Settings</strong> <code>PCGExCustomGraphSettings</code></summary>

Controls settings.

</details>

<details>

<summary><strong>Mode</strong> <code>PCGExCustomGraphActorSourceMode</code></summary>

Actor fetching mode. These actors will be forwarded to the builder so it can fetch components and data from there during its initialization.

**Values:**

* **Owner**: PCG Component owner
* **Actor References**: Point data with an actor reference property.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Actor Reference Attribute</strong> <code>Name</code></summary>

Actor reference

⚡ PCG Overridable

</details>

<details>

<summary><strong>Builder</strong> <code>PCGExCustomGraphBuilder</code> ⚙️</summary>

Builder instance.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Cluster Output Settings</strong> <code>PCGExGraphBuilderDetails</code></summary>

Graph & Edges output properties

📦 See: GraphBuilder configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Quiet Unprocessed Settings Warning</strong> <code>bool</code></summary>

Controls quiet unprocessed settings warning.

</details>

<details>

<summary><strong>Quiet Failed Build Graph Warning</strong> <code>bool</code></summary>

Controls quiet failed build graph warning.

</details>

**Data**

<details>

<summary><strong>Settings Index</strong> <code>int32</code></summary>

Internal index of these settings.

</details>

***

Source: `Source\PCGExElementsClusters\Public\Elements\PCGExBuildCustomGraph.h`
