---
description: 'In editor :: PCGEx | Pathfinding : Navmesh'
icon: scrubber
---

# Pathfinding : Navmesh

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Extract paths from navmesh using seed and goal points.

### Overview

This node generates paths between seed and goal points using Unreal's navigation mesh system. It's designed for creating navigational paths that follow the game world's walkable surfaces, such as ground terrain or platforms. The node supports both regular pathfinding and hierarchical (cell-based) approaches, making it suitable for various procedural generation needs.

{% hint style="info" %}
This node requires a valid navmesh to be present in your level. Without one, no paths will be generated.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input** (Point): Seed points that define the starting locations for pathfinding
* **Goal Input** (Point): Goal points that define where paths should lead
* **Optional Goal Picker**: Allows custom logic to determine which goal point to use for each seed

</details>

<details>

<summary>Outputs</summary>

* **Output Paths**: Generated paths connecting seed and goal points, represented as point collections

</details>

### Properties Overview

Controls how paths are generated and what data is attached to them.

***

#### General

Controls basic path generation behavior.

**Add Seed To Path**

_When enabled, the seed point is included at the beginning of each generated path._

* The seed point becomes the first point in the path
* Useful for maintaining connection to the original starting location

**Add Goal To Path**

_When enabled, the goal point is included at the end of each generated path._

* The goal point becomes the last point in the path
* Ensures the final destination is preserved in the path data

**Require Navigable End Location**

_When enabled, paths are only generated if both seed and goal points are on navigable surfaces._

* If either point is not on a navmesh, no path will be created for that pair
* Useful for ensuring paths lead to valid locations in your game world

***

#### Tagging & Forwarding

Controls how attributes from seed and goal points are transferred to the resulting paths.

**Seed Attributes To Path Tags**

_Controls which seed point attributes are converted into tags on the output path._

* Tags can be used later to filter or process paths based on their source point properties
* Useful for categorizing paths by seed characteristics (e.g., "High Ground", "Low Ground")

**Seed Forwarding**

_Controls which seed point attributes are copied to the output path points._

* Enables passing through data like height, material type, or other properties from seeds
* Can be used to maintain context about where paths originate

**Goal Attributes To Path Tags**

_Controls which goal point attributes are converted into tags on the output path._

* Helps identify characteristics of destination points in generated paths
* Useful for grouping paths by their destinations (e.g., "Water", "Building")

**Goal Forwarding**

_Controls which goal point attributes are copied to the output path points._

* Allows transferring properties from goal points to the resulting path data
* Enables downstream processing based on destination characteristics

***

#### Advanced

Controls technical aspects of pathfinding and path generation.

**Pathfinding Mode**

_Selects the algorithm used for pathfinding._

* **Regular**: Standard pathfinding using the navmesh system
* **Hierarchical**: Cell-based approach that may be faster for large datasets but less precise

**Nav Agent Properties**

_Configures the navigation agent properties used during pathfinding._

* Determines how the pathfinder interprets the environment (e.g., height, radius)
* Affects whether paths are generated for specific character types or sizes
* Example: Set radius to 50 for a small character, 100 for a large one
