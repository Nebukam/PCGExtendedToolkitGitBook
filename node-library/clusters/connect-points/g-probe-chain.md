---
icon: circle-dashed
---

# G-Probe : Chain

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Creates sequential chain connections between points based on sorting criteria, forming ordered paths or loops.

### Overview

This factory defines how points are connected in a sequential chain when building graph structures. It determines the order in which points are linked together to form paths or closed loops, based on various sorting methods.

{% hint style="info" %}
Connects to **Probe** pins on graph-building nodes like "Connect Points" or "Build Graph"
{% endhint %}

### How It Works

This probe factory sorts input points using a specified method and then connects them sequentially in that order. The resulting connections form either an open chain (from first to last) or a closed loop (connecting last back to first). The sorting criteria determine the logical flow of the chain.

### Configuration

***

#### General

**Sort Mode**

_Controls how points are ordered before creating connections._

**Values**:

* **By Attribute**: Sort by a scalar attribute value
* **By Axis Projection**: Sort by projection onto a specific axis
* **By Spatial Curve (TSP)**: Sort using a greedy traveling salesman approximation
* **By Hilbert Curve**: Sort by spatial locality using Hilbert curve indexing

**Sort Attribute**

_The scalar attribute used for sorting when "By Attribute" mode is selected._

**Example**: If you have a point cloud with a "Density" attribute, setting this to "$Density" will sort points from lowest to highest density value.

**Projection Axis**

_The axis used for projection when "By Axis Projection" mode is selected._

**Example**: Setting this to `FVector::UpVector` (0, 0, 1) will sort points by their Z-coordinate values.

**Closed Loop**

_When enabled, connects the last point back to the first point to form a closed loop._

**Example**: With 5 points sorted as A-B-C-D-E, enabling this creates connections A-B, B-C, C-D, D-E, E-A instead of just A-B-C-D-E.

### Usage Example

Create a point cloud with a "Height" attribute and use this probe factory to connect points in height order. Set the Sort Mode to "By Attribute" and the Sort Attribute to "$Height". This will create a chain that follows elevation from lowest to highest point, useful for generating terrain paths or elevation-based connectivity.

### Notes

* The "By Spatial Curve (TSP)" mode provides an approximation of the shortest path through all points, which is useful for minimizing total edge length
* "By Hilbert Curve" sorting ensures spatial locality, meaning nearby points in space are also nearby in the chain order
* When using "Closed Loop", the first and last points in the sorted sequence will be connected to form a complete cycle
* This probe factory works best when there's sufficient point density to create meaningful chains
