---
icon: sliders
---

# Bidirectional

Bidirectional Search. Searches from both ends simultaneously. Very fast for large graphs.

⚙️ **Behavior** — Instanced pathfinding search.

**How It Works**

> AI-Generated, needs proofreading

* The Bidirectional node initiates search processes from both the start and end nodes of a graph simultaneously.
* It continues to expand nodes from each direction until the forward and backward searches intersect at some point in the graph.
* This approach aims to reduce the total number of nodes that need exploration, thereby potentially decreasing the time required for search completion.

_No configurable settings._

***

Source: `Source\PCGExElementsPathfinding\Public\Search\PCGExSearchBidirectional.h`
