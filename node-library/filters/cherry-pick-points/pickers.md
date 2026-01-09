---
icon: comment-dots
---

# Pickers

{% hint style="info" %}
### AI-generated page -- to be reviewed

While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Creates a single Picker definition that can be used to select indices from collections or arrays.

### Overview

A Picker Definition defines how to sample or pick indices from data sources. It's a specialized factory type designed for index selection operations, commonly used in conjunction with other nodes like "Picker" or "Index Picker" nodes.

{% hint style="info" %}
Connects to the **Picker** input pin of Picker-related nodes.
{% endhint %}

### How It Works

This factory defines how indices are selected from a collection. It supports both discrete index picking and relative (normalized) picking, with options for handling out-of-bounds values.

The picker can be configured to treat input values as:

* Discrete indices (0, 1, 2, ...)
* Relative values (0.0 to 1.0), which are converted to actual indices based on collection size

### Configuration

***

#### General

**Treat As Normalized**

_When enabled, relative picks are interpreted as normalized values between 0 and 1._

If enabled, input values like 0.25, 0.75 will be treated as positions within a collection rather than direct indices.

**Truncate Mode**

_Controls how fractional relative picks are converted to discrete indices when "Treat As Normalized" is enabled._

**Round**: Rounds to nearest integer (0.4 → 0, 0.6 → 1) **Floor**: Truncates toward negative infinity (0.9 → 0, -0.1 → -1) **Ceil**: Truncates toward positive infinity (0.1 → 1, -0.9 → 0)

**Safety**

_How to handle out-of-bounds index picks._

**Ignore**: Skip invalid indices (default behavior) **Tile**: Wrap around using modulo arithmetic (index 5 in collection of size 3 becomes index 2) **Clamp**: Clamp to valid range (index -1 becomes 0, index 5 becomes 2 for a 3-element collection) **Yoyo**: Mirror and bounce back (index -1 becomes 0, index 3 becomes 1 for a 3-element collection)

### Usage Example

To create a picker that selects 3 random points from a collection:

1. Create a Picker Definition node
2. Set "Treat As Normalized" to true
3. Add relative picks like 0.25, 0.5, 0.75
4. Connect it to a Picker node's "Picker" input
5. The Picker node will select the points at those normalized positions

### Notes

* Picker Definitions are typically used in combination with other picker nodes that consume them
* When "Treat As Normalized" is disabled, discrete picks are used directly as indices
* Out-of-bounds handling can be crucial when using relative picks to avoid errors
* The same Picker Definition can be reused across multiple Picker nodes for consistent selection behavior

### Inputs

* **Picker** (Input Pin): Connects to the Picker input pin of Picker-related nodes.

### Outputs

* **Picker** (Output Pin): Provides the configured picker definition for use by other nodes.
