---
description: 'In editor :: PCGEx | Filter : Modulo Compare'
icon: circle-dashed
---

# Modulo Comparison

{% hint style="info" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Creates a filter that evaluates whether the modulo of two values meets a specified comparison condition.

### Overview

This filter tests a mathematical relationship using the modulo operator (`%`). It checks if `(Operand A % Operand B)` satisfies a comparison against Operand C. This is useful for creating patterns based on repeating cycles, such as filtering points that fall on even/odd positions, or align with specific numerical sequences.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes like **Point Filter**, **Point Switch**, or **Point Collection**.
{% endhint %}

### How It Works

The filter evaluates the expression:\
`(Operand A % Operand B) [Comparison] Operand C`

For example, if you set:

* Operand A = a point's index
* Operand B = 3 (modulus)
* Comparison = "!="
* Operand C = 0

It will pass points where `index % 3 != 0`, effectively filtering out every third point.

### Configuration

***

#### General

**Operand A**

_The first operand in the modulo operation._

This can be a constant value or read from an attribute on the input data. For example, you might use a point's index or position value.

**Operand B Source**

_How to determine the second operand._

* **Constant**: Use the fixed value in the **Operand B** field.
* **Attribute**: Read the value from an attribute on the input points.

**Operand B (Attr)**

_The attribute to read Operand B from when using Attribute mode._

Only visible when **Operand B Source** is set to "Attribute".

**Operand B**

_The fixed value used as Operand B when using Constant mode._

Only visible when **Operand B Source** is set to "Constant".

**Comparison**

_The comparison operator to use between the modulo result and Operand C._

* **==**: Equal
* **!=**: Not Equal
* **>=**: Greater or Equal
* **<=**: Smaller or Equal
* **>**: Greater than
* **<**: Smaller than
* **\~=**: Nearly Equal (useful for floating-point comparisons)
* **!\~=:**: Nearly Not Equal

**Compare Against**

_How to determine the third operand._

* **Constant**: Use the fixed value in the **Operand C** field.
* **Attribute**: Read the value from an attribute on the input points.

**Operand C (Attr)**

_The attribute to read Operand C from when using Attribute mode._

Only visible when **Compare Against** is set to "Attribute".

**Operand C**

_The fixed value used as Operand C when using Constant mode._

Only visible when **Compare Against** is set to "Constant".

**Tolerance**

_Tolerance for near-equality comparisons._

Only visible when the comparison is set to "Nearly Equal" or "Nearly Not Equal". Controls how close two floating-point numbers need to be to be considered equal.

**Zero Result**

_Whether to return true or false when Operand B is zero._

When enabled, the filter returns `true` if Operand B equals zero. When disabled, it returns `false`.

***

### Inputs

* **Filter** (boolean): The main input pin for connecting to other filtering nodes.
* **Operand A** (numeric): First operand for modulo calculation, can be a constant or attribute value.
* **Operand B** (numeric): Second operand for modulo calculation, can be a constant or attribute value.
* **Operand C** (numeric): Third operand for comparison, can be a constant or attribute value.

### Outputs

* **Filter** (boolean): Output pin that passes through the boolean result of the filter evaluation.
