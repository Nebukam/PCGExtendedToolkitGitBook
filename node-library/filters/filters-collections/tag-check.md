---
description: 'In editor :: PCGEx | Data Filter : Tag Check'
icon: circle-dashed
---

# Tag Check

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Simple tag check on the input collection.

#### Overview

This subnode filters points based on whether they contain a specific tag or set of tags. It allows you to selectively include or exclude points in your procedural workflow depending on their tag values. You can match tags exactly, check if they contain a substring, or verify if they start or end with a particular string.

This filter is useful when working with tagged data—such as points that have been labeled for different purposes—and you want to process only those that meet certain tagging criteria. For example, you might tag points as "grass", "rock", or "water" and then use this subnode to only pass through points tagged as "grass".

{% hint style="info" %}
Connects to **Filter** pins on processing nodes.
{% endhint %}

#### How It Works

This filter evaluates each point in the input collection against a specified tag. It checks if the point's tags match the defined criteria using a comparison method (like exact match, contains, starts with, or ends with). If the condition is met, the point passes through; otherwise, it is filtered out.

The logic works as follows:

1. For each point, retrieve its associated tags.
2. Compare the point's tags against the configured tag name using the selected matching mode.
3. If `bStrict` is enabled, only the prefix of the tag (before any colon) is compared, ignoring the value part (e.g., for a tag like `"Material:Grass"`, only `"Material"` is checked).
4. If `bInvert` is enabled, the result of the comparison is flipped—points that would normally pass now fail and vice versa.

<details>

<summary>Inputs</summary>

Expects a collection of points with associated tags to be filtered.

</details>

<details>

<summary>Outputs</summary>

Points that meet the tag matching criteria are passed through; others are excluded.

</details>

#### Configuration

***

**Tag Name**

_The constant tag name value to check against._

Specify the tag you want to look for. For example, if you set this to `"Material"`, it will match any point tagged with `"Material"` or `"Material:Grass"` (depending on strict mode).

**Match**

_Determines how the tag is compared to the input._

**Values**:

* **Equals**: The tag must exactly match the specified value.
* **Contains**: The tag must contain the specified value as a substring.
* **Starts with**: The tag must begin with the specified value.
* **Ends with**: The tag must end with the specified value.

**bStrict**

_When enabled, only check tag prefix and ignore values for tags formatted as `Tag:Value`._

If set to true, this mode ignores the part after a colon in tags. For instance, if your tag is `"Material:Grass"` and you're checking for `"Material"`, it will match even though the full tag includes a value.

**bInvert**

_When enabled, invert the result of this filter._

If set to true, points that would normally pass the filter are excluded, and those that fail are included instead.

#### Usage Example

Suppose you have a point collection tagged with `"TerrainType:Grass"` and `"TerrainType:Rock"`. You want to process only grass terrain points. Set:

* **Tag Name** to `"TerrainType"`
* **Match** to **Starts with**
* **bStrict** to **true**

This will match all tags that start with `"TerrainType"` and ignore the value part, effectively filtering out only those tagged as `"TerrainType:Grass"`.

#### Notes

* Tags are typically formatted as `Tag:Value` (e.g., `"Material:Wood"`), but this subnode can handle both simple and complex tag formats.
* When using **Contains**, **Starts with**, or **Ends with**, be careful with partial matches that may unintentionally include unwanted data.
* This filter works best when tags are consistently formatted to avoid ambiguity.
