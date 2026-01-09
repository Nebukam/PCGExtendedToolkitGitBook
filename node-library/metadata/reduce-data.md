---
description: 'In editor :: PCGEx | Reduce Data'
icon: circle
---

# Reduce Data

{% hint style="info" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Reduce multiple @Data domain attributes into a single output value using various aggregation methods.

### Overview

This node combines multiple attributes from the @Data domain into a single output value using different mathematical or logical operations. It's useful when you want to consolidate several attribute values into one, such as combining multiple scalar values into an average, or joining string values together.

{% hint style="info" %}
The node operates on the @Data domain attributes and does not modify the input points directly. The output is written to a new attribute in the output data.
{% endhint %}

<details>

<summary>Inputs</summary>

* **@Data** (Multiple): One or more input data sources containing attributes to be reduced.

</details>

<details>

<summary>Outputs</summary>

* **Default**: Output point data with the reduced attribute written to it.

</details>

### Properties Overview

Controls how the reduction is performed and what output is generated.

***

#### Settings

Configures the reduction operation and output behavior.

**Attributes**

_The input attributes to reduce._

* Specifies which attributes from the @Data domain will be processed
* Multiple attributes can be selected for reduction
* The node will process all selected attributes using the chosen method

**Method**

_How to combine the attribute values._

* **Min**: Take the smallest value among all inputs
* **Max**: Take the largest value among all inputs
* **Sum**: Add all values together
* **Average**: Calculate the mean of all values
* **Join**: Concatenate string values with a delimiter
* **Hash**: Generate a hash from the values in input order
* **Hash (Sorted)**: Sort values first, then generate a hash

**bCustomOutputType**

_When enabled, allows you to specify the output attribute type._

* Enable this to control the data type of the resulting attribute
* If disabled, the node will infer the output type from the input attributes

**OutputType**

_The data type of the resulting attribute._

* Only visible when "bCustomOutputType" is enabled
* Determines how the reduced value is stored in the output attribute
* Not supported for "Join" method as it always produces a string result

**JoinDelimiter**

_The delimiter used to separate joined values._

* Only visible when "Method" is set to "Join"
* Controls how individual string values are combined
* Default is ", " (comma followed by space)
