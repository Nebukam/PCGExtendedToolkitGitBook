---
icon: circle
---

# Self Pruning

A slower, more precise self pruning node.

**How It Works**

> AI-Generated, needs proofreading

* The Self Pruning node processes point data by either pruning points based on overlap criteria or writing the number of overlaps to an attribute specified in "Output to".
* Depending on the "Mode" setting, the node either removes overlapping points or records overlap counts without modification.
* If sorting is enabled via "Sort Direction", the node sorts hash components; if "Randomize" is selected, it introduces randomness into this sort process using a per-point value within the specified "Range".
* The pruning or counting operation occurs based on the configured settings, but the exact algorithm for determining overlaps and applying the prune or count action remains unspecified.

#### Configuration

<details>

<summary><strong>Mode</strong> <code>PCGExSelfPruningMode</code></summary>

Whether to prune points or write the number of overlaps

**Values:**

* **Prune**: Prune points
* **Write Result**: Write the number of overlaps

</details>

<details>

<summary><strong>├─ Sort Direction</strong> <code>PCGExSortDirection</code></summary>

Whether to sort hash components or not.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Randomize</strong> <code>bool</code></summary>

Sort over a random per-point value

⚡ PCG Overridable

</details>

<details>

<summary><strong>─└─ Range</strong> <code>double</code></summary>

Sort over a random per-point value

⚡ PCG Overridable

</details>

<details>

<summary><strong>├─ Output to</strong> <code>Name</code></summary>

Name of the attribute to write the number of overlap to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Units</strong> <code>PCGExMeanMeasure</code></summary>

Discrete mode write the number as-is, relative will normalize against the highest number of overlaps found.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ OneMinus</strong> <code>bool</code></summary>

Whether to do a OneMinus on the normalized overlap count value

⚡ PCG Overridable

</details>

**Expansion**

<details>

<summary><strong>Precise Test</strong> <code>bool</code></summary>

If enabled, does very precise and EXPENSIVE spatial tests. Only supported for pruning.

</details>

<details>

<summary><strong>Primary Mode</strong> <code>PCGExSelfPruningExpandOrder</code></summary>

If and how to expand the primary bounds (bounds used for the main point being evaluated)

**Values:**

* **None**: Do not expand bounds
* **Before Transform**: Expand bounds before world transform
* **After Transform**: Expand bounds after world transform

</details>

<details>

<summary><strong>├─ Input</strong> <code>PCGExInputValueType</code></summary>

Type of primary expansion

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Primary Expansion (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Primary Expansion value. Uniform, discrete offset applied to bounds.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Primary Expansion</strong> <code>double</code></summary>

Primary Expansion value. Uniform, discrete offset applied to bounds.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Secondary Mode</strong> <code>PCGExSelfPruningExpandOrder</code></summary>

If and how to expand the primary bounds (bounds used for neighbors points against the main point being evaluated)

**Values:**

* **None**: Do not expand bounds
* **Before Transform**: Expand bounds before world transform
* **After Transform**: Expand bounds after world transform

</details>

<details>

<summary><strong>├─ Input</strong> <code>PCGExInputValueType</code></summary>

Type of secondary expansion

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Secondary Expansion (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Secondary Expansion value. Uniform, discrete offset applied to bounds.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Secondary Expansion</strong> <code>double</code></summary>

Secondary Expansion value. Uniform, discrete offset applied to bounds.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsSampling\Public\Elements\PCGExSelfPruning.h`
