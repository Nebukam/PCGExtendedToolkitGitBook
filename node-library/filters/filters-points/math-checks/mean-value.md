---
description: 'In editor :: PCGEx | Filter : Mean Value'
icon: circle-dashed
---

# Mean Value

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Creates a filter definition that compares values against their mean.

#### How It Works

The Filter : Mean subnode calculates a reference average value from all input point attribute values using the selected method (Average, Median, etc.). Then, it compares each point's attribute value against this computed average. Depending on configuration, points are either accepted or rejected based on whether their value is above or below the average, or within a defined range.

It supports two exclusion modes:

* **Below Mean**: Points with values below a threshold relative to the average are excluded.
* **Above Mean**: Points with values above a threshold relative to the average are excluded.

The comparison can also be inverted using the invert toggle, which flips the result of the test. This allows for selecting points that _do not_ meet the criteria instead of those that do.

#### Configuration

<details>

<summary><strong>Target</strong><br><em>Target value to compile -- Will be translated to `double` under the hood.</em></summary>

Specifies the point attribute whose values will be used for filtering. The system converts this to a double-precision floating-point value internally.

</details>

<details>

<summary><strong>Measure</strong><br><em>Measure mode. If using relative, threshold values should be kept between 0-1, while absolute use the world-space length of the edge.</em></summary>

Determines how thresholds are interpreted:

* **Relative**: Thresholds are treated as proportions (0–1).
* **Absolute**: Thresholds are treated as world-space units.

</details>

<details>

<summary><strong>MeanMethod</strong><br><em>Which mean value is used to check whether the tested value is above or below.</em></summary>

Selects how the reference average is calculated:

* **Average**: Arithmetic mean of all values.
* **Median**: Middle value when sorted.
* **Mode (Highest)**: Most frequent value, preferring higher values.
* **Mode (Lowest)**: Most frequent value, preferring lower values.
* **Central**: Middle value between min and max.
* **Fixed**: Use a fixed threshold value.

</details>

<details>

<summary><strong>MeanValue</strong><br><em>Minimum value threshold</em></summary>

Used only when **MeanMethod** is set to **Fixed**. Defines the fixed threshold used for comparisons.

</details>

<details>

<summary><strong>ModeTolerance</strong><br><em>Used to estimate the mode value.</em></summary>

Used when **MeanMethod** is set to **Mode (Highest)** or **Mode (Lowest)**. Determines how closely values must match to be considered part of the most frequent group.

</details>

<details>

<summary><strong>bDoExcludeBelowMean</strong><br><em>Exclude if value is below a specific threshold.</em></summary>

When enabled, points with attribute values below the defined **ExcludeBelow** threshold are excluded from the result.

</details>

<details>

<summary><strong>ExcludeBelow</strong><br><em>Minimum value threshold.</em></summary>

The minimum value used to exclude points when **bDoExcludeBelowMean** is enabled. Value depends on the **Measure** setting (relative or absolute).

</details>

<details>

<summary><strong>bDoExcludeAboveMean</strong><br><em>Exclude if value is above a specific threshold.</em></summary>

When enabled, points with attribute values above the defined **ExcludeAbove** threshold are excluded from the result.

</details>

<details>

<summary><strong>ExcludeAbove</strong><br><em>Maximum threshold.</em></summary>

The maximum value used to exclude points when **bDoExcludeAboveMean** is enabled. Value depends on the **Measure** setting (relative or absolute).

</details>

<details>

<summary><strong>bInvert</strong><br><em>If enabled, invert the result of the test</em></summary>

When enabled, the filter logic is inverted — points that would normally pass now fail, and vice versa.

</details>
