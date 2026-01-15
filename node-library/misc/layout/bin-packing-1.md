---
description: 'In editor :: PCGEx | Bin Packing'
icon: circle
---

# Best Fit Packing

Optimal bin packing using best-fit decreasing algorithm with rotation support.

**How It Works**

> AI-Generated, needs proofreading

* Sorts items by volume in descending order if "Sort By Volume" is enabled, adhering to the best-fit decreasing algorithm.
* Places each item into the bin where it fits best without exceeding the bin's capacity, considering rotation support for optimal placement.
* Uses a seed mode of per-bin seed, starting packing from a bound-relative location specified by Seed UVW or Seed UVWAttribute.

#### Configuration

<details>

<summary><strong>Sort Direction</strong> <code>PCGExSortDirection</code></summary>

Controls the order in which points will be sorted, when using sorting rules. Uses largest-first by default for best-fit decreasing.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Sort By Volume</strong> <code>bool</code></summary>

If enabled, items will be sorted by volume (largest first) before packing. This is the classic BFD approach.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Seed Mode</strong> <code>PCGExBinSeedMode</code></summary>

Per-bin seed. Represent a bound-relative location to start packing from.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Seed UVW</strong> <code>Vector</code></summary>

Controls seed uvw.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Seed UVWAttribute</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Controls seed uvwattribute.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Seed Position</strong> <code>Vector</code></summary>

Controls seed position.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Seed Position Attribute</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Controls seed position attribute.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Quiet Too Many Bins Warning</strong> <code>bool</code></summary>

If enabled, won't throw a warning if there are more bins than there are inputs.

</details>

<details>

<summary><strong>Quiet Too Few Bins Warning</strong> <code>bool</code></summary>

If enabled, won't throw a warning if there are fewer bins than there are inputs.

</details>

**Fitting**

<details>

<summary><strong>Score Mode</strong> <code>PCGExBestFitScoreMode</code></summary>

Scoring method for selecting the best placement.

**Values:**

* **Tightest Fit**: Prioritize spaces where the item fits most tightly
* **Smallest Space**: Prioritize smallest space that can contain the item
* **Least Waste**: Minimize volume wasted after placement
* **Balanced**: Balance between tight fit and space conservation

⚡ PCG Overridable

</details>

<details>

<summary><strong>Rotation Mode</strong> <code>PCGExBestFitRotationMode</code></summary>

Rotation testing mode. More rotations = better fit but slower.

**Values:**

* **None**: No rotation testing
* **Cardinal Only**
* **All Orthogonal**: Test all 24 orthogonal orientations

⚡ PCG Overridable

</details>

<details>

<summary><strong>Placement Anchor</strong> <code>PCGExBestFitPlacementAnchor</code></summary>

How to position items within their chosen space.

**Values:**

* **Corner**: Place items at corner of free space
* **Center**: Place items at center of free space
* **Seed Proximity**: Place items as close to seed as possible

⚡ PCG Overridable

</details>

<details>

<summary><strong>Split Axis</strong> <code>PCGExAxis</code></summary>

The main split axis for creating new free spaces after placement.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Split Mode</strong> <code>PCGExSpaceSplitMode</code></summary>

Space splitting mode after item placement.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Avoid Wasted Space</strong> <code>bool</code></summary>

If enabled, fitting will try to avoid wasted space by not creating free spaces below a threshold.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Wasted Space Threshold</strong> <code>double</code></summary>

Minimum space threshold as a ratio of the smallest item dimension. Spaces smaller than this are discarded.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Global Best Fit</strong> <code>bool</code></summary>

If enabled, will evaluate all bins for each item to find the globally best placement.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tightness Weight</strong> <code>double</code></summary>

Weight for tightness in balanced scoring mode. Higher = prefer tighter fits.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Occupation Padding Input</strong> <code>PCGExInputValueType</code></summary>

Occupation padding source

⚡ PCG Overridable

</details>

<details>

<summary><strong>Occupation Padding (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Occupation padding attribute -- Will be broadcast to FVector.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Occupation Padding</strong> <code>Vector</code></summary>

Occupation padding constant value.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Absolute Padding</strong> <code>bool</code></summary>

If enabled, the padding will not be relative (rotated) if the item is rotated.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsSpatial\Public\Elements\Layout\PCGExBestFitPacking.h`
