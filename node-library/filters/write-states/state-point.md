---
description: 'In editor :: PCGEx | State : Point'
icon: circle-dashed
---

# State : Point

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Base class for state subnode management.

#### Overview

This abstract subnode defines a reusable state condition that can be applied to points in a procedural graph. It acts as a template for creating point-based filters that evaluate conditions and manage flag states based on whether those conditions pass or fail. It's designed to be inherited by concrete implementations that define specific behaviors.

When used, this subnode connects to filter pins of processing nodes, allowing you to define complex conditional logic for point filtering or state management. It's particularly useful when building systems where points need to be categorized or flagged based on multiple criteria.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes.
{% endhint %}

#### How It Works

This subnode defines a behavior that evaluates whether a set of conditions (filters) pass for each point. It operates by:

1. **Testing Conditions**: For each point, it runs a series of filter checks defined in its configuration
2. **State Management**: Based on the test result:
   * If all filters pass, it executes operations defined in `PassStateFlags`
   * If any filter fails, it executes operations defined in `FailStateFlags`
3. **Flag Operations**: It modifies flag values using bitmask operations, which can be used to track point states or categories
4. **Priority Handling**: It supports priority ordering so that multiple state definitions can be applied in a specific sequence

The subnode itself is abstract and must be inherited by concrete implementations to define the actual filtering logic.

<details>

<summary>Inputs</summary>

* Point data (from a data source node)
* Filter subnodes that define the conditions to test
* Optional bitmask operations for state management

</details>

<details>

<summary>Outputs</summary>

* Modified point flags based on pass/fail conditions
* Bitmask outputs if enabled (for debugging or further processing)

</details>

#### Configuration

***

**bOnTestPass**

_Controls whether the pass flag operations are executed._

When enabled, the subnode will execute the operations defined in `PassStateFlags` when all filters pass for a point.

***

**PassStateFlags**

_Operations executed on the flag if all filters pass._

Defines what actions to take on the point's flags when all filter conditions are satisfied. This includes bitmask operations like setting, clearing, or toggling specific bits.

***

**bOnTestFail**

_Controls whether the fail flag operations are executed._

When enabled, the subnode will execute the operations defined in `FailStateFlags` when any filter fails for a point.

***

**FailStateFlags**

_Operations executed on the flag if any filters fail._

Defines what actions to take on the point's flags when one or more filter conditions are not satisfied. This includes bitmask operations like setting, clearing, or toggling specific bits.

***

**Name**

_Name of this state definition._

A unique identifier used to distinguish this state from others in a processing graph. It helps with debugging and organization.

***

**Priority**

_Specifies the order in which this state is processed._

Higher priority values are processed first. This allows you to define dependencies between different state definitions, ensuring that some flags are set before others are evaluated.

***

**bOutputBitmasks**

_Toggles whether bitmask outputs are generated._

When enabled, the subnode will output additional data streams containing the bitmask results for both pass and fail conditions, useful for debugging or visualizing state transitions.
