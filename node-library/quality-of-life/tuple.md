---
description: 'In editor :: PCGEx | Tuple'
icon: circle
---

# Tuple

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Creates a structured data attribute by combining multiple typed values into a single tuple that can be used for storage or further processing.

#### How It Works

The Tuple node organizes related data by grouping multiple typed values into a single structured attribute. Each tuple contains named fields, each with its own data type and default value. The node assigns these values to each point or element in the input data, creating a consistent structure that can be used throughout your procedural workflow.

When processing input data:

1. The node reads the defined structure from the Composition settings
2. It creates a new metadata attribute for each tuple row
3. For every point or element, it assigns values from the Values array to the corresponding fields
4. The result is a structured tuple that maintains all field relationships

This approach keeps related information together, making it easier to manage complex data sets and pass them between different processing steps.

#### Configuration

<details>

<summary><strong>Composition</strong><br><em>Defines the structure of each tuple row with named fields and their data types.</em></summary>

Sets up the format for your tuple data. Each entry defines one row containing multiple fields, each with a name and type.

* **Name**: The label used to identify this row in the tuple
* **DefaultData**: The data type and default value for this field (such as float, vector, or color)

</details>

<details>

<summary><strong>Values</strong><br><em>Provides the actual data values for each tuple row.</em></summary>

Contains the real data that will be stored in your tuples. Each entry corresponds to a row defined in Composition.

* **Row**: An array of typed values matching the structure defined in Composition. These are the actual values assigned to each field

</details>

<details>

<summary><strong>CommaSeparatedTags</strong><br><em>A list of tags separated by commas, for easy filtering and organization.</em></summary>

A string of comma-separated labels used to categorize or filter this node's behavior in certain contexts. Useful for organizing and managing multiple nodes.

</details>
