---
icon: circle-dashed
---

# Copy Tags

{% hint style="info" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Copy matched targets tags to candidate.

### Overview

This node is used in matching workflows to copy tags from matched target elements to their corresponding candidate elements. It's particularly useful when you want to transfer attribute data or metadata from one set of points to another based on a match relationship.

The node works as part of a larger matching pipeline, where it takes the results of a match operation and applies tag copying from targets to candidates. This allows for downstream processing to use the copied tags as conditions or data sources.

{% hint style="info" %}
This node requires an existing match rule factory to be connected to it. It operates on the matched relationships defined by that factory.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Match Rule Factory** (Required): A match rule factory node that defines how elements should be matched
* **Target Data** (Optional): The data containing target elements with tags to copy
* **Candidate Data** (Optional): The data containing candidate elements that will receive the copied tags

</details>

<details>

<summary>Outputs</summary>

* **Output Match Rule Label**: The configured match rule output

</details>

### Properties Overview

This node has no configurable properties in its settings. It inherits all configuration from the parent match rule factory.

***

#### General

This node operates based on the matching rules defined by the connected match rule factory.

**Config**

_The configuration for this match rule._

* This setting is inherited from the parent match rule factory and cannot be directly modified here
* All matching behavior is controlled through the parent factory settings

### Notes

* Use this node after a matching operation to propagate tag data from matched targets to candidates
* The copied tags will appear on the candidate elements in downstream processing nodes
* This node doesn't modify the original target data, only copies information to candidates
* Common use case: transferring material or component tags from target objects to their generated variants during procedural generation
