---
icon: circle-dashed
---

# Probe : Index

{% hint style="warning" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Creates a probe that connects points to a specific index, bypassing the normal search radius logic.

### Overview

This factory defines a probe that looks for a connection to a specific point index rather than searching within a radius. It's useful when you want to create deterministic connections between points based on their position in the data stream or an attribute value.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes like "Connect Points" or "Create Edges"
{% endhint %}

### How It Works

Instead of searching for nearby points within a radius, this probe directly targets a specific index. The target index can be:

* A fixed number (constant)
* A value read from an attribute
* An offset from the current point's index

The probe ignores any search radius settings and creates a direct connection to the specified index.

### Configuration

***

#### General

**Mode**

_Controls how the target index is interpreted._

When set to **Target**, the index is used directly as the connection target. When set to **One-way Offset**, the index value is added to the current point's index to determine the target. When set to **Two-way Offset**, the index value is used as both a positive and negative offset from the current point's index.

**Values**:

* **Target**: Uses the index value directly (e.g., if index = 5, connects to point at index 5)
* **One-way Offset**: Adds the index value to current point index (e.g., if current index = 3 and index = 2, connects to point at index 5)
* **Two-way Offset**: Creates connections in both directions from the offset (e.g., if current index = 3 and index = 2, connects to points at indices 1 and 5)

**Index Safety**

_How to handle out-of-bounds index values._

When set to **Ignore**, indices that exceed the point count are skipped. When set to **Tile**, out-of-bounds indices wrap around (e.g., if there are 5 points, index 7 becomes index 2). When set to **Clamp**, out-of-bounds indices are limited to the maximum valid index (e.g., if there are 5 points, index 7 becomes index 4). When set to **Yoyo**, out-of-bounds indices bounce back (e.g., if there are 5 points, index 6 becomes index 3).

**Values**:

* **Ignore**: Out of bounds indices are ignored
* **Tile**: Out of bounds indices wrap around
*
  * **Clamp**: Out of bounds indices are limited to maximum valid index
* **Yoyo**: Out of bounds indices bounce back

**Index Input**

_Determines whether the target index is a constant value or read from an attribute._

When set to **Constant**, uses the fixed value in the "Index" field. When set to **Attribute**, reads the index value from the selected attribute.

**Values**:

* **Constant**: Uses a fixed numeric value
* **Attribute**: Reads index value from point attribute

**Index (Attr)**

_The attribute containing the index values when Index Input is set to Attribute._

This setting only appears when "Index Input" is set to "Attribute".

**Index**

_The fixed index value when Index Input is set to Constant._

This setting only appears when "Index Input" is set to "Constant".

### Usage Example

Create a chain of connections from point 0 to point 1, then 1 to point 2, and so on:

1. Add a "Probe : Index" node
2. Set Mode to **One-way Offset**
3. Set Index Input to **Constant**
4. Set Index to **1**
5. Connect this probe to the "Filter" pin of a "Connect Points" node
6. This will create connections from each point to the next point in sequence (0→1, 1→2, 2→3, etc.)

### Notes

* When using offset modes, be careful with index values that might exceed your data size
* The probe ignores search radius settings and creates direct connections
* Use "Two-way Offset" to create bidirectional connections from a single point
* Combine with attribute inputs for dynamic connection patterns based on point properties

### Inputs

* **Points**: Input points to be processed
* **Filter**: Connection filter that determines which points to connect

### Outputs

* **Connections**: Output connections created by the probe
* **Points**: Modified points with new connections
