---
description: 'In editor :: PCGEx | BlendOp'
icon: circle-dashed
---

# Blend Op

Creates a single Blend Operation node, to be used with the Attribute Blender.

**How It Works**

> AI-Generated, needs proofreading

* Computes a blend operation based on input attributes configured within the node.
* Utilizes the Priority setting to determine precedence in blending operations among multiple BlendOp nodes.
* Applies configuration settings from Config to modify how the blending process operates internally.

#### Settings

<details>

<summary><strong>Blend Mode</strong> <code>EPCGExABBlendingType</code></summary>

BlendMode

⚡ PCG Overridable

</details>

<details>

<summary><strong>Operand ASource</strong> <code>EPCGExOperandSource</code></summary>

Operand A Source.

</details>

<details>

<summary><strong>Operand A</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

Operand A.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Use Operand B</strong> <code>bool</code></summary>

Controls use operand b.

</details>

<details>

<summary><strong>Operand B</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

Operand B. If not enabled, will re-use Operand A' input.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Inline</strong> <code>EPCGExOperandSource</code></summary>

Operand B Source.

</details>

<details>

<summary><strong>Output Mode</strong> <code>EPCGExBlendOpOutputMode</code></summary>

Choose where to output the result of the A/B blend

</details>

<details>

<summary><strong>Output To</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

Output to (AB blend).

⚡ PCG Overridable

</details>

<details>

<summary><strong>Reset Value Before Multi Source Blend</strong> <code>bool</code></summary>

If enabled, when a node uses multiple sources for blending, the value will be reset to 0 for some specific BlendModes so as to not account for inherited values. Default is true, as it is usually the most desirable behavior.

</details>

<details>

<summary><strong>Output Type</strong> <code>EPCGExOperandAuthority</code></summary>

Which type should be used for the output value. Only used if the output is not a point property.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Type</strong> <code>EPCGMetadataTypes</code></summary>

Which type should be used for the output value.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Weighting</strong> <code>FPCGExAttributeBlendWeight</code></summary>

Weight settings

⚡ PCG Overridable

</details>

#### Used In

* BlendOpFactoryProvider

***

Defined in: `Source\PCGExBlending\Public\Core\PCGExBlendOpFactory.h`

#### Configuration

<details>

<summary><strong>Priority</strong> <code>int32</code></summary>

Filter Priority.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExAttributeBlendConfig</code></summary>

Config.

📦 See: AttributeBlend configuration

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExBlending\Public\Core\PCGExBlendOpFactoryProvider.h`
