---
icon: list-tree
---

# Manhattan

#### Settings

<details>

<summary><strong>Method</strong> <code>EPCGExManhattanMethod</code></summary>

Controls method.

**Values:**

* **Simple**: Simple Manhattan subdivision, will generate 0..2 points
* **Grid Distance**
* **Grid Count**

</details>

<details>

<summary><strong>Order</strong> <code>EPCGExAxisOrder</code></summary>

Controls order.

</details>

<details>

<summary><strong>Grid Size Input</strong> <code>EPCGExInputValueType</code></summary>

Controls grid size input.

</details>

<details>

<summary><strong>Grid Size (Attr)</strong> <code>FName</code></summary>

Max Length Attribute

</details>

<details>

<summary><strong>Grid Size</strong> <code>FVector</code></summary>

Grid Size Constant -- If using count, values will be rounded down to the nearest int.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Space Align</strong> <code>EPCGExManhattanAlign</code></summary>

Controls space align.

**Values:**

* **World**
* **Custom**
* **Segment X**
* **Segment Y**
* **Segment Z**

</details>

<details>

<summary><strong>Orient Input</strong> <code>EPCGExInputValueType</code></summary>

Controls orient input.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Orient (Attr)</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

Controls orient (attr).

⚡ PCG Overridable

</details>

<details>

<summary><strong>Orient</strong> <code>FQuat</code></summary>

Controls orient.

⚡ PCG Overridable

</details>

#### Used In

* SubdivideEdges
* BevelPath
* Subdivide

***

Defined in: `Source\PCGExFoundations\Public\Details\PCGExSubdivisionDetails.h`
