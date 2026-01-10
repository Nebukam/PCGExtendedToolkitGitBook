---
description: 'In editor :: PCGEx | Break'
icon: circle
---

# Break

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> A simple recursion tracker that helps manage looping in procedural graphs. Acts as a "break" by tracking a counter and checking if data meets certain requirements.

#### How It Works

The Break node manages recursive processes by tracking how many times a loop has run and determining whether to continue or stop. It works by:

1. **Initialization**: When set to create a new tracker, it sets up a counter with a maximum number of iterations.
2. **Iteration Tracking**: With each pass through the loop, it reduces the remaining count and updates the tracker's state.
3. **Condition Checking**: It decides whether to continue processing based on:
   * Whether the remaining count has reached zero
   * A boolean attribute named "Continue" (if defined)
   * Additional filtering conditions (when enabled)
4. **Output Generation**: It provides a signal indicating if the loop should continue, and optionally outputs progress information like normalized progress, current index, or remaining iterations.
5. **Data Filtering**: If enabled, it filters input data to determine whether to proceed with the next iteration.

The node supports two types of trackers:

* **Simple**: Can manage multiple trackers simultaneously
* **Branch**: Works with a single tracker at a time

#### Configuration

<details>

<summary><strong>Type</strong><br><em>How is this recursion tracker supposed to be used.</em></summary>

Determines how the tracker behaves.

**Values**:

* **Simple**: Can update multiple trackers at once.
* **Branch**: Can only work with a single tracker.

</details>

<details>

<summary><strong>Mode</strong><br><em>How is this recursion tracker supposed to be used.</em></summary>

Controls how the tracker is initialized or updated.

**Values**:

* **Create**: Creates a new tracker. Use this outside of recursive subgraphs.
* **Update**: Processes and updates an existing tracker. Use this inside recursive subgraphs.
* **Create or Update**: Creates a new tracker if input is empty, otherwise updates an existing one. Useful for creating trackers directly within the recursive subgraph.

</details>

<details>

<summary><strong>ContinueAttributeName</strong><br><em>Name of the bool attribute that will be set on the tracker.</em></summary>

The name of the boolean attribute used to control whether the recursion continues.

</details>

<details>

<summary><strong>MaxCount</strong><br><em>Max count.</em></summary>

Maximum number of iterations allowed before stopping the recursion.

</details>

<details>

<summary><strong>AddTags</strong><br><em>Tags to be added to the tracker</em></summary>

A string of tags to assign to the tracker. Tags are separated by commas.

</details>

<details>

<summary><strong>RemoveTags</strong><br><em>Tags to be removed from the tracker(s)</em></summary>

A string of tags to remove from the tracker. Tags are separated by commas.

</details>

<details>

<summary><strong>CounterUpdate</strong><br></summary>

Controls how the counter is updated during processing. A value of -1 means default behavior, otherwise it specifies a fixed update amount.

</details>

<details>

<summary><strong>bOutputProgress</strong><br><em>If enabled, will create a pin that outputs the normalized progress value.</em></summary>

When enabled, creates an output pin for the normalized progress (0 to 1) of the recursion.

</details>

<details>

<summary><strong>bOutputIndex</strong><br><em>If enabled, will create a pin that outputs the current iteration index (Max - Remainder).</em></summary>

When enabled, creates an output pin for the current iteration index (how many iterations have passed).

</details>

<details>

<summary><strong>bOutputRemainder</strong><br><em>If enabled, will create a pin that outputs the current remainder.</em></summary>

When enabled, creates an output pin for the remaining iterations.

</details>

<details>

<summary><strong>bOneMinus</strong><br><em>└─ One Minus</em></summary>

When enabled, outputs `1 - Progress` instead of the progress value.

</details>

<details>

<summary><strong>bForceOutputContinue</strong><br><em>If enabled, will override the value of the "Continue" attribute to a valid one. Use this is you give the tracker some attribute set that may already have a boolean with the same name and a wrong value.</em></summary>

When enabled, ensures the continue output is always valid even if the input has conflicting data.

</details>

<details>

<summary><strong>bDoAdditionalDataTesting</strong><br><em>If enabled, does additional collection-level filtering on a separate set of datas. If no data passes those filters, the tracker will return a single false value.</em></summary>

When enabled, performs extra filtering on test data to determine if recursion should continue.

</details>

<details>

<summary><strong>bAddEntryWhenCreatingFromExistingData</strong><br><em>.</em></summary>

When enabled, adds an entry when creating a tracker from existing data.

</details>

<details>

<summary><strong>RemainderOffsetWhenCreateInsteadOfUpdate</strong><br><em>An offset applied when creating a tracker in "Create or Update" mode. The default value assume the tracker is created from inside a subgraph and thus that one iteration passed already.</em></summary>

Adjusts the initial remainder when creating a tracker in "Create or Update" mode.

</details>

<details>

<summary><strong>bGroupBranchPins</strong><br><em>For OCD purposes.</em></summary>

When enabled, groups related output pins together for better visual organization.

</details>

#### Usage Example

1. Place a Break node at the start of a recursive subgraph.
2. Set Mode to "Create" and MaxCount to 5.
3. Connect the main input to your data.
4. Use the Continue output to control the loop in your subgraph.
5. Inside the subgraph, connect the Break node's output back to its own input to create a recursive loop.

#### Notes

* The Break node is essential for preventing infinite recursion in procedural graphs.
* When using "Create or Update" mode, it's recommended to set `RemainderOffsetWhenCreateInsteadOfUpdate` to -1 if creating inside a subgraph.
* The Continue attribute can be used to override the default behavior of the tracker.
* Additional data testing is useful for complex conditions that depend on multiple datasets.
