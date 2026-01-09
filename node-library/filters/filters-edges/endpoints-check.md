---
description: 'In editor :: PCGEx | Edge Filter : Endpoints Check'
icon: circle-dashed
---

# Endpoints Check

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Filters edges based on whether their start and end points pass or fail specified conditions.

### Overview

This factory creates a filter that evaluates the endpoints of each edge in a graph against one or more point filters. It determines whether an edge should pass or fail based on how its start and end points behave with respect to those filters.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes like **Edge Splitter**, **Edge Filter**, or **Graph Builder**.
{% endhint %}

### How It Works

This filter checks the result of applying point filters to both endpoints of an edge. Based on the selected mode, it decides whether the edge passes or fails the filter.

For example, if you want edges to only pass when both endpoints are within a certain height range, this filter can enforce that rule.

### Inputs

* **Edge**: The input graph edges to filter
* **Point Filters**: One or more point filters to apply to the edge endpoints

### Outputs

* **Pass**: Edges that passed the filter criteria
* **Fail**: Edges that failed the filter criteria

### Configuration

***

#### General

**Mode**

_Controls how the filter evaluates the endpoints._

* **None**: Neither endpoint must have the expected result.
* **Both**: Both endpoints must have the expected result.
* **Any Pass**: At least one endpoint must have the expected result.
* **Start**: Only the start point must have the expected result.
* **End**: Only the end point must have the expected result.
* **SeeSaw**: One endpoint must pass and the other must fail.

**Comparison**

_The expected result of the filter, in regard to the selected mode._

This setting is only available when Mode is not "SeeSaw".

* **Pass**: The endpoints must pass the filters.
* **Fail**: The endpoints must fail the filters.

**Invert**

_When enabled, reverses the outcome of the filter._

If the filter would normally pass an edge, it will now fail, and vice versa.
