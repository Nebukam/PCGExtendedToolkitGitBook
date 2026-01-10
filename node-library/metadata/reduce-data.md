---
description: 'In editor :: PCGEx | Reduce Data'
icon: circle
---

# Reduce Data

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Reduces metadata attributes from multiple input points into a single output value using various aggregation methods.

#### Overview

This node allows you to combine data from multiple input points and reduce it down to a single value per point. It's useful when you have grouped or clustered data that needs to be summarized, such as averaging values from several points in a cluster or finding the maximum value among them.

It operates on metadata attributes and supports different reduction methods like minimum, maximum, sum, average, joining strings, or hashing values. You can specify which attribute to process and how to combine its values.

{% hint style="info" %}
Connects to **Points** processing nodes (e.g., Cluster, Group) via the main input pin.
{% endhint %}

#### How It Works

This node takes multiple points as input and processes a specified metadata attribute from each point. It applies an aggregation method to combine these values into a single output value per point.

The process works in steps:

1. It reads the selected metadata attribute from all input points.
2. Based on the chosen **Method**, it performs an operation across those values:
   * For **Min**, **Max**, **Sum**, and **Average**, it computes the respective mathematical result.
   * For **Join**, it concatenates string values using a delimiter.
   * For **Hash** or **UnsignedHash**, it combines values into a hash, with sorted order for UnsignedHash.
3. The resulting value is written to the output point's metadata attribute.

The node supports both numeric and string types depending on the method used. For methods like Join, only string-based attributes are valid.

<details>

<summary>Inputs</summary>

* **Main Input**: Points with metadata attributes to be reduced.
* **Optional Filters**: Point filters can be applied before processing.

</details>

<details>

<summary>Outputs</summary>

* **Main Output**: Points with the same structure as input, but with the specified attribute replaced by a single computed value per point.

</details>

#### Configuration

<details>

<summary><strong>Attributes</strong><br><em>Selects which metadata attributes to process.</em></summary>

Choose the source and target attributes. The node will read from the source and write the result to the target.

</details>

<details>

<summary><strong>Method</strong><br><em>Determines how values are combined.</em></summary>

Controls the logic used to reduce multiple values into one.

**Values**:

* **Min**: Selects the smallest value.
* **Max**: Selects the largest value.
* **Sum**: Adds all values together.
* **Average**: Computes the arithmetic mean.
* **Join**: Concatenates string values with a delimiter.
* **Hash**: Combines values into a hash (in order of inputs).
* **Hash (Sorted)**: Sorts values first, then combines them into a hash.

</details>

<details>

<summary><strong>bCustomOutputType</strong><br><em>When enabled, allows specifying the output data type.</em></summary>

When enabled, you can override the default output type for numeric results. This is not supported for string-based methods like Join or Hash.

</details>

<details>

<summary><strong>OutputType</strong><br><em>Specifies the data type of the reduced output.</em></summary>

Only used when **bCustomOutputType** is enabled. Determines how numeric values are stored in the output attribute.

</details>

<details>

<summary><strong>JoinDelimiter</strong><br><em>Defines the separator used when joining strings.</em></summary>

Used only when the **Method** is set to Join. Controls what separates each joined value in the final string.

</details>

#### Usage Example

You have a cluster of points, each with a "Health" attribute. You want to find the average health of all points within each cluster and store that as a new attribute on the cluster's representative point.

1. Connect your clustering node to this node.
2. Set **Method** to Average.
3. Select "Health" as the input attribute.
4. The output will contain a single averaged value per cluster point.

#### Notes

* For methods like Join or Hash, only string-type attributes are valid.
* When using **Hash (Sorted)**, values are sorted before hashing for consistent results.
* Performance can be impacted by large numbers of input points due to sorting and hash computation.
