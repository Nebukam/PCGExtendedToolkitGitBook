---
description: 'In editor :: PCGEx | Filter : Self Compare (Numeric)'
icon: circle-dashed
---

# Numeric

{% hint style="warning" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Creates a filter definition that compares an attribute numeric value against itself at another index.

### Overview

This filter evaluates whether a point's numeric attribute value meets a comparison condition against the same attribute value from another point in the data set. It's useful for creating rules based on relative positions or values within your point cloud.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes like **Filter Points**, **Transform Points**, or **Generate Points**.
{% endhint %}

### How It Works

The filter compares a numeric attribute value from the current point against the same attribute value from another point, determined by an index. The comparison operator defines how the two values are evaluated.

For example, you can check if a point's height is greater than the height of the point at index 5, or if it's within a certain tolerance of the point at index 3.

### Configuration

***

#### General

**Operand A**

_The numeric attribute to test._

This is the main value that will be compared against another value from the same attribute. The filter reads this as a double-precision floating-point number.

**Comparison**

_How to compare the two values._

**Values**:

* **Equal**: Values must be exactly equal.
* **Not Equal**: Values must not be exactly equal.
* **Less Than**: First value must be less than second.
* **Less Than or Equal**: First value must be less than or equal to second.
* **Greater Than**: First value must be greater than second.
* **Greater Than or Equal**: First value must be greater than or equal to second.
* **Nearly Equal**: Values must be within tolerance of each other.
* **Nearly Not Equal**: Values must differ by more than the tolerance.

**Near-equality Tolerance**

_The tolerance for nearly equal comparisons._

Only used when the comparison is set to **Nearly Equal** or **Nearly Not Equal**. Points are considered "equal" if their difference is less than this value.

For example, with a tolerance of `0.1`, values `1.0` and `1.05` would be considered equal.

**Index Mode**

_How the index value should be interpreted._

**Values**:

* **Pick**: The index value represents an absolute point index.
* **Offset**: The index value is an offset from the current point's index.

**Compare Against**

_Whether to compare against a constant or attribute value._

**Values**:

* **Constant**: Use a fixed index value.
* **Attribute**: Read the index value from an attribute on the input data.

**Index (Attr)**

_The attribute containing the index value._

Only visible when "Compare Against" is set to **Attribute**. This attribute must contain integer values that represent point indices.

**Index**

_The constant index value to compare against._

Only visible when "Compare Against" is set to **Constant**. This is an absolute index or offset depending on the Index Mode setting.

**Index Safety**

_How to handle out-of-bounds indices._

**Values**:

* **Ignore**: Skip points with invalid indices.
* **Tile**: Wrap around using modulo arithmetic (e.g., index 5 in a set of 3 points becomes index 2).
* **Clamp**: Clamp the index to valid range (e.g., index 5 in a set of 3 points becomes index 2).
* **Yoyo**: Mirror indices back and forth (e.g., index 4 in a set of 3 points becomes index 1).

**Invalid Index Fallback**

_How to handle points with invalid indices._

**Values**:

* **Pass**: Points with invalid indices are considered to pass the filter.
* **Fail**: Points with invalid indices are considered to fail the filter.

### Usage Example

Create a filter that marks points as "high" if their height is greater than the point at index 10.

1. Set **Operand A** to your height attribute (e.g., `Height`)
2. Set **Comparison** to **Greater Than**
3. Set **Compare Against** to **Constant**
4. Set **Index** to `10`
5. Set **Index Mode** to **Pick**
6. Connect this filter to a **Filter Points** node

This will pass points where the height is greater than the height of point 10.

### Notes

* The index used for comparison can be either absolute or relative depending on Index Mode.
* When using attribute-based indices, ensure that the attribute contains valid integer values.
* Out-of-bounds indices are handled according to the Index Safety setting.
* This filter is particularly useful for creating neighbor-based conditions or self-referencing rules.

### Inputs

* **Input Data**: The point data to process
* **Index Attribute** (optional): Attribute containing index values when "Compare Against" is set to "Attribute"

### Outputs

* **Filter**: The resulting filter definition that can be connected to processing nodes
