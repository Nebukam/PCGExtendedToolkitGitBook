---
description: 'In editor :: PCGEx | Bin Packing'
icon: circle
---

# Bin Packing

\[EXPERIMENTAL] An simple bin packing node.

**How It Works**

> AI-Generated, needs proofreading

* The Bin Packing node organizes items into bins based on specified parameters and settings.
* It sorts points according to the Sort Direction setting before placing them into bins.
* Uses a per-bin seed mode where Seed UVW or Seed Position vectors determine the starting point for packing within each bin.
* Incorporates Seed UVWAttribute as an input selector to influence the seeding process, affecting how items are distributed across bins.

#### Configuration

<details>

<summary><strong>Sort Direction</strong> <code>PCGExSortDirection</code></summary>

Controls the order in which points will be sorted, when using sorting rules.

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

<summary><strong>Infer Split Axis From Seed</strong> <code>bool</code></summary>

Will attempt to infer the split axis from relative seed positioning, and fall back to selected axis if it can't find one.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Split Axis</strong> <code>PCGExAxis</code></summary>

The main stacking axis is the axis that will generate the smallest free space for further insertion.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Split Mode</strong> <code>PCGExSpaceSplitMode</code></summary>

The cross stacking axis is the axis that will generate the largest free space on the "sides" of the main axis.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Avoid Wasted Space</strong> <code>bool</code></summary>

If enabled, fitting will try to avoid wasted space by not creating free spaces that are below a certain threshold.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Placement Favor</strong> <code>PCGExPlacementFavor</code></summary>

If enabled, fitting will try to avoid wasted space by not creating free spaces that are below a certain threshold.

**Values:**

* **Seed Proximity**: Favor seed proximity over space conservation
* **Space Conservation**: Favor space conservation over seed proximity

⚡ PCG Overridable

</details>

<details>

<summary><strong>Occupation Padding Input</strong> <code>PCGExInputValueType</code></summary>

Occupation padding source

⚡ PCG Overridable

</details>

<details>

<summary><strong>Occupation Padding (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Occupation padding attribute -- Will be broadcast to FVector. Occupation padding is an amount by which the bounds of a placed point will be expanded by after placement. This yield to greater fragmentation.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Occupation Padding</strong> <code>Vector</code></summary>

Occupation padding. Occupation padding is an amount by which the bounds of a placed point will be expanded by after placement. This yield to greater fragmentation.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Absolute Padding</strong> <code>bool</code></summary>

If enabled, the padding will not be relative (rotated) if the item is rotated.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsSpatial\Public\Elements\Layout\PCGExBinPacking.h`
