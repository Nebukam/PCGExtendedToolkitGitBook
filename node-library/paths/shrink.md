---
description: 'In editor :: PCGEx | Path : Shrink'
icon: circle
---

# Shrink

Shrink path from its beginning and end.

**How It Works**

> AI-Generated, needs proofreading

* The node processes a path by removing segments from both the beginning and end of the path based on specified parameters.
* The extent of removal is determined by the "Amount Input" setting, which specifies how much to shrink the path.
* Removal can be defined either as a distance or a count, depending on the "Distance (Attr)" setting.
* Specific details about "Cut Type" and "Value Source" are unspecified ("TBD"), so their exact influence on processing remains undefined.

#### Configuration

<details>

<summary><strong>Amount Input</strong> <code>PCGExInputValueType</code></summary>

TBD

⚡ PCG Overridable

</details>

<details>

<summary><strong>Distance (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Distance or count

⚡ PCG Overridable

</details>

<details>

<summary><strong>Distance</strong> <code>double</code></summary>

TBD

⚡ PCG Overridable

</details>

<details>

<summary><strong>Cut Type</strong> <code>PCGExPathShrinkDistanceCutType</code></summary>

TBD

**Values:**

* **New Point**: TBD
* **Previous**
* **Next**
* **Closest**

⚡ PCG Overridable

</details>

<details>

<summary><strong>Value Source</strong> <code>PCGExInputValueType</code></summary>

TBD

⚡ PCG Overridable

</details>

<details>

<summary><strong>Count (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Distance or count

⚡ PCG Overridable

</details>

<details>

<summary><strong>Count</strong> <code>int32</code></summary>

TBD

⚡ PCG Overridable

</details>

<details>

<summary><strong>Shrink Endpoint</strong> <code>PCGExShrinkEndpoint</code></summary>

TBD

**Values:**

* **Start and End**: TBD
* **Start**: TBD.
* **End**: TBD.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Settings Mode</strong> <code>PCGExShrinkConstantMode</code></summary>

TBD

**Values:**

* **Shared**: Both start & end distance use the primary value.
* **Separate**: Start will use the primary value, end will use the secondary value..

⚡ PCG Overridable

</details>

<details>

<summary><strong>Shrink Mode</strong> <code>PCGExPathShrinkMode</code></summary>

TBD

**Values:**

* **Count**: TBD
* **Distance**: TBD.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Primary Distance Details</strong> <code>PCGExShrinkPathEndpointDistanceDetails</code></summary>

TBD

📦 See: ShrinkPathEndpointDistance configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Secondary Distance Details</strong> <code>PCGExShrinkPathEndpointDistanceDetails</code></summary>

TBD

📦 See: ShrinkPathEndpointDistance configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Primary Count Details</strong> <code>PCGExShrinkPathEndpointCountDetails</code></summary>

TBD

📦 See: ShrinkPathEndpointCount configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Secondary Count Details</strong> <code>PCGExShrinkPathEndpointCountDetails</code></summary>

TBD

📦 See: ShrinkPathEndpointCount configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Endpoints Ignore Stop Conditions</strong> <code>bool</code></summary>

TBD

⚡ PCG Overridable

</details>

<details>

<summary><strong>Preserve First Metadata</strong> <code>bool</code></summary>

If enabled, the point cut from the start will inherit from the original first point

</details>

<details>

<summary><strong>Preserve Last Metadata</strong> <code>bool</code></summary>

If enabled, the point cut from the start will inherit from the original last point

</details>

<details>

<summary><strong>Quiet Closed Loop Warning</strong> <code>bool</code></summary>

Controls quiet closed loop warning.

</details>

***

Source: `Source\PCGExElementsPaths\Public\Elements\PCGExPathShrink.h`
