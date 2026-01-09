---
description: 'In editor :: PCGEx | Clipper2 : Boolean'
icon: circle
---

# Clipper2 : Boolean

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Does a Clipper2 Boolean operation.

### Overview

This node performs boolean operations between polygonal shapes, such as union, intersection, difference, and XOR. It's useful for combining or modifying shapes in procedural generation workflows. You can think of it like using a Venn diagram to merge or cut shapes together.

{% hint style="info" %}
The node works with 2D polygons projected onto a plane. Make sure your input data is properly oriented for the best results.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main** (Points): The primary set of polygonal shapes to process
* **Operand** (Points, optional): Secondary set of shapes used in the boolean operation

</details>

<details>

<summary>Outputs</summary>

* **Output** (Points): Resulting shapes after the boolean operation

</details>

### Properties Overview

Controls how the boolean operation is performed and what data is processed.

***

#### Projection Settings

Defines how the 3D input data is projected into 2D space for processing.

**Projection Method**

_Controls whether to use a fixed normal or compute the best-fit plane._

* **Normal**: Projects using a fixed vector (default is Up)
* **Best Fit**: Automatically computes the best-fitting plane based on the point cloud

**Projection Normal**

_Vector used when projecting with "Normal" method._

* Controls which direction the projection happens from
* Default value is Up vector (0, 0, 1)

**Local Normal Support**

_When enabled, allows using a local attribute for projection normal._

* If enabled, you can specify an attribute that contains the normal vector per point
* Useful when your points have varying orientations

#### Boolean Operation

Specifies which type of boolean operation to perform.

**Operation Type**

_What kind of boolean operation to apply._

**Values**:

* **Intersection**: Keeps only the overlapping areas between shapes
* **Union**: Combines all shapes into one unified shape
* **Difference**: Subtracts the operand shapes from the main shapes
* **XOR**: Keeps only the non-overlapping parts of the shapes

#### Fill Rule

Controls how to interpret overlapping regions when computing the result.

**Fill Rule Type**

_How to handle self-intersections and overlapping areas._

**Values**:

* **Even Odd**: Uses even/odd rule for filling (good for complex shapes)
* **Non Zero**: Uses non-zero winding number (standard for most cases)
* **Positive**: Only fills regions with positive winding numbers
* **Negative**: Only fills regions with negative winding numbers

#### Processing Settings

Controls how the node handles input data and operand pins.

**Use Operand Pin**

_When enabled, creates a separate operand input pin._

* If disabled, the operand is taken from the same input as main shapes
* When enabled, you can connect different sets of shapes to each pin
* Only applies when operation is not Union (since Union doesn't require an operand)

### Notes

* Boolean operations work best with closed polygonal paths
* Complex self-intersecting polygons may produce unexpected results
* Consider using "Best Fit" projection method for irregularly oriented data
* The node preserves point attributes from the main input when possible
* For performance, try to keep the number of points per shape reasonable (under 1000 points recommended)
* Use "Intersection" to create overlapping regions between shapes
* Use "Difference" to cut holes or subtract shapes from others
* Combine with other nodes like "Clipper2 : Offset" for more complex shape manipulation
