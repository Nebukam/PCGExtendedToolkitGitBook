---
description: 'In editor :: PCGEx | Topology : Path Surface'
icon: circle
---

# Path Surface

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Create a surface topology from path data.

#### How It Works

This node converts input paths into a 3D mesh surface by creating triangles between path points. It builds a solid geometry that can be used for rendering or further processing in your scene. The node calculates the shape of each path segment, applies edge thickness if enabled, and assigns texture coordinates to support material mapping.

#### Configuration

<details>

<summary><strong>Topology</strong><br><em>Topology settings. Some settings will be ignored based on selected output mode.</em></summary>

Controls how the surface is generated, including UV mapping and edge solidification options.

</details>

{% hint style="info" %}
Connects to \*\*Path Input\*\* pins.
{% endhint %}

#### Usage Example

Use this node to generate a 3D surface from a set of paths, such as creating a road network or a vine-like structure. Connect your path data to the input, configure topology settings for UVs and edge behavior, and output the resulting mesh for visualization or further use in your scene.

#### Notes

This node does not cache its results and must be executed on the main thread. It's best used with relatively small to medium-sized path datasets for optimal performance.
