---
description: 'In editor :: PCGEx | Constants'
icon: circle
---

# Constants

{% hint style="warning" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Generates constant numeric, vector, or boolean values and outputs them as attributes.

### Overview

The Constant node allows you to generate predefined mathematical or directional constants and output them as attributes. It's useful for setting up fixed values in your procedural graphs without manually entering numbers each time. You can choose from a variety of built-in constants like 0, 1, π, unit vectors, and more.

{% hint style="info" %}
The node outputs one attribute per constant, named according to the selected list.
{% endhint %}

<details>

<summary>Inputs</summary>

None

</details>

<details>

<summary>Outputs</summary>

Attribute data containing the generated constant value(s)

</details>

### Properties Overview

This node provides a selection of predefined constant lists, along with options to modify how those constants are applied.

***

#### General

Selects which set of constants to output.

**Constant List**

_The type of constant(s) to generate and output._

* Determines what values will be generated (e.g., 0, 1, π, or unit vectors)
* Each list corresponds to a specific set of predefined values
* For example, selecting "0 and 1" outputs two attributes: one with value 0 and another with value 1

**Values**:

* **0 and 1**: Outputs two numeric constants, 0 and 1
* **-1**: Outputs a single numeric constant, -1
* **0.5 and 2**: Outputs two numeric constants, 0.5 and 2
* **Powers of 10**: Outputs several powers of 10 (e.g., 0.01, 0.1, 1, 10, 100)
* **Irrationals**: Outputs common irrational numbers like π and √2
* **Angles**: Outputs common angles in radians (e.g., 0, π/2, π, 3π/2)
* **0**: Outputs a single numeric constant, 0
* **1**: Outputs a single numeric constant, 1
* **Axes**: Outputs three vector constants representing the X, Y, and Z axes
* **True and False**: Outputs two boolean constants, True and False
* **True**: Outputs a single boolean constant, True
* **False**: Outputs a single boolean constant, False
* **Unit Vector**: Outputs a single vector constant with magnitude 1
* **Zero Vector**: Outputs a single vector constant (0, 0, 0)
* **Half Vector**: Outputs a single vector constant (0.5, 0.5, 0.5)
* **Up Vector**: Outputs a single vector constant (0, 0, 1)
* **Right Vector**: Outputs a single vector constant (1, 0, 0)
* **Forward Vector**: Outputs a single vector constant (0, 1, 0)
* **2**: Outputs a single numeric constant, 2
* **0.5**: Outputs a single numeric constant, 0.5

**Negate Output**

_When enabled, multiplies the selected constant(s) by -1._

* Flips the sign of all output values
* For example, if you select "1" and enable this, it outputs -1 instead

**Output Reciprocal**

_When enabled, outputs 1/x instead of x for numeric constants._

* Replaces each numeric value with its multiplicative inverse
* For example, if you select "2" and enable this, it outputs 0.5 (1/2) instead

**Custom Multiplier**

_A constant multiplier applied to the output value(s)._

* Scales all output values by this amount
* For example, if you select "1" and set this to 5, it outputs 5

**Numeric Output Type**

_Specifies how numeric constants are cast before output._

* Controls the data type of numeric outputs (double, float, etc.)
* Only affects numeric constants; vector and boolean outputs ignore this setting
* For example, selecting "Float" will convert all numeric values to single precision floating point numbers

**Attribute Name Map**

_Map attribute names for output attributes._

* Allows renaming the output attributes from their default names
* Useful when you want to match specific attribute names in downstream nodes
* Keys are the default names; values are the new names to use
