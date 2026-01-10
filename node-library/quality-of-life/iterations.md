---
description: 'In editor :: PCGEx | Iterations'
icon: circle
---

# Iterations

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Generates dummy data objects to represent iterations for loop nodes.

#### How It Works

The Iterations node creates a set of dummy data objects that simulate individual iterations for use in loop processing. It starts by generating a single dummy object of the specified type, then duplicates it based on the number of iterations you define. Each duplicate represents one step in a loop, allowing loop subnodes to process the same operation multiple times with different inputs.

This node bridges static data generation and iterative workflows by providing lightweight placeholders that can be consumed by loop nodes without requiring complex procedural logic or external data sources.

{% hint style="info" %}
Connects to **Loop** nodes or other iteration-aware processing nodes. The output is typically used as input for loop subnodes.
{% endhint %}

#### Configuration

<details>

<summary><strong>Type</strong><br><em>Type of dummy data to generate.</em></summary>

Controls what kind of dummy data object is created for each iteration.

**Values**:

* **Any**: Output dummy iteration data of type Attribute set, using an untyped pin.
* **Attribute Set**: Output dummy iteration data of type Attribute set.
* **Points**: Output dummy iteration data of type Points.
* **Spline**: Output dummy iteration data of type Spline.
* **Texture**: Output dummy iteration data of type Texture.

</details>

<details>

<summary><strong>Iterations</strong><br><em>Number of dummy data objects to generate.</em></summary>

Determines how many copies of the dummy object will be output. Each copy represents one iteration in a loop context.

</details>

<details>

<summary><strong>bOutputUtils</strong><br><em>Output per-iteration params with useful values.</em></summary>

When enabled, the generated dummy objects include additional parameter data that can be useful for debugging or testing purposes. This is less optimized than the standard version but provides more information.

</details>

#### Usage Example

1. Set **Iterations** to 3.
2. Set **Type** to "Points".
3. Connect this node's output to a loop node.
4. The loop will execute three times, with each iteration receiving one of the generated point-based dummy objects.

This setup is useful when you want to repeat an operation a fixed number of times without needing complex data sources or conditions.

#### Notes

* This node is primarily used as a helper in loop structures.
* The dummy data objects are lightweight and do not carry meaningful content, only structure.
* Using **bOutputUtils** can aid debugging but may impact performance slightly.
* When using with loop nodes, ensure the loop subnode expects the correct data type based on the **Type** setting.
