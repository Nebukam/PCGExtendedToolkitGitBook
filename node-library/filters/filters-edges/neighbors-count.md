---
description: 'In editor :: PCGEx | Edge Filter : Neighbors Count'
icon: circle-dashed
---

# Neighbors Count

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Filters edges based on the neighbor count of their endpoints.

#### How It Works

This subnode examines each edge in a graph and checks how many connections (neighbors) are attached to each of its two endpoints. It then applies a set of rules to determine whether the edge should be kept or removed from the graph.

The filtering logic depends on the selected mode:

* **Sum**: Adds up the neighbor counts from both endpoints, then compares that total to the threshold.
* **Any Endpoint**: Checks if at least one endpoint has enough neighbors to meet the comparison against the threshold.
* **Both Endpoints**: Requires that both endpoints individually have enough neighbors to pass the comparison.

You can choose how to compare these numbers (e.g., greater than, equal to) and whether to include or exclude edges that match the criteria. If you enable the invert option, it flips the results — edges that would normally pass are now filtered out, and vice versa.

#### Configuration

<details>

<summary><strong>Threshold Input</strong><br><em>Whether to read the threshold from an attribute on the edge or a constant.</em></summary>

Controls whether the filter uses a fixed number or reads the threshold value from an attribute on the input edges.

**Values**:

* **Constant**: Use the value specified in the Threshold setting.
* **Attribute**: Read the threshold value from a numeric attribute on the edge data.

</details>

<details>

<summary><strong>Threshold (Attr)</strong><br><em>Attribute to fetch threshold from.</em></summary>

The name of the attribute used when Threshold Input is set to Attribute. This must be a numeric type.

</details>

<details>

<summary><strong>Threshold</strong><br><em>The number of connection endpoints must have to be considered a Bridge.</em></summary>

The fixed threshold value used when Threshold Input is set to Constant. Must be at least 1.

</details>

<details>

<summary><strong>Mode</strong><br><em>How should we check if the threshold is reached.</em></summary>

Defines how the neighbor counts of the edge's endpoints are evaluated against the threshold.

**Values**:

* **Sum**: The total neighbor count of both endpoints is compared to the threshold.
* **Any Endpoint**: At least one endpoint must meet the comparison against the threshold.
* **Both Endpoints**: Both endpoints must individually meet the comparison against the threshold.

</details>

<details>

<summary><strong>Comparison</strong><br><em>Comparison check.</em></summary>

The logical operator used to compare neighbor counts with the threshold.

**Values**:

* **==**: Strictly equal
* **!=**: Strictly not equal
* **>=**: Equal or greater
* **<=**: Equal or smaller
* **>**: Strictly greater
* **<**: Strictly smaller
* **\~=**: Nearly equal (with tolerance)
* **!\~=**: Nearly not equal (with tolerance)

</details>

<details>

<summary><strong>Tolerance</strong><br><em>Rounding mode for approx. comparison modes.</em></summary>

Used when the Comparison is set to Nearly Equal or Nearly Not Equal. Defines how close values must be to be considered equal.

</details>

<details>

<summary><strong>Invert</strong><br><em>When enabled, the filter result is inverted.</em></summary>

When enabled, edges that would normally pass the filter are excluded, and those that fail are included.

</details>

#### Usage Example

Use this subnode to identify "bridge" edges in a graph where each endpoint must have at least 2 neighbors. Set Threshold to 2, Mode to Both Endpoints, and Comparison to Greater Than or Equal. This will select only edges where both endpoints connect to at least two other points.

#### Notes

* The neighbor count is based on the graph's connectivity structure.
* Combining multiple filters allows for complex edge selection logic.
* Performance is optimal when using constant thresholds rather than attributes.
