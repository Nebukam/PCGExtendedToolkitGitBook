---
description: 'In editor :: PCGEx | Sort Collections'
icon: scrubber
---

# Sort Collections

{% hint style="warning" %}
## AI-generated page - To be reviewed. 
While not 100% accurante, it should properly capture what it does. It stills needs to be reviewed and proofread by a human.
{% endhint %}

> Sort collection using @Data domain attributes.

### Overview

This node reorders collections of data points based on a specified attribute value, allowing you to organize your procedural content in a predictable way. It's particularly useful when you need to sort data by properties like distance, height, or any other numeric attribute before further processing.

The sorting operation works across all input collections and applies the same sorting criteria to each one. You can control whether the sorting is ascending or descending, making it flexible for different use cases such as layering objects from front to back or organizing data for downstream operations that depend on order.

{% hint style="info" %}
This node does not modify the original point positions; it only changes how the collections are ordered internally.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Default Input (Required)**: Accepts multiple collections of points via the main input pin. Each collection will be sorted independently based on the specified attribute.

</details>

<details>

<summary>Outputs</summary>

* **Default Output**: Returns the sorted collections in the same structure as the input, with each collection ordered according to the selected sorting criteria.

</details>

### Properties Overview

Controls how the collections are sorted and what determines their order.

***

#### Sorting Settings

Determines the direction of the sort operation.

**Sort Direction**

_Controls whether the data is sorted in ascending or descending order._

* When set to **Ascending**, lower values appear first in the collection.
* When set to **Descending**, higher values appear first in the collection.

**Values**:

* **Ascending**: Sorts from lowest to highest value
* **Descending**: Sorts from highest to lowest value

### Notes

* Sorting is performed on all input collections simultaneously, maintaining their relative structure.
* The sorting attribute must be defined in the @Data domain of your input points.
* This node works best when used with numeric attributes such as height, distance, or custom float values.
* Consider using this node before operations that require ordered data, like creating layered terrain effects or organizing objects by depth.
