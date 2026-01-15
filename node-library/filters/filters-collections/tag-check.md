---
description: 'In editor :: PCGEx | Data Filter : Tag Check'
icon: circle-dashed
---

# Tag Check

Simple tag check on the input collection.

📌 **Subnode** — Connects to **Filters** pins.

**How It Works**

> AI-Generated, needs proofreading

* The Data Filter : Tag Check node evaluates each item in an input collection based on a specified tag name and match mode.
* It compares the tag associated with each item against a constant tag name value using the selected PCGExStringMatchMode to determine if there is a match.
* In strict mode, the node checks only the prefix of the tag (ignoring any values following a colon), otherwise it considers the entire tag string including potential values.
* If the "Invert" option is enabled, the node outputs items that do not meet the specified criteria; otherwise, it outputs those that do match.
* The filtering process adheres to additional configurations defined in the Filter Config setting.

#### Configuration

<details>

<summary><strong>Tag Name</strong> <code>String</code></summary>

Constant tag name value.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Match</strong> <code>PCGExStringMatchMode</code></summary>

Controls match.

</details>

<details>

<summary><strong>Strict</strong> <code>bool</code></summary>

In strict mode, only check tag prefix and ignore values for tags formatted as `Tag:Value`.

</details>

<details>

<summary><strong>Invert</strong> <code>bool</code></summary>

Invert the result of this filter.

</details>

<details>

<summary><strong>Config</strong> <code>PCGExTagCheckFilterConfig</code></summary>

Filter Config.

📦 See: TagCheckFilter configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tag Name</strong> <code>String</code></summary>

Constant tag name value.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Match</strong> <code>PCGExStringMatchMode</code></summary>

Controls match.

</details>

<details>

<summary><strong>Strict</strong> <code>bool</code></summary>

In strict mode, only check tag prefix and ignore values for tags formatted as `Tag:Value`.

</details>

<details>

<summary><strong>Invert</strong> <code>bool</code></summary>

Invert the result of this filter.

</details>

***

Source: `Source\PCGExFilters\Public\Filters\Collections\PCGExTagCheckFilter.h`
