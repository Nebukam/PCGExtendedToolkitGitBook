---
description: 'In editor :: PCGEx | Break'
icon: circle
---

# Break

{% hint style="info" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> A Simple Recursion tracker to make working with recursive subgraphs easier. Acts as a "break" by tracking a counter, and/or checking if data meet certain requirements.

### Overview

The Break node is designed to help manage recursion in procedural graphs by tracking iteration counts and controlling when to continue or stop processing. It acts like a loop counter that can be updated and checked at each step of a recursive subgraph.

This node is particularly useful for creating bounded loops within PCG workflows, preventing infinite recursion, and managing the flow of data through recursive structures. It can track multiple trackers simultaneously or work with individual trackers depending on its configuration.

{% hint style="info" %}
The Break node must be used in conjunction with a recursive subgraph setup to function properly. The tracker data is created and updated within the context of that recursion.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Default Input** (Optional): Points or data to process
* **Tracker Input** (Optional): Existing tracker data to update or read from

</details>

<details>

<summary>Outputs</summary>

* **Default Output**: Processed points or data
* **Continue Output**: Data that should continue processing in the recursive loop
* **Stop Output**: Data that should stop processing and exit the recursion
* **Tracker Output** (Optional): Updated tracker data for use in subsequent iterations

</details>

### Properties Overview

Controls how the Break node behaves and what information it tracks.

***

#### Settings

Configures the core behavior of the recursion tracker.

**Type**

_Controls whether this tracker works with a single tracker or multiple trackers._

* **Simple**: Can update multiple trackers at once, useful for managing several recursive processes simultaneously.
* **Branch**: Works with a single tracker only, ideal for linear recursion paths.

**Mode**

_Determines how the tracker is created and updated._

* **Create**: Creates a new tracker. This is for creating an initial tracker outside the subgraph.
* **Update**: Processes and updates an existing tracker. This is for use inside the recursive subgraph.
* **Create or Update**: Creates a new tracker if input is empty, otherwise falls back to mutate. Useful to create tracker directly inside the recursive subgraph.

**Continue Attribute Name**

_Name of the boolean attribute that will be set on the tracker to control recursion._

* Controls whether the recursion continues (true) or stops (false)
* Default value: "Continue"

**Max Count**

_Maximum number of iterations allowed before stopping._

* Sets an upper limit to prevent infinite loops
* Must be greater than 0
* Example: Setting this to 5 means the recursion will stop after 5 iterations

**Add Tags**

_Tags to be added to the tracker._

* Adds metadata tags for filtering or identification purposes
* Multiple tags can be specified, separated by commas

**Remove Tags**

_Tags to be removed from the tracker(s)._

* Removes existing metadata tags from trackers
* Only available when Mode is not "Create"

***

#### Tagging

Controls how tags are managed on the tracker.

**Remove Tags**

_Tags to be removed from the tracker(s)._

* Removes specified tags from existing trackers
* Only available when Mode is not "Create"

***

#### Extra Outputs

Enables additional output pins for tracking progress and state.

**Output Progress**

_If enabled, creates a pin that outputs the normalized progress value._

* Useful for visualizing how far along the recursion has progressed
* Progress ranges from 0.0 (start) to 1.0 (completion)

**Output Index**

_If enabled, creates a pin that outputs the current iteration index._

* Outputs the current iteration number (Max - Remainder)
* Helpful for tracking which step of recursion is currently active

**Output Remainder**

_If enabled, creates a pin that outputs the current remainder._

* Shows how many iterations are left before stopping
* Useful for understanding remaining work in the recursion

**One Minus**

_When enabled, outputs 1 - progress value._

* Inverts the progress value for use in reverse calculations
* Only available when Output Progress is enabled

***

#### Advanced Settings

Controls additional behaviors and edge cases.

**Force Output Continue**

_If enabled, overrides the value of the "Continue" attribute to a valid one._

* Ensures that the continue flag is properly set even if it already exists with an incorrect value
* Useful when working with existing data that may have conflicting attributes

**Do Additional Data Testing**

_If enabled, performs additional collection-level filtering on separate data sets._

* Checks if any data passes specified filters before continuing recursion
* If no data passes the filters, returns a single false value to stop recursion
* Only available when Type is "Simple" and Mode is not "Create"

**Add Entry When Creating From Existing Data**

_When enabled, adds an entry when creating tracker from existing data._

* Controls behavior when creating trackers from existing data sources
* May be needed for proper initialization in some workflows

**Remainder Offset When Create Instead Of Update**

_An offset applied when creating a tracker in "Create or Update" mode._

* Default value assumes tracker is created from inside a subgraph, so one iteration has already passed
* Adjust this if you need different starting conditions

**Group Branch Pins**

_For OCD purposes._

* Affects pin grouping in the graph editor for better visual organization
* Does not affect functionality
