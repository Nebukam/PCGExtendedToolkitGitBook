---
description: 'In editor :: PCGEx | Heuristics : Attribute'
icon: circle-dashed
---

# HX : Attribute

Read a vtx or edge attribute as an heuristic value.

📌 **Subnode** — Connects to **Heuristics** pins.

**How It Works**

> AI-Generated, needs proofreading

* Reads an attribute value from either vertices or edges based on the setting specified in "Source".
* Uses the selected attribute as a heuristic value for further processing.
* Optionally remaps the input values using "In Min" and "In Max" if these settings are enabled, overriding the default min and max values found on the attribute.

#### Configuration

<details>

<summary><strong>Mode</strong> <code>PCGExAttributeHeuristicInputMode</code></summary>

Specify how to deal with the attribute value

**Values:**

* **Auto Curve**: Automatically sample the curve using normalized value from existing min/max input.
* **Manual Curve**: Sample the curve using normalized value from manual min/max values.
* **Raw**: Use raw attribute as score. Use at your own risks!

</details>

<details>

<summary><strong>Source</strong> <code>PCGExClusterElement</code></summary>

Read the data from either vertices or edges

⚡ PCG Overridable

</details>

<details>

<summary><strong>Attribute</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Attribute to read modifier value from.

⚡ PCG Overridable

</details>

<details>

<summary><strong>In Min</strong> <code>double</code></summary>

If enabled, will use this value as input min remap reference instead of the one found on the attribute.

⚡ PCG Overridable

</details>

<details>

<summary><strong>In Max</strong> <code>double</code></summary>

If enabled, will use this value as input max remap reference instead of the one found on the attribute.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Use Custom Fallback</strong> <code>bool</code></summary>

Controls use custom fallback.

</details>

<details>

<summary><strong>Fallback Value</strong> <code>double</code></summary>

Default weight when no valid internal normalization can be made (e.g, all points have the same values so min == max). If left unset, will use min/max clamped between 0 & 1.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExHeuristicAttributeConfig</code></summary>

Modifier properties

📦 See: HeuristicAttribute configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Mode</strong> <code>PCGExAttributeHeuristicInputMode</code></summary>

Specify how to deal with the attribute value

**Values:**

* **Auto Curve**: Automatically sample the curve using normalized value from existing min/max input.
* **Manual Curve**: Sample the curve using normalized value from manual min/max values.
* **Raw**: Use raw attribute as score. Use at your own risks!

</details>

<details>

<summary><strong>Source</strong> <code>PCGExClusterElement</code></summary>

Read the data from either vertices or edges

⚡ PCG Overridable

</details>

<details>

<summary><strong>Attribute</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Attribute to read modifier value from.

⚡ PCG Overridable

</details>

<details>

<summary><strong>In Min</strong> <code>double</code></summary>

If enabled, will use this value as input min remap reference instead of the one found on the attribute.

⚡ PCG Overridable

</details>

<details>

<summary><strong>In Max</strong> <code>double</code></summary>

If enabled, will use this value as input max remap reference instead of the one found on the attribute.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Use Custom Fallback</strong> <code>bool</code></summary>

Controls use custom fallback.

</details>

<details>

<summary><strong>Fallback Value</strong> <code>double</code></summary>

Default weight when no valid internal normalization can be made (e.g, all points have the same values so min == max). If left unset, will use min/max clamped between 0 & 1.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExHeuristics\Public\Heuristics\PCGExHeuristicAttribute.h`
