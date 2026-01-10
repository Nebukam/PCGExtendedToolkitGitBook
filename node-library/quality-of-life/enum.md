---
description: 'In editor :: PCGEx | Constants'
icon: circle
---

# Enum

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Break an enum into handy constant values.

#### How It Works

This node takes a selected enum and generates data points based on the chosen output mode. It can output all enum values as separate items, a single value, or a subset of values you select. For each output item, it optionally includes metadata such as the enum key (short name), description (human-readable label), and numeric value.

If enabled, it also supports generating bitflags for the enum values, which are stored in a bitmask attribute. This allows downstream nodes to perform bitwise operations on the enum values efficiently.

The node dynamically creates output pins based on the selected mode:

* In "All to Separate Outputs" or "Selection to Separate Outputs", each enum value gets its own output pin.
* In other modes, it outputs to a single pin with all relevant data.

#### Configuration

<details>

<summary><strong>Source</strong><br><em>Whether to select the enum from Blueprint or C++.</em></summary>

Controls how you select the enum to use.

* **Picker**: Browse and select a Blueprint enum.
* **Selector**: Select a C++ enum using the Enum Selector UI.

</details>

<details>

<summary><strong>Output Mode</strong><br><em>How to output the enum values.</em></summary>

Determines how many outputs are created and what data is included.

* **Single**: Output one enum value.
* **All**: Output all values in a single dataset.
* **All to Separate Outputs**: Output each value to its own pin.
* **Selection**: Select specific values to output in a single dataset.
* **Selection to Separate Outputs**: Select specific values, each output to its own pin.

</details>

<details>

<summary><strong>Picker Enum</strong><br><em>Select a Blueprint enum to use.</em></summary>

When Source is set to Picker, this allows you to select a Blueprint enum from the list.

</details>

<details>

<summary><strong>Selected Enum</strong><br><em>Select a C++ enum to use.</em></summary>

When Source is set to Selector, this allows you to select a C++ enum from the list.

</details>

<details>

<summary><strong>Enabled Export Values</strong><br><em>Which enum values to include in output when using Selection modes.</em></summary>

Used only when Output Mode is "Selection" or "Selection to Separate Outputs". Specifies which enum values should be included in the output.

</details>

<details>

<summary><strong>Output Enum Keys</strong><br><em>Whether to output the enum value keys, which are the short names used in C++.</em></summary>

When enabled, outputs the key (short name) of each enum value. For example, if an enum is `EColor::Red`, the key would be `Red`.

</details>

<details>

<summary><strong>Strip Enum Namespace From Key</strong><br><em>If true, removes the enum namespace from keys.</em></summary>

When enabled, removes the enum name prefix from the output key. For example, if an enum is `EColor::Red`, the key would be `Red` instead of `EColor::Red`.

</details>

<details>

<summary><strong>Key Attribute</strong><br><em>Name of the attribute to store the enum key.</em></summary>

The name of the attribute that stores the enum key when Output Enum Keys is enabled.

</details>

<details>

<summary><strong>Output Enum Descriptions</strong><br><em>Whether to output the enum value descriptions, which are the human-readable names for values shown by the UI.</em></summary>

When enabled, outputs the description (human-readable label) of each enum value. For example, if an enum is `EColor::Red`, the description might be `Red`.

</details>

<details>

<summary><strong>Description Attribute</strong><br><em>Name of the attribute to store the enum description.</em></summary>

The name of the attribute that stores the enum description when Output Enum Descriptions is enabled.

</details>

<details>

<summary><strong>Output Enum Values</strong><br><em>Whether to output the numeric enum values.</em></summary>

When enabled, outputs the numeric value of each enum entry. This is stored as an int64 to match native PCG behavior.

</details>

<details>

<summary><strong>Value Output Attribute</strong><br><em>Name of the attribute to store the enum value.</em></summary>

The name of the attribute that stores the numeric enum value when Output Enum Values is enabled.

</details>

<details>

<summary><strong>bOutputFlags</strong><br><em>Whether to output the enum as a bitmask.</em></summary>

When enabled, outputs all enum values as bitflags in a single attribute. This allows downstream nodes to perform bitwise operations on the enum values.

</details>

<details>

<summary><strong>Flags Name</strong><br><em>Name of the attribute to store the bitmask.</em></summary>

The name of the attribute that stores the bitmask when bOutputFlags is enabled.

</details>

<details>

<summary><strong>Flag Bit Offset</strong><br><em>Bit to start writing the enum bits to.</em></summary>

Controls which bit position in the bitmask to start writing the enum flags. Valid range is 0-63.

</details>

#### Usage Example

1. Set Source to "Picker" and select a Blueprint enum like `EColor`.
2. Choose Output Mode as "All to Separate Outputs".
3. Enable "Output Enum Keys", "Output Enum Descriptions", and "Output Enum Values".
4. Connect each output pin to a downstream node that uses these values for filtering or branching logic.
5. Optionally, enable "bOutputFlags" to generate a bitmask attribute for bitwise operations.

#### Notes

* The node dynamically creates pins based on the selected Output Mode.
* Bitflags are stored as 64-bit integers and can be used in bitwise comparisons.
* When using "Selection" modes, you must manually select which enum values to include.
* This node does not support outputting to strings directly; use Attribute Set for attribute-based outputs.
