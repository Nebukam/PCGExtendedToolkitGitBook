---
description: 'In editor :: PCGEx | Merge Points'
icon: circle
---

# Merge Points

{% hint style="warning" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> An alternative to the native Merge Points node with additional controls.

### Overview

This node combines multiple point inputs into a single output, similar to the standard Merge Points node but with enhanced functionality. It allows you to control how data is merged and carried over from multiple inputs, including sorting options and tag-to-attribute conversion. This is particularly useful when working with complex procedural workflows where you need fine-grained control over how multiple point datasets are combined.

{% hint style="info" %}
This node supports multiple input pins and will merge all points from connected inputs into a single output.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Default Input** (Multiple): Accepts one or more point data inputs to be merged
* **Optional Filter Input**: Optional point filter that can be used to filter input points before merging

</details>

<details>

<summary>Outputs</summary>

* **Default Output**: A single merged point dataset containing all points from the inputs

</details>

### Properties Overview

This node provides controls for sorting merged data, carrying over attributes and tags, and converting tags into attributes.

***

#### Settings

Controls how the points are merged and what metadata is preserved.

**Collection Sorting**

_Specifies how to sort the merged point collection._

* Points will be sorted according to this rule after merging
* Sorting can be applied to any tag or attribute value
* Sorting direction can be set to ascending or descending

**Values**:

* **Enabled**: Enable sorting of the merged collection
* **Direction**: Set sorting direction (ascending or descending)
* **Tag Name**: The tag or attribute used for sorting values
* **Tolerance**: Tolerance for floating point comparisons when sorting

**Carry Over Settings**

_Configures which attributes and tags are carried over from input points._

* Determines what data is preserved in the output points
* Can filter which attributes and tags are copied over
* Useful for maintaining metadata across merged datasets

**Values**:

* **Filter Mode**: Choose to include, exclude, or keep all attributes
* **Matches**: List of attribute/tag names to include/exclude
* **Comma Separated Names**: Simple list of names (comma-separated) to apply the same filter mode to

**Tag To Attributes**

_When enabled, converts simple tags into attributes._

* Converts tags that are not already attributes into actual attributes
* Supports conversion to boolean, int32, double, FString, and FVector (2-4 components)
* Simple tags will be converted to boolean values by default

**Values**:

* **Tags To Attributes**: Enable tag-to-attribute conversion
* **Tags To Convert**: List of tag names to convert into attributes

**Warnings and Errors**

**bQuietTagOverlapWarning**

_When enabled, suppresses warnings about overlapping tag names._

* Prevents warning messages when tags with the same name exist in multiple inputs
* Useful when you're intentionally using overlapping tags and want to avoid cluttered logs
