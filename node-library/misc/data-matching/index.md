---
description: 'In editor :: PCGEx | Match by Index'
icon: circle-dashed
---

# Index

{% hint style="warning" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Matches points based on index values from target and candidate data.

### Overview

This node compares index values between target and candidate data to determine matches. It's useful when you want to align data points based on their position or order in the input streams, rather than spatial or attribute-based criteria.

The matching logic works by reading an index value from either the target or candidate point and comparing it against the index of the other point. This is particularly helpful for pairing up elements that should correspond to each other in a sequence.

{% hint style="info" %}
This node requires that both target and candidate data have index values available. If your data doesn't contain index attributes, you may need to add them using nodes like "Set Index" or similar before using this matching rule.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Target**: The main data stream used as the reference for matching
* **Candidates**: Data stream that will be tested against the target

</details>

<details>

<summary>Outputs</summary>

* **Output Match Rule**: A match rule definition that can be used by other matching nodes

</details>

### Properties Overview

Controls how index-based matching is performed.

***

#### General

Sets the core matching behavior.

**Source**

_Controls which data stream provides the index value for comparison._

* When set to **Target**, the node reads the index from each target point and compares it against the index of candidate points
* When set to **Candidate**, the node reads the index from each candidate point and compares it against the index of target points

**Index Attribute**

_Specifies which attribute contains the index values to compare._

* The attribute must be of type integer
* Default value is `$Index`, which uses the built-in index attribute
* Only data domain attributes are supported

**Index Safety**

_How to handle out-of-bounds index values._

* **Ignore**: Out-of-bounds indices are skipped (0,1,2,-1,-1,-1,...)
* **Tile**: Out-of-bounds indices wrap around (0,1,2,0,1,2...)
* **Clamp**: Out-of-bounds indices are clamped to valid range (0,1,2,2,2,2...)
* **Yoyo**: Out-of-bounds indices mirror back and forth (0,1,2,1,0,1...)

### Notes

* This matching method works best when both target and candidate data have meaningful sequential index values
* Use the "Tile" safety mode if your index values might exceed the number of points in one of the datasets
* Consider using this with nodes like "Match Points" or "Match Edges" to create complex matching workflows
* For performance, ensure that index attributes are properly set and don't contain unnecessary data types
