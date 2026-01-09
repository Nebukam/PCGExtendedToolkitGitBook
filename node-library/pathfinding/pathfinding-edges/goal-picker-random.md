---
description: Random
icon: sliders
---

# Goal Picker : Random

{% hint style="info" %}
### AI-generated page -- to be reviewed

While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Picks random goals from a set of available targets.

### Overview

This node randomly selects one or more goals from a collection of possible targets. It's useful when you want to introduce randomness into pathfinding, such as having units move to random destinations or selecting random objectives for AI behavior.

The node supports three modes: picking a single goal, picking a fixed number of goals, or picking a random number of goals. You can control the randomness using a local seed and optionally read the number of goals from an attribute on the input data.

{% hint style="info" %}
This node works best when you have more than one goal to choose from. If there's only one goal available, it will always return that same goal regardless of the randomization settings.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Seeds**: Points that act as starting locations for pathfinding
* **Goals**: Points that serve as potential destinations

</details>

<details>

<summary>Outputs</summary>

* **Output**: Modified point data with selected goal indices assigned to each seed

</details>

### Properties Overview

Controls how the random selection is performed and what goals are picked.

***

#### General

Determines how many goals to select and how randomness is applied.

**LocalSeed**

_Sets a seed for the random number generator._

* Affects which goals are selected when multiple options are available
* Use different seeds to get varied results across runs
* Set to 0 for default behavior (based on time)

**Values**:

* **0**: Uses a time-based seed
* **Non-zero**: Uses the specified value as a fixed seed

**GoalCount**

_Specifies how many goals to pick per seed._

* Controls whether to select one goal or multiple
* Affects the output data structure and downstream processing

**Values**:

* **Single**: Picks exactly one random goal
* **Multiple Fixed**: Picks a set number of random goals
* **Multiple Random**: Picks a random number of random goals

**NumGoalsType**

_Specifies whether to use a constant value or read from an attribute._

* Determines how the number of goals is defined when using "Multiple Fixed" or "Multiple Random"
* When set to Attribute, you must specify the attribute name in the next field

**Values**:

* **Constant**: Use a fixed number
* **Attribute**: Read the number from input data

**NumGoalAttribute**

_Reads the number of goals from an attribute on the seed point._

* Only visible when "NumGoalsType" is set to Attribute
* The attribute value must be an integer
* Used in "Multiple Fixed" and "Multiple Random" modes

**NumGoals**

_Sets a fixed number of goals to pick when using "Multiple Fixed" mode._

* Only visible when "GoalCount" is set to "Multiple Fixed"
* Must be at least 1
* Determines how many random goals are selected per seed

### Notes

* When using "Multiple Random", the number of goals picked will vary between runs unless a fixed seed is used
* For consistent results, use a non-zero LocalSeed value
* The node respects the index safety setting from the parent class to handle edge cases where goal indices might be out of bounds
* In "Single" mode, each seed gets exactly one goal; in "Multiple" modes, multiple goals are assigned per seed
* If you're using this with pathfinding nodes that expect a single goal, make sure to use "Single" mode or post-process the output to select one goal from the list
