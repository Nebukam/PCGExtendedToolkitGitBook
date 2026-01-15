---
description: 'In editor :: PCGEx | Data Filter : Attribute Check'
icon: circle-dashed
---

# Attribute Check

Simple attribute existence check.

📌 **Subnode** — Connects to **Filters** pins.

**How It Works**

> AI-Generated, needs proofreading

* The node checks for the existence of an attribute named as specified in the "Attribute Name" setting within the domain defined by "Domain".
* It uses the "Match" setting to determine how strictly it evaluates the presence or value of the attribute.
* The result of this check is a boolean output, indicating whether the attribute exists and matches according to the criteria set by "Do Check Type".

#### Configuration

<details>

<summary><strong>Attribute Name</strong> <code>String</code></summary>

Constant tag name value.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Domain</strong> <code>PCGExAttribtueDomainCheck</code></summary>

Controls domain.

**Values:**

* **Any**: Ignore domain check
* **Data**: Check data domain
* **Elements**: Check elements domain
* **Match**

</details>

<details>

<summary><strong>Match</strong> <code>PCGExStringMatchMode</code></summary>

Controls match.

</details>

<details>

<summary><strong>Do Check Type</strong> <code>bool</code></summary>

Controls do check type.

</details>

<details>

<summary><strong>Type</strong> <code>PCGMetadataTypes</code></summary>

Controls type.

</details>

<details>

<summary><strong>Invert</strong> <code>bool</code></summary>

Invert the result of this filter.

</details>

<details>

<summary><strong>Config</strong> <code>PCGExAttributeCheckFilterConfig</code></summary>

Filter Config.

📦 See: AttributeCheckFilter configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Attribute Name</strong> <code>String</code></summary>

Constant tag name value.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Domain</strong> <code>PCGExAttribtueDomainCheck</code></summary>

Controls domain.

**Values:**

* **Any**: Ignore domain check
* **Data**: Check data domain
* **Elements**: Check elements domain
* **Match**

</details>

<details>

<summary><strong>Match</strong> <code>PCGExStringMatchMode</code></summary>

Controls match.

</details>

<details>

<summary><strong>Do Check Type</strong> <code>bool</code></summary>

Controls do check type.

</details>

<details>

<summary><strong>Type</strong> <code>PCGMetadataTypes</code></summary>

Controls type.

</details>

<details>

<summary><strong>Invert</strong> <code>bool</code></summary>

Invert the result of this filter.

</details>

***

Source: `Source\PCGExFilters\Public\Filters\Collections\PCGExAttributeCheckFilter.h`
