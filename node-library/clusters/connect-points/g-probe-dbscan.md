---
icon: circle-dashed
---

# G-Probe : DBSCAN

{% hint style="warning" %}
## AI-generated page - To be reviewed. 
While not 100% accurante, it should properly capture what it does. It stills needs to be reviewed and proofread by a human.
{% endhint %}

> Creates a density-based connectivity probe that identifies points forming clusters based on local density and reachability, similar to the DBSCAN clustering algorithm.

### Overview

This factory generates a global probe that defines how points connect to each other based on their spatial density. It's used to create graph connections between points that are close together and form dense regions, making it ideal for generating natural-looking clusters or networks.

{% hint style="info" %}
Connects to **Probe** pins on graph-building nodes like **Graph : Connect Points** or **Graph : Build Clusters**
{% endhint %}

### How It Works

This probe analyzes the spatial distribution of points and groups them into clusters based on local density. It identifies core points (points with enough neighbors within a radius) and connects them based on reachability. Points that are not core but are within range of a core point become part of the cluster.

The algorithm works by:

1. For each point, finding all neighbors within a specified search distance
2. Identifying "core points" that have at least a minimum number of neighbors
3. Connecting core points to each other if they are within reachability distance
4. Connecting non-core points (border points) to core points based on configuration

### Inputs & Outputs

#### Inputs

* **Points**: Input point data to be processed
* **Epsilon**: Search radius for neighbor lookups
* **Min Points**: Minimum number of neighbors required to form a cluster
* **Core To Core Only**: Toggle for connecting only core points
* **Border To Nearest Core Only**: Toggle for border point connection behavior

#### Outputs

* **Probe**: Output probe data that can be used by graph building nodes

### Configuration

***

#### General

**Min Points**

_Minimum points within Epsilon to be considered a core point_

Controls how dense a region must be to form a cluster. A higher value requires more nearby points to define a core point, resulting in fewer but more tightly-knit clusters.

**Example**: With `MinPoints = 5`, a point needs at least 5 neighbors within its search radius to be considered a core point.

**Core To Core Only**

_If true, only connects core points to each other_

When enabled, only core points are connected to each other. Border points (points that are not core but are near core points) are not connected to each other or to non-core points.

**Example**: With `CoreToCoreOnly = true`, clusters form as isolated groups of core points, with no connections between border points.

**Border To Nearest Core Only**

_If true, connects border points to their nearest core point only. If false, connects to all reachable core points._

Controls how border points connect to the cluster. When enabled, a border point connects only to its closest core point. When disabled, it connects to all core points that are within reachability distance.

**Example**: With `BorderToNearestCoreOnly = true`, each border point connects to exactly one core point, creating a star-like structure around clusters.

### Usage Example

Use this probe when you want to create natural-looking clusters or networks based on point density. For example:

1. Create a set of scattered points representing locations
2. Connect them using **Graph : Connect Points** with this DBSCAN probe
3. Configure `MinPoints = 4` to form clusters of at least 4 points
4. Set `CoreToCoreOnly = false` to allow border points to connect to multiple core points
5. This will generate a graph where dense regions are connected, but sparse areas remain disconnected

### Notes

* This is a global probe that processes all points together rather than individually
* Requires an octree for efficient neighbor lookups, so performance scales well with large datasets
* Best used when you want to preserve natural clustering behavior based on point density
* The search radius is determined by the node's Epsilon setting or attribute-based values
* Can be combined with other probes using conditional logic to create complex connectivity rules
