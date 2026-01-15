---
icon: circle-dashed
---

# Probe : Direction

Probe in a given direction.

📌 **Subnode** — Connects to **Probes** pins.

**How It Works**

> AI-Generated, needs proofreading

* The node evaluates input direction based on settings provided.
* If "Use Component Wise Angle" is enabled, it processes angles component-wise; otherwise, it uses standard angle calculations.
* It limits the search to directions within the specified "Max Angle".
* When "Unsigned Check" is true, the node performs unsigned angle checks between vectors.
* The node accepts a direction input of type PCGExInputValueType for its operations.

#### Configuration

<details>

<summary><strong>Use Component Wise Angle</strong> <code>bool</code></summary>

Controls use component wise angle.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Max Angle</strong> <code>double</code></summary>

Max angle to search within.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Max Angles</strong> <code>Rotator</code></summary>

Max angle to search within.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Unsigned Check</strong> <code>bool</code></summary>

Controls unsigned check.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Direction Input</strong> <code>PCGExInputValueType</code></summary>

Controls direction input.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Direction (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Attribute to read the direction from

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Invert</strong> <code>bool</code></summary>

Controls └─ invert.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Direction</strong> <code>Vector</code></summary>

Constant direction

⚡ PCG Overridable

</details>

<details>

<summary><strong>Transform Direction</strong> <code>bool</code></summary>

Transform the direction with the point's

⚡ PCG Overridable

</details>

<details>

<summary><strong>Favor</strong> <code>PCGExProbeDirectionPriorization</code></summary>

What matters more?

**Values:**

* **Best alignment**: Favor the candidates that best align with the direction, as opposed to closest ones.
* **Closest position**: Favor the candidates that are the closest, even if they were not the best aligned.

</details>

<details>

<summary><strong>Do Chained Processing</strong> <code>bool</code></summary>

This probe will sample candidates after the other. Can yield different results.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExProbeConfigDirection</code></summary>

Filter Config.

📦 See: ProbeConfigDirection configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Use Component Wise Angle</strong> <code>bool</code></summary>

Controls use component wise angle.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Max Angle</strong> <code>double</code></summary>

Max angle to search within.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Max Angles</strong> <code>Rotator</code></summary>

Max angle to search within.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Unsigned Check</strong> <code>bool</code></summary>

Controls unsigned check.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Direction Input</strong> <code>PCGExInputValueType</code></summary>

Controls direction input.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Direction (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Attribute to read the direction from

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Invert</strong> <code>bool</code></summary>

Controls └─ invert.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Direction</strong> <code>Vector</code></summary>

Constant direction

⚡ PCG Overridable

</details>

<details>

<summary><strong>Transform Direction</strong> <code>bool</code></summary>

Transform the direction with the point's

⚡ PCG Overridable

</details>

<details>

<summary><strong>Favor</strong> <code>PCGExProbeDirectionPriorization</code></summary>

What matters more?

**Values:**

* **Best alignment**: Favor the candidates that best align with the direction, as opposed to closest ones.
* **Closest position**: Favor the candidates that are the closest, even if they were not the best aligned.

</details>

<details>

<summary><strong>Do Chained Processing</strong> <code>bool</code></summary>

This probe will sample candidates after the other. Can yield different results.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsProbing\Public\Probes\PCGExProbeDirection.h`
