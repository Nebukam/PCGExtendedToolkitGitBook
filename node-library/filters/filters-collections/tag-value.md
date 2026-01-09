---
description: 'In editor :: PCGEx | Data Filter : Tag Value'
icon: circle-dashed
---

# Tag Value

{% hint style="info" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Tests the value of one or multiple tags on points.

### Overview

This filter factory creates a condition that evaluates the value of tags attached to points. It can compare numeric or string tag values against constant operands using various comparison operators. The result determines whether a point passes or fails the filter.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes like **Filter Points**, **Filter Curves**, or other nodes that accept filters.
{% endhint %}

### How It Works

This filter checks if one or more tags on a point match specific criteria. It supports both numeric and string comparisons, allowing you to filter points based on their tag values.

For example, you can use this filter to:

* Keep only points where a "Health" tag equals 100
* Remove points where a "Status" tag contains "Inactive"
* Filter points where a "Score" tag is greater than 500

The filter supports multiple matching tags and allows you to define whether all matches must pass (AND mode) or just one match needs to pass (OR mode).

### Configuration

***

#### General

**Tag Name**

_The name of the tag to check._

Specify which tag's value you want to test. The filter will look for tags with this exact name.

**Match**

_How to match tag names._

* **Equals**: Only match tags with the exact name specified
* **Starts With**: Match tags that start with the specified name
* **Ends With**: Match tags that end with the specified name
* **Contains**: Match tags that contain the specified name anywhere

**Expected Value Type**

_Whether to compare as numeric or string._

* **Numeric**: Compare tag values as numbers (integers or decimals)
* **String**: Compare tag values as text

**Comparison (Numeric)**

_The comparison operator for numeric values._

* **==**: Strictly equal to
* **!=**: Strictly not equal to
* **≈**: Nearly equal to (within tolerance)
* **≠**: Nearly not equal to (outside tolerance)
* **>**: Strictly greater than
* **<**: Strictly less than
* **≥**: Greater than or equal to
* **≤**: Less than or equal to

**Operand B (Numeric)**

_The numeric value to compare against._

This is the constant value used in the comparison. For example, if you're checking if a tag "Health" is greater than 50, this field would contain 50.

**Tolerance**

_Tolerance for near-equality comparisons._

Only used when comparing with "Nearly Equal" or "Nearly Not Equal". Defines how close two numbers must be to be considered equal.

**Comparison (String)**

_The comparison operator for string values._

* **==**: Strictly equal to
* **!=**: Strictly not equal to
* **Length ==**: Length strictly equal to
* **Length !=**: Length strictly not equal to
* **Length ≥**: Length equal or greater than
* **Length ≤**: Length equal or smaller than
* **> (Length)**: Length strictly greater than
* **< (Length)**: Length strictly smaller than
* **> (Locale)**: Locale strictly greater than (locale-aware comparison)
* **< (Locale)**: Locale strictly smaller than (locale-aware comparison)
* **Contains**: Contains the operand string
* **Starts With**: Starts with the operand string
* **Ends With**: Ends with the operand string

**Operand B (String)**

_The string value to compare against._

This is the constant string used in the comparison. For example, if you're checking if a tag "Status" contains "Active", this field would contain "Active".

**Multi-Match Mode**

_How to handle multiple matching tags._

* **And**: All matching tags must pass the comparison for the point to pass
* **Or**: Only one matching tag needs to pass the comparison for the point to pass

**Invert Result**

_When enabled, the filter result is reversed._

Enable this if you want to keep points that would normally fail the filter. For example, if you're filtering out points with "Health" = 0, enable invert to keep only those points.

### Usage Example

Create a filter that keeps points where a tag named "Level" is greater than or equal to 5:

1. Set **Tag Name** to "Level"
2. Set **Match** to "Equals"
3. Set **Expected Value Type** to "Numeric"
4. Set **Comparison (Numeric)** to "≥"
5. Set **Operand B (Numeric)** to 5
6. Set **Multi-Match Mode** to "And"
7. Leave **Invert Result** disabled

This filter will pass points where the "Level" tag is 5 or higher.

### Notes

* The filter works with both numeric and string tags
* If a point has multiple tags matching your search criteria, the Multi-Match mode determines whether all must pass or just one
* String comparisons are case-sensitive by default
* For numeric comparisons, use the tolerance setting to handle floating-point precision issues
* You can combine multiple tag value filters using filter groups (AND/OR) for more complex conditions
