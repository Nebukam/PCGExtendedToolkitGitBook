---
icon: circle-dashed
---

# Overlap

Check if there is an overlap with the data bounds (AABB)

📌 **Subnode** — Connects to **Match Rules** pins.

**How It Works**

> AI-Generated, needs proofreading

* The node checks for an overlap between given data bounds using Axis-Aligned Bounding Box (AABB) calculations.
* It adjusts the AABB based on the Expansion Mode setting, which specifies how much to shrink the bounds by a specified amount.
* The Expansion parameter, defined as PCGExInputShorthandNameVector, determines the vector values used for shrinking or expanding the AABB.
* Configuration settings are applied according to the Config rules properties, influencing how the overlap check and expansion/shrinkage operations are performed.

#### Configuration

<details>

<summary><strong>Expansion Mode</strong> <code>PCGExMatchOverlapExpansionMode</code></summary>

Amount but which the bounds should be shrinked

**Values:**

* **None**: Don't alter extents
* **Add**: Add the value to the extents
* **Scale**: Scale the data bounds

⚡ PCG Overridable

</details>

<details>

<summary><strong>Expansion</strong> <code>PCGExInputShorthandNameVector</code></summary>

Controls expansion.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExMatchOverlapConfig</code></summary>

Rules properties

📦 See: MatchOverlap configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Expansion Mode</strong> <code>PCGExMatchOverlapExpansionMode</code></summary>

Amount but which the bounds should be shrinked

**Values:**

* **None**: Don't alter extents
* **Add**: Add the value to the extents
* **Scale**: Scale the data bounds

⚡ PCG Overridable

</details>

<details>

<summary><strong>Expansion</strong> <code>PCGExInputShorthandNameVector</code></summary>

Controls expansion.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExMatching\Public\Matching\PCGExMatchOverlap.h`
