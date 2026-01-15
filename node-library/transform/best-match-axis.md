---
icon: circle
---

# Best Match Axis

Rotate a point or transform to closely match an input direction (or look at location) but preserve orthogonality.

**How It Works**

> AI-Generated, needs proofreading

* The Best Match Axis node rotates a point or transform to align closely with an input direction or look-at location while maintaining orthogonality among axes.
* In "Drive the best match axis" mode, the node uses either a specified attribute from a selected source or a constant value as the Up vector for determining the rotation that best matches the desired orientation.
* If Data Matching is enabled, the node filters which targets are sampled based on specific data criteria, allowing selective application of the rotation logic to certain elements.

#### Configuration

<details>

<summary><strong>Mode</strong> <code>PCGExBestMatchAxisTargetMode</code></summary>

Drive the best match axis

**Values:**

* **Direction**: Best match against a direction vector.
* **Look At World Position**
* **Look At Relative Position**
* **Look at Closest Target**: Best match against the look at vector toward the closest target point.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Match Input</strong> <code>PCGExInputValueType</code></summary>

Up vector source.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Match (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

The attribute or property on selected source to use as Up vector for the look at transform.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Match</strong> <code>Vector</code></summary>

The constant to use as Up vector for the look at transform.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Data Matching</strong> <code>PCGExMatchingDetails</code></summary>

If enabled, allows you to filter out which targets get sampled by which data

📦 See: Matching configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Distance Details</strong> <code>PCGExDistanceDetails</code></summary>

Distance method to be used for source & target points.

📦 See: Distance configuration

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsSpatial\Public\Elements\Bounds\PCGExBestMatchAxis.h`
