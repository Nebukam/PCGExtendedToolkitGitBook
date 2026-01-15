---
description: 'In editor :: PCGEx | Path : Orient'
icon: circle
---

# Orient

Orient paths points

**How It Works**

> AI-Generated, needs proofreading

* The node processes paths by orienting their points based on specified axes and orientation settings.
* Uses the Orient Axis and Up Axis from PCGExAxis to define the direction and vertical reference for each point's orientation.
* Applies an instance-specific orientation defined in PCGExOrientInstancedFactory, which influences how individual instances of path points are oriented.
* Allows for flipping the direction of orientation per-point through filters, overriding the default value set by Flip Direction setting.
* Outputs the oriented paths according to the configuration specified in PCGExOrientUsage.

#### Configuration

<details>

<summary><strong>Orient Axis</strong> <code>PCGExAxis</code></summary>

Controls orient axis.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Up Axis</strong> <code>PCGExAxis</code></summary>

Controls up axis.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Orientation</strong> <code>PCGExOrientInstancedFactory</code> ⚙️</summary>

Instanced pcgexorientinstancedfactory behavior.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Flip Direction</strong> <code>bool</code></summary>

Default value, can be overriden per-point through filters.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Output</strong> <code>PCGExOrientUsage</code></summary>

Controls output.

**Values:**

* **Apply to point**: Applies the orientation transform to the point
* **Output to attribute**: Output the orientation transform to an attribute

⚡ PCG Overridable

</details>

<details>

<summary><strong>Output Attribute</strong> <code>Name</code></summary>

Controls output attribute.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Output Dot</strong> <code>bool</code></summary>

Controls output dot.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Dot Attribute</strong> <code>Name</code></summary>

Whether to output the dot product between prev/next points.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsPaths\Public\Elements\PCGExOrient.h`
