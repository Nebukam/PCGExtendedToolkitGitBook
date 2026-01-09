---
description: 'In editor :: PCGEx | Data Filter : Tag Value'
icon: circle-dashed
---

# Tag Value

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Test the value of one or multiple tags.

#### Overview

This subnode filters points based on the value of specified tags. It checks whether a point's tag matches certain conditions and returns true or false accordingly. You can configure how many matching tags are required to pass the filter, and whether to invert the result.

It connects to Filter pins on processing nodes, where it defines which points should be included in downstream operations.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes.
{% endhint %}

#### How It Works

This subnode evaluates tags attached to each point and compares their values against a set of criteria. It first identifies all tags that match the configured tag name, then applies comparison logic based on the specified value type (numeric or string). If multiple matching tags are found, it uses the multi-match mode to determine whether any or all must pass. Finally, if inversion is enabled, it flips the result.

<details>

<summary>Inputs</summary>

* Points with associated tags
* Tag name to test
* Comparison criteria (value type, comparison operator, operand)

</details>

<details>

<summary>Outputs</summary>

* Boolean result indicating whether a point passes or fails the filter

</details>

#### Configuration

***

**Tag Name**

_Name of the tag to check on each point._

This defines which tag's value will be tested. For example, if set to "Health", it checks the "Health" tag on each point.

**Match**

_How to match tags with the given name._

* **Equals**: Matches exact tag names.
* **Contains**: Matches tag names that contain the specified string.
* **StartsWith**: Matches tag names starting with the specified string.
* **EndsWith**: Matches tag names ending with the specified string.

**Value Type**

_Specifies whether to compare numeric or string values._

* **Numeric**: Compares tag values as numbers.
* **String**: Compares tag values as text.

**Comparison (Numeric)**

_The comparison operator for numeric values._

* **==**: Equal to
* **!=**: Not equal to
* **>**: Greater than
* **<**: Less than
* **>=**: Greater or equal to
* **<=**: Less or equal to
* **NearlyEqual**: Equal within a tolerance
* **NearlyNotEqual**: Not equal within a tolerance

**Operand B (Numeric)**

_The numeric value to compare against._

This is the second operand in the comparison. For example, if comparing "Health" tag with `>50`, this sets the threshold to 50.

**Near-equality Tolerance**

_Tolerance for nearly equal comparisons._

Only used when using **NearlyEqual** or **NearlyNotEqual**. Defines how close two numbers must be to be considered equal.

**Comparison (String)**

_The comparison operator for string values._

* **==**: Strictly equal
* **!=**: Strictly not equal
* **Contains**: Contains the substring
* **StartsWith**: Starts with the substring
* **EndsWith**: Ends with the substring
* **Length ==**: Equal to length
* **Length !=**: Not equal to length
* **Length >=**: Greater or equal to length
* **Length <=**: Less or equal to length
* **> (Length)**: Greater than length
* **< (Length)**: Less than length
* **> (Locale)**: Locale strictly greater
* **< (Locale)**: Locale strictly smaller

**Operand B (String)**

_The string value to compare against._

This is the second operand in the comparison. For example, if comparing a "Name" tag with `== "Player"`, this sets the target name to "Player".

**Multi-Match**

_How multiple matching tags are evaluated._

* **AND**: All matching tags must satisfy the condition.
* **OR**: At least one matching tag must satisfy the condition.

**Invert**

_Inverts the result of the filter._

When enabled, points that would normally pass now fail, and vice versa.

#### Usage Example

Suppose you have a collection of points tagged with "Type" and "Health". You want to keep only points where:

* The "Type" tag equals "Enemy"
* The "Health" tag is greater than 100

You can use two instances of this subnode:

1. First filter: Tag = "Type", Value Type = String, Comparison = ==, Operand B = "Enemy"
2. Second filter: Tag = "Health", Value Type = Numeric, Comparison = >, Operand B = 100

Connect both filters to a processing node using **AND** mode so that only points passing both conditions are included.

#### Notes

* If no tags match the specified name, the filter returns false.
* When multiple matching tags exist and Multi-Match is set to OR, the filter passes if any of them meet the criteria.
* This subnode works with any tag type, but comparisons must align with the expected data type.
* Performance can be affected when using many tags or complex string comparisons.
