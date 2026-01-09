---
icon: circle-dashed
---

# Probe : Compare

{% hint style="warning" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Creates a probe that connects points based on numeric attribute comparisons between the probing point and candidate points.

### Overview

This factory defines a comparison-based connection rule for probing operations. It evaluates whether a candidate point's attribute value meets a specified condition relative to the probing point's attribute value, and creates connections accordingly.

{% hint style="info" %}
Connects to **Probe** pins on processing nodes like "Connect Points" or "Cluster Points"
{% endhint %}

### How It Works

This probe compares numeric values from two points:

1. The **probing point** (the source of the connection)
2. Each **candidate point** being evaluated for connection

It tests if the candidate's attribute value meets a comparison condition against the probing point's attribute value. If the condition is met, a connection is created between them.

### Inputs and Outputs

#### Inputs

* **Probe**: Accepts probe configuration data
* **Points**: Input point data to be processed
* **Attributes**: Optional attribute data for comparison

#### Outputs

* **Connections**: Generated connections between points
* **Probe Result**: Status of the probe operation

### Configuration

***

#### General

**Max Connections Input**

_Controls how many connections this probe can make per point._

When set to **Constant**, use the "Max Connections" value. When set to **Attribute**, read the maximum number of connections from an attribute on the input points.

**Values**:

* **Constant**: Use a fixed number of connections per point
* **Attribute**: Read the connection limit from a point attribute

**Max Connections (Attr)**

_The attribute name to read the maximum connections from._

Only visible when "Max Connections Input" is set to **Attribute**.

**Max Connections**

_The maximum number of connections this probe can make per point._

Only visible when "Max Connections Input" is set to **Constant**.

**Attribute**

_The numeric attribute to compare between points._

This defines which values are compared. For example, if you're comparing distances, use a distance attribute.

**Comparison**

_The comparison condition used to evaluate the attribute values._

**Values**:

* **==**: Strictly Equal
* **!=**: Strictly Not Equal
* **>=**: Equal or Greater
* **<=**: Equal or Smaller
* **>**: Strictly Greater
* **<**: Strictly Smaller
* **\~=**: Nearly Equal (within tolerance)
* \*\*!\~=: Nearly Not Equal (outside tolerance)

**Tolerance**

_The tolerance used for approximate comparisons._

Only visible when using **Nearly Equal** or **Nearly Not Equal** comparisons. Controls how close values need to be to be considered equal.

**Prevent Coincidence**

_When enabled, prevents connections that are roughly in the same direction._

This helps avoid creating multiple connections between points that are very close in direction, which can lead to visual clutter or unwanted patterns.

**Coincidence Prevention Tolerance**

_Controls how close connections need to be to be considered coincidental._

Only visible when "Prevent Coincidence" is enabled. Smaller values mean stricter coincidence detection.
