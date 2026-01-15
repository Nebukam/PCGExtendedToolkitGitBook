---
description: 'In editor :: PCGEx | Reduce Data'
icon: circle
---

# Reduce Data

Reduce @Data domain attribute.

**How It Works**

> AI-Generated, needs proofreading

* The node processes a domain attribute from the input data using settings defined in `PCGExAttributeSourceToTargetDetails`.
* It applies a reduction method specified by `PCGExReduceDataDomainMethod` to modify or condense the selected attribute.
* Outputs the processed result with a type of `bool`, as determined by the Custom Output Type setting, and this output is categorized under `PCGMetadataTypes`.
* If multiple outputs are generated, they are concatenated using the string defined in Join Delimiter.

#### Configuration

<details>

<summary><strong>Attributes</strong> <code>PCGExAttributeSourceToTargetDetails</code></summary>

Controls attributes.

📦 See: AttributeSourceToTarget configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Method</strong> <code>PCGExReduceDataDomainMethod</code></summary>

Controls method.

**Values:**

* **Min**
* **Max**
* **Sum**
* **Average**
* **Join**
* **Hash**: Hashed in order of inputs
* **Unsigned Hash**

⚡ PCG Overridable

</details>

<details>

<summary><strong>Custom Output Type</strong> <code>bool</code></summary>

Controls custom output type.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Output Type</strong> <code>PCGMetadataTypes</code></summary>

Controls output type.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Join Delimiter</strong> <code>String</code></summary>

Controls join delimiter.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsMeta\Public\Elements\PCGExReduceDataAttribute.h`
