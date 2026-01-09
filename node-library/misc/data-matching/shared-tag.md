---
icon: circle-dashed
---

# Shared Tag

{% hint style="info" %}
### AI-generated page -- to be reviewed

While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Matches data that share common tags, optionally checking for matching tag values.

### Overview

This node defines a matching rule based on shared tags between data elements. It's useful when you want to find relationships or connections between points, edges, or other data based on their assigned tags. For example, you might use it to connect points that have the same "Room" tag, or to group together elements that share a "Type" attribute.

The node supports both tag name matching and optional tag value matching. You can define how many of multiple tag tests must pass (All or Any) and whether each test is required or optional for a match to succeed.

{% hint style="info" %}
This node is designed to work with data that has been tagged using the "Tag : Add" or similar nodes. The tags are stored as attributes on the data elements.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input** (Required): Data to be matched against (points, edges, etc.)
* **Match Rule Output** (Required): This node outputs a match rule that can be used by matching nodes like "Match : By Rule"

</details>

<details>

<summary>Outputs</summary>

* **Output Match Rule**: A match rule definition that can be consumed by matching nodes

</details>

### Properties Overview

Settings for defining how tag-based matching is performed.

***

#### General

Controls the core matching behavior based on tags.

**Tag Name Input**

_Controls whether to use a constant tag name or read it from an attribute._

* How it affects results: Determines the source of the tag name used for matching.
* Value ranges: None, but affects how other settings are displayed.

**Values**:

* **Constant**: Use a fixed tag name defined below.
* **Attribute**: Read the tag name from an attribute on the input data.

**Tag Name (Attr)**

_The attribute to read the tag name from when "Tag Name Input" is set to "Attribute"._

* How it affects results: This attribute's value becomes the tag name used for matching.
* Value ranges: Any valid attribute name.

**Tag Name**

_The constant tag name to use for matching when "Tag Name Input" is set to "Constant"._

* How it affects results: All data elements are matched against this fixed tag name.
* Value ranges: Any string value.

**Do Value Match**

_When enabled, the match rule will also check that the tag values match._

* How it affects results: If disabled, only the presence of a matching tag name is checked. If enabled, both the tag name and its value must match for a successful match.
* Value ranges: Boolean (True/False)

### Notes

* This node works best with data that has been tagged using PCGEx's tagging system.
* When "Do Value Match" is enabled, make sure your tags have consistent values across matching elements.
* You can combine multiple "Match : Shared Tag" nodes to create complex matching rules.
* The match rule created by this node can be reused in multiple matching operations throughout your graph.
