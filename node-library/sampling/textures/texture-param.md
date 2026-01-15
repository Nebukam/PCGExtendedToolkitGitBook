---
description: 'In editor :: PCGEx | Texture Param'
icon: circle-dashed
---

# Texture Param

A simple texture parameter definition.

📌 **Subnode** — Connects to **Texture Params** pins.

**How It Works**

> AI-Generated, needs proofreading

* The Texture Param node defines a texture parameter by using the specified Material Parameter Name to identify the texture within materials that require this information.
* It outputs the path of the texture to an attribute named according to the Texture IDAttribute Name setting.
* The node samples the texture and outputs the sampled value to an attribute named as per the Sample Attribute Name, with the data type defined by Output Type.
* Depending on the Selected Output Type, the output will be truncated or sparse based on the components specified in Sampled Channels.

#### Configuration

<details>

<summary><strong>Material Parameter Name</strong> <code>Name</code></summary>

Name of the texture parameter to look for, when used in node that are set up to require this info.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Texture IDAttribute Name</strong> <code>Name</code></summary>

Name of the attribute to output the path to

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExTextureParamConfig</code></summary>

Controls config.

📦 See: TextureParam configuration

⚡ PCG Overridable

</details>

**Sampling**

<details>

<summary><strong>Sample Attribute Name</strong> <code>Name</code></summary>

Name of the attribute to output the sampled value to

⚡ PCG Overridable

</details>

<details>

<summary><strong>Output Type</strong> <code>PCGExTexSampleAttributeType</code></summary>

Type of the attribute to output the sampled value to

**Values:**

* **Auto**: Output type will be driven by selected channels.
* **Float**: Output sample attribute type will be Float
* **Double**: Output sample attribute type will be Double
* **Double**: Output sample attribute type will be Integer
* **Vector4**: Output sample attribute type will be Vector4
* **Vector**: Output sample attribute type will be Vector
* **Vector2**: Output sample attribute type will be Vector2
* **Invalid**

⚡ PCG Overridable

</details>

<details>

<summary><strong>Sampled Channels</strong> <code>uint8</code></summary>

What components will be sampled. Note that output will be truncated or sparse depending on the selected output type.

</details>

<details>

<summary><strong>Scale</strong> <code>double</code></summary>

Apply a scale factor to the output value

⚡ PCG Overridable

</details>

**Texture Array**

<details>

<summary><strong>Texture Index Input</strong> <code>PCGExInputValueType</code></summary>

Resolution input type

</details>

<details>

<summary><strong>Texture Index (Attr)</strong> <code>Name</code></summary>

Texture Index Attribute.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Texture Index</strong> <code>int32</code></summary>

Texture Index Constant.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsSampling\Public\Core\PCGExTexParamFactoryProvider.h`
