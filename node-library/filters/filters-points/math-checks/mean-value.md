---
description: 'In editor :: PCGEx | Filter : Mean Value'
icon: circle-dashed
---

# Mean Value

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Creates a filter definition that compares values against their mean.

#### Overview

This subnode filters points based on how their attribute values compare to the calculated mean of all input values. It's useful for removing outliers or isolating points that are above or below average in a dataset, such as filtering terrain points that are higher or lower than the average elevation.

It connects to Filter pins on processing nodes, where it defines the criteria for accepting or rejecting points based on their relationship to the computed mean value.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes.
{% endhint %}

#### How It Works

This subnode calculates a reference mean value from all input point attribute values and then compares each point's value against that mean. The comparison determines whether the point passes or fails the filter.

The process works as follows:

1. Collects all values from the specified target attribute across the input points.
2. Calculates the mean using the selected method (Average, Median, Mode, etc.).
3. Applies any configured thresholds to exclude points that are below or above the calculated mean.
4. Optionally inverts the result so that points that would normally pass now fail and vice versa.

The filter evaluates each point individually, checking if its value meets the defined conditions relative to the computed mean.

<details>

<summary>Inputs</summary>

Expects a set of points with an attribute specified in the **Target** setting.

</details>

<details>

<summary>Outputs</summary>

Points that pass the filter are allowed through; those that fail are excluded from further processing.

</details>

#### Configuration

***

**Target**

_Target value to compile -- Will be translated to `double` under the hood._

Specifies which attribute's values will be used for calculating the mean and comparison. For example, you might use a "Height" or "Density" attribute.

***

**Measure**

_Measure mode. If using relative, threshold values should be kept between 0-1, while absolute use the world-space length of the edge._

Controls how the filter interprets thresholds:

* **Relative**: Thresholds are treated as ratios (0 to 1), where 0 is minimum and 1 is maximum.
* **Absolute**: Thresholds are in world-space units.

**Values**:

* **Relative**: Thresholds are normalized between 0 and 1.
* **Absolute**: Thresholds use actual world-space values.

***

**MeanMethod**

_Which mean value is used to check whether the tested value is above or below._

Selects the method for calculating the reference mean:

* **Average**: The arithmetic mean of all values.
* **Median**: The middle value when all values are sorted.
* **Mode (Highest)**: The most frequent value, preferring higher values.
* **Mode (Lowest)**: The most frequent value, preferring lower values.
* **Central**: The midpoint between the minimum and maximum input values.
* **Fixed**: Uses a fixed threshold value defined in **MeanValue**.

**Values**:

* **Average**: Computes average of all values.
* **Median**: Finds middle value after sorting.
* **Mode (Highest)**: Finds most common value, preferring higher ones.
* **Mode (Lowest)**: Finds most common value, preferring lower ones.
* **Central**: Uses midpoint between min and max.
* **Fixed**: Uses a fixed value from **MeanValue**.

***

**MeanValue**

_Minimum value threshold_

Used only when **MeanMethod** is set to **Fixed**. Defines the exact mean value used for comparison.

***

**ModeTolerance**

_Used to estimate the mode value._

Only active when **MeanMethod** is **Mode (Highest)** or **Mode (Lowest)**. Controls how closely values must match to be considered part of the "mode" — higher tolerance allows more variation.

***

**bDoExcludeBelowMean**

_Exclude if value is below a specific threshold._

When enabled, points with values below the calculated mean are excluded from passing the filter.

***

**ExcludeBelow**

_Minimum value threshold._

The minimum value used to determine exclusion when **bDoExcludeBelowMean** is enabled. This can be a relative ratio (0–1) or an absolute value depending on the **Measure** setting.

***

**bDoExcludeAboveMean**

_Exclude if value is above a specific threshold._

When enabled, points with values above the calculated mean are excluded from passing the filter.

***

**ExcludeAbove**

_Maximum threshold._

The maximum value used to determine exclusion when **bDoExcludeAboveMean** is enabled. This can be a relative ratio (0–1) or an absolute value depending on the **Measure** setting.

***

**bInvert**

_If enabled, invert the result of the test_

When enabled, points that would normally pass the filter are excluded, and those that fail are allowed through.

***

**Config**

_Filter Config._

A grouped set of settings that define how the filter operates, including the target attribute, mean calculation method, and exclusion thresholds.

#### Usage Example

You have a point cloud representing terrain elevation data. You want to keep only points that are above average elevation but exclude any that are too far above or below the mean.

1. Set **Target** to your "Elevation" attribute.
2. Set **MeanMethod** to **Average**.
3. Enable **bDoExcludeBelowMean** and set **ExcludeBelow** to `0.2`.
4. Enable **bDoExcludeAboveMean** and set **ExcludeAbove** to `0.2`.
5. Connect this subnode to a Filter pin on a processing node like "Filter Points".

This setup will keep only points whose elevation is within 20% above or below the average elevation.

#### Notes

* The filter works best when input data has a relatively normal distribution.
* Using **Mode** methods can be effective for filtering based on dominant values in clustered datasets.
* Combining with other filters allows complex multi-criteria point selection.
