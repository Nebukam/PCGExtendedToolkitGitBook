---
description: 'In editor :: PCGEx | Constants'
icon: circle
---

# Enum

{% hint style="info" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Break an enum into handy constant values.

### Overview

This node allows you to convert an enumeration (enum) into a set of constant values that can be used in your procedural graphs. It's particularly useful when you want to work with predefined sets of named values, such as categories, states, or types, and need to output them as attributes or bitflags for downstream processing.

The node supports multiple output modes, letting you choose how to distribute the enum values across pins. You can output all values to a single dataset, or split them into separate outputs. It also supports optional attribute outputs for keys, descriptions, and numeric values, which can be used in subsequent nodes for filtering, branching, or data manipulation.

{% hint style="info" %}
This node requires a valid enum source. You can select an enum from either Blueprint or C++ code using the Picker or Selector options.
{% endhint %}

<details>

<summary>Inputs</summary>

None

</details>

<details>

<summary>Outputs</summary>

* **Out** (optional): A single output pin containing all selected enum values
* **Flags** (optional): A bitflag output attribute set, if enabled
* **Multiple pins** (optional): Separate output pins for each selected enum value, when using "Selection to Multiple Pins" or "All to Separate Outputs" modes

</details>

### Properties Overview

Settings for how the enum is processed and output.

***

#### Settings

Controls the source and general behavior of the enum node.

**Source**

_The method used to select the enum._

* Determines whether you browse for a Blueprint enum (Picker) or a C++ enum (Selector)
* When Picker is selected, the PickerEnum property becomes available
* When Selector is selected, the SelectedEnum property becomes available

**Values**:

* **Picker**: Browse through Blueprint enums.
* **Selector**: Browse through CPP enums.

**Output Mode**

_How to distribute the enum values across outputs._

* Controls whether you output all values at once or split them into separate pins
* When "Single" is selected, all values are output to one dataset
* When "All" is selected, all values are output as a single dataset
* When "Selection" is selected, you can choose which values to include in the output
* When "All to Separate Outputs" or "Selection to Separate Outputs", each value gets its own output pin

**Values**:

* **Single**: Output a single enum value
* **All**: Output all values in the enum to one dataset
* **All to Separate Outputs**: Output all values in the enum to different pins
* **Selection**: Select values to output as one dataset
* **Selection to Separate Outputs**: Select values to output to multiple pins

**Picker Enum**

_The Blueprint enum to use._

* Only visible when Source is set to Picker
* Allows you to select a Blueprint enum from your project

**Selected Enum**

_The C++ enum to use._

* Only visible when Source is set to Selector
* Allows you to select a C++ enum from your project

**Enabled Export Values**

_Which enum values to include in the output._

* Only visible when Output Mode is set to Selection or Selection to Separate Outputs
* Allows you to toggle individual enum values on or off for output
* Each value appears as a checkbox in the node's properties

***

#### Output Attributes

Controls which attributes are added to the output data.

**Output Enum Keys**

_Whether to include the short names of enum values._

* When enabled, outputs the key attribute (e.g., "SomeEnum::SomeKey")
* Can be used for filtering or matching against other data

**Strip Enum Namespace From Key**

_Whether to remove the enum name from the key._

* Only applies when Output Enum Keys is enabled
* If true, outputs just "SomeKey" instead of "SomeEnum::SomeKey"
* Useful for cleaner attribute names

**Key Attribute**

_Name of the output key attribute._

* Only visible when Output Enum Keys is enabled
* Sets the name of the attribute that holds the enum keys

**Output Enum Descriptions**

_Whether to include human-readable descriptions of enum values._

* When enabled, outputs the description attribute (e.g., "Some Value")
* Useful for UI display or debugging

**Description Attribute**

_Name of the output description attribute._

* Only visible when Output Enum Descriptions is enabled
* Sets the name of the attribute that holds the enum descriptions

**Output Enum Values**

_Whether to include the numeric values of enum entries._

* When enabled, outputs the value attribute as an integer
* Useful for comparisons or mathematical operations

**Value Output Attribute**

_Name of the output value attribute._

* Only visible when Output Enum Values is enabled
* Sets the name of the attribute that holds the numeric enum values

***

#### Output Bitflags

Controls how bitflag attributes are generated.

**bOutput Flags**

_Whether to generate a bitmask from the enum._

* When enabled, outputs a single attribute containing all selected enum values as bits
* Useful for representing multiple states or categories in a compact form

**Flags Name**

_Name of the output bitflag attribute._

* Only visible when bOutputFlags is enabled
* Sets the name of the attribute that holds the bitmask

**Flag Bit Offset**

_Starting bit position for the bitmask._

* Only visible when bOutputFlags is enabled
* Determines where in the 64-bit integer the enum bits begin
* Useful for packing multiple bitmasks into a single attribute
