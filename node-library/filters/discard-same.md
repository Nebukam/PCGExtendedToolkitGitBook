---
description: 'In editor :: PCGEx | Discard Same'
icon: circle
---

# Discard Same

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Discard entire datasets based on a selection of parameters.

#### Overview

This node filters out collections of points from your PCG graph by comparing them against each other using various criteria. It's useful when you want to remove duplicate or near-duplicate datasets, such as avoiding redundant geometry generation or eliminating overlapping placements in procedural content.

It operates by comparing input datasets and discarding those that are considered "the same" based on the selected test parameters. You can configure which aspects of the data to compare — like bounds, point count, positions, or attribute values — and how to handle multiple matches.

{% hint style="info" %}
Connects to **Point Input** pins and outputs filtered **Point Output** pins.
{% endhint %}

#### How It Works

This node processes multiple input datasets and compares them against each other using the selected comparison criteria. For each dataset, it evaluates whether it matches any previously processed dataset based on the configured parameters.

The process works in a loop where:

1. Each incoming dataset is analyzed for its properties (bounds, point count, positions, or attribute hashes).
2. These properties are compared against those of already-processed datasets.
3. If a match is found within tolerance thresholds, the dataset is discarded according to the selected **Mode**.
4. The node keeps track of which datasets are considered duplicates and removes them from further processing.

The comparison logic supports:

* Bounds: Checks if bounding boxes of collections are similar.
* Point count: Compares how many points each collection contains.
* Positions: Evaluates whether point positions are close enough to be considered identical.
* Attribute hashes: Computes a hash value from one or more attributes and compares those values.

Depending on the **Mode** setting, it decides which dataset(s) to keep:

* **FIFO**: Keeps the first dataset encountered and discards subsequent duplicates.
* **LIFO**: Keeps the last dataset encountered and discards earlier duplicates.
* **All**: Discards all datasets that have been found to be duplicates.

<details>

<summary>Inputs</summary>

Expects multiple point datasets as input, typically from a collection of point sources or generated data.

</details>

<details>

<summary>Outputs</summary>

Outputs filtered point datasets, with duplicate or near-duplicate collections removed based on the configured comparison logic.

</details>

#### Configuration

***

**Mode**

_Controls which dataset to keep when duplicates are found._

When enabled, the node keeps either the first or last dataset encountered that matches a previously seen one.

**Values**:

* **FIFO**: Keeps the first dataset and discards subsequent duplicates.
* **LIFO**: Keeps the last dataset and discards earlier duplicates.
* **All**: Discards all datasets that have been found to be duplicates.

**TestMode**

_Controls how multiple comparison criteria are combined._

When enabled, determines whether all tests must pass or only one needs to match for a dataset to be discarded.

**Values**:

* **AND**: All selected tests must match for a discard.
* **OR**: Only one of the selected tests needs to match for a discard.

***

**bTestBounds**

_When enabled, compares bounding box properties._

Controls whether the node checks if collections have similar bounds.

**TestBoundsTolerance**

_Tolerance for comparing bounding box equality._

A value that defines how close two bounds must be to be considered equal.

**bTestPointCount**

_When enabled, compares point counts between collections._

Controls whether the node checks if collections contain the same number of points.

**TestPointCountTolerance**

_Tolerance for comparing point count equality._

Defines how much difference in point count is acceptable before considering collections different.

**bTestPositions**

_When enabled, compares individual point positions._

Controls whether the node evaluates whether points are located close enough to be considered duplicates.

**TestPositionTolerance**

_Tolerance for comparing point position equality._

A value that defines how close two points must be to be considered identical.

***

**TestAttributesHash**

_Selects how to use attribute values for comparison._

Controls whether to include attribute-based comparisons in the duplicate detection logic.

**Values**:

* **None**: Do not use attributes to check sameness.
* **Single**: Use a single, overridable attribute.
* **List**: Use a list of attributes. Arrays are not overridable.

**AttributeHashConfigs**

_List of attributes to include in hash computation._

Defines which attributes to compute hashes from for comparison when using the **List** mode.

**bIncludeSingleAttribute**

_When enabled, includes a single attribute in addition to the list._

Controls whether to also use a single, overridable attribute alongside the list when computing hashes.

**AttributeHashConfig**

_Configuration for a single attribute hash._

Defines which single attribute to compute a hash from when using the **Single** mode.

#### Usage Example

You're generating multiple clusters of points representing potential building placements. Some clusters may be placed in identical locations or have identical point counts, making them redundant. You can use this node to remove duplicate clusters by comparing their bounds and point count. Set **bTestBounds**, **bTestPointCount**, and **Mode** to **FIFO** to keep the first cluster found at each location and discard any duplicates.

#### Notes

* This node is particularly useful in scenarios where you're generating multiple datasets that may overlap or be identical due to procedural randomness.
* Performance can be impacted when comparing large point clouds or using many attribute comparisons.
* The tolerance values are important for determining how strict the comparison should be. A lower tolerance makes the comparison stricter, while a higher value allows more variation.
