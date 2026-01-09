---
description: 'In editor :: PCGEx | Action : Write Attributes'
icon: circle-dashed
---

# Write Attributes

{% hint style="info" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Creates a filter that forwards attribute values from the input data based on whether a match condition passes or fails.

### Overview

This factory defines an action that writes attribute values to points depending on whether a matching condition succeeds or fails. It's used in conjunction with other filter nodes to control which attributes are written when a point matches or doesn't match a given condition.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes such as "Action : Apply", "Action : Set", etc.
{% endhint %}

### How It Works

This factory defines two separate attribute sets:

* One for attributes to write when the filter **passes**
* One for attributes to write when the filter **fails**

When a point is processed, if it passes the match condition, the success attributes are written. If it fails, the fail attributes are written.

### Inputs

* **Data**: Input point data to process
* **Filter**: Filter condition that determines which attributes to write

### Outputs

* **Result**: Processed point data with applied attribute values

### Configuration

***

#### Success Attributes

**Success Attributes Filter**

_Controls which attributes are forwarded when a match succeeds._

Specify which attributes from the input data should be copied to output points when the filter matches successfully.

**Values**:

* **All**: All attributes from the input point are forwarded
* **Exclude**: Forward all attributes except those listed
* **Include**: Forward only the listed attributes

***

#### Fail Attributes

**Fail Attributes Filter**

_Controls which attributes are forwarded when a match fails._

Specify which attributes from the input data should be copied to output points when the filter does not match.

**Values**:

* **All**: All attributes from the input point are forwarded
* **Exclude**: Forward all attributes except those listed
* **Include**: Forward only the listed attributes

### Usage Example

1. Create a "Filter : By Attribute" node and connect it to your data
2. Add an "Action : Write Attributes" factory to that filter's action pin
3. Configure the success attributes to include "Color" and "Size"
4. Configure the fail attributes to include "Color" only
5. When points pass the attribute filter, they'll get both Color and Size
6. When points fail, they'll only get Color

This allows for conditional attribute assignment based on match results.

### Notes

* Attributes are written to the output data in the order specified by the factory
* If an attribute doesn't exist in the input data, it will be skipped silently
* The same attribute can be included in both success and fail filters
* This factory works best when combined with other filter types like "Filter : By Attribute" or "Filter : By Value"
* When using "Include" mode, make sure to list all desired attributes for each case to avoid unexpected behavior
