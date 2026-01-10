---
description: 'In editor :: PCGEx | Copy to Points'
icon: circle
---

# Copy to Points

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Copy source points to target points, with size-to-fit and justification goodies.

#### How It Works

This node takes a set of input points and duplicates them onto another set of points. It allows you to control how the source data is applied to each target location. You can choose which source points map to which target points using matching rules, and apply transformations like scaling and rotation to ensure the copies fit properly.

The process works as follows:

1. The node retrieves both the source point data and the target point data.
2. If a matching rule is defined, it determines how source points are assigned to target points.
3. For each target point, the node:
   * Copies the relevant source point data.
   * Applies any specified transformations (position, rotation, scale).
   * Optionally scales or fits the copied point to match the size of the target.
   * Copies attributes from the source to the target based on forwarding settings.
4. The final output is a collection of points that are copies of the input points, positioned and transformed according to the target points.

#### Configuration

<details>

<summary><strong>DataMatching</strong><br><em>If enabled, allows you to pick which input gets copied to which target point.</em></summary>

When enabled, this setting lets you define how source points are matched to target points. For example, you can assign the first source point to the first target point, or match based on index, offset, or other criteria.

</details>

<details>

<summary><strong>TransformDetails</strong><br><em>Target inherit behavior</em></summary>

Controls how transforms (position, rotation, scale) are applied when copying points. You can choose to inherit the transform from the target point or override it with custom values.

</details>

<details>

<summary><strong>TargetsAttributesToCopyTags</strong><br><em>TBD</em></summary>

This setting is currently undocumented. It likely controls how attributes are tagged during the copy process.

</details>

<details>

<summary><strong>TargetsForwarding</strong><br><em>Which target attributes to forward on copied points.</em></summary>

Defines which attributes from the source points should be copied or forwarded to the output points. This allows you to preserve specific data like color, scale, or custom tags when duplicating points.

</details>

#### Usage Example

1. Create a set of source points (e.g., a grid of cubes).
2. Create a set of target points (e.g., scattered locations on a terrain).
3. Connect both sets to the Copy to Points node.
4. Enable **DataMatching** and set it to "Pick" to map each source point to a specific target point.
5. Set **TransformDetails** to inherit from targets to apply their position, rotation, and scale.
6. Configure **TargetsForwarding** to copy attributes like color or material index.
7. The output will be a set of points that match the positions and transforms of the target points, with attributes copied from the source.

#### Notes

* This node is ideal for placing instances or data onto specific locations in a scene.
* Matching rules can be used to create complex mappings between source and target points.
* Transform settings allow fine control over how copies are positioned and oriented.
