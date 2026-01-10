---
icon: circle
---

# Self Pruning

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> A slower, more precise self pruning node.

#### How It Works

This node identifies and removes overlapping points within a dataset based on spatial proximity. Unlike faster methods that use approximate hashing, this node performs precise spatial tests for higher accuracy. It can either remove overlapping points or write the count of overlaps to an attribute, allowing for further processing or visual feedback.

The process begins by calculating spatial bounds for each point, which may be expanded based on settings. Then, for every point, it determines how many other points fall within its defined bounds. This count is either used to remove overlapping points or written to an attribute.

#### Configuration

<details>

<summary><strong>Mode</strong><br><em>Whether to prune points or write the number of overlaps.</em></summary>

Controls whether overlapping points are removed from the output or if the number of overlaps is written to an attribute.

**Values**:

* **Prune**: Removes overlapping points.
* **Write Result**: Writes overlap counts to an attribute.

</details>

<details>

<summary><strong>Sort Direction</strong><br><em>Whether to sort hash components or not.</em></summary>

Determines the order in which points are processed. Sorting can affect which points are retained when overlaps occur.

**Values**:

* **Ascending**: Points are sorted from low to high.
* **Descending**: Points are sorted from high to low.

</details>

<details>

<summary><strong>Randomize</strong><br><em>Sort over a random per-point value.</em></summary>

When enabled, points are shuffled before processing using a random value. This ensures varied pruning results when overlaps are evenly distributed.

</details>

<details>

<summary><strong>Range</strong><br><em>Sort over a random per-point value.</em></summary>

Controls the range of randomness applied to point sorting. A higher value increases variation in processing order.

</details>

<details>

<summary><strong>Output to</strong><br><em>Name of the attribute to write the number of overlap to.</em></summary>

The name of the attribute where overlap counts are written when mode is set to "Write Result".

</details>

<details>

<summary><strong>Units</strong><br><em>Discrete mode write the number as-is, relative will normalize against the highest number of overlaps found.</em></summary>

Controls how overlap counts are stored in the output attribute.

**Values**:

* **Discrete**: Stores raw overlap count.
* **Relative**: Normalizes overlap counts to a 0–1 range based on the maximum overlap found.

</details>

<details>

<summary><strong>OneMinus</strong><br><em>Whether to do a OneMinus on the normalized overlap count value.</em></summary>

When enabled and using relative units, the overlap count is inverted (1 - overlap). This can be useful for creating visual effects where higher density areas appear less prominent.

</details>

<details>

<summary><strong>Precise Test</strong><br><em>If enabled, does very precise and EXPENSIVE spatial tests. Only supported for pruning.</em></summary>

When enabled, uses more accurate but computationally expensive methods to determine overlaps. This is only available in Prune mode.

</details>

<details>

<summary><strong>Primary Mode</strong><br><em>If and how to expand the primary bounds (bounds used for the main point being evaluated).</em></summary>

Controls whether and how to expand the bounds of the main point being evaluated.

**Values**:

* **None**: No expansion.
* **Before Transform**: Expands bounds before world transformation.
* **After Transform**: Expands bounds after world transformation.

</details>

<details>

<summary><strong>Primary Expansion Input</strong><br><em>Type of primary expansion.</em></summary>

Defines whether the primary expansion value is a constant or read from an attribute.

**Values**:

* **Constant**: Use a fixed value.
* **Attribute**: Read the expansion value from an input attribute.

</details>

<details>

<summary><strong>Primary Expansion</strong><br><em>Primary Expansion value. Uniform, discrete offset applied to bounds.</em></summary>

The amount by which to expand the primary bounds, either as a constant or read from an attribute depending on the input type.

</details>

<details>

<summary><strong>Secondary Mode</strong><br><em>If and how to expand the secondary bounds (bounds used for neighbors points against the main point being evaluated).</em></summary>

Controls whether and how to expand the bounds of neighbor points during overlap testing.

**Values**:

* **None**: No expansion.
* **Before Transform**: Expands bounds before world transformation.
* **After Transform**: Expands bounds after world transformation.

</details>

<details>

<summary><strong>Secondary Expansion Input</strong><br><em>Type of secondary expansion.</em></summary>

Defines whether the secondary expansion value is a constant or read from an attribute.

**Values**:

* **Constant**: Use a fixed value.
* **Attribute**: Read the expansion value from an input attribute.

</details>

<details>

<summary><strong>Secondary Expansion</strong><br><em>Secondary Expansion value. Uniform, discrete offset applied to bounds.</em></summary>

The amount by which to expand the secondary bounds, either as a constant or read from an attribute depending on the input type.

</details>

{% hint style="info" %}
Connects to \*\*Point Filters\*\* subnode for filtering which points can be processed.
{% endhint %}

#### Usage Example

You have a point cloud representing potential object placements and want to ensure no two objects are placed too close together. Set the mode to "Prune", enable randomization for varied results, and adjust expansion values to define how far apart points must be. This prevents overlapping placements while maintaining visual variety.

#### Notes

* The node is slower than standard pruning methods due to its precise spatial tests.
* Expansion settings allow fine-tuning of overlap detection sensitivity.
* When using "Write Result", the output attribute can be used for further filtering or visualization.
