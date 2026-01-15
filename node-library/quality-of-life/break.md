---
description: 'In editor :: PCGEx | Break'
icon: circle
---

# Break

A Simple Recursion tracker to make working with recursive subgraphs easier. Acts as a \\

**How It Works**

> AI-Generated, needs proofreading

* The Break node serves as a recursion tracker within recursive subgraphs to manage and control recursive processes.
* It utilizes settings such as Type and Mode to define how the recursion tracking operates according to specified parameters.
* A boolean attribute named by the user through "Continue Attribute Name" setting is set on the tracker, indicating whether the recursion should continue or not.
* The node enforces a limit on the number of recursive iterations via the "Max Count" setting, preventing infinite loops.
* Optionally, tags can be added to the tracker using the "Add Tags" setting for additional categorization or identification purposes.

#### Configuration

<details>

<summary><strong>Type</strong> <code>PCGExRecursionTrackerType</code></summary>

How is this recursion tracker supposed to be used.

**Values:**

* **Simple**: Simple recursion tracker. Can update multiple trackers at once.
* **Branch**: Branch recusion tracker. Can only work with a single tracker

</details>

<details>

<summary><strong>Mode</strong> <code>PCGExRecursionTrackerMode</code></summary>

How is this recursion tracker supposed to be used.

**Values:**

* **Create**: Create a new tracker. This is for creating an initial tracker outside the subgraph.
* **Update**: Process and update an existing tracker. This is for use inside the recursive subgraph.
* **Create or Update**: Create a new tracker if input is empty, otherwise fallback to mutate. Useful to create tracker directly inside the recursive subgraph.

</details>

<details>

<summary><strong>Continue Attribute Name</strong> <code>Name</code></summary>

Name of the bool attribute that will be set on the tracker.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Max Count</strong> <code>int32</code></summary>

Max count.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Counter Update</strong> <code>int32</code></summary>

Controls counter update.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ One Minus</strong> <code>bool</code></summary>

Controls └─ one minus.

</details>

<details>

<summary><strong>Force Output Continue</strong> <code>bool</code></summary>

If enabled, will override the value of the "Continue" attribute to a valid one. Use this is you give the tracker some attribute set that may already have a boolean with the same name and a wrong value.

</details>

<details>

<summary><strong>Do Additional Data Testing</strong> <code>bool</code></summary>

If enabled, does additional collection-level filtering on a separate set of datas. If no data passes those filters, the tracker will return a single false value.

</details>

<details>

<summary><strong>Add Entry When Creating From Existing Data</strong> <code>bool</code></summary>

.

</details>

<details>

<summary><strong>Remainder Offset When Create Instead Of Update</strong> <code>int32</code></summary>

An offset applied when creating a tracker in "Create or Update" mode. The default value assume the tracker is created from inside a subgraph and thus that one iteration passed already.

</details>

<details>

<summary><strong>Group Branch Pins</strong> <code>bool</code></summary>

For OCD purposes.

</details>

**Extra Outputs**

<details>

<summary><strong>Output Progress</strong> <code>bool</code></summary>

If enabled, will create a pin that outputs the normalized progress value.

</details>

<details>

<summary><strong>Output Index</strong> <code>bool</code></summary>

If enabled, will create a pin that outputs the current iteration index (Max - Remainder).

</details>

<details>

<summary><strong>Output Remainder</strong> <code>bool</code></summary>

If enabled, will create a pin that outputs the current remainder.

</details>

**Tagging**

<details>

<summary><strong>Add Tags</strong> <code>String</code></summary>

Tags to be added to the tracker

⚡ PCG Overridable

</details>

<details>

<summary><strong>Remove Tags</strong> <code>String</code></summary>

Tags to be removed from the tracker(s)

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExFoundations\Public\Elements\ControlFlow\PCGExRecursionTracker.h`
