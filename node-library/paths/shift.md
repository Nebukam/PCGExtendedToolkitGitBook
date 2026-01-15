---
description: 'In editor :: PCGEx | Path : Shift'
icon: circle
---

# Shift

Shift path points

**How It Works**

> AI-Generated, needs proofreading

* The node processes path data by shifting its points according to the specified `Shift Type` setting from the `PCGExShiftType` enumeration.
* It accepts input paths and modifies them based on the `Input Mode`, which is defined by the `PCGExShiftPathMode` enumeration, potentially altering how points are selected or processed for shifting.
* The node applies a shift value to each point; this can be a relative constant specified as a double or a discrete constant given as an int32, depending on the configuration settings.
* Depending on the `Truncate Mode` from the `PCGExTruncateMode` enumeration, the node may adjust the path length after shifting by either extending or truncating it to fit within certain constraints.

#### Configuration

<details>

<summary><strong>Shift Type</strong> <code>PCGExShiftType</code></summary>

Controls shift type.

**Values:**

* **Index**: ...
* **Metadata**: ...
* **Properties**: ...
* **Metadata and Properties**: ...
* **CherryPick**: ...

⚡ PCG Overridable

</details>

<details>

<summary><strong>Input Mode</strong> <code>PCGExShiftPathMode</code></summary>

Controls input mode.

**Values:**

* **Discrete**: Shift point is selected using a discrete value
* **Relative**: Shift point is selected using a value relative to the input size
* **Filter**: Shift point using the first point that passes the provided filters

⚡ PCG Overridable

</details>

<details>

<summary><strong>Relative Constant</strong> <code>double</code></summary>

Controls relative constant.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Truncate</strong> <code>PCGExTruncateMode</code></summary>

Controls truncate.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Discrete Constant</strong> <code>int32</code></summary>

Controls discrete constant.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Index Safety</strong> <code>PCGExIndexSafety</code></summary>

Controls index safety.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Reverse Shift</strong> <code>bool</code></summary>

Reverse shift order

⚡ PCG Overridable

</details>

<details>

<summary><strong>Cherry Picked Properties</strong> <code>uint8</code></summary>

Point properties to be shifted

</details>

<details>

<summary><strong>Cherry Picked Attributes</strong> <code>Array of FName</code></summary>

Attributes to be shifted

</details>

<details>

<summary><strong>Quiet Double Shift Warning</strong> <code>bool</code></summary>

Controls quiet double shift warning.

</details>

***

Source: `Source\PCGExElementsPaths\Public\Elements\PCGExPathShift.h`
