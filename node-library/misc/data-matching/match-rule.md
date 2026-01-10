---
icon: comment-dots
---

# Match Rule

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Defines a match rule to be used with nodes that support data matching.

#### How It Works

A Match Rule Definition subnode establishes the conditions that determine whether two sets of data, such as points or collections, are considered a match. It defines the logic that matching nodes use to compare data elements and decide if they relate to each other based on specific criteria.

The rule evaluates candidate data against a set of matchable sources using configurable strictness settings. If the match passes all required checks, it's considered successful according to the defined behavior.

Each match rule operates within a scope that includes the data being matched and the context in which the matching occurs. The rule can be configured to require all conditions to pass (Strictness: Required) or allow partial matches (Strictness: Optional).

#### Configuration

<details>

<summary><strong>Strictness</strong><br><em>Match Strictness.</em></summary>

Controls how strictly the matching conditions must be met.

**Values**:

* **Required**: All match conditions must pass for a successful match.
* **Optional**: A match is considered successful if any of the conditions pass, even if others fail.

</details>

#### Usage Example

Use this subnode to define custom matching logic in a graph where you want to connect points from one source to another based on specific criteria. For example, you could create a rule that matches points only when their color values are within a certain range, or when they're located near each other in space.

#### Notes

Match Rule Definition subnodes are abstract and must be implemented by concrete subclasses to define actual matching logic. They serve as templates for how matching should behave in your procedural workflows.
