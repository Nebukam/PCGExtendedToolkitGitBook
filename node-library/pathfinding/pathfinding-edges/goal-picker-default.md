---
description: Default
icon: sliders
---

# Goal Picker (Default)

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Selects a single goal index using a default method with configurable safety for out-of-bounds indices.

#### How It Works

This subnode selects a single goal index from a set of available goal points for each seed point. It uses the configured index safety method to handle cases where the selected index would be out of bounds (negative or greater than the number of goals). The selection is based on the seed point's index in the input data.

The process works as follows:

1. Takes a seed point and its index within the input data
2. Uses that index to select a goal from the goal set
3. Applies the configured index safety method if the calculated index is out of bounds
4. Returns a single goal index for use in pathfinding operations

For example, with 5 goals and `Tile` safety:

* Seed index 0 → Goal index 0
* Seed index 1 → Goal index 1
* Seed index 5 → Goal index 0 (wrapped around)
* Seed index -1 → Goal index 4 (wrapped around)

#### Configuration

<details>

<summary><strong>Index Safety</strong><br><em>How to handle out-of-bounds indices.</em></summary>

Controls what happens when the selected goal index is negative or exceeds the number of available goals.

**Values**:

* **Ignore**: Out of bounds indices are ignored, typically resulting in no goal being selected.
* **Tile**: Out of bounds indices wrap around (0,1,2,0,1,2...).
* **Clamp**: Out of bounds indices are clamped to the valid range (0,1,2,2,2,2...).
* **Yoyo**: Out of bounds indices mirror back and forth (0,1,2,1,0,1...).

</details>

#### Usage Example

Use this subnode when you want a simple, deterministic way to assign goals to seed points in pathfinding. For example:

1. Create a set of goal points scattered around your world
2. Connect them to a `Pathfinder` node
3. Assign this "Default" goal picker subnode to the Goal Picker input
4. Configure Index Safety to `Tile` if you want to cycle through goals when there are more seeds than goals

#### Notes

This is the default behavior for pathfinding operations and works well in most scenarios where a simple index-based selection is sufficient.
