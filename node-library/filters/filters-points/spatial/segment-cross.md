---
description: 'In editor :: PCGEx | Filter : Segment Cross'
icon: circle-dashed
---

# Segment Cross

{% hint style="warning" %}
## AI-generated page - To be reviewed. 
While not 100% accurante, it should properly capture what it does. It stills needs to be reviewed and proofread by a human.
{% endhint %}

> Creates a filter definition that checks points against path-like data by testing if segments of the path cross or intersect with segments defined from the input points.

### Overview

This filter factory creates a condition that evaluates whether line segments formed from input points intersect with segments of path-like data (such as splines, polygons, or paths). It's useful for determining if points are near or crossing specific geometric features in your procedural content.

{% hint style="info" %}
Connects to Filter pins on processing nodes like **Filter Points** or **Filter Points By Attribute**.
{% endhint %}

### How It Works

The filter works by:

1. Taking input points and creating line segments from them (either from current point to next, or current point to previous)
2. Testing these segments against path-like data
3. Returning whether the segments cross or intersect with any segment of the path

This is particularly useful for:

* Identifying points that cross paths or boundaries
* Creating constraints where points must not cross certain lines
* Detecting intersections in network or grid layouts

### Inputs and Outputs

#### Inputs

* **Points**: Input point data to be filtered
* **Path**: Path-like data (splines, polygons, or paths) to test against

#### Outputs

* **Filter**: Boolean output indicating whether each point passes the intersection test

### Configuration

***

#### General

**Sample Inputs**

_Controls which input points are used to create segments._

Determines how the filter samples input points when creating segments for testing.

**Values**:

* **All**: All points are used to form segments
* **Even**: Only even-indexed points are used
* **Odd**: Only odd-indexed points are used
* **First**: Only the first point is used
* **Last**: Only the last point is used

**Intersection Settings**

_Tolerance and angle constraints for intersection detection._

Controls how strictly intersections are detected, including distance tolerance and minimum/maximum angles.

**Values**:

* **Tolerance**: Distance at which two edges are considered intersecting (default: 0.001)
* **Use Min Angle**: Enable minimum angle constraint for intersections
* **Min Angle**: Minimum angle between segments to be considered an intersection (in degrees)
* **Use Max Angle**: Enable maximum angle constraint for intersections
* **Max Angle**: Maximum angle between segments to be considered an intersection (in degrees)

**Direction**

_Segment direction definition._

Controls whether the segment is defined from current point to next or from current point to previous.

**Values**:

* **To Next**: Segment goes from current point to the next point in sequence (canonical)
* **To Prev**: Segment goes from current point to the previous point in sequence (inverted)

**Invert**

_When enabled, reverses the filter result._

When enabled, points that would normally pass the filter will fail, and vice versa.

**Fidelity**

_Path resolution for polygon creation._

Controls the resolution of polygon approximation when testing against splines. Higher values mean more precise but slower execution.

**Values**:

* **50**: Default resolution (recommended for most cases)

**Ignore Self**

_When enabled, prevents a collection from testing against itself._

When enabled, if a path is both input and target, it will not test against itself to avoid false positives.
