---
description: 'In editor :: PCGEx | Filter : Constant'
icon: circle-dashed
---

# Constant

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Filter that returns a constant value.

#### Overview

The Constant filter subnode is used to enforce a fixed pass/fail behavior on points in your procedural graph. It's useful when you want to apply a static condition — either always passing or always failing — without needing to evaluate dynamic properties of the points themselves.

This subnode connects to Filter pins on processing nodes and determines whether each point should be included or excluded based on its configured value. It’s a simple yet powerful tool for applying global filtering logic, such as enabling or disabling certain operations across all input points.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes.
{% endhint %}

#### How It Works

This filter subnode operates by returning a fixed boolean result — either true (pass) or false (fail) — for every point it evaluates. The behavior is determined at configuration time and does not change based on point data.

When enabled, the filter will always return the same value regardless of input. If inversion is enabled, the configured value is flipped before being returned. For example:

* If `Value` is set to **true** and `bInvert` is **false**, all points pass.
* If `Value` is set to **true** and `bInvert` is **true**, all points fail.
* If `Value` is set to **false** and `bInvert` is **false**, all points fail.
* If `Value` is set to **false** and `bInvert` is **true**, all points pass.

This makes it ideal for controlling conditional logic in graphs where you want a consistent filtering outcome across all data, without relying on point attributes or dynamic calculations.

<details>

<summary>Inputs</summary>

Expects point data from a connected source, such as a point collection or point generator.

</details>

<details>

<summary>Outputs</summary>

Returns filtered point data based on the constant result of this filter.

</details>

#### Configuration

***

**Value**

_Controls whether the filter passes or fails points by default._

When enabled, points will pass the filter. When disabled, they will fail.

**bInvert**

_When enabled, inverts the result of the filter._

If `Value` is true and `bInvert` is enabled, points will fail. If `Value` is false and `bInvert` is enabled, points will pass.

#### Usage Example

Use this subnode to create a global enable/disable switch for a processing node. For instance, if you're using a node that modifies point positions based on some criteria, you can connect this constant filter to it with `Value` set to **false** and `bInvert` set to **true** to effectively disable the operation for all points.

Alternatively, you might use it as part of a conditional branch where you want to bypass filtering logic entirely and force all points through a specific path in your graph.

#### Notes

This subnode is most effective when used with other filters or in combination with more complex filtering logic. It does not evaluate point data, so it's best suited for applying consistent pass/fail behavior across an entire dataset.
