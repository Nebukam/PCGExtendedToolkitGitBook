---
description: 'In editor :: PCGEx | Data Filter : Tag Check'
icon: circle-dashed
---

# Tag Check

{% hint style="warning" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Creates a filter that checks if points in a collection have specific tags matching a given condition.

### Overview

This filter evaluates whether input points contain certain tags based on a specified matching rule. It's used to selectively process or exclude points based on their tag content.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes like **Point Filter**, **Collection Filter**, or **Data Override**
{% endhint %}

### How It Works

The filter examines each point's tags and determines if they match a specified tag name using a comparison method. Points that pass the test are included in downstream operations, while those that fail are excluded.

### Inputs

* **Points**: Input point collection to filter
* **Filter**: Filter connection for downstream processing

### Outputs

* **Pass**: Points that meet the filter criteria
* **Fail**: Points that do not meet the filter criteria

### Configuration

***

#### General

**Tag Name**

_The tag to look for._

Specify the exact tag name to search for. For example, if you set this to "Grass", only points with the tag "Grass" will pass the filter.

**Match**

_How to compare the tag name._

**Values**:

* **Equals**: The tag must exactly match the specified name.
* **Contains**: The tag name must contain the specified string.
* **Starts with**: The tag name must begin with the specified string.
* **Ends with**: The tag name must end with the specified string.

**Strict Mode**

_When enabled, only check the tag prefix and ignore values for tags formatted as `Tag:Value`._

In strict mode, if you're looking for a tag named "Grass", it will match both "Grass" and "Grass:Type1", but not "Grass2". This is useful when working with hierarchical tags.

**Invert Result**

_When enabled, the filter result is reversed._

If this is enabled, points that would normally pass the filter will be excluded, and those that fail will be included. For example, if you're looking for points tagged "Grass" and invert is enabled, only non-Grass points will pass through.

### Usage Example

You want to process only points that are tagged as "Tree". You set:

* Tag Name: "Tree"
* Match: Equals
* Invert Result: Disabled

This filter will include all points with the exact tag "Tree" and exclude everything else. You can then connect this to a **Point Filter** node to process only tree points.

### Notes

* Tags are case-sensitive, so "Tree" and "tree" are treated as different tags
* Multiple tags on a point can be checked using multiple filter instances
* Combine with other filters to create complex selection criteria
* Useful for organizing data into categories like "Tree", "Rock", "Water", etc.
