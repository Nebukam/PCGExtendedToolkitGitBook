---
icon: circle-dashed
---

# Probe : Closest

{% hint style="warning" %}
## AI-generated page - To be reviewed. 
While not 100% accurante, it should properly capture what it does. It stills needs to be reviewed and proofread by a human.
{% endhint %}

> Creates a probe that looks for the closest points within a defined search radius.

### Overview

This factory defines a probing operation that searches for nearby points in space, prioritizing those that are closest to the current point. It's used to establish connections or relationships between points based on proximity.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes like "Connect Points" or "Cluster Points"
{% endhint %}

### How It Works

This probe searches for nearby points within a defined radius and selects the closest ones. It can be configured to limit how many connections are made per point, and optionally prevent connections that would result in similar directions (coincidence prevention).

### Inputs

* **Points**: Input point data to process
* **Filter**: Optional filter to apply to the probe results

### Outputs

* **Result**: Processed points with probe results

### Configuration

***

#### General

**Max Connections Input**

_Controls whether the maximum number of connections is constant or driven by an attribute._

**Values**:

* **Constant**: Use a fixed number of connections for all points.
* **Attribute**: Read the maximum number of connections from a point attribute.

**Max Connections (Attr)**

_The attribute to read the maximum number of connections from, when "Max Connections Input" is set to "Attribute"._

**Max Connections**

_The maximum number of connections to make per point, when "Max Connections Input" is set to "Constant"._

**Prevent Coincidence**

_When enabled, prevents connections that are roughly in the same direction._

**Coincidence Prevention Tolerance**

_Controls how strict coincidence prevention is. Lower values mean stricter prevention._
