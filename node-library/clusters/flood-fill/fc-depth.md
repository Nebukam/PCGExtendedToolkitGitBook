---
description: 'In editor :: PCGEx | Fill Control : Depth'
icon: circle-dashed
---

# FC : Depth

Control fill based on diffusion depth.

📌 **Subnode** — Connects to **Fill Controls** pins.

**How It Works**

> AI-Generated, needs proofreading

* The Fill Control : Depth node adjusts fill levels based on diffusion depth by utilizing input parameters to define maximum depth limits.
* It accepts configuration settings through the Config parameter and can receive the Max Depth value either from an attribute (Max Depth (Attr)) or a constant value (Max Depth).
* The node uses the Max Depth Input setting, of type PCGExInputValueType, to determine whether the max depth is sourced from an attribute or set as a constant.
* Processing involves comparing the current diffusion depth against the defined maximum depth to control how areas are filled according to the specified configuration settings.

#### Configuration

<details>

<summary><strong>Max Depth Input</strong> <code>PCGExInputValueType</code></summary>

Controls max depth input.

</details>

<details>

<summary><strong>Max Depth (Attr)</strong> <code>Name</code></summary>

Max depth Attribute

⚡ PCG Overridable

</details>

<details>

<summary><strong>Max Depth</strong> <code>int32</code></summary>

Max depth Constant

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExFillControlConfigDepth</code></summary>

Control Config.

📦 See: FillControlConfigDepth configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Max Depth Input</strong> <code>PCGExInputValueType</code></summary>

Controls max depth input.

</details>

<details>

<summary><strong>Max Depth (Attr)</strong> <code>Name</code></summary>

Max depth Attribute

⚡ PCG Overridable

</details>

<details>

<summary><strong>Max Depth</strong> <code>int32</code></summary>

Max depth Constant

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsClusters\Public\Elements\FloodFill\FillControls\PCGExFillControlDepth.h`
