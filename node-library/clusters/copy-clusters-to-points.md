---
description: 'In editor :: PCGEx | Cluster : Copy to Points'
icon: circle
---

# Copy Clusters to Points

Create a copies of the input clusters onto the target points. NOTE: Does not sanitize input.

**How It Works**

> AI-Generated, needs proofreading

* The node creates copies of input clusters and places them onto specified target points.
* If Data Matching is enabled, the user can specify which input cluster gets copied to each individual target point.
* Target inherit behavior determines how transformations are applied to the copied clusters based on their new positions relative to the target points.
* The setting for Targets Attributes To Cluster Tags is unspecified (TBD), indicating its functionality or implementation details are not defined in the provided information.
* Targets Forwarding specifies which attributes of the target points should be forwarded onto the newly created cluster copies.

#### Configuration

<details>

<summary><strong>Data Matching</strong> <code>PCGExMatchingDetails</code></summary>

If enabled, allows you to pick which input gets copied to which target point.

📦 See: Matching configuration

</details>

<details>

<summary><strong>Transform Details</strong> <code>PCGExTransformDetails</code></summary>

Target inherit behavior

📦 See: Transform configuration

⚡ PCG Overridable

</details>

**Tagging & Forwarding**

<details>

<summary><strong>Targets Attributes To Cluster Tags</strong> <code>PCGExAttributeToTagDetails</code></summary>

TBD

📦 See: AttributeToTag configuration

</details>

<details>

<summary><strong>Targets Forwarding</strong> <code>PCGExForwardDetails</code></summary>

Which target attributes to forward on clusters.

📦 See: Forward configuration

</details>

***

Source: `Source\PCGExElementsClusters\Public\Elements\PCGExCopyClustersToPoints.h`
