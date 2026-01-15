---
description: 'In editor :: PCGEx | Iterations'
icon: circle
---

# Iterations

A Simple Iterations data generator. It create a single instance of a lightweight dummy data object and adds duplicate entries to the node output to be used as individual iterations for a loop node.

**How It Works**

> AI-Generated, needs proofreading

* The node initializes by creating a single instance of a lightweight dummy data object based on the specified `Type` setting.
* It duplicates this initial data object according to the number set in the `Iterations` parameter and adds each duplicate as an entry into its output list.
* If `Output Utils` is enabled, the node also outputs additional per-iteration parameters containing useful values for each iteration, though this feature reduces optimization compared to when it is not used.

#### Configuration

<details>

<summary><strong>Type</strong> <code>PCGExIterationDataType</code></summary>

Type of data to generate. This is useful if you build subgraphs that are meant to be used as both loops and regular subgraphs, so you can have properly typed pins.

**Values:**

* **Any**: Output dummy iteration data of type Attribute set, using an untyped pin.
* **Attribute Set**: Output dummy iteration data of type Attribute set.
* **Points**: Output dummy iteration data of type Points.
* **Spline**: Output dummy iteration data of type Spline.
* **Texture**: Output dummy iteration data of type Texture.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Iterations</strong> <code>int32</code></summary>

Number of dataset to generate

⚡ PCG Overridable

</details>

<details>

<summary><strong>Output Utils</strong> <code>bool</code></summary>

Output per-iteration params with useful values. Less optimized than the non-value version

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExFoundations\Public\Elements\Utils\PCGExIterations.h`
