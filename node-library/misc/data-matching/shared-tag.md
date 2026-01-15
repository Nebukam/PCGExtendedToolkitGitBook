---
icon: circle-dashed
---

# Shared Tag

Match data that share common tags

📌 **Subnode** — Connects to **Match Rules** pins.

**How It Works**

> AI-Generated, needs proofreading

* The node compares data entries based on shared tag names provided either as constant values or read from specified attributes.
* It evaluates whether to perform matching based solely on tag names or also consider the associated tag values depending on the setting of "Do Value Match".
* Configuration rules defined in "Config" properties guide how the matching process operates, influencing outcomes based on predefined criteria.

#### Configuration

<details>

<summary><strong>Tag Name Input</strong> <code>PCGExInputValueType</code></summary>

Type of Tag Name value

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tag Name (Attr)</strong> <code>Name</code></summary>

Attribute to read tag name value from.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tag Name</strong> <code>String</code></summary>

Constant tag name value.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Do Value Match</strong> <code>bool</code></summary>

Whether to do a tag value match or not.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExMatchSharedTagConfig</code></summary>

Rules properties

📦 See: MatchSharedTag configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tag Name Input</strong> <code>PCGExInputValueType</code></summary>

Type of Tag Name value

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tag Name (Attr)</strong> <code>Name</code></summary>

Attribute to read tag name value from.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tag Name</strong> <code>String</code></summary>

Constant tag name value.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Do Value Match</strong> <code>bool</code></summary>

Whether to do a tag value match or not.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExMatching\Public\Matching\PCGExMatchSharedTag.h`
