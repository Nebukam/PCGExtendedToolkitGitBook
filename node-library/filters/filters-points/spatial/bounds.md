---
description: 'In editor :: PCGEx | Filter : Inclusion (Bounds)'
icon: circle-dashed
---

# Inclusion (Bounds)

Creates a filter definition that compares dot value of two vectors.

📌 **Subnode** — Connects to **Filters** pins.

**How It Works**

> AI-Generated, needs proofreading

* The node evaluates dot products between pairs of vectors to create a filter definition.
* It compares these dot product values against specified bounds defined by the Bounds Source and Bounds Target settings.
* Depending on the Check Type setting, the node determines whether each input point satisfies the bounds check relative to the target bounds data.
* The Mode setting dictates how the comparison between bounds is performed, influencing the filtering logic applied to the input points.
* In Test Mode, the node uses a specified shape type for testing purposes, altering how it processes and outputs the filtered results.

#### Configuration

<details>

<summary><strong>Mode</strong> <code>PCGExBoundsFilterCompareMode</code></summary>

How to compare bounds.

**Values:**

* **Per Point Bounds**: Test each point individually
* **Collection Bounds**: Test using collection's combined bounds

⚡ PCG Overridable

</details>

<details>

<summary><strong>Bounds Target</strong> <code>PCGExPointBoundsSource</code></summary>

Bounds to use on target bounds data. (Those are the bounds connected to the filter)

⚡ PCG Overridable

</details>

<details>

<summary><strong>Check Type</strong> <code>PCGExBoundsCheckType</code></summary>

Type of bounds check to perform.

**Values:**

* **Intersects**: Point's OBB overlaps target OBBs
* **Is Inside**: Point center is inside target OBBs
* **Is Inside or On**: Point center is inside or on boundary of target OBBs
* **Is Inside or Intersects**: Point center inside OR point's OBB overlaps target OBBs.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Bounds Source</strong> <code>PCGExPointBoundsSource</code></summary>

Bounds to use on input points (the points being filtered).

⚡ PCG Overridable

</details>

<details>

<summary><strong>Test Mode</strong> <code>PCGExBoxCheckMode</code></summary>

Shape type for testing.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Expansion</strong> <code>double</code></summary>

Epsilon value used to slightly expand target bounds.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Invert</strong> <code>bool</code></summary>

If enabled, invert the result of the test.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Check Against Data Bounds</strong> <code>bool</code></summary>

If enabled, uses collection bounds as a single proxy point instead of per-point testing.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExBoundsFilterConfig</code></summary>

Filter Config.

📦 See: BoundsFilter configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Mode</strong> <code>PCGExBoundsFilterCompareMode</code></summary>

How to compare bounds.

**Values:**

* **Per Point Bounds**: Test each point individually
* **Collection Bounds**: Test using collection's combined bounds

⚡ PCG Overridable

</details>

<details>

<summary><strong>Bounds Target</strong> <code>PCGExPointBoundsSource</code></summary>

Bounds to use on target bounds data. (Those are the bounds connected to the filter)

⚡ PCG Overridable

</details>

<details>

<summary><strong>Check Type</strong> <code>PCGExBoundsCheckType</code></summary>

Type of bounds check to perform.

**Values:**

* **Intersects**: Point's OBB overlaps target OBBs
* **Is Inside**: Point center is inside target OBBs
* **Is Inside or On**: Point center is inside or on boundary of target OBBs
* **Is Inside or Intersects**: Point center inside OR point's OBB overlaps target OBBs.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Bounds Source</strong> <code>PCGExPointBoundsSource</code></summary>

Bounds to use on input points (the points being filtered).

⚡ PCG Overridable

</details>

<details>

<summary><strong>Test Mode</strong> <code>PCGExBoxCheckMode</code></summary>

Shape type for testing.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Expansion</strong> <code>double</code></summary>

Epsilon value used to slightly expand target bounds.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Invert</strong> <code>bool</code></summary>

If enabled, invert the result of the test.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Check Against Data Bounds</strong> <code>bool</code></summary>

If enabled, uses collection bounds as a single proxy point instead of per-point testing.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExFilters\Public\Filters\Points\PCGExBoundsFilter.h`
