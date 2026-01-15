---
description: 'In editor :: PCGEx | Match Random'
icon: circle-dashed
---

# Random

Randomly pass or fail match

📌 **Subnode** — Connects to **Match Rules** pins.

**How It Works**

> AI-Generated, needs proofreading

* The node evaluates whether to pass or fail a match based on a randomly generated value and a specified threshold.
* A random number is generated using the provided seed (TBD), which determines if the match passes or fails.
* The node compares this random number against the threshold, either from an attribute input or directly set, within the 0-1 range to decide the outcome.
* If the Invert Threshold setting is enabled, the logic inverts such that values below the threshold pass and those above fail.

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

<summary><strong>Threshold</strong> <code>double</code></summary>

Pass threshold

⚡ PCG Overridable

</details>

<details>

<summary><strong>Invert Threshold</strong> <code>bool</code></summary>

Controls invert threshold.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExMatchRandomConfig</code></summary>

Rules properties

📦 See: MatchRandom configuration

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

<summary><strong>Threshold</strong> <code>double</code></summary>

Pass threshold

⚡ PCG Overridable

</details>

<details>

<summary><strong>Invert Threshold</strong> <code>bool</code></summary>

Controls invert threshold.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExMatching\Public\Matching\PCGExMatchRandom.h`
