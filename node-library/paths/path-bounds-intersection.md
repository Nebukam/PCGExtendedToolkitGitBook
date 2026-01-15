---
description: 'In editor :: PCGEx | Path × Bounds Intersection'
icon: circle
---

# Path × Bounds Intersection

Find intersection with target input points.

⚙️ **Behavior** — Instanced value blender.

**How It Works**

> AI-Generated, needs proofreading

* The node computes intersections between input paths and target bounds by evaluating where they overlap.
* If "Data Matching" is enabled, the node filters which targets are considered for intersection based on specified criteria.
* For intersecting points along the path, blending is applied between the previous and next point to smooth transitions or adjust properties at those intersections.
* The output of this process is structured as PCGExBoxIntersectionDetails, containing information about the computed intersections.
* If "Tag If Has Cuts" is set to true, a specific tag defined by "Has Cuts Tag" will be applied to indicate that cuts have been identified in the intersection results.

#### Configuration

<details>

<summary><strong>Data Matching</strong> <code>PCGExMatchingDetails</code></summary>

If enabled, allows you to filter out which targets get sampled by which data

📦 See: Matching configuration

</details>

<details>

<summary><strong>Blending</strong> <code>PCGExSubPointsBlendInstancedFactory</code> ⚙️</summary>

Blending applied on intersecting points along the path prev and next point. This is different from inheriting from external properties.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Output</strong> <code>PCGExBoxIntersectionDetails</code></summary>

Controls output.

📦 See: BoxIntersection configuration

⚡ PCG Overridable

</details>

**Tagging**

<details>

<summary><strong>Tag If Has Cuts</strong> <code>bool</code></summary>

Controls tag if has cuts.

</details>

<details>

<summary><strong>Has Cuts Tag</strong> <code>String</code></summary>

...

</details>

<details>

<summary><strong>Tag If Uncut</strong> <code>bool</code></summary>

Controls tag if uncut.

</details>

<details>

<summary><strong>Uncut Tag</strong> <code>String</code></summary>

...

</details>

***

Source: `Source\PCGExElementsPaths\Public\Elements\PCGExBoundsPathIntersection.h`
