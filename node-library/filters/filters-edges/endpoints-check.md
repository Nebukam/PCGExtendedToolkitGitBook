---
description: 'In editor :: PCGEx | Edge Filter : Endpoints Check'
icon: circle-dashed
---

# Endpoints Check

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Uses filters applied to the edge endpoints in order to determine whether this filter result.

#### Overview

This subnode evaluates whether an edge passes or fails a filter based on the results of filters applied to its start and end points. It allows you to define conditions that must be met by one or both endpoints of an edge for the edge itself to be considered valid.

It's useful when you want to restrict edges based on properties of their connected points, such as point type, height, color, or other attributes. You can configure how many endpoints must pass a filter and whether the result should be inverted.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes that accept edge filters.
{% endhint %}

#### How It Works

This subnode evaluates an edge by running a set of point-based filters against its start and end points. The outcome depends on the selected mode:

* If **Mode = "Both"**, both endpoints must meet the expected result (pass or fail) for the edge to pass.
* If **Mode = "Any Pass"**, at least one endpoint must meet the expected result.
* If **Mode = "Start"**, only the start point is evaluated.
* If **Mode = "End"**, only the end point is evaluated.
* If **Mode = "None"**, neither endpoint can meet the expected result for the edge to pass.
* If **Mode = "SeeSaw"**, one endpoint must pass and the other must fail.

The expected result (Pass or Fail) is determined by the **Comparison** setting. The **Invert** toggle flips the final outcome of the check.

#### Inputs

* Edge data
* Point data associated with the edge's start and end points
* A set of point filter subnodes to be applied to each endpoint

#### Outputs

* A boolean result indicating whether the edge passes or fails the filter check

#### Configuration

***

**Mode**

_Controls which endpoints are evaluated and how their results are combined._

This setting determines which endpoints must meet the expected result for the edge to pass.

**Values**:

* **None**: None of the endpoint must have the expected result.
* **Both**: Both endpoints must have the expected result.
* **Any Pass**: At least one endpoint must have the expected result.
* **Start**: Start must have the expected result.
* **End**: End must have the expected result.
* **SeeSaw**: One must pass and the other must fail

**Comparison**

_The expected result of the filter, in regard to the selected mode._

This setting defines whether both endpoints (or the relevant one) must pass or fail the filters.

**Values**:

* **Pass**: The endpoint(s) must pass the filters.
* **Fail**: The endpoint(s) must fail the filters.

**bInvert**

_When enabled, inverts the final result of the filter._

If enabled, an edge that would normally pass will fail, and vice versa.

#### Usage Example

You're creating a terrain network where only edges connecting points with specific heights should exist. You set up two point filters: one for "High Points" (height > 100) and another for "Low Points" (height < 50). Then you use this edge filter subnode in "Both" mode with the "Pass" comparison to ensure that both endpoints of an edge are either high or low points. This creates a network where edges only connect similar elevation points.

#### Notes

* The subnode requires at least one point filter to be connected.
* When using "SeeSaw" mode, it's recommended to pair with filters that have a balanced pass/fail ratio for predictable behavior.
* Performance is affected by the number of point filters applied; keep them optimized.
