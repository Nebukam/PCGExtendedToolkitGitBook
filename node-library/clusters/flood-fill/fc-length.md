---
description: 'In editor :: PCGEx | Fill Control : Length'
icon: circle-dashed
---

# FC : Length

Stop fill after a certain number of vtx have been captured.

📌 **Subnode** — Connects to **Fill Controls** pins.

**How It Works**

> AI-Generated, needs proofreading

* The Fill Control : Length node stops the fill process once a specified number of vertices have been captured.
* It uses either path length (accumulated distance from the seed to the evaluated candidate) or regular edge length based on the setting for "Use Path Length".
* The maximum length threshold is determined by inputs such as Max Length Input, Max Length Attribute, or Max Length Constant, depending on the configuration specified in Config: Control Config.
* Once the accumulated path length or edge count reaches the defined maximum length, the node halts further vertex capture and fill operations.

#### Configuration

<details>

<summary><strong>Use Path Length</strong> <code>bool</code></summary>

Path length is the accumulated length from the seed to the evaluated candidate, while regular length is the length of the edge.

</details>

<details>

<summary><strong>Max Length Input</strong> <code>PCGExInputValueType</code></summary>

Controls max length input.

</details>

<details>

<summary><strong>Max Length (Attr)</strong> <code>Name</code></summary>

Max Length Attribute

⚡ PCG Overridable

</details>

<details>

<summary><strong>Max Length</strong> <code>double</code></summary>

Max Length Constant

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExFillControlConfigLength</code></summary>

Control Config.

📦 See: FillControlConfigLength configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Use Path Length</strong> <code>bool</code></summary>

Path length is the accumulated length from the seed to the evaluated candidate, while regular length is the length of the edge.

</details>

<details>

<summary><strong>Max Length Input</strong> <code>PCGExInputValueType</code></summary>

Controls max length input.

</details>

<details>

<summary><strong>Max Length (Attr)</strong> <code>Name</code></summary>

Max Length Attribute

⚡ PCG Overridable

</details>

<details>

<summary><strong>Max Length</strong> <code>double</code></summary>

Max Length Constant

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsClusters\Public\Elements\FloodFill\FillControls\PCGExFillControlLength.h`
