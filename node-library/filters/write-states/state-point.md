---
description: 'In editor :: PCGEx | State : Point'
icon: circle-dashed
---

# State : Point

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Base class for state factory management.

### Overview

This node serves as the foundation for creating point state definitions in PCG graphs. It defines a set of conditions that determine whether a point should be considered "in" or "out" of a specific state, and how to modify flags when those conditions are met or not met.

State definitions are used to track and manage different logical states of points through the procedural pipeline. They're commonly used for organizing complex filtering logic, creating layered point behaviors, or managing conditional workflows based on multiple criteria.

{% hint style="info" %}
This node connects to Filter pins on processing nodes that support point state evaluation.
{% endhint %}

### How It Works

This factory creates a logical "state" that can be evaluated against points. It works by:

1. Defining a set of conditions (filters) that must be met for a point to pass
2. Specifying what happens to flags when all filters pass (Pass State Flags)
3. Specifying what happens to flags when any filter fails (Fail State Flags)

The result is a state evaluation that can be used by downstream nodes to make decisions based on whether points meet certain criteria.

### Inputs

This node does not have direct inputs. It serves as a base class for creating specific state definitions.

### Outputs

This node does not have direct outputs. It provides configuration options that are used by downstream processing nodes.

### Configuration

***

#### General

**Name**

_The name of this state definition._

This name is used to identify the state in downstream processing and debugging. It's also used as the label for output attributes when bitmasks are enabled.

**Priority**

_Controls the order in which states are evaluated._

Higher priority states are processed first. This is useful when you have overlapping or mutually exclusive states that need to be evaluated in a specific sequence.

**bOutputBitmasks**

_When enabled, outputs the bitmask results for debugging and visualization._

Enabling this will create additional output attributes showing the flag values before and after processing, which can help with troubleshooting complex state logic.

***

#### Pass State Flags

_Controls how flags are modified when all filters pass._

This section defines what happens to the point's state flags if all defined conditions are met. The settings allow you to set, clear, or modify specific bits in the flag.

**bOnTestPass**

_When enabled, executes the Pass State Flags operations._

If disabled, the pass operations are skipped entirely.

**PassStateFlags**

_The bitmask and operation to apply when all filters pass._

This defines which bits to modify and how to modify them. You can choose from several bit operations:

* **OR**: Set bits to 1 where the mask has 1s
* **AND**: Keep bits as 1 only where both original and mask have 1s
* **SET**: Replace the entire flag value with the mask
* **NOT**: Invert bits where the mask has 1s
* **XOR**: Flip bits where the mask has 1s

***

#### Fail State Flags

_Controls how flags are modified when any filter fails._

This section defines what happens to the point's state flags if any of the defined conditions fail. The settings allow you to set, clear, or modify specific bits in the flag.

**bOnTestFail**

_When enabled, executes the Fail State Flags operations._

If disabled, the fail operations are skipped entirely.

**FailStateFlags**

_The bitmask and operation to apply when any filter fails._

This defines which bits to modify and how to modify them. You can choose from several bit operations:

* **OR**: Set bits to 1 where the mask has 1s
* **AND**: Keep bits as 1 only where both original and mask have 1s
* **SET**: Replace the entire flag value with the mask
* **NOT**: Invert bits where the mask has 1s
* **XOR**: Flip bits where the mask has 1s

### Usage Example

Create a state definition that marks points as "Valid" if they meet multiple criteria:

1. Create an Abstract Point State Definition node
2. Add several filter factories (like Distance, Attribute, etc.) to define your conditions
3. Set PassStateFlags to OR with a bitmask of 1 (sets bit 0 to 1 when all conditions pass)
4. Set FailStateFlags to AND with a bitmask of 0 (clears all bits when any condition fails)
5. Connect this state definition to a processing node that supports point states

This allows downstream nodes to quickly identify which points meet your "Valid" criteria by checking the appropriate bit in their flags.

### Notes

* State definitions are evaluated in priority order, with higher values processed first
* Multiple state definitions can be used together to create complex logical systems
* Bitmask operations work on 64-bit integers, allowing for up to 64 distinct states
* When using multiple filters, all must pass for the "pass" condition to trigger
* The output attributes are typically used for debugging or as inputs to other state-based logic
