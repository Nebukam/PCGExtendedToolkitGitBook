---
description: 'In editor :: PCGEx | Cluster : Find point on Bounds'
icon: circle
---

# Find point on Bounds

Find the closest vtx or edge on each cluster' bounds.

**How It Works**

> AI-Generated, needs proofreading

* The node identifies the closest vertex or edge on the boundary of each cluster based on the specified Search Mode setting.
* It outputs data according to the selected Output Mode setting, which determines the format and type of information provided about the identified points.
* When Best Fit Bounds is enabled, the node uses a best fit plane for determining boundaries; the Use Best Fit bounds axis setting specifies the axis ordering for this process.
* The UVWInput setting dictates the source of UVW values used in the proximity calculations.

#### Configuration

<details>

<summary><strong>Search Mode</strong> <code>PCGExClusterClosestSearchMode</code></summary>

What type of proximity to look for

</details>

<details>

<summary><strong>Output Mode</strong> <code>PCGExPointOnBoundsOutputMode</code></summary>

Data output mode

⚡ PCG Overridable

</details>

<details>

<summary><strong>Best Fit Bounds</strong> <code>bool</code></summary>

Controls best fit bounds.

</details>

<details>

<summary><strong>Use Best Fit bounds axis</strong> <code>PCGExAxisOrder</code></summary>

Whether to use best fit plane bounds, and which axis ordering should be used.

</details>

<details>

<summary><strong>UVWInput</strong> <code>PCGExInputValueType</code></summary>

Type of UVW value source

⚡ PCG Overridable

</details>

<details>

<summary><strong>UVW (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Fetch the UVW value from a @Data attribute.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Element</strong> <code>PCGExClusterElement</code></summary>

Cluster element source

</details>

<details>

<summary><strong>UVW</strong> <code>Vector</code></summary>

UVW position of the target within bounds.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Offset</strong> <code>double</code></summary>

Offset to apply to the closest point, away from the bounds center.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Carry Over Settings</strong> <code>PCGExCarryOverDetails</code></summary>

Meta filter settings.

📦 See: CarryOver configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Quiet Attribute Mismatch Warning</strong> <code>bool</code></summary>

Controls quiet attribute mismatch warning.

</details>

***

Source: `Source\PCGExElementsClusters\Public\Elements\PCGExFindPointOnBoundsClusters.h`
