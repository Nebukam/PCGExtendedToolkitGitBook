---
description: 'In editor :: PCGEx | Iterations'
icon: circle
---

# Iterations

{% hint style="info" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> A simple data generator that creates dummy iteration data for loop nodes.

### Overview

This node generates a specified number of dummy data objects, each representing one iteration in a loop. It's designed to work with loop nodes that require iteration data to function properly. The generated data is lightweight and serves as placeholders for more complex data structures that would normally be used in iterations.

The node outputs multiple copies of a single dummy data object, which can then be consumed by loop nodes to perform repetitive operations. This is particularly useful when building procedural graphs where you need to iterate over a set number of times without having actual point or spline data to iterate over.

{% hint style="info" %}
This node is primarily used as an input for loop nodes and doesn't produce meaningful data on its own. It's meant to be connected to loop nodes that will use the iteration data to repeat operations.
{% endhint %}

<details>

<summary>Inputs</summary>

* None (Inputless node)

</details>

<details>

<summary>Outputs</summary>

* Multiple outputs representing individual iterations of dummy data
* Output type depends on the selected data type setting

</details>

### Properties Overview

Controls how many dummy iteration objects are generated and what type of data they represent.

***

#### Settings

Controls the basic behavior of the node.

**Type**

_Controls the type of dummy data to generate._

* Determines what kind of output pin is used for the iterations
* Each type maps to a different data structure: Attribute Set, Points, Spline, or Texture
* When set to **Any**, it outputs using an untyped attribute set pin

**Values**:

* **Any**: Output dummy iteration data of type Attribute set, using an untyped pin.
* **Attribute Set**: Output dummy iteration data of type Attribute set.
* **Points**: Output dummy iteration data of type Points.
* **Spline**: Output dummy iteration data of type Spline.
* **Texture**: Output dummy iteration data of type Texture.

**Iterations**

_Number of dummy iteration objects to generate._

* Controls how many times the loop will iterate
* Must be a non-negative integer
* Setting this to 0 produces no output

**bOutputUtils**

_When enabled, outputs additional utility parameters for each iteration._

* Adds extra data fields that can be useful for tracking iteration state
* Slightly less performant than the basic version
* Only available when Type is set to **Attribute Set** or **Any**

### Notes

* This node is specifically designed to work with loop nodes and should typically be connected as input to a loop node
* The generated data is lightweight and doesn't contain meaningful information beyond iteration identification
* When using with loop nodes, ensure the loop node's pin types match the selected Type setting
* For performance-critical workflows, avoid enabling bOutputUtils unless specifically needed for utility values
* Setting Iterations to 0 will result in no output being generated, which may cause downstream nodes to receive no data
