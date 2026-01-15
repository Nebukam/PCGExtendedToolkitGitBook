---
description: 'In editor :: PCGEx | Match by Index'
icon: circle-dashed
---

# Index

Match by index

📌 **Subnode** — Connects to **Match Rules** pins.

**How It Works**

> AI-Generated, needs proofreading

* The node reads an attribute specified by "Source" from candidates within the @Data domain.
* It uses the value of the "Index Attribute" to determine which index in the source data to match against.
* The "Index Safety" setting determines how the node handles cases where the index might be out of bounds or invalid.
* Configuration settings under "Config" define additional rules that govern the matching process.

#### Configuration

<details>

<summary><strong>Source</strong> <code>PCGExMatchByIndexSource</code></summary>

The attribute to read on the candidates (the data that's not used as target). Only support @Data domain, and will only try to read from there.

**Values:**

* **Target**: Reads the specific index value on the target and compares it against the index of the input candidate
* **Candidate**: Reads the specific index value on the input candidate and compares it against the index of the target

⚡ PCG Overridable

</details>

<details>

<summary><strong>Index Attribute</strong> <code>PCGAttributePropertyInputSelector</code></summary>

The attribute to read on the candidates (the data that's not used as target). Only support @Data domain, and will only try to read from there.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Index Safety</strong> <code>PCGExIndexSafety</code></summary>

Controls index safety.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExMatchByIndexConfig</code></summary>

Rules properties

📦 See: MatchByIndex configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Source</strong> <code>PCGExMatchByIndexSource</code></summary>

The attribute to read on the candidates (the data that's not used as target). Only support @Data domain, and will only try to read from there.

**Values:**

* **Target**: Reads the specific index value on the target and compares it against the index of the input candidate
* **Candidate**: Reads the specific index value on the input candidate and compares it against the index of the target

⚡ PCG Overridable

</details>

<details>

<summary><strong>Index Attribute</strong> <code>PCGAttributePropertyInputSelector</code></summary>

The attribute to read on the candidates (the data that's not used as target). Only support @Data domain, and will only try to read from there.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Index Safety</strong> <code>PCGExIndexSafety</code></summary>

Controls index safety.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExMatching\Public\Matching\PCGExMatchByIndex.h`
