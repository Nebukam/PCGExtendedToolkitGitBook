---
description: 'In editor :: PCGEx | Vtx : Amplitude'
icon: circle-dashed
---

# Vtx : Amplitude

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Computes amplitude values for vertices based on their connections and neighboring data.

#### How It Works

This node analyzes each vertex in a cluster and evaluates its connections to neighboring vertices. For each vertex, it calculates amplitude values by examining the directions and lengths of edges connecting to neighbors.

It determines:

1. The **minimum amplitude**, which is the smallest distance or component value among all neighbor connections.
2. The **maximum amplitude**, which is the largest distance or component value among all neighbor connections.
3. The **amplitude range**, which is the difference between maximum and minimum amplitudes.
4. The **amplitude sign**, which indicates whether the vertex's position tends to align with or against a chosen up vector.

These values are computed either as a single scalar (using edge lengths) or component-wise (using individual X/Y/Z components), depending on the mode settings. The sign is determined using dot products between edge vectors and an up vector, which can be derived from average neighbor directions or a custom constant vector.

#### Configuration

<details>

<summary><strong>Write Min Amplitude</strong><br><em>When enabled, writes the minimum amplitude value to an attribute.</em></summary>

If enabled, this node will compute and store the smallest amplitude value for each vertex in a new attribute.

</details>

<details>

<summary><strong>Min Attribute Name</strong><br><em>Name of the attribute to write the minimum amplitude to.</em></summary>

The name of the attribute where the computed minimum amplitude values are stored. Defaults to "MinAmplitude".

</details>

<details>

<summary><strong>Min Absolute</strong><br><em>When enabled, uses absolute values for the minimum amplitude calculation.</em></summary>

If enabled, the node computes the absolute value of the minimum amplitude before writing it.

</details>

<details>

<summary><strong>Min Mode</strong><br><em>How to compute the minimum amplitude.</em></summary>

Controls whether the amplitude is computed as a scalar (length) or component-wise.

* **Length**: Uses the length of edge vectors.
* **Individual**: Computes per-component (X/Y/Z) values.

</details>

<details>

<summary><strong>Write Max Amplitude</strong><br><em>When enabled, writes the maximum amplitude value to an attribute.</em></summary>

If enabled, this node will compute and store the largest amplitude value for each vertex in a new attribute.

</details>

<details>

<summary><strong>Max Attribute Name</strong><br><em>Name of the attribute to write the maximum amplitude to.</em></summary>

The name of the attribute where the computed maximum amplitude values are stored. Defaults to "MaxAmplitude".

</details>

<details>

<summary><strong>Max Absolute</strong><br><em>When enabled, uses absolute values for the maximum amplitude calculation.</em></summary>

If enabled, the node computes the absolute value of the maximum amplitude before writing it.

</details>

<details>

<summary><strong>Max Mode</strong><br><em>How to compute the maximum amplitude.</em></summary>

Controls whether the amplitude is computed as a scalar (length) or component-wise.

* **Length**: Uses the length of edge vectors.
* **Individual**: Computes per-component (X/Y/Z) values.

</details>

<details>

<summary><strong>Write Amplitude Range</strong><br><em>When enabled, writes the amplitude range to an attribute.</em></summary>

If enabled, this node will compute and store the difference between maximum and minimum amplitudes in a new attribute.

</details>

<details>

<summary><strong>Range Attribute Name</strong><br><em>Name of the attribute to write the amplitude range to.</em></summary>

The name of the attribute where the computed amplitude range values are stored. Defaults to "AmplitudeRange".

</details>

<details>

<summary><strong>Range Absolute</strong><br><em>When enabled, uses absolute values for the amplitude range calculation.</em></summary>

If enabled, the node computes the absolute value of the amplitude range before writing it.

</details>

<details>

<summary><strong>Range Mode</strong><br><em>How to compute the amplitude range.</em></summary>

Controls whether the amplitude is computed as a scalar (length) or component-wise.

* **Length**: Uses the length of edge vectors.
* **Individual**: Computes per-component (X/Y/Z) values.

</details>

<details>

<summary><strong>Write Amplitude Sign</strong><br><em>When enabled, writes the amplitude sign to an attribute.</em></summary>

If enabled, this node will compute and store a directional sign value based on the dot product of edge vectors and an up vector.

</details>

<details>

<summary><strong>Sign Attribute Name</strong><br><em>Name of the attribute to write the amplitude sign to.</em></summary>

The name of the attribute where the computed amplitude sign values are stored. Defaults to "AmplitudeSign".

</details>

<details>

<summary><strong>Sign Output Mode</strong><br><em>How to compute the amplitude sign value.</em></summary>

Controls how the sign is calculated:

* **Raw**: The raw dot product.
* **Size**: Dot product multiplied by edge size.
* **Normalized Size**: Dot product multiplied by normalized edge size.
* **Sign**: Returns 0, 1, or -1 based on the dot product.

</details>

<details>

<summary><strong>Sign Absolute</strong><br><em>When enabled, uses absolute values for the amplitude sign calculation.</em></summary>

If enabled, the node computes the absolute value of the amplitude sign before writing it.

</details>

<details>

<summary><strong>Up Mode</strong><br><em>How to determine the up vector used for amplitude sign calculations.</em></summary>

Controls how the up vector is determined:

* **Average Direction**: Uses the average direction from neighbors.
* **Custom Up Vector**: Uses a user-defined constant or attribute.

</details>

<details>

<summary><strong>Up Input Type</strong><br><em>Whether to use a constant or attribute for the up vector.</em></summary>

Controls whether the up vector is defined as a constant value or read from an input attribute.

* **Constant**: Use a fixed vector.
* **Attribute**: Read from an attribute on the vertex data.

</details>

<details>

<summary><strong>Up Vector (Attr)</strong><br><em>The attribute to use for the up vector, if using Attribute mode.</em></summary>

The name of the attribute used as the up vector when "Up Input Type" is set to "Attribute".

</details>

<details>

<summary><strong>Up Vector</strong><br><em>The constant vector to use as the up vector, if using Constant mode.</em></summary>

The fixed vector used as the up vector when "Up Input Type" is set to "Constant". Defaults to FVector::UpVector.

</details>
