---
description: 'In editor :: PCGEx | Heuristics : Feedback'
icon: circle-dashed
---

# HX : Feedback

{% hint style="warning" %}
## AI-generated page - To be reviewed. 
While not 100% accurante, it should properly capture what it does. It stills needs to be reviewed and proofread by a human.
{% endhint %}

> Creates a heuristic that penalizes points and edges that have already been visited during pathfinding, encouraging the algorithm to explore new areas.

### Overview

This factory generates a feedback-based heuristic that modifies pathfinding scores based on how many times nodes and edges have been traversed in previous path queries. It's particularly useful for creating diverse paths or preventing algorithms from getting stuck in loops.

{% hint style="info" %}
Connects to **Heuristics** input pins on pathfinding nodes like **Pathfinder** or **Pathfinder With Constraints**
{% endhint %}

### How It Works

This heuristic works by tracking how often each point (node) and edge has been visited during previous pathfinding operations. When a point or edge is encountered in the current path query, its "feedback score" increases based on how frequently it's been used before.

The feedback score is then applied as a penalty to future pathfinding decisions, making previously visited areas less attractive for new paths. This encourages exploration of unvisited regions and helps avoid repetitive or overly similar paths.

### Inputs

* **Heuristics** (Input pin): Connects to pathfinding nodes to apply the feedback heuristic
* **Pathfinder** (Input pin): Required for pathfinding operations that support multiple queries

### Outputs

* **Heuristic Result**: The modified pathfinding score with feedback penalties applied

### Configuration

***

#### General

**Binary Mode**

_When enabled, weight doesn't scale with overlap; the base score is either 0 or 1._

When enabled, the heuristic will only apply a full penalty (weight = 1) or no penalty (weight = 0) to visited points/edges. When disabled, it uses a continuous scale based on how many times each point/edge has been visited.

**Visited Points Weight Factor**

_Weight to add to points that are already part of the plotted path._

Controls how much additional weight is added to points that have been visited in previous path queries. For example, if set to 0.5, a point visited twice will receive an additional 1.0 weight penalty.

**Visited Edges Weight Factor**

_Weight to add to edges that are already part of the plotted path._

Controls how much additional weight is added to edges that have been visited in previous path queries. For example, if set to 0.3, an edge visited three times will receive an additional 0.9 weight penalty.

**Global Feedback**

_Global feedback weight persist between path query in a single pathfinding node. IMPORTANT NOTE: This break parallelism, and may be slower._

When enabled, the feedback tracking persists across multiple path queries within the same pathfinding node. This means that if you're generating multiple paths from the same start point, visited points/edges will affect all subsequent paths.

**Affect All Connected Edges**

_Controls whether to apply feedback to all edges connected to a visited node._

When enabled, visiting a node applies feedback to all edges connected to it. When disabled, only the specific edge used to reach that node is penalized.

### Usage Example

Use this factory when you want to generate diverse paths from the same start point. For example, if you're creating multiple routes for AI units to follow, you can use this heuristic to ensure they don't all take identical paths through the same locations.

Connect this factory to a **Pathfinder** node's **Heuristics** input pin. Set **Visited Points Weight Factor** to 0.5 and **Visited Edges Weight Factor** to 0.3. This will make previously visited points and edges increasingly less attractive for new paths, encouraging exploration of different areas.

### Notes

* This heuristic works best when used with pathfinding nodes that support multiple queries
* Enabling **Global Feedback** will slow down processing due to the need to maintain state between queries
* The feedback system is designed to be lightweight but can become memory-intensive if tracking many unique points/edges
* Combine this with other heuristics for more complex pathfinding behaviors
