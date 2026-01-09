---
description: 'In editor :: PCGEx | Filter : Compare (String)'
icon: circle-dashed
---

# String

{% hint style="warning" %}
## AI-generated page - To be reviewed. 
While not 100% accurante, it should properly capture what it does. It stills needs to be reviewed and proofread by a human.
{% endhint %}

> Creates a filter definition that compares two string attribute values.

### Overview

This filter factory generates a comparison operation between two string values, allowing you to test conditions such as equality, substring matching, or length-based comparisons. It's used to filter points based on string attribute values in your PCG graph.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes like **Point Filter**, **Point Switch**, or **Point Merge**.
{% endhint %}

### How It Works

This factory evaluates a comparison between two string operands. The first operand (Operand A) is always read from an attribute on the input points. The second operand (Operand B) can be either a constant value or another attribute, depending on your configuration. You can choose from various comparison types to define what constitutes a "pass" for each point.

### Configuration

***

#### General

**Operand A**

_The first string value to compare, read from an attribute on the input points._

Set this to the name of the string attribute you want to test. For example, if you have an attribute named `ObjectName`, set this to `ObjectName`.

**Comparison**

_How to compare the two operands._

**Values**:

* **==**: Operand A strictly equals Operand B
* **!=**: Operand A strictly does not equal Operand B
* **== (Length)**: Operand A's length strictly equals Operand B's length
* **!= (Length)**: Operand A's length strictly does not equal Operand B's length
* **>= (Length)**: Operand A's length is equal to or greater than Operand B's length
* **<= (Length)**: Operand A's length is equal to or smaller than Operand B's length
* **> (Length)**: Operand A's length is strictly greater than Operand B's length
* **< (Length)**: Operand A's length is strictly smaller than Operand B's length
* **> (Locale)**: Operand A is locale strictly greater than Operand B (lexicographical)
* **< (Locale)**: Operand A is locale strictly smaller than Operand B (lexicographical)
* **Contains**: Operand A contains Operand B as a substring
* **Starts With**: Operand A starts with Operand B
* **Ends With**: Operand A ends with Operand B

**Compare Against**

_Whether Operand B is a constant or an attribute._

When set to **Attribute**, Operand B will be read from another string attribute on the input points. When set to **Constant**, Operand B uses the value you provide in the next setting.

**Operand B (Attr)**

_The second string value to compare, read from an attribute on the input points._

Only visible when "Compare Against" is set to **Attribute**. Set this to the name of the second string attribute you want to test against.

**Operand B**

_The second string value to compare, used as a constant._

Only visible when "Compare Against" is set to **Constant**. Enter the string value you want to compare against.

**Swap Operands**

_When enabled, swaps the order of operands in the comparison._

This is useful for inverting certain comparisons like "contains". For example, if you're checking that a point's attribute contains a specific substring, you might swap the operands to check if the substring contains the point's attribute instead.

### Usage Example

You have a set of points with a `Category` string attribute and want to filter only those where the category is "Building".

1. Create a **Filter : Compare (String)** node
2. Set **Operand A** to `Category`
3. Set **Comparison** to **==**
4. Set **Compare Against** to **Constant**
5. Set **Operand B** to `"Building"`

This filter will pass only points where the `Category` attribute strictly equals "Building".

### Notes

* The comparison is case-sensitive by default
* For length-based comparisons, the string lengths are compared numerically
* Use "Swap Operands" when you need to reverse the direction of a substring check
* This filter works with any string attributes in your point data
* You can chain multiple instances together using **Filter : Combine** to create complex filtering logic

### Inputs and Outputs

#### Inputs

* **Default**: Accepts point data with string attributes to be filtered

#### Outputs

* **Filter**: Outputs the filtered point data based on the comparison criteria
