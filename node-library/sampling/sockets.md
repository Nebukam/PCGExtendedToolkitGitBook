---
description: 'In editor :: PCGEx | Sample : Sockets'
icon: circle
---

# Sockets

Parse static mesh paths and output sockets as points.

**How It Works**

> AI-Generated, needs proofreading

* The node identifies static mesh paths based on the specified asset type and attribute or constant static mesh provided in the settings.
* It parses these identified static mesh paths to locate and extract socket information embedded within the meshes.
* The extracted socket details are then formatted according to PCGExSocketOutputDetails specifications and output as points.

#### Configuration

<details>

<summary><strong>Asset Type</strong> <code>PCGExInputValueType</code></summary>

How the asset gets selected

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Asset (Attr)</strong> <code>Name</code></summary>

The name of the attribute to read asset path from.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Asset</strong> <code>StaticMesh</code></summary>

Constant static mesh .

⚡ PCG Overridable

</details>

<details>

<summary><strong>Output Socket Details</strong> <code>PCGExSocketOutputDetails</code></summary>

Controls output socket details.

📦 See: SocketOutput configuration

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsSampling\Public\Elements\PCGExSampleSockets.h`
