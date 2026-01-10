---
description: Random
icon: sliders
---

# Goal Picker : Random

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Randomly selects one or more goals from a set of possible targets.

#### Overview

This node randomly picks goals for each seed point, allowing for varied and unpredictable pathfinding outcomes. It's useful when you want to introduce randomness into your procedural paths, such as making enemies choose different destinations or creating dynamic obstacle avoidance behaviors. You can configure it to pick a single goal or multiple goals per seed.

{% hint style="info" %}
Connects to **Goal Picker** pins on pathfinding nodes.
{% endhint %}

#### How It Works

This node selects goals based on the configured random behavior:

* For each seed point, it generates a random index within the range of available goals.
* If **Single** is selected, one goal is picked.
* If **Multiple Fixed** is selected, a fixed number of goals are picked (based on the Num Goals setting).
* If **Multiple Random** is selected, a random number of goals are picked (between 1 and the Num Goals value).

The randomness can be made deterministic by using a local seed. The selection process uses the configured index safety mode to handle cases where the random index might exceed available goal count.

#### Configuration

<details>

<summary><strong>Local Seed</strong><br><em>Seed value for the random number generator.</em></summary>

Controls the deterministic behavior of the random selection. When set to a fixed value, the same sequence of random numbers will be generated each time, ensuring consistent results.

</details>

<details>

<summary><strong>Goal Count</strong><br><em>Determines how many goals are selected per seed.</em></summary>

Controls whether one or multiple goals are selected for each seed point.

**Values**:

* **Single**: A single random goal is picked.
* **Multiple Fixed**: A fixed number of random goals is picked.
* **Multiple Random**: A random number of random goals is picked.

</details>

<details>

<summary><strong>Num Goals Type</strong><br><em>Fetch the number of goals from a local attribute.</em></summary>

Controls whether the number of goals to pick is a constant value or read from an input attribute.

**Values**:

* **Constant**: Use a fixed number defined in the Num Goals setting.
* **Attribute**: Read the number of goals from an attribute on the input data.

</details>

<details>

<summary><strong>Num Goals (Attr)</strong><br><em>Attribute to read the number of goals from.</em></summary>

The attribute used when Num Goals Type is set to Attribute. It should contain integer values representing how many goals to select per seed.

</details>

<details>

<summary><strong>Num Goals</strong><br><em>Fixed number of goals to pick if Num Goals Type is Constant.</em></summary>

The fixed number of goals to select when Goal Count is set to Multiple Fixed or Multiple Random. Must be at least 1.

</details>

#### Usage Example

Use this node in a pathfinding graph where you want enemies to randomly choose different destinations from a list of possible targets. Set the goal count to "Multiple Random" and configure Num Goals to 3, so each enemy will select between 1 and 3 random goals from the available target set.

#### Notes

* The Local Seed ensures reproducible results when using random selection.
* When using "Multiple Random", the actual number of goals selected per seed will be between 1 and the value specified in Num Goals.
* Index safety settings determine how out-of-bounds indices are handled during random selection.
