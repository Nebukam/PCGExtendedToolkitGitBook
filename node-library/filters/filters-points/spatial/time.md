---
description: 'In editor :: PCGEx | Filter : Time'
icon: circle-dashed
---

# Time

{% hint style="info" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Creates a filter definition that checks points position against a path/spline/polygon2D closest alpha.

### Overview

This filter evaluates whether points are at a specific time/position along one or more paths, splines, or polygon shapes. It compares each point's closest position on the path to a target time value and passes or fails based on that comparison.

{% hint style="info" %}
Connects to Filter pins on processing nodes like **Filter Points**, **Select Points**, or **Split Points**.
{% endhint %}

### How It Works

The filter works by:

1. Finding the closest point on a path/spline/polygon to each input point
2. Calculating the "time" or alpha value of that closest point along the path (0 = start, 1 = end)
3. Comparing this time value against a target value using the selected comparison operator
4. Passing or failing points based on whether they meet the condition

### Inputs

* **Points**: Points to be filtered
* **Paths**: One or more paths, splines, or polygons to test against

### Outputs

* **Pass**: Points that meet the filter criteria
* **Fail**: Points that do not meet the filter criteria

### Configuration

***

#### General

**Sample Inputs**

_Controls which input paths are used for testing._

* **All**: All input paths will be considered for evaluation.
* **Closest Only**: Only the closest path to each point is used.

**Pick**

_Determines how to handle multiple paths when a point is near more than one._

* **Closest**: Use only the time value from the closest path.
* **All**: Combine time values from all paths using consolidation method.

**Time Consolidation**

_Controls how to combine time values when multiple paths are considered._

* **Min**: Use the smallest time value.
* **Max**: Use the largest time value.
* **Average**: Use the average of all time values.

**Comparison**

_Selects the condition used to compare time values._

* **==**: Point passes only if its time exactly matches the target.
* **!=**: Point passes only if its time does not match the target.
* **>=**: Point passes if its time is greater than or equal to the target.
* **<=**: Point passes if its time is less than or equal to the target.
* **>**: Point passes if its time is strictly greater than the target.
* **<**: Point passes if its time is strictly less than the target.
* **\~=**: Point passes if its time is nearly equal to the target (within tolerance).
* \*\*!\~=: Point passes if its time is not nearly equal to the target (outside tolerance).

**Compare Against**

_Specifies whether to compare against a constant value or an attribute._

* **Constant**: Use the fixed value in Operand B.
* **Attribute**: Read the comparison value from a point attribute.

**Operand B (Attr)**

_The attribute containing time values for comparison when "Compare Against" is set to Attribute._

**Operand B**

_The fixed time value for comparison when "Compare Against" is set to Constant._

**Tolerance**

_Tolerance range used for nearly equal comparisons._

**Invert**

_When enabled, reverses the filter result (pass becomes fail and vice versa)._

**Winding Mutation**

_Controls how path winding is handled for polygon testing._

* **Unchanged**: Use original winding.
* **Clockwise**: Force all paths to be clockwise.
* **CounterClockwise**: Force all paths to be counter-clockwise.

**Fidelity**

_Determines the resolution of polygon approximation from splines._

Lower values = higher fidelity but slower performance. Higher values = lower fidelity but faster execution.

**Check Against Data Bounds**

_When enabled, uses collection bounds instead of individual points for testing._

Useful when working with collections to avoid expensive per-point calculations.

**Ignore Self**

_When enabled, prevents a collection from being tested against itself._

This is useful when using collection filters to avoid self-referencing scenarios.
