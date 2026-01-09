---
description: 'In editor :: PCGEx | Cluster : Merge Vtx'
icon: circle
---

# Merge Vtx

{% hint style="warning" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Merge vertices so all edges share the same vertex collection.

### Overview

This node merges vertex data across all clusters in your graph, ensuring that every edge references a unified set of vertex points. It's particularly useful when you want to ensure consistent topology or when preparing data for operations that require shared vertex collections.

{% hint style="info" %}
This node modifies the vertex data so that all edges reference the same collection of vertices. This is especially helpful when working with multiple clusters that need to be unified into a single graph structure.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Points** (Main Input): Vertex data for each cluster
* **Edges** (Main Input): Edge data connecting the vertices

</details>

<details>

<summary>Outputs</summary>

* **Points** (Main Output): Unified vertex data with merged points
* **Edges** (Main Output): Edge data referencing the unified vertex collection

</details>

### Properties Overview

Controls how vertex data is carried over and merged.

***

#### Carry Over Settings

Configure which attributes from the original vertex data are carried over to the merged output.

**Carry Over Details**

_Controls how attributes are copied from input points to the merged output._

* Determines which point attributes are preserved in the final vertex collection
* Affects memory usage and data integrity of the merged result

**Values**:

* **All**: Carry over all attributes
* **Exclude**: Discard listed attributes, keep the others
* **Include**: Keep listed attributes, discard the others
