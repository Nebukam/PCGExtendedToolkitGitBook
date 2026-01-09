---
description: 'In editor :: PCGEx | Filter : Compare Nearest (Numeric)'
icon: circle-dashed
---

# Compare Nearest (Numeric)

{% hint style="warning" %}
## AI-generated page - To be reviewed. 
While not 100% accurante, it should properly capture what it does. It stills needs to be reviewed and proofread by a human.
{% endhint %}

> Creates a filter definition that compares two numeric attribute values by finding the nearest point in a target set and comparing their values.

### Overview

This factory generates a filter that evaluates whether a point's attribute value meets a comparison condition against the nearest point's attribute value from a specified target set. It's useful for creating spatially-aware filters that consider relationships between points in your data.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes like **Filter Points**, **Filter Curves**, or other nodes that accept filter definitions.
{% endhint %}

### How It Works

The filter works by:

1. For each point in the input data, it finds the nearest point in a target set
2. It reads numeric values from both points using specified attribute selectors
3. It compares these two values using a comparison operator (e.g., equal, greater than, etc.)
4. If the comparison passes, the point is included in the output; otherwise, it's filtered out

The nearest point search uses configurable distance methods and can ignore self-references.

### Inputs

* **Input Points**: The set of points to be filtered
* **Target Points**: The set of points used to find the nearest neighbors for comparison

### Outputs

* **Filter**: A filter definition that can be connected to processing nodes

### Configuration

***

#### General

**Distance Details**

_Controls how distances are calculated between points._

Use this to define what constitutes "nearest" when comparing points. You can choose different distance metrics like Euclidean, Manhattan, or others.

**Operand A**

_Reads a numeric value from the input points._

This is the first operand in your comparison. It reads a numeric attribute from each point being tested.

**Comparison**

_Selects the type of comparison to perform._

**Values**:

* **==**: Strictly equal
* **!=**: Strictly not equal
* **>=**: Equal or greater than
* **<=**: Equal or smaller than
* **>**: Strictly greater than
* **<**: Strictly smaller than
* **\~=**: Nearly equal (within tolerance)
* **!\~=**: Nearly not equal (outside tolerance)

**Compare Against**

_Specifies whether Operand B is a constant or attribute value._

**Values**:

* **Constant**: Use a fixed numeric value for Operand B
* **Attribute**: Read Operand B from an attribute on the target points

**Operand B (Attr)**

_Reads a numeric value from the target points._

Only visible when "Compare Against" is set to "Attribute". This defines which attribute to read from the nearest target point.

**Operand B**

_Specifies a constant value for Operand B._

Only visible when "Compare Against" is set to "Constant". This is the fixed numeric value used in comparisons.

**Tolerance**

_Tolerance for nearly equal comparisons._

Only visible when using **\~=** or **!\~=** comparisons. Defines how close values must be to be considered equal.

**Ignore Self**

_When enabled, prevents a point from comparing against itself._

If enabled, the filter will skip the comparison if the nearest target point is the same as the input point being tested. This is useful when you want to compare against other points in the set, not the point itself.
