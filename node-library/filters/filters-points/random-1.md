---
description: 'In editor :: PCGEx | Filter : Random (Ratio)'
icon: circle-dashed
---

# Random (Ratio)

Filter using a random value.

📌 **Subnode** — Connects to **Filters** pins.

**How It Works**

> AI-Generated, needs proofreading

* The node evaluates input data using a random ratio determined by `PCGExRandomRatioDetails`.
* It applies the filter configuration specified in `Filter Config.` to decide which inputs pass through based on the random value.
* An optional inversion of the filtering result can be toggled, though the specific behavior for "TBD" (To Be Determined) is not defined.

#### Settings

<details>

<summary><strong>Base Seed</strong> <code>FPCGExInputShorthandSelectorInteger32</code></summary>

Type of seed input

⚡ PCG Overridable

</details>

<details>

<summary><strong>Units</strong> <code>EPCGExMeanMeasure</code></summary>

Controls units.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Amount (Relative)</strong> <code>FPCGExInputShorthandSelectorDouble01</code></summary>

Amount (relative)

⚡ PCG Overridable

</details>

<details>

<summary><strong>Amount (Fixed)</strong> <code>FPCGExInputShorthandSelectorInteger32Abs</code></summary>

Amount (fixed)

⚡ PCG Overridable

</details>

<details>

<summary><strong>Do Clamp Min</strong> <code>bool</code></summary>

Controls do clamp min.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Clamp Min</strong> <code>FPCGExInputShorthandSelectorInteger32Abs</code></summary>

Min Amount (fixed)

⚡ PCG Overridable

</details>

<details>

<summary><strong>Do Clamp Max</strong> <code>bool</code></summary>

Controls do clamp max.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Clamp Max</strong> <code>FPCGExInputShorthandSelectorInteger32Abs</code></summary>

Max Amount (fixed)

⚡ PCG Overridable

</details>

#### Used In

* ClusterCentrality
* RandomRatioFilter

***

Defined in: `Source\PCGExCore\Public\Details\PCGExDetailsNoise.h`

#### Configuration

<details>

<summary><strong>Random</strong> <code>PCGExRandomRatioDetails</code></summary>

Controls random.

📦 See: RandomRatio configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Invert Result</strong> <code>bool</code></summary>

TBD

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExRandomRatioFilterConfig</code></summary>

Filter Config.

📦 See: RandomRatioFilter configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Random</strong> <code>PCGExRandomRatioDetails</code></summary>

Controls random.

📦 See: RandomRatio configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Invert Result</strong> <code>bool</code></summary>

TBD

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExFilters\Public\Filters\Points\PCGExRandomRatioFilter.h`
