---
description: 'In editor :: PCGEx | Filter : Contains (Hash)'
icon: circle-dashed
---

# Contains (Hash)

{% hint style="info" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Creates a filter definition that checks whether a given value hash is contained within one or more sets of values. This filter uses hash comparisons, making it highly type-sensitive.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes like **Filter Points**, **Filter Curves**, or **Filter Meshes**.
{% endhint %}

### Overview

This factory creates a filter that evaluates whether a point's attribute value exists within one or more predefined sets. It's particularly useful for checking if a point's data matches any item in a collection, such as validating if a point's ID is part of a list of valid IDs.

When you use this filter, it compares the hash of the input value against hashes stored in your sets. Because it's based on hashing, it's very fast but also very strict about data types — for example, a float `0` and a double `0` are considered different values.

### How It Works

The filter works by:

1. Reading an attribute from each point (Operand A)
2. Comparing its hash against hashes in one or more sets
3. Returning whether the value is found based on the inclusion mode

It supports two processing modes:

* **Merged**: All input sets are combined into a single set for comparison
* **Individual**: Each set is tested separately, and results are combined based on inclusion mode

### Configuration

***

#### General

**Mode**

_Controls how multiple sets are processed._

When set to **Merged**, all input sets are combined into one large set before checking. When set to **Individual**, each set is treated separately.

**Values**:

* **Merged**: All input sets will be merged into a single set.
* **Individual**: Input sets are kept separated, and tested individually.

**Inclusion**

_Controls how multiple sets are evaluated when in Individual mode._

This setting only appears when **Mode** is set to **Individual**.

**Values**:

* **Any**: Value must be present in at least one set for the filter to pass.
* **All**: Value must be present in all input sets for the filter to pass.

**Operand A**

_Name of the attribute to test._

This is the point attribute whose value will be hashed and compared against your sets. For example, if you're checking if a point's ID exists in a list, set this to `ID`.

**Set Attribute Name**

_Name of the attribute to read from input sets._

This defines which attribute within each set is used for comparison. If your sets contain points with an attribute named `Value`, use that name here.

**bInvert**

_When enabled, the result of the filter is inverted._

If this is enabled, points that would normally pass the filter will fail, and vice versa.

### Usage Example

You want to filter points so that only those whose ID exists in a predefined list are kept.

1. Create a **Filter : Contains (Hash)** node
2. Set **Operand A** to `ID` (the attribute on your points)
3. Set **Set Attribute Name** to `Value` (the attribute in your set data)
4. Connect your set data to the input pin of this filter
5. Connect the filter to a **Filter Points** node

This will keep only points where the value of their `ID` attribute is found in any of the sets.

### Notes

* This filter uses hash comparisons, so it's very fast but also type-sensitive.
  * For example: Float `0` ≠ Double `0`
* When using **Individual** mode, make sure to set up your input sets correctly for the desired inclusion behavior.
* If you're unsure about data types, consider using a **Filter : Contains (Value)** node instead, which does not rely on hashing.

***

### Inputs

* **Filter**: Accepts filter definitions for processing nodes
* **Set Data**: Input point data containing the attribute values to compare against

### Outputs

* **Filter**: Output pin for connecting to downstream processing nodes like Filter Points, Filter Curves, or Filter Meshes
