---
description: 'In editor :: PCGEx | Match : Tags × Attributes'
icon: circle-dashed
---

# Tags × Attributes

{% hint style="warning" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Compares attribute values on targets against tags on inputs, allowing you to match data based on tag names and optional tag values.

### Overview

This node enables you to create matching rules that compare attributes from your target data against tags present on input data. It's particularly useful for filtering or grouping points based on their associated tags, such as matching a point's category attribute against a tag name or value.

The node works by reading tag information from input data and comparing it with attribute values from target data. You can match both tag names and optional tag values using various comparison methods.

{% hint style="info" %}
This node requires inputs to have tags defined, typically through nodes like "Tag Points" or similar tagging operations.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Tags Input** (required): Data containing tags to match against
* **Targets Input** (required): Data with attributes to compare against tag values

</details>

<details>

<summary>Outputs</summary>

* **Match Rule Output**: A match rule that can be used by matching nodes like "Find Matches" or "Filter Points"

</details>

### Properties Overview

Controls how the node compares tag names and optional tag values.

***

#### Tag Name Source

Configures how to read the tag name for comparison.

**Tag Name Input Type**

_Controls whether the tag name is read from an attribute or used as a constant._

* When set to **Constant**, the tag name is taken directly from the "Tag Name" setting
* When set to **Attribute**, the tag name is read from the input data using the "Tag Name (Attr)" attribute

**Tag Name (Attr)**

_The attribute to read the tag name from when "Tag Name Input Type" is set to "Attribute"._

* Must be an attribute of type String on the input data
* Used only when "Tag Name Input Type" is set to **Attribute**

**Tag Name**

_The constant tag name to match against when "Tag Name Input Type" is set to "Constant"._

* Used only when "Tag Name Input Type" is set to **Constant**
* Example: If set to "Forest", the node will look for a tag named "Forest" on input data

**Match**

_The method used to compare tag names._

**Values**:

* **Equals**: Tag name must exactly match the specified name
* **Contains**: Tag name must contain the specified name as a substring
* **Starts With**: Tag name must start with the specified name
* **Ends With**: Tag name must end with the specified name

***

#### Value Matching

When enabled, compares tag values against target attributes.

**Do Value Match**

_When enabled, the node will also compare tag values against target attribute values._

* If disabled, only tag names are compared
* When enabled, you can specify how to compare the values using numeric or string comparisons

**Value Type**

_Specifies whether the tag value should be treated as a numeric or string type for comparison._

**Values**:

* **Numeric**: Tag values are treated as numbers
* **String**: Tag values are treated as text

**Value Attribute**

_The attribute to read the target value from when "Do Value Match" is enabled._

* Must match the data type specified in "Value Type"
* For numeric comparisons, this should be a numeric attribute
* For string comparisons, this should be a string attribute

**Numeric Comparison**

_The comparison method used for numeric values._

**Values**:

* **Strictly Equal**: Values must be exactly equal
* **Nearly Equal**: Values must be within tolerance range
* **Strictly Not Equal**: Values must not be exactly equal
* **Nearly Not Equal**: Values must not be within tolerance range
* **Greater Than**: Target value must be greater than tag value
* **Greater Than or Equal**: Target value must be greater than or equal to tag value
* **Less Than**: Target value must be less than tag value
* **Less Than or Equal**: Target value must be less than or equal to tag value

**String Comparison**

_The comparison method used for string values._

**Values**:

* **Strictly Equal**: Strings must exactly match
* **Strictly Not Equal**: Strings must not exactly match
* **Length Strictly Equal**: String lengths must be exactly equal
* **Length Strictly Unequal**: String lengths must not be exactly equal
* **Length Equal or Greater**: Target string length must be equal to or greater than tag string length
* **Length Equal or Smaller**: Target string length must be equal to or smaller than tag string length
* **Strictly Greater**: Target string must be lexicographically greater than tag string
* **Strictly Smaller**: Target string must be lexicographically smaller than tag string
* **Contains**: Target string must contain the tag string as a substring
* **Starts With**: Target string must start with the tag string
* **Ends With**: Target string must end with the tag string

**Tolerance**

_The tolerance range used for "Nearly Equal" and "Nearly Not Equal" comparisons._

* Only applies when using numeric comparisons with "Nearly Equal" or "Nearly Not Equal"
* Default value is `DBL_COMPARE_TOLERANCE` (typically around 1e-4)
* Affects how close two numbers must be to be considered equal

### Notes

* This node is commonly used in combination with nodes like "Find Matches" or "Filter Points" to create conditional logic based on tag data
* Tag names and values are case-sensitive by default
* When using string comparisons, the comparison methods work on the full string content
* For performance reasons, avoid complex string operations when possible
* You can chain multiple match rules together to create more complex matching conditions
* The "Match" setting allows for flexible tag name matching, useful when tags have prefixes or suffixes that should be ignored during matching
