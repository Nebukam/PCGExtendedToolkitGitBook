---
description: 'In editor :: PCGEx | Pathfinding : Navmesh'
icon: scrubber
---

# Pathfinding : Navmesh

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Extracts paths between seed and goal points using navmesh data.

#### How It Works

This node finds routes between pairs of seed and goal points by using a navigation mesh (navmesh). It starts by pairing up each seed point with a corresponding goal point, either based on a predefined list or by randomly selecting goals from the goal set for each seed.

Next, it calculates valid paths through the navmesh system. You can choose whether to include the original seed and goal points in the resulting path. Intermediate points along the path are optionally blended using a blending subnode, which controls how smoothly the path transitions between the start and end positions.

Finally, nearby points in the path are merged together to reduce clutter and improve visual smoothness. The node supports two different methods for finding paths: regular pathfinding that uses the navmesh directly, and hierarchical pathfinding that works better in complex environments with many obstacles.

#### Configuration

<details>

<summary><strong>GoalPicker</strong><br><em>Controls how goals are picked.</em></summary>

A subnode that defines how to select goals for each seed. For example, it can pick the closest goal or a random goal.

</details>

<details>

<summary><strong>bAddSeedToPath</strong><br><em>Add seed point at the beginning of the path</em></summary>

When enabled, the seed point is included as the first point in the resulting path.

</details>

<details>

<summary><strong>bAddGoalToPath</strong><br><em>Add goal point at the end of the path</em></summary>

When enabled, the goal point is included as the last point in the resulting path.

</details>

<details>

<summary><strong>bRequireNavigableEndLocation</strong><br><em>Whether the pathfinding requires a navigable end location.</em></summary>

When enabled, the system ensures that both seed and goal points are navigable. If not, the path is discarded.

</details>

<details>

<summary><strong>FuseDistance</strong><br><em>Fuse sub points by distance.</em></summary>

The minimum distance between points in a path to consider them separate. Points closer than this value are merged into one.

</details>

<details>

<summary><strong>Blending</strong><br><em>Controls how path points blend from seed to goal.</em></summary>

A subnode that defines how intermediate points in the path are interpolated or blended between the seed and goal positions.

</details>

<details>

<summary><strong>SeedAttributesToPathTags</strong><br><em>TBD</em></summary>

Placeholder for tagging attributes from seeds onto paths.

</details>

<details>

<summary><strong>SeedForwarding</strong><br><em>Which Seed attributes to forward on paths.</em></summary>

Defines which attributes from the seed points are copied to the resulting paths.

</details>

<details>

<summary><strong>GoalAttributesToPathTags</strong><br><em>TBD</em></summary>

Placeholder for tagging attributes from goals onto paths.

</details>

<details>

<summary><strong>GoalForwarding</strong><br><em>Which Goal attributes to forward on paths.</em></summary>

Defines which attributes from the goal points are copied to the resulting paths.

</details>

<details>

<summary><strong>PathfindingMode</strong><br><em>Pathfinding mode</em></summary>

* **Regular**: Standard pathfinding using the navmesh.
* **Hierarchical**: Cell-based pathfinding for more complex environments.

</details>

<details>

<summary><strong>NavAgentProperties</strong><br><em>Nav agent to be used by the nav system.</em></summary>

Defines the properties of the navigation agent, such as height and radius, that affect how paths are calculated.

</details>

#### Usage Example

1. Create a set of seed points (e.g., spawn locations for AI).
2. Create a set of goal points (e.g., destinations or waypoints).
3. Connect both sets to this node.
4. Configure the GoalPicker subnode to select goals based on proximity.
5. Enable `bAddSeedToPath` and `bAddGoalToPath` to include start/end points in paths.
6. Use a blending subnode like "Interpolate" to smooth transitions between seed and goal.
7. Output the resulting paths for use in other nodes, such as path visualization or AI movement.

#### Notes

* The node requires a valid navmesh in the level for proper pathfinding.
* Performance can be affected by the number of queries and complexity of the navmesh.
* Use `FuseDistance` to reduce clutter in dense paths.
