---
description: 'In editor :: PCGEx | Texture Param'
icon: circle-dashed
---

# Texture Param

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Defines a texture parameter for sampling in procedural content generation.

#### How It Works

This subnode sets up a configuration for reading texture data from a material. It determines which texture parameter to sample, where to store the resulting values, and how to interpret the texture's color channels. When connected to a sampler node, it tells that node which texture to read from and how to process the sampled data.

The subnode works by defining a sampling setup that includes:

1. The name of the material parameter that references the texture
2. Which attribute will receive the sampled values
3. Which color channels (red, green, blue, alpha) to extract
4. How to format the output data (as a single value or vector)
5. Any scaling to apply to the final result

This configuration can be reused across multiple sampler nodes in your graph, making it easy to maintain consistent texture sampling behavior throughout your procedural setup.

#### Configuration

<details>

<summary><strong>Material Parameter Name</strong><br><em>Name of the texture parameter to look for, when used in nodes that are set up to require this info.</em></summary>

The name of the material parameter that references the texture to be sampled. This should match a parameter defined in your material.

</details>

<details>

<summary><strong>Texture ID Attribute Name</strong><br><em>Name of the attribute to output the path to</em></summary>

The name of the attribute where the texture identifier or path will be stored. This is typically used for tracking which texture was sampled.

</details>

<details>

<summary><strong>Sample Attribute Name</strong><br><em>Name of the attribute to output the sampled value to</em></summary>

The name of the attribute that will contain the result of the texture sampling operation.

</details>

<details>

<summary><strong>Output Type</strong><br><em>Type of the attribute to output the sampled value to</em></summary>

Controls how the sampled data is formatted in the output attribute:

* **Auto**: Automatically selects the appropriate type based on the number of channels selected.
* **Float**: Single scalar value (e.g., average of selected channels).
* **Double**: Double precision scalar value.
* **Integer**: Integer value.
* **Vector4**: Full RGBA vector.
* **Vector**: RGB vector (no alpha).
* **Vector2**: XY vector.

</details>

<details>

<summary><strong>Sampled Channels</strong><br><em>What components will be sampled. Note that output will be truncated or sparse depending on the selected output type.</em></summary>

Select which color channels to sample from the texture:

* **R**: Red channel
* **G**: Green channel
* **B**: Blue channel
* **A**: Alpha channel
* **RGB**: All RGB channels (excludes alpha)
* **RGBA**: All four channels

The output type will determine how many channels are actually used in the final attribute.

</details>

<details>

<summary><strong>Scale</strong><br><em>Apply a scale factor to the output value</em></summary>

A multiplier applied to the sampled texture values before they're written to the output attribute. This allows you to adjust the intensity or magnitude of the sampled data.

</details>

<details>

<summary><strong>Texture Index Input</strong><br><em>Resolution input type</em></summary>

Controls how the index of the texture in an array is determined:

* **Constant**: Use a fixed integer value.
* **Attribute**: Read the index from an attribute on the input data.

</details>

<details>

<summary><strong>Texture Index (Attr)</strong><br><em>Texture Index Attribute.</em></summary>

When "Texture Index Input" is set to "Attribute", this specifies which attribute contains the texture index value.

</details>

<details>

<summary><strong>Texture Index</strong><br><em>Texture Index Constant.</em></summary>

When "Texture Index Input" is set to "Constant", this specifies the fixed index of the texture to sample from an array.

</details>
