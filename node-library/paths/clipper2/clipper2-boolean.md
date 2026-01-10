---
description: 'In editor :: PCGEx | Clipper2 : Boolean'
icon: circle
---

# Clipper2 : Boolean

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Performs Clipper2 Boolean operations on path data.

#### How It Works

This node takes two sets of paths as input and performs a Clipper2 Boolean operation on them. The first set is considered the "subject" and the second set (if provided) is the "operand".

The operation is performed in 2D space, projected onto a plane based on the specified projection settings. Each path is converted into a polygonal representation before the boolean logic is applied.

1. **Projection**: All input paths are projected onto a 2D plane using the configured projection method (Normal or Best Fit).
2. **Polygon Conversion**: The 2D projected paths are converted into Clipper2 polygons.
3. **Boolean Operation**: The selected operation (Union, Intersection, Difference, or XOR) is applied to the subject and operand polygons.
4. **Fill Rule**: The fill rule determines how overlapping regions are interpreted when computing the result.
5. **Output Generation**: The resulting polygon(s) are converted back into paths and output.

The node supports both closed and open paths, but open paths may be treated as lines or curves depending on the operation and settings.

#### Configuration

<details>

<summary><strong>Projection Details</strong><br><em>Projection settings.</em></summary>

Controls how the input paths are projected onto a 2D plane for processing.

* **Method**: Choose between "Normal" or "Best Fit".
  * **Normal**: Projects using a fixed normal vector.
  * **Best Fit**: Computes the best-fit plane based on the path's geometry.
* **Projection Normal**: When using "Normal", this defines the direction of the projection plane. Defaults to Up for XY projection.

</details>

<details>

<summary><strong>Operation</strong><br><em>Which Clipper2 Boolean operation to perform.</em></summary>

Selects the type of boolean logic to apply between subject and operand paths.

**Values**:

* **Intersection**: Keeps only the overlapping regions.
* **Union**: Combines both shapes into one.
* **Difference**: Removes the operand shape from the subject.
* **XOR**: Keeps only non-overlapping regions.

</details>

<details>

<summary><strong>Fill Rule</strong><br><em>How to interpret overlapping regions.</em></summary>

Determines how self-intersecting or overlapping polygons are filled during the boolean operation.

**Values**:

* **Even Odd**: Uses even/odd rule for filling.
* **Non Zero**: Uses non-zero winding number for filling.
* **Positive**: Fills only positive areas.
* **Negative**: Fills only negative areas.

</details>

<details>

<summary><strong>bUseOperand Pin</strong><br><em>Display operand pin as a separate pin.</em></summary>

When enabled, the node will have a dedicated operand input pin for additional paths. This is only relevant when using Difference or XOR operations.

</details>

#### Usage Example

To create a shape that combines two overlapping circles with a hole in the middle:

1. Create two circle paths.
2. Connect them to the **Subject** and **Operand** pins of this node.
3. Set the **Operation** to "Difference".
4. The output will be the first circle with the second circle removed from it, creating a ring-like shape.

#### Notes

* Boolean operations are sensitive to path orientation. Clockwise and counter-clockwise paths may behave differently depending on the fill rule.
* For best results, ensure input paths are well-formed and do not self-intersect excessively.
* The node supports both open and closed paths, but complex open paths may produce unexpected results.
