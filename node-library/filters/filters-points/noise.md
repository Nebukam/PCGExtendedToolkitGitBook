---
icon: circle-dashed
---

# Noise

Compare a value against spatial noise.

📌 **Subnode** — Connects to **Filters** pins.

**How It Works**

> AI-Generated, needs proofreading

* The Filter : Noise node compares an input value against spatial noise generated within its configuration parameters.
* Utilizes the PCGExCompareSelectorDouble setting to define how the comparison between the input value and the spatial noise is executed.
* Outputs a result based on whether the input value meets the criteria set by the comparison operation relative to the spatial noise.

#### Configuration

<details>

<summary><strong>Comparison</strong> <code>PCGExCompareSelectorDouble</code></summary>

Controls comparison.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExNoiseFilterConfig</code></summary>

Filter Config.

📦 See: NoiseFilter configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Comparison</strong> <code>PCGExCompareSelectorDouble</code></summary>

Controls comparison.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsMeta\Public\Filters\Points\PCGExNoiseFilter.h`
