---
description: 'In editor :: PCGEx | Path : Slide'
icon: circle
---

# Slide

Slide points of a path along the path, either toward the next or previous point

**How It Works**

> AI-Generated, needs proofreading

* The node processes a path by adjusting the position of its points based on specified settings.
* Depending on the "Mode" setting, the node either slides points along the path towards the next or previous point, or restores their original positions.
* The direction and amount of sliding are determined by the "Direction", "Amount Measure", "Slide Amount Input", and "Slide Amount (Attr)" parameters, where "Discrete" measures actual distance and "Relative" uses a percentage of segment length.

#### Configuration

<details>

<summary><strong>Mode</strong> <code>PCGExSlideMode</code></summary>

Whether to slide or restore position

**Values:**

* **Slide**: Slide points and optional store the original position to an attribute
* **Restore**: Restore the original position from an attribute and deletes it.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Direction</strong> <code>PCGExSlideDirection</code></summary>

Controls direction.

**Values:**

* **Next**: Slide toward next point
* **Previous**: Slide toward previous point

⚡ PCG Overridable

</details>

<details>

<summary><strong>Amount Measure</strong> <code>PCGExMeanMeasure</code></summary>

Discrete means actual distance, relative means a percentage of the segment length

⚡ PCG Overridable

</details>

<details>

<summary><strong>Slide Amount Input</strong> <code>PCGExInputValueType</code></summary>

Controls slide amount input.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Slide Amount (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Slide amount.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Slide Amount</strong> <code>double</code></summary>

Slide amount.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Old Position</strong> <code>bool</code></summary>

Whether to store the old position

⚡ PCG Overridable

</details>

<details>

<summary><strong>Restore Position Attribute Name</strong> <code>Name</code></summary>

Attribute to write to or restore from

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsPaths\Public\Elements\PCGExPathSlide.h`
