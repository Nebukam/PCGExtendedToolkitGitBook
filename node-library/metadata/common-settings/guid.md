---
icon: list-tree
---

# GUID

#### Settings

<details>

<summary><strong>Output Attribute Name</strong> <code>FName</code></summary>

The name of the attribute to write its index to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Output Type</strong> <code>EPCGExGUIDOutputType</code></summary>

Output type.

**Values:**

* **Integer**: ...
* **String**: ...

</details>

<details>

<summary><strong>Format</strong> <code>EPCGExGUIDFormat</code></summary>

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

<summary><strong>Unique Key Input</strong> <code>EPCGExInputValueType</code></summary>

Controls unique key input.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Unique Key (Attr)</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

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

**Hashes**

<details>

<summary><strong>Grid Hash Collision</strong> <code>FVector</code></summary>

Controls grid hash collision.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Position Hash Collision</strong> <code>FVector</code></summary>

Controls position hash collision.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Position Hash Offset</strong> <code>FVector</code></summary>

Controls position hash offset.

⚡ PCG Overridable

</details>

#### Used In

* GetGUID

***

Defined in: `Source\PCGExFoundations\Public\Elements\Utils\PCGExWriteGUID.h`
