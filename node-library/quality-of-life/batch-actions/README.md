---
description: 'In editor :: PCGEx | Batch Actions'
icon: scrubber
---

# Batch Actions

{% hint style="info" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Batch various actions together.

### Overview

This node allows you to execute multiple operations on point data in a single pass, improving performance and reducing the number of nodes needed in your graph. It's particularly useful when you want to apply several transformations or modifications to your points without creating separate nodes for each action.

{% hint style="info" %}
Batch Actions processes all input points together as one unit, which can be more efficient than running individual actions sequentially.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Default Input** (Required): Points to process
* **Optional Inputs**: Additional point data that can be used by the actions

</details>

<details>

<summary>Outputs</summary>

* **Default Output**: Processed points with applied actions

</details>

### Properties Overview

Controls how the batched actions are configured and executed.

***

#### Settings

Configures the general behavior of the node.

**Default Attributes Filter**

_Controls which attributes are included by default in the processing._

* Only attributes matching this filter will be processed unless explicitly overridden
* Useful for limiting the scope of operations to specific data sets

**Values**:

* **All**: All attributes are considered
* **Exclude**: Discard listed attributes, keep the others
* **Include**: Keep listed attributes, discard the others

**Do Consume Processed Attributes**

_When enabled, removes processed attributes from the output._

* Useful for cleaning up temporary or intermediate data after processing
* Helps reduce memory usage and keeps outputs clean

**Consume Processed Attributes**

_Configures which specific attributes to remove when "Do Consume Processed Attributes" is enabled._

* Allows fine-grained control over which attributes are discarded
* Supports both comma-separated names and detailed filter settings

### Notes

* Use this node when you want to apply multiple actions efficiently without increasing graph complexity
* The batched approach can significantly improve performance on large datasets
* Consider using the attribute filtering options to limit processing scope for better performance
* This node works best with actions that don't depend on each other's results, as they're all applied simultaneously
