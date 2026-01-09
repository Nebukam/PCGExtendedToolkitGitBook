---
description: 'In editor :: PCGEx | Pathfinding : Plot Navmesh'
icon: scrubber
---

# Pathfinding : Plot Navmesh

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Extract a single path from navmesh, going through each seed points in order.

### Overview

This node generates a single continuous path by finding connected routes between seed points using the navigation mesh. It's designed to create logical sequences of points that follow navigable surfaces, making it ideal for creating paths that respect terrain, obstacles, and other environmental constraints.

The node takes input seed points and connects them in order to form one or more paths. Each path is constructed by finding a valid route from one seed point to the next using the navmesh system. The resulting paths can be used for character movement, vehicle routing, or any application requiring navigable pathways through complex environments.

{% hint style="info" %}
This node works best when seed points are already positioned in locations where navigation is possible. Points that are too far apart or in unreachable areas may result in failed path segments.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input**: Seed points to be connected into paths
* **Optional Filters**: Point filters to select which seed points to process

</details>

<details>

<summary>Outputs</summary>

* **Output Paths**: Generated paths connecting the seed points in order

</details>

### Properties Overview

Controls how the node processes seed points and generates paths from them.

***

#### General

Controls core pathfinding behavior and settings.

**Add Seed To Path**

_When enabled, includes the starting seed point at the beginning of each generated path._

* This ensures that the first point in your path matches exactly with your input seed point
* Useful when you want to maintain precise start positions

**Add Goal To Path**

_When enabled, includes the ending goal point at the end of each generated path._

* Ensures that the final point in your path matches exactly with your input seed point
* Helps maintain accurate endpoint positioning

**Add Plot Points To Path**

_When enabled, inserts intermediate points along the path to create more detailed curves or smooth transitions._

* Creates additional points between seed points for smoother visual paths
* Can be useful for creating natural-looking movement routes or for visual effects

**Closed Loop**

_When enabled, connects the last point back to the first point to form a closed loop._

* Creates a continuous path that returns to its starting position
* Useful for creating circular routes or closed pathways

**Require Navigable End Location**

_When enabled, ensures that each destination point is navigable._

* If disabled, paths may be generated even if the final destination is not reachable
* Helps prevent invalid paths when strict navigation requirements are needed

**Fuse Distance**

_Sets the minimum distance between points in the resulting path._

* Points closer than this value will be merged into a single point
* Reduces the number of intermediate points for cleaner output
* Value range: 0.001 and above (default: 10)

**Omit Complete Path On Failed Plot**

_When enabled, omits the entire path if any segment fails to plot._

* Prevents partial paths from being created when navigation fails partway through
* Useful for ensuring complete validity of generated paths

***

#### Pathfinding Mode

Controls how the node performs pathfinding.

**Pathfinding Mode**

_Specifies the method used to find paths between seed points._

**Values**:

* **Regular**: Standard pathfinding using the full navmesh system
* **Hierarchical**: Cell-based pathfinding that may be faster for large datasets

***

#### Nav Agent Properties

Defines the navigation agent properties used during pathfinding.

**Nav Agent Properties**

_Specifies the characteristics of the agent performing pathfinding._

* This affects how paths are calculated based on agent size, movement capabilities, and other factors
* Settings include agent radius, height, step height, and other navigation parameters
