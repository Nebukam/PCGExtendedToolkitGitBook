---
description: 'In editor :: PCGEx | Path : Split'
icon: circle
---

# Split

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Split existing paths into multiple new paths.

#### Overview

This node takes existing paths and splits them into multiple new paths based on conditions defined by filters. It allows you to break up long paths at specific points, creating shorter segments or entirely new paths. This is useful for generating varied route networks, breaking up continuous paths into manageable chunks, or creating branching structures from a single path.

It modifies the input paths by splitting them at points that match the specified filter criteria. The behavior of how the split occurs depends on the selected action mode. You can choose to duplicate points, remove them, disconnect segments, or partition paths based on changing filter results.

{% hint style="info" %}
Connects to **Paths** input pin and outputs new **Paths**.
{% endhint %}

#### How It Works

This node processes each point in the input path and evaluates whether it meets a split condition defined by the attached filters. Based on the selected action, it modifies how the path is split:

1. For **Split**, it duplicates the point where the filter matches, creating two new paths: one ending at the original point, another starting from the duplicated point.
2. For **Remove**, it removes the matching point and shortens both adjacent segments of the path.
3. For **Disconnect**, it removes the connection between the matching point and the next point, starting a new path from the next point.
4. For **Partition**, it creates a new path whenever the filter result changes compared to the previous point.
5. For **Switch**, it uses the filter result as a switch signal to toggle between keeping or pruning points, creating paths based on this behavior.

The node also supports tagging paths with even or odd split counts if enabled. It can optionally omit single-point outputs to avoid generating empty or minimal paths.

<details>

<summary>Inputs</summary>

Expects **Paths** input containing one or more path data sets to be processed.

</details>

<details>

<summary>Outputs</summary>

Produces multiple new **Paths** outputs, each representing a segment or sub-path of the original input paths after splitting.

</details>

#### Configuration

<details>

<summary><strong>Split Action</strong><br><em>If both split and remove are true, the selected behavior takes priority.</em></summary>

Controls how points that match the filter are handled.

**Values**:

* **Split**: Duplicate the split point so the original becomes a new end, and the copy a new start.
* **Remove**: Remove the split point, shrinking both the previous and next paths.
* **Disconnect**: Disconnect the split point from the next one, starting a new path from the next.
* **Partition**: Works like split but only create new data set as soon as the filter result changes from its previous result.
* **Switch**: Use the result of the filter as a switch signal to change between keep/prune behavior.

</details>

<details>

<summary><strong>Initial Behavior</strong><br></summary>

Defines how the initial state is determined for Partition and Switch modes.

**Values**:

* **Constant**: Use a constant value.
* **Constant (Preserve)**: Use a constant value, but does not switch if the first value is the same.
* **From Point**: Use the first point starting value.
* **From Point (Preserve)**: Use the first point starting value, but preserve its behavior.

</details>

<details>

<summary><strong>Initial Value</strong><br><em>The initial switch value to start from. If false, will only starting to create paths after the first true result. If false, will start to create paths from the beginning and stop at the first true result instead.</em></summary>

Sets the starting value for Switch or Partition modes when using Constant behavior.

</details>

<details>

<summary><strong>Inclusive</strong><br><em>Should point insertion be inclusive of the behavior change</em></summary>

When enabled, includes the point that triggers a behavior change in the current path segment before switching to the new one.

</details>

<details>

<summary><strong>Omit Single Point Outputs</strong><br><em>Whether to output single-point data or not</em></summary>

When enabled, prevents outputs with only one point from being generated.

</details>

<details>

<summary><strong>Tag If Even Split</strong><br></summary>

When enabled, tags paths that result in an even number of splits.

</details>

<details>

<summary><strong>Is Even Tag</strong><br><em>...</em></summary>

Name of the tag to apply to paths with even split counts.

</details>

<details>

<summary><strong>Tag If Odd Split</strong><br></summary>

When enabled, tags paths that result in an odd number of splits.

</details>

<details>

<summary><strong>Is Odd Tag</strong><br><em>...</em></summary>

Name of the tag to apply to paths with odd split counts.

</details>

#### Usage Example

To create a branching path network from a single continuous path:

1. Connect a path input to this node.
2. Add a filter subnode that evaluates point properties (e.g., position, angle).
3. Set **Split Action** to **Split** or **Disconnect**.
4. Configure the filters to identify where you want to split the path.
5. This will generate multiple new paths from the original, each starting or ending at the specified points.

#### Notes

* The node works on point data within paths, not on edges or vertices directly.
* For Switch and Partition modes, the initial behavior affects how the first segment is handled.
* Tagging can help identify path segments for further processing or visualization.
* Performance may be impacted by large numbers of filters or complex conditions.
