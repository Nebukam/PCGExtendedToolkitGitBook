---
icon: sliders
---

# Orient : Look At

Look at next point in path

**How It Works**

> AI-Generated, needs proofreading

* The Next Point node accesses the subsequent point in a predefined path sequence.
* Depending on the Look At setting, the node either directs towards a specified direction vector or a world position indicated by the Look At Attribute.
* The node outputs the information necessary to orient or move towards the next point in the path based on the selected mode and attribute provided.

#### Configuration

<details>

<summary><strong>Look At</strong> <code>PCGExOrientLookAtMode</code></summary>

Look at method

**Values:**

* **Next Point**: Look at next point in path
* **Previous Point**: Look at previous point in path
* **Direction**: Use a local vector attribute as a direction to look at
* **Position**: Use a local vector attribtue as a world position to look at

⚡ PCG Overridable

</details>

<details>

<summary><strong>Look At Attribute</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Vector attribute representing either a direction or world position, depending on selected mode.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsPaths\Public\Elements\Orient\PCGExOrientLookAt.h`
