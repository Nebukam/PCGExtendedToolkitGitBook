---
description: 'In editor :: PCGEx | Vtx : Amplitude'
icon: circle-dashed
---

# Vtx : Amplitude

Amplitude of a vtx, based on neighboring connections.

📌 **Subnode** — Connects to **Filters** pins.

**How It Works**

> AI-Generated, needs proofreading

* The Vtx : Amplitude node computes the amplitude of a vertex based on its connections to neighboring vertices.
* It includes settings for writing minimum and maximum amplitudes, which are controlled by boolean flags labeled "Write Min Amplitude" and "Write Max Amplitude".
* An option named "Absolute" allows specifying an up vector that determines the sign of the amplitude calculation.
* The node utilizes a setting called "Mode", which is of type PCGExVtxAmplitudeMode, to define how the amplitude is calculated.

#### Configuration

<details>

<summary><strong>Write Min Amplitude</strong> <code>bool</code></summary>

Controls write min amplitude.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Min</strong> <code>Name</code></summary>

Controls min.

⚡ PCG Overridable

</details>

<details>

<summary><strong>├─ Absolute</strong> <code>bool</code></summary>

Up vector to use for amplitude sign

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Mode</strong> <code>PCGExVtxAmplitudeMode</code></summary>

Controls └─ mode.

**Values:**

* **Length**: Uniform fit
* **Individual**: Component-wise amplitude

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Max Amplitude</strong> <code>bool</code></summary>

Controls write max amplitude.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Max</strong> <code>Name</code></summary>

Controls max.

⚡ PCG Overridable

</details>

<details>

<summary><strong>├─ Absolute</strong> <code>bool</code></summary>

Up vector to use for amplitude sign

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Mode</strong> <code>PCGExVtxAmplitudeMode</code></summary>

Controls └─ mode.

**Values:**

* **Length**: Uniform fit
* **Individual**: Component-wise amplitude

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Amplitude Range</strong> <code>bool</code></summary>

Controls write amplitude range.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Range</strong> <code>Name</code></summary>

Controls range.

⚡ PCG Overridable

</details>

<details>

<summary><strong>├─ Absolute</strong> <code>bool</code></summary>

Controls ├─ absolute.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Mode</strong> <code>PCGExVtxAmplitudeMode</code></summary>

Controls └─ mode.

**Values:**

* **Length**: Uniform fit
* **Individual**: Component-wise amplitude

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Amplitude Sign</strong> <code>bool</code></summary>

Controls write amplitude sign.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Sign</strong> <code>Name</code></summary>

Controls sign.

⚡ PCG Overridable

</details>

<details>

<summary><strong>├─ Absolute</strong> <code>PCGExVtxAmplitudeSignOutput</code></summary>

Controls ├─ absolute.

**Values:**

* **Raw**: Raw dot product
* **Size**: Dot product \* edge size
* **Normalized Size**
* **Sign**

⚡ PCG Overridable

</details>

<details>

<summary><strong>├─ Absolute</strong> <code>bool</code></summary>

Controls ├─ absolute.

⚡ PCG Overridable

</details>

<details>

<summary><strong>├─ Up Mode</strong> <code>PCGExVtxAmplitudeUpMode</code></summary>

Up vector source.

**Values:**

* **Average Direction**: Average direction to neighbors
* **Custom Up Vector**: Custom Up Vector

⚡ PCG Overridable

</details>

<details>

<summary><strong>├─ Up Input Type</strong> <code>PCGExInputValueType</code></summary>

Up vector source.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Up Vector (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Up vector to use for amplitude sign

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Up Vector</strong> <code>Vector</code></summary>

Up vector to use for amplitude sign

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExAmplitudeConfig</code></summary>

Direction Settings.

📦 See: Amplitude configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Min Amplitude</strong> <code>bool</code></summary>

Controls write min amplitude.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Min</strong> <code>Name</code></summary>

Controls min.

⚡ PCG Overridable

</details>

<details>

<summary><strong>├─ Absolute</strong> <code>bool</code></summary>

Up vector to use for amplitude sign

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Mode</strong> <code>PCGExVtxAmplitudeMode</code></summary>

Controls └─ mode.

**Values:**

* **Length**: Uniform fit
* **Individual**: Component-wise amplitude

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Max Amplitude</strong> <code>bool</code></summary>

Controls write max amplitude.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Max</strong> <code>Name</code></summary>

Controls max.

⚡ PCG Overridable

</details>

<details>

<summary><strong>├─ Absolute</strong> <code>bool</code></summary>

Up vector to use for amplitude sign

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Mode</strong> <code>PCGExVtxAmplitudeMode</code></summary>

Controls └─ mode.

**Values:**

* **Length**: Uniform fit
* **Individual**: Component-wise amplitude

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Amplitude Range</strong> <code>bool</code></summary>

Controls write amplitude range.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Range</strong> <code>Name</code></summary>

Controls range.

⚡ PCG Overridable

</details>

<details>

<summary><strong>├─ Absolute</strong> <code>bool</code></summary>

Controls ├─ absolute.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Mode</strong> <code>PCGExVtxAmplitudeMode</code></summary>

Controls └─ mode.

**Values:**

* **Length**: Uniform fit
* **Individual**: Component-wise amplitude

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Amplitude Sign</strong> <code>bool</code></summary>

Controls write amplitude sign.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Sign</strong> <code>Name</code></summary>

Controls sign.

⚡ PCG Overridable

</details>

<details>

<summary><strong>├─ Absolute</strong> <code>PCGExVtxAmplitudeSignOutput</code></summary>

Controls ├─ absolute.

**Values:**

* **Raw**: Raw dot product
* **Size**: Dot product \* edge size
* **Normalized Size**
* **Sign**

⚡ PCG Overridable

</details>

<details>

<summary><strong>├─ Absolute</strong> <code>bool</code></summary>

Controls ├─ absolute.

⚡ PCG Overridable

</details>

<details>

<summary><strong>├─ Up Mode</strong> <code>PCGExVtxAmplitudeUpMode</code></summary>

Up vector source.

**Values:**

* **Average Direction**: Average direction to neighbors
* **Custom Up Vector**: Custom Up Vector

⚡ PCG Overridable

</details>

<details>

<summary><strong>├─ Up Input Type</strong> <code>PCGExInputValueType</code></summary>

Up vector source.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Up Vector (Attr)</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Up vector to use for amplitude sign

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Up Vector</strong> <code>Vector</code></summary>

Up vector to use for amplitude sign

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsClusters\Public\Elements\Meta\VtxProperties\PCGExVtxPropertyAmplitude.h`
