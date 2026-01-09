---
icon: circle-dashed
---

# G-Probe : Level Set

{% hint style="info" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Creates a probe that connects points based on similarity in scalar field values, forming connections along isolines or contours.

### Overview

This probe defines how points connect to each other by comparing scalar values at their locations. It's useful for creating networks or graphs where connections are determined by shared characteristics like elevation, temperature, or any other continuous scalar attribute.

{% hint style="info" %}
Connects to **Probe** pins on graph-building nodes such as "Connect Points" or "Build Graph"
{% endhint %}

### Inputs

* **Points**: Input points to be connected
* **Attributes**: Scalar attributes used for level comparison

### Outputs

* **Connections**: Output connections between points that meet the level criteria

### How It Works

The probe compares scalar values at each point and connects points that have similar values within a defined tolerance. This creates networks of connected points that follow contours or isolines of the scalar field.

### Configuration

***

#### General

**Level Attribute**

_The attribute used to define the scalar field for comparison._

Set this to an attribute that contains continuous scalar values, such as height (Z position) or temperature. The default is set to `Position.Z`.

**Max Level Difference**

_Maximum difference in scalar values to allow a connection._

Points are connected if their scalar values differ by no more than this amount. For example, with a value of 5.0, points with Z positions of 10 and 14 will connect, but points at 10 and 16 will not.

**Normalize Levels**

_When enabled, scales all scalar values to a 0-1 range before comparison._

This allows you to compare attributes with very different ranges on an equal footing. For instance, if one attribute ranges from 0 to 1000 and another from 0 to 1, normalization ensures both are treated equally.

**Max Connections Per Point**

_Maximum number of connections each point can make._

Controls how many neighbors each point will connect to within the level tolerance. A value of 4 means each point will connect to at most 4 other points that meet the level criteria.
