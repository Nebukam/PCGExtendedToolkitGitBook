---
description: 'In editor :: PCGEx | Filter : Within Range'
icon: circle-dashed
---

# Within Range

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Creates a filter definition that checks whether a point's value falls within a specified numerical range.

### Overview

This filter evaluates if a given point's attribute value lies between two boundary values (min and max). It can be used to select points based on their numeric property, such as distance, height, or any other scalar attribute. The result is either true (point passes the test) or false (point fails).

{% hint style="info" %}
Connects to **Filter** pins on processing nodes like "Filter Points", "Select Points", or similar.
{% endhint %}

### How It Works

The filter compares a point's value against a defined range. If the point's value is greater than or equal to the minimum and less than or equal to the maximum (inclusive), it passes the test. You can also invert this behavior to select points that are _outside_ the range.

The range boundaries can be set as constant values or read from attributes on the point data, allowing for dynamic ranges per point or group of points.

### Configuration

***

#### General

**Operand A**

_The attribute whose value will be tested against the range._

Select an attribute from your point data. The system reads this as a scalar double value for comparison.

**Source**

_Where to read the range boundaries from._

**Constant**: Use fixed values defined below. **Attribute Set**: Read the range from attributes on another set of points or data.

**Attributes**

_The list of attributes to read ranges from when using "Attribute Set" source._

When using attribute sets, you must provide at least one attribute that contains a FVector2. The X component is used as the minimum value and Y as the maximum.

**Range Min**

_The lower boundary of the range when using constant values._

Example: Setting this to -50 means the test will pass if the point's value is greater than or equal to -50.

**Range Max**

_The upper boundary of the range when using constant values._

Example: Setting this to 50 means the test will pass if the point's value is less than or equal to 50.

**bInclusive**

_Whether to include the min and max values in the test._

When enabled, points with values exactly matching min or max will pass the test. When disabled, only values strictly between min and max are accepted.

**bInvert**

_When enabled, invert the result of the test._

Instead of passing points that are within the range, this filter passes points that are outside the range.

### Usage Example

Imagine you want to select all points that are between 10 and 50 units away from a center point. You would:

1. Connect your point data to the "Filter : Within Range" node
2. Set **Operand A** to an attribute containing distance values (e.g., "Distance")
3. Set **Source** to **Constant**
4. Set **Range Min** to 10 and **Range Max** to 50
5. Connect this filter to a "Filter Points" node

The result will be all points whose distance is between 10 and 50 units, inclusive.

### Notes

* The filter works with any numeric attribute that can be converted to double.
* If using the **Attribute Set** source, make sure the attributes exist and are properly formatted as FVector2 (X = min, Y = max).
* Combining multiple filters allows for complex selection criteria.
* Inverting the range is useful for excluding points from a specific area rather than selecting them.

### Inputs

* **Point Data**: The point data to filter
* **Filter**: The filter definition to apply

### Outputs

* **Filtered Points**: The resulting point data after applying the filter
* **Unfiltered Points**: The point data that did not pass the filter test
