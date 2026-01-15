---
icon: circle-dashed
---

# Probe : Index

Connects to a specific index, ignoring search radius.

📌 **Subnode** — Connects to **Probes** pins.

**How It Works**

> AI-Generated, needs proofreading

* The Probe : Index node connects to a specific index within its data structure, bypassing any search radius considerations.
* It accepts an input of type PCGExInputValueType for the index value and uses this to directly access the specified position in the array or list.
* The node employs an attribute selection mechanism defined by PCGAttributePropertyInputSelector to determine which attribute's index it should target.
* An integer (int32) specifies the exact index location from where data is retrieved, ensuring direct and precise data extraction based on the given index value.

#### Configuration

<details>

<summary><strong>Mode</strong> <code>PCGExProbeTargetMode</code></summary>

TBD

**Values:**

* **Target**: Target index is used as-is to create a connection
* **One-way Offset**: Target index is used as an offset value from the current point' index
* **Two-way Offset**: Target index is used as both a positive and negative offset value from the current point' index

⚡ PCG Overridable

</details>

<details>

<summary><strong>Index Safety</strong> <code>PCGExIndexSafety</code></summary>

TBD

⚡ PCG Overridable

</details>

<details>

<summary><strong>Index Input</strong> <code>PCGExInputValueType</code></summary>

Controls index input.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Index (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Controls index (attr).

⚡ PCG Overridable

</details>

<details>

<summary><strong>Index</strong> <code>int32</code></summary>

Controls index.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExProbeConfigIndex</code></summary>

Filter Config.

📦 See: ProbeConfigIndex configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Mode</strong> <code>PCGExProbeTargetMode</code></summary>

TBD

**Values:**

* **Target**: Target index is used as-is to create a connection
* **One-way Offset**: Target index is used as an offset value from the current point' index
* **Two-way Offset**: Target index is used as both a positive and negative offset value from the current point' index

⚡ PCG Overridable

</details>

<details>

<summary><strong>Index Safety</strong> <code>PCGExIndexSafety</code></summary>

TBD

⚡ PCG Overridable

</details>

<details>

<summary><strong>Index Input</strong> <code>PCGExInputValueType</code></summary>

Controls index input.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Index (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Controls index (attr).

⚡ PCG Overridable

</details>

<details>

<summary><strong>Index</strong> <code>int32</code></summary>

Controls index.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsProbing\Public\Probes\PCGExProbeIndex.h`
