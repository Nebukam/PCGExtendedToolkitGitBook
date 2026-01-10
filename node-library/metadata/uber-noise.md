---
icon: scrubber
---

# Uber Noise

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Generate noise or mutate existing attributes using noise functions.

#### Overview

The Uber Noise node applies procedural noise to point data, either creating new attributes or blending noise with existing ones. It's useful for adding natural-looking variations to procedural content, such as terrain height, vegetation distribution, or object placement randomness. This node supports various noise types and blending modes to give artists fine-grained control over how the noise affects the data.

{% hint style="info" %}
Connects to **Point Filters** subnode for filtering points, and can connect to **Attributes** subnode for specifying attribute details.
{% endhint %}

#### How It Works

The node generates 3D noise values based on point positions and applies them to attributes. Depending on the mode selected:

* In **New Attribute** mode, it creates a new attribute with the noise values.
* In **Mutate Attribute** mode, it blends the noise with an existing attribute using a specified blending operation.

The noise is generated using a 3D noise function that takes point coordinates as input. The resulting noise value can be weighted and combined with existing data based on the selected blend mode. This process allows for smooth, natural-looking variations across point distributions.

<details>

<summary>Inputs</summary>

* **Points**: Input point data to which noise will be applied.
* **Filters** (optional): Subnode that filters which points receive noise.
* **Attributes** (optional): Subnode specifying how to map noise to attributes.

</details>

<details>

<summary>Outputs</summary>

* **Points**: Modified point data with new or updated attributes containing noise values.

</details>

#### Configuration

<details>

<summary><strong>Mode</strong><br><em>Determines whether a new attribute is created or an existing one is mutated.</em></summary>

Controls how the noise is applied to the data.

**Values**:

* **New Attribute**: Creates a new attribute with the noise values.
* **Mutate Attribute**: Blends the noise with an existing attribute using the selected blend mode.

</details>

<details>

<summary><strong>Output Type</strong><br><em>Type of the new attribute to be created.</em></summary>

Specifies the data type for the newly generated attribute.

**Values**:

* **Double**: Double precision floating-point number.
* **Float**: Single precision floating-point number.
* **Integer**: Whole number value.

</details>

<details>

<summary><strong>Attributes</strong><br><em>Settings for mapping noise to attributes.</em></summary>

Configures how the noise is applied to point attributes.

* **Target Attribute Name**: Name of the attribute to be created or modified.
* **Source Attribute Name**: Name of an existing attribute to use as a source for blending (when in Mutate mode).

</details>

<details>

<summary><strong>Blend Mode</strong><br><em>How noise is blended with existing attribute values.</em></summary>

Controls how the generated noise interacts with an existing attribute when mutating.

**Values**:

* **None**: No blending, keeps original value.
* **Average**: Computes (A + B) / 2.
* **Weight**: Computes (A + B) / Weight, normalizes if weight > 1.
* **Multiply**: Computes A \* B.
* **Divide**: Computes A / B.
* **Min**: Takes the smaller of A and B.
* **Max**: Takes the larger of A and B.
* **Copy (Target)**: Sets value to B.
* **Copy (Source)**: Sets value to A.

</details>

<details>

<summary><strong>Source Value Weight</strong><br><em>Weight applied to noise when blending with existing values.</em></summary>

Controls the influence of the noise in the blend operation. Higher values increase the impact of the noise on the final result.

</details>

#### Usage Example

1. Place an Uber Noise node in your graph.
2. Set **Mode** to **New Attribute**.
3. Choose **Output Type** as **Float**.
4. Configure **Attributes** to name the new attribute (e.g., "NoiseValue").
5. Connect a point source to the input.
6. Run the graph to generate noise values for each point.

#### Notes

* The node uses 3D noise functions, so it's best suited for spatially distributed data.
* In **Mutate Attribute** mode, ensure that the target attribute exists before running the node.
* Blending modes can be used creatively to combine multiple noise sources or modify existing data in complex ways.
