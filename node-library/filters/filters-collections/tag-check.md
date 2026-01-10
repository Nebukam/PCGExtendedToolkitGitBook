---
description: 'In editor :: PCGEx | Data Filter : Tag Check'
icon: circle-dashed
---

# Tag Check

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Filters points based on whether they contain a specific tag that matches a given condition.

#### How It Works

This subnode examines each point in a collection and checks if it contains a particular tag that meets your specified matching criteria. It evaluates the tags assigned to each point and determines whether they match the tag name you've defined using one of several comparison methods. You can choose to match the entire tag name, or just parts of it like the beginning or end. The subnode also supports a strict mode that ignores any value portion of tags formatted as `Tag:Value`, allowing you to focus only on the tag prefix. Optionally, you can reverse the filtering logic so that points that would normally pass are excluded and vice versa.

#### Configuration

<details>

<summary><strong>Tag Name</strong><br><em>Constant tag name value.</em></summary>

The tag name to search for within each point's tags. For example, setting this to `"Terrain"` will look for points tagged with `Terrain`.

</details>

<details>

<summary><strong>Match</strong><br><em>How to match the tag name.</em></summary>

Defines how to compare the tag name against the point's tags.

**Values**:

* **Equals**: The tag must exactly match the provided tag name.
* **Contains**: The tag name must be a substring of the point's tag.
* **Starts with**: The point's tag must begin with the provided tag name.
* **Ends with**: The point's tag must end with the provided tag name.

</details>

<details>

<summary><strong>Strict Mode</strong><br><em>In strict mode, only check tag prefix and ignore values for tags formatted as `Tag:Value`.</em></summary>

When enabled, this subnode ignores any value part of a tag formatted like `Tag:Value` and only compares the prefix. For example, if set to `"Terrain"` and a point has the tag `"Terrain:Grass"`, it will match in strict mode.

</details>

<details>

<summary><strong>Invert Result</strong><br><em>Invert the result of this filter.</em></summary>

When enabled, points that would normally pass the filter are excluded, and those that fail are included. This allows you to create exclusion filters.

</details>

#### Usage Example

You have a point collection tagged with various terrain types like `"Terrain:Grass"`, `"Terrain:Water"`, and `"Terrain:Rock"`. To keep only points tagged as grass, set the **Tag Name** to `"Terrain:Grass"` and **Match** to **Equals**. If you want to include all points tagged with `"Terrain"` regardless of their specific type, enable **Strict Mode** and set **Tag Name** to `"Terrain"`.

#### Notes

* Tags are case-sensitive.
* This subnode works on point collections that have been tagged using the Tag Data node or similar.
* Combine multiple tag check subnodes for complex filtering logic.
