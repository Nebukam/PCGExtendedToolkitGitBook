---
icon: comment-dots
---

# Fill Control

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Creates a single Fill Control subnode, to be used with flood fill nodes.

#### Overview

This subnode defines how flood fill operations behave by specifying control parameters that influence diffusion behavior at different stages of the process. It acts as a configuration layer that tells flood fill nodes when and how to apply specific rules or constraints during the propagation of fills through data structures like graphs or point clouds.

It allows you to fine-tune how fills spread, which points are considered candidates for flooding, and when certain conditions should be evaluated. This is particularly useful in procedural generation workflows where you want to control the flow and behavior of diffusion-based algorithms, such as area filling, pathfinding, or cluster expansion.

{% hint style="info" %}
Connects to **Flood Fill** processing nodes via the **Fill Controls** input pin.
{% endhint %}

#### How It Works

This subnode defines a set of rules that govern how flood fill operations behave during different stages of diffusion. It allows you to specify at which steps in the process these rules should be applied and from where attribute data should be fetched.

The behavior is determined by two core settings:

1. **Support Source**: Controls whether this control supports fetching data from attributes.
2. **Support Steps**: Determines if this control applies to specific diffusion stages (Capture, Probing, Candidate).

When enabled, the subnode sets up configuration flags that define when and how a fill control should be used during flood fill operations. It ensures that the control is properly registered with the context and can be consumed by downstream flood fill nodes.

<details>

<summary>Inputs</summary>

This node does not take direct inputs. It defines a configuration that gets consumed by flood fill processing nodes.

</details>

<details>

<summary>Outputs</summary>

This node outputs a Fill Control configuration object that can be used by flood fill nodes to modify their behavior during diffusion.

</details>

#### Configuration

***

**bSupportSource**

_Controls whether this control supports fetching data from attributes._

When enabled, the subnode allows you to specify an attribute source for the control's parameters. This enables dynamic behavior based on point or vertex data.

**bSupportSteps**

_Controls whether this control applies to specific diffusion stages._

When enabled, you can define at which stages of the flood fill process (Capture, Probing, Candidate) this control should be active.

**Source**

_Where to fetch the attribute from. Note that this may not be supported by all controls._

Determines the data source for the control's parameters. Options include Seed or other attribute types depending on your setup.

**Values**:

* **Seed**: Fetch data from the seed point
* **Other**: Fetch data from a specified attribute

**Steps**

_At which diffusion step should this control be applied. Note that this may not be supported by all controls._

Defines the specific stages in the flood fill process where this control is active.

**Values**:

* **Capture**: Applied when a node is captured during diffusion
* **Probing**: Applied when nodes are probed for potential candidates
* **Candidate**: Applied when nodes are identified as candidates for flooding

#### Usage Example

1. Create a point cloud with attributes like "FillWeight" and "IsBlocked"
2. Add a Fill Controls Definition subnode to your graph
3. Set `bSupportSource` to true and choose "FillWeight" as the source
4. Set `bSupportSteps` to true and select "Candidate" as the step
5. Connect this subnode to a Flood Fill node's Fill Controls input pin
6. The flood fill will now use the "FillWeight" attribute when evaluating candidates

#### Notes

* This is an abstract subnode that must be extended by specific implementations for actual behavior.
* The control settings are only active if their respective support flags are enabled.
* Multiple Fill Controls Definition subnodes can be used together to create complex flood fill behaviors.
* Attribute data fetched via the Source setting should match the expected data type for the target flood fill operation.
