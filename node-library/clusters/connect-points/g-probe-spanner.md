---
icon: circle-dashed
---

# G-Probe : Spanner

{% hint style="info" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Creates a global probe that generates a sparse graph with guaranteed path length bounds using a greedy t-spanner algorithm.

### Overview

This probe factory defines a connection logic that builds a sparse graph where the shortest path between any two connected points is at most `t` times their Euclidean distance. It's useful for creating efficient navigation graphs or connectivity networks that maintain certain topological properties while minimizing edge count.

{% hint style="info" %}
Connects to **Probe** pins on graph-building nodes like "Connect Points" or "Build Graph"
{% endhint %}

### How It Works

The greedy t-spanner algorithm creates a sparse graph by iteratively adding edges between points that are not already connected, ensuring that the resulting graph maintains a maximum path length constraint. The stretch factor `t` controls how much longer paths can be compared to direct Euclidean distance.

This creates a trade-off: lower stretch factors (closer to 1) produce denser graphs with better path quality, while higher stretch factors (like 2 or 3) create sparser graphs that are more efficient but may have longer paths.

### Inputs

* **Probe** - Connection point for graph-building nodes
* **Points** - Input point cloud to process

### Outputs

* **Graph** - Generated sparse graph with guaranteed path bounds

### Configuration

***

#### General

**Stretch Factor**

_Controls the maximum allowed path length between connected points._

The algorithm ensures that for any two connected points, the shortest path in the graph is at most `t` times their Euclidean distance. A value of 2 means paths are at most twice as long as direct distance.

**Values**:

* **1.0**: Creates a complete graph (every point connects to every other)
* **2.0**: Default - creates a sparse graph with reasonable path quality
* **3.0**: Even sparser, but paths may be significantly longer

**Max Edge Candidates**

_Limits the number of candidate edges considered for each point._

Controls performance by limiting how many potential connections are evaluated when building the spanner. Higher values allow better graph quality but increase processing time.

**Values**:

* **100**: Very limited candidates, fastest but lowest quality
* **50000**: Default - good balance of performance and quality

### Usage Example

Use this probe with a "Connect Points" node to create a navigation mesh where:

1. You want to minimize the number of connections (sparse graph)
2. You guarantee that no path is more than twice the direct distance
3. You're building a large-scale world with efficient connectivity

This is ideal for:

* Navigation meshes for AI pathfinding
* Network connectivity in large worlds
* Graph-based procedural content generation where edge count matters

### Notes

* The stretch factor directly impacts graph density and path quality
* Higher max edge candidates improve results but slow down processing
* Best used with large point clouds where sparse connectivity is desired
* The resulting graph maintains theoretical guarantees about path lengths, making it predictable for gameplay systems
