---
description: 'In editor :: PCGEx | Path : Offset'
icon: circle
---

# Offset

{% hint style="success" %}
Consider the more robust [clipper2-offset.md](clipper2/clipper2-offset.md "mention")
{% endhint %}

Offset paths points.

**How It Works**

> AI-Generated, needs proofreading

* The node adjusts path points based on the selected Offset Method from PCGExOffsetMethod.
* It uses the specified Offset Input type to determine how offsets are applied to each point.
* The offset size can be fetched from a local attribute and scaled by the Size parameter, or directly set via the Offset setting.
* If Apply Point Scale To Offset is enabled, it scales both the direction and distance of the offset according to the point scale.

#### Configuration

<details>

<summary><strong>Offset Method</strong> <code>PCGExOffsetMethod</code></summary>

Controls offset method.

**Values:**

* **Slide**: ...
* **Line/Plane**: ...

⚡ PCG Overridable

</details>

<details>

<summary><strong>Offset Input</strong> <code>PCGExInputValueType</code></summary>

Offset type.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Offset (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Fetch the offset size from a local attribute. The regular Size parameter then act as a scale.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Offset</strong> <code>double</code></summary>

Offset size.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Apply Point Scale To Offset</strong> <code>bool</code></summary>

Scale offset direction & distance using point scale.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Up Vector Constant</strong> <code>Vector</code></summary>

Up vector used to calculate Offset direction.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Direction Type</strong> <code>PCGExInputValueType</code></summary>

Direction Vector type.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Direction (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Fetch the direction vector from a local point attribute.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Direction</strong> <code>PCGExPathNormalDirection</code></summary>

Type of arithmetic path point offset direction.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Invert Direction</strong> <code>bool</code></summary>

Inverts offset direction. Can also be achieved by using negative offset values, but this enable consistent inversion no matter the input.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Adjustment</strong> <code>PCGExOffsetAdjustment</code></summary>

Adjust aspect in tight angles

**Values:**

* **Raw**: ...
* **Custom Smooth**: ...
* **Auto Smooth**: ...
* **Mitre**: ...

⚡ PCG Overridable

</details>

<details>

<summary><strong>Adjustment Scale</strong> <code>double</code></summary>

Adjust aspect in tight angles

⚡ PCG Overridable

</details>

<details>

<summary><strong>Mitre Limit</strong> <code>double</code></summary>

Offset size.

⚡ PCG Overridable

</details>

**Cleanup**

<details>

<summary><strong>Cleanup Mode</strong> <code>PCGExOffsetCleanupMode</code></summary>

Controls cleanup mode.

**Values:**

* **None**: No cleanup.
* **Collapse Flipped Segments**: Collapse flipped segments.
* **Sections Flipped**
* **Collapse Sections**: Remove sections of the paths that are between self-intersections.

</details>

<details>

<summary><strong>Intersection Tolerance</strong> <code>double</code></summary>

During cleanup, used as a tolerance to consider valid path segments as overlapping or not.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Flag Mutated Points</strong> <code>bool</code></summary>

Attempt to adjust offset on mutated edges .

⚡ PCG Overridable

</details>

<details>

<summary><strong>Mutated Attribute Name</strong> <code>Name</code></summary>

Name of the 'bool' attribute to flag the nodes that are the result of a mutation.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Flag Flipped Points</strong> <code>bool</code></summary>

Whether to flag points that have been flipped during the offset.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Flipped Attribute Name</strong> <code>Name</code></summary>

Name of the 'bool' attribute to flag the points that are flipped.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsPaths\Public\Elements\PCGExOffsetPath.h`
