---
description: 'In editor :: PCGEx | Cluster : Edge Order'
icon: circle
---

# Edge Order

Fix an order for edge start & end endpoints.

**How It Works**

> AI-Generated, needs proofreading

* The Cluster : Edge Order node processes edges by establishing a specific order for their start and end endpoints based on predefined direction settings.
* Direction Settings determine the sequence in which points are ordered to create the final paths, influencing how edge connections are arranged.
* This node outputs an organized set of edges where each edge's start and end points follow the specified directional ordering.

#### Configuration

<details>

<summary><strong>Direction Settings</strong> <code>PCGExEdgeDirectionSettings</code></summary>

Defines the direction in which points will be ordered to form the final paths.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsClusters\Public\Elements\PCGExEdgeOrder.h`
