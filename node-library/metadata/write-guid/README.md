---
description: 'In editor :: PCGEx | Write GUID'
icon: circle
---

# Write GUID

Write a GUID on the point.

**How It Works**

> AI-Generated, needs proofreading

* The node generates a Globally Unique Identifier (GUID) for each point processed.
* It writes this GUID to an attribute on the point, with the name specified by the "Output Attribute Name" setting.
* The format and type of the output (e.g., string or integer representing the TypeHash of the GUID) are determined by the settings "Format" and "Output Type".
* Uniqueness of the generated GUIDs is controlled based on the configuration in the "Uniqueness" setting, which specifies how uniqueness is achieved.
* The node accepts input for influencing the uniqueness through "Unique Key Input", a parameter that can modify how GUIDs are generated or interpreted.

#### Configuration

<details>

<summary><strong>Output Attribute Name</strong> <code>Name</code></summary>

The name of the attribute to write its index to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Output Type</strong> <code>PCGExGUIDOutputType</code></summary>

Output type.

**Values:**

* **Integer**: ...
* **String**: ...

</details>

<details>

<summary><strong>Format</strong> <code>PCGExGUIDFormat</code></summary>

Output format. Still relevant for integer, as the integer value is the TypeHash of the GUID String.

**Values:**

* **Digits**: 32 digits. For example: `00000000000000000000000000000000`
* **Digits Lower**
* **Digits With Hyphens**
* **Digits With Hyphens Lower**

</details>

<details>

<summary><strong>Uniqueness</strong> <code>uint8</code></summary>

What components are used for Uniqueness.

</details>

<details>

<summary><strong>Unique Key Input</strong> <code>PCGExInputValueType</code></summary>

Controls unique key input.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Unique Key (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

A base value for the GUID. Treat it like a seed.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Unique Key</strong> <code>int32</code></summary>

A base value for the GUID. Treat it like a seed.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Allow Interpolation</strong> <code>bool</code></summary>

Whether the created attribute allows interpolation or not.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExGUIDDetails</code></summary>

Config

📦 See: [GUID configuration](guid-config.md)

⚡ PCG Overridable

</details>

**Hashes**

<details>

<summary><strong>Grid Hash Collision</strong> <code>Vector</code></summary>

Controls grid hash collision.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Position Hash Collision</strong> <code>Vector</code></summary>

Controls position hash collision.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Position Hash Offset</strong> <code>Vector</code></summary>

Controls position hash offset.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExFoundations\Public\Elements\Utils\PCGExWriteGUID.h`
