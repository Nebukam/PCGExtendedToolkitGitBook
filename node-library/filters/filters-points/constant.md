---
description: 'In editor :: PCGEx | Filter : Constant'
icon: circle-dashed
---

# Constant

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Creates a simple filter that always returns the same boolean value.

### Overview

This filter factory generates a constant boolean result for all points it evaluates. It's useful when you want to include or exclude all points based on a fixed condition, or as a placeholder in filter logic where you need a simple pass/fail behavior.

{% hint style="info" %}
Connects to Filter pins on processing nodes like **Filter Points** or **Process Points**
{% endhint %}

### How It Works

This filter ignores all input data and always returns the same boolean value. It's designed to act as a fixed switch in your procedural logic - either all points pass through, or none do.

### Inputs

* **Point Data**: Accepts point data to be filtered
* **Filter**: Connects to filter pins on processing nodes

### Outputs

* **Filtered Points**: Points that pass the filter condition
* **Rejected Points**: Points that fail the filter condition

### Configuration

***

#### General

**Value**

_Controls whether the filter passes or fails for all points._

When enabled (set to `true`), all points will pass the filter. When disabled (set to `false`), all points will fail the filter.

**bInvert**

_When enabled, inverts the boolean value of the filter._

When enabled, if Value is set to `true`, the filter will actually fail all points. When enabled, if Value is set to `false`, the filter will actually pass all points.

### Usage Example

Use this filter when you want to create a simple on/off switch for your point processing. For example:

* Connect it to a **Filter Points** node with Value = `true` and bInvert = `false` to pass all points
* Connect it to a **Filter Points** node with Value = `false` and bInvert = `false` to fail all points
* Connect it to a **Filter Points** node with Value = `true` and bInvert = `true` to fail all points

### Notes

This filter is most commonly used in combination with other filters using the **Filter Group** node, where you might want to force certain points to always pass or fail regardless of their attributes.
