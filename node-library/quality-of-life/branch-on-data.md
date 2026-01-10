---
description: 'In editor :: PCGEx | Branch on Data'
icon: circle
---

# Branch on Data

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Route points to different output branches based on the value of a specified attribute.

#### How It Works

The Branch on Data node evaluates each point in the input data using a selected attribute. For every point, it checks the attribute's value against a list of defined conditions. If a match is found, the point is sent to the corresponding output pin. If no match is found, the point is routed to a default output pin.

The comparison logic depends on the type of data being checked (numeric or string). For numeric comparisons, you can use operators like equal, greater than, or nearly equal with a tolerance value. For strings, you can compare exact matches or lengths. The node supports multiple branches and allows for flexible routing logic.

#### Configuration

<details>

<summary><strong>Branch Source</strong><br><em>The attribute to check.</em></summary>

Specifies which attribute in the input data is used for branching. For example, if set to `@Data.Type`, it will use the value of that attribute to determine the output branch.

</details>

<details>

<summary><strong>Selection Mode</strong><br><em>Determines the type of value to be used to select an output.</em></summary>

Controls how branches are defined:

* **UserDefined**: Manually define each branch with custom values and comparisons.
* **EnumInteger**: Use an enum's integer values for branching.
* **EnumName**: Use an enum's name strings for branching.

</details>

<details>

<summary><strong>Branches</strong><br><em>List of conditions to evaluate.</em></summary>

A list of branch definitions. Each branch specifies a value and comparison operator to match against the attribute value. Only visible when Selection Mode is set to UserDefined.

</details>

<details>

<summary><strong>Enum Source</strong><br><em>Determines which Enum be used.</em></summary>

Selects whether to use an enum from Blueprint or C++. Only active when Selection Mode is not UserDefined.

</details>

<details>

<summary><strong>Enum Class</strong><br><em>Determines which Enum be used.</em></summary>

Blueprint enum selection. Only visible when Enum Source is Picker.

</details>

<details>

<summary><strong>Enum Picker</strong><br><em>Determines which Enum be used. Enum selection is ignored here, it's only using the class value internally.</em></summary>

C++ enum selection. Only visible when Enum Source is Selector.

</details>

<details>

<summary><strong>Default Pin Name</strong><br><em>Name of the default/fallback output pin.</em></summary>

Defines the name of the output pin where unmatched points are sent. This helps avoid confusion when "default" might be a valid branch value.

</details>

#### Usage Example

1. Set up a point source with an attribute like `@Data.Type` containing values such as "A", "B", or "C".
2. Configure Branch on Data to use this attribute.
3. Define three branches:
   * Branch 1: Value = "A", Comparison = Strictly Equal → Output pin named "BranchA"
   * Branch 2: Value = "B", Comparison = Strictly Equal → Output pin named "BranchB"
   * Branch 3: Value = "C", Comparison = Strictly Equal → Output pin named "BranchC"
4. Set the default pin name to "Default".
5. Connect downstream nodes to each output pin to process points in different ways.

#### Notes

* The node dynamically creates output pins based on branch definitions.
* When using string comparisons, consider case sensitivity and length-based checks.
* If a point's attribute value doesn't match any defined branch, it goes to the default pin.
* For numeric comparisons with floating-point values, use "Nearly Equal" with an appropriate tolerance.
