---
description: All
icon: sliders
---

# Goal Picker : All

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Selects all goals for each seed.

#### Overview

This subnode defines a behavior where every seed point in a pathfinding operation will target all available goal points. It's useful when you want to compute paths from each seed to every possible destination, rather than selecting one or a subset of goals.

It ensures that each seed will generate multiple paths — one to each goal — making it ideal for scenarios like finding the closest exit from multiple spawn points, or evaluating all possible destinations for a unit's movement.

{% hint style="info" %}
Connects to the **Goal Picker** input pin on pathfinding nodes.
{% endhint %}

#### How It Works

This subnode assigns every goal index to each seed point. When a pathfinding operation begins, it iterates through all available goals and adds their indices to the list of targets for each seed. This results in multiple output paths per seed — one for each goal.

The process is straightforward:

1. It determines how many goals exist.
2. For every seed point, it creates a list containing all goal indices.
3. Each seed will therefore generate a path to every goal in the dataset.

This behavior is particularly useful when you want to explore all possible destinations from a set of starting points without filtering or selecting specific targets.

<details>

<summary>Inputs</summary>

* Seeds: Points that act as starting locations for pathfinding.
* Goals: Points that act as destination locations for pathfinding.

</details>

<details>

<summary>Outputs</summary>

* Multiple paths per seed, each leading to a different goal.
* Each seed will have one output path for every goal in the dataset.

</details>

#### Configuration

<details>

<summary><strong>Index Safety</strong><br><em>Determines how out-of-bounds indices are handled.</em></summary>

Controls what happens when an index would exceed the valid range of goal indices.

**Values**:

* **Ignore**: Out-of-bounds indices are ignored (e.g., -1, -1, 0, 1).
* **Tile**: Out-of-bounds indices wrap around (e.g., 0, 1, 2, 0, 1).
* **Clamp**: Out-of-bounds indices are clamped to the maximum valid index (e.g., 0, 1, 2, 2, 2).
* **Yoyo**: Out-of-bounds indices mirror back and forth (e.g., 0, 1, 2, 1, 0).

</details>

#### Usage Example

Imagine you have a set of enemy spawn points and multiple exit locations in a level. You want to find the shortest path from each spawn point to every exit. By using this "All" goal picker subnode, each spawn point will generate a path to all exits, allowing you to evaluate which exit is most accessible from each spawn.

#### Notes

* This subnode always outputs multiple goals per seed.
* It's computationally heavier than selecting a single goal, as it generates more paths.
* The performance impact increases linearly with the number of goals.
