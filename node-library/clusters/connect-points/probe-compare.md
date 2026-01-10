---
icon: circle-dashed
---

# Probe : Compare

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Connect points that pass the value comparison between the probing point and the candidate point.

#### Overview

This subnode defines a filtering behavior for connecting points based on numeric attribute comparisons. It evaluates whether a candidate point meets a specified condition relative to the probe's own attribute value. This is useful when you want to create connections only under specific numeric criteria, such as distance thresholds or value ranges.

It connects to Filter pins on processing nodes that support probing, allowing you to control which points are considered for connection based on their attribute values.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes.
{% endhint %}

#### How It Works

This subnode compares an attribute value from the probe point with the same attribute value from candidate points. It evaluates the comparison using a specified operator (e.g., greater than, equal to, etc.) and only allows connections where the condition is met.

It first reads the numeric value of the selected attribute from the probe point. Then, for each candidate point, it retrieves the corresponding attribute value and compares it against the probe's value using the configured comparison operator. If the comparison passes, the candidate is considered a valid connection target.

If the **Prevent Coincidence** option is enabled, it also checks whether the direction vector from the probe to the candidate is too similar to other connections already made, helping avoid overlapping or redundant links.

#### Configuration

<details>

<summary><strong>Max Connections Input</strong><br><em>How to define the maximum number of connections.</em></summary>

Controls whether the maximum number of connections is defined by a constant value or an attribute.

**Values**:

* **Constant**: Use a fixed number for all probes.
* **Attribute**: Read the max connection count from an attribute on the input points.

</details>

<details>

<summary><strong>Max Connections</strong><br><em>Maximum number of connections to make.</em></summary>

The maximum number of valid candidates to connect to, when using a constant value for Max Connections Input.

</details>

<details>

<summary><strong>Attribute</strong><br><em>Attribute to compare.</em></summary>

The numeric attribute used in the comparison. This attribute must exist on both probe and candidate points.

</details>

<details>

<summary><strong>Comparison</strong><br><em>Comparison check.</em></summary>

The logical operator used to evaluate the comparison between probe and candidate values.

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

Used when the comparison is set to nearly equal or nearly not equal. Defines how close values must be to be considered equal.

</details>

<details>

<summary><strong>Prevent Coincidence</strong><br><em>Attempts to prevent connections that are roughly in the same direction.</em></summary>

When enabled, prevents connections that are in a similar direction to already established connections.

</details>

<details>

<summary><strong>Coincidence Prevention Tolerance</strong><br><em>Attempts to prevent connections that are roughly in the same direction.</em></summary>

Controls how similar two directions must be to be considered coincidental. Lower values mean stricter prevention.

</details>

#### Usage Example

You have a set of points representing terrain elevations and want to connect each point to nearby points with higher elevation. You would use this subnode with:

* **Attribute**: "Elevation"
* **Comparison**: "Strictly Greater"
* **Max Connections**: 3

This creates connections only to points that are strictly higher in elevation, up to a maximum of three per point.

#### Notes

* The attribute must be numeric for comparisons to work.
* When using "Nearly Equal" or "Nearly Not Equal", make sure the tolerance is appropriate for your data scale.
* Enabling coincidence prevention helps avoid visual clutter from overlapping connections but may reduce the number of valid candidates.
