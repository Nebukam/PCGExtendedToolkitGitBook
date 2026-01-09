---
description: 'In editor :: PCGEx | Fill Control : Running Average'
icon: circle-dashed
---

# FC : Running Average

{% hint style="warning" %}
## AI-generated page - To be reviewed. 
While not 100% accurante, it should properly capture what it does. It stills needs to be reviewed and proofread by a human.
{% endhint %}

> Ignore candidates which attribute value isn't within the given tolerance of a running average.

### Overview

This factory defines a **candidate validation rule** for flood fill operations. It filters out candidates based on how their attribute values compare to a moving average of previously accepted candidates.

{% hint style="info" %}
Connects to **Fill Control** pins on flood fill nodes
{% endhint %}

### How It Works

This factory calculates a running average of the selected attribute values from all previously accepted candidates in the current diffusion. When a new candidate is considered, it checks whether that candidate's attribute value falls within a specified tolerance range of the current running average.

If the candidate's value is outside this tolerance, it will be ignored and not added to the flood fill. This creates a controlled expansion where the next point chosen must be "close" to the average of previously selected points.

### Inputs

* **Probe**: Accepts candidate data from flood fill nodes
* **Source**: Optional input for additional data when using attribute-based settings

### Outputs

* **Valid**: Passes candidates that meet the running average criteria
* **Invalid**: Rejects candidates that fall outside the tolerance range

### Configuration

***

#### General

**Window Size Input**

_Controls whether the window size (number of values used in the average) is a constant or comes from an attribute._

**Values**:

* **Constant**: Use the fixed `Window Size` value below.
* **Attribute**: Read the window size from the input data using the `Window Size (Attr)` selector.

**Window Size (Attr)**

_The attribute to read the window size from, when `Window Size Input` is set to "Attribute"._

**Window Size**

_The number of previously accepted candidates to include in the running average calculation. This value is ignored if `Window Size Input` is set to "Attribute"._

**Tolerance Input**

_Controls whether the tolerance (acceptable deviation from the average) is a constant or comes from an attribute._

**Values**:

* **Constant**: Use the fixed `Tolerance` value below.
* **Attribute**: Read the tolerance from the input data using the `Tolerance (Attr)` selector.

**Tolerance (Attr)**

_The attribute to read the tolerance from, when `Tolerance Input` is set to "Attribute"._

**Tolerance**

_Maximum allowed deviation from the running average for a candidate to be accepted. This value is ignored if `Tolerance Input` is set to "Attribute"._

**Operand**

_The attribute whose values are averaged and compared against candidates._

### Usage Example

You're creating a procedural path that should stay relatively close to an average direction or elevation.

1. Use this factory with a flood fill node.
2. Set the **Operand** to a point's Z-coordinate (elevation).
3. Set **Window Size** to 5 and **Tolerance** to 2.
4. As the flood fills, each new point must have a Z value within 2 units of the average Z of the last 5 points.
5. This results in a path that gently follows elevation changes but avoids sharp deviations.

### Notes

* The window size is dynamically adjusted based on how many candidates have been accepted so far — it will never exceed the number of available candidates.
* For best results, use a relatively large tolerance compared to the variation in your attribute values.
* This control works well with other fill controls to create complex filtering rules.
* If you're using an attribute for window size or tolerance, make sure that attribute exists on all input points.
