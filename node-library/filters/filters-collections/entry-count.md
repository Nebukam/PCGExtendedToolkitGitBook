---
description: 'In editor :: PCGEx | Data Filter : Entry Count'
icon: circle-dashed
---

# Entry Count

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Filters points based on a numeric comparison against the number of entries in a collection.

### Overview

This filter evaluates whether the number of entries (points) in a collection meets a specified condition. It's commonly used to validate or select collections that have a specific size, such as ensuring a group has exactly 5 points, or at least 10 points.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes like **Filter Points**, **Filter Collections**, or **Filter Data**.
{% endhint %}

### How It Works

The filter compares the number of entries in a collection against a target value using a comparison operator. The target value can be either a constant or read from an attribute on the input data.

* If the comparison passes, the collection is considered to "pass" the filter.
* If the comparison fails, the collection is considered to "fail" the filter.

### Inputs

* **Filter** (Pin): Accepts collections to be filtered
* **Collection** (Pin): Input collections to evaluate

### Outputs

* **Pass** (Pin): Collections that meet the filter criteria
* **Fail** (Pin): Collections that do not meet the filter criteria

### Configuration

***

#### General

**Comparison**

_The mathematical operation used to compare entry count against Operand B._

**Values**:

* **==**: Entry count must exactly equal Operand B
* **!=**: Entry count must not equal Operand B
* **>=**: Entry count must be greater than or equal to Operand B
* **<=**: Entry count must be less than or equal to Operand B
* **>**: Entry count must be strictly greater than Operand B
* **<**: Entry count must be strictly less than Operand B
* **\~=**: Entry count must be nearly equal to Operand B (within tolerance)
* **!\~=:** Entry count must not be nearly equal to Operand B (outside tolerance)

**Compare Against**

_Whether Operand B is a constant value or read from an attribute._

When enabled, Operand B will be read from the input data using the specified attribute.

**Values**:

* **Constant**: Use a fixed number for comparison
* **Attribute**: Read the comparison value from an attribute on the input data

**Operand B (Attr)**

_The attribute to read the comparison value from._

Only visible when "Compare Against" is set to **Attribute**.

**Operand B**

_The constant value to compare entry count against._

Only visible when "Compare Against" is set to **Constant**.

**Tolerance**

_Used for nearly equal comparisons (&#x20;_~~_= and !_~~_= )._

Controls how close the entry count must be to Operand B to be considered equal. A tolerance of `0.01` means values within 0.01 of each other are treated as equal.

### Usage Example

You're creating a procedural forest where each tree cluster should contain between 5 and 20 points (trees). You want to filter out clusters that have too few or too many trees.

1. Add a **Data Filter : Entry Count** node to your graph
2. Set **Compare Against** to **Constant**
3. Set **Operand B** to `5`
4. Set **Comparison** to **>=**
5. Connect this filter to the **Filter** pin of a **Filter Collections** node
6. Repeat steps 1-5 with a second filter:
   * Set **Operand B** to `20`
   * Set **Comparison** to **<=**

This will only pass collections that have between 5 and 20 entries.

### Notes

* The filter works on collection data, not individual points.
* When using an attribute for Operand B, make sure the attribute exists and is readable.
* For nearly equal comparisons, consider the tolerance value carefully to avoid false negatives due to floating-point precision.
* Multiple filters can be combined using **Filter Group** nodes to create complex conditions.
