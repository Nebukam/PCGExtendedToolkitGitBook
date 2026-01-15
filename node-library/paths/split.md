---
description: 'In editor :: PCGEx | Path : Split'
icon: circle
---

# Split

Split existing paths into multiple new paths.

**How It Works**

> AI-Generated, needs proofreading

* The node evaluates existing paths and splits them into multiple new paths based on specified conditions.
* Depending on the "Initial Value" setting, the node either starts creating new paths from the beginning until the first true result or waits for the first true result to begin splitting.
* The "Inclusive" setting determines whether point insertion includes the change in behavior that triggers a split.
* If "Omit Single Point Outputs" is enabled, the node does not output any data containing only single points after splitting.

#### Configuration

<details>

<summary><strong>Split Action</strong> <code>PCGExPathSplitAction</code></summary>

If both split and remove are true, the selected behavior takes priority

**Values:**

* **Split**: Duplicate the split point so the original becomes a new end, and the copy a new start.
* **Remove**: Remove the split point, shrinking both the previous and next paths.
* **Disconnect**: Disconnect the split point from the next one, starting a new path from the next.
* **Partition**: Works like split but only create new data set as soon as the filter result changes from its previous result.
* **Switch**: Use the result of the filter as a switch signal to change between keep/prune behavior.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Initial Behavior</strong> <code>PCGExPathSplitInitialValue</code></summary>

Controls initial behavior.

**Values:**

* **Constant**: Use a constant value.
* **Constant Preserve**
* **From Point**: Use the first point starting value.
* **From Point Preserve**

⚡ PCG Overridable

</details>

<details>

<summary><strong>Initial Value</strong> <code>bool</code></summary>

The initial switch value to start from. If false, will only starting to create paths after the first true result. If false, will start to create paths from the beginning and stop at the first true result instead.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Inclusive</strong> <code>bool</code></summary>

Should point insertion be inclusive of the behavior change

⚡ PCG Overridable

</details>

<details>

<summary><strong>Omit Single Point Outputs</strong> <code>bool</code></summary>

Whether to output single-point data or not

⚡ PCG Overridable

</details>

**Tagging**

<details>

<summary><strong>Tag If Even Split</strong> <code>bool</code></summary>

Controls tag if even split.

</details>

<details>

<summary><strong>Is Even Tag</strong> <code>String</code></summary>

...

</details>

<details>

<summary><strong>Tag If Odd Split</strong> <code>bool</code></summary>

Controls tag if odd split.

</details>

<details>

<summary><strong>Is Odd Tag</strong> <code>String</code></summary>

...

</details>

***

Source: `Source\PCGExElementsPaths\Public\Elements\PCGExSplitPath.h`
