---
description: 'In editor :: PCGEx | Get GUID'
icon: circle
---

# Get GUID

Get a single GUID from a specific point index, same as GetGUID would compute it given the same set of parameters.

**How It Works**

> AI-Generated, needs proofreading

* The node retrieves a single Globally Unique Identifier (GUID) based on the specified point index.
* It uses the provided "Index" setting to determine which specific point's GUID to retrieve.
* The "Index Safety" setting, defined by PCGExIndexSafety, ensures that the operation handles invalid or out-of-range indices according to predefined safety rules.
* The node operates with a configuration ("Config") that may influence how the GUID is generated or retrieved, though specifics of this configuration are not detailed here.

#### Configuration

<details>

<summary><strong>Index</strong> <code>int32</code></summary>

Point Index

⚡ PCG Overridable

</details>

<details>

<summary><strong>Index Safety</strong> <code>PCGExIndexSafety</code></summary>

Controls index safety.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExGUIDDetails</code></summary>

Config

📦 See: GUID configuration

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExFoundations\Public\Elements\Utils\PCGExGetGUID.h`
