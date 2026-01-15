---
description: 'In editor :: PCGEx | Shape : Polygon'
icon: circle-dashed
---

# Shape : Polygon

Create points as a regular polygon or star.

📌 **Subnode** — Connects to **Shape Builders** pins.

**How It Works**

> AI-Generated, needs proofreading

* The node generates points arranged in the shape of either a regular polygon or star based on the selected Polygon Type setting.
* It uses the Number of Vertices value from either an input source (Num Vertices Input) or a constant to determine how many vertices the polygon or star will have.
* An attribute named by the user through "Number of Vertices (Attr)" is created and assigned to each point, reflecting the number of vertices defined.
* The node optionally accepts a skeleton structure via the Add Skeleton Input source if needed for further processing steps.

#### Configuration

<details>

<summary><strong>Polygon Type</strong> <code>PCGExPolygonShapeType</code></summary>

Type of polygon we're creating

**Values:**

* **Polygon**
* **Star**

</details>

<details>

<summary><strong>Num Vertices Input</strong> <code>PCGExInputValueType</code></summary>

Source

</details>

<details>

<summary><strong>Number of Vertices (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Attribute

⚡ PCG Overridable

</details>

<details>

<summary><strong>Number of Vertices</strong> <code>int32</code></summary>

Constant

⚡ PCG Overridable

</details>

<details>

<summary><strong>Add Skeleton Input</strong> <code>PCGExInputValueType</code></summary>

Source

</details>

<details>

<summary><strong>Add Skeleton (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Attribute

⚡ PCG Overridable

</details>

<details>

<summary><strong>Add Skeleton</strong> <code>bool</code></summary>

Constant

⚡ PCG Overridable

</details>

<details>

<summary><strong>Skeleton Connection Mode</strong> <code>PCGExPolygonSkeletonConnectionType</code></summary>

Where the skeleton goes

**Values:**

* **Vertex**
* **Edge**
* **Both**

</details>

<details>

<summary><strong>Polygon Orientation</strong> <code>PCGExPolygonFittingMethod</code></summary>

Alignment for the polygon within the bounds of the seed

**Values:**

* **Vertex Forward**
* **Edge Forward**
* **Custom**

⚡ PCG Overridable

</details>

<details>

<summary><strong>Custom Polygon Orientation</strong> <code>float</code></summary>

Custom alignment

⚡ PCG Overridable

</details>

<details>

<summary><strong>Is Closed Loop</strong> <code>bool</code></summary>

If enabled, will flag polygon as being closed if possible.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExShapePolygonConfig</code></summary>

Shape properties

📦 See: ShapePolygon configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Polygon Type</strong> <code>PCGExPolygonShapeType</code></summary>

Type of polygon we're creating

**Values:**

* **Polygon**
* **Star**

</details>

<details>

<summary><strong>Num Vertices Input</strong> <code>PCGExInputValueType</code></summary>

Source

</details>

<details>

<summary><strong>Number of Vertices (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Attribute

⚡ PCG Overridable

</details>

<details>

<summary><strong>Number of Vertices</strong> <code>int32</code></summary>

Constant

⚡ PCG Overridable

</details>

<details>

<summary><strong>Add Skeleton Input</strong> <code>PCGExInputValueType</code></summary>

Source

</details>

<details>

<summary><strong>Add Skeleton (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Attribute

⚡ PCG Overridable

</details>

<details>

<summary><strong>Add Skeleton</strong> <code>bool</code></summary>

Constant

⚡ PCG Overridable

</details>

<details>

<summary><strong>Skeleton Connection Mode</strong> <code>PCGExPolygonSkeletonConnectionType</code></summary>

Where the skeleton goes

**Values:**

* **Vertex**
* **Edge**
* **Both**

</details>

<details>

<summary><strong>Polygon Orientation</strong> <code>PCGExPolygonFittingMethod</code></summary>

Alignment for the polygon within the bounds of the seed

**Values:**

* **Vertex Forward**
* **Edge Forward**
* **Custom**

⚡ PCG Overridable

</details>

<details>

<summary><strong>Custom Polygon Orientation</strong> <code>float</code></summary>

Custom alignment

⚡ PCG Overridable

</details>

<details>

<summary><strong>Is Closed Loop</strong> <code>bool</code></summary>

If enabled, will flag polygon as being closed if possible.

⚡ PCG Overridable

</details>

**Outputs**

<details>

<summary><strong>On Hull Attribute</strong> <code>Name</code></summary>

Output attributes

</details>

<details>

<summary><strong>Write Hull Attribute</strong> <code>bool</code></summary>

Controls write hull attribute.

</details>

<details>

<summary><strong>Angle Attribute</strong> <code>Name</code></summary>

Controls angle attribute.

</details>

<details>

<summary><strong>Write Angle Attribute</strong> <code>bool</code></summary>

Controls write angle attribute.

</details>

<details>

<summary><strong>Edge Index Attribute</strong> <code>Name</code></summary>

Controls edge index attribute.

</details>

<details>

<summary><strong>Write Edge Index Attribute</strong> <code>bool</code></summary>

Controls write edge index attribute.

</details>

<details>

<summary><strong>Edge Alpha Attribute</strong> <code>Name</code></summary>

Controls edge alpha attribute.

</details>

<details>

<summary><strong>Write Edge Alpha Attribute</strong> <code>bool</code></summary>

Controls write edge alpha attribute.

</details>

<details>

<summary><strong>On Hull Attribute</strong> <code>Name</code></summary>

Output attributes

</details>

<details>

<summary><strong>Write Hull Attribute</strong> <code>bool</code></summary>

Controls write hull attribute.

</details>

<details>

<summary><strong>Angle Attribute</strong> <code>Name</code></summary>

Controls angle attribute.

</details>

<details>

<summary><strong>Write Angle Attribute</strong> <code>bool</code></summary>

Controls write angle attribute.

</details>

<details>

<summary><strong>Edge Index Attribute</strong> <code>Name</code></summary>

Controls edge index attribute.

</details>

<details>

<summary><strong>Write Edge Index Attribute</strong> <code>bool</code></summary>

Controls write edge index attribute.

</details>

<details>

<summary><strong>Edge Alpha Attribute</strong> <code>Name</code></summary>

Controls edge alpha attribute.

</details>

<details>

<summary><strong>Write Edge Alpha Attribute</strong> <code>bool</code></summary>

Controls write edge alpha attribute.

</details>

***

Source: `Source\PCGExElementsShapes\Public\Shapes\PCGExShapePolygon.h`
