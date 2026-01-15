---
description: 'In editor :: PCGEx | Reverse Point Order'
icon: circle
---

# Reverse Point Order

Simply reverse the order of points or change winding of paths.

**How It Works**

> AI-Generated, needs proofreading

* The Reverse Order node reverses the order of points in a given input based on the specified attributes named "Name".
* If the "Multiply By Minus One" setting is enabled, the node multiplies the values by -1 after reversing their order.
* The processing method used for reversing is defined by the PCGExPointReverseMethod enumeration value selected in the settings.
* The Sort Direction setting determines whether the reversal follows an ascending or descending order relative to the attribute named "Name".

#### Configuration

<details>

<summary><strong>First Attribute Name</strong> <code>Name</code></summary>

Controls first attribute name.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Second Attribute Name</strong> <code>Name</code></summary>

Controls second attribute name.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Multiply By Minus One</strong> <code>bool</code></summary>

Controls multiply by minus one.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Method</strong> <code>PCGExPointReverseMethod</code></summary>

Controls method.

**Values:**

* **Unconditional**: ...
* **Sorting Rules**: ...
* **Winding**: ...

⚡ PCG Overridable

</details>

<details>

<summary><strong>Sort Direction</strong> <code>PCGExSortDirection</code></summary>

Sort direction

⚡ PCG Overridable

</details>

<details>

<summary><strong>Winding</strong> <code>PCGExWinding</code></summary>

Winding

⚡ PCG Overridable

</details>

<details>

<summary><strong>Projection Details</strong> <code>PCGExGeo2DProjectionDetails</code></summary>

Projection settings. Winding is computed on a 2D plane.

📦 See: Geo2DProjection configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Swap Attributes Values</strong> <code>Array of FPCGExSwapAttributePairDetails</code></summary>

Controls swap attributes values.

⚡ PCG Overridable

</details>

**Tagging**

<details>

<summary><strong>Tag If Reversed</strong> <code>bool</code></summary>

Controls tag if reversed.

</details>

<details>

<summary><strong>Is Reversed Tag</strong> <code>String</code></summary>

...

</details>

<details>

<summary><strong>Tag If Not Reversed</strong> <code>bool</code></summary>

Controls tag if not reversed.

</details>

<details>

<summary><strong>Is Not Reversed Tag</strong> <code>String</code></summary>

...

</details>

***

Source: `Source\PCGExElementsPaths\Public\Elements\PCGExReversePointOrder.h`
