---
description: 'In editor :: PCGEx | Filter : Picker'
icon: circle-dashed
---

# Picker

{% hint style="warning" %}
## AI-generated page - To be reviewed. 
While not 100% accurante, it should properly capture what it does. It stills needs to be reviewed and proofread by a human.
{% endhint %}

> Creates a filter definition that checks if the point or collection index is picked, using picker factories.

### Overview

This filter factory determines whether points or collections should pass a filter condition based on whether their indices are "picked" by one or more picker factories. It's used to selectively include or exclude elements in procedural workflows.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes like **Filter Points**, **Filter Collections**, or **Branch**.
{% endhint %}

### How It Works

The filter evaluates each point or collection against a set of picker factories. A point or collection "passes" the filter if its index is included in at least one of the pickers. You can invert this behavior to instead exclude picked items.

Pickers define which indices are considered "picked". Common picker types include:

* **Index Picker**: Selects specific indices
* **Range Picker**: Selects a range of indices
* **Random Picker**: Randomly selects indices

### Configuration

***

#### General

**Force Per-Point Evaluation**

_When enabled, forces the filter to evaluate each point individually even when used in collections._

This is useful when you want to ensure that collection-level filtering doesn't override point-level selection logic.

**Invert**

_When enabled, reverses the filter behavior._

Instead of including picked points/collections, this will exclude them. For example, if a picker selects indices 0, 1, and 2, enabling invert will cause those indices to fail the filter while all others pass.

### Usage Example

You have a point cloud with 100 points and want to process only the first 10 points in your workflow.

1. Create an **Index Picker** node and configure it to pick indices 0 through 9
2. Connect this picker to a **Filter : Picker** node
3. Connect the **Filter : Picker** to a **Filter Points** node
4. The result is that only the first 10 points will be processed by downstream nodes

You can also use it with collections:

1. Create a **Collection Picker** that selects specific collection indices
2. Connect this to a **Filter : Picker**
3. Use it in a **Filter Collections** node to process only selected collections

### Notes

* Multiple picker factories can be connected to the same filter, allowing for complex selection logic
* The filter supports both point-level and collection-level evaluation
* When using with collections, consider enabling "Force Per-Point Evaluation" if you want individual points within collections to be filtered independently
* This filter is particularly useful when combined with other filters using logical operators (AND/OR) to create multi-condition selection criteria
