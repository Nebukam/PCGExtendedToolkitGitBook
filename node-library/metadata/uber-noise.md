---
icon: scrubber
---

# Uber Noise

Generate noise or mutate existing attribute using noises.

**How It Works**

> AI-Generated, needs proofreading

* The Uber Noise node generates noise patterns or modifies an existing attribute by applying noise based on the selected mode from PCGExUberNoiseMode.
* It outputs data in a type specified by PCGMetadataTypes, indicating the format and nature of the generated or modified attributes.
* Attributes to be processed are defined through PCGExAttributeSourceToTargetDetails, specifying which input attributes are targeted for noise generation or mutation.
* The node blends the original attribute values with the new noise using a blend mode from PCGExABBlendingType, allowing for varied integration of noise into the existing data.
* A weight for the source value is determined by PCGExInputShorthandSelectorDouble, influencing how much the original attribute contributes to the final blended output.

#### Configuration

<details>

<summary><strong>Mode</strong> <code>PCGExUberNoiseMode</code></summary>

Controls mode.

**Values:**

* **New Attribute**: Create new attribute
* **Mutate Attribute**: Blend noise with an existing attribute

</details>

<details>

<summary><strong>Output Type</strong> <code>PCGMetadataTypes</code></summary>

Controls output type.

</details>

<details>

<summary><strong>Attributes</strong> <code>PCGExAttributeSourceToTargetDetails</code></summary>

Controls attributes.

📦 See: AttributeSourceToTarget configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Blend Mode</strong> <code>PCGExABBlendingType</code></summary>

Controls blend mode.

</details>

<details>

<summary><strong>Source Value Weight</strong> <code>PCGExInputShorthandSelectorDouble</code></summary>

Controls source value weight.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsMeta\Public\Elements\PCGExUberNoise.h`
