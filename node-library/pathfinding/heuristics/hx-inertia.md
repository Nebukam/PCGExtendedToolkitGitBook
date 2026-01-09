---
description: 'In editor :: PCGEx | Heuristics : Inertia'
icon: circle-dashed
---

# HX : Inertia

{% hint style="warning" %}
## AI-generated page - To be reviewed. 
While not 100% accurante, it should properly capture what it does. It stills needs to be reviewed and proofread by a human.
{% endhint %}

> Creates a heuristic that evaluates path direction consistency based on the inertia of previous movement directions.

### Overview

This factory generates a heuristic that measures how well a candidate path aligns with the direction of travel from previously visited nodes. It's particularly useful for creating natural-looking paths that avoid sharp turns or sudden direction changes, making them feel more organic and purposeful.

{% hint style="info" %}
Connects to **Heuristics** input pins on pathfinding nodes like A\* Star or Dijkstra.
{% endhint %}

### How It Works

This heuristic calculates a score based on the average direction of movement from previous nodes in a path. When evaluating a new edge, it looks at the last few visited nodes and computes the average direction of travel. The resulting score reflects how much the current movement aligns with this historical direction.

The more consistent the direction (i.e., less sharp turns), the better the heuristic score. This encourages pathfinding algorithms to prefer smoother, more continuous paths over abrupt directional changes.

### Inputs

* **Heuristics** (Input pin): Connects to the heuristics input of pathfinding nodes like A\* Star or Dijkstra.

### Outputs

* **Heuristic** (Output pin): Provides the computed inertia heuristic value for use in pathfinding operations.

### Configuration

***

#### General

**Samples**

_Controls how many previous edges are considered when computing the average direction._

Set this to a higher value for smoother paths that consider longer travel history. For example, setting it to 3 will average the directions from the last three edges to determine the current inertia.

**Values**:

* **1**: Only considers the most recent edge
* **3**: Averages the last three edges for direction calculation

**Ignore If Not Enough Samples**

_When enabled, the heuristic will use a fallback score if there aren't enough previous nodes to compute an average._

This is useful when you want to avoid penalizing paths that start or end in areas with limited history. When disabled, the system will still attempt to calculate a score even with fewer samples.

**Global Inertia Score**

_The score used for global evaluation (e.g., initial sorting in A\* Star)._

This value is used by pathfinding algorithms when no previous path information is available. It's typically set to 0 or a small value to allow the system to start evaluating based on other factors.

**Fallback Inertia Score**

_The score returned when no inertia can be computed (e.g., at the very beginning of a path)._

This acts as a default score when there are no previous nodes to reference. It's typically set to 0, but you can adjust it if you want to bias the algorithm toward or away from certain early directions.

### Usage Example

Use this factory with an A\* Star node to create paths that naturally follow smooth curves rather than sharp turns. For example, when generating a path for a character navigating a winding forest trail, set Samples to 3 and keep the default fallback scores. This will make the algorithm prefer paths that maintain consistent direction over sudden changes.

### Notes

* This heuristic can be computationally expensive because it requires maintaining travel history and calculating directional averages.
* Higher sample counts produce smoother paths but increase processing time.
* Combine with other heuristics to balance smoothness with directness in your pathfinding results.
