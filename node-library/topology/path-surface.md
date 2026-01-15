---
description: 'In editor :: PCGEx | Topology : Path Surface'
icon: circle
---

# Path Surface

{% hint style="success" %}
Consider the more robust [clipper2-triangulate.md](clipper2-triangulate.md "mention")
{% endhint %}

Create a path surface topology

**How It Works**

> AI-Generated, needs proofreading

* The Topology : Path Surface node generates a path surface topology based on input parameters.
* It utilizes specified settings within the Topology section to define characteristics of the generated surface.
* Certain settings are disregarded depending on the selected output mode, affecting the final topology output.

#### Configuration

<details>

<summary><strong>Topology</strong> <code>PCGExTopologyDetails</code></summary>

Topology settings. Some settings will be ignored based on selected output mode.

📦 See: Topology configuration

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsTopology\Public\Elements\PCGExTopologyPathSurface.h`
