---
description: 'In editor :: PCGEx | Filter : Random'
icon: circle-dashed
---

# Random

Filter using a random value.

📌 **Subnode** — Connects to **Filters** pins.

**How It Works**

> AI-Generated, needs proofreading

* The Filter : Random node evaluates each point based on a random value generated using a specified seed (TBD).
* It compares this random value against a threshold that can be sourced from an external input or set directly within the node.
* If the "Remap to 0..1" option is enabled, the threshold value gets normalized into a range between 0 and 1 before comparison.
* Points where the random value meets or exceeds the threshold are passed through; otherwise, they are filtered out.

#### Configuration

<details>

<summary><strong>Random Seed</strong> <code>int32</code></summary>

TBD

⚡ PCG Overridable

</details>

<details>

<summary><strong>Threshold Input</strong> <code>PCGExInputValueType</code></summary>

Type of Threshold value source

⚡ PCG Overridable

</details>

<details>

<summary><strong>Threshold (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Pass threshold -- Value is expected to fit within a 0-1 range.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Remap to 0..1</strong> <code>bool</code></summary>

Whether to normalize the threshold internally or not. Enable this if your per-point threshold does not fit within a 0-1 range.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Threshold</strong> <code>double</code></summary>

Pass threshold

⚡ PCG Overridable

</details>

<details>

<summary><strong>Per Point Weight</strong> <code>bool</code></summary>

Controls per point weight.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Weight</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Per-point weight

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Remap to 0..1</strong> <code>bool</code></summary>

Whether to normalize the weights internally or not. Enable this if your per-point weight does not fit within a 0-1 range.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Use Local Curve</strong> <code>bool</code></summary>

Whether to use in-editor curve or an external asset.

</details>

<details>

<summary><strong>Weight Curve</strong> <code>RuntimeFloatCurve</code></summary>

Curve the value will be remapped over.

</details>

<details>

<summary><strong>Weight Curve</strong> <code>CurveFloat</code></summary>

Curve the value will be remapped over.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Weight Curve Lookup</strong> <code>PCGExCurveLookupDetails</code></summary>

Controls weight curve lookup.

📦 See: CurveLookup configuration

</details>

<details>

<summary><strong>Invert Result</strong> <code>bool</code></summary>

TBD

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExRandomFilterConfig</code></summary>

Filter Config.

📦 See: RandomFilter configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Random Seed</strong> <code>int32</code></summary>

TBD

⚡ PCG Overridable

</details>

<details>

<summary><strong>Threshold Input</strong> <code>PCGExInputValueType</code></summary>

Type of Threshold value source

⚡ PCG Overridable

</details>

<details>

<summary><strong>Threshold (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Pass threshold -- Value is expected to fit within a 0-1 range.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Remap to 0..1</strong> <code>bool</code></summary>

Whether to normalize the threshold internally or not. Enable this if your per-point threshold does not fit within a 0-1 range.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Threshold</strong> <code>double</code></summary>

Pass threshold

⚡ PCG Overridable

</details>

<details>

<summary><strong>Per Point Weight</strong> <code>bool</code></summary>

Controls per point weight.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Weight</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Per-point weight

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Remap to 0..1</strong> <code>bool</code></summary>

Whether to normalize the weights internally or not. Enable this if your per-point weight does not fit within a 0-1 range.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Use Local Curve</strong> <code>bool</code></summary>

Whether to use in-editor curve or an external asset.

</details>

<details>

<summary><strong>Weight Curve</strong> <code>RuntimeFloatCurve</code></summary>

Curve the value will be remapped over.

</details>

<details>

<summary><strong>Weight Curve</strong> <code>CurveFloat</code></summary>

Curve the value will be remapped over.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Weight Curve Lookup</strong> <code>PCGExCurveLookupDetails</code></summary>

Controls weight curve lookup.

📦 See: CurveLookup configuration

</details>

<details>

<summary><strong>Invert Result</strong> <code>bool</code></summary>

TBD

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExFilters\Public\Filters\Points\PCGExRandomFilter.h`
