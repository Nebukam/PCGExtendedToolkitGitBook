---
description: 'In editor :: PCGEx | State : Bitmask Adjacency'
icon: circle-dashed
---

# State : Bitmask Adjacency

{% hint style="info" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> A filter factory that evaluates directional adjacency between points using bitmask collections, checking if point directions align with specified bitmasks.

### Overview

This factory creates a specialized filter that checks whether the direction from one point to another matches predefined bitmask patterns. It's designed for bulk-checking adjacency relationships in clusters or graphs, using bitwise operations to efficiently evaluate multiple conditions at once.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes like `Cluster : Filter` or `Graph : Filter`. Can be used alongside other filters to build complex adjacency logic.
{% endhint %}

### How It Works

The factory evaluates the direction from each point to its neighbors and compares that direction against predefined bitmasks. It uses dot product calculations to determine if the angle between directions falls within a specified threshold. If the check passes, it applies success bitmasks; otherwise, it can apply alternative bitmasks when configured.

### Inputs

* **Points**: The collection of points to evaluate for adjacency.
* **Neighbors**: The set of neighboring points to compare against each point.
* **Filter**: Optional input for applying additional filtering logic before adjacency checks.

### Outputs

* **Filtered Points**: Points that pass the adjacency test.
* **Bitmask Flags**: Updated bitmask values applied to points based on adjacency results.

### Configuration

***

#### Settings

**Angle**

_The maximum angle (in degrees) allowed for adjacency checks._

If the angle between two directions is less than or equal to this value, the adjacency condition passes. For example, setting this to 22.5° allows for very tight directional alignment.

**bTransformDirection**

_Whether to apply point transforms when calculating directions._

When enabled, directions are transformed using each point's local transform before comparison. This is useful when working with rotated or scaled clusters where you want to evaluate directions in world space.

**Compositions**

_A list of bitmask compositions to apply when adjacency passes._

These define the bitmasks that will be applied to points when they pass the adjacency test. Each composition can reference a collection and specify how bits should be combined.

**Collections**

_A map of bitmask collections to apply when adjacency passes._

Allows you to associate specific collections with operations to be performed on the flags. This is useful for applying different bitmasks based on various conditions or categories.

**bUseAlternativeBitmasksOnFilterFail**

_Whether to use alternative bitmasks when adjacency fails._

When enabled, this allows you to define a separate set of bitmask operations that are applied when the adjacency check fails.

**OnFailCompositions**

_A list of bitmask compositions to apply when adjacency fails._

These bitmasks are applied when the adjacency test does not pass. Only used if `bUseAlternativeBitmasksOnFilterFail` is enabled.

**OnFailCollections**

_A map of bitmask collections to apply when adjacency fails._

Similar to `Collections`, but applied when the adjacency check fails. Only active if `bUseAlternativeBitmasksOnFilterFail` is enabled.

**bInvert**

_Whether to invert the dot product check._

When enabled, the filter passes when directions do **NOT** match the bitmask criteria. This can be used to exclude certain directional relationships from consideration.

### Usage Example

Create a cluster with points that represent nodes in a graph. Use this factory to define adjacency rules where points must face toward each other within 30°. Apply bitmasks to mark these connections, then use the resulting flags to drive further processing like pathfinding or connectivity analysis.

### Notes

* This factory is optimized for bulk operations and works best with large datasets.
* The angle threshold acts as a tolerance for directional alignment.
* Bitmask collections can be shared across multiple factories for consistent behavior.
* Combine this with other filter types to create complex adjacency rules (e.g., "must face toward AND be within distance").
