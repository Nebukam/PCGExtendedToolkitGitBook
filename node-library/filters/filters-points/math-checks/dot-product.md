---
description: 'In editor :: PCGEx | Filter : Dot'
icon: circle-dashed
---

# Dot Product

{% hint style="warning" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Creates a filter definition that compares the dot product of two vectors.

### Overview

This filter evaluates the dot product between two vector operands and compares the result against a threshold or target value. It's useful for determining angular relationships between vectors, such as whether a point's forward direction is pointing toward or away from a target, or if it's within a certain angle range.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes like **Point Filter**, **Point Switch**, or **Point Merge**.
{% endhint %}

### How It Works

The filter computes the dot product of two vectors and compares it against a target value using a comparison operator. The dot product is a scalar value that represents the cosine of the angle between two normalized vectors, scaled by their magnitudes.

* A dot product of 1 means the vectors are pointing in the same direction (0°).
* A dot product of -1 means they're pointing in opposite directions (180°).
* A dot product of 0 means they're perpendicular (90°).

The filter can compare this result against a constant or an attribute value using various comparison operators.

### Configuration

***

#### General

**Vector Operand A**

_The first vector used in the dot product calculation._

You can specify either a constant vector or read from an attribute on the input data. If you're comparing against a point's forward direction, for example, you might use the "Forward" attribute of the point.

**Transform Operand A with Point Transform**

_When enabled, the first operand is transformed using the local point's transform._

This applies the point's rotation and scale to the vector before computing the dot product. Useful when working with local space vectors.

**Invert Operand A**

_When enabled, the first operand is inverted (multiplied by -1) before comparison._

Useful for flipping the direction of a vector, such as inverting a normal or forward vector.

**Type of Operand B**

_How to determine the second vector used in the dot product._

* **Constant**: Use a fixed vector value.
* **Attribute**: Read the vector from an attribute on the input data.

**Operand B (Attribute)**

_The second vector operand, read from an attribute._

Only visible when "Type of Operand B" is set to "Attribute".

**Invert Operand B**

_When enabled, the second operand is inverted (multiplied by -1) before comparison._

Useful for flipping the direction of a vector, such as inverting a normal or forward vector.

**Operand B (Constant)**

_The second vector operand, used when "Type of Operand B" is set to "Constant"._

Only visible when "Type of Operand B" is set to "Constant".

**Transform Operand B with Point Transform**

_When enabled, the second operand is transformed using the local point's transform._

This applies the point's rotation and scale to the vector before computing the dot product. Useful when working with local space vectors.

***

#### Dot Comparison Settings

**Comparison Operator**

_How to compare the computed dot product against the target value._

* **==**: Strictly equal to target.
* **!=**: Strictly not equal to target.
* **>=**: Equal or greater than target.
* **<=**: Equal or smaller than target.
* **>**: Strictly greater than target.
* **<**: Strictly smaller than target.
* **\~=**: Nearly equal to target (within a small epsilon).
* **!\~=**: Nearly not equal to target.

**Target Value**

_The value to compare the dot product against._

This can be a constant scalar or read from an attribute. For example, if you want to filter points that are facing toward a target within 45 degrees, you'd use a cosine of 45° (approximately 0.707) as your target.

**Epsilon**

_The tolerance used for "nearly equal" comparisons._

Only relevant when using the `~=`, or `!~=` comparison operators. Defines how close the dot product must be to the target value to be considered "equal".

### Usage Example

You want to filter points that are facing toward a specific direction (like "up") within 30 degrees.

1. Set **Operand A** to read the point's "Forward" vector.
2. Set **Operand B** to a constant vector `FVector::UpVector`.
3. Enable **Transform Operand A with Point Transform** so the forward vector is in world space.
4. Set **Comparison Operator** to `>=`.
5. Set **Target Value** to `0.866` (cosine of 30 degrees).
6. Connect this filter factory to a **Point Filter** node.

This will pass points whose forward direction is within 30° of the up vector.

### Notes

* The dot product is computed using normalized vectors, so it's best to use unit vectors or ensure your vectors are properly normalized.
* For angle-based filtering, remember that the dot product of two unit vectors equals the cosine of the angle between them.
* You can combine multiple filters to create more complex conditions, such as "is facing up AND within 45 degrees of a specific direction".
* When using attribute-based operands, ensure the attributes exist on your input data or the filter will fail.
