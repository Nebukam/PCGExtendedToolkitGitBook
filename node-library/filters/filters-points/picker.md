---
description: 'In editor :: PCGEx | Filter : Picker'
icon: circle-dashed
---

# Picker

Creates a filter definition that check if the point or collection index is picked, using pickers.

📌 **Subnode** — Connects to **Filters** pins.

**How It Works**

> AI-Generated, needs proofreading

* The node evaluates whether to include or exclude elements based on their index using specified pickers.
* When "Force Per Point Evaluation" is enabled, the node ensures individual evaluation for each point within collections.
* If "Invert" is selected, the filter's inclusion criteria are inverted, meaning picked indices will be excluded and vice versa.
* The "Config" setting allows customization of the filter definition to specify how picking occurs.

#### Configuration

<details>

<summary><strong>Force Per Point Evaluation</strong> <code>bool</code></summary>

If enabled, will force per-point evaluation when used in collections only.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Invert</strong> <code>bool</code></summary>

Invert the filter

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExPickerFilterConfig</code></summary>

Filter Config.

📦 See: PickerFilter configuration

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExFilters\Public\Filters\Points\PCGExPickerFilter.h`
