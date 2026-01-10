---
description: 'In editor :: PCGEx | Create Shapes'
icon: scrubber
---

# Create Shapes

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Creates geometric shapes from input seed points using shape builder subnodes.

#### Overview

The Create Shapes node generates geometric forms—like circles, polygons, or custom outlines—from a set of seed points. Each seed point acts as the origin for a shape, which is defined by one or more shape builder subnodes connected to the node. You can control how many points each shape contains and filter out shapes based on size.

This node is useful when you want to procedurally generate layout elements such as rooms, zones, or decorative patterns from a set of placement points. It supports multiple output modes that determine how the generated shapes are organized and written back into your data.

{% hint style="info" %}
Connects to **Shape Builder** subnodes (e.g., Circle, Polygon) to define shape types.
{% endhint %}

#### How It Works

The node processes input seed points one by one. For each point, it uses the connected shape builder subnodes to generate a geometric shape. Each shape is built using the parameters defined in its respective subnode.

After building all shapes, the node applies pruning rules to filter out shapes that do not meet specified point count thresholds. If enabled, it also writes a ShapeID attribute to each point to identify which shape it belongs to.

The output mode determines how the resulting shapes are organized:

* **Per Dataset**: All shapes are merged into one dataset.
* **Per Seed**: Each seed point generates its own output with its associated shape.
* **Per Shape**: Each individual shape is written to a separate output.

#### Inputs

* **Points Input** (default): The seed points that define where shapes will be generated.
* **Shape Builder Subnodes**: One or more subnodes that define how each shape should be constructed (e.g., circle, polygon).

#### Outputs

* **Per Dataset Mode**: A single output containing all generated shapes.
* **Per Seed Mode**: One output per seed point with its associated shape.
* **Per Shape Mode**: Multiple outputs, one for each individual shape.

#### Configuration

<details>

<summary><strong>Write Shape ID</strong><br><em>Should point have a ShapeID attribute.</em></summary>

When enabled, the node writes an integer attribute to each input point indicating which shape it belongs to. This is useful for identifying and organizing points later in your graph.

</details>

<details>

<summary><strong>Shape ID Attribute Name</strong><br><em>Name of the 'int32' attribute to write the ShapeId to.</em></summary>

Defines the name of the attribute that stores the shape ID. Defaults to "ShapeId".

</details>

<details>

<summary><strong>Write to points</strong><br><em>Force writing to points, otherwise defaults to @Data (even if unspecified).</em></summary>

When enabled, forces output to be written directly to the input point data. Otherwise, it writes to a separate dataset unless explicitly configured otherwise.

</details>

<details>

<summary><strong>Remove Below</strong><br><em>Don't output shape if they have less points than a specified amount.</em></summary>

When enabled, shapes with fewer points than the minimum threshold are discarded.

</details>

<details>

<summary><strong>Min Point Count</strong><br><em>Discarded if point count is less than</em></summary>

Sets the minimum number of points required for a shape to be output. For example, setting this to 3 will discard any shape with fewer than 3 points.

</details>

<details>

<summary><strong>Remove Above</strong><br><em>Don't output shape if they have more points than a specified amount.</em></summary>

When enabled, shapes with more points than the maximum threshold are discarded.

</details>

<details>

<summary><strong>Max Point Count</strong><br><em>Discarded if point count is more than</em></summary>

Sets the maximum number of points allowed in a shape. For example, setting this to 100 will discard any shape with more than 100 points.

</details>

#### Usage Example

You have a set of seed points representing building locations and want to generate circular zones around each point. Connect a Circle Shape Builder subnode to the Create Shapes node. Set the "Min Point Count" to 5 to ensure only reasonably detailed circles are generated, and enable "Write Shape ID" to track which zone each point belongs to.

#### Notes

* The number of points in each shape is determined by the settings in the connected shape builder subnodes.
* Pruning helps reduce noise or overly small shapes that may not be useful for downstream processing.
* Output mode affects how many outputs are created and how data is organized—choose based on your workflow needs.
