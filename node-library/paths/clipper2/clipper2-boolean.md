---
description: 'In editor :: PCGEx | Clipper2 : Boolean'
icon: circle
---

# Clipper2 : Boolean

Does a Clipper2 Boolean operation.

**How It Works**

> AI-Generated, needs proofreading

* Computes Clipper2 Boolean operations based on specified settings.
* Utilizes provided projection details to configure the operation's spatial context.
* Applies the selected PCGExClipper2BooleanOp and PCGExClipper2FillRule for processing inputs.
* Optionally displays operand pin as a separate pin when "Use Operand Pin" is enabled.

#### Configuration

<details>

<summary><strong>Projection Details</strong> <code>PCGExGeo2DProjectionDetails</code></summary>

Projection settings.

📦 See: Geo2DProjection configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Operation</strong> <code>PCGExClipper2BooleanOp</code></summary>

Controls operation.

**Values:**

* **Intersection**: TBD
* **Union**: TBD
* **Difference**: TBD
* **XOR**: TBD

⚡ PCG Overridable

</details>

<details>

<summary><strong>Fill Rule</strong> <code>PCGExClipper2FillRule</code></summary>

Controls fill rule.

⚡ PCG Overridable

</details>

**Processing**

<details>

<summary><strong>Use Operand Pin</strong> <code>bool</code></summary>

Display operand pin as a separate pin

</details>

***

Source: `Source\PCGExElementsClipper2\Public\Elements\PCGExClipper2Boolean.h`
