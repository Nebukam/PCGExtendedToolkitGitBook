---
description: 'In editor :: PCGEx | Copy to Points'
icon: circle
---

# Copy to Points

Copy source points to target points, with size-to-fit and justification goodies.

**How It Works**

> AI-Generated, needs proofreading

* The node copies source points to target points based on specified settings.
* If Data Matching is enabled, the user can specify which input point corresponds to which target point for copying.
* The node adjusts copied points with size-to-fit and justification options as part of the copy process.
* Target inherit behavior settings are applied during the transformation of copied points onto targets.

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

<summary><strong>Targets Attributes To Copy Tags</strong> <code>PCGExAttributeToTagDetails</code></summary>

TBD

📦 See: AttributeToTag configuration

</details>

<details>

<summary><strong>Targets Forwarding</strong> <code>PCGExForwardDetails</code></summary>

Which target attributes to forward on copied points.

📦 See: Forward configuration

</details>

***

Source: `Source\PCGExFoundations\Public\Elements\PCGExCopyToPoints.h`
