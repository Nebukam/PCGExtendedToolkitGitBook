---
description: 'In editor :: PCGEx | Meta Cleanup'
icon: circle
---

# Meta Cleanup

{% hint style="info" %}
### AI-generated page -- to be reviewed

While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Keep or remove tags and attributes using string queries.

### Overview

The Meta Cleanup node allows you to filter out unwanted metadata from your points, such as tags and attributes, based on simple string matching rules. This is useful for cleaning up point data before further processing, removing unnecessary metadata that might interfere with downstream operations, or preparing data for export.

It works by specifying a list of attribute names to either keep or remove using pattern matching. You can define multiple patterns to match against, and the node will apply those rules to your input points.

{% hint style="info" %}
This node modifies point metadata only. It does not change the geometry or structure of your points.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Default Input** (Points): Points with attributes to filter.

</details>

<details>

<summary>Outputs</summary>

* **Default Output** (Points): Points with filtered attributes.

</details>

### Properties Overview

Controls how the node filters point metadata.

***

#### Filters

Define which attributes to keep or remove using string matching.

**Filter Mode**

_Controls whether to include or exclude matching attributes._

* When set to **Include**, only attributes that match your patterns will be kept.
* When set to **Exclude**, attributes that match your patterns will be removed, while others are preserved.
* When set to **All**, all attributes are kept (no filtering applied).

**Values**:

* **All**: Keep all attributes
* **Exclude**: Remove matching attributes, keep the rest
* **Include**: Keep only matching attributes, remove the rest

**Matches**

_List of attribute name patterns to match._

* Each pattern is a string that can contain wildcards or exact matches.
* If any pattern matches an attribute name, it will be processed according to the Filter Mode.

**Comma Separated Names**

_Easy way to define multiple patterns as a comma-separated list._

* This field allows you to quickly enter several patterns at once.
* All patterns defined here use the same filter mode as specified above.

**Use Comma Separated Names**

_When enabled, the comma-separated list is used for filtering._

* If disabled, only the individual Matches are used.
* Enable this when you want to define multiple simple patterns quickly.
