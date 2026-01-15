---
description: 'In editor :: PCGEx | Find Point on Bounds'
icon: circle
---

# Find Point on Bounds

Find the closest point on the dataset bounds.

**How It Works**

> AI-Generated, needs proofreading

* Computes the closest point on the dataset bounds to a given input point based on the selected UVW value source.
* Utilizes best fit plane bounds if "Best Fit Bounds" is enabled and applies the specified axis ordering from "Use Best Fit bounds axis".
* Outputs the closest point data in the format determined by the "Output Mode" setting, which specifies how the output should be structured or presented.

#### Configuration

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

Source: `Source\PCGExElementsSpatial\Public\Elements\Bounds\PCGExFindPointOnBounds.h`
