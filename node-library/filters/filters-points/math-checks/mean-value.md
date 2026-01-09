---
description: 'In editor :: PCGEx | Filter : Mean Value'
icon: circle-dashed
---

# Mean Value

{% hint style="warning" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Creates a filter definition that compares values against their mean.

### Overview

This filter factory generates a condition that evaluates whether individual point values are above or below a calculated mean value from the input data. It's useful for filtering points based on statistical comparisons, such as removing points that are too far from the average.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes like **Point Filter**, **Point Transform**, or **Point Spawner**
{% endhint %}

### How It Works

The filter calculates a mean value from all input point values using one of several methods, then compares each point's value against that mean. Points that meet the comparison criteria (above/below) will pass the filter.

The mean can be calculated as:

* Average (arithmetic mean)
* Median (middle value when sorted)
* Mode (most frequent value, with options for highest or lowest mode)
* Central (middle value between min and max)
* Fixed threshold (a set value)

### Inputs

* **Points**: Input point data to filter
* **Filter**: Output filter definition for use in downstream nodes

### Configuration

***

#### General

**Target**

_The attribute to use as the source of values for calculating the mean._

Select an attribute from your input data that contains numeric values. This will be used to compute the mean.

**Measure**

_How to interpret the comparison values._

* **Relative**: Values are interpreted as ratios (0-1) relative to the data range
* **Absolute**: Values are interpreted as world-space units

**Mean Method**

_Which statistical method to use for calculating the reference value._

* **Average**: Arithmetic mean of all values
* **Median**: Middle value when sorted
* **Mode (Highest)**: Most frequent value, using the highest mode if multiple exist
* **Mode (Lowest)**: Most frequent value, using the lowest mode if multiple exist
* **Central**: Value halfway between min and max
* **Fixed**: Use a fixed threshold value

**Mean Value**

_The fixed value to use when Mean Method is set to Fixed._

This value is used directly as the comparison threshold.

**Mode Tolerance**

_Tolerance for determining what constitutes a mode._

Used when Mean Method is set to Mode. Defines how close values must be to be considered part of the same mode.

**Do Exclude Below Mean**

_When enabled, points with values below the mean are excluded._

This creates an exclusion zone below the mean value.

**Exclude Below**

_The minimum threshold for excluding points below the mean._

Points with values less than this will be filtered out.

**Do Exclude Above Mean**

_When enabled, points with values above the mean are excluded._

This creates an exclusion zone above the mean value.

**Exclude Above**

_The maximum threshold for excluding points above the mean._

Points with values greater than this will be filtered out.

**Invert**

_When enabled, the filter result is inverted._

If a point would normally pass, it fails, and vice versa.

### Usage Example

You have a set of points with a "Height" attribute. You want to keep only points that are above the average height, but exclude points that are too low or too high.

1. Connect your point data to the **Filter : Mean** node
2. Set **Target** to "Height"
3. Set **Mean Method** to "Average"
4. Enable **Do Exclude Below Mean** and set **Exclude Below** to 0.1
5. Connect this filter to a **Point Filter** node
6. The result will keep only points with heights above the average, excluding those that are too low

### Notes

* The filter works on single numeric attributes (float or double)
* When using relative measure, values should be between 0 and 1
* Mode methods work best when there are repeated values in your data
* You can combine multiple filters to create complex conditions
* The filter evaluates all points before making comparisons, so it's good for global statistical filtering
